"use client";

import { motion } from "framer-motion";
import { useMemo, type ElementType } from "react";
import { EASE_SNAP } from "./motion";

type RevealTextProps = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  /** Animate immediately on mount instead of when scrolled into view. */
  onLoad?: boolean;
};

const word = {
  hidden: { y: "115%" },
  show: {
    y: 0,
    transition: { duration: 0.55, ease: EASE_SNAP },
  },
};

/**
 * Word-by-word mask reveal — each word slides up out of an overflow clip.
 * In-view detection lives on the heading itself: the clipped word spans
 * report zero visible area to IntersectionObserver, so they can never
 * trigger their own reveal.
 */
export default function RevealText({
  text,
  as: Tag = "h2",
  className = "",
  delay = 0,
  onLoad = false,
}: RevealTextProps) {
  const MotionTag = useMemo(() => motion.create(Tag), [Tag]);
  const words = text.split(" ");

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.05, delayChildren: delay } },
  };

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      {...(onLoad
        ? { animate: "show" }
        : { whileInView: "show", viewport: { once: true, amount: 0.4 } })}
    >
      {words.map((w, i) => (
        <span key={i}>
          <span className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
            <motion.span variants={word} className="inline-block will-change-transform">
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </MotionTag>
  );
}
