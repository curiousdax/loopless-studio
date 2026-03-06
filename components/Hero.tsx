export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between px-5 md:px-16 lg:px-24 pt-8 pb-10">
      {/* Nav */}
      <nav className="flex items-center justify-between gap-4">
        <span className="font-mono text-xs md:text-sm truncate" style={{ color: "var(--dim)" }}>
          LOOPLESS.STUDIO
        </span>
        <a
          href="#contact"
          className="font-mono text-xs border px-3 py-2 rounded-full transition-all hover:bg-[var(--yellow)] hover:text-black hover:border-[var(--yellow)] whitespace-nowrap shrink-0"
          style={{ borderColor: "var(--border)", color: "var(--dim)" }}
        >
          GET IN TOUCH →
        </a>
      </nav>

      {/* Hero content */}
      <div className="mt-auto pt-12">
        {/* Tag */}
        <div className="animate-fade-up mb-5 inline-flex items-center gap-2 flex-wrap">
          <span className="w-2 h-2 rounded-full shrink-0" style={{ background: "var(--yellow)" }} />
          <span className="font-mono text-xs uppercase tracking-widest leading-relaxed" style={{ color: "var(--dim)" }}>
            AI Design Consulting — Available Now
          </span>
        </div>

        {/* Massive display type */}
        <div className="animate-fade-up-delay-1 leading-none overflow-hidden">
          <div
            className="block tracking-tight"
            style={{ fontFamily: "var(--font-anton)", color: "var(--cream)", lineHeight: 0.88, fontSize: "clamp(3.5rem, 22vw, 14rem)" }}
          >
            SKIP
          </div>
          <div
            className="block tracking-tight relative"
            style={{ fontFamily: "var(--font-anton)", color: "var(--dim)", lineHeight: 0.88, fontSize: "clamp(3.5rem, 22vw, 14rem)" }}
          >
            <span className="strike">FIGMA.</span>
          </div>
          <div
            className="block tracking-tight"
            style={{ fontFamily: "var(--font-anton)", color: "var(--yellow)", lineHeight: 0.88, fontSize: "clamp(3.5rem, 22vw, 14rem)" }}
          >
            SHIP.
          </div>
        </div>

        {/* Sub + CTA row */}
        <div className="animate-fade-up-delay-3 mt-8 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
          <p className="text-base md:text-lg max-w-md leading-relaxed" style={{ color: "var(--dim)" }}>
            I help early-stage startups use AI to build great user experiences in days, not months.
            Senior product designer. No full-time hire needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 font-bold text-sm rounded-full transition-all hover:opacity-90"
              style={{ background: "var(--yellow)", color: "#090909" }}
            >
              Book a free call
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-6 py-3 font-bold text-sm rounded-full border transition-all"
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
