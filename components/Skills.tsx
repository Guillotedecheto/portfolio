"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { hardSkills, hesterSkills } from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

function SkillBar({ nom, niveau, inView, delay }: { nom: string; niveau: number; inView: boolean; delay: number }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="font-body text-sm text-primary/80">{nom}</span>
        <span className="font-body text-xs text-accent">{niveau}%</span>
      </div>
      <div className="h-px bg-border overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${niveau}%` } : { width: 0 }}
          transition={{ delay, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="h-full bg-gradient-to-r from-accent to-accent/50"
        />
      </div>
    </div>
  );
}

function HesterCard({ skill, index, inView }: { skill: typeof hesterSkills[0]; index: number; inView: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      custom={index + 4}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="border border-border rounded-sm overflow-hidden group"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-5 p-6 text-left hover:bg-surface transition-colors duration-200"
      >
        <span className="font-display font-black text-4xl text-white/[0.06] leading-none select-none shrink-0 group-hover:text-accent/20 transition-colors duration-300">
          {skill.icone}
        </span>
        <div className="flex-1 min-w-0">
          <p className="font-body text-accent text-xs tracking-[0.2em] uppercase mb-1">
            Soft skill · Hester
          </p>
          <h3 className="font-display font-black text-primary text-xl md:text-2xl">
            {skill.competence}
          </h3>
        </div>
        <span
          className={`shrink-0 w-6 h-6 flex items-center justify-center text-secondary transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-border pt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: "Contexte", text: skill.contexte },
                { label: "Action", text: skill.action },
                { label: "Résultat", text: skill.resultat },
              ].map(({ label, text }) => (
                <div key={label}>
                  <p className="font-body text-accent text-xs tracking-widest uppercase mb-2">
                    {label}
                  </p>
                  <p className="font-body text-secondary text-sm leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="competences" ref={ref} className="section-padding border-t border-border">
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
            04
          </span>
          <div>
            <p className="font-body text-accent text-xs tracking-[0.3em] uppercase mb-1">
              Ce que je sais faire
            </p>
            <h2 className="font-display font-black text-3xl md:text-5xl text-primary leading-tight">
              Compétences
            </h2>
          </div>
        </motion.div>

        {/* Hard skills grid */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <p className="font-body text-secondary text-xs tracking-[0.3em] uppercase mb-8">
            Hard skills
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {hardSkills.map((group, gi) => (
              <div key={group.categorie}>
                <p className="font-display font-black text-primary text-sm tracking-widest uppercase mb-4">
                  {group.categorie}
                </p>
                {group.items.map((skill, si) => (
                  <SkillBar
                    key={skill.nom}
                    nom={skill.nom}
                    niveau={skill.niveau}
                    inView={inView}
                    delay={0.3 + gi * 0.1 + si * 0.05}
                  />
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hester skills */}
        <div>
          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-body text-secondary text-xs tracking-[0.3em] uppercase mb-8"
          >
            Soft skills — Test Hester (cliquez pour développer)
          </motion.p>

          <div className="space-y-3">
            {hesterSkills.map((skill, i) => (
              <HesterCard key={skill.icone} skill={skill} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
