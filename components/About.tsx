export default function About() {
  return (
    <section
      className="px-5 md:px-16 lg:px-24 py-16 md:py-24"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        <div className="lg:w-64 shrink-0">
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--dim)" }}>
            Who I am
          </span>
        </div>
        <div className="flex-1 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8" style={{ color: "var(--cream)" }}>
              Antonija Pek
            </h2>
            <div className="space-y-4" style={{ color: "var(--dim)" }}>
              <p className="leading-relaxed">
                Senior Product Designer at Yousician, previously at Wolt. Designing products used by millions, using AI to do it faster and smarter.
              </p>
              <p className="leading-relaxed">
                I also code. So when I talk about AI in product design, I mean real workflows — not the theory.
              </p>
              <p className="leading-relaxed">
                I work with early-stage teams because that's where one good UX call has the most impact. One right decision at seed is worth ten at Series B.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            {[
              ["Now", "Sr. Product Designer, Yousician"],
              ["Before", "Product Designer, Wolt"],
              ["Skills", "AI-native design workflows"],
              ["Also", "Frontend development"],
              ["Focus", "UX that converts"],
              ["Based", "Croatia — works globally"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex gap-6 py-3"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <span className="font-mono text-xs w-16 shrink-0 pt-0.5" style={{ color: "var(--dim)", opacity: 0.5 }}>
                  {label}
                </span>
                <span className="text-sm" style={{ color: "var(--cream)" }}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
