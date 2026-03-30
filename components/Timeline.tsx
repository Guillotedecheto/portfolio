"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { timeline } from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const formations = timeline.filter((t) => t.type === "formation");
  const experiences = timeline.filter((t) => t.type === "experience");

  return (
    <section id="parcours" ref={ref} className="section-padding border-t border-border">
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
            03
          </span>
          <div>
            <p className="font-body text-accent text-xs tracking-[0.3em] uppercase mb-1">
              Mon histoire
            </p>
            <h2 className="font-display font-black text-3xl md:text-5xl text-primary leading-tight">
              Parcours
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Formation */}
          <div>
            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-body text-secondary text-xs tracking-[0.3em] uppercase mb-8"
            >
              Formation
            </motion.p>

            <div className="relative pl-6 border-l border-border space-y-8">
              {formations.map((item, i) => (
                <motion.div
                  key={i}
                  custom={2 + i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="relative group"
                >
                  {/* Dot */}
                  <div className="absolute -left-[25px] top-1 w-2 h-2 rounded-full border border-accent bg-bg group-hover:bg-accent transition-colors duration-300" />

                  <span className="font-body text-accent text-xs tracking-widest uppercase mb-1 block">
                    {item.periode}
                  </span>
                  <p className="font-body text-secondary text-xs mb-1">
                    {item.lieu}
                  </p>
                  <h3 className="font-display font-black text-primary text-base md:text-lg mb-2">
                    {item.titre}
                  </h3>
                  <p className="font-body text-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Expériences */}
          <div>
            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-body text-secondary text-xs tracking-[0.3em] uppercase mb-8"
            >
              Expériences professionnelles
            </motion.p>

            <div className="relative pl-6 border-l border-border space-y-8">
              {experiences.map((item, i) => (
                <motion.div
                  key={i}
                  custom={2 + formations.length + i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="relative group"
                >
                  {/* Dot */}
                  <div className="absolute -left-[25px] top-1 w-2 h-2 rounded-full border border-accent bg-bg group-hover:bg-accent transition-colors duration-300" />

                  <span className="font-body text-accent text-xs tracking-widest uppercase mb-1 block">
                    {item.periode}
                  </span>
                  <p className="font-body text-secondary text-xs mb-1">
                    {item.lieu}
                  </p>
                  <h3 className="font-display font-black text-primary text-base md:text-lg mb-2">
                    {item.titre}
                  </h3>
                  <p className="font-body text-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
