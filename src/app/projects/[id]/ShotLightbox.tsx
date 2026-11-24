// src/app/projects/[id]/ShotLightbox.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, type KeyboardEvent, type MouseEvent } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import type { Language, Shot } from "@/data/projects";

interface ShotLightboxProps {
    shots: Shot[];
    index: number;
    open: boolean;
    language: Language;
    labels: { gallery: string; close: string; previous: string; next: string };
    onIndexChange: (index: number) => void;
    onOpenChange: (open: boolean) => void;
}

const CONTROL =
    "flex h-10 w-10 shrink-0 items-center justify-center border border-white/20 text-white transition-[scale,background-color,border-color] duration-150 ease-out hover:border-white hover:bg-white/10 active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

/**
 * Full-screen viewer for the project's screenshots, on a native <dialog>:
 * the browser gives it the focus trap, Escape and the return of focus to the
 * screenshot that opened it. Arrow keys move between screenshots at once,
 * with no animation.
 */
export default function ShotLightbox({ shots, index, open, language, labels, onIndexChange, onOpenChange }: ShotLightboxProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const shot = shots[index];

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        if (open && !dialog.open) dialog.showModal();
        if (!open && dialog.open) dialog.close();
    }, [open]);

    // The page behind stays where it was.
    useEffect(() => {
        if (!open) return;
        const root = document.documentElement;
        const previous = root.style.overflow;
        root.style.overflow = "hidden";
        return () => {
            root.style.overflow = previous;
        };
    }, [open]);

    if (!shot) return null;

    const step = (delta: number) => onIndexChange((index + delta + shots.length) % shots.length);

    const onKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
        if (event.key === "ArrowRight") step(1);
        if (event.key === "ArrowLeft") step(-1);
    };

    // A click anywhere that is not the screenshot or a control closes it.
    const onClick = (event: MouseEvent<HTMLDialogElement>) => {
        if (!(event.target as HTMLElement).closest("[data-keep]")) onOpenChange(false);
    };

    const phone = shot.kind === "phone";
    const ratio = phone ? 390 / 664 : 16 / 10;

    return (
        <dialog
            ref={dialogRef}
            aria-label={labels.gallery}
            onClose={() => onOpenChange(false)}
            onKeyDown={onKeyDown}
            onClick={onClick}
            className="lightbox fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 text-white"
        >
            {/* Solid, so nothing of the page shows through behind a screenshot. */}
            <div className="flex h-full flex-col bg-[#070707]">
                <div className="flex h-16 shrink-0 items-center justify-between gap-4 px-4 md:px-6">
                    <span className="font-mono text-xs tabular-nums text-gray-400">
                        {String(index + 1).padStart(2, "0")} / {String(shots.length).padStart(2, "0")}
                    </span>
                    <button type="button" data-keep onClick={() => onOpenChange(false)} aria-label={labels.close} className={CONTROL}>
                        <X className="h-4 w-4" strokeWidth={1.75} />
                    </button>
                </div>

                <div className="flex min-h-0 flex-1 items-center justify-center px-4 md:px-6">
                    <div
                        data-keep
                        className="relative bg-[#0f0f0f]"
                        style={{ aspectRatio: ratio, width: `min(100%, calc((100dvh - 10rem) * ${ratio}))` }}
                    >
                        <Image
                            key={shot.src}
                            src={shot.src}
                            alt={shot.alt[language]}
                            fill
                            sizes="100vw"
                            className="object-contain"
                        />
                        <span aria-hidden="true" className="pointer-events-none absolute inset-0 outline-1 -outline-offset-1 outline-white/10" />
                    </div>
                </div>

                <div className="flex h-24 shrink-0 items-center justify-center gap-4 px-4 md:px-6">
                    <button type="button" data-keep onClick={() => step(-1)} aria-label={labels.previous} className={CONTROL}>
                        <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
                    </button>
                    <p data-keep className="max-w-xl flex-1 text-balance text-center text-sm leading-snug text-gray-300 md:flex-none md:min-w-[28rem]">
                        {shot.alt[language]}
                    </p>
                    <button type="button" data-keep onClick={() => step(1)} aria-label={labels.next} className={CONTROL}>
                        <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
                    </button>
                </div>
            </div>
        </dialog>
    );
}
