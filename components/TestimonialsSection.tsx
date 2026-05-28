"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "James Patterson",
    role: "Creative Director",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 5,
    text: "Style House completely changed how I think about grooming. Marcus understands exactly what you want before you finish describing it. The attention to detail is unparalleled — I leave looking like a different person every time.",
    service: "Royal Experience",
  },
  {
    id: 2,
    name: "Tyler Robinson",
    role: "Entrepreneur",
    avatar: "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=100&q=80",
    rating: 5,
    text: "I've been to barber shops across New York and London. Style House is in a different league. The ambiance, the skill, the attention — it's more than a haircut, it's an experience you look forward to all week.",
    service: "Signature Cut",
  },
  {
    id: 3,
    name: "Alex Chen",
    role: "Film Producer",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&q=80",
    rating: 5,
    text: "Devon is a wizard with textured hair. He's the first barber who actually listened to what I wanted and delivered something even better. I've been coming here every two weeks for the past year.",
    service: "Signature Cut",
  },
  {
    id: 4,
    name: "Marcus Williams",
    role: "Architect",
    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&q=80",
    rating: 5,
    text: "The hot towel shave experience alone is worth the trip. It's ritualistic, meditative, and the result is flawlessly smooth. The team here treats every client like royalty. Absolutely world-class.",
    service: "Hot Towel Shave",
  },
  {
    id: 5,
    name: "Ryan Foster",
    role: "Professional Athlete",
    avatar: "https://images.unsplash.com/photo-1583864697784-a0efc8379f70?w=100&q=80",
    rating: 5,
    text: "I need to look sharp before every game, and Style House never lets me down. Jordan's line work is surgical — he's not cutting hair, he's crafting a signature look. Worth every dollar.",
    service: "Beard Craft",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-purple-400 text-purple-400" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const featured = testimonials[current];
  const others = testimonials.filter((_, i) => i !== current).slice(0, 3);

  return (
    <section id="testimonials" ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(91,33,182,0.08) 0%, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="section-line" />
            <span className="text-[10px] tracking-[0.4em] uppercase text-purple-400/80">
              Client Stories
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display text-[clamp(36px,5vw,64px)] font-800 leading-[1.05] tracking-tight text-white">
              What They <span className="gradient-text">Say</span>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Don't take our word for it — hear from those who have experienced the Style House difference.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-4">
          {/* Featured Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={featured.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="glass-purple p-10 md:p-14 h-full flex flex-col justify-between"
              >
                <div>
                  {/* Quote icon */}
                  <div className="w-12 h-12 glass flex items-center justify-center mb-8">
                    <Quote className="w-5 h-5 text-purple-400" />
                  </div>

                  {/* Rating */}
                  <StarRating rating={featured.rating} />

                  {/* Text */}
                  <blockquote className="mt-6 text-white/80 text-lg md:text-xl leading-relaxed font-display font-400 italic">
                    &ldquo;{featured.text}&rdquo;
                  </blockquote>
                </div>

                {/* Author */}
                <div className="flex items-center justify-between mt-10 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-purple-500/30">
                      <img
                        src={featured.avatar}
                        alt={featured.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-display font-600 text-white">{featured.name}</div>
                      <div className="text-white/40 text-xs tracking-wide">{featured.role}</div>
                    </div>
                  </div>
                  <span className="glass text-[9px] tracking-[0.25em] uppercase text-purple-400/80 px-3 py-1.5">
                    {featured.service}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Side Testimonials + Controls */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {others.map((t, i) => (
              <motion.button
                key={t.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.4 }}
                onClick={() => setCurrent(testimonials.findIndex((x) => x.id === t.id))}
                className="glass p-5 text-left hover:glass-purple transition-all duration-300 border border-white/5 hover:border-purple-500/20 card-hover"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover opacity-80" />
                  <div>
                    <div className="text-white/80 text-sm font-500">{t.name}</div>
                    <div className="text-white/30 text-[10px]">{t.role}</div>
                  </div>
                </div>
                <p className="text-white/40 text-xs leading-relaxed line-clamp-2">{t.text}</p>
              </motion.button>
            ))}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-auto pt-4">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`transition-all duration-300 rounded-full ${
                      i === current
                        ? "w-6 h-1.5 bg-purple-500"
                        : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
                  className="w-9 h-9 glass flex items-center justify-center hover:glass-purple transition-all duration-300"
                >
                  <ChevronLeft className="w-4 h-4 text-white/60" />
                </button>
                <button
                  onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
                  className="w-9 h-9 glass flex items-center justify-center hover:glass-purple transition-all duration-300"
                >
                  <ChevronRight className="w-4 h-4 text-white/60" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "5-Star Reviews", value: "500+" },
            { label: "Google Rating", value: "4.9" },
            { label: "Repeat Clients", value: "92%" },
            { label: "Years Serving", value: "8+" },
          ].map((badge) => (
            <div key={badge.label} className="glass border border-white/5 p-5 text-center">
              <div className="font-display text-2xl font-700 gradient-text-purple mb-1">{badge.value}</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-white/30">{badge.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
