"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simular progreso de carga
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[10000] bg-[#0D0D0D] flex flex-col items-center justify-center"
                >
                    {/* Glitch Name */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold font-poppins tracking-tighter glitch-text">
                            DANIEL K...
                        </h1>
                    </motion.div>

                    {/* Progress Bar */}
                    <div className="mt-12 w-48 h-[1px] bg-white/20 overflow-hidden">
                        <motion.div
                            className="h-full bg-white"
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.min(progress, 100)}%` }}
                            transition={{ ease: "easeOut" }}
                        />
                    </div>

                    {/* Progress Number */}
                    <motion.span
                        className="mt-4 font-mono text-sm text-gray-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        {Math.min(Math.round(progress), 100)}%
                    </motion.span>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
