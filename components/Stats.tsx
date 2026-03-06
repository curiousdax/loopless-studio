const stats = [
  { value: "1–2", label: "weeks avg. delivery" },
  { value: "100%", label: "fixed price, no surprises" },
  { value: "Pre-seed", label: "to Series A focus" },
  { value: "Senior", label: "product design level" },
];

export default function Stats() {
  return (
    <section
      className="px-6 md:px-16 lg:px-24 py-12 grid grid-cols-2 md:grid-cols-4 gap-px"
      style={{ borderBottom: "1px solid var(--border)", background: "var(--border)" }}
    >
      {stats.map((s) => (
        <div key={s.label} className="py-8 px-6" style={{ background: "var(--bg)" }}>
          <div
            className="text-3xl md:text-4xl font-bold mb-1"
            style={{ fontFamily: "var(--font-anton)", color: "var(--yellow)" }}
          >
            {s.value}
          </div>
          <div className="font-mono text-xs uppercase tracking-wider" style={{ color: "var(--dim)" }}>
            {s.label}
          </div>
        </div>
      ))}
    </section>
  );
}
