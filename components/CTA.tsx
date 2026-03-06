export default function CTA() {
  return (
    <section
      id="contact"
      className="px-5 md:px-16 lg:px-24 py-16 md:py-24"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-3xl">
        <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--dim)" }}>
          Get in touch
        </span>
        <h2
          className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mt-6 mb-10"
          style={{ color: "var(--cream)" }}
        >
          Let's figure out if I can help.
        </h2>
        <p className="text-lg mb-10 leading-relaxed" style={{ color: "var(--dim)" }}>
          Free 30-minute call. No pitch, no commitment. If there's a fit, I'll send a proposal within 24 hours.
        </p>
        <a
          href="mailto:hello@loopless.studio"
          className="inline-flex items-center gap-3 px-8 py-4 font-bold rounded-full transition-all hover:scale-105"
          style={{ background: "var(--yellow)", color: "#090909" }}
        >
          Book a free call
          <span className="text-lg">→</span>
        </a>
      </div>

      {/* Footer */}
      <div
        className="mt-24 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <span className="font-mono text-xs" style={{ color: "var(--dim)", opacity: 0.5 }}>
          © 2026 Loopless Studio
        </span>
        <div className="flex gap-6">
          <a
            href="https://apek.me"
            className="font-mono text-xs transition-colors hover:text-[var(--cream)]"
            style={{ color: "var(--dim)", opacity: 0.5 }}
          >
            apek.me
          </a>
          <a
            href="https://linkedin.com"
            className="font-mono text-xs transition-colors hover:text-[var(--cream)]"
            style={{ color: "var(--dim)", opacity: 0.5 }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
