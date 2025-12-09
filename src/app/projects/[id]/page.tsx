// src/app/projects/[id]/page.tsx
import { getProjectById, getAllProjectIds } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";

// Generar rutas estáticas para todos los proyectos
export async function generateStaticParams() {
    const ids = getAllProjectIds();
    return ids.map((id) => ({ id }));
}

// Metadata dinámica para SEO
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = getProjectById(id);

    if (!project) {
        return { title: "Proyecto no encontrado" };
    }

    return {
        title: `${project.title} | Daniel Krastev`,
        description: project.translations.es.shortDescription,
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = getProjectById(id);

    if (!project) {
        notFound();
    }

    return <ProjectDetailClient project={project} />;
}
