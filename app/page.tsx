import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import Proof from "@/components/Proof";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Solution />
        <HowItWorks />
        <WhyUs />
        <Proof />
        <FinalCTA />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
