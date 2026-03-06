import Container from "./Container";

const steps = [
  { n: "01", title: "Free 30-min call", desc: "Talk about where you are and what feels broken. No pitch." },
  { n: "02", title: "Scoped proposal", desc: "What gets done, when, at what cost. Fixed price, no surprises." },
  { n: "03", title: "Fast execution", desc: "AI-assisted workflows compress a month of design into a week. You get drafts early." },
  { n: "04", title: "Handoff", desc: "Files, docs, context. Your team can run with it independently from day one." },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-32" style={{ borderTop: "1px solid var(--border)" }}>
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-48 shrink-0 pt-1">
            <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--dim)" }}>
              How it works
            </span>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-16" style={{ color: "var(--cream)" }}>
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
                    className="shrink-0"
                    style={{
                      fontFamily: "var(--font-anton)",
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      lineHeight: 1,
                      color: "var(--border)",
                      width: "3.5rem",
                    }}
                  >
                    {step.n}
                  </span>
                  <div className="pt-1">
                    <h3 className="font-bold text-lg mb-2" style={{ color: "var(--cream)" }}>{step.title}</h3>
                    <p className="text-base leading-relaxed" style={{ color: "var(--dim)" }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
