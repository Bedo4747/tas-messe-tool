import React from "react";
import { Document, Page, Text, View, StyleSheet, Image as PdfImage, Font } from "@react-pdf/renderer";

// Register Work Sans for react-pdf
Font.register({ family: "Work Sans", src: `${process.cwd()}/public/fonts/work-sans/WorkSans-Variable.ttf` });

export type Answers = {
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
  p: { fontSize: 11, lineHeight: 1.5, color: "#111827" },
  chipRow: { flexDirection: "row", gap: 6, flexWrap: "wrap", marginTop: 6 },
  chip: { borderWidth: 1, borderColor: "#23F0C7", backgroundColor: "#23F0C7", borderRadius: 14, paddingHorizontal: 10, paddingVertical: 4, fontSize: 10, color: "#002045", fontWeight: 600 },
  cover: { alignItems: "center", justifyContent: "center", textAlign: "center", gap: 16, marginTop: 110 },
  heroBar: { height: 6, width: 120, backgroundColor: "#23F0C7", borderRadius: 9999, marginTop: 6 },
  sectionCard: { borderWidth: 1, borderColor: "#E5E7EB", borderRadius: 8, padding: 12, marginTop: 8, backgroundColor: "#FFFFFF" },
  footer: { position: "absolute", bottom: 24, left: 36, right: 36, flexDirection: "row", justifyContent: "space-between", fontSize: 9, color: "#6B7280" },
  topBar: { position: "absolute", top: 0, left: 0, right: 0, height: 28, backgroundColor: "#002045" },
});

export function PlanPdf({ logoPath, answers, sections }: { logoPath: string; answers: Answers; sections: Section[] }) {
  return (
    <Document>
      <Page style={[styles.page, { backgroundColor: "#F9FAFB" }]} size="A4">
        <View style={styles.topBar} />
        <View style={styles.cover}>
          <PdfImage src={logoPath} style={{ width: 200 }} />
          <Text style={styles.title}>Ihr persönlicher Messeplan</Text>
          <View style={styles.heroBar} />
          <Text style={styles.subtitle}>We get it done – every time, everywhere.</Text>
        </View>
        <View style={styles.footer}>
          <Text>T.A.S. FORCE</Text>
          <Text>tas-force.com</Text>
        </View>
      </Page>

      <Page style={styles.page} size="A4">
        <View style={styles.topBar} />
        <Text style={styles.h2}>Ihre Angaben</Text>
        <View style={styles.chipRow}>
          {answers.role ? <Text style={styles.chip}>{answers.role}</Text> : null}
          {answers.goal ? <Text style={styles.chip}>{answers.goal}</Text> : null}
          {answers.days.map((d) => (
            <Text key={d} style={styles.chip}>{d}</Text>
          ))}
          {answers.mustSee.map((d) => (
            <Text key={d} style={styles.chip}>{d}</Text>
          ))}
        </View>

        {sections.map((s) => (
          <View key={s.title} wrap={true} style={styles.sectionCard}>
            <Text style={styles.h2}>{s.title}</Text>
            <MarkdownBlock content={s.content} />
          </View>
        ))}
      </Page>
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
        // Nummerierte Liste: "1. Text"
        const m = line.match(/^\s*(\d+)\.\s+(.*)$/);
        if (m) {
          return (
            <View key={i} style={{ flexDirection: "row", gap: 6, marginBottom: 6 }}>
              <Text style={{ width: 16, textAlign: "right", color: "#002045", fontWeight: 700 }}>{m[1]}.</Text>
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
            <View key={i} style={{ flexDirection: "row", gap: 6, marginBottom: 6 }}>
              <Text style={{ color: "#002045", fontWeight: 700 }}>•</Text>
              <View style={{ flex: 1 }}>
                <InlineMarkdown text={b[1]} />
              </View>
            </View>
          );
        }
        // Normaler Absatz
        return (
          <View key={i} style={{ marginBottom: 6 }}>
            <InlineMarkdown text={line} />
          </View>
        );
      })}
    </View>
  );
}


