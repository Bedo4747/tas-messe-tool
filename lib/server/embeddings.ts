import fs from "fs";
import path from "path";
import OpenAI from "openai";
import { Exhibitor, EXHIBITORS_DB } from "@/lib/data/exhibitors_db";

export type VecDoc = { id: string; vector: number[] };
export type VecIndex = { model: string; dims: number; docs: VecDoc[] };

export const VECTOR_CACHE_PATH = path.join(process.cwd(), ".cache_vectors.json");

export async function buildOrLoadIndex(): Promise<VecIndex | null> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.warn("[embeddings] OPENAI_API_KEY fehlt – Embedding-Suche deaktiviert");
    return null;
  }
  if (fs.existsSync(VECTOR_CACHE_PATH)) {
    try {
      const idx = JSON.parse(fs.readFileSync(VECTOR_CACHE_PATH, "utf8")) as VecIndex;
      console.info(`[embeddings] Index geladen (${idx.docs.length} Docs, Modell=${idx.model})`);
      return idx;
    } catch {}
  }
  const client = new OpenAI({ apiKey });
  const model = process.env.EMBED_MODEL || "text-embedding-3-small"; // 1536 dims
  console.info(`[embeddings] Baue Index mit Modell ${model} (Quelle: nur profile) ...`);
  const source = EXHIBITORS_DB.filter((ex) => typeof ex.profile === "string" && ex.profile.trim().length > 0);
  const skipped = EXHIBITORS_DB.length - source.length;
  const chunks = source.map((ex) => ({ id: ex.id, text: ex.profile as string }));
  const docs: VecDoc[] = [];
  for (let i = 0; i < chunks.length; i += 64) {
    const batch = chunks.slice(i, i + 64);
    const resp = await client.embeddings.create({ model, input: batch.map((b) => b.text) });
    resp.data.forEach((d, j) => {
      docs.push({ id: batch[j].id, vector: d.embedding as number[] });
    });
  }
  const dims = (docs[0]?.vector?.length) || 0;
  const index: VecIndex = { model, dims, docs };
  fs.writeFileSync(VECTOR_CACHE_PATH, JSON.stringify(index));
  console.info(`[embeddings] Index gebaut (${docs.length} Docs, dims=${dims}, übersprungen=${skipped}) und gecached unter ${VECTOR_CACHE_PATH}`);
  return index;
}

export function cosine(a: number[], b: number[]): number {
  let dot = 0, na = 0, nb = 0;
  for (let i = 0; i < a.length; i++) { dot += a[i]*b[i]; na += a[i]*a[i]; nb += b[i]*b[i]; }
  return dot / (Math.sqrt(na) * Math.sqrt(nb) + 1e-12);
}

export async function embedQuery(text: string): Promise<number[] | null> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;
  const client = new OpenAI({ apiKey });
  const model = process.env.EMBED_MODEL || "text-embedding-3-small";
  const r = await client.embeddings.create({ model, input: [text] });
  return r.data[0].embedding as number[];
}

export function clearVectorCache() {
  try {
    if (fs.existsSync(VECTOR_CACHE_PATH)) fs.unlinkSync(VECTOR_CACHE_PATH);
  } catch {}
}


