const services = [
  { title: "AI UX Sprint", tag: "1 week", desc: "Audit your product, map where AI improves the experience, deliver a concrete action plan your team executes immediately." },
  { title: "AI Design Workflow", tag: "Workshop", desc: "Set up your team with the right AI tools and processes — ship high-quality UI, copy, and assets without a dedicated designer." },
  { title: "Launch-Ready Design", tag: "2 weeks", desc: "Landing page, onboarding flow, core screens. Designed with AI tools, handed off to engineering. Built for speed." },
  { title: "UX Audit", tag: "3–5 days", desc: "What's hurting conversion, what's confusing users, what to fix first. Prioritized, actionable, no filler." },
  { title: "Pitch Deck Design", tag: "3 days", desc: "Investor-ready slides built around your narrative. I work with what you have or help structure the story." },
  { title: "Design Advisor", tag: "Monthly", desc: "Senior product brain on-call. Review decisions, unblock your team, catch mistakes before they ship. Pause anytime." },
];

export default function Services() {
  return (
    <section
      id="services"
      className="px-5 md:px-16 lg:px-24 py-20 md:py-32"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-32">
        <div className="lg:w-56 shrink-0">
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--dim)" }}>
            What I offer
          </span>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4" style={{ color: "var(--cream)" }}>
            Fixed scope.<br className="hidden md:block" /> Fast. No surprises.
          </h2>
          <p className="text-base md:text-lg mb-12 md:mb-16" style={{ color: "var(--dim)" }}>
            Every engagement ends with something real your team can use.
          </p>
          <div className="grid sm:grid-cols-2 gap-px" style={{ background: "var(--border)" }}>
            {services.map((s) => (
              <div
                key={s.title}
                className="p-7 md:p-9"
                style={{ background: "var(--bg)" }}
              >
                <div className="flex items-start justify-between mb-4 gap-4">
                  <h3 className="text-lg font-bold leading-tight" style={{ color: "var(--cream)" }}>
                    {s.title}
                  </h3>
                  <span
                    className="font-mono text-xs shrink-0 px-2.5 py-1 rounded whitespace-nowrap"
                    style={{ color: "var(--yellow)", background: "rgba(218,255,0,0.08)" }}
                  >
                    {s.tag}
                  </span>
                </div>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--dim)" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
