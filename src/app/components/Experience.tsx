// src/components/Experience.tsx
"use client";

import { Users, Cloud, Handshake, ShieldCheck, Globe, Workflow, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const areas = [
    { key: "a1", icon: <Users className="w-7 h-7" /> },
    { key: "a2", icon: <Cloud className="w-7 h-7" /> },
    { key: "a3", icon: <Handshake className="w-7 h-7" /> },
    { key: "a4", icon: <ShieldCheck className="w-7 h-7" /> },
    { key: "a5", icon: <Globe className="w-7 h-7" /> },
    { key: "a6", icon: <Workflow className="w-7 h-7" /> },
];

export default function Experience() {
    const { t } = useLanguage();

    return (
        <section id="experience" className="max-w-5xl mx-auto px-4 py-24 text-white">
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-3xl md:text-4xl font-bold text-center mb-16 uppercase tracking-wide"
            >
                {t("experience.title")}
            </motion.h3>

            {/* Position Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="border border-white bg-[#0f0f0f] p-8 md:p-10 group hover:bg-[#141414] transition-all duration-500"
            >
                <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                        <h4 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:tracking-wide transition-all duration-300">
                            {t("experience.role")}
                        </h4>
                        <p className="mt-2 font-mono text-sm uppercase tracking-wider text-gray-400">
                            {t("experience.company")}
                        </p>
                    </div>
                    <span className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full font-mono text-xs uppercase tracking-wider text-gray-300 whitespace-nowrap">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                        {t("experience.period")}
                    </span>
                </div>
                <p className="mt-6 text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors max-w-3xl">
                    {t("experience.summary")}
                </p>
            </motion.div>

            {/* Key Areas */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {areas.map((area, i) => (
                    <AreaCard key={area.key} areaKey={area.key} icon={area.icon} index={i} />
                ))}
            </div>
        </section>
    );
}

function AreaCard({ areaKey, icon, index }: { areaKey: string; icon: React.ReactNode; index: number }) {
    const { t } = useLanguage();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col border border-white/20 bg-[#0f0f0f] p-8 group hover:bg-[#141414] hover:border-white/40 transition-all duration-500"
        >
            <div className="flex items-start justify-between gap-4 mb-5">
                <span className="text-white group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </span>
                <span className="font-mono text-xs text-gray-600 group-hover:text-gray-400 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                </span>
            </div>

            <h4 className="text-lg font-bold tracking-tight mb-3 group-hover:text-gray-200 transition-colors">
                {t(`experience.${areaKey}.title`)}
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {t(`experience.${areaKey}.desc`)}
            </p>

            {/* Impact */}
            <div className="mt-auto pt-6 flex gap-3 border-t border-white/10">
                <TrendingUp className="w-4 h-4 mt-0.5 shrink-0 text-gray-500 group-hover:text-white transition-colors" />
                <div>
                    <span className="block font-mono text-[10px] uppercase tracking-widest text-gray-600 group-hover:text-gray-500 transition-colors mb-1">
                        {t("experience.impactLabel")}
                    </span>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        {t(`experience.${areaKey}.impact`)}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
