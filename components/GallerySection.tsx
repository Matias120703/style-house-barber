"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

type Photo = {
  id: number;
  src: string;
  alt: string;
  tall?: boolean;
  wide?: boolean;
};

const photos: Photo[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=700&q=80", alt: "Fade perfecto", tall: true },
  { id: 2, src: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?w=700&q=80", alt: "Herramientas de barbero" },
  { id: 3, src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=700&q=80", alt: "Corte moderno" },
  { id: 4, src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=700&q=80", alt: "Diseño de barba", tall: true },
  { id: 5, src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=700&q=80", alt: "Afeitado de lujo" },
  { id: 6, src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=700&q=80", alt: "Degradado limpio" },
  { id: 7, src: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=900&q=80", alt: "Interior barbería", wide: true },
];

function PhotoCard({ photo, index, onClick }: { photo: Photo; index: number; onClick: () => void }) {
  const [hov, setHov] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden cursor-pointer bg-white/4 ${
        photo.tall ? "row-span-2" : ""
      } ${photo.wide ? "col-span-2" : ""}`}
      style={{ minHeight: photo.wide ? 220 : 220 }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={onClick}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ scale: hov ? 1.07 : 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className={`object-cover transition-all duration-700 ease-in-out ${
            hov ? "grayscale-0 brightness-90" : "grayscale brightness-75"
          }`}
          unoptimized
          loading="lazy"
        />
      </motion.div>

      {/* Overlay */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          hov ? "opacity-40" : "opacity-60"
        } bg-black`}
      />

      {/* Hover UI */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hov ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex flex-col items-center justify-center gap-3"
      >
        <div className="w-10 h-10 glass-bright flex items-center justify-center">
          <ZoomIn className="w-4 h-4 text-white/80" />
        </div>
        <span className="text-[9px] tracking-[0.4em] uppercase text-white/60">{photo.alt}</span>
      </motion.div>

      {/* Bottom shine */}
      <div className={`absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-white/0 ${hov ? "via-white/15" : ""} to-transparent transition-all duration-500`} />
    </motion.div>
  );
}

function Lightbox({ photos, current, onClose, onNext, onPrev }: {
  photos: Photo[];
  current: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const p = photos[current];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/96 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-5xl max-h-[88vh] mx-6"
        onClick={e => e.stopPropagation()}
      >
        <img
          src={p.src.replace("w=700", "w=1400")}
          alt={p.alt}
          className="max-h-[84vh] w-auto object-contain"
        />
        <div className="absolute bottom-3 left-3 glass px-3 py-1 text-[10px] tracking-widest uppercase text-white/60">
          {p.alt}
        </div>
        <div className="absolute bottom-3 right-3 glass px-3 py-1 text-[10px] text-white/40">
          {current + 1} / {photos.length}
        </div>
      </motion.div>

      {/* Controls */}
      <button onClick={onClose} className="absolute top-6 right-6 w-10 h-10 glass flex items-center justify-center hover:glass-bright transition-all">
        <X className="w-5 h-5 text-white" />
      </button>
      <button onClick={e => { e.stopPropagation(); onPrev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 glass flex items-center justify-center hover:glass-bright transition-all">
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      <button onClick={e => { e.stopPropagation(); onNext(); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 glass flex items-center justify-center hover:glass-bright transition-all">
        <ChevronRight className="w-5 h-5 text-white" />
      </button>
    </motion.div>
  );
}

export default function GallerySection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="galeria" ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(255,255,255,0.02) 0%, transparent 55%)" }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="section-line" />
            <span className="text-[9px] tracking-[0.5em] uppercase text-white/38">
              Nuestro trabajo
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display text-[clamp(34px,5vw,62px)] font-800 leading-[1.05] tracking-tight text-white">
              La <span className="gradient-text">Galería</span>
            </h2>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              Cada corte es una obra. Pasá el cursor sobre las imágenes para ver la transformación.
            </p>
          </div>
        </motion.div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 auto-rows-[220px]">
          {photos.map((p, i) => (
            <PhotoCard
              key={p.id}
              photo={p}
              index={i}
              onClick={() => setLightbox(i)}
            />
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <span className="text-white/25 text-[10px] tracking-[0.4em] uppercase mr-3">Seguinos en Instagram</span>
          <a
            href="https://www.instagram.com/stylehouse_bs/reels/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/55 text-sm hover:text-white/90 transition-colors underline-anim"
          >
            @stylehousebarber
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <Lightbox
            photos={photos}
            current={lightbox}
            onClose={() => setLightbox(null)}
            onNext={() => setLightbox(i => (i! + 1) % photos.length)}
            onPrev={() => setLightbox(i => (i! - 1 + photos.length) % photos.length)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
