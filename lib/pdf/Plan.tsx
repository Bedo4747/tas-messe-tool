import React from "react";
import { Document, Page, Text, View, StyleSheet, Image as PdfImage, Font, Link } from "@react-pdf/renderer";

// Register Work Sans for react-pdf
Font.register({ family: "Work Sans", src: `${process.cwd()}/public/fonts/work-sans/WorkSans-Variable.ttf` });

export type Answers = {
  name?: string;
  role: string | null;
  goal: string | null;
  exhibitorsText?: string;
  days: string[];
  mustSee: string[];
};

export type Section = { title: string; content: string };

const styles = StyleSheet.create({
  page: { padding: 36, fontFamily: "Work Sans" },
  title: { fontSize: 22, marginBottom: 8, color: "#002045", fontWeight: 600 },
  subtitle: { fontSize: 11, color: "#4b5563" },
  h2: { fontSize: 16, marginTop: 18, marginBottom: 8, color: "#002045", fontWeight: 600 },
  p: { fontSize: 11, lineHeight: 1.35, color: "#111827" },
  chipRow: { flexDirection: "row", gap: 6, flexWrap: "wrap", marginTop: 6 },
  chip: { borderWidth: 1, borderColor: "#23F0C7", backgroundColor: "#23F0C7", borderRadius: 14, paddingHorizontal: 10, paddingVertical: 4, fontSize: 10, color: "#002045", fontWeight: 600 },
  cover: { alignItems: "center", justifyContent: "center", textAlign: "center", gap: 16, marginTop: 110 },
  heroBar: { height: 6, width: 120, backgroundColor: "#23F0C7", borderRadius: 9999, marginTop: 6 },
  sectionCard: { borderWidth: 1, borderColor: "#E5E7EB", borderRadius: 8, padding: 12, marginTop: 8, backgroundColor: "#FFFFFF" },
  footer: { position: "absolute", bottom: 24, left: 36, right: 36, flexDirection: "row", justifyContent: "space-between", fontSize: 9, color: "#6B7280" },
  topBar: { position: "absolute", top: 0, left: 0, right: 0, height: 28, backgroundColor: "#002045" },
  exNum: { width: 18, textAlign: "right", color: "#002045", fontWeight: 700, fontSize: 14 },
  exName: { fontWeight: 700, color: "#002045", fontSize: 14 },
  exLocationRow: { flexDirection: "row", alignItems: "flex-start", gap: 6, marginTop: 2, marginBottom: 6 },
  exLocIcon: { color: "#002045", fontWeight: 700, fontSize: 11 },
  exLocText: { fontSize: 11, color: "#0b1f33" },
  exIndented: { marginLeft: 24 },
  exWebsite: { fontSize: 11, color: "#1d4ed8", textDecoration: "underline", marginTop: 4 },
  table: { borderWidth: 1, borderColor: "#E5E7EB", borderRadius: 8, overflow: "hidden" },
  tableHeader: { flexDirection: "row", backgroundColor: "#EFF6FF" },
  th: { flex: 1, padding: 8, fontSize: 11, fontWeight: 700, color: "#002045", borderRightWidth: 1, borderRightColor: "#E5E7EB" },
  tr: { flexDirection: "row", borderTopWidth: 1, borderTopColor: "#E5E7EB" },
  td: { flex: 1, padding: 8, fontSize: 11, color: "#0b1f33", borderRightWidth: 1, borderRightColor: "#E5E7EB" },
  tdLast: { flex: 1, padding: 8, fontSize: 11, color: "#0b1f33" },
});

export function PlanPdf({ logoPath, answers, sections, hallPlans, lang = "de" }: { logoPath: string; answers: Answers; sections: Section[]; hallPlans?: string[]; lang?: "de" | "en" }) {
  return (
    <Document>
      <Page style={[styles.page, { backgroundColor: "#F9FAFB" }]} size="A4">
        <View style={styles.topBar} />
        <View style={styles.cover}>
          <PdfImage src={logoPath} style={{ width: 200 }} />
          <View style={styles.heroBar} />
          <Text style={styles.title}>{lang === "de" ? "Ihr persönlicher Messeplan" : "Your personal trade fair plan"}</Text>
          {Boolean((answers as any).name) ? (
            <Text style={{ fontSize: 14, color: "#0b1f33" }}>{(answers as any).name}</Text>
          ) : null}
        </View>
        <View style={styles.footer}>
          <Text>T.A.S. FORCE</Text>
          <Text>tas-force.com</Text>
        </View>
      </Page>

      <Page style={styles.page} size="A4">
        <View style={styles.topBar} />
        <Text style={styles.h2}>{lang === "de" ? "Ihre Angaben" : "Your details"}</Text>
        <View style={styles.chipRow}>
          {/* Rolle nicht mehr auf dem Cover, aber unter Angaben weiterhin sichtbar */}
          {answers.role ? <Text style={styles.chip}>{answers.role}</Text> : null}
          {answers.goal ? <Text style={styles.chip}>{answers.goal}</Text> : null}
          {answers.days.map((d) => (
            <Text key={d} style={styles.chip}>{d}</Text>
          ))}
          {answers.mustSee.map((d) => (
            <Text key={d} style={styles.chip}>{d}</Text>
          ))}
        </View>

        {sections.map((s, idx) => (
          <View key={`${s.title}-${idx}`} break={s.title === "Ausstellerübersicht"} wrap={true} style={styles.sectionCard}>
            <Text style={styles.h2}>{s.title}</Text>
            {s.title === (lang === "de" ? "Ausstellerdetails" : "Exhibitor details") ? (
              <ExhibitorsBlock content={s.content} />
            ) : s.title === (lang === "de" ? "Ausstellerübersicht" : "Exhibitor overview") ? (
              <ExhibitorsTable content={s.content} />
            ) : s.title === (lang === "de" ? "Empfohlene Events" : "Recommended events") ? (
              <EventsTable content={s.content} />
            ) : (
              <MarkdownBlock content={s.content} />
            )}
          </View>
        ))}
      </Page>

      {(hallPlans || []).map((src, idx) => (
        <Page key={`hall-${idx}`} wrap style={styles.page} size="A4">
          <View style={styles.topBar} />
          <Text style={styles.h2}>{lang === "de" ? "Hallenplan" : "Hall plan"}</Text>
          <PdfImage src={src} style={{ marginTop: 8, width: 520 }} />
        </Page>
      ))}
    </Document>
  );
}

// --- Markdown Rendering (leichtgewichtig) ---

function InlineMarkdown({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <Text style={styles.p}>
      {parts.map((part, idx) => {
        const isBold = part.startsWith("**") && part.endsWith("**");
        if (isBold) {
          return (
            <Text key={idx} style={{ fontWeight: 700, color: "#0b1f33" }}>
              {part.slice(2, -2)}
            </Text>
          );
        }
        return <Text key={idx}>{part}</Text>;
      })}
    </Text>
  );
}

function MarkdownBlock({ content }: { content: string }) {
  const lines = content.split(/\n+/).filter((l) => l.trim().length > 0);
  return (
    <View>
      {lines.map((line, i) => {
        // Nummerierte Liste: "1. Text" (nur für normale Listen in Strategie, nicht Aussteller)
        const m = line.match(/^\s*(\d+)\.\s+(.*)$/);
        if (m) {
          return (
            <View key={i} wrap={false} style={{ flexDirection: "row", gap: 6, marginBottom: 6 }}>
              <Text style={{ width: 16, textAlign: "right", color: "#002045", fontWeight: 700, fontSize: 11 }}>{m[1]}.</Text>
              <View style={{ flex: 1 }}>
                <InlineMarkdown text={m[2]} />
              </View>
            </View>
          );
        }
        // Aufzählung: "- Text"
        const b = line.match(/^\s*[-•]\s+(.*)$/);
        if (b) {
          return (
            <View key={i} wrap={false} style={{ flexDirection: "row", gap: 6, marginBottom: 6 }}>
              <Text style={{ color: "#002045", fontWeight: 700, fontSize: 11 }}>•</Text>
              <View style={{ flex: 1 }}>
                <InlineMarkdown text={b[1]} />
              </View>
            </View>
          );
        }
        // Normaler Absatz
        return (
          <View key={i} wrap={false} style={{ marginBottom: 6 }}>
            <InlineMarkdown text={line} />
          </View>
        );
      })}
    </View>
  );
}

// BlockRenderer für Ausstellerliste, damit andere Abschnitte (z. B. Besucherstrategie)
// nicht vom speziellen Nummern-Layout betroffen sind
function ExhibitorsBlock({ content }: { content: string }) {
  const lines = content.split(/\n+/).filter((l) => l.trim().length > 0);
  return (
    <View>
      {lines.map((line, i) => {
        const m = line.match(/^\s*(\d+)\.\s+(.*)$/);
        if (m) {
          const text = m[2];
          const parts = text.split(/\n/);
          const nameLine = parts[0] || "";
          const locLine = parts[1] || "";
          const websiteIdx = parts.findIndex((p, idx) => idx >= 2 && /^\s*website\s*:/i.test(p));
          const website = websiteIdx >= 0 ? parts[websiteIdx].replace(/^\s*website\s*:/i, "").trim() : "";
          const descLines = parts.slice(2).filter((_, idx) => (idx + 2) !== websiteIdx).join("\n");
          return (
            <View key={i} wrap={false} style={{ marginBottom: 10 }}>
              <View style={{ flexDirection: "row", gap: 6, alignItems: "flex-start" }}>
                <Text style={styles.exNum}>{m[1]}.</Text>
                <Text style={styles.exName}>{nameLine.replace(/^\*\*|\*\*$/g, "")}</Text>
              </View>
              {locLine ? (
                <View wrap={false} style={[styles.exLocationRow]}> 
                  <Text style={styles.exLocIcon}>⌖</Text>
                  <Text style={styles.exLocText}>{locLine}</Text>
                </View>
              ) : null}
              {descLines ? (
                <View wrap={false} style={{ marginTop: 2 }}>
                  <InlineMarkdown text={descLines} />
                </View>
              ) : null}
              {website ? (
                <View wrap={false} style={{ marginTop: 2 }}>
                  <Text style={styles.exWebsite}>
                    <Link src={website.startsWith("http") ? website : `https://${website}`}>{website}</Link>
                  </Text>
                </View>
              ) : null}
            </View>
          );
        }
        return (
          <View key={i} style={{ marginBottom: 6 }}>
            <InlineMarkdown text={line} />
          </View>
        );
      })}
    </View>
  );
}

function ExhibitorsTable({ content }: { content: string }) {
  // Erwartetes Format je Zeile: "1. Name — Ort"
  const rows = content
    .split(/\n+/)
    .map((l) => l.trim())
    .filter((l) => l.length > 0)
    .map((l) => {
      const m = l.match(/^\s*\d+\.\s+(.*?)\s+—\s+(.*)$/);
      if (m) return { name: m[1], loc: m[2] };
      return null;
    })
    .filter((x): x is { name: string; loc: string } => Boolean(x));

  return (
    <View style={styles.table}>
      <View style={styles.tableHeader}>
        <Text style={styles.th}>Aussteller</Text>
        <Text style={[styles.th, { borderRightWidth: 0 }]}>Halle/Ort</Text>
      </View>
      {rows.map((r, idx) => (
        <View key={idx} style={styles.tr}>
          <Text style={styles.td}>{r.name}</Text>
          <Text style={styles.tdLast}>{r.loc}</Text>
        </View>
      ))}
    </View>
  );
}


function EventsTable({ content }: { content: string }) {
  // Erwartetes Format je Zeile (Bullet): "• YYYY-MM-DD HH:MM–HH:MM: Titel (Ort)"
  const toDeDate = (iso: string) => {
    const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!m) return iso;
    const [_, y, mm, dd] = m;
    return `${dd}.${mm}.${y}`;
  };
  const toEnDate = (iso: string) => {
    const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!m) return iso;
    const dd = String(parseInt(m[3], 10));
    return `September ${dd}`;
  };

  const rows = content
    .split(/\n+/)
    .map((l) => l.trim())
    .filter((l) => l.length > 0)
    .map((l) => {
      // • 2024-09-09 10:00–11:00: Titel (Ort)
      const m = l.match(/^\s*[•\-]\s+(\d{4}-\d{2}-\d{2})\s+([0-9]{1,2}:[0-9]{2})\s*[–\-]\s*([0-9]{1,2}:[0-9]{2}):\s+(.*?)(?:\s*\((.*?)\))?\s*$/);
      if (!m) return null;
      // Sprache nicht verfügbar – rendern neutral (EN Format). Optional könnte hier ein lang-Prop genutzt werden.
      const date = toEnDate(m[1]);
      const start = m[2];
      const end = m[3];
      const title = m[4];
      const loc = (m[5] || "").trim();
      return { when: `${date} ${start}–${end}`, title, loc };
    })
    .filter((x): x is { when: string; title: string; loc: string } => Boolean(x));

  return (
    <View style={styles.table}>
      <View style={styles.tableHeader}>
        <Text style={styles.th}>Datum & Zeit</Text>
        <Text style={styles.th}>Titel</Text>
        <Text style={[styles.th, { borderRightWidth: 0 }]}>Ort</Text>
      </View>
      {rows.map((r, idx) => (
        <View key={idx} style={styles.tr}>
          <Text style={styles.td}>{r.when}</Text>
          <Text style={styles.td}>{r.title}</Text>
          <Text style={styles.tdLast}>{r.loc}</Text>
        </View>
      ))}
    </View>
  );
}


