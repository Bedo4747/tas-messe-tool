import OpenAI from "openai";
import { EVENTS_DB, EventItem } from "@/lib/data/events_db";

function dayLabelFromDate(date: string): string {
  // erwartet YYYY-MM-DD → gibt z. B. "09. September" zurück
  const m = date.match(/\d{4}-(\d{2})-(\d{2})/);
  if (!m) return "";
  const dd = m[2];
  return `${dd}. September`;
}

function dayLabelEnFromDate(date: string): string {
  // erwartet YYYY-MM-DD → gibt z. B. "September 9" zurück
  const m = date.match(/\d{4}-(\d{2})-(\d{2})/);
  if (!m) return "";
  const d = String(parseInt(m[2 + 0] ? m[2] : m[2], 10)); // robust gegen führende Nullen
  // m[2] ist der Tag; in obiger Regex ist m[2] tatsächlich der Tag (dd)
  const dd = String(parseInt(m[2], 10));
  return `September ${dd}`;
}

export async function selectEventsForUser(
  days: string[],
  interestText: string,
  client: OpenAI
): Promise<EventItem[]> {
  // Tage ("09. September" etc.) in Tag-Strings umwandeln
  const normalize = (s: string) => s.toLowerCase().replace(/\s+/g, " ").trim();
  const allowedDays = new Set(days.map((d) => normalize(d)));
  const filtered = EVENTS_DB.filter((e) => {
    const de = normalize(dayLabelFromDate(e.date));
    const en = normalize(dayLabelEnFromDate(e.date));
    return allowedDays.has(de) || allowedDays.has(en);
  });
  if (filtered.length === 0) return [];

  // In parallelen Chunks an GPT-5: nur Felder date/time/title/summary
  const CHUNK_SIZE = Math.max(50, parseInt(process.env.EVENTS_CHUNK_SIZE || "150", 10) || 150);
  const payload = filtered.map((e) => ({ id: e.id, title: e.title, date: e.date, time: e.time, summary: e.summary || "" }));
  const chunks: typeof payload[] = [];
  for (let i = 0; i < payload.length; i += CHUNK_SIZE) chunks.push(payload.slice(i, i + CHUNK_SIZE));

  async function validateChunk(idx: number, pl: typeof payload[0][]): Promise<string[]> {
    const comp = await client.chat.completions.create({
      model: process.env.VALIDATION_MODEL || "gpt-5",
      messages: [
        { role: "system", content: "Wähle aus den Events nur jene, die thematisch zur Nutzeranfrage passen UND an den angegebenen Tagen stattfinden. Antworte NUR JSON: {\"selected_ids\":[id,...]}." },
        { role: "user", content: `Nutzerinteressen (Frage 3): ${interestText}\nAusgewählte Tage: ${Array.from(allowedDays).join(", ")}\nEvents: ${JSON.stringify(pl)}` },
      ],
    });
    const raw = comp.choices[0]?.message?.content || "{}";
    const s = raw.indexOf("{"); const e = raw.lastIndexOf("}");
    const json = s>=0 && e>=0 ? raw.slice(s,e+1) : "{}";
    try {
      const parsed = JSON.parse(json) as { selected_ids?: unknown };
      const ids = Array.isArray(parsed.selected_ids) ? (parsed.selected_ids as unknown[]).filter((x): x is string => typeof x === "string") : [];
      return ids;
    } catch { return []; }
  }

  const results = await Promise.all(chunks.map((c, i) => validateChunk(i, c)));
  const ids = new Set<string>(results.flat());
  return filtered.filter((e) => ids.has(e.id)).sort((a, b) => `${a.date} ${a.time.start}`.localeCompare(`${b.date} ${b.time.start}`));
}


