"use client";
import { useState } from "react";

const faqs = [
  {
    q: "How is this different from hiring a freelancer?",
    a: "A freelancer quotes hourly and the final bill is unpredictable. Loopless is fixed scope, fixed price, and I use AI tools to move faster than a traditional design process. You know exactly what you're getting and when.",
  },
  {
    q: "How fast do you actually deliver?",
    a: "Most projects deliver in 1–2 weeks. Audits and sprint engagements are 3–5 days. I use AI-assisted workflows that compress what used to take a month into a week.",
  },
  {
    q: "Do I need to know what I want before reaching out?",
    a: "No. Tell me where you are and what feels broken. The free 30-minute call is specifically for figuring out what you actually need — not for me to pitch you.",
  },
  {
    q: "What if I just need someone to think through design decisions with me?",
    a: "That's the Design Advisor plan. You get a senior product designer on-call for questions, reviews, and decision support — without committing to a project.",
  },
  {
    q: "Do you use Figma?",
    a: "Sometimes, when it's the right tool. Mostly I work directly in code-friendly formats, Framer, or AI-native tools that skip the Figma-to-handoff bottleneck entirely.",
  },
  {
    q: "What stage are your clients at?",
    a: "Pre-seed to Series A. Teams that are moving fast and need design thinking without the overhead of a full design function.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-6 md:px-16 lg:px-32 py-16 md:py-24 border-t border-zinc-800">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-zinc-500 mb-6">FAQ</p>
        <h2 className="text-4xl font-bold mb-12">Common questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-zinc-800 rounded-2xl overflow-hidden">
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-zinc-900 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-medium text-white">{faq.q}</span>
                <span className="text-zinc-500 shrink-0 text-xl">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-zinc-400 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
