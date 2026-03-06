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
      className="px-6 md:px-16 lg:px-24 py-24"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left label */}
        <div className="lg:w-64 shrink-0">
          <span
            className="font-mono text-xs uppercase tracking-widest"
            style={{ color: "var(--dim)" }}
          >
            The gap
          </span>
        </div>

        {/* Right content */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-16" style={{ color: "var(--cream)" }}>
            You need UX. You don't need a headcount.
          </h2>
          <div className="space-y-0">
            {items.map((item, i) => (
              <div
                key={item.n}
                className="flex gap-8 py-8"
                style={{
                  borderTop: i === 0 ? "1px solid var(--border)" : undefined,
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <span className="font-mono text-xs pt-1 shrink-0" style={{ color: "var(--dim)" }}>
                  {item.n}
                </span>
                <div>
                  <p className="font-semibold mb-2" style={{ color: "var(--yellow)" }}>
                    {item.label}
                  </p>
                  <p style={{ color: "var(--dim)" }} className="leading-relaxed">
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
