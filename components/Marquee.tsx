const items = [
  "SKIP FIGMA",
  "SHIP FASTER",
  "AI-NATIVE DESIGN",
  "NO LOOPS",
  "FIXED PRICE",
  "SENIOR LEVEL",
  "EARLY-STAGE FOCUS",
  "RESULTS IN DAYS",
];

export default function Marquee() {
  const repeated = [...items, ...items];

  return (
    <div
      className="overflow-hidden py-4"
      style={{ background: "var(--yellow)", borderTop: "1px solid #c8ea00", borderBottom: "1px solid #c8ea00" }}
    >
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 mx-6"
            style={{ fontFamily: "var(--font-anton)", color: "#090909", fontSize: "1rem", letterSpacing: "0.05em" }}
          >
            {item}
            <span style={{ color: "#090909", opacity: 0.3 }}>—</span>
          </span>
        ))}
      </div>
    </div>
  );
}
