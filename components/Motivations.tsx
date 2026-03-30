"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { freyaResults } from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Motivations() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="motivations" ref={ref} className="section-padding border-t border-border">
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
            05
          </span>
          <div>
            <p className="font-body text-accent text-xs tracking-[0.3em] uppercase mb-1">
              Ce qui me motive
            </p>
            <h2 className="font-display font-black text-3xl md:text-5xl text-primary leading-tight">
              Motivations
            </h2>
          </div>
        </motion.div>

        {/* Freya intro */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-12"
        >
          <div className="accent-line" />
          <p className="font-body text-secondary text-sm leading-relaxed max-w-2xl">
            Le test Freya (Jobteaser) analyse mes motivations professionnelles selon cinq
            dimensions clés. Ces résultats reflètent ce qui me donne de l&apos;énergie au
            travail et guide mes choix de carrière.
          </p>
        </motion.div>

        {/* Freya bars */}
        <div className="space-y-8">
          {freyaResults.map((result, i) => (
            <motion.div
              key={result.dimension}
              custom={2 + i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr_300px] gap-4 md:gap-8 items-center group"
            >
              {/* Dimension name */}
              <div>
                <p className="font-display font-black text-primary text-sm tracking-widest uppercase">
                  {result.dimension}
                </p>
                <p className="font-body text-accent text-xl font-bold mt-1">
                  {result.score > 0 ? `${result.score}%` : "[À COMPLÉTER]"}
                </p>
              </div>

              {/* Bar */}
              <div className="h-px bg-border relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${result.score}%` } : { width: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-y-0 left-0 h-full bg-accent origin-left"
                  style={{ height: "2px", top: "-1px" }}
                />
              </div>

              {/* Description */}
              <p className="font-body text-secondary text-sm leading-relaxed">
                {result.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
