// src/app/components/Contact.tsx
"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Contact() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simular envío - aquí puedes integrar un servicio como Formspree, EmailJS, etc.
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        
        // Reset después de 3 segundos
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="contact" className="max-w-5xl mx-auto px-4 py-24 text-white">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-center mb-4 uppercase tracking-wide"
            >
                {t("contact.title")}
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-400 text-center mb-12 max-w-xl mx-auto"
            >
                {t("contact.subtitle")}
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {/* Contact Info - 3 cards verticales */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col gap-4"
                >
                    {/* Email Card */}
                    <Link
                        href="mailto:danielkrastev95@gmail.com"
                        className="flex-1 p-6 bg-[#0f0f0f] border border-white/10 hover:border-white/30 transition-all duration-300 group flex items-center"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                <Mail className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Email</p>
                                <p className="text-white font-medium group-hover:text-gray-300 transition-colors">
                                    danielkrastev95@gmail.com
                                </p>
                            </div>
                        </div>
                    </Link>

                    {/* LinkedIn Card */}
                    <Link
                        href="https://www.linkedin.com/in/danielkrastevmanov/"
                        target="_blank"
                        className="flex-1 p-6 bg-[#0f0f0f] border border-white/10 hover:border-white/30 transition-all duration-300 group flex items-center"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">LinkedIn</p>
                                <p className="text-white font-medium group-hover:text-gray-300 transition-colors">
                                    /in/danielkrastevmanov
                                </p>
                            </div>
                        </div>
                    </Link>

                    {/* GitHub Card */}
                    <Link
                        href="https://github.com/danielkrastev95"
                        target="_blank"
                        className="flex-1 p-6 bg-[#0f0f0f] border border-white/10 hover:border-white/30 transition-all duration-300 group flex items-center"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">GitHub</p>
                                <p className="text-white font-medium group-hover:text-gray-300 transition-colors">
                                    /danielkrastev95
                                </p>
                            </div>
                        </div>
                    </Link>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                >
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full bg-[#0f0f0f] border border-white/10 px-4 py-3 text-white placeholder-gray-600 focus:border-white/30 focus:outline-none transition-colors"
                        placeholder={t("contact.name.placeholder")}
                    />

                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full bg-[#0f0f0f] border border-white/10 px-4 py-3 text-white placeholder-gray-600 focus:border-white/30 focus:outline-none transition-colors"
                        placeholder={t("contact.email.placeholder")}
                    />

                    <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={4}
                        className="w-full flex-grow min-h-[100px] bg-[#0f0f0f] border border-white/10 px-4 py-3 text-white placeholder-gray-600 focus:border-white/30 focus:outline-none transition-colors resize-none"
                        placeholder={t("contact.message.placeholder")}
                    />

                    <button
                        type="submit"
                        disabled={isSubmitting || submitted}
                        className={`w-full py-4 font-medium uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 border ${
                            submitted
                                ? "bg-green-500/10 border-green-500/50 text-green-400"
                                : "bg-transparent border-white/20 text-white hover:bg-white/5 hover:border-white/40"
                        } disabled:opacity-50`}
                    >
                        {submitted ? (
                            <>
                                ✓ {t("contact.sent")}
                            </>
                        ) : isSubmitting ? (
                            <>
                                {t("contact.sending")}
                            </>
                        ) : (
                            <>
                                <Send className="w-4 h-4" />
                                {t("contact.send")}
                            </>
                        )}
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
