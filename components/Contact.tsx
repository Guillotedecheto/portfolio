"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { contact, hero } from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="section-padding border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Big CTA headline */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <p className="font-body text-accent text-xs tracking-[0.3em] uppercase mb-6">
            07 · Contact
          </p>
          <h2
            className="font-display font-black text-primary leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
          >
            Travaillons
            <br />
            <span className="text-accent">ensemble.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Message */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="accent-line" />
            <p className="font-body text-primary/70 leading-relaxed text-base md:text-lg mb-8">
              {contact.message}
            </p>

            {/* Links */}
            <div className="space-y-4">
              {contact.email && !contact.email.startsWith("[") && (
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-4 group"
                >
                  <span className="font-body text-secondary text-xs tracking-widest uppercase w-20 shrink-0">
                    Email
                  </span>
                  <span className="font-body text-primary group-hover:text-accent transition-colors duration-200 border-b border-transparent group-hover:border-accent/50">
                    {contact.email}
                  </span>
                </a>
              )}

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <span className="font-body text-secondary text-xs tracking-widest uppercase w-20 shrink-0">
                  LinkedIn
                </span>
                <span className="font-body text-primary group-hover:text-accent transition-colors duration-200 border-b border-transparent group-hover:border-accent/50">
                  {hero.prenom} {hero.nom}
                </span>
              </a>

              {contact.phone && !contact.phone.startsWith("[") && (
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-4 group"
                >
                  <span className="font-body text-secondary text-xs tracking-widest uppercase w-20 shrink-0">
                    Téléphone
                  </span>
                  <span className="font-body text-primary group-hover:text-accent transition-colors duration-200 border-b border-transparent group-hover:border-accent/50">
                    {contact.phone}
                  </span>
                </a>
              )}
            </div>
          </motion.div>

          {/* Big LinkedIn CTA */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex items-end"
          >
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-8 py-5 border border-accent/30 hover:bg-accent hover:border-accent text-accent hover:text-bg font-display font-black text-sm tracking-widest uppercase transition-all duration-300 group"
            >
              <span>Voir mon LinkedIn</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        >
          <p className="font-body text-secondary text-xs">
            © 2025 {hero.prenom} {hero.nom} · Portfolio Atelier 3 — TBS Éducation
          </p>
          <a
            href="#"
            className="font-body text-secondary text-xs hover:text-accent transition-colors duration-200 tracking-widest uppercase"
          >
            Retour en haut ↑
          </a>
        </motion.div>
      </div>
    </section>
  );
}
