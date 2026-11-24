// src/app/page.tsx
import Header from "@/app/components/Header";
import About from "@/app/components/About";
import Experience from "@/app/components/Experience";
import Expertise from "@/app/components/Expertise";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    // El fondo negro ya está en layout.tsx, pero aseguramos el texto blanco
    <main className="min-h-screen text-white overflow-x-hidden">
      <div className="w-full md:w-[60%] mx-auto">
        {/* Who I am, then the work that shows it, then the role and the skills behind it. */}
        <Header />
        <About />
        <Projects />
        <Experience />
        <Expertise />
        <Contact />

        <Footer />
      </div>
    </main>
  );
}