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
        "nav.cv": "CV",
        "nav.in": "IN",

        // Header
        "header.available": "Disponible para trabajar",
        "header.role1": "Full Stack Developer",
        "header.role2": "Problem Solver",
        "header.role3": "Web Developer",
        "header.role4": "Tech Enthusiast",

        // About
        "about.title": "Sobre Mí",
        "about.bio": "Soy un desarrollador full-stack con una fuerte afinidad por el diseño. Mi objetivo es crear experiencias digitales que no solo funcionen bien, sino que también se vean increíbles. Cuando no estoy programando, probablemente esté explorando nuevas tecnologías o disfrutando de un buen café.",
        "about.location": "Madrid, España",
        "about.location.label": "Ubicación",
        "about.education": "DAW",
        "about.education.label": "Educación",
        "about.education.desc": "Desarrollo de Aplicaciones Web",
        "about.current": "Proyecto Actual",
        "about.current.project": "Sierra Nevada Insiders",
        "about.current.desc": "Plataforma web para la comunidad de esquí",
        "about.stats.projects": "Proyectos",
        "about.stats.years": "Años Exp.",
        "about.stats.technologies": "Tecnologías",
        "about.interests": "Intereses",
        "about.interests.video": "Cine",
        "about.interests.volleyball": "Fútbol",
        "about.interests.music": "Música",

        // Expertise
        "expertise.title": "Experiencia",
        "expertise.frontend": "Frontend",
        "expertise.frontend.desc": "Desarrollo de UI moderno con Next.js, React, TypeScript y Tailwind CSS.",
        "expertise.backend": "Backend",
        "expertise.backend.desc": "Construcción de APIs escalables con Java, Python y Django.",
        "expertise.database": "Database",
        "expertise.database.desc": "Modelado y gestión eficiente de datos con MySQL y Oracle.",
        "expertise.systems": "Systems",

        // Projects
        "projects.title": "Proyectos",
        "projects.viewProject": "Ver proyecto",
        "projects.comingSoon": "Próximamente",
        "projects.inProgress": "En Desarrollo",

        // Contact
        "contact.title": "Trabajemos Juntos",
        "contact.subtitle": "¿Tienes un proyecto en mente? Me encantaría escucharte.",
        "contact.email": "Email",
        "contact.name.placeholder": "Tu nombre",
        "contact.email.placeholder": "tu@email.com",
        "contact.message.placeholder": "Cuéntame sobre tu proyecto...",
        "contact.send": "Enviar mensaje",
        "contact.sending": "Enviando...",
        "contact.sent": "Mensaje enviado",

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
        "nav.cv": "CV",
        "nav.in": "IN",

        // Header
        "header.available": "Available for work",
        "header.role1": "Full Stack Developer",
        "header.role2": "Problem Solver",
        "header.role3": "Web Developer",
        "header.role4": "Tech Enthusiast",

        // About
        "about.title": "About Me",
        "about.bio": "I'm a full-stack developer with a strong affinity for design. My goal is to create digital experiences that not only work well but also look amazing. When I'm not coding, I'm probably exploring new technologies or enjoying a good coffee.",
        "about.location": "Madrid, Spain",
        "about.location.label": "Location",
        "about.education": "DAW",
        "about.education.label": "Education",
        "about.education.desc": "Web Application Development",
        "about.current": "Current Project",
        "about.current.project": "Sierra Nevada Insiders",
        "about.current.desc": "Web platform for the ski community",
        "about.stats.projects": "Projects",
        "about.stats.years": "Years Exp.",
        "about.stats.technologies": "Technologies",
        "about.interests": "Interests",
        "about.interests.video": "Cinema",
        "about.interests.volleyball": "Football",
        "about.interests.music": "Music",

        // Expertise
        "expertise.title": "Expertise",
        "expertise.frontend": "Frontend",
        "expertise.frontend.desc": "Modern UI development using Next.js, React, TypeScript & Tailwind CSS.",
        "expertise.backend": "Backend",
        "expertise.backend.desc": "Building scalable APIs & server-side logic with Java, Python & Django.",
        "expertise.database": "Database",
        "expertise.database.desc": "Efficient data modeling and management with MySQL & Oracle.",
        "expertise.systems": "Systems",

        // Projects
        "projects.title": "Projects",
        "projects.viewProject": "View project",
        "projects.comingSoon": "Coming Soon",
        "projects.inProgress": "In Progress",

        // Contact
        "contact.title": "Let's Work Together",
        "contact.subtitle": "Have a project in mind? I'd love to hear from you.",
        "contact.email": "Email",
        "contact.name.placeholder": "Your name",
        "contact.email.placeholder": "you@email.com",
        "contact.message.placeholder": "Tell me about your project...",
        "contact.send": "Send message",
        "contact.sending": "Sending...",
        "contact.sent": "Message sent",

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
