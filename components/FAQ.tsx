"use client";
import { useState } from "react";
import Container from "./Container";

const faqs = [
  { q: "How is this different from hiring a freelancer?", a: "A freelancer quotes hourly and the final bill is unpredictable. Loopless is fixed scope, fixed price, and I use AI tools to move faster than a traditional design process. You know exactly what you're getting and when." },
  { q: "How fast do you actually deliver?", a: "Most projects deliver in 1–2 weeks. Audits and sprint engagements are 3–5 days. AI-assisted workflows compress what used to take a month into a week." },
  { q: "Do I need to know what I want before reaching out?", a: "No. Tell me where you are and what feels broken. The free 30-minute call is for figuring out what you actually need — not for me to pitch you." },
  { q: "What if I just need someone to think through design decisions with me?", a: "That's the Design Advisor plan. You get a senior product designer on-call for questions, reviews, and decision support — without committing to a project." },
  { q: "Do you use Figma?", a: "Sometimes, when it's the right tool. Mostly I work directly in code-friendly formats, Framer, or AI-native tools that skip the Figma-to-handoff bottleneck entirely." },
  { q: "What stage are your clients at?", a: "Pre-seed to Series A. Teams that are moving fast and need design thinking without the overhead of a full design function." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32" style={{ borderTop: "1px solid var(--border)" }}>
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-48 shrink-0 pt-1">
            <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--dim)" }}>FAQ</span>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16" style={{ color: "var(--cream)" }}>
              Common questions
            </h2>
            <div>
              {faqs.map((faq, i) => (
                <div key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                  <button
                    className="w-full text-left py-6 flex items-start justify-between gap-6"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span className="font-semibold text-base md:text-lg leading-snug" style={{ color: "var(--cream)" }}>
                      {faq.q}
                    </span>
                    <span className="text-xl shrink-0 mt-0.5" style={{ color: "var(--dim)" }}>
                      {open === i ? "−" : "+"}
                    </span>
                  </button>
                  {open === i && (
                    <p className="pb-6 text-base leading-relaxed" style={{ color: "var(--dim)" }}>
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
