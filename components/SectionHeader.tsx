"use client";

import { motion } from "framer-motion";
import RevealText from "./RevealText";
import { EASE_SNAP } from "./motion";

type SectionHeaderProps = {
  index: string;
  eyebrow: string;
  title: string;
  align?: "left" | "center";
};

/** Numbered section rail: index + drawn line + eyebrow, then a mask-reveal headline. */
export default function SectionHeader({
  index,
  eyebrow,
  title,
  align = "left",
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "flex flex-col items-center text-center" : ""}>
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.4, ease: EASE_SNAP }}
        className="flex items-center gap-3"
      >
        <span className="font-barlow text-sm font-bold tracking-widest text-red">
          {index}
        </span>
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE_SNAP }}
          className="h-px w-12 origin-left bg-red/70"
        />
        <span className="font-barlow text-xs font-semibold uppercase tracking-[0.35em] text-gold">
          {eyebrow}
        </span>
      </motion.div>

      <RevealText
        text={title}
        className="mt-5 font-clash text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
        delay={0.1}
      />
    </div>
  );
}
