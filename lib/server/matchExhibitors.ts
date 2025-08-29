import { EXHIBITORS_DB, Exhibitor } from "@/lib/data/exhibitors_db";

function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\p{Diacritic}]/gu, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const STOPWORDS = new Set(
  [
    "und","oder","the","a","an","of","for","für","der","die","das","mit","in","im","on","to","zur","zum","von","den","des","bei","aus","dem","ein","eine","einer","eines","la","le","de","et","du","les","aux"
  ]
);

const CLUSTERS = {
  chip: ["chip","chips","semiconductor","semiconductors","halbleiter","wafer","foundry","fab"],
  supply: ["supply","chain","supplychain","lieferkette","lieferketten","logistics","logistik","scm","procurement","beschaffung"],
  consult: ["consult","consulting","beratung","berater","beratungshaus"],
  prodopt: [
    "prozess","prozesse","prozessoptimierung","prozess-optimierung","process","processes","processoptimization","process-optimization",
    "lean","shopfloor","oee","effizienz","efficiency","durchsatz","throughput","operations","produktion","production","manufacturing",
  ],
};

function expandWithSynonyms(tokens: string[]): string[] {
  const joined = tokens.join(" ");
  const extra: string[] = [];
  if (/supply\s*chain|lieferkett/i.test(joined)) extra.push("supply","chain","lieferkette","scm");
  if (/chip|halbleit|semicon/i.test(joined)) extra.push("chip","chips","halbleiter","semiconductor");
  if (/berat|consult/i.test(joined)) extra.push("consulting","beratung");
  if (/prozess|process|lean|shopfloor|oee|effiz|produktion|manufactur|operation/i.test(joined)) extra.push("prozessoptimierung","lean","shopfloor","oee","production","manufacturing","operations");
  return Array.from(new Set([...tokens, ...extra]));
}

function tokenize(text: string): string[] {
  return normalize(text)
    .split(" ")
    .filter((t) => t && !STOPWORDS.has(t));
}

function containsAny(set: Set<string>, list: string[]): boolean {
  return list.some((t) => set.has(t));
}

export type MatchOptions = {
  limit?: number;
  threshold?: number; // minimaler Score 0..1 (auf 0..N skaliert)
  requireConsulting?: boolean;
  requireProdopt?: boolean;
  expandSynonyms?: boolean; // default: true
};

// --- IDF Index (global) ------------------------------------------------------
type IdfIndex = Map<string, number>;
let IDF_INDEX: IdfIndex | null = null;

function buildIdfIndex(): IdfIndex {
  const df = new Map<string, number>();
  const N = EXHIBITORS_DB.length;
  for (const ex of EXHIBITORS_DB) {
    const docTokens = new Set<string>();
    tokenize(ex.name).forEach((t) => docTokens.add(t));
    (ex.keywords || []).forEach((k) => tokenize(k).forEach((t) => docTokens.add(t)));
    (ex.themes || []).forEach((k) => tokenize(k).forEach((t) => docTokens.add(t)));
    if (ex.profile) tokenize(ex.profile).forEach((t) => docTokens.add(t));
    docTokens.forEach((t) => df.set(t, (df.get(t) || 0) + 1));
  }
  const idf = new Map<string, number>();
  for (const [t, dfi] of df) {
    idf.set(t, Math.log(1 + N / (1 + dfi))); // smoothed IDF
  }
  return idf;
}

export function matchExhibitorsByKeywords(queryText: string, opts: MatchOptions = {}): Exhibitor[] {
  const limit = opts.limit ?? 10;
  const threshold = opts.threshold ?? 0.1;

  // Query vorbereiten
  let qTokens = tokenize(queryText);
  if (opts.expandSynonyms !== false) {
    qTokens = expandWithSynonyms(qTokens);
  }
  const qSet = new Set(qTokens);

  const wantsChip = containsAny(qSet, CLUSTERS.chip);
  const wantsSupply = containsAny(qSet, CLUSTERS.supply);
  const wantsConsult = opts.requireConsulting ?? containsAny(qSet, CLUSTERS.consult);
  const wantsProdopt = opts.requireProdopt ?? containsAny(qSet, CLUSTERS.prodopt);

  if (!IDF_INDEX) IDF_INDEX = buildIdfIndex();
  const idf = IDF_INDEX!;

  const scored = EXHIBITORS_DB.map((ex) => {
    const nameTokens = new Set(tokenize(ex.name));
    const keywordTokens = new Set<string>();
    (ex.keywords || []).forEach((k) => tokenize(k).forEach((t) => keywordTokens.add(t)));
    (ex.themes || []).forEach((t) => tokenize(t).forEach((x) => keywordTokens.add(x)));
    if (ex.profile) tokenize(ex.profile).forEach((t) => keywordTokens.add(t));

    // Erforderliche Cluster-Filtern: wenn Nutzer Chip/Supply erwähnt, muss Aussteller entsprechende Tokens haben
    const hasChip = containsAny(keywordTokens, CLUSTERS.chip) || containsAny(nameTokens, CLUSTERS.chip);
    const hasSupply = containsAny(keywordTokens, CLUSTERS.supply) || containsAny(nameTokens, CLUSTERS.supply);
    const hasConsult = containsAny(keywordTokens, CLUSTERS.consult) || containsAny(nameTokens, CLUSTERS.consult);
    const hasProdopt = containsAny(keywordTokens, CLUSTERS.prodopt) || containsAny(nameTokens, CLUSTERS.prodopt);
    if ((wantsChip && !hasChip) || (wantsSupply && !hasSupply) || (wantsConsult && !hasConsult) || (wantsProdopt && !hasProdopt)) {
      return { ex, score: -1 };
    }

    // TF-IDF gewichtete Treffer
    let hitsKeywords = 0;
    let hitsName = 0;
    qSet.forEach((t) => {
      const w = idf.get(t) ?? 1;
      if (keywordTokens.has(t)) hitsKeywords += 1 * w;
      if (nameTokens.has(t)) hitsName += 1 * (w * 0.5); // Name etwas niedriger gewichten
    });

    // Phrase-Boosts
    const exAll = `${normalize(ex.name)} ${normalize((ex.keywords || []).join(" "))} ${normalize((ex.themes || []).join(" "))} ${normalize(ex.profile || "")}`;
    let phraseBoost = 0;
    if (/supply\s*chain|lieferkett/.test(qTokens.join(" ")) && /(supply\s*chain|lieferkett)/.test(exAll)) phraseBoost += 3;
    if (/chip|halbleit|semicon/.test(qTokens.join(" ")) && /(chip|halbleit|semicon)/.test(exAll)) phraseBoost += 3;

    // Consulting- oder ProdOpt-Boost, wenn beides erwähnt
    if (wantsConsult && hasConsult) phraseBoost += 2;
    if (wantsProdopt && hasProdopt) phraseBoost += 2;
    const scoreRaw = 2.5 * hitsKeywords + 1 * hitsName + phraseBoost;
    return { ex, score: scoreRaw / Math.max(1, qSet.size) };
  })
    .filter(({ score }) => score >= threshold)
    .sort((a, b) => b.score - a.score)
    // leichte Diversifizierung: gleiche Scores -> stabil durch Name-Hash mischen
    .map((x) => ({
      ...x,
      jitter: (x.ex.id.split("").reduce((h, c) => h + c.charCodeAt(0), 0) % 7) / 1000,
    }))
    .sort((a, b) => b.score + b.jitter - (a.score + a.jitter))
    .slice(0, limit)
    .map(({ ex }) => ex);

  return scored;
}


