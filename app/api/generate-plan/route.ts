import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
// Mailversand temporär entfernt – PDF wird direkt zurückgegeben
import { renderPlanToBuffer } from "@/lib/pdf/renderPlan";
import OpenAI from "openai";
import { EXHIBITORS_DB, Exhibitor } from "@/lib/data/exhibitors_db";
import { selectEventsForUser } from "@/lib/server/events";
import nodemailer from "nodemailer";




const schema = z.object({
  email: z.string().email().optional(),
  lang: z.enum(["de", "en"]).optional(),
  data: z.object({
    name: z.string().optional().default(""),
    email: z.string().optional().default(""),
    role: z.string().nullable(),
    goal: z.string().nullable(),
    exhibitorsText: z.string().optional().default(""),
    days: z.array(z.string()),
    mustSee: z.array(z.string()).max(3),
  }),
});

type PromptItem = { title: string; prompt: string };



function buildPrompts(input: z.infer<typeof schema>["data"], lang: "de" | "en"): PromptItem[] {
  const unknownRole = lang === "de" ? "Unbekannt" : "Unknown";
  const unknownGoal = lang === "de" ? "Unbekannt" : "Unknown";
  const roleOut = input.role ?? unknownRole;
  const goalOut = input.goal ?? unknownGoal;
  const promptDe = `Aufgabe:
Erzeuge aus Rolle und Messeziel einen ultra-kompakten Action Plan auf Deutsch. Nutze ausschließlich diese Eingaben. Bullets im Objekt-Verb-Stil (Objekt zuerst, Verb am Ende), max. 12 Wörter, kein Punkt am Ende. Verwende das Bullet-Zeichen „• “. Gib nur das unten definierte Format aus, ohne Zusatztexte oder Platzhalter. Sortiere Bullets nach Impact. Vermeide Doppelungen.
Eingaben:
    •    Rolle: ${roleOut}
    •    Ziel: ${goalOut}
Ausgabeformat (streng, exakt einhalten):
Titel: Action Plan – ${roleOut} | Ziel: ${goalOut}
Action Plan:
Vor:
• <max. 3 Kernbullets>
• <…>
• <…>
Während:
• <max. 5 Kernbullets>
• <…>
• <…>
• <…>
• <…>
Nach:
• <max. 3 Kernbullets>
• <…>
• <…>
KPIs – Top 3:
• <KPI 1, messbar und realistisch>
• <KPI 2, messbar und realistisch>
• <KPI 3, messbar und realistisch>
Regeln (anwenden, nicht ausgeben):
    •    Jede Zeile mit Verb am Ende (z. B. „RFQ-Fragenkatalog vorbereiten“)
    •    Zahlen/Fristen nutzen (Top-3, 48 Stunden, 14 Tage)
    •    Realistische KPIs je Messetag wählen (nicht kumuliert), an Rolle/Ziel anpassen
    ◦    C-Level: 1–3 High-Impact KPIs (z. B. Exklusivtermine, Pilotentscheidung)
    ◦    Bereichsleitung / PM / Spezialist: 3–5 umsetzbare KPIs (Demos, PoCs, Schnittstellen)
    ◦    Standortleitung: 2–4 KPIs zu Betriebssicherheit/SLAs
    ◦    Studierende / Young Professional: 3–5 KPIs (HR-Gespräche, Follow-ups, Bewerbungen)
    ◦    Presse / Medien: 2–4 KPIs (Interviewslots, O-Töne, Veröffentlichungen)
    •    Ziel-spezifische KPI-Orientierung (Beispiele, nicht ausgeben):
◦    Produkte vergleichen: 3 Demos testen, 1 Vergleichsmatrix finalisieren, 2 Referenzen sprechen
    ◦    Partner & Lieferanten finden: 2 qualifizierte Lieferantengespräche, 1 RFQ starten, 1 Pilottermin fixieren
    ◦    Tech-Insights & Demos erleben: 4 Demos testen, 1 PoC-Hypothese definieren, 2 Roadmap-Zugeständnisse sichern
    ◦    Karriere & Jobs: 5 HR-Gespräche führen, 3 Follow-ups senden, 2 Bewerbungen einreichen
    ◦    Medienarbeit: 2 Interviewslots sichern, 1 Exklusivzitat erhalten, 1 Veröffentlichung planen
    ◦    Inspiration & Überblick: 5 Highlights dokumentieren, 3 Trends priorisieren, 1 Entscheidungsempfehlung formulieren
    •    Keine Marken, keine Füllwörter, keine Wiederholungen, nur Wichtigstes
    •    Jede Zeile trimmen, max. 12 Wörter, keine Endpunkte`;
  const promptEn = `Task:
Create an ultra-compact action plan strictly from role and fair goal. Use only these inputs. Bullets in object-verb style (object first, verb at the end), max 12 words, no period. Use the bullet character "• ". Output exactly the format below, no extra text or placeholders. Sort bullets by impact. Avoid duplicates.
Inputs:
    •    Role: ${roleOut}
    •    Goal: ${goalOut}
Output format (strict, exact):
Title: Action plan – ${roleOut} | Goal: ${goalOut}
Action plan:
Before:
• <max. 3 core bullets>
• <…>
• <…>
During:
• <max. 5 core bullets>
• <…>
• <…>
• <…>
• <…>
After:
• <max. 3 core bullets>
• <…>
• <…>
KPIs – Top 3:
• <KPI 1, measurable and realistic>
• <KPI 2, measurable and realistic>
• <KPI 3, measurable and realistic>
Rules (apply, do not output):
    •    Each line ends with the verb (e.g., "prepare RFQ question set")
    •    Use numbers/deadlines (Top-3, 48 hours, 14 days)
    •    Realistic per-day KPIs, adapted to role/goal
    ◦    C-level: 1–3 high-impact KPIs (exclusive meetings, pilot decision)
    ◦    Dept head / PM / Specialist: 3–5 actionable KPIs (demos, PoCs, interfaces)
    ◦    Plant/site lead: 2–4 KPIs on uptime/SLAs
    ◦    Students / Young professional: 3–5 KPIs (HR talks, follow-ups, applications)
    ◦    Press / Media: 2–4 KPIs (interviews, quotes, publications)
    •    No brands, no filler, only essentials
    •    Trim each line, max 12 words, no periods`;
  return [
    {
      title: lang === "de" ? "Besuchsstrategie" : "Visit strategy",
      prompt: lang === "de" ? promptDe : promptEn,
    },
    // Exhibitor sections are built from the DB below
  ];
}

export async function POST(req: NextRequest) {
  try {
    console.info("[generate-plan] START");
    const parsed = schema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json({ error: "Ungültige Eingaben" }, { status: 400 });
    }
    const { data, lang: langParam } = parsed.data;
    const acceptHeader = (req.headers.get("accept-language") || "").split(",")[0] || "";
    const fallbackLang = acceptHeader.startsWith("de") ? "de" : "en";
    const lang = ((langParam ?? fallbackLang) as "de" | "en");
    console.info(`[generate-plan] Sprache gewählt: ${lang} (param=${langParam ?? "-"}, accept=${acceptHeader || "-"})`);

    const openaiApiKey = process.env.OPENAI_API_KEY;
    if (!openaiApiKey) {
      return NextResponse.json({ error: "OPENAI_API_KEY fehlt" }, { status: 500 });
    }

    const client = new OpenAI({ apiKey: openaiApiKey });
    const supabaseUrl = process.env.SUPABASE_URL || "";
    const supabaseAnon = process.env.SUPABASE_ANON_KEY || "";
    const supabase = supabaseUrl && supabaseAnon ? createClient(supabaseUrl, supabaseAnon) : null;
    const EXTRACTOR_MODEL = process.env.EXTRACTOR_MODEL || (process.env.USE_GPT5_NANO === "1" ? "gpt-5-nano" : "gpt-4o-mini");
    const SECTIONS_MODEL = process.env.SECTIONS_MODEL || (process.env.USE_GPT5_NANO === "1" ? "gpt-5-nano" : "gpt-4o-mini");
    const VALIDATION_MODEL = process.env.VALIDATION_MODEL || "gpt-5";
    // Aussteller-Matching basierend auf Frage 3 (Freitext) + Must-see
    const interestText = `${data.exhibitorsText || ""} ${data.mustSee.join(" ")}`.trim();
    const gatesEnabled = (process.env.INTENT_GATES ?? "on").toLowerCase() !== "off";
    // Heuristik: Wenn Benutzer Beratung/Optimierung erwähnt → harte Anforderungen setzen
    const requireConsulting = /berat|consult/i.test(interestText);
    const requireProdopt = /prozess|process|lean|shopfloor|oee|effiz|produktion|manufactur|operation/i.test(interestText);
    // GPT-gestützte Keyword-Extraktion (zuerst, ohne zusätzliche Begriffe)
    let augmentedQuery = interestText;
    let extractedFlags = gatesEnabled ? { requireConsulting, requireProdopt } : { requireConsulting: false, requireProdopt: false };
    let structPhrases: string[] = [];
    let structDomains: string[] | undefined = undefined;
    let structCompany: string | undefined = undefined;
    try {
      if (openaiApiKey && interestText) {
        console.info(`[generate-plan] Extractor → ${EXTRACTOR_MODEL} (Keywords/Phrases, lang=${lang}) …`);
        console.time("extractor_gpt5");
        const extractor = await client.chat.completions.create({
          model: EXTRACTOR_MODEL,
          messages: [
            {
              role: "system",
              content:
                lang === "de"
                  ? "Extrahiere aus der Nutzeranfrage streng JSON mit Feldern: keywords (array of strings), requireConsulting (bool), requireProdopt (bool). Keine Erklärungen, nur JSON. Verwende ausschließlich Begriffe aus der Anfrage (keine neuen Begriffe erfinden). Korrigiere nur Tippfehler und schreibe Synonyme (auch englisch/deutsch übergreifend), damit die Datenbanksuche robust ist."
                  : "Extract strictly JSON from the user query with fields: keywords (array of strings), requireConsulting (bool), requireProdopt (bool). No explanations, JSON only. Use only terms from the input (no new concepts). Fix typos and add synonyms (cross German/English) so database keyword search is robust.",
            },
            {
              role: "user",
              content:
                lang === "de"
                  ? `Nutzeranfrage: "${interestText}". Liefere nur JSON. Beispiel: {"keywords":["supply chain","lean"],"requireConsulting":true,"requireProdopt":true}`
                  : `User query: "${interestText}". Return JSON only. Example: {"keywords":["supply chain","lean"],"requireConsulting":true,"requireProdopt":true}`,
            },
          ],
        });
        const raw = extractor.choices[0]?.message?.content ?? "{}";
        const jsonStart = raw.indexOf("{");
        const jsonEnd = raw.lastIndexOf("}");
        const jsonSafe = jsonStart >= 0 && jsonEnd >= 0 ? raw.slice(jsonStart, jsonEnd + 1) : "{}";
        const parsed = JSON.parse(jsonSafe) as {
          keywords?: unknown;
          synonyms?: unknown;
          phrases?: unknown;
          companyType?: unknown;
          domains?: unknown;
          requireConsulting?: unknown;
          requireProdopt?: unknown;
        };
        const kw = Array.isArray(parsed.keywords)
          ? (parsed.keywords as unknown[]).filter((x): x is string => typeof x === "string")
          : [];
        const syn = Array.isArray(parsed.synonyms)
          ? (parsed.synonyms as unknown[]).filter((x): x is string => typeof x === "string")
          : [];
        const phrases = Array.isArray(parsed.phrases)
          ? (parsed.phrases as unknown[]).filter((x): x is string => typeof x === "string")
          : [];
        const companyType = typeof parsed.companyType === "string" ? parsed.companyType : undefined;
        const domains = Array.isArray(parsed.domains)
          ? (parsed.domains as unknown[]).filter((x): x is string => typeof x === "string")
          : undefined;
        const rc = typeof parsed.requireConsulting === "boolean" ? (parsed.requireConsulting as boolean) : false;
        const rp = typeof parsed.requireProdopt === "boolean" ? (parsed.requireProdopt as boolean) : false;
        augmentedQuery = [...kw, ...syn].join(" ") || interestText;
        extractedFlags = gatesEnabled
          ? { requireConsulting: (requireConsulting || rc), requireProdopt: (requireProdopt || rp) }
          : { requireConsulting: false, requireProdopt: false };
        // Phrasen in den StructuredQuery übernehmen
        structPhrases = phrases;
        structDomains = domains;
        structCompany = companyType;
        console.timeEnd("extractor_gpt5");
        console.info(`[generate-plan] Extractor Ergebnis: keywords=${kw.length+syn.length}, phrases=${phrases.length}, domains=${domains?.length||0}, companyType=${companyType||"-"}`);
      }
    } catch (e) {
      console.warn("[generate-plan] Extractor Fehler, fahre mit Heuristik fort:", e);
      // still use heuristic-only query
    }

    // 1) Vollständige DB in Chunks an gpt-5 validieren (parallel), je Chunk max. 150
    const CHUNK_SIZE = Math.max(50, parseInt(process.env.CHUNK_SIZE || "150", 10) || 150);
    const DEFAULT_TOP_N = Math.max(5, parseInt(process.env.DEFAULT_TOP_N || "12", 10) || 12);
    console.info(`[generate-plan] Parallel-Validierung → ${VALIDATION_MODEL}, Chunkgröße=${CHUNK_SIZE} …`);
    const allPayload = EXHIBITORS_DB.map((m) => ({
      id: m.id,
      name: m.name,
      profile: m.profile || "",
      keywords: m.keywords || [],
      themes: m.themes || [],
      location: `${(m.location?.type||"").trim()} ${(m.location?.hallOrPlace||"").trim()} ${(m.location?.booth||"").trim()}`.trim(),
    }));
    const chunks: typeof allPayload[] = [];
    for (let i = 0; i < allPayload.length; i += CHUNK_SIZE) chunks.push(allPayload.slice(i, i + CHUNK_SIZE));
    console.info(`[generate-plan] Anzahl Chunks: ${chunks.length}`);

    async function validateChunk(idx: number, payload: typeof allPayload[0][]): Promise<string[]> {
      console.info(`[generate-plan] Chunk ${idx+1}/${chunks.length} → ${VALIDATION_MODEL} (Entities=${payload.length}) …`);
      const comp = await client.chat.completions.create({
        model: VALIDATION_MODEL,
        messages: [
          { role: "system", content: "Wähle aus dieser Ausstellerliste nur diejenigen, die STRIKT zur Nutzeranfrage passen. Antworte NUR JSON: {\"selected_ids\":[id,...]}. Wenn keiner passt, gib {\"selected_ids\":[]} zurück." },
          { role: "user", content: `Nutzeranfrage (Frage 3): ${interestText || augmentedQuery}\nPhrasen: ${JSON.stringify(structPhrases || [])}\nAussteller: ${JSON.stringify(payload)}` },
        ],
      });
      const raw = comp.choices[0]?.message?.content || "{}";
      const s = raw.indexOf("{"); const e = raw.lastIndexOf("}");
      const json = s>=0 && e>=0 ? raw.slice(s,e+1) : "{}";
      try {
        const parsed = JSON.parse(json) as { selected_ids?: unknown };
        const ids = Array.isArray(parsed.selected_ids) ? (parsed.selected_ids as unknown[]).filter((x): x is string => typeof x === "string") : [];
        console.info(`[generate-plan] Chunk ${idx+1} Auswahl: ${ids.length}`);
        return ids;
      } catch {
        console.warn(`[generate-plan] Chunk ${idx+1} JSON-Parse fehlgeschlagen`);
        return [];
      }
    }

    const chunkResults = await Promise.all(chunks.map((c, i) => validateChunk(i, c)));
    const selectedIdsSet = new Set<string>(chunkResults.flat());

    // 2) Finaler Merge-Prompt: beste N auswählen
    let finalMatched: Exhibitor[] = [];
    if (selectedIdsSet.size > 0) {
      const selectedPayload = allPayload.filter((p) => selectedIdsSet.has(p.id));
      console.info(`[generate-plan] Finaler Merge-Prompt → ${VALIDATION_MODEL} (Kandidaten=${selectedPayload.length}) …`);
      const final = await client.chat.completions.create({
        model: VALIDATION_MODEL,
        messages: [
          { role: "system", content: "Ranke die passendsten Aussteller zur Anfrage. Antworte NUR JSON: {\"ranked_ids\":[id,...]}." },
          { role: "user", content: `Nutzeranfrage (Frage 3): ${interestText || augmentedQuery}\nKandidaten: ${JSON.stringify(selectedPayload)}\nErwünschte Anzahl: ${DEFAULT_TOP_N}` },
        ],
      });
      const raw = final.choices[0]?.message?.content || "{}";
      const s = raw.indexOf("{"); const e = raw.lastIndexOf("}");
      const json = s>=0 && e>=0 ? raw.slice(s,e+1) : "{}";
      try {
        const parsed = JSON.parse(json) as { ranked_ids?: unknown };
        const ids = Array.isArray(parsed.ranked_ids) ? (parsed.ranked_ids as unknown[]).filter((x): x is string => typeof x === "string") : [];
        const chosenList = (ids.length ? ids : Array.from(selectedIdsSet)).slice(0, DEFAULT_TOP_N);
        finalMatched = chosenList.map((id) => EXHIBITORS_DB.find((e) => e.id === id)).filter((x): x is Exhibitor => Boolean(x));
      } catch {
        const chosenList = Array.from(selectedIdsSet).slice(0, DEFAULT_TOP_N);
        finalMatched = chosenList.map((id) => EXHIBITORS_DB.find((e) => e.id === id)).filter((x): x is Exhibitor => Boolean(x));
      }
    } else {
      console.info("[generate-plan] Keine passenden Aussteller in den Chunks gefunden.");
      finalMatched = [];
    }

    // Must-See aus Frage 5 zwingend aufnehmen
    try {
      const mustList = (data.mustSee || []).map((s) => s.trim()).filter(Boolean);
      const normalize = (t: string) => t
        .toLowerCase()
        .normalize("NFKD").replace(/[\p{Diacritic}]/gu, "")
        .replace(/[^a-z0-9]+/g, " ")
        .replace(/\b(gmbh|ag|kg|inc|llc|ltd|srl|spa|sa)\b/g, " ")
        .trim();
      const mustNorm = mustList.map(normalize);
      if (mustNorm.length > 0) {
        const requiredSet = new Map<string, typeof EXHIBITORS_DB[number]>();
        for (const ex of EXHIBITORS_DB) {
          const nameN = normalize(ex.name || "");
          const kwN = normalize((ex.keywords || []).join(" "));
          const themesN = normalize((ex.themes || []).join(" "));
          for (const q of mustNorm) {
            if (!q) continue;
            const direct = nameN === q || nameN.includes(q) || q.includes(nameN);
            const kwHit = kwN.includes(q) || themesN.includes(q);
            if (direct || kwHit) {
              requiredSet.set(ex.id, ex);
              break;
            }
          }
        }
        if (requiredSet.size > 0) {
          const byId = new Map<string, typeof EXHIBITORS_DB[number]>();
          // erst Pflicht, dann restliche (Reihenfolge bleibt später nach Halle sortiert)
          Array.from(requiredSet.values()).forEach((r) => byId.set(r.id, r));
          finalMatched.forEach((f) => byId.set(f.id, f));
          finalMatched = Array.from(byId.values());
          console.info(`[generate-plan] Must-See hinzugefügt: ${requiredSet.size} verpflichtend`);
        } else {
          console.info("[generate-plan] Keine Must-See-Matches gefunden (Namensabweichung?)");
        }
      }
    } catch {}

    // Empfehlungen-Abschnitt direkt aus DB aufbauen (keine GPT-Halluzinationen)
    const formatLoc = (m: { location: { type: string; hallOrPlace: string; booth: string } }) => {
      const { type, hallOrPlace, booth } = m.location;
      // Nur aus DB-Feldern zusammensetzen, keine zusätzlichen Wörter wie "Halle" einfügen
      const t = (type || "").trim();
      const hall = (hallOrPlace || "").trim();
      const bt = (booth || "").trim();
      const parts: string[] = [];
      if (t) parts.push(t);
      if (hall) parts.push(hall);
      if (bt) parts.push(bt);
      return parts.join(" ").trim();
    };

    // Nach Halle/Ort sortieren, damit der Rundgang effizient ist
    const sortedFinal = [...finalMatched].sort((a, b) => {
      const la = a.location || ({} as any);
      const lb = b.location || ({} as any);
      const ka = `${(la.type||"").toLowerCase()}|${la.hallOrPlace||""}|${la.booth||""}`;
      const kb = `${(lb.type||"").toLowerCase()}|${lb.hallOrPlace||""}|${lb.booth||""}`;
      return ka.localeCompare(kb, "de", { numeric: true, sensitivity: "base" });
    });

    console.info(`[generate-plan] Formatiere Ausstellerabschnitt (Anzahl=${sortedFinal.length}, lang=${lang}) …`);
    const exhibitorsOverviewContent = sortedFinal
      .map((m, idx) => `${idx + 1}. ${m.name} — ${formatLoc(m)}`)
      .join("\n");

    const exhibitorsSectionContent = sortedFinal
      .map((m, idx) => {
        const website = (m as any).website ? String((m as any).website) : "";
        const siteLine = website ? `\nWebsite: ${website}` : "";
        return `${idx + 1}. **${m.name}**\n${formatLoc(m)}\n\n${m.profile || ""}${siteLine}`;
      })
      .join("\n\n");

    const prompts = buildPrompts({ ...data }, lang);

    // Nacheinander, um pro Frage gezielt zu generieren
    const sections: { title: string; content: string }[] = [];
    for (const p of prompts) {
      console.info(`[generate-plan] Generiere Abschnitt: ${p.title} → ${SECTIONS_MODEL} (lang=${lang}) …`);
      console.time(`section_${p.title}`);
      const completion = await client.chat.completions.create({
        model: SECTIONS_MODEL,
        messages: [
          { role: "system", content: lang === "de" ? "Du bist ein Messe- und Event-Planungsassistent. Antworte prägnant auf Deutsch." : "You are a trade fair planning assistant. Answer concisely in English." },
          { role: "user", content: p.prompt },
        ],
      });
      const text = completion.choices[0]?.message?.content ?? "";
      console.timeEnd(`section_${p.title}`);
      sections.push({ title: p.title, content: text });
    }

    // Events auswählen und als eigenen Abschnitt hinzufügen
    const selectedEvents = await selectEventsForUser(data.days, interestText, client);
    if (selectedEvents.length > 0) {
      const eventsBlock = selectedEvents
        .sort((a, b) => `${a.date} ${a.time.start}`.localeCompare(`${b.date} ${b.time.start}`, lang === "de" ? "de" : "en"))
        .map((e) => {
          const m = e.date.match(/^(\d{4})-(\d{2})-(\d{2})$/);
          let dateOut = e.date;
          if (m) {
            const [, y, mm, dd] = m;
            dateOut = lang === "de" ? `${dd}.${mm}.${y}` : `September ${parseInt(dd, 10)}`;
          }
          const place = e.location.hall || e.location.area || "";
          const loc = place + (e.location.booth ? ` ${e.location.booth}` : "");
          return `• ${dateOut} ${e.time.start}–${e.time.end}: ${e.title} (${loc})`;
        })
        .join("\n");
      sections.push({ title: lang === "de" ? "Empfohlene Events" : "Recommended events", content: eventsBlock });
    }

    // Übersicht direkt nach der Besuchsstrategie, Details ans Ende
    sections.splice(1, 0, { title: lang === "de" ? "Ausstellerübersicht" : "Exhibitor overview", content: exhibitorsOverviewContent || (lang === "de" ? "Keine passenden Aussteller gefunden." : "No matching exhibitors found.") });
    sections.push({ title: lang === "de" ? "Ausstellerdetails" : "Exhibitor details", content: exhibitorsSectionContent || (lang === "de" ? "Keine passenden Aussteller gefunden." : "No matching exhibitors found.") });

    // PDF erzeugen (als Buffer)
    console.info("[generate-plan] Rendere PDF …");
    console.time("pdf_render");
    // Hallenpläne sammeln: eindeutige Liste anhand type + hallOrPlace
    const hallPlanDir = "/Users/bedranatug/TAS_IAA_Messe/Hallenplan";
    const uniqueHalls = Array.from(new Set(sortedFinal.map((m) => `${(m.location?.type||"").trim()}|${(m.location?.hallOrPlace || "").trim()}`).filter((s) => s.includes("|"))));

    // Feste Zuordnung der bekannten Hallenpläne → Datei
    const MAP: Record<string, { pdf?: string; img?: string }> = {
      // Summit
      "Summit|Atrium": { pdf: `${hallPlanDir}/Summit_Atrium.pdf` },
      "Summit|Halle A1": { pdf: `${hallPlanDir}/Summit_HalleA1.pdf` },
      "Summit|Halle A2": { pdf: `${hallPlanDir}/Summit_HalleA2.pdf` },
      "Summit|Halle A3": { pdf: `${hallPlanDir}/Summit_HalleA3.pdf` },
      "Summit|Halle B1": { pdf: `${hallPlanDir}/Summit_HalleB1.pdf` },
      "Summit|Halle B2": { pdf: `${hallPlanDir}/Summit_HalleB2.pdf` },
      "Summit|Halle B3": { pdf: `${hallPlanDir}/Summit_HalleB3.pdf` },
      // Open Space (verschiedene Plätze)
      "Open Space|Königsplatz": { pdf: `${hallPlanDir}/Openspace_Koenigsplatz.pdf` },
      "Open Space|Koenigsplatz": { pdf: `${hallPlanDir}/Openspace_Koenigsplatz.pdf` },
      "Open Space|Ludwigstraße": { pdf: `${hallPlanDir}/Openspace_Ludwigstrasse.pdf` },
      "Open Space|Ludwigstrasse": { pdf: `${hallPlanDir}/Openspace_Ludwigstrasse.pdf` },
      "Open Space|Marienplatz": { pdf: `${hallPlanDir}/Openspace_Marienplatz.pdf` },
      "Open Space|Max-Joseph-Platz": { pdf: `${hallPlanDir}/Openspace_Max-Joseph-Platz.pdf` },
      "Open Space|Odeonsplatz": { pdf: `${hallPlanDir}/Openspace_Odeonsplatz.pdf` },
      "Open Space|Residenzhöfe": { pdf: `${hallPlanDir}/Openspace_Residenzhoefe.pdf` },
      "Open Space|Residenzhoefe": { pdf: `${hallPlanDir}/Openspace_Residenzhoefe.pdf` },
      "Open Space|Wittelsbacherplatz": { pdf: `${hallPlanDir}/Openspace_Wittelsbacherplatz.pdf` },
    };

    const hallImagesOS: string[] = [];
    const hallImagesSummit: string[] = [];
    const hallPdfsOS: string[] = [];
    const hallPdfsSummit: string[] = [];
    uniqueHalls.forEach((pair) => {
      const entry = MAP[pair];
      if (!entry) return;
      const isOS = pair.startsWith("Open Space|");
      const isSummit = pair.startsWith("Summit|");
      if (entry.img && fs.existsSync(entry.img)) {
        if (isOS) hallImagesOS.push(entry.img); else if (isSummit) hallImagesSummit.push(entry.img);
      }
      if (entry.pdf && fs.existsSync(entry.pdf)) {
        if (isOS) hallPdfsOS.push(entry.pdf); else if (isSummit) hallPdfsSummit.push(entry.pdf);
      }
    });

    // Übersichtsbilder zuerst je Typ
    const hallImages: string[] = [];
    if (hallPdfsOS.length || hallImagesOS.length) {
      const osOverview = `${hallPlanDir}/Openspace.png`;
      if (fs.existsSync(osOverview)) hallImages.push(osOverview);
      hallImages.push(...hallImagesOS);
    }
    if (hallPdfsSummit.length || hallImagesSummit.length) {
      const summitOverview = `${hallPlanDir}/Summit.png`;
      if (fs.existsSync(summitOverview)) hallImages.push(summitOverview);
      hallImages.push(...hallImagesSummit);
    }

    // PDFs danach in der gleichen Gruppenreihenfolge
    const hallPdfs: string[] = [...hallPdfsOS, ...hallPdfsSummit];

    const pdfBuffer = await renderPlanToBuffer({
      logoPath: `${process.cwd()}/public/tas_logo_2.png`,
      answers: { ...(data as any), name: (data as any).name || "", } as any,
      sections,
      hallPlans: hallImages,
      lang,
    });

    // PDF-Hallenpläne ans Ende mergen (sofern vorhanden)
    let finalBytes = new Uint8Array(pdfBuffer);
    if (hallPdfs.length > 0) {
      try {
        // dynamischer Import ohne Typen, um Build-Probleme zu vermeiden
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const { PDFDocument } = require("pdf-lib");
        const master = await PDFDocument.load(finalBytes);
        for (const p of hallPdfs) {
          try {
            const src = fs.readFileSync(p);
            const doc = await PDFDocument.load(src);
            const copied = await master.copyPages(doc, doc.getPageIndices());
            copied.forEach((pg: any) => master.addPage(pg));
          } catch (e) {
            console.warn("[generate-plan] Konnte Hallen-PDF nicht hinzufügen:", p, e);
          }
        }
        finalBytes = await master.save();
      } catch (e) {
        console.warn("[generate-plan] pdf-lib Merge deaktiviert/fehlgeschlagen:", e);
      }
    }

    const pdfBytes = new Uint8Array(finalBytes);

    // Persistieren (best-effort)
    try {
      if (supabase) {
        const hallsUsed = Array.from(new Set(sortedFinal.map((m) => (m.location?.hallOrPlace || "").trim()).filter(Boolean)));
        const exhibitorsOverview = sortedFinal.map((m) => ({ id: m.id, name: m.name, location: `${(m.location?.type||"").trim()} ${(m.location?.hallOrPlace||"").trim()} ${(m.location?.booth||"").trim()}`.trim() }));
        const exhibitorsDetails = sortedFinal.map((m) => ({ id: m.id, name: m.name, location: `${(m.location?.type||"").trim()} ${(m.location?.hallOrPlace||"").trim()} ${(m.location?.booth||"").trim()}`.trim(), website: (m as any).website || null, profile: m.profile || null }));
        await supabase.from("messe_plans").insert({
          lang,
          name: (data as any).name || null,
          email: data.email || null,
          role: data.role,
          goal: data.goal,
          exhibitors_text: data.exhibitorsText,
          days: data.days,
          must_see: data.mustSee,
          extractor_model: process.env.EXTRACTOR_MODEL || null,
          validation_model: process.env.VALIDATION_MODEL || null,
          validation_pool_limit: parseInt(process.env.VALIDATION_POOL_LIMIT || "0", 10) || null,
          default_top_n: parseInt(process.env.DEFAULT_TOP_N || "0", 10) || null,
          struct_phrases: structPhrases || [],
          struct_domains: structDomains || [],
          struct_company_type: structCompany || null,
          exhibitors_overview: exhibitorsOverview,
          exhibitors_details: exhibitorsDetails,
          halls_used: hallsUsed,
          pdf_size_bytes: pdfBytes.byteLength,
          duration_ms: undefined,
        });
      }
    } catch (e) {
      console.warn("[generate-plan] Supabase insert fehlgeschlagen:", e);
    }
    console.timeEnd("pdf_render");
    console.info("[generate-plan] DONE");
    return new NextResponse(pdfBytes as unknown as BodyInit, { status: 200, headers: { "Content-Type": "application/pdf" } });
  } catch (e) {
    console.error("[generate-plan] ERROR:", e);
    return NextResponse.json({ error: "Unerwarteter Fehler" }, { status: 500 });
  }
}


