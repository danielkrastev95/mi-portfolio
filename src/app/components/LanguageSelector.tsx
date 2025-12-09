// src/app/components/LanguageSelector.tsx
"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { motion } from "framer-motion";

export default function LanguageSelector() {
    const { language, setLanguage } = useLanguage();

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-4 right-4 z-50 flex gap-1 bg-[#0f0f0f]/80 backdrop-blur-sm border border-white/10 p-1"
        >
            <button
                onClick={() => setLanguage("es")}
                className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                    language === "es"
                        ? "bg-white text-black"
                        : "text-gray-400 hover:text-white"
                }`}
            >
                ES
            </button>
            <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                    language === "en"
                        ? "bg-white text-black"
                        : "text-gray-400 hover:text-white"
                }`}
            >
                EN
            </button>
        </motion.div>
    );
}
