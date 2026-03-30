import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Motivations from "@/components/Motivations";
import Goals from "@/components/Goals";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Motivations />
      <Goals />
      <Contact />
    </main>
  );
}
