const stats = [
  { value: "1–2", label: "weeks avg. delivery" },
  { value: "100%", label: "fixed price" },
  { value: "Pre-seed", label: "to Series A" },
  { value: "Senior", label: "design level" },
];

export default function Stats() {
  return (
    <div style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: "var(--border)" }}>
          {stats.map((s) => (
            <div key={s.label} className="py-8 px-6 md:px-8" style={{ background: "var(--bg)" }}>
              <div
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ fontFamily: "var(--font-anton)", color: "var(--yellow)" }}
              >
                {s.value}
              </div>
              <div className="font-mono text-xs uppercase tracking-wider" style={{ color: "var(--dim)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
