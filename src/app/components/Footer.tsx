// src/app/components/Footer.tsx
const YEAR = 2026;
const NAME = "Daniel Krastev Manov";

export default function Footer() {
    return (
        <footer className="text-center text-gray-500 text-xs py-12 font-light border-t border-white/5">
            © {YEAR} {NAME}
        </footer>
    );
}
