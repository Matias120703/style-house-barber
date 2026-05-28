"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Scissors, Sparkles, Star, Zap, Crown } from "lucide-react";

const services = [
  {
    icon: Scissors,
    name: "Corte + Diseño",
    description: "Corte personalizado con diseño de líneas y contornos a medida para tu estilo único.",
    price: "Gs. 35.000",
    duration: "35 min",
    featured: false,
    bookingUrl: "https://ignacioinsaurralde.setmore.com/services/d359d155-a277-4f06-a22f-a5be628ffcbb",
  },
  {
    icon: Star,
    name: "Corte + Barba",
    description: "Corte profesional combinado con arreglo y diseño completo de barba.",
    price: "Gs. 45.000",
    duration: "45 min",
    featured: false,
    bookingUrl: "https://ignacioinsaurralde.setmore.com/services/be6f231d-b6ee-4a12-94c2-c87fba56c926",
  },
  {
    icon: Sparkles,
    name: "Corte de Pelo",
    description: "Corte clásico o moderno, adaptado a tu estructura facial y preferencias.",
    price: "Gs. 30.000",
    duration: "30 min",
    featured: false,
    bookingUrl: "https://ignacioinsaurralde.setmore.com/services/71167279-8e76-493a-9dd4-9bf6c881de7b",
  },
  {
    icon: Zap,
    name: "Corte + Cejas",
    description: "Corte profesional más perfilado y diseño de cejas para un look impecable.",
    price: "Gs. 40.000",
    duration: "35 min",
    featured: false,
    bookingUrl: "https://ignacioinsaurralde.setmore.com/services/aff603db-72b5-462f-8dcb-9eb6f8c09f09",
  },
  {
    icon: Crown,
    name: "Corte + Barba + Cejas",
    description:
      "La experiencia completa: corte, barba esculpida y cejas perfectas. El servicio más premium de Style House.",
    price: "Gs. 55.000",
    duration: "60 min",
    featured: true,
    bookingUrl: "https://ignacioinsaurralde.setmore.com/services/da84ec7d-87ee-412d-810a-4ade2aacf6bf",
  },
];

function ServiceCard({ svc, index }: { svc: typeof services[0]; index: number }) {
  const Icon = svc.icon;

  return (
    <motion.a
      href={svc.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: 0 } }}
      whileTap={{ scale: 0.98, transition: { duration: 0.1, delay: 0 } }}
      className={`relative group p-8 border flex flex-col cursor-pointer block transition-colors duration-500 ${
        svc.featured
          ? "border-white/25 glass-bright glow-card hover:border-white/40"
          : "border-white/7 glass hover:border-white/18"
      }`}
    >
      {/* Featured badge */}
      {svc.featured && (
        <div className="absolute -top-3 left-8">
          <span className="bg-white text-[#050505] text-[9px] tracking-[0.35em] uppercase px-3 py-1 font-700">
            Más Popular
          </span>
        </div>
      )}

      {/* Icon */}
      <div className={`w-11 h-11 flex items-center justify-center mb-7 transition-all duration-400 ${
        svc.featured ? "bg-white/10 group-hover:bg-white/16" : "bg-white/4 group-hover:bg-white/10"
      }`}>
        <Icon className={`w-5 h-5 transition-colors duration-400 ${
          svc.featured ? "text-white" : "text-white/50 group-hover:text-white"
        }`} />
      </div>

      {/* Name */}
      <h3 className={`font-display text-xl font-700 mb-3 tracking-wide transition-colors duration-300 ${
        svc.featured ? "text-white" : "text-white/85 group-hover:text-white"
      }`}>
        {svc.name}
      </h3>

      {/* Description */}
      <p className="text-white/38 text-sm leading-relaxed mb-7 group-hover:text-white/50 transition-colors duration-300">
        {svc.description}
      </p>

      {/* Divider */}
      <div className="hr-luxury mb-7 mt-auto" />

      {/* Price & duration */}
      <div className="flex items-end justify-between">
        <div>
          <div className={`font-display text-2xl font-700 ${
            svc.featured ? "text-white" : "gradient-text"
          }`}>
            {svc.price}
          </div>
          <div className="text-[10px] tracking-[0.2em] uppercase text-white/30 mt-1">
            {svc.duration}
          </div>
        </div>

        {/* Reservar — styled span, card itself is the <a> */}
        <span className={`text-[10px] tracking-[0.2em] uppercase flex items-center gap-1.5 transition-colors duration-300 ${
          svc.featured
            ? "text-white group-hover:text-white/80"
            : "text-white/35 group-hover:text-white/80"
        }`}>
          Reservar
          <span className="text-sm inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/0 group-hover:via-white/25 to-transparent transition-all duration-500" />

      {/* Left accent on hover */}
      <div className="absolute left-0 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-white/0 group-hover:via-white/20 to-transparent transition-all duration-500" />
    </motion.a>
  );
}

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicios" ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0 grid-bg opacity-18" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="section-line" />
            <span className="text-[9px] tracking-[0.5em] uppercase text-white/38">
              Lo que hacemos
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display text-[clamp(34px,5vw,62px)] font-800 leading-[1.05] tracking-tight text-white">
              Elige tu{" "}
              <span className="gradient-text">servicio</span>
            </h2>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              Cada servicio es un ritual de precisión ejecutado por manos expertas.
            </p>
          </div>
        </motion.div>

        {/* Cards — first 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/4 mb-px">
          {services.slice(0, 3).map((svc, i) => (
            <div key={svc.name} className="bg-[#050505]">
              <ServiceCard svc={svc} index={i} />
            </div>
          ))}
        </div>

        {/* Cards — last 2, centered */}
        <div className="bg-white/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px max-w-2xl mx-auto lg:max-w-none lg:flex lg:justify-center">
            {services.slice(3).map((svc, i) => (
              <div key={svc.name} className="bg-[#050505] lg:w-1/3">
                <ServiceCard svc={svc} index={i + 3} />
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 text-center text-[10px] tracking-[0.3em] uppercase text-white/20"
        >
          Todos los servicios incluyen atención personalizada y productos premium
        </motion.p>
      </div>
    </section>
  );
}
