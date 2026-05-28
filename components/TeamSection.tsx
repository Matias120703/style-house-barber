"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Scissors } from "lucide-react";

const team = [
  {
    name: "Marcus Reid",
    role: "Master Barber & Founder",
    tagline: "20 years of precision",
    bio: "Award-winning barber with two decades of experience. Known for seamless fades and architectural hairlines.",
    specialties: ["Skin Fades", "Beard Sculpting", "Classic Cuts"],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    instagram: "#",
    twitter: "#",
    featured: true,
  },
  {
    name: "Devon Chase",
    role: "Senior Barber",
    tagline: "Texture specialist",
    bio: "Devon's artistry with textured hair and creative styling has made him a client favorite.",
    specialties: ["Textured Cuts", "Color Blending", "Modern Styles"],
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    instagram: "#",
    twitter: "#",
    featured: false,
  },
  {
    name: "Jordan Wells",
    role: "Style Specialist",
    tagline: "Streetwear aesthetic",
    bio: "Blending streetwear culture with premium grooming, Jordan crafts looks that make statements.",
    specialties: ["Geometric Cuts", "Line Work", "Freehand Designs"],
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&q=80",
    instagram: "#",
    twitter: "#",
    featured: false,
  },
  {
    name: "Andre Myles",
    role: "Beard Expert",
    tagline: "King of the beard",
    bio: "Certified beard specialist with a talent for transforming facial hair into sculpted masterpieces.",
    specialties: ["Beard Shaping", "Hot Towel Shaves", "Beard Treatments"],
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    instagram: "#",
    twitter: "#",
    featured: false,
  },
];

function TeamCard({ member, index }: { member: typeof team[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden ${member.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
    >
      {/* Photo container */}
      <div className="relative overflow-hidden aspect-[3/4]">
        <motion.img
          src={member.avatar}
          alt={member.name}
          className="w-full h-full object-cover object-top"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          loading="lazy"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />

        {/* Featured badge */}
        {member.featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-purple-600 text-white text-[9px] tracking-[0.3em] uppercase px-3 py-1">
              Founder
            </span>
          </div>
        )}

        {/* Social icons on hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute top-4 left-4 flex gap-2"
        >
          <motion.a
            href={member.instagram}
            className="w-9 h-9 glass flex items-center justify-center hover:glass-purple transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white/80" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </motion.a>
          <motion.a
            href={member.twitter}
            className="w-9 h-9 glass flex items-center justify-center hover:glass-purple transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            aria-label="X (Twitter)"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white/80" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.738-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Info */}
      <div className={`p-6 ${member.featured ? "glass-purple" : "glass"} border-t border-white/5`}>
        <div className="text-[9px] tracking-[0.4em] uppercase text-purple-400/70 mb-1">
          {member.tagline}
        </div>
        <h3 className="font-display text-xl font-700 text-white mb-0.5">
          {member.name}
        </h3>
        <div className="text-white/40 text-xs tracking-wide mb-3">{member.role}</div>

        <p className="text-white/40 text-xs leading-relaxed mb-4 hidden group-hover:block">
          {member.bio}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {member.specialties.map((s) => (
            <span
              key={s}
              className="text-[9px] tracking-wider uppercase px-2 py-1 bg-white/5 text-white/40 border border-white/5"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom border glow */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/0 group-hover:via-purple-500/60 to-transparent transition-all duration-500" />
    </motion.div>
  );
}

export default function TeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(91,33,182,0.07) 0%, transparent 60%)" }}
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
              The Artisans
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display text-[clamp(36px,5vw,64px)] font-800 leading-[1.05] tracking-tight text-white">
              Meet The <span className="gradient-text">Team</span>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              A collective of passionate artisans dedicated to elevating your look.
            </p>
          </div>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>

        {/* Marquee ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 overflow-hidden border-y border-white/5 py-4"
        >
          <div className="animate-marquee whitespace-nowrap inline-flex gap-12 text-[10px] tracking-[0.4em] uppercase text-white/20">
            {Array(6).fill(null).map((_, i) => (
              <span key={i} className="flex items-center gap-6">
                <Scissors className="w-3 h-3 text-purple-500/40 inline rotate-45" />
                Premium Craftsmanship
                <span className="text-purple-500/40">·</span>
                Master Barbers
                <span className="text-purple-500/40">·</span>
                Luxury Experience
                <span className="text-purple-500/40">·</span>
                Precision Cuts
                <span className="text-purple-500/40">·</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
