"use client";

import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import BoltIcon from "./BoltIcon";
import BoltStrike from "./BoltStrike";
import StartLights from "./StartLights";
import { FlameIcon, SnowflakeIcon } from "./HvacIcons";
import { EASE_SNAP } from "./motion";

// headline words reveal one by one after the start lights go out
const HEADLINE: { text: string; accent?: boolean }[] = [
  { text: "Your" },
  { text: "Phone" },
  { text: "Should" },
  { text: "Be" },
  { text: "Ringing", accent: true },
  { text: "More" },
  { text: "Than" },
  { text: "It" },
  { text: "Is." },
];

const speedLines = [
  { top: 14, width: "55%", duration: 1.3, delay: 0 },
  { top: 30, width: "70%", duration: 1.1, delay: 0.4 },
  { top: 68, width: "60%", duration: 1.5, delay: 0.8 },
  { top: 84, width: "45%", duration: 1.2, delay: 1.2 },
];

const rise = (delay: number) => ({
  initial: { y: 28, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5, ease: EASE_SNAP, delay },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-grid relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pb-20 pt-28 text-center sm:px-8"
    >
      {/* ambient light + motion layer */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="glow-red absolute -top-40 left-1/2 h-[36rem] w-[60rem] -translate-x-1/2" />
        <div className="glow-gold absolute bottom-0 right-[-10rem] h-[28rem] w-[40rem]" />

        {speedLines.map((line) => (
          <motion.div
            key={line.top}
            initial={{ x: "-120%", opacity: 0 }}
            animate={{ x: "120%", opacity: [0, 0.45, 0] }}
            transition={{
              duration: line.duration,
              repeat: Infinity,
              repeatDelay: 0.6,
              delay: line.delay,
              ease: EASE_SNAP,
            }}
            className="absolute h-[2px] bg-gradient-to-r from-transparent via-red to-transparent"
            style={{ top: `${line.top}%`, width: line.width }}
          />
        ))}

        {/* lightning bolt streaking across with a light trail */}
        <motion.div
          initial={{ x: "-20vw" }}
          animate={{ x: "115vw" }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            repeatDelay: 3.4,
            delay: 2.2,
            ease: "linear",
          }}
          className="absolute left-0 top-[58%]"
        >
          <div className="relative">
            <div className="absolute right-full top-1/2 h-[3px] w-[38vw] -translate-y-1/2 bg-gradient-to-l from-gold via-red/50 to-transparent" />
            <BoltIcon className="h-7 w-7 -rotate-90 text-gold [filter:drop-shadow(0_0_8px_rgba(244,180,0,0.8))]" />
          </div>
        </motion.div>
      </div>

      <BoltStrike />

      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.015, 1] }}
        transition={{
          duration: 0.3,
          delay: 1.62,
          repeat: Infinity,
          repeatDelay: 8.3,
          ease: EASE_SNAP,
        }}
        className="relative flex flex-col items-center"
      >
        <motion.div {...rise(0.05)}>
          <StartLights />
        </motion.div>

        <motion.div
          {...rise(0.45)}
          className="mt-7 flex items-center gap-2.5 border border-white/10 bg-white/[0.03] px-4 py-2"
        >
          <FlameIcon className="h-3.5 w-3.5 text-red" />
          <span className="font-barlow text-[11px] font-semibold uppercase tracking-[0.25em] text-silver sm:text-xs">
            For HVAC Companies — Install · Repair · Maintenance
          </span>
          <SnowflakeIcon className="h-3.5 w-3.5 text-silver" />
        </motion.div>

        <motion.p
          {...rise(0.6)}
          className="mt-5 font-barlow text-sm font-semibold uppercase tracking-[0.4em] text-gold sm:text-base"
        >
          Speed. Precision. Results.
        </motion.p>

        <h1 className="mt-6 max-w-5xl font-clash text-5xl font-semibold leading-[0.98] tracking-tight sm:text-7xl md:text-8xl">
          {HEADLINE.map((word, i) => (
            <span key={i}>
              <span className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
                <motion.span
                  className={`inline-block will-change-transform ${
                    word.accent ? "text-red" : ""
                  }`}
                  initial={{ y: "115%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: EASE_SNAP,
                    delay: 0.95 + i * 0.05,
                  }}
                >
                  {word.text}
                </motion.span>
              </span>
              {i < HEADLINE.length - 1 && " "}
            </span>
          ))}
        </h1>

        <motion.p
          {...rise(1.5)}
          className="mt-7 max-w-2xl text-lg text-silver sm:text-xl"
        >
          Built for speed. Wired to convert. We build the website, ads, and
          follow-up system that turns missed calls into booked HVAC jobs.
        </motion.p>

        <motion.div {...rise(1.65)} className="mt-10 flex flex-col items-center gap-3">
          <CTAButton />
          <span className="flex items-center gap-1.5 font-barlow text-sm font-medium uppercase tracking-wide text-silver">
            <BoltIcon className="h-3.5 w-3.5 text-gold" />
            No obligation. 20-minute call.
          </span>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.4 }}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-barlow text-[10px] font-semibold uppercase tracking-[0.4em] text-silver/60">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: EASE_SNAP }}
          className="block h-6 w-px bg-gradient-to-b from-red to-transparent"
        />
      </motion.div>
    </section>
  );
}
