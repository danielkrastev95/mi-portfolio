// src/lib/LanguageContext.tsx
"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traducciones
const translations: Record<Language, Record<string, string>> = {
    es: {
        // Navigation
        "nav.git": "GIT",
        "nav.in": "IN",

        // Header
        "header.available": "Liderazgo tecnológico, enfoque técnico",
        "header.role1": "Full Stack Developer",
        "header.role2": "Problem Solver",
        "header.role3": "Web Developer",
        "header.role4": "Tech Enthusiast",

        // About
        "about.title": "Sobre Mí",
        "about.eyebrow": "Perfil",
        "about.role": "Director de Sistemas",
        "about.role2": "Full-Stack Developer",
        "about.bio": "Profesional de tecnología con experiencia en dirección de sistemas y desarrollo de software. Actualmente lidero operaciones de Sistemas, infraestructura, ciberseguridad, proveedores tecnológicos y proyectos digitales.",
        "about.bio2": "Mantengo un perfil técnico y práctico, combinando gestión tecnológica con automatización, desarrollo de software y mejora de procesos.",
        "about.location": "Madrid, España",
        "about.location.label": "Ubicación",
        "about.focus.label": "Enfoque",
        "about.focus.infrastructure": "Infraestructura",
        "about.focus.cybersecurity": "Ciberseguridad",
        "about.focus.automation": "Automatización",
        "about.focus.products": "Productos digitales",
        "about.focus.software": "Desarrollo de software",
        "about.education": "DAW",
        "about.education.label": "Educación",
        "about.education.desc": "Desarrollo de Aplicaciones Web",

        // Expertise
        "expertise.title": "Competencias Técnicas",
        "expertise.frontend": "Frontend",
        "expertise.frontend.desc": "Desarrollo de UI moderno con Next.js, React, TypeScript y Tailwind CSS.",
        "expertise.backend": "Backend",
        "expertise.backend.desc": "Construcción de APIs escalables con Java, Python y Django.",
        "expertise.database": "Database",
        "expertise.database.desc": "Modelado y gestión eficiente de datos con MySQL y Oracle.",
        "expertise.systems": "Systems",
        "expertise.systems.identity": "Identidad y directorio",
        "expertise.systems.cloud": "Cloud y Microsoft 365",
        "expertise.systems.infra": "Infraestructura y redes",
        "expertise.systems.security": "Seguridad y continuidad",
        "expertise.systems.automation": "Automatización y scripting",

        // Experience
        "experience.title": "Experiencia",
        "experience.role": "Director de Sistemas",
        "experience.company": "VEGAP",
        "experience.period": "Puesto actual",
        "experience.summary": "Responsable del departamento de Sistemas: estrategia tecnológica, infraestructura, seguridad y proyectos digitales, con un enfoque práctico en desarrollo y automatización.",
        "experience.impactLabel": "Impacto",

        "experience.a1.title": "Liderazgo del departamento de Sistemas",
        "experience.a1.desc": "Dirección del área de Sistemas: prioridades, presupuesto y hoja de ruta tecnológica alineada con los objetivos de negocio.",
        "experience.a1.impact": "Centralización de la gestión de Sistemas en un único punto de decisión y soporte.",

        "experience.a2.title": "Infraestructura y Microsoft 365",
        "experience.a2.desc": "Gestión de servidores, redes, identidades y del entorno Microsoft 365 y Azure de la organización.",
        "experience.a2.impact": "Migración y consolidación de servicios en la nube, reduciendo dependencias locales.",

        "experience.a3.title": "Proveedores tecnológicos",
        "experience.a3.desc": "Selección, negociación y seguimiento de proveedores externos y servicios gestionados.",
        "experience.a3.impact": "Unificación de proveedores y contratos, con mejor control de costes y tiempos de respuesta.",

        "experience.a4.title": "Ciberseguridad",
        "experience.a4.desc": "Políticas de seguridad, control de accesos, copias de seguridad y concienciación del equipo.",
        "experience.a4.impact": "Implantación de MFA y de un modelo de permisos por rol en toda la organización.",

        "experience.a5.title": "Proyectos digitales y web",
        "experience.a5.desc": "Definición y ejecución de proyectos web y de plataformas internas, de la idea a producción.",
        "experience.a5.impact": "Puesta en marcha de nuevas plataformas digitales y renovación de las existentes.",

        "experience.a6.title": "Automatización y mejora de procesos",
        "experience.a6.desc": "Detección de tareas manuales repetitivas y desarrollo de scripts e integraciones para eliminarlas.",
        "experience.a6.impact": "Automatización de procesos internos con reducción significativa de tiempos y errores.",

        // Projects
        "projects.title": "Proyectos",
        "projects.viewProject": "Ver proyecto",
        "projects.comingSoon": "Próximamente",

        // Contact
        "contact.title": "Contacto",

        // Project Detail
        "project.backToProjects": "Volver a proyectos",
        "project.role": "Rol",
        "project.duration": "Duración",
        "project.status": "Estado",
        "project.status.completed": "Completado",
        "project.status.inProgress": "En desarrollo",
        "project.status.planned": "Planificado",
        "project.technologies": "Tecnologías",
        "project.features": "Funcionalidades",
        "project.challenges": "Desafíos",
        "project.learnings": "Aprendizajes",
        "project.visitSite": "Visitar sitio",
        "project.viewCode": "Ver código",
        "project.viewDemo": "Ver demo",
    },
    en: {
        // Navigation
        "nav.git": "GIT",
        "nav.in": "IN",

        // Header
        "header.available": "Technology leadership, hands-on focus",
        "header.role1": "Full Stack Developer",
        "header.role2": "Problem Solver",
        "header.role3": "Web Developer",
        "header.role4": "Tech Enthusiast",

        // About
        "about.title": "About Me",
        "about.eyebrow": "Profile",
        "about.role": "IT Director",
        "about.role2": "Full-Stack Developer",
        "about.bio": "Technology professional with experience in systems management and software development. I currently lead IT operations, infrastructure, cybersecurity, technology providers and digital projects.",
        "about.bio2": "I keep a hands-on, technical profile, combining technology management with automation, software development and process improvement.",
        "about.location": "Madrid, Spain",
        "about.location.label": "Location",
        "about.focus.label": "Focus",
        "about.focus.infrastructure": "Infrastructure",
        "about.focus.cybersecurity": "Cybersecurity",
        "about.focus.automation": "Automation",
        "about.focus.products": "Digital Products",
        "about.focus.software": "Software Development",
        "about.education": "DAW",
        "about.education.label": "Education",
        "about.education.desc": "Web Application Development",

        // Expertise
        "expertise.title": "Technical Expertise",
        "expertise.frontend": "Frontend",
        "expertise.frontend.desc": "Modern UI development using Next.js, React, TypeScript & Tailwind CSS.",
        "expertise.backend": "Backend",
        "expertise.backend.desc": "Building scalable APIs & server-side logic with Java, Python & Django.",
        "expertise.database": "Database",
        "expertise.database.desc": "Efficient data modeling and management with MySQL & Oracle.",
        "expertise.systems": "Systems",
        "expertise.systems.identity": "Identity & Directory",
        "expertise.systems.cloud": "Cloud & Microsoft 365",
        "expertise.systems.infra": "Infrastructure & Networking",
        "expertise.systems.security": "Security & Continuity",
        "expertise.systems.automation": "Automation & Scripting",

        // Experience
        "experience.title": "Experience",
        "experience.role": "IT Director",
        "experience.company": "VEGAP",
        "experience.period": "Current role",
        "experience.summary": "Head of the IT department: technology strategy, infrastructure, security and digital projects, with a hands-on approach to development and automation.",
        "experience.impactLabel": "Impact",

        "experience.a1.title": "IT Department Leadership",
        "experience.a1.desc": "Running the IT area: priorities, budget and a technology roadmap aligned with business goals.",
        "experience.a1.impact": "Centralised IT management into a single point of decision and support.",

        "experience.a2.title": "Infrastructure & Microsoft 365",
        "experience.a2.desc": "Managing servers, networks, identities and the organisation's Microsoft 365 and Azure environment.",
        "experience.a2.impact": "Migrated and consolidated services into the cloud, cutting on-premise dependencies.",

        "experience.a3.title": "Technology Providers",
        "experience.a3.desc": "Selecting, negotiating with and overseeing external providers and managed services.",
        "experience.a3.impact": "Unified providers and contracts, improving cost control and response times.",

        "experience.a4.title": "Cybersecurity",
        "experience.a4.desc": "Security policies, access control, backup strategy and team awareness.",
        "experience.a4.impact": "Rolled out MFA and a role-based permission model across the organisation.",

        "experience.a5.title": "Digital & Web Projects",
        "experience.a5.desc": "Defining and delivering web and internal platform projects, from idea to production.",
        "experience.a5.impact": "Launched new digital platforms and modernised the existing ones.",

        "experience.a6.title": "Automation & Process Improvement",
        "experience.a6.desc": "Spotting repetitive manual work and building scripts and integrations to remove it.",
        "experience.a6.impact": "Automated internal processes, significantly reducing time spent and errors.",

        // Projects
        "projects.title": "Projects",
        "projects.viewProject": "View project",
        "projects.comingSoon": "Coming Soon",

        // Contact
        "contact.title": "Contact",

        // Project Detail
        "project.backToProjects": "Back to projects",
        "project.role": "Role",
        "project.duration": "Duration",
        "project.status": "Status",
        "project.status.completed": "Completed",
        "project.status.inProgress": "In Progress",
        "project.status.planned": "Planned",
        "project.technologies": "Technologies",
        "project.features": "Features",
        "project.challenges": "Challenges",
        "project.learnings": "Learnings",
        "project.visitSite": "Visit site",
        "project.viewCode": "View code",
        "project.viewDemo": "View demo",
    }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("es");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Recuperar idioma guardado
        const saved = localStorage.getItem("language") as Language;
        if (saved && (saved === "es" || saved === "en")) {
            setLanguage(saved);
        }
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            localStorage.setItem("language", language);
        }
    }, [language, mounted]);

    const t = (key: string): string => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
