// src/components/Expertise.tsx
"use client";

import { Fragment } from "react";
import { Database, Server, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const systemGroups = [
    { key: "identity", tech: ["Active Directory", "Entra ID", "Group Policy", "RBAC", "MFA"] },
    { key: "cloud", tech: ["Microsoft 365", "Azure", "Exchange Online", "SharePoint", "Teams", "Intune"] },
    { key: "infra", tech: ["Windows Server", "Linux", "Hyper-V", "DNS / DHCP", "VPN", "SQL Server"] },
    { key: "security", tech: ["Firewall", "Endpoint Protection", "Backup & DR", "Patch Management", "Conditional Access"] },
    { key: "automation", tech: ["PowerShell", "Python", "Bash", "Power Automate", "REST APIs"] },
];

export default function Expertise() {
    const { t } = useLanguage();

    return (
        <section className="max-w-5xl mx-auto px-4 pb-24 text-white">
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
                className="mt-4 border border-white bg-[#0f0f0f] p-6 md:p-8 group hover:bg-[#141414] transition-all duration-500"
            >
                {/* Header: Icon + Title */}
                <div className="flex items-center gap-3 mb-5">
                    <span className="text-white group-hover:scale-110 transition-transform duration-300">
                        <Server className="w-7 h-7" />
                    </span>
                    <h4 className="text-2xl font-bold tracking-tight group-hover:tracking-wide transition-all duration-300">
                        {t("expertise.systems")}
                    </h4>
                </div>

                {/* Systems Technologies - one grid so the label column aligns across every row */}
                <div className="grid md:grid-cols-[max-content_1fr]">
                    {systemGroups.map((systemGroup, i) => (
                        <Fragment key={systemGroup.key}>
                            <p
                                className={`flex md:items-center font-mono text-[10px] uppercase tracking-widest text-gray-500 group-hover:text-gray-400 transition-colors md:whitespace-nowrap pt-3 pb-1.5 md:py-2.5 ${i > 0 ? "border-t border-white/10" : ""}`}
                            >
                                {t(`expertise.systems.${systemGroup.key}`)}
                            </p>
                            <div
                                className={`flex flex-wrap md:items-center gap-1.5 pb-3 md:py-2.5 md:pl-6 ${i > 0 ? "md:border-t md:border-white/10" : ""}`}
                            >
                                {systemGroup.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2.5 py-1 bg-white/5 border border-white/15 text-xs font-mono text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/40 transition-all duration-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </Fragment>
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