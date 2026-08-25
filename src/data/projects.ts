// src/data/projects.ts

export interface ProjectTranslation {
    shortDescription: string;
    fullDescription: string;
    features: string[];
    challenges: string[];
    learnings: string[];
    role: string;
    duration: string;
}

export interface Project {
    id: string;
    title: string;
    image: string;
    technologies: string[];
    links?: {
        demo?: string;
        github?: string;
        live?: string;
    };
    status: "completed" | "in-progress" | "planned";
    translations: {
        es: ProjectTranslation;
        en: ProjectTranslation;
    };
}

export const projects: Project[] = [
    {
        id: "sierra-nevada-insiders",
        title: "Sierra Nevada Insiders",
        image: "/project11.jpg",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Python", "Django", "PostgreSQL", "REST API", "PWA", "Mapbox"],
        links: {
            live: "https://sierranevadainsiders.com",
        },
        status: "completed",
        translations: {
            es: {
                shortDescription: "Plataforma web completa para la comunidad de esquí de Sierra Nevada",
                fullDescription: `Sierra Nevada Insiders es una plataforma web integral diseñada para ofrecer a los visitantes de Sierra Nevada toda la información que necesitan para disfrutar de la estación de esquí más al sur de Europa.

El proyecto funciona como una Progressive Web App (PWA) que permite a los usuarios instalarla en su móvil y acceder al instante al estado de pistas, webcams y meteorología como si fuera una aplicación nativa, sin necesidad de descargas pesadas.

La plataforma incluye un innovador mapa 3D interactivo que permite explorar la estación de forma inmersiva, planificar rutas y localizar puntos de interés antes de ponerte los esquís. Además, ofrece guías completas sobre forfaits, alquiler de material, escuelas de esquí, restaurantes, alojamiento y actividades tanto para esquiadores como para quienes no esquían.

El objetivo es ser la guía definitiva para cualquier persona que quiera visitar Sierra Nevada, centralizando toda la información útil en un solo lugar con una experiencia de usuario moderna y accesible.`,
                features: [
                    "Mapa 3D interactivo e inmersivo de la estación",
                    "Progressive Web App (PWA) instalable en móvil",
                    "Estado de pistas y webcams en tiempo real",
                    "Información meteorológica actualizada",
                    "Guía completa de forfaits con precios y tipos de pases",
                    "Directorio de escuelas de esquí y alquiler de material",
                    "Sección de restaurantes, après-ski y ocio nocturno",
                    "Guía de alojamiento y parking",
                    "Actividades para esquiadores y no esquiadores",
                    "Sección de familia y niños",
                    "Blog y noticias de la estación",
                    "Diseño responsive optimizado para móviles"
                ],
                challenges: [
                    "Integración del mapa 3D de Mapbox con navegación fluida",
                    "Desarrollo de la PWA con funcionalidad offline",
                    "Integración de datos en tiempo real (pistas, meteo, webcams)",
                    "Optimización del rendimiento para carga rápida en móvil",
                    "Arquitectura escalable para manejar múltiples secciones de contenido",
                    "SEO optimizado para posicionamiento en buscadores"
                ],
                learnings: [
                    "Desarrollo avanzado de PWAs con Next.js",
                    "Integración de mapas 3D con Mapbox",
                    "Optimización de rendimiento y Core Web Vitals",
                    "Arquitectura de aplicaciones con múltiples fuentes de datos",
                    "Diseño UX centrado en el usuario móvil",
                    "Gestión de proyectos en producción real"
                ],
                role: "Full Stack Developer",
                duration: "6+ meses"
            },
            en: {
                shortDescription: "Complete web platform for the Sierra Nevada ski community",
                fullDescription: `Sierra Nevada Insiders is a comprehensive web platform designed to provide visitors to Sierra Nevada with all the information they need to enjoy Europe's southernmost ski resort.

The project works as a Progressive Web App (PWA) that allows users to install it on their mobile and instantly access slope status, webcams and weather as if it were a native app, without heavy downloads.

The platform includes an innovative interactive 3D map that allows you to explore the resort immersively, plan routes and locate points of interest before putting on your skis. It also offers complete guides on lift passes, equipment rental, ski schools, restaurants, accommodation and activities for both skiers and non-skiers.

The goal is to be the definitive guide for anyone who wants to visit Sierra Nevada, centralizing all useful information in one place with a modern and accessible user experience.`,
                features: [
                    "Interactive and immersive 3D map of the resort",
                    "Progressive Web App (PWA) installable on mobile",
                    "Real-time slope status and webcams",
                    "Updated weather information",
                    "Complete lift pass guide with prices and pass types",
                    "Directory of ski schools and equipment rental",
                    "Restaurant, après-ski and nightlife section",
                    "Accommodation and parking guide",
                    "Activities for skiers and non-skiers",
                    "Family and children section",
                    "Resort blog and news",
                    "Responsive design optimized for mobile"
                ],
                challenges: [
                    "Mapbox 3D map integration with smooth navigation",
                    "PWA development with offline functionality",
                    "Real-time data integration (slopes, weather, webcams)",
                    "Performance optimization for fast mobile loading",
                    "Scalable architecture to handle multiple content sections",
                    "SEO optimization for search engine ranking"
                ],
                learnings: [
                    "Advanced PWA development with Next.js",
                    "3D map integration with Mapbox",
                    "Performance optimization and Core Web Vitals",
                    "Application architecture with multiple data sources",
                    "Mobile-first UX design",
                    "Real production project management"
                ],
                role: "Full Stack Developer",
                duration: "6+ months"
            }
        }
    },
    {
        id: "coming-soon",
        title: "Coming Soon",
        image: "",
        technologies: ["Coming Soon"],
        status: "planned",
        translations: {
            es: {
                shortDescription: "Nuevos proyectos en desarrollo",
                fullDescription: "Estoy trabajando en nuevos proyectos que pronto estarán disponibles.",
                features: ["En desarrollo"],
                challenges: [],
                learnings: [],
                role: "Developer",
                duration: "TBD"
            },
            en: {
                shortDescription: "New projects in development",
                fullDescription: "I'm working on new projects that will be available soon.",
                features: ["In development"],
                challenges: [],
                learnings: [],
                role: "Developer",
                duration: "TBD"
            }
        }
    }
];


export function getProjectById(id: string): Project | undefined {
    return projects.find(project => project.id === id);
}

export function getAllProjectIds(): string[] {
    return projects.map(project => project.id);
}
