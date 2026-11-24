// src/app/projects/[id]/ProjectDetailClient.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import type { Language, Project, ProjectHighlight, ProjectNote, Shot } from "@/data/projects";
import { useLanguage } from "@/lib/LanguageContext";
import Footer from "@/app/components/Footer";
import ShotLightbox from "./ShotLightbox";
import { Reveal, SectionHeading, ShotButton } from "./parts";

export interface NextProjectLink {
    id: string;
    title: string;
    image: string;
    tagline: Record<Language, string>;
}

interface ProjectDetailClientProps {
    project: Project;
    /** 1-based position of this project in the list, and how many there are. */
    position: number;
    total: number;
    next?: NextProjectLink;
}

const pad = (n: number) => String(n).padStart(2, "0");

const SHELL = "mx-auto w-full max-w-6xl px-5 md:px-8";
const DISPLAY = "font-[family-name:var(--font-space)] font-bold tracking-tighter";
const EYEBROW = "font-mono text-[11px] uppercase tracking-[0.2em] text-gray-500";
const PRESSABLE = "transition-[scale,background-color,border-color,color] duration-150 ease-out active:scale-[0.96]";
const FOCUS = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export default function ProjectDetailClient({ project, position, total, next }: ProjectDetailClientProps) {
    const { t, language } = useLanguage();
    const content = project.translations[language];

    // Every screenshot of the page, in reading order, for the lightbox.
    const shots: Shot[] = [project.cover, ...project.highlights.flatMap((h) => h.shots), ...project.phoneShots];
    const [viewer, setViewer] = useState({ index: 0, open: false });
    const openShot = (shot: Shot) => setViewer({ index: Math.max(shots.indexOf(shot), 0), open: true });

    const statusLabel =
        project.status === "completed"
            ? t("project.status.completed")
            : project.status === "in-progress"
                ? t("project.status.inProgress")
                : t("project.status.planned");
    const statusDot = project.status === "completed" ? "bg-green-400" : project.status === "in-progress" ? "bg-yellow-400" : "bg-gray-500";
    const liveHost = project.links?.live?.replace(/^https?:\/\//, "").replace(/\/$/, "");

    return (
        <main className="min-h-screen overflow-x-clip bg-[#0D0D0D] text-white">
            {/* ── Header ─────────────────────────────────────────────── */}
            <header className={`${SHELL} pt-6`}>
                <Link
                    href="/#projects"
                    className={`group inline-flex items-center gap-2 py-2 ${EYEBROW} transition-colors duration-150 hover:text-white ${FOCUS}`}
                >
                    <ArrowLeft className="h-4 w-4 transition-transform duration-200 ease-out group-hover:-translate-x-1" strokeWidth={1.75} />
                    {t("project.backToProjects")}
                </Link>

                <div className="pt-14 md:pt-24">
                    <Reveal className={`flex flex-wrap items-center gap-x-4 gap-y-2 ${EYEBROW}`}>
                        <span className="tabular-nums text-gray-300">
                            {pad(position)} / {pad(total)}
                        </span>
                        <span aria-hidden="true" className="h-px w-8 bg-white/20" />
                        <span>{t("project.label")}</span>
                        <span className="inline-flex items-center gap-2 text-gray-300">
                            <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${statusDot}`} />
                            {statusLabel}
                        </span>
                    </Reveal>

                    <Reveal delay={100}>
                        <h1 className={`${DISPLAY} mt-6 text-balance text-[clamp(2.75rem,9vw,7rem)] leading-[0.92]`}>{project.title}</h1>
                    </Reveal>

                    <Reveal delay={200}>
                        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-gray-300 md:text-xl">{content.shortDescription}</p>
                    </Reveal>

                    <Reveal delay={300}>
                        <div className="mt-10 grid gap-6 border-t border-white/15 pt-6 md:mt-14 md:grid-cols-4">
                            <dl className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:col-span-3">
                                <Meta label={t("project.role")} value={content.role} />
                                <Meta label={t("project.period")} value={content.period} />
                                <Meta label={t("project.duration")} value={content.duration} />
                            </dl>
                            <div className="flex flex-wrap items-center gap-3 md:justify-end">
                                {project.links?.live && (
                                    <Link
                                        href={project.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group inline-flex items-center gap-2 bg-white px-5 py-3 text-sm font-medium text-black hover:bg-gray-200 ${PRESSABLE} ${FOCUS}`}
                                    >
                                        {liveHost}
                                        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2} />
                                    </Link>
                                )}
                                {project.links?.github && (
                                    <Link
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center gap-2 border border-white/40 px-5 py-3 text-sm font-medium hover:border-white hover:bg-white/5 ${PRESSABLE} ${FOCUS}`}
                                    >
                                        <Github className="h-4 w-4" strokeWidth={2} />
                                        {t("project.viewCode")}
                                    </Link>
                                )}
                                {project.links?.demo && (
                                    <Link
                                        href={project.links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center gap-2 border border-white/40 px-5 py-3 text-sm font-medium hover:border-white hover:bg-white/5 ${PRESSABLE} ${FOCUS}`}
                                    >
                                        {t("project.viewDemo")}
                                    </Link>
                                )}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </header>

            {/* ── Cover and figures ──────────────────────────────────── */}
            <div className={`${SHELL} mt-12 md:mt-16`}>
                <Reveal delay={400}>
                    <ShotButton
                        shot={project.cover}
                        language={language}
                        label={t("project.enlarge")}
                        sizes="(min-width: 1152px) 1088px, 100vw"
                        priority
                        onOpen={() => openShot(project.cover)}
                    />
                </Reveal>

                {project.stats.length > 0 && (
                    <Reveal className="mt-4">
                        <dl className="grid grid-cols-2 border-l border-t border-white/10 md:grid-cols-4">
                            {project.stats.map((stat) => (
                                <div key={stat.label.es} className="flex flex-col-reverse justify-end gap-2 border-b border-r border-white/10 px-5 py-6 md:px-6 md:py-7">
                                    <dt className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-gray-500">{stat.label[language]}</dt>
                                    <dd className={`${DISPLAY} text-4xl tabular-nums md:text-5xl`}>{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </Reveal>
                )}
            </div>

            {/* ── About ──────────────────────────────────────────────── */}
            <section className={`${SHELL} mt-24 md:mt-36`}>
                <Reveal className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                    <h2 className={`${EYEBROW} lg:col-span-4 lg:pt-2`}>{t("project.overview")}</h2>
                    <div className="lg:col-span-8">
                        {content.overview.map((paragraph, i) =>
                            i === 0 ? (
                                <p key={i} className="text-pretty text-xl leading-snug text-white md:text-[1.7rem] md:leading-[1.3]">
                                    {paragraph}
                                </p>
                            ) : (
                                <p key={i} className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-gray-400 md:text-lg">
                                    {paragraph}
                                </p>
                            ),
                        )}
                    </div>
                </Reveal>
            </section>

            {/* ── Highlights ─────────────────────────────────────────── */}
            <section className={`${SHELL} mt-24 md:mt-36`}>
                <Reveal>
                    <SectionHeading title={t("project.highlights")} count={project.highlights.length} />
                </Reveal>
                <div className="space-y-20 md:space-y-32">
                    {project.highlights.map((highlight, i) => (
                        <Reveal key={highlight.id}>
                            <Highlight
                                highlight={highlight}
                                index={i}
                                language={language}
                                enlargeLabel={t("project.enlarge")}
                                onOpen={openShot}
                            />
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ── On mobile ──────────────────────────────────────────── */}
            {project.phoneShots.length > 0 && (
                <section className="mt-24 md:mt-36">
                    <Reveal className={SHELL}>
                        <SectionHeading title={t("project.mobile")} count={project.phoneShots.length} />
                    </Reveal>
                    <Reveal className="mx-auto w-full max-w-6xl">
                        <ul className="phone-row flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 md:px-8 lg:grid lg:grid-cols-5 lg:gap-5 lg:overflow-visible">
                            {project.phoneShots.map((shot) => (
                                <li key={shot.src} className="w-[58%] shrink-0 snap-center sm:w-[34%] lg:w-auto">
                                    <ShotButton
                                        shot={shot}
                                        language={language}
                                        label={t("project.enlarge")}
                                        sizes="(min-width: 1024px) 200px, (min-width: 640px) 34vw, 58vw"
                                        onOpen={() => openShot(shot)}
                                    />
                                    <p className="mt-3 text-pretty text-xs leading-relaxed text-gray-500">{shot.alt[language]}</p>
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                </section>
            )}

            {/* ── Under the hood ─────────────────────────────────────── */}
            {project.notes.length > 0 && (
                <section className={`${SHELL} mt-24 md:mt-36`}>
                    <Reveal>
                        <SectionHeading title={t("project.notes")} count={project.notes.length} />
                    </Reveal>
                    <div className="grid gap-4 lg:grid-cols-3">
                        {project.notes.map((note, i) => (
                            <Reveal key={note.id} delay={i * 100} className="flex">
                                <Note note={note} index={i} language={language} />
                            </Reveal>
                        ))}
                    </div>
                </section>
            )}

            {/* ── Also includes, and the stack ───────────────────────── */}
            <section className={`${SHELL} mt-24 md:mt-36`}>
                <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
                    <Reveal className="lg:col-span-7">
                        <h2 className={`${EYEBROW} mb-6`}>{t("project.alsoIncludes")}</h2>
                        <ul className="border-t border-white/10">
                            {content.features.map((feature, i) => (
                                <li key={feature} className="flex gap-5 border-b border-white/10 py-4 text-[15px] leading-relaxed text-gray-300">
                                    <span className="pt-0.5 font-mono text-xs tabular-nums text-gray-600">{pad(i + 1)}</span>
                                    <span className="text-pretty">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </Reveal>

                    <Reveal className="lg:col-span-5" delay={100}>
                        <h2 className={`${EYEBROW} mb-6`}>{t("project.stack")}</h2>
                        <div className="border-t border-white/10">
                            {project.stack.map((group) => (
                                <div key={group.label.es} className="border-b border-white/10 py-5">
                                    <h3 className="mb-3 text-sm font-medium text-white">{group.label[language]}</h3>
                                    <ul className="flex flex-wrap gap-2">
                                        {group.items.map((item) => (
                                            <li key={item} className="rounded-full border border-white/20 px-3 py-1.5 font-mono text-xs text-gray-300">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ── Challenges and learnings ───────────────────────────── */}
            {(content.challenges.length > 0 || content.learnings.length > 0) && (
                <section className={`${SHELL} mt-24 md:mt-36`}>
                    <div className="grid gap-16 md:grid-cols-2 md:gap-12">
                        <Reveal>
                            <NumberedList title={t("project.challenges")} items={content.challenges} />
                        </Reveal>
                        <Reveal delay={100}>
                            <NumberedList title={t("project.learnings")} items={content.learnings} />
                        </Reveal>
                    </div>
                </section>
            )}

            {/* ── Next project ───────────────────────────────────────── */}
            {next && (
                <section className={`${SHELL} mt-24 md:mt-36`}>
                    <Reveal>
                        <Link
                            href={`/projects/${next.id}`}
                            className={`group grid items-stretch border border-white/25 transition-[background-color,border-color] duration-200 ease-out hover:border-white hover:bg-[#111] md:grid-cols-[1fr_22rem] ${FOCUS}`}
                        >
                            <div className="flex flex-col justify-between gap-10 p-7 md:p-10">
                                <span className={EYEBROW}>{t("project.next")}</span>
                                <div>
                                    <span className={`${DISPLAY} flex items-center gap-4 text-4xl leading-none md:text-6xl`}>
                                        {next.title}
                                        <ArrowRight className="h-7 w-7 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-2 md:h-9 md:w-9" strokeWidth={1.75} />
                                    </span>
                                    <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-gray-400">{next.tagline[language]}</p>
                                </div>
                            </div>
                            <div className="relative hidden min-h-56 overflow-hidden border-l border-white/15 md:block">
                                <Image
                                    src={next.image}
                                    alt=""
                                    fill
                                    sizes="352px"
                                    className="object-cover grayscale transition-[filter] duration-500 ease-out group-hover:grayscale-0"
                                />
                            </div>
                        </Link>
                    </Reveal>
                </section>
            )}

            <div className="mt-24 md:mt-32">
                <Footer />
            </div>

            <ShotLightbox
                shots={shots}
                index={viewer.index}
                open={viewer.open}
                language={language}
                labels={{
                    gallery: t("project.gallery"),
                    close: t("project.close"),
                    previous: t("project.previous"),
                    next: t("project.nextShot"),
                }}
                onIndexChange={(index) => setViewer((v) => ({ ...v, index }))}
                onOpenChange={(open) => setViewer((v) => ({ ...v, open }))}
            />
        </main>
    );
}

function Meta({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <dt className={EYEBROW}>{label}</dt>
            <dd className="mt-2 text-sm text-white">{value}</dd>
        </div>
    );
}

interface HighlightProps {
    highlight: ProjectHighlight;
    index: number;
    language: Language;
    enlargeLabel: string;
    onOpen: (shot: Shot) => void;
}

/** One feature: the explanation on one side, its screenshots on the other, alternating. */
function Highlight({ highlight, index, language, enlargeLabel, onOpen }: HighlightProps) {
    const copy = highlight[language];
    const [main, ...rest] = highlight.shots;
    const flipped = index % 2 === 1;

    return (
        <article className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className={`lg:col-span-5 ${flipped ? "lg:order-2" : ""}`}>
                <div className="lg:sticky lg:top-20">
                    <div className="mb-5 flex items-center gap-3">
                        <span className="font-mono text-xs tabular-nums text-gray-300">{pad(index + 1)}</span>
                        <span aria-hidden="true" className="h-px w-6 bg-white/20" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-500">{highlight.tag}</span>
                    </div>
                    <h3 className="text-balance text-2xl font-bold leading-[1.15] tracking-tight md:text-[1.9rem]">{copy.title}</h3>
                    <div className="mt-5 space-y-4 text-pretty text-[15px] leading-relaxed text-gray-400 md:text-base">
                        {copy.body.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                    <ul className="mt-7 border-t border-white/10">
                        {copy.points.map((point) => (
                            <li key={point} className="flex gap-3 border-b border-white/10 py-3 text-sm leading-relaxed text-gray-300">
                                <span aria-hidden="true" className="mt-[0.6em] h-1 w-1 shrink-0 bg-white/60" />
                                <span className="text-pretty">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={`lg:col-span-7 ${flipped ? "lg:order-1" : ""}`}>
                <div className="lg:sticky lg:top-20">
                    {main && (
                        <ShotButton
                            shot={main}
                            language={language}
                            label={enlargeLabel}
                            sizes="(min-width: 1024px) 620px, 100vw"
                            onOpen={() => onOpen(main)}
                        />
                    )}
                    {rest.length > 0 && (
                        <div className="mt-3 grid grid-cols-3 gap-3">
                            {rest.map((shot) => (
                                <ShotButton
                                    key={shot.src}
                                    shot={shot}
                                    language={language}
                                    label={enlargeLabel}
                                    sizes="(min-width: 1024px) 200px, 33vw"
                                    onOpen={() => onOpen(shot)}
                                />
                            ))}
                        </div>
                    )}
                    {main && <p className="mt-3 text-pretty text-xs leading-relaxed text-gray-500">{main.alt[language]}</p>}
                </div>
            </div>
        </article>
    );
}

/** Work with no screen to show: a card of text. */
function Note({ note, index, language }: { note: ProjectNote; index: number; language: Language }) {
    const copy = note[language];

    return (
        <article className="flex w-full flex-col border border-white/15 bg-[#0f0f0f] p-7 md:p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
                <span className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.18em] text-gray-500">{note.tag}</span>
                <span className="font-mono text-xs tabular-nums text-gray-600">{pad(index + 1)}</span>
            </div>
            <h3 className="text-balance text-xl font-bold leading-snug tracking-tight">{copy.title}</h3>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-gray-400">{copy.body}</p>
            <ul className="mt-auto pt-7">
                {copy.points.map((point) => (
                    <li key={point} className="flex gap-3 border-t border-white/10 py-3 text-[13px] leading-relaxed text-gray-300">
                        <span aria-hidden="true" className="mt-[0.6em] h-1 w-1 shrink-0 bg-white/60" />
                        <span className="text-pretty">{point}</span>
                    </li>
                ))}
            </ul>
        </article>
    );
}

function NumberedList({ title, items }: { title: string; items: string[] }) {
    return (
        <div>
            <h2 className={`${EYEBROW} mb-6`}>{title}</h2>
            <ol className="border-t border-white/10">
                {items.map((item, i) => (
                    <li key={item} className="flex gap-5 border-b border-white/10 py-4 text-[15px] leading-relaxed text-gray-300">
                        <span className="pt-0.5 font-mono text-xs tabular-nums text-gray-600">{pad(i + 1)}</span>
                        <span className="text-pretty">{item}</span>
                    </li>
                ))}
            </ol>
        </div>
    );
}
