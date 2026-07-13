"use client";

import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import { EASE_SNAP } from "./motion";

export default function Proof() {
  return (
    <section id="proof" className="relative px-5 py-28 sm:px-8">
      <motion.div
        initial={{ y: 48, scale: 0.97, opacity: 0 }}
        whileInView={{ y: 0, scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.5, ease: EASE_SNAP }}
        className="hud-corners relative mx-auto max-w-4xl overflow-hidden border border-gold/25 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-10 text-center sm:p-16"
      >
        <div
          className="glow-gold absolute -top-24 left-1/2 h-[20rem] w-[34rem] -translate-x-1/2"
          aria-hidden="true"
        />
        <span
          className="checkered absolute right-6 top-6 hidden h-4 w-10 opacity-25 sm:block"
          aria-hidden="true"
        />

        <span className="relative font-barlow text-xs font-semibold uppercase tracking-[0.35em] text-gold">
          Founding Cohort
        </span>
        <h2 className="relative mt-4 font-clash text-3xl font-semibold tracking-tight sm:text-5xl">
          Now Taking On Our Founding Cohort
        </h2>
        <p className="relative mx-auto mt-6 max-w-xl text-lg text-silver">
          We&apos;re currently taking on a limited number of HVAC companies
          for launch — founding clients get direct, hands-on attention and
          founding pricing.
        </p>
        <div className="relative mt-9 flex justify-center">
          <CTAButton />
        </div>
      </motion.div>
    </section>
  );
}
