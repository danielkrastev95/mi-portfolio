// src/components/Projects.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function Projects() {
    const { t } = useLanguage();

    return (
        <section id="projects" className="max-w-5xl mx-auto px-4 py-24 text-white">
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-3xl md:text-4xl font-bold text-center mb-16 uppercase tracking-wide"
            >
                {t("projects.title")}
            </motion.h3>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#0f0f0f]">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </section>
    );
}

interface ProjectCardProps {
    project: typeof projects[0];
    index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
    const { t } = useLanguage();
    const isPlanned = project.status === "planned";
    const statusBadge =
        project.status === "completed"
            ? { labelKey: "project.status.completed", className: "text-green-400 border-green-400/30" }
            : project.status === "in-progress"
                ? { labelKey: "project.status.inProgress", className: "text-yellow-400 border-yellow-400/30" }
                : null;

    const CardContent = (
        <>
            {/* Header with Title and Arrow */}
            <div className="flex justify-between items-start mb-4 relative z-10">
                <h4 className="text-2xl font-bold tracking-tight group-hover:tracking-wide transition-all duration-300">
                    {project.title}
                </h4>
                {!isPlanned && (
                    <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:scale-125 transition-all duration-300" />
                )}
            </div>

            {/* Image Container */}
            <div className="relative flex-grow w-full mb-4 overflow-hidden bg-white/5 border border-white/10 group-hover:border-white/30 transition-all duration-500">
                {project.image && !isPlanned ? (
                    <>
                        <Image
                            src={project.image}
                            alt={`${project.title} Interface`}
                            fill
                            className="object-cover object-center grayscale-0 md:grayscale md:group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </>
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-gray-600 text-sm uppercase tracking-wider">
                            {t("projects.comingSoon")}
                        </span>
                    </div>
                )}
            </div>

            {/* Status Badge */}
            {statusBadge && (
                <div className="mb-2">
                    <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 border ${statusBadge.className}`}>
                        {t(statusBadge.labelKey)}
                    </span>
                </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto pt-2 font-mono text-[10px] uppercase tracking-wider text-gray-400 group-hover:text-gray-300 transition-colors">
                {project.technologies.slice(0, 5).map((tech, i) => (
                    <span
                        key={i}
                        className="group-hover:text-white transition-colors"
                        style={{ transitionDelay: `${i * 50}ms` }}
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </>
    );

    if (isPlanned) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.5, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="border border-white/30 p-6 aspect-[4/3] flex flex-col relative group transition-all duration-500 cursor-default"
            >
                {CardContent}
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
            <Link
                href={`/projects/${project.id}`}
                className="border border-white p-6 aspect-[4/3] flex flex-col relative group hover:bg-[#111] transition-all duration-500 cursor-pointer block dramatic-hover"
            >
                {CardContent}
            </Link>
        </motion.div>
    );
}