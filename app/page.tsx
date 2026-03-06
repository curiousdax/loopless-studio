import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="bg-[#090909] text-white min-h-screen">
      <Hero />
      <Marquee />
      <Stats />
      <Problem />
      <Services />
      <HowItWorks />
      <About />
      <FAQ />
      <CTA />
    </main>
  );
}
