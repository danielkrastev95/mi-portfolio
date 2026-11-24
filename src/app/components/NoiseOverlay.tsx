"use client";

import { useEffect, useRef } from "react";

// The grain used to be one random value per screen pixel, recomputed on every
// frame: hundreds of thousands of them, sixty times a second, on the main
// thread. Phones could not keep up and everything else arrived late. Now a
// small tile of noise is drawn and repeated across the screen, at film-like
// 24 frames a second: the same look for a fraction of the work.
const TILE = 256;
const FRAME_MS = 1000 / 24;
// Touch screens get no grain: it is barely visible there and blending a
// full-screen layer over the page makes fast scrolling stutter. The canvas is
// hidden in CSS (`pointer-coarse:hidden`) and the loop never starts.
const TOUCH_QUERY = "(pointer: coarse)";

export default function NoiseOverlay() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || window.matchMedia(TOUCH_QUERY).matches) return;

        const ctx = canvas.getContext("2d");
        const tile = document.createElement("canvas");
        tile.width = TILE;
        tile.height = TILE;
        const tileCtx = tile.getContext("2d");
        if (!ctx || !tileCtx) return;

        const imageData = tileCtx.createImageData(TILE, TILE);
        const data = imageData.data;
        for (let i = 3; i < data.length; i += 4) {
            data[i] = 8; // Very subtle opacity
        }

        const draw = () => {
            for (let i = 0; i < data.length; i += 4) {
                const value = Math.random() * 255;
                data[i] = value;
                data[i + 1] = value;
                data[i + 2] = value;
            }
            tileCtx.putImageData(imageData, 0, 0);

            const pattern = ctx.createPattern(tile, "repeat");
            if (!pattern) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = pattern;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            draw();
        };

        resize();
        window.addEventListener("resize", resize);

        // With reduced motion the grain stays still.
        const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let animationId = 0;
        let last = 0;

        const loop = (now: number) => {
            if (now - last >= FRAME_MS) {
                last = now;
                draw();
            }
            animationId = requestAnimationFrame(loop);
        };

        if (!still) animationId = requestAnimationFrame(loop);

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="fixed inset-0 pointer-events-none z-[100] opacity-30 pointer-coarse:hidden"
            style={{ mixBlendMode: "overlay" }}
        />
    );
}
