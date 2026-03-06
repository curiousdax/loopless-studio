const steps = [
  { n: "01", title: "Free 30-min call", desc: "Talk about where you are and what feels broken. No pitch." },
  { n: "02", title: "Scoped proposal", desc: "What gets done, when, at what cost. Fixed price, no surprises." },
  { n: "03", title: "Fast execution", desc: "AI-assisted workflows compress a month of design into a week. You get drafts early." },
  { n: "04", title: "Handoff", desc: "Files, docs, context. Your team can run with it independently from day one." },
];

export default function HowItWorks() {
  return (
    <section
      className="px-5 md:px-16 lg:px-24 py-20 md:py-32"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-32">
        <div className="lg:w-56 shrink-0">
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--dim)" }}>
            How it works
          </span>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-16 md:mb-20" style={{ color: "var(--cream)" }}>
            Simple process.<br className="hidden md:block" /> Real output.
          </h2>
          <div>
            {steps.map((step, i) => (
              <div
                key={step.n}
                className="flex items-start gap-8 md:gap-12 py-8 md:py-10"
                style={{
                  borderTop: i === 0 ? "1px solid var(--border)" : undefined,
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <span
                  className="font-bold shrink-0 w-16 md:w-20"
                  style={{ fontFamily: "var(--font-anton)", color: "var(--border)", fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1 }}
                >
                  {step.n}
                </span>
                <div className="pt-1">
                  <h3 className="font-bold text-lg mb-2" style={{ color: "var(--cream)" }}>
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: "var(--dim)" }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
