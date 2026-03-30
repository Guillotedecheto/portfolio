"use client";

import { motion } from "framer-motion";
import { hero } from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 md:pb-28 section-padding overflow-hidden">
      {/* Background grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" />

      {/* Large background number */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-black text-[20vw] text-white/[0.02] select-none pointer-events-none leading-none pr-4 md:pr-12">
        01
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl">
        {/* Eyebrow */}
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-body text-accent text-sm tracking-[0.3em] uppercase mb-6"
        >
          Portfolio Professionnel · 2025
        </motion.p>

        {/* Main headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-display font-black leading-[0.9] tracking-tight mb-8"
          style={{ fontSize: "clamp(3rem, 9vw, 8.5rem)" }}
        >
          <span className="block text-primary">{hero.prenom}</span>
          <span className="block text-primary">{hero.nom}</span>
        </motion.h1>

        {/* Quote */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <p className="font-display font-black text-accent text-lg md:text-2xl italic tracking-wide">
            &ldquo;{hero.quote}&rdquo;
          </p>
        </motion.div>

        {/* Divider + pitch */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12"
        >
          <div className="w-12 h-px bg-accent mt-3 shrink-0" />
          <div className="max-w-2xl">
            <p className="font-body text-secondary text-sm tracking-[0.2em] uppercase mb-3">
              {hero.titre}
            </p>
            <p className="font-body text-primary/70 leading-relaxed text-base md:text-lg">
              {hero.pitch}
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-12"
        >
          <a
            href="#apropos"
            className="inline-flex items-center gap-3 font-body text-sm tracking-widest uppercase text-primary hover:text-accent transition-colors duration-300 group"
          >
            <span>{hero.cta}</span>
            <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-14" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 right-8 md:right-24 flex flex-col items-center gap-2"
      >
        <span className="font-body text-secondary text-xs tracking-widest uppercase rotate-90 origin-center mb-4">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  );
}
