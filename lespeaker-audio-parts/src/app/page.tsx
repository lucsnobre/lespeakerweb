"use client";

import dynamic from 'next/dynamic';

const Header = dynamic(() => import("@/components/Header"), { ssr: true });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const About = dynamic(() => import("@/components/About"), { ssr: true });
const Services = dynamic(() => import("@/components/Services"), { ssr: true });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <main className="relative z-10">
        <Hero />
        
        <section id="sobre">
          <About />
        </section>
        
        <section id="servicos">
          <Services />
        </section>
        
        <section id="projetos">
          <Projects />
        </section>

        <section id="contato">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
