"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import { EXHIBITORS } from "@/lib/data/exhibitors";

type QuestionnaireData = {
  role: string | null;
  goal: string | null;
  exhibitorsText: string;
  days: string[];
  mustSee: string[];
  email: string; // ✅ added
};

const ROLES = [
  "Geschäftsführung / Vorstand (C-Level)",
  "Bereichs- / Abteilungsleitung",
  "Werks- / Standortleitung",
  "Projektmanager/in / Fachspezialist/in",
  "Studierende / Young Professional",
  "Presse / Medien",
];

const GOALS = [
  "Produkte vergleichen",
  "Partner & Lieferanten finden",
  "Tech-Insights & Demos erleben",
  "Karriere & Jobs",
  "Medienarbeit",
  "Inspiration & Überblick",
];

const DAYS = ["09. September", "10. September", "11. September", "12. September"];

export default function Home() {
  const [step, setStep] = useState<"form" | "download" | "done">("form");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [data, setData] = useState<QuestionnaireData>({
    role: null,
    goal: null,
    exhibitorsText: "",
    days: [],
    mustSee: [],
    email: "", // ✅ added
  });

   async function sendMesseplanEmail(
  data: { email: string },
  pdfBytes: Uint8Array
) {
  const SERVICE_ID = 'service_prmgrzf';
  const TEMPLATE_ID = 'template_52c1f0x';
  const PUBLIC_KEY = 'MomY4mAH_xZr1KbyP';

  // 1) Must run on the client (browser)
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    throw new Error('sendForm must run in the browser (no SSR/API route).');
  }

  // 2) Init (safe to call more than once)
  emailjs.init(PUBLIC_KEY);

  // 3) Create a hidden form and ATTACH it to the DOM
  const form = document.createElement('form');
  form.style.display = 'none';
  form.enctype = 'multipart/form-data';
  document.body.appendChild(form);

  const addHidden = (name: string, value: string) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = value;
    form.appendChild(input);
  };

  // 4) Only tiny variables
  addHidden('to_email', data.email);
  addHidden('subject', 'Ihr persönlicher Messeplan');
  addHidden('message', 'Vielen Dank! Wir haben Ihre Angaben erhalten. Ihr persönlicher Messeplan wird jetzt erstellt.');

  // 5) Build the File and programmatically set it on a file input
  const file = new File([pdfBytes], 'Messeplan.pdf', { type: 'application/pdf' });
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.name = 'my_file'; // must equal template parameter
  fileInput.accept = 'application/pdf';

  const dt = new DataTransfer();
  dt.items.add(file);
  fileInput.files = dt.files;
  form.appendChild(fileInput);

  // 6) Diagnostics (optional but useful)
  const fd = new FormData(form);
  let varBytes = 0;
  for (const [k, v] of fd.entries()) {
    if (v instanceof File) continue;
    varBytes += new TextEncoder().encode(String(v)).length;
  }
  console.log('Template variables size (bytes):', varBytes); // should be tiny (<1KB)
  console.log('Attachment size (MB):', (file.size / (1024 * 1024)).toFixed(2));

  // If > ~10MB, many providers will bounce it. Consider compressing or sending a link instead.
  if (file.size > 10 * 1024 * 1024) {
    console.warn('PDF likely too large for mail providers (>10MB). Consider compressing.');
  }

  try {
    // 7) Send the form. Pass PUBLIC_KEY again for certainty.
    const res = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
    return res;
  } finally {
    // 8) Clean up DOM
    document.body.removeChild(form);
  }
}

  const exhibitorsSuggestions = useMemo(() => {
    return EXHIBITORS.filter((p) => p.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  async function handleSubmit() {
    setStep("download");
  }

  // Basic email check
  const isEmailValid = /^\S+@\S+\.\S+$/.test(data.email || "");

  async function handleSend() {
    try {
      setLoading(true);

      // 1) Generate and download the PDF
      const res = await fetch("/api/generate-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });
      if (!res.ok) throw new Error("Fehler beim Erstellen");
      const blob = await res.blob();
      // const url = window.URL.createObjectURL(blob);
      // const a = document.createElement("a");
      // a.href = url;
      // a.download = "messeplan.pdf";
      // document.body.appendChild(a);
      // a.click();
      // a.remove();
      // window.URL.revokeObjectURL(url);
    
      // 1) Send a generic email via EmailJS
      await sendMesseplanEmail(data, blob)

      setStep("done");
    } catch (err) {
      console.error(err);
      alert("Senden fehlgeschlagen. Bitte erneut versuchen.");
    } finally {
      setLoading(false);
    }
  }

  const isFormValid = data.role && data.goal && data.days.length > 0;

  return (
    <div className="min-h-screen bg-white">
      <section className="w-full" style={{ backgroundColor: "var(--tas-dark-blue)", color: "white" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 py-12 px-6">
          <div className="shrink-0">
            <Image src="/tas_logo.png" alt="T.A.S. FORCE" width={140} height={140} priority />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight">Ihr persönlicher Messeplaner</h1>
            <p className="mt-3 text-white/80">We get it done – every time, everywhere.</p>
            <div className="mt-4 h-1 w-24" style={{ backgroundColor: "var(--tas-turquoise)" }} />
          </div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto p-6 -mt-10">
        <div className="bg-white rounded-xl shadow-xl border border-[var(--tas-light-grey)] p-6 md:p-8">
          {step === "form" && (
            <section className="space-y-8">
              <h2 className="text-lg font-semibold" style={{ color: "var(--tas-dark-blue)" }}>
                Ihr Profil und Messeziele
              </h2>

              <div className="space-y-3">
                <label className="block font-medium">1) Welche Rolle beschreibt Sie am besten?</label>
                <div className="flex flex-wrap gap-2">
                  {ROLES.map((r) => (
                    <button
                      key={r}
                      type="button"
                      className={`tas-chip ${data.role === r ? "tas-chip-active" : ""}`}
                      onClick={() => setData((d) => ({ ...d, role: d.role === r ? null : r }))}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="block font-medium">2) Was möchten Sie mit Ihrem Messebesuch erreichen?</label>
                <div className="flex flex-wrap gap-2">
                  {GOALS.map((g) => (
                    <button
                      key={g}
                      type="button"
                      className={`tas-chip ${data.goal === g ? "tas-chip-active" : ""}`}
                      onClick={() => setData((d) => ({ ...d, goal: d.goal === g ? null : g }))}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block font-medium">
                  3) Geben Sie mir Input zu den Ausstellern die Sie interessieren.
                </label>
                <textarea
                  className="w-full rounded-md border p-3"
                  rows={4}
                  placeholder="Freitext: Themen, Technologien, Branchen, Aussteller ..."
                  value={data.exhibitorsText}
                  onChange={(e) => setData((d) => ({ ...d, exhibitorsText: e.target.value }))}
                />
              </div>

              <div className="space-y-3">
                <label className="block font-medium">4) An welchen Tagen sind Sie auf der Messe?</label>
                <div className="flex flex-wrap gap-2">
                  {DAYS.map((day) => {
                    const active = data.days.includes(day);
                    return (
                      <button
                        key={day}
                        type="button"
                        className={`tas-chip ${active ? "tas-chip-active" : ""}`}
                        onClick={() =>
                          setData((d) => ({
                            ...d,
                            days: active ? d.days.filter((x) => x !== day) : [...d.days, day],
                          }))
                        }
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-2">
                <label className="block font-medium">
                  5) Optional: Marken oder Stände, die Sie auf jeden Fall sehen möchten?
                </label>
                <input
                  className="w-full rounded-md border p-2"
                  placeholder="Suche nach Ausstellern"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                {search && (
                  <div className="border rounded-md divide-y">
                    {exhibitorsSuggestions.slice(0, 6).map((s) => {
                      const active = data.mustSee.includes(s);
                      return (
                        <button
                          key={s}
                          className="w-full text-left px-3 py-2 hover:bg-[#f8f8f8]"
                          onClick={() =>
                            setData((d) => {
                              if (active) return { ...d, mustSee: d.mustSee.filter((x) => x !== s) };
                              if (d.mustSee.length >= 3) return d;
                              return { ...d, mustSee: [...d.mustSee, s] };
                            })
                          }
                        >
                          {active ? "✓ " : ""}
                          {s}
                        </button>
                      );
                    })}
                  </div>
                )}
                {data.mustSee.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {data.mustSee.map((m) => (
                      <span key={m} className="tas-chip tas-chip-active">
                        {m}
                        <button
                          className="ml-2 text-xs"
                          onClick={() =>
                            setData((d) => ({ ...d, mustSee: d.mustSee.filter((x) => x !== m) }))
                          }
                        >
                          ✕
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-start md:items-center">
                <span className="text-sm" style={{ color: "var(--tas-grey)" }}>
                  Mit Absenden stimmen Sie der Verarbeitung gemäß Datenschutzhinweisen zu.
                </span>
                <button disabled={!isFormValid} className="tas-btn-primary disabled:opacity-50" onClick={handleSubmit}>
                  Weiter
                </button>
              </div>
            </section>
          )}

          {step === "download" && (
            <section className="space-y-6">
              <h2 className="text-lg font-semibold" style={{ color: "var(--tas-dark-blue)" }}>
                Ihr persönlicher Messeplan ist fertig – jetzt als PDF herunterladen
              </h2>

              <div className="space-y-2">
                <label className="block font-medium">Ihre E-Mail-Adresse</label>
                <input
                  type="email"
                  className="w-full rounded-md border p-2"
                  placeholder="z.B. max.mustermann@mail.de"
                  value={data.email}
                  onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))}
                />
                {!isEmailValid && data.email && (
                  <p className="text-sm text-red-500">Bitte eine gültige E-Mail eingeben</p>
                )}
              </div>

              <div className="flex items-center justify-end gap-3">
                <button className="tas-chip" onClick={() => setStep("form")}>
                  Zurück
                </button>
                <button
                  className="tas-btn-primary disabled:opacity-50"
                  onClick={handleSend}
                  disabled={!isEmailValid || loading}
                >
                  {loading ? "Erstelle PDF ..." : "PDF herunterladen"}
                </button>
              </div>
            </section>
          )}

          {step === "done" && (
            <section className="space-y-4 text-center">
              <h2 className="text-lg font-semibold" style={{ color: "var(--tas-dark-blue)" }}>
                Vielen Dank! Ihr persönlicher Messeplan ist unterwegs.
              </h2>
              <p className="text-sm" style={{ color: "var(--tas-grey)" }}>
                Bitte prüfen Sie Ihren Posteingang. Falls nichts ankommt, schauen Sie im Spam-Ordner nach.
              </p>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
