import { Exhibitor, EXHIBITORS_DB } from "@/lib/data/exhibitors_db";
import { buildOrLoadIndex, embedQuery, cosine } from "./embeddings";

export type StructuredQuery = {
  keywords: string[]; // einzelne Tokens/Begriffe
  phrases?: string[]; // zusammenhängende Phrasen, die möglichst im Dokument vorkommen sollen
  domains?: string[]; // optional, zukünftige Taxonomie
  companyType?: string; // optional
  negatives?: string[]; // Begriffe, die nicht vorkommen sollen
};

export type Ranked = { ex: Exhibitor; score: number };

function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\p{Diacritic}]/gu, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const STOPWORDS = new Set<string>([
  "und","oder","the","a","an","of","for","für","der","die","das","mit","in","im","on","to","von","den","des","bei","aus","dem","ein","eine","einer","eines","co","ltd","gmbh","group","company","solutions","solution","system","systeme","international","global","limited","inc","ag","kg","srl","spa","llc","ltda","sa"
]);

function tokenize(text: string): string[] {
  return normalize(text).split(" ").filter((t) => t && !STOPWORDS.has(t));
}

// --- BM25 light (okapi) über Felder keywords/themes/profile -----------------
function bm25Score(query: string[], ex: Exhibitor) {
  const fields = [
    { text: (ex.keywords || []).join(" "), w: 3 },
    { text: (ex.themes || []).join(" "), w: 2 },
    { text: ex.profile || "", w: 1 },
  ];
  let score = 0;
  for (const f of fields) {
    const docTokens = tokenize(f.text);
    const len = docTokens.length || 1;
    for (const q of query) {
      const tf = docTokens.filter((t) => t === q).length;
      if (!tf) continue;
      // stark vereinfachtes BM25 (ohne globale IDF, TF-saturation)
      const tfw = (tf / len) * f.w;
      score += tfw;
    }
  }
  return score;
}

// --- Embedding-ähnliches Signal (cheap): Jaccard über Shingle-Set ------------
function jaccardShingles(query: string[], ex: Exhibitor) {
  const text = `${ex.name} ${(ex.keywords || []).join(" ")} ${(ex.themes || []).join(" ")} ${ex.profile || ""}`;
  const toks = new Set(tokenize(text));
  const qset = new Set(query);
  let inter = 0;
  qset.forEach((t) => { if (toks.has(t)) inter++; });
  const union = toks.size + qset.size - inter || 1;
  return inter / union;
}

// RRF-Fusion + MMR Diversifizierung ------------------------------------------
export function searchRrfMmr(structQ: StructuredQuery, topK = 10): Exhibitor[] {
  const q = Array.from(new Set(structQ.keywords.flatMap((k) => tokenize(k))));
  const phrases = (structQ.phrases || []).map((p) => normalize(p)).filter(Boolean);
  const negatives = new Set((structQ.negatives || []).map((n) => normalize(n)));
  const domainTerms = new Set((structQ.domains || []).flatMap((d) => tokenize(d)));
  const companyTerms = new Set(structQ.companyType ? tokenize(structQ.companyType) : []);

  // einfache Synonyme für häufige Filterbegriffe
  const COMPANY_SYNONYMS: Record<string, string[]> = {
    consulting: ["consult", "consulting", "beratung", "berater", "beratungshaus"],
    manufacturer: ["hersteller", "manufactur", "manufacturer", "produzent", "producer"],
  };
  const DOMAIN_SYNONYMS: Record<string, string[]> = {
    manufacturing: ["manufacturing", "produktion", "shopfloor", "lean", "oee", "operations"],
    battery: ["batterie", "battery", "akkus", "akku", "cell", "zelle", "pack"],
    semiconductor: ["halbleiter", "semiconductor", "chip", "chips"],
    supplychain: ["supply", "chain", "lieferkette", "scm"],
  };

  function expandTerms(src: Set<string>, dict: Record<string, string[]>) {
    const out = new Set<string>(src);
    src.forEach((t) => {
      Object.entries(dict).forEach(([k, arr]) => {
        if (t.includes(k)) arr.forEach((a) => out.add(a));
      });
    });
    return out;
  }

  const expandedCompany = expandTerms(companyTerms, COMPANY_SYNONYMS);
  const expandedDomains = expandTerms(domainTerms, DOMAIN_SYNONYMS);

  // Vorfilter negatives
  const candidates = EXHIBITORS_DB.filter((ex) => {
    // nur profil-Indexierte zulassen, wenn Embeddings genutzt werden; ansonsten alle
    const hay = normalize(`${ex.name} ${(ex.keywords || []).join(" ")} ${(ex.themes || []).join(" ")} ${ex.profile || ""}`);
    for (const n of negatives) if (hay.includes(n)) return false;
    if (phrases.length > 0) {
      // Mindestens eine Phrase muss als Substring vorkommen, sonst verwerfen
      const ok = phrases.some((ph) => hay.includes(ph));
      if (!ok) return false;
    }
    // CompanyType-Anforderung: mind. ein Begriff aus expandedCompany
    if (expandedCompany.size > 0) {
      const ok = Array.from(expandedCompany).some((t) => hay.includes(t));
      if (!ok) return false;
    }
    // Domains: zumindest ein Domain-Begriff muss vorkommen
    if (expandedDomains.size > 0) {
      const ok = Array.from(expandedDomains).some((t) => hay.includes(t));
      if (!ok) return false;
    }
    return true;
  });

  // Lexikalisches Signal
  const bm = new Map<string, number>();
  candidates.forEach((ex) => bm.set(ex.id, bm25Score(q, ex)));

  // Semantisches Ersatz-Signal (Jaccard)
  const sem = new Map<string, number>();
  candidates.forEach((ex) => sem.set(ex.id, jaccardShingles(q, ex)));

  // RRF (k=60)
  const k = 60;
  const sortedBm = [...candidates].sort((a, b) => (bm.get(b.id)! - bm.get(a.id)!));
  const sortedSem = [...candidates].sort((a, b) => (sem.get(b.id)! - sem.get(a.id)!));
  const ranksBm = new Map<string, number>();
  const ranksSem = new Map<string, number>();
  sortedBm.forEach((ex, i) => ranksBm.set(ex.id, 1 / (k + i + 1)));
  sortedSem.forEach((ex, i) => ranksSem.set(ex.id, 1 / (k + i + 1)));

  const fused: Ranked[] = candidates.map((ex) => {
    const score = (ranksBm.get(ex.id) || 0) + (ranksSem.get(ex.id) || 0);
    // Keyword-Präsenz prüfen (hartes Signal): mind. ein Query-Token muss in keywords/themes stehen, sonst Penalty
    const kwSet = new Set(tokenize((ex.keywords || []).join(" ")));
    const thSet = new Set(tokenize((ex.themes || []).join(" ")));
    let kwHits = 0;
    q.forEach((t) => { if (kwSet.has(t)) kwHits++; });
    let thHits = 0;
    q.forEach((t) => { if (thSet.has(t)) thHits++; });
    let adjusted = score;
    if (kwHits === 0 && thHits === 0) adjusted *= 0.35; // starke Abwertung, wenn nur Profil matcht
    if (kwHits > 0) adjusted += 0.01 * kwHits; // leichter Boost bei Keyword-Treffern
    // Phrase-Boost, wenn komplette Phrase in keywords/themes/profile vorkommt
    if (phrases.length > 0) {
      const hayFull = normalize(`${(ex.keywords || []).join(" ")} ${(ex.themes || []).join(" ")} ${ex.profile || ""}`);
      let pHits = 0; phrases.forEach((ph) => { if (hayFull.includes(ph)) pHits++; });
      if (pHits > 0) adjusted += 0.03 * pHits;
    }
    return { ex, score: adjusted };
  }).sort((a, b) => b.score - a.score);

  // MMR Diversifizierung (lambda)
  const lambda = 0.7;
  const picked: Ranked[] = [];
  const pool = [...fused];
  while (picked.length < topK && pool.length) {
    let bestIdx = 0;
    let bestVal = -Infinity;
    for (let i = 0; i < pool.length; i++) {
      const cand = pool[i];
      let sim = 0;
      for (const p of picked) {
        const a = normalize(`${cand.ex.name} ${cand.ex.profile || ""}`);
        const b = normalize(`${p.ex.name} ${p.ex.profile || ""}`);
        const aset = new Set(a.split(" ").filter(Boolean));
        const bset = new Set(b.split(" ").filter(Boolean));
        let inter = 0;
        aset.forEach((t) => { if (bset.has(t)) inter++; });
        const union = aset.size + bset.size - inter || 1;
        sim = Math.max(sim, inter / union);
      }
      const val = lambda * cand.score - (1 - lambda) * sim;
      if (val > bestVal) { bestVal = val; bestIdx = i; }
    }
    picked.push(pool.splice(bestIdx, 1)[0]);
  }

  return picked.map((p) => p.ex);
}

// Variante mit echten Embeddings; fällt auf RRF light zurück, wenn kein Index/API
export async function searchRrfMmrWithEmb(structQ: StructuredQuery, topK = 10): Promise<Exhibitor[]> {
  const index = await buildOrLoadIndex();
  const qvec = await embedQuery(structQ.keywords.join(" "));
  if (!index || !qvec) {
    // Fallback auf Light, falls kein Profil-Index vorhanden ist
    return searchRrfMmr(structQ, topK);
  }
  // Kandidaten nur aus indexierten Docs
  const indexedIds = new Set(index.docs.map((d) => d.id));
  const candidates = EXHIBITORS_DB.filter((ex) => indexedIds.has(ex.id));
  const sem = candidates.map((ex) => {
    const vd = index.docs.find((d) => d.id === ex.id);
    const sc = vd ? cosine(qvec, vd.vector) : 0;
    return { ex, score: sc } as Ranked;
  }).sort((a,b)=>b.score-a.score);
  // RRF Fusion zwischen BM25-Light Reihenfolge und embedding Reihenfolge
  const k = 60;
  // Für Embedding-Variante nutzen wir die lexikale Reihenfolge aus searchRrfMmr als Basis
  const baseLex = searchRrfMmr(structQ, Math.max(topK*3, 30));
  const ranksBase = new Map<string, number>();
  baseLex.forEach((ex, i) => ranksBase.set(ex.id, 1/(k+i+1)));
  const ranksEmb = new Map<string, number>();
  sem.forEach((r, i) => ranksEmb.set(r.ex.id, 1/(k+i+1)));
  const fused = candidates.map((ex) => ({ ex, score: (ranksBase.get(ex.id)||0)+(ranksEmb.get(ex.id)||0) }))
    .sort((a,b)=>b.score-a.score)
    .map((r)=>r.ex);
  // MMR auf fused
  const lambda = 0.7;
  const picked: Exhibitor[] = [];
  const pool = [...fused];
  while (picked.length < topK && pool.length) {
    let bestIdx = 0;
    let bestVal = -Infinity;
    for (let i=0;i<pool.length;i++){
      const cand = pool[i];
      let sim = 0;
      for (const p of picked){
        const a = tokenize(`${cand.name} ${cand.profile||""}`);
        const b = tokenize(`${p.name} ${p.profile||""}`);
        const aset = new Set(a); const bset = new Set(b);
        let inter=0; aset.forEach(t=>{ if(bset.has(t)) inter++; });
        const union = aset.size + bset.size - inter || 1;
        sim = Math.max(sim, inter/union);
      }
      const baseScore = (ranksBase.get(cand.id)||0)+(ranksEmb.get(cand.id)||0);
      const val = lambda*baseScore - (1-lambda)*sim;
      if(val>bestVal){bestVal=val;bestIdx=i;}
    }
    picked.push(pool.splice(bestIdx,1)[0]);
  }
  return picked;
}


