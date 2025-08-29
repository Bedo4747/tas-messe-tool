"use client";
import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { EXHIBITORS_DB } from "@/lib/data/exhibitors_db";

type QuestionnaireData = {
  name?: string;
  email?: string;
  role: string | null;
  goal: string | null;
  exhibitorsText: string;
  days: string[];
  mustSee: string[];
};

const ROLES_DICT: Record<"de"|"en", string[]> = {
  de: [
    "Geschäftsführung / Vorstand (C-Level)",
    "Bereichs- / Abteilungsleitung",
    "Werks- / Standortleitung",
    "Projektmanager/in / Fachspezialist/in",
    "Studierende / Young Professional",
    "Presse / Medien",
  ],
  en: [
    "Executive / C-level",
    "Head of department",
    "Plant / site management",
    "Project manager / Specialist",
    "Student / Young professional",
    "Press / Media",
  ],
};

const GOALS_DICT: Record<"de"|"en", string[]> = {
  de: [
    "Produkte vergleichen",
    "Partner & Lieferanten finden",
    "Tech-Insights & Demos erleben",
    "Karriere & Jobs",
    "Medienarbeit",
    "Inspiration & Überblick",
  ],
  en: [
    "Compare products",
    "Find partners & suppliers",
    "See tech insights & demos",
    "Careers & jobs",
    "Media work",
    "Inspiration & overview",
  ],
};


const DAYS_LABELS: Record<"de"|"en", { label: string; iso: string }[]> = {
  de: [
    { label: "09. September", iso: "2025-09-09" },
    { label: "10. September", iso: "2025-09-10" },
    { label: "11. September", iso: "2025-09-11" },
    { label: "12. September", iso: "2025-09-12" },
  ],
  en: [
    { label: "September 9", iso: "2025-09-09" },
    { label: "September 10", iso: "2025-09-10" },
    { label: "September 11", iso: "2025-09-11" },
    { label: "September 12", iso: "2025-09-12" },
  ],
};


const DAYS_DICT: Record<"de"|"en", string[]> = {
  de: ["09. September", "10. September", "11. September", "12. September"],
  en: ["September 9", "September 10", "September 11", "September 12"],
};

export default function Home() {
  const [step, setStep] = useState<"form" | "download" | "done">("form");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [lang, setLang] = useState<"de" | "en">("en");
  const [data, setData] = useState<QuestionnaireData>({
    name: "",
    email: "",
    role: null,
    goal: null,
    exhibitorsText: "",
    days: [],
    mustSee: [],
  });

  async function sendMesseplanEmail(
    data: QuestionnaireData,
    pdfBytes: Blob
  ) {
    const SERVICE_ID = 'service_prmgrzf';
    const TEMPLATE_ID = 'template_52c1f0x';
    const PUBLIC_KEY = 'MomY4mAH_xZr1KbyP';

    if (typeof window === 'undefined' || typeof document === 'undefined') {
      throw new Error('sendForm must run in the browser (no SSR/API route).');
    }

    if (!data.email) {
      throw new Error('email not set.');
    }


    emailjs.init(PUBLIC_KEY);

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


    addHidden('to_email', data.email);
    addHidden('subject', 'Ihr persönlicher Messeplan für die IAA MOBILITY 2025');
    addHidden('message', 'Vielen Dank für Ihre Angaben im Messeformular. Auf dieser Basis habe ich für Sie einen individuellen Messeplan erstellt – mit Strategieempfehlungen, relevanten Ausstellern samt Standorten sowie passenden Events nach Tagen und Themen. Ziel ist es, Ihren Besuch auf der IAA MOBILITY so effizient und wirkungsvoll wie möglich zu gestalten.  Den persönlichen Messebericht finden Sie im Anhang.');

    const file = new File([pdfBytes], 'Messeplan.pdf', { type: 'application/pdf' });
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.name = 'my_file'; 
    fileInput.accept = 'application/pdf';

    const dt = new DataTransfer();
    dt.items.add(file);
    fileInput.files = dt.files;
    form.appendChild(fileInput);

    const fd = new FormData(form);
    let varBytes = 0;
    for (const [k, v] of fd.entries()) {
      if (v instanceof File) continue;
      varBytes += new TextEncoder().encode(String(v)).length;
    }
    console.log('Template variables size (bytes):', varBytes); 
    console.log('Attachment size (MB):', (file.size / (1024 * 1024)).toFixed(2));

    if (file.size > 10 * 1024 * 1024) {
      console.warn('PDF likely too large for mail providers (>10MB). Consider compressing.');
    }

    try {
      const res = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      return res;
    } finally {
      document.body.removeChild(form);
    }
  }

  const ALL_EXHIBITOR_NAMES = useMemo(() => {
    return Array.from(
      new Set(
        (EXHIBITORS_DB || [])
          .map((e) => (e?.name || "").trim())
          .filter((n) => n.length > 0)
      )
    ).sort((a, b) => a.localeCompare(b, "de"));
  }, []);

  const exhibitorsSuggestions = useMemo(() => {
    const q = search.toLowerCase();
    if (!q) return [] as string[];
    return ALL_EXHIBITOR_NAMES.filter((p) => p.toLowerCase().includes(q));
  }, [search, ALL_EXHIBITOR_NAMES]);

  async function handleSubmit() {
    setStep("download");
  }

  const isEmailValid = /^\S+@\S+\.\S+$/.test(data.email || "");

  async function handleSend() {
    setStep("done"); // sofort bestätigen
    void (async () => {
      try {
        const res = await fetch("/api/generate-plan", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: data.email, data, lang }),
        });
        if (!res.ok) throw new Error("PDF generation failed");
        const blob = await res.blob();
        console.log("Blob received");
        await sendMesseplanEmail(data, blob); // EmailJS bleibt im Browser
        console.log("Email sent");
      } catch (e) {
        console.error(e);
      }
    })();
  }

  const isFormValid = data.role && data.goal && data.days.length > 0;

  const t = (key: string) => {
    const dict: Record<string, Record<string, string>> = {
      de: {
        title: "Ihr persönlicher Messeplaner",
        tagline: "We get it done – every time, everywhere.",
        profileHeading: "Ihr Profil und Messeziele",
        q1: "1. Welche Rolle beschreibt Sie am besten?",
        q2: "2. Was möchten Sie mit Ihrem Messebesuch erreichen?",
        q3: "3. Welche Aussteller, Marken oder Themen sollen auf Ihren Messeplan?",
        q4: "4. An welchen Tagen sind Sie auf der Messe?",
        q5: "5. Optional: Marken oder Stände, die Sie auf jeden Fall sehen möchten?",
        submit: "Absenden",
        back: "Zurück",
        downloadTitle: "Ihr persönlicher Messeplan ist fertig – jetzt per Mail senden",
        downloadBtn: "PDF erstellen",
        creating: "Erstelle PDF ...",
        consent: "Mit Absenden stimmen Sie der Verarbeitung gemäß Datenschutzhinweisen zu.",
        searchPh: "Suche nach Ausstellern",
        langToggle: "EN",
      },
      en: {
        title: "Your personal trade fair planner",
        tagline: "We get it done – every time, everywhere.",
        profileHeading: "Your profile and goals",
        q1: "1. Which role describes you best?",
        q2: "2. What is your goal for the visit?",
        q3: "3. Which exhibitors, brands or topics should be on your trade fair plan?",
        q4: "4. On which days will you attend?",
        q5: "5. Optional: Any brands/booths you must see?",
        submit: "Submit",
        back: "Back",
        downloadTitle: "Your plan is ready – send the PDF now",
        downloadBtn: "Generate PDF",
        creating: "Generating PDF ...",
        consent: "By submitting you agree to our privacy policy.",
        searchPh: "Search exhibitors",
        langToggle: "DE",
      },
    };
    return dict[lang][key] || key;
  };

  return (
    <div className="min-h-screen bg-white">
      <section
        className="w-full"
        style={{ backgroundColor: "var(--tas-dark-blue)", color: "white" }}
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 py-12 px-6 relative">
          <button
            className="absolute right-6 top-6 tas-chip"
            onClick={() => setLang((l) => (l === "de" ? "en" : "de"))}
            title={lang === "de" ? "Switch to English" : "Auf Deutsch umstellen"}
          >
            {t("langToggle")}
          </button>
          <div className="shrink-0">
            <Image src="/tas_logo.png" alt="T.A.S. FORCE" width={140} height={140} priority />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight">{t("title")}</h1>
            <p className="mt-3 text-white/80">{t("tagline")}</p>
            <div className="mt-4 h-1 w-24" style={{ backgroundColor: "var(--tas-turquoise)" }} />
          </div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto p-6 -mt-10">
        <div className="bg-white rounded-xl shadow-xl border border-[var(--tas-light-grey)] p-6 md:p-8">
        {step === "form" && (
          <section className="space-y-8">
            <h2 className="text-lg font-semibold" style={{ color: "var(--tas-dark-blue)" }}>{t("profileHeading")}</h2>

            <div className="space-y-3">
              <label className="block font-medium">{t("q1")}</label>
              <div className="flex flex-wrap gap-2">
                {(ROLES_DICT[lang]).map((r) => (
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
              <label className="block font-medium">{t("q2")}</label>
              <div className="flex flex-wrap gap-2">
                {(GOALS_DICT[lang]).map((g) => (
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
              <label className="block font-medium">{t("q3")}</label>
              <textarea
                className="w-full rounded-md border p-3"
                rows={4}
                placeholder={lang === "de" ? "Freitext: Schreiben Sie frei – je konkreter, desto besser. Nennen Sie Marken, Technologien, Produktbereiche oder Anwendungsfälle (gern auch als kurzer Absatz). " : "Free text: Write freely – the more specific, the better. Mention brands, technologies, product areas or use cases (a short paragraph is fine too)."}
                value={data.exhibitorsText}
                onChange={(e) => setData((d) => ({ ...d, exhibitorsText: e.target.value }))}
              />
            </div>

            <div className="space-y-3">
              <label className="block font-medium">{t("q4")}</label>
              <div className="flex flex-wrap gap-2">
              {DAYS_LABELS[lang].map(({label, iso}) => {
                const active = data.days.includes(iso);
                return (
                  <button
                    key={iso}
                    type="button"
                    className={`tas-chip ${active ? "tas-chip-active" : ""}`}
                    onClick={() => setData(d => ({
                      ...d,
                      days: active ? d.days.filter(x => x !== iso) : [...d.days, iso],
                    }))}
                  >
                    {label}
                  </button>
                );
              })}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block font-medium">{t("q5")}</label>
              <input
                className="w-full rounded-md border p-2"
                placeholder={t("searchPh")}
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
                            if (active) {
                              return { ...d, mustSee: d.mustSee.filter((x) => x !== s) };
                            }
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
                        onClick={() => setData((d) => ({ ...d, mustSee: d.mustSee.filter((x) => x !== m) }))}
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
                {lang === "de"
                  ? (
                    <>
                      Mit Absenden stimmen Sie der Verarbeitung gemäß {" "}
                      <a
                        href="https://tas-force.com/de/datenschutz/"
                        target="_blank"
                        rel="noreferrer"
                        className="underline"
                        style={{ color: "var(--tas-dark-blue)" }}
                      >
                        Datenschutzhinweisen
                      </a>{" "}zu.
                    </>
                  )
                  : (
                    <>
                      By submitting you agree to our {" "}
                      <a
                        href="https://tas-force.com/de/datenschutz/"
                        target="_blank"
                        rel="noreferrer"
                        className="underline"
                        style={{ color: "var(--tas-dark-blue)" }}
                      >
                        privacy policy
                      </a>.
                    </>
                  )}
              </span>
              <button
                disabled={!isFormValid}
                className="tas-btn-primary disabled:opacity-50"
                onClick={handleSubmit}
              >
                {t("submit")}
              </button>
            </div>
          </section>
        )}

        {step === "download" && (
          <section className="space-y-6">
            <h2 className="text-lg font-semibold" style={{ color: "var(--tas-dark-blue)" }}>{t("downloadTitle")}</h2>
            <div className="space-y-2">
              <label className="block font-medium">{lang === "de" ? "Ihr Name" : "Your name"}</label>
              <input
                className="w-full rounded-md border p-2"
                placeholder={lang === "de" ? "Vor- und Nachname" : "First and last name"}
                value={data.name || ""}
                onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <label className="block font-medium">{lang === "de" ? "Ihre E-Mail-Adresse" : "Your email address"}</label>
              <input
                className="w-full rounded-md border p-2"
                placeholder={lang === "de" ? "name@example.com" : "name@example.com"}
                value={data.email || ""}
                onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))}
                type="email"
              />
            </div>
            <div className="flex items-center justify-end gap-3">
              <button className="tas-chip" onClick={() => setStep("form")}>{t("back")}</button>
              <button
                className="tas-btn-primary disabled:opacity-50"
                onClick={handleSend}
                disabled={!isEmailValid || loading}
              >
                {loading ? (lang === "de" ? "Sende per E‑Mail …" : "Sending via email …") : (lang === "de" ? "Per E‑Mail erhalten" : "Send by email")}
              </button>
            </div>
          </section>
        )}

          {step === "done" && (
            <section className="space-y-4 text-center">
              <h2 className="text-lg font-semibold" style={{ color: "var(--tas-dark-blue)" }}>
                {lang === "de" ? "Vielen Dank! Ihr persönlicher Messeplan ist unterwegs." : "Thank you! Your personal trade fair plan is on its way."}
              </h2>
              <p className="text-sm" style={{ color: "var(--tas-grey)" }}>
                {lang === "de" ? "Bitte prüfen Sie Ihren Posteingang. Falls nichts ankommt, schauen Sie im Spam-Ordner nach." : "Please check your inbox. If nothing arrives, check your spam folder."}
              </p>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
