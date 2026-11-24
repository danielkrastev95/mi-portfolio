// src/data/project-types.ts

export type Language = "es" | "en";
export type Localized = Record<Language, string>;

/** A screenshot. `alt` doubles as its caption in the lightbox. */
export interface Shot {
    src: string;
    alt: Localized;
    kind?: "desktop" | "phone";
}

export interface HighlightCopy {
    title: string;
    body: string[];
    points: string[];
}

/** A feature worth explaining, with its screenshots (the first one is shown large). */
export interface ProjectHighlight {
    id: string;
    tag: string;
    shots: Shot[];
    es: HighlightCopy;
    en: HighlightCopy;
}

export interface NoteCopy {
    title: string;
    body: string;
    points: string[];
}

/** Work that has no screen to show: explained in words only. */
export interface ProjectNote {
    id: string;
    tag: string;
    es: NoteCopy;
    en: NoteCopy;
}

export interface ProjectStat {
    value: string;
    label: Localized;
}

export interface StackGroup {
    label: Localized;
    items: string[];
}

export interface ProjectTranslation {
    shortDescription: string;
    overview: string[];
    features: string[];
    challenges: string[];
    learnings: string[];
    role: string;
    duration: string;
    period: string;
}

export interface Project {
    id: string;
    title: string;
    /** Framed cover used by the card on the home page. */
    image: string;
    /** First screenshot of the detail page. */
    cover: Shot;
    /** Flat list; the home card shows the first five. */
    technologies: string[];
    stack: StackGroup[];
    stats: ProjectStat[];
    highlights: ProjectHighlight[];
    notes: ProjectNote[];
    phoneShots: Shot[];
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
