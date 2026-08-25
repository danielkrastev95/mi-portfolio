// src/app/components/Contact.tsx
"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

const channels = [
    {
        label: "Email",
        value: "danielkrastev95@gmail.com",
        href: "mailto:danielkrastev95@gmail.com",
        icon: Mail,
        external: false,
    },
    {
        label: "LinkedIn",
        value: "/in/danielkrastevmanov",
        href: "https://www.linkedin.com/in/danielkrastevmanov/",
        icon: Linkedin,
        external: true,
    },
    {
        label: "GitHub",
        value: "/danielkrastev95",
        href: "https://github.com/danielkrastev95",
        icon: Github,
        external: true,
    },
];

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="max-w-5xl mx-auto px-4 py-24 text-white">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase tracking-wide"
            >
                {t("contact.title")}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {channels.map((channel, i) => (
                    <motion.div
                        key={channel.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <Link
                            href={channel.href}
                            {...(channel.external ? { target: "_blank" } : {})}
                            className="h-full flex flex-col p-6 bg-[#0f0f0f] border border-white/10 hover:border-white/30 hover:bg-[#141414] transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                <channel.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                            </div>
                            <p className="text-gray-500 text-xs uppercase tracking-wider mt-6">{channel.label}</p>
                            <p className="text-white font-medium mt-1 break-all group-hover:text-gray-300 transition-colors">
                                {channel.value}
                            </p>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
