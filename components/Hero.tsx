import Container from "./Container";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between py-8">
      <Container>
        <nav className="flex items-center justify-between gap-4">
          <span className="font-mono text-xs md:text-sm truncate" style={{ color: "var(--dim)" }}>
            LOOPLESS.STUDIO
          </span>
          <a
            href="#contact"
            className="font-mono text-xs border px-4 py-2 rounded-full transition-all hover:bg-[var(--yellow)] hover:text-black hover:border-[var(--yellow)] whitespace-nowrap shrink-0"
            style={{ borderColor: "var(--border)", color: "var(--dim)" }}
          >
            GET IN TOUCH →
          </a>
        </nav>
      </Container>

      <Container className="pb-12 pt-16">
        {/* Tag */}
        <div className="animate-fade-up mb-6 inline-flex items-center gap-3">
          <span className="w-2 h-2 rounded-full shrink-0" style={{ background: "var(--yellow)" }} />
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--dim)" }}>
            AI Design Consulting — Available Now
          </span>
        </div>

        {/* Display type */}
        <div className="animate-fade-up-delay-1 overflow-hidden mb-10">
          {["SKIP", "FIGMA.", "SHIP."].map((word, i) => (
            <div
              key={word}
              className={word === "FIGMA." ? "strike" : ""}
              style={{
                fontFamily: "var(--font-anton)",
                fontSize: "clamp(3.5rem, 18vw, 13rem)",
                lineHeight: 0.88,
                letterSpacing: "-0.01em",
                color: word === "SKIP" ? "var(--cream)" : word === "FIGMA." ? "var(--dim)" : "var(--yellow)",
                display: "block",
              }}
            >
              {word}
            </div>
          ))}
        </div>

        {/* Sub + CTA */}
        <div className="animate-fade-up-delay-3 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <p className="text-base md:text-lg max-w-md leading-relaxed" style={{ color: "var(--dim)" }}>
            I help early-stage startups use AI to build great user experiences
            in days, not months. Senior product designer. No full-time hire needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 font-bold text-sm rounded-full transition-all hover:opacity-90"
              style={{ background: "var(--yellow)", color: "#090909" }}
            >
              Book a free call
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-3 font-bold text-sm rounded-full border transition-all"
              style={{ borderColor: "var(--border)", color: "var(--dim)" }}
            >
              See services
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
