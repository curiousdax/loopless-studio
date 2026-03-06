export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between px-6 md:px-16 lg:px-24 pt-10 pb-12">
      {/* Nav */}
      <nav className="flex items-center justify-between">
        <span className="font-mono text-sm" style={{ color: "var(--dim)" }}>
          LOOPLESS.STUDIO
        </span>
        <a
          href="#contact"
          className="font-mono text-xs border px-4 py-2 rounded-full transition-all hover:bg-[var(--yellow)] hover:text-black hover:border-[var(--yellow)]"
          style={{ borderColor: "var(--border)", color: "var(--dim)" }}
        >
          GET IN TOUCH →
        </a>
      </nav>

      {/* Hero content */}
      <div className="mt-auto">
        {/* Tag */}
        <div className="animate-fade-up mb-6 inline-flex items-center gap-3">
          <span className="w-2 h-2 rounded-full" style={{ background: "var(--yellow)" }} />
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--dim)" }}>
            AI Design Consulting — Available Now
          </span>
        </div>

        {/* Massive display type */}
        <div className="animate-fade-up-delay-1 leading-none">
          <div
            className="block text-[22vw] lg:text-[18vw] tracking-tight"
            style={{ fontFamily: "var(--font-anton)", color: "var(--cream)", lineHeight: 0.9 }}
          >
            SKIP
          </div>
          <div
            className="block text-[22vw] lg:text-[18vw] tracking-tight relative"
            style={{ fontFamily: "var(--font-anton)", color: "var(--dim)", lineHeight: 0.9 }}
          >
            <span className="strike">FIGMA.</span>
          </div>
          <div
            className="block text-[22vw] lg:text-[18vw] tracking-tight"
            style={{ fontFamily: "var(--font-anton)", color: "var(--yellow)", lineHeight: 0.9 }}
          >
            SHIP.
          </div>
        </div>

        {/* Sub + CTA row */}
        <div className="animate-fade-up-delay-3 mt-10 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <p className="text-lg max-w-md leading-relaxed" style={{ color: "var(--dim)" }}>
            I help early-stage startups use AI to build great user experiences in days, not months.
            Senior product designer. No full-time hire needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 font-bold text-sm rounded-full transition-all hover:scale-105 hover:opacity-90"
              style={{ background: "var(--yellow)", color: "#090909" }}
            >
              Book a free call
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-7 py-3.5 font-bold text-sm rounded-full border transition-all hover:border-zinc-500"
              style={{ borderColor: "var(--border)", color: "var(--dim)" }}
            >
              See services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
