// src/components/About.tsx
"use client";

import { MapPin, Briefcase, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const focusAreas = ["infrastructure", "cybersecurity", "automation", "products", "software"];

export default function About() {
    const { t } = useLanguage();

    return (
        <section className="max-w-5xl mx-auto px-4 pb-12 pt-6 md:pt-4 text-white">

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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

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
                        <span className="uppercase tracking-wider">{t("about.eyebrow")}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-gray-200 transition-colors">
                        {t("about.role")} &amp;
                        <span className="block">{t("about.role2")}</span>
                    </h3>
                    <div className="space-y-4 text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                        <p>{t("about.bio")}</p>
                        <p>{t("about.bio2")}</p>
                    </div>
                </motion.div>

                {/* Location Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    className="col-span-2 bg-[#0f0f0f] border border-white/10 p-6 group hover:border-white/30 hover:bg-[#141414] transition-all duration-500 flex flex-col justify-between"
                >
                    <div className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-wider">
                        <MapPin className="w-4 h-4 group-hover:text-white transition-colors" />
                        <span>{t("about.location.label")}</span>
                    </div>
                    <div className="mt-6">
                        <p className="text-2xl font-bold">{t("about.location")}</p>
                        <p className="text-gray-500 text-sm mt-1">🇪🇸</p>
                    </div>
                </motion.div>

                {/* Focus Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    className="col-span-2 bg-[#0f0f0f] border border-white/10 p-6 group hover:border-white/30 hover:bg-[#141414] transition-all duration-500 flex flex-col"
                >
                    <div className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-wider">
                        <Target className="w-4 h-4 group-hover:text-white transition-colors" />
                        <span>{t("about.focus.label")}</span>
                    </div>
                    <ul className="mt-6 space-y-1.5">
                        {focusAreas.map((area) => (
                            <li key={area} className="font-mono text-sm text-gray-300 group-hover:text-white transition-colors">
                                {t(`about.focus.${area}`)}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>

        </section>
    );
}
