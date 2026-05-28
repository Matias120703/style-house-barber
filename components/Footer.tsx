"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WA_URL =
  "https://wa.me/595983842125?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20un%20turno%20en%20Style%20House.";

const navLinks = [
  { label: "Inicio",    href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería",   href: "#galeria" },
  { label: "Reservas",  href: "#reservas" },
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Main content */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/logo-stylehouse.png"
                alt="Style House Barber Shop"
                width={52}
                height={52}
              />
              <div>
                <div className="font-display text-white font-700 tracking-[0.18em] uppercase text-sm">
                  Style House
                </div>
                <div className="text-white/35 text-[9px] tracking-[0.35em] uppercase mt-0.5">
                  Barber Shop
                </div>
              </div>
            </div>
            <p className="text-white/30 text-xs leading-relaxed max-w-[260px] mb-8">
              Combinamos técnica, precisión y estilo para que siempre luzcas tu mejor versión.
              Ubicados en Asunción, Paraguay.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/stylehouse_bs/reels/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 glass flex items-center justify-center hover:glass-bright transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white/50" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 glass flex items-center justify-center hover:glass-bright transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white/50" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-[9px] tracking-[0.45em] uppercase text-white/30 mb-6">Navegación</div>
            <ul className="flex flex-col gap-3.5">
              {navLinks.map(l => (
                <li key={l.label}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-white/35 text-xs hover:text-white/75 transition-colors duration-200 underline-anim cursor-pointer"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[9px] tracking-[0.45em] uppercase text-white/30 mb-6">Contacto</div>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                  className="text-white/35 text-xs hover:text-white/75 transition-colors underline-anim">
                  +595 983 842125
                </a>
              </li>
              <li>
                <a href="mailto:info@stylehousebarber.com"
                  className="text-white/35 text-xs hover:text-white/75 transition-colors underline-anim">
                  info@stylehousebarber.com
                </a>
              </li>
              <li className="text-white/25 text-xs leading-relaxed pt-1">
                Asunción, Paraguay
                <br />
                Lun–Sáb: 9:00 – 20:00
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/18 text-[10px] tracking-wider">
            © {new Date().getFullYear()} Style House Barber Shop. Todos los derechos reservados.
          </div>
          <div className="flex gap-6">
            {["Privacidad", "Términos"].map(t => (
              <a key={t} href="#" className="text-white/18 text-[10px] hover:text-white/40 transition-colors tracking-wide">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Oversized watermark */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none overflow-hidden w-full text-center">
        <div className="font-display text-[13vw] font-900 text-white/[0.018] tracking-[-0.04em] leading-none whitespace-nowrap">
          STYLE HOUSE
        </div>
      </div>
    </footer>
  );
}
