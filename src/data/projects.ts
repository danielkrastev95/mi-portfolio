// src/data/projects.ts
import type { Project } from "./project-types";
import { sierraNevadaInsiders } from "./projects/sierra-nevada-insiders";
import { lots } from "./projects/lots";

export type { Project, ProjectTranslation, ProjectHighlight, ProjectNote, Shot, Language } from "./project-types";

export const projects: Project[] = [sierraNevadaInsiders, lots];

export function getProjectById(id: string): Project | undefined {
    return projects.find(project => project.id === id);
}

export function getAllProjectIds(): string[] {
    return projects.map(project => project.id);
}

/** The project after this one, wrapping round to the first. */
export function getNextProject(id: string): Project | undefined {
    const index = projects.findIndex(project => project.id === id);
    if (index === -1 || projects.length < 2) return undefined;
    return projects[(index + 1) % projects.length];
}
