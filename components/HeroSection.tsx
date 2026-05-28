"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const WA_URL =
  "https://wa.me/595983842125?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20un%20turno%20en%20Style%20House.";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const yBg      = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opText   = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const yText    = useTransform(scrollYProgress, [0, 0.6], ["0%", "-12%"]);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Background absolute grid ── */}
      <div className="absolute inset-0 grid-bg opacity-30 z-0" />

      {/* ── RIGHT — cinematic photo + logo overlay ── */}
      <motion.div
        style={{ y: yBg }}
        className="absolute top-0 right-0 w-full md:w-[55%] h-full z-0"
      >
        {/* Photo */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&q=80"
            alt="Style House Barber Shop — interior cinemático"
            fill
            className="object-cover object-center"
            priority
            unoptimized
          />
        </div>

        {/* Gradient masks */}
        {/* Left fade (merges into left panel) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-transparent" />
        {/* Top vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-transparent to-[#050505]/50" />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* ── Centered logo overlay ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Glow behind logo */}
          <div
            className="absolute w-80 h-80 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)" }}
          />
          <Image
              src="/logo-stylehouse.png"
              alt="Style House Barber Shop"
              width={260}
              height={260}
              className="relative z-10 drop-shadow-2xl opacity-90"
              priority
            />
        </motion.div>
      </motion.div>

      {/* ── LEFT — text content ── */}
      <motion.div
        style={{ opacity: opText, y: yText }}
        className="relative z-10 w-full md:w-[52%] px-6 md:px-16 lg:px-24 pt-28 pb-20 flex flex-col justify-center min-h-screen"
      >

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="section-line" />
          <span className="text-[9px] tracking-[0.5em] uppercase text-white/40">
            Premium Barbershop · Paraguay
          </span>
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(52px,8vw,96px)] font-900 leading-[0.92] tracking-[-0.03em] text-white"
          >
            Tu estilo,
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(52px,8vw,96px)] font-900 leading-[0.92] tracking-[-0.03em] gradient-text"
          >
            nuestra pasión.
          </motion.h1>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
          className="h-px bg-gradient-to-r from-white/30 to-transparent w-48 mb-8"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="text-white/45 text-sm md:text-base leading-[1.8] tracking-wide max-w-md mb-12"
        >
          En Style House Barber Shop combinamos técnica, precisión y estilo
          para que siempre luzcas tu mejor versión.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-[10px]"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#050505]" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Escribinos por WhatsApp
          </a>
          <button
            onClick={() => scrollTo("#servicios")}
            className="btn-luxury text-[10px] cursor-pointer"
          >
            Nuestros Servicios
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="flex gap-10 mt-16 pt-10 border-t border-white/6"
        >
          {[
            { value: "8+",   label: "Años de experiencia" },
            { value: "3K+",  label: "Clientes atendidos"  },
            { value: "5★",   label: "Calificación"        },
          ].map(s => (
            <div key={s.label}>
              <div className="font-display text-2xl font-700 text-white">{s.value}</div>
              <div className="text-[9px] tracking-[0.2em] uppercase text-white/28 mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[8px] tracking-[0.5em] uppercase text-white/25">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
