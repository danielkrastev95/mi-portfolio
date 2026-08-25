// src/app/projects/[id]/ProjectDetailClient.tsx
"use client";

import { Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Clock, User, CheckCircle2, Lightbulb, Zap, Code2 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Footer from "@/app/components/Footer";

interface ProjectDetailClientProps {
    project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
    const { t, language } = useLanguage();
    
    // Get translated content based on current language
    const content = project.translations[language];

    return (
        <main className="min-h-screen text-white bg-[#0D0D0D]">
            {/* Hero Section */}
            <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0D0D0D]" />
                </div>

                {/* Back Button */}
                <div className="absolute top-6 left-6 z-20">
                    <Link
                        href="/#projects"
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm uppercase tracking-wider">{t("project.backToProjects")}</span>
                    </Link>
                </div>

                {/* Hero Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                    <div className="max-w-5xl mx-auto">
                        {/* Status Badge */}
                        <StatusBadge status={project.status} />

                        {/* Title */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mt-4 font-poppins">
                            {project.title}
                        </h1>

                        {/* Short Description */}
                        <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl">
                            {content.shortDescription}
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-5xl mx-auto px-6 md:px-8 py-16">
                {/* Quick Info Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    <InfoCard icon={<User className="w-5 h-5" />} label={t("project.role")} value={content.role} />
                    <InfoCard icon={<Clock className="w-5 h-5" />} label={t("project.duration")} value={content.duration} />
                    <InfoCard
                        icon={<Code2 className="w-5 h-5" />}
                        label="Tech Stack"
                        value={`${project.technologies.length} ${language === 'es' ? 'tecnologías' : 'technologies'}`}
                    />
                    <InfoCard
                        icon={<Zap className="w-5 h-5" />}
                        label={t("project.features")}
                        value={`${content.features.length} ${language === 'es' ? 'características' : 'features'}`}
                    />
                </div>

                {/* About the Project */}
                <section className="mb-16">
                    <SectionTitle icon={<Lightbulb />} title={language === 'es' ? 'Sobre el Proyecto' : 'About the Project'} />
                    <div className="prose prose-invert max-w-none">
                        {content.fullDescription.split('\n\n').map((paragraph: string, index: number) => (
                            <p key={index} className="text-gray-300 text-lg leading-relaxed mb-4">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </section>

                {/* Technologies Used */}
                <section className="mb-16">
                    <SectionTitle icon={<Code2 />} title={t("project.technologies")} />
                    <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech: string, index: number) => (
                            <span
                                key={index}
                                className="px-4 py-2 border border-white/20 rounded-full text-sm font-mono 
                                         hover:border-white hover:bg-white/5 transition-all cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Features Grid */}
                {content.features.length > 0 && content.features[0] !== "En desarrollo" && content.features[0] !== "In development" && (
                    <section className="mb-16">
                        <SectionTitle icon={<CheckCircle2 />} title={t("project.features")} />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {content.features.map((feature: string, index: number) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 p-4 border border-white/10 bg-white/5 
                                             hover:border-white/30 transition-colors"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span className="text-gray-300">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Challenges & Learnings */}
                {(content.challenges.length > 0 || content.learnings.length > 0) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {/* Challenges */}
                        {content.challenges.length > 0 && (
                            <section>
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                                        <Zap className="w-4 h-4 text-orange-500" />
                                    </span>
                                    {t("project.challenges")}
                                </h3>
                                <ul className="space-y-3">
                                    {content.challenges.map((challenge: string, index: number) => (
                                        <li key={index} className="flex items-center gap-3 text-gray-400">
                                            <span className="text-orange-500">→</span>
                                            {challenge}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Learnings */}
                        {content.learnings.length > 0 && (
                            <section>
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                                        <Lightbulb className="w-4 h-4 text-blue-500" />
                                    </span>
                                    {t("project.learnings")}
                                </h3>
                                <ul className="space-y-3">
                                    {content.learnings.map((learning: string, index: number) => (
                                        <li key={index} className="flex items-center gap-3 text-gray-400">
                                            <span className="text-blue-500">→</span>
                                            {learning}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}
                    </div>
                )}

                {/* Links Section */}
                {project.links && Object.keys(project.links).length > 0 && (
                    <section className="border-t border-white/10 pt-12">
                        <h3 className="text-xl font-bold mb-6">{language === 'es' ? 'Enlaces del Proyecto' : 'Project Links'}</h3>
                        <div className="flex flex-wrap gap-4">
                            {project.links.live && (
                                <Link
                                    href={project.links.live}
                                    target="_blank"
                                    className="flex items-center gap-2 px-6 py-3 bg-white text-black font-medium 
                                             hover:bg-gray-200 transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    {t("project.visitSite")}
                                </Link>
                            )}
                            {project.links.github && (
                                <Link
                                    href={project.links.github}
                                    target="_blank"
                                    className="flex items-center gap-2 px-6 py-3 border border-white 
                                             hover:bg-white hover:text-black transition-colors"
                                >
                                    <Github className="w-4 h-4" />
                                    {t("project.viewCode")}
                                </Link>
                            )}
                            {project.links.demo && (
                                <Link
                                    href={project.links.demo}
                                    target="_blank"
                                    className="flex items-center gap-2 px-6 py-3 border border-white/50 
                                             hover:border-white transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    {t("project.viewDemo")}
                                </Link>
                            )}
                        </div>
                    </section>
                )}
            </div>

            <Footer />
        </main>
    );
}

// Component: Status Badge
function StatusBadge({ status }: { status: Project["status"] }) {
    const { t } = useLanguage();
    
    const styles = {
        completed: "bg-green-500/20 text-green-400 border-green-500/30",
        "in-progress": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
        planned: "bg-gray-500/20 text-gray-400 border-gray-500/30",
    };

    const getLabel = (status: Project["status"]) => {
        switch (status) {
            case "completed":
                return t("project.status.completed");
            case "in-progress":
                return t("project.status.inProgress");
            case "planned":
                return t("project.status.planned");
        }
    };

    return (
        <span className={`inline-flex px-3 py-1 text-xs uppercase tracking-wider border ${styles[status]}`}>
            {getLabel(status)}
        </span>
    );
}

// Component: Info Card
function InfoCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
    return (
        <div className="p-4 border border-white/10 bg-white/5">
            <div className="flex items-center gap-2 text-gray-500 mb-2">
                {icon}
                <span className="text-xs uppercase tracking-wider">{label}</span>
            </div>
            <p className="text-white font-medium">{value}</p>
        </div>
    );
}

// Component: Section Title
function SectionTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
    return (
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-gray-500">{icon}</span>
            {title}
        </h2>
    );
}
