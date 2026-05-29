"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Clock, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

const WA_URL =
  "https://wa.me/595983842125?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20un%20turno%20en%20Style%20House.";

const info = [
  { icon: Clock,   label: "Horarios",  value: "Lun–Sáb: 9:00 – 19:00\nSáb: 10:00 - 18:30" },
  { icon: MapPin,  label: "Ubicación", value: "Nueva Esperanza-Barrio La Victoria, Paraguay" },
  { icon: Phone,   label: "Teléfono",  value: "+595 983 842125" },
  { icon: Mail,    label: "Email",     value: "info@stylehousebarber.com" },
];

export default function BookingSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="reservas" ref={ref} className="relative py-20 md:py-32 px-4 md:px-6 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 grid-bg opacity-18" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,255,255,0.025) 0%, transparent 55%)" }}
      />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="section-line" />
            <span className="text-[9px] tracking-[0.5em] uppercase text-white/38">
              Agenda tu cita
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-white/50 to-transparent" />
          </div>
          <h2 className="font-display text-[clamp(34px,5vw,62px)] font-800 leading-[1.05] tracking-tight text-white mb-4">
            Reservá tu <span className="gradient-text">sesión</span>
          </h2>
          <p className="text-white/35 text-sm leading-relaxed max-w-sm mx-auto">
            Confirmación instantánea. Elegí el servicio, el profesional y el horario que más te convenga.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* ── Setmore iframe ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass border border-white/7 overflow-hidden">
              {/* Header bar */}
              <div className="flex items-center gap-3 px-6 py-4 border-b border-white/5">
                <Calendar className="w-4 h-4 text-white/50" />
                <span className="text-[10px] tracking-[0.25em] uppercase text-white/40">
                  Sistema de Reservas — Setmore
                </span>
                <div className="ml-auto flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-white/8" />
                  <div className="w-2 h-2 rounded-full bg-white/8" />
                  <div className="w-2 h-2 rounded-full bg-white/25" />
                </div>
              </div>

              {/* Iframe */}
              <iframe
                id="setmore_iframe"
                src="https://ignacioinsaurralde.setmore.com"
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="yes"
                title="Style House Barber Shop — Reservar turno"
                className="w-full block h-[480px] md:h-[600px]"
              />
            </div>
          </motion.div>

          {/* ── Info sidebar ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            {/* Logo card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass border border-white/7 p-6 flex items-center justify-center"
            >
              <Image
                src="/logo-stylehouse.png"
                alt="Style House Barber Shop"
                width={110}
                height={110}
              />
            </motion.div>

            {/* Info cards */}
            {info.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.45 + i * 0.08 }}
                  className="glass border border-white/5 p-4 card-hover"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 glass-bright flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3.5 h-3.5 text-white/60" />
                    </div>
                    <div>
                      <div className="text-[8px] tracking-[0.35em] uppercase text-white/35 mb-1">{item.label}</div>
                      <div className="text-white/65 text-xs leading-relaxed whitespace-pre-line">{item.value}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Walk-in note */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="glass-bright border border-white/10 p-4"
            >
              <div className="text-[8px] tracking-[0.35em] uppercase text-white/50 mb-2">Sin turno previo</div>
              <p className="text-white/40 text-xs leading-relaxed">
                Aceptamos clientes sin reserva según disponibilidad. Para asegurar tu lugar, recomendamos reservar online.
              </p>
            </motion.div>

            {/* WhatsApp quick CTA */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-[10px] justify-center"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#050505]" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Reservar por WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
