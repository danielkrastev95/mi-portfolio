// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Poppins, Space_Grotesk } from "next/font/google"; // Importamos las fuentes
import "./globals.css";
import LoadingScreen from "@/app/components/LoadingScreen";
import NoiseOverlay from "@/app/components/NoiseOverlay";
import LanguageSelector from "@/app/components/LanguageSelector";
import { LanguageProvider } from "@/lib/LanguageContext";

// Configuración de la fuente principal
const inter = Inter({ subsets: ["latin"] });

// Configuración de la fuente Poppins para títulos
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-poppins",
});

// Configuración de Space Grotesk para el nombre
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-space",
});

// Configuración de la fuente monoespaciada para el código
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-mono', // Creamos una variable CSS para usarla en Tailwind
});

export const metadata: Metadata = {
  title: "Daniel Krastev - Portfolio",
  description: "Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#0D0D0D]">
      <body className={`${inter.className} ${jetbrainsMono.variable} ${poppins.variable} ${spaceGrotesk.variable}`}>
        <LanguageProvider>
          <LoadingScreen />
          <NoiseOverlay />
          <LanguageSelector />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}