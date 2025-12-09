"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Header() {
    const { t } = useLanguage();

    const roles = [
        t("header.role1"),
        t("header.role2"),
        t("header.role3"),
        t("header.role4"),
    ];

    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    // Typing effect
    useEffect(() => {
        const role = roles[currentRole];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < role.length) {
                    setDisplayText(role.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentRole((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentRole]);

    return (
        <section className="flex flex-col items-center pt-4 min-h-[45vh] relative">
            {/* Navigation Pills */}
            <motion.nav
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex gap-3 mb-4"
            >
                <Link
                    href="https://github.com/danielkrastev95"
                    target="_blank"
                    className="rounded-full border border-white/20 px-4 py-1 text-[10px] text-gray-400 hover:border-white hover:text-white transition-colors uppercase tracking-wider"
                >
                    GIT
                </Link>
                <a
                    href="/daniel-cv.pdf"
                    download
                    className="rounded-full border border-white/20 px-4 py-1 text-[10px] text-gray-400 hover:border-white hover:text-white transition-colors cursor-pointer uppercase tracking-wider"
                >
                    CV
                </a>
                <Link
                    href="https://www.linkedin.com/in/danielkrastevmanov/"
                    target="_blank"
                    className="rounded-full border border-white/20 px-4 py-1 text-[10px] text-gray-400 hover:border-white hover:text-white transition-colors uppercase tracking-wider"
                >
                    IN
                </Link>
            </motion.nav>

            {/* Main Content: Memoji + Text */}
            <div className="flex flex-col md:flex-row items-center justify-center relative mt-4 px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                    className="w-48 h-48 md:w-80 md:h-80 relative z-10 md:-mr-19 -mb-4 md:mb-16"
                >
                    <Image
                        src="/memoji.png"
                        alt="Daniel Krastev Memoji"
                        fill
                        className="object-contain"
                        priority
                    />
                </motion.div>

                {/* Text Block */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                    className="flex flex-col leading-none font-bold tracking-tighter text-center md:text-left z-0 font-[family-name:var(--font-space)]"
                >
                    <span className="text-outline text-[4rem] md:text-[6rem] lg:text-[8rem] uppercase select-none">
                        Daniel
                    </span>
                    <span className="text-white text-[4rem] md:text-[6rem] lg:text-[8rem] uppercase -mt-2 md:-mt-4 glow-text">
                        Krastev
                    </span>
                </motion.div>
            </div>

            {/* Typing Effect Subtitle */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="-mt-2 md:-mt-6 text-center"
            >
                <div className="h-8 flex items-center justify-center">
                    <span className="text-lg md:text-xl text-gray-400 font-mono">
                        {displayText}
                        <span className="animate-pulse text-white">|</span>
                    </span>
                </div>
            </motion.div>

            {/* Status Badge */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                className="mt-4 flex flex-wrap justify-center gap-3"
            >
                <span className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-sm text-green-400">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    {t("header.available")}
                </span>
            </motion.div>
        </section>
    );
}