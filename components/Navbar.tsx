"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { StyleHouseLogo } from "./Logo";

const links = [
  { label: "Inicio",    href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería",   href: "#galeria" },
  { label: "Contacto",  href: "#reservas" },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen, setMobileOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-dark border-b border-white/5 py-3"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <motion.button
            onClick={() => scrollTo("#inicio")}
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <StyleHouseLogo size={40} className="logo-shimmer" />
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-display text-white font-700 tracking-[0.18em] uppercase text-sm">
                Style House
              </span>
              <span className="text-white/40 text-[8px] tracking-[0.35em] uppercase mt-0.5">
                Barber Shop
              </span>
            </div>
          </motion.button>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-9">
            {links.map((l, i) => (
              <motion.button
                key={l.label}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 * i + 0.35, duration: 0.5 }}
                onClick={() => scrollTo(l.href)}
                className="text-[11px] tracking-[0.22em] uppercase text-white/55 hover:text-white underline-anim transition-colors duration-300 cursor-pointer"
              >
                {l.label}
              </motion.button>
            ))}
          </nav>

          {/* CTA */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            onClick={() => scrollTo("#reservas")}
            className="hidden md:block btn-primary text-[10px] px-7 py-3 cursor-pointer"
          >
            Reservar Ahora
          </motion.button>

          {/* Mobile toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Menú"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X className="w-5 h-5 text-white" />
                </motion.div>
              ) : (
                <motion.div key="m"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu className="w-5 h-5 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 glass-dark flex flex-col items-center justify-center gap-10"
          >
            <StyleHouseLogo size={80} />
            {links.map((l, i) => (
              <motion.button
                key={l.label}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 * i + 0.1 }}
                onClick={() => scrollTo(l.href)}
                className="text-2xl font-display tracking-[0.12em] uppercase text-white/75 hover:text-white transition-colors cursor-pointer"
              >
                {l.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => scrollTo("#reservas")}
              className="btn-primary text-[11px] mt-4 cursor-pointer"
            >
              Reservar Ahora
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
