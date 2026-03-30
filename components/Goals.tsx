"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { goals } from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Goals() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="objectifs" ref={ref} className="section-padding border-t border-border">
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
            06
          </span>
          <div>
            <p className="font-body text-accent text-xs tracking-[0.3em] uppercase mb-1">
              Vision
            </p>
            <h2 className="font-display font-black text-3xl md:text-5xl text-primary leading-tight">
              Projets & Objectifs
            </h2>
          </div>
        </motion.div>

        {/* Goals grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {goals.map((goal, i) => (
            <motion.div
              key={i}
              custom={1 + i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="p-8 bg-surface border border-border rounded-sm hover:border-accent/40 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Background number */}
              <span className="absolute top-4 right-6 font-display font-black text-7xl text-white/[0.03] leading-none select-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10">
                <span className="inline-block font-body text-accent text-xs tracking-[0.3em] uppercase mb-4">
                  Objectif {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display font-black text-primary text-xl md:text-2xl mb-4 group-hover:text-accent transition-colors duration-300">
                  {goal.titre}
                </h3>
                <div className="w-8 h-px bg-accent/50 mb-4 group-hover:w-full transition-all duration-500" />
                <p className="font-body text-secondary text-sm leading-relaxed">
                  {goal.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
