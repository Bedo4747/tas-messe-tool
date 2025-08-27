import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
// Mailversand temporär entfernt – PDF wird direkt zurückgegeben
import { renderPlanToBuffer } from "@/lib/pdf/renderPlan";
import OpenAI from "openai";

const schema = z.object({
  email: z.string().email().optional(),
  data: z.object({
    role: z.string().nullable(),
    goal: z.string().nullable(),
    exhibitorsText: z.string().optional().default(""),
    days: z.array(z.string()),
    mustSee: z.array(z.string()).max(3),
  }),
});

type PromptItem = { title: string; prompt: string };

function buildPrompts(input: z.infer<typeof schema>["data"]): PromptItem[] {
  return [
    {
      title: "Besuchsstrategie",
      prompt: `Nutzerrolle: ${input.role ?? "Unbekannt"}. Messeziel: ${input.goal ?? "Unbekannt"}. Tage: ${input.days.join(", ")}. Erstelle eine prägnante Besuchsstrategie (max. 6 Bulletpoints).`,
    },
    {
      title: "Ausstellerempfehlungen",
      prompt: `Freitext-Interessen: ${input.exhibitorsText}. Pflichtstände: ${input.mustSee.join(", ") || "keine"}. Empfiehl 8 relevante Aussteller mit kurzer Begründung (eine Zeile je Aussteller).`,
    },
    {
      title: "Tagesplanung",
      prompt: `Tage: ${input.days.join(", ")}. Erstelle einen kompakten Tagesplan mit Zeitblöcken (Vormittag/Nachmittag) und Aktivitäten. Berücksichtige Pflichtstände: ${input.mustSee.join(", ") || "keine"}.`,
    },
  ];
}

export async function POST(req: NextRequest) {
  try {
    const parsed = schema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json({ error: "Ungültige Eingaben" }, { status: 400 });
    }
    const { data } = parsed.data;

    const openaiApiKey = process.env.OPENAI_API_KEY;
    if (!openaiApiKey) {
      return NextResponse.json({ error: "OPENAI_API_KEY fehlt" }, { status: 500 });
    }

    const client = new OpenAI({ apiKey: openaiApiKey });
    const prompts = buildPrompts(data);

    // Nacheinander, um pro Frage gezielt zu generieren
    const sections: { title: string; content: string }[] = [];
    for (const p of prompts) {
      const completion = await client.chat.completions.create({
        model: "gpt-4o-mini", // Platzhalter: bei GPT-5 Zugang hier tauschen
        messages: [
          { role: "system", content: "Du bist ein Messe- und Event-Planungsassistent. Antworte prägnant auf Deutsch." },
          { role: "user", content: p.prompt },
        ],
        temperature: 0.7,
      });
      const text = completion.choices[0]?.message?.content ?? "";
      sections.push({ title: p.title, content: text });
    }

    // PDF erzeugen (als Buffer)
    const pdfBuffer = await renderPlanToBuffer({
      logoPath: `${process.cwd()}/public/tas_logo_2.png`,
      answers: data,
      sections,
    });

    // Direkt als PDF zurückgeben
    const pdfBytes = new Uint8Array(pdfBuffer);
    return new NextResponse(pdfBytes as unknown as BodyInit, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="messeplan.pdf"',
        "Cache-Control": "no-store",
      },
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Unerwarteter Fehler" }, { status: 500 });
  }
}


