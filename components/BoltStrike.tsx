"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_SNAP } from "./motion";

// Fires right after the start lights go out, then re-strikes periodically.
const STRIKE = {
  duration: 1.1,
  repeat: Infinity,
  repeatDelay: 7.5,
  delay: 1.55,
};

const BOLT_PATH = "M190 0 L95 320 L160 305 L60 640 L150 628 L88 800";

/**
 * Lightning-strike flash in the hero: bolt cracks down, the screen flashes
 * with a double flicker, and a shockwave ring bursts from the impact.
 * Generic racing lightning in brand colors — no character IP.
 */
export default function BoltStrike() {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {/* screen flash — double flicker like a real lightning strike */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 68% 35%, rgba(245,245,245,0.5), rgba(244,180,0,0.22) 30%, transparent 65%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.2, 0.65, 0] }}
        transition={{ ...STRIKE, times: [0, 0.08, 0.14, 0.2, 0.4], ease: "easeOut" }}
      />

      {/* the bolt cracking down */}
      <div className="absolute right-[8%] top-0 h-[80%] sm:right-[16%]">
        <svg viewBox="0 0 300 800" className="h-full w-auto" fill="none">
          <defs>
            <linearGradient id="strikeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#F4B400" />
              <stop offset="1" stopColor="#E10600" />
            </linearGradient>
            <filter id="strikeGlow" x="-80%" y="-20%" width="260%" height="140%">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <motion.path
            d={BOLT_PATH}
            stroke="url(#strikeGrad)"
            strokeWidth="14"
            strokeLinejoin="round"
            strokeLinecap="round"
            filter="url(#strikeGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1, 1], opacity: [0, 1, 1, 0] }}
            transition={{ ...STRIKE, times: [0, 0.1, 0.3, 0.45], ease: EASE_SNAP }}
          />
          {/* white-hot core */}
          <motion.path
            d={BOLT_PATH}
            stroke="#F5F5F5"
            strokeWidth="4"
            strokeLinejoin="round"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1, 1], opacity: [0, 1, 0.8, 0] }}
            transition={{ ...STRIKE, times: [0, 0.09, 0.3, 0.42], ease: EASE_SNAP }}
          />
        </svg>
      </div>

      {/* shockwave ring from the impact point */}
      <motion.div
        className="absolute left-[62%] top-[44%] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gold/70"
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: [0.2, 1.2, 2.6], opacity: [0, 0.75, 0] }}
        transition={{ ...STRIKE, times: [0, 0.16, 0.5], ease: EASE_SNAP }}
      />
    </div>
  );
}
