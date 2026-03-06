const items = [
  {
    n: "01",
    label: "Too early to hire",
    text: "A senior product designer is $80–150k/year. At seed stage, that budget belongs elsewhere.",
  },
  {
    n: "02",
    label: "AI tools aren't enough",
    text: "v0, Midjourney, Cursor — great tools, wrong strategy. Without product thinking, the output looks like a prompt.",
  },
  {
    n: "03",
    label: "Agencies are too slow",
    text: "Traditional agencies take weeks to start and months to deliver. You needed to ship yesterday.",
  },
];

export default function Problem() {
  return (
    <section
      className="px-5 md:px-16 lg:px-24 py-20 md:py-32"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-32">
        <div className="lg:w-56 shrink-0">
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--dim)" }}>
            The gap
          </span>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-16 md:mb-20" style={{ color: "var(--cream)" }}>
            You need UX.<br />You don't need a headcount.
          </h2>
          <div>
            {items.map((item, i) => (
              <div
                key={item.n}
                className="flex gap-8 md:gap-12 py-8 md:py-10"
                style={{
                  borderTop: i === 0 ? "1px solid var(--border)" : undefined,
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <span className="font-mono text-xs pt-1 shrink-0 w-8" style={{ color: "var(--dim)" }}>
                  {item.n}
                </span>
                <div>
                  <p className="font-semibold text-base mb-3" style={{ color: "var(--yellow)" }}>
                    {item.label}
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: "var(--dim)" }}>
                    {item.text}
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
