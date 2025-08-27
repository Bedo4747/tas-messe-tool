"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import { EXHIBITORS } from "@/lib/data/exhibitors";

type QuestionnaireData = {
  role: string | null;
  goal: string | null;
  exhibitorsText: string;
  days: string[];
  mustSee: string[];
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

const DAYS = [
  "09. September",
  "10. September",
  "11. September",
  "12. September",
];

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
  });

  const exhibitorsSuggestions = useMemo(() => {
    return EXHIBITORS.filter((p) => p.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  async function handleSubmit() {
    setStep("download");
  }

  async function handleSend() {
    try {
      setLoading(true);
      const res = await fetch("/api/generate-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });
      if (!res.ok) throw new Error("Fehler beim Erstellen");
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "messeplan.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
      setStep("done");
    } catch {
      alert("Senden fehlgeschlagen. Bitte erneut versuchen.");
    } finally {
      setLoading(false);
    }
  }

  const isFormValid = data.role && data.goal && data.days.length > 0;
  const isEmailValid = true;

  return (
    <div className="min-h-screen bg-white">
      <section
        className="w-full"
        style={{ backgroundColor: "var(--tas-dark-blue)", color: "white" }}
      >
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
              <label className="block font-medium">3) Geben Sie mir Input zu den Ausstellern die Sie interessieren.</label>
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
              <label className="block font-medium">5) Optional: Marken oder Stände, die Sie auf jeden Fall sehen möchten?</label>
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
                Mit Absenden stimmen Sie der Verarbeitung gemäß Datenschutzhinweisen zu.
              </span>
              <button
                disabled={!isFormValid}
                className="tas-btn-primary disabled:opacity-50"
                onClick={handleSubmit}
              >
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
            <div className="flex items-center justify-end gap-3">
              <button className="tas-chip" onClick={() => setStep("form")}>Zurück</button>
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
