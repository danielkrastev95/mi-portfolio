// src/components/AboutAndExpertise.tsx
"use client";

import { Database, Server, Code2, MapPin, Briefcase, GraduationCap, Film, Music, Goal } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

export default function AboutAndExpertise() {
    const { t } = useLanguage();

    return (
        <section className="max-w-5xl mx-auto px-4 pb-24 pt-6 md:pt-4 text-white">

            {/* ABOUT ME - Bento Grid Style */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase tracking-wide"
            >
                {t("about.title")}
            </motion.h2>

            {/* Bento Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32">

                {/* Main Bio - Large Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    className="col-span-2 row-span-2 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 p-8 group hover:border-white/30 transition-all duration-500"
                >
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                        <Briefcase className="w-4 h-4" />
                        <span className="uppercase tracking-wider">Developer</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-gray-200 transition-colors">
                        Junior Full Stack Developer
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                        {t("about.bio")}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                        {["Next.js", "Python", "Django", "React"].map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-mono text-gray-400 hover:bg-white/10 hover:text-white transition-all">
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Location Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    className="col-span-1 bg-[#0f0f0f] border border-white/10 p-6 group hover:border-white/30 hover:bg-[#141414] transition-all duration-500 flex flex-col justify-between"
                >
                    <MapPin className="w-8 h-8 text-gray-600 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                    <div className="mt-4">
                        <p className="text-gray-500 text-xs uppercase tracking-wider">{t("about.location.label")}</p>
                        <p className="text-xl font-bold mt-1">{t("about.location")}</p>
                        <p className="text-gray-500 text-sm">🇪🇸</p>
                    </div>
                </motion.div>

                {/* Education Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    className="col-span-1 bg-[#0f0f0f] border border-white/10 p-6 group hover:border-white/30 hover:bg-[#141414] transition-all duration-500 flex flex-col justify-between"
                >
                    <GraduationCap className="w-8 h-8 text-gray-600 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                    <div className="mt-4">
                        <p className="text-gray-500 text-xs uppercase tracking-wider">{t("about.education.label")}</p>
                        <p className="text-lg font-bold mt-1">{t("about.education")}</p>
                        <p className="text-gray-500 text-sm">{t("about.education.desc")}</p>
                    </div>
                </motion.div>

                {/* Current Project - Wide Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    className="col-span-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 p-6 group hover:border-yellow-500/40 transition-all duration-500 relative overflow-hidden"
                >
                    <div className="absolute top-3 right-3">
                        <span className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-yellow-400">
                            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
                            {t("about.current")}
                        </span>
                    </div>
                    <h4 className="text-xl font-bold mt-4">{t("about.current.project")}</h4>
                    <p className="text-gray-400 text-sm mt-2">
                        {t("about.current.desc")}
                    </p>
                </motion.div>

                {/* Stats Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    className="col-span-1 bg-[#0f0f0f] border border-white/10 p-6 group hover:border-white/30 hover:bg-[#141414] transition-all duration-500 text-center"
                >
                    <p className="text-4xl md:text-5xl font-bold text-white group-hover:scale-110 transition-transform inline-block">7+</p>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mt-2">{t("about.stats.technologies")}</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    className="col-span-1 bg-[#0f0f0f] border border-white/10 p-6 group hover:border-white/30 hover:bg-[#141414] transition-all duration-500 text-center"
                >
                    <p className="text-4xl md:text-5xl font-bold text-white group-hover:scale-110 transition-transform inline-block">∞</p>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mt-2">Curiosity</p>
                </motion.div>

                {/* Interests - Wide Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    className="col-span-2 md:col-span-4 bg-[#0f0f0f] border border-white/10 p-6 group hover:border-white/30 transition-all duration-500"
                >
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-4">{t("about.interests")}</p>
                    <div className="flex flex-wrap gap-4">
                        {[
                            { icon: <Film className="w-5 h-5" />, label: t("about.interests.video") },
                            { icon: <Goal className="w-5 h-5" />, label: t("about.interests.volleyball") },
                            { icon: <Music className="w-5 h-5" />, label: t("about.interests.music") },
                        ].map((interest, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                            >
                                <span className="text-gray-400">{interest.icon}</span>
                                <span className="text-sm">{interest.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-3xl md:text-4xl font-bold text-center mb-16 uppercase tracking-wide"
            >
                {t("expertise.title")}
            </motion.h3>

            {/* Grid Container */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="grid grid-cols-1 md:grid-cols-3 border border-white bg-[#0f0f0f]"
            >
                {/* Backend */}
                <ExpertiseCard
                    icon={<Server className="w-10 h-10" />}
                    title={t("expertise.backend")}
                    description={t("expertise.backend.desc")}
                    className="border-b md:border-b-0 md:border-r border-white"
                    delay={0}
                />

                {/* Frontend */}
                <ExpertiseCard
                    icon={<Code2 className="w-10 h-10" />}
                    title={t("expertise.frontend")}
                    description={t("expertise.frontend.desc")}
                    className="border-b md:border-b-0 md:border-r border-white"
                    delay={0.1}
                />

                {/* Database */}
                <ExpertiseCard
                    icon={<Database className="w-10 h-10" />}
                    title={t("expertise.database")}
                    description={t("expertise.database.desc")}
                    className=""
                    delay={0.2}
                />
            </motion.div>

            {/* Systems Knowledge Card - Full Width */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="mt-4 border border-white bg-[#0f0f0f] p-8 md:p-10 group hover:bg-[#141414] transition-all duration-500"
            >
                {/* Header: Icon + Title */}
                <div className="flex items-center gap-4 mb-6">
                    <span className="text-white group-hover:scale-110 transition-transform duration-300">
                        <Server className="w-10 h-10" />
                    </span>
                    <h4 className="text-3xl font-bold tracking-tight group-hover:tracking-wide transition-all duration-300">
                        {t("expertise.systems")}
                    </h4>
                </div>

                {/* Systems Technologies */}
                <div className="flex flex-wrap gap-3">
                    {["Active Directory", "Azure Portal", "DNS", "SQL Server", "Windows Server"].map((tech) => (
                        <span
                            key={tech}
                            className="px-4 py-2 bg-white/5 border border-white/20 text-sm font-mono text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/40 transition-all duration-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

function ExpertiseCard({ icon, title, description, className = "", delay = 0 }: { icon: React.ReactNode; title: string; description: string; className?: string; delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className={`p-8 md:p-10 flex flex-col h-full min-h-[350px] bg-[#0f0f0f] group hover:bg-[#141414] transition-all duration-500 ${className}`}
        >
            {/* Header: Icon + Title */}
            <div className="flex items-center gap-4 mb-8">
                <span className="text-white group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </span>
                <h4 className="text-3xl font-bold tracking-tight group-hover:tracking-wide transition-all duration-300">{title}</h4>
            </div>

            <div className="mt-auto flex gap-5 font-mono text-sm h-42">
                <div className="flex flex-col items-center text-gray-500 select-none h-full group-hover:text-gray-400 transition-colors">
                    <span className="leading-none text-xs">&lt;h4&gt;</span>
                    <div className="w-[1px] bg-gray-700 group-hover:bg-gray-500 flex-1 my-2 transition-colors"></div>
                    <span className="leading-none text-xs">&lt;/h4&gt;</span>
                </div>
                <div className="flex items-center h-full py-2">
                    <p className="text-gray-300 group-hover:text-white font-medium text-sm leading-relaxed max-w-[200px] transition-colors duration-300">
                        {description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}