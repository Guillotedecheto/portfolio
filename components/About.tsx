"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { about } from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="apropos" ref={ref} className="section-padding border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-display font-black text-[10vw] md:text-[6rem] text-white/[0.04] leading-none select-none">
            02
          </span>
          <div>
            <p className="font-body text-accent text-xs tracking-[0.3em] uppercase mb-1">
              Qui suis-je
            </p>
            <h2 className="font-display font-black text-3xl md:text-5xl text-primary leading-tight">
              À propos
            </h2>
          </div>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Photo */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 overflow-hidden bg-surface rounded-sm">
              <Image
                src={about.photo}
                alt="Guillermo Barboza Clavares"
                fill
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  img.src = "/photo-placeholder.svg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-3 -right-3 w-full max-w-sm border border-accent/20 rounded-sm -z-10 top-3" />

            {/* Languages under photo */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="mt-6 max-w-sm mx-auto lg:mx-0"
            >
              <p className="font-body text-secondary text-xs tracking-[0.3em] uppercase mb-4">
                Langues
              </p>
              <div className="space-y-2">
                {about.langues.map((l) => (
                  <div key={l.langue} className="flex items-center gap-3">
                    <span className="font-body text-sm text-primary/80 w-24 shrink-0">
                      {l.langue}
                    </span>
                    <div className="flex-1 h-px bg-border relative">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${l.score}%` } : { width: 0 }}
                        transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0 h-full bg-accent"
                        style={{ height: "2px", top: "-1px" }}
                      />
                    </div>
                    <span className="font-body text-xs text-accent w-28 text-right shrink-0">
                      {l.niveau}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Text content */}
          <div className="space-y-10">
            {/* Description */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <div className="accent-line" />
              <p className="font-body text-primary/80 leading-relaxed text-base md:text-lg">
                {about.description}
              </p>
            </motion.div>

            {/* Valeurs */}
            <div className="space-y-4">
              <motion.p
                custom={4}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="font-body text-secondary text-xs tracking-[0.3em] uppercase"
              >
                Mes valeurs
              </motion.p>

              {about.valeurs.map((valeur, i) => (
                <motion.div
                  key={valeur.titre}
                  custom={5 + i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="p-5 bg-surface border border-border rounded-sm hover:border-accent/30 transition-colors duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-accent text-xs mt-1 font-display font-black">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display font-black text-primary text-sm tracking-widest uppercase mb-1 group-hover:text-accent transition-colors duration-300">
                        {valeur.titre}
                      </h3>
                      <p className="font-body text-secondary text-sm leading-relaxed">
                        {valeur.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
