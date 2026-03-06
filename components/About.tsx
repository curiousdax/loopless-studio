import Container from "./Container";

export default function About() {
  return (
    <section className="py-20 md:py-32" style={{ borderTop: "1px solid var(--border)" }}>
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-48 shrink-0 pt-1">
            <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--dim)" }}>
              Who I am
            </span>
          </div>
          <div className="flex-1 grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: "var(--cream)" }}>
                Antonija Pek
              </h2>
              <div className="space-y-5 text-base leading-relaxed" style={{ color: "var(--dim)" }}>
                <p>Lead Product Designer at Yousician, previously Sr. Product Designer at Wolt. Designing products used by millions, using AI to do it faster and smarter.</p>
                <p>I also code. So when I talk about AI in product design, I mean real workflows, not the theory.</p>
                <p>I work with early-stage teams because that's where one good UX call has the most impact. One right decision at seed is worth ten at Series B.</p>
              </div>
            </div>
            <div>
              {[
                ["Now", "Lead Product Designer, Yousician"],
                ["Before", "Sr. Product Designer, Wolt"],
                ["Skills", "AI-native design workflows"],
                ["Also", "Frontend development"],
                ["Focus", "UX that converts"],
                ["Based", "Finland — works globally"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex gap-6 py-4"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <span className="font-mono text-xs w-14 shrink-0 pt-0.5" style={{ color: "var(--dim)", opacity: 0.4 }}>
                    {label}
                  </span>
                  <span className="text-sm md:text-base" style={{ color: "var(--cream)" }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
