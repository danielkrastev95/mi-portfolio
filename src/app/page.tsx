// src/app/page.tsx
import Header from "@/app/components/Header";
import AboutAndExpertise from "@/app/components/AboutAndExpertise";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    // El fondo negro ya está en layout.tsx, pero aseguramos el texto blanco
    <main className="min-h-screen text-white overflow-x-hidden">
      <div className="w-full md:w-[60%] mx-auto">
        <Header />
        <AboutAndExpertise />
        <Projects />
        <Contact />
        
        {/* Footer */}
        <footer className="text-center text-gray-500 text-xs py-12 font-light border-t border-white/5">
          © 2026 Daniel Krastev Manov
        </footer>
      </div>
    </main>
  );
}