// src/app/projects/[id]/not-found.tsx
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#0D0D0D] text-white flex flex-col items-center justify-center px-6">
            <h1 className="text-6xl md:text-8xl font-bold font-poppins mb-4">404</h1>
            <p className="text-xl text-gray-400 mb-8">Proyecto no encontrado</p>
            <Link
                href="/"
                className="flex items-center gap-2 px-6 py-3 border border-white hover:bg-white hover:text-black transition-colors"
            >
                <ArrowLeft className="w-4 h-4" />
                Volver al inicio
            </Link>
        </main>
    );
}
