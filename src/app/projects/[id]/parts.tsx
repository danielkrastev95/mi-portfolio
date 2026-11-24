// src/app/projects/[id]/parts.tsx
"use client";

import Image from "next/image";
import { useRef, type CSSProperties, type ReactNode } from "react";
import { useInView } from "framer-motion";
import { Maximize2 } from "lucide-react";
import type { Language, Shot } from "@/data/projects";
import { shotPlaceholders } from "@/data/shot-placeholders";

/** Fades its content in the first time it scrolls into view (styles: `.reveal` in globals.css). */
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const visible = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

    return (
        <div
            ref={ref}
            data-visible={visible}
            className={`reveal ${className}`}
            style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
        >
            {children}
        </div>
    );
}

export function SectionHeading({ title, count }: { title: string; count?: number }) {
    return (
        <div className="mb-10 flex items-end justify-between gap-6 border-b border-white/15 pb-5 md:mb-14">
            <h2 className="text-2xl font-bold uppercase tracking-wide md:text-4xl">{title}</h2>
            {count !== undefined && (
                <span className="font-mono text-xs tabular-nums text-gray-500">{String(count).padStart(2, "0")}</span>
            )}
        </div>
    );
}

interface ShotButtonProps {
    shot: Shot;
    language: Language;
    /** "Enlarge screenshot", for the accessible name. */
    label: string;
    sizes: string;
    onOpen: () => void;
    priority?: boolean;
    className?: string;
}

/** A screenshot in its frame. Clicking it opens the lightbox. */
export function ShotButton({ shot, language, label, sizes, onOpen, priority = false, className = "" }: ShotButtonProps) {
    const phone = shot.kind === "phone";
    // A blurred preview fills the frame until the screenshot arrives, so a
    // fast scroll never shows an empty one.
    const preview = shotPlaceholders[shot.src];

    return (
        <button
            type="button"
            onClick={onOpen}
            aria-label={`${label}: ${shot.alt[language]}`}
            className={`group/shot relative block w-full cursor-zoom-in overflow-hidden bg-[#0f0f0f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${phone ? "aspect-[390/664] rounded-[22px]" : "aspect-[16/10]"} ${className}`}
        >
            <Image
                src={shot.src}
                alt=""
                fill
                sizes={sizes}
                priority={priority}
                placeholder={preview ? "blur" : "empty"}
                blurDataURL={preview}
                className="object-cover object-top"
            />
            {/* The frame's edge, drawn over the image so light screenshots keep one. */}
            <span
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 outline-1 -outline-offset-1 outline-white/10 transition-[outline-color] duration-200 ease-out group-hover/shot:outline-white/45 ${phone ? "rounded-[22px]" : ""}`}
            />
            <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center bg-black/75 text-white opacity-0 transition-opacity duration-150 ease-out group-hover/shot:opacity-100 group-focus-visible/shot:opacity-100 pointer-coarse:opacity-100"
            >
                <Maximize2 className="h-3.5 w-3.5" strokeWidth={1.75} />
            </span>
        </button>
    );
}
