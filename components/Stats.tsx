const stats = [
  { value: "1–2", label: "weeks avg. delivery" },
  { value: "100%", label: "fixed price" },
  { value: "Pre-seed", label: "to Series A" },
  { value: "Senior", label: "design level" },
];

export default function Stats() {
  return (
    <section
      className="grid grid-cols-2 md:grid-cols-4 gap-px"
      style={{ borderBottom: "1px solid var(--border)", background: "var(--border)" }}
    >
      {stats.map((s) => (
        <div key={s.label} className="py-6 px-5 md:px-6" style={{ background: "var(--bg)" }}>
          <div
            className="text-2xl md:text-3xl font-bold mb-1"
            style={{ fontFamily: "var(--font-anton)", color: "var(--yellow)" }}
          >
            {s.value}
          </div>
          <div className="font-mono text-xs uppercase tracking-wider leading-tight" style={{ color: "var(--dim)" }}>
            {s.label}
          </div>
        </div>
      ))}
    </section>
  );
}
