"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { EASE_SNAP } from "./motion";

const steps = [
  {
    number: "01",
    title: "Free Call",
    description: "We look at what's actually costing you leads.",
  },
  {
    number: "02",
    title: "We Build",
    description: "Site, ads, and funnel built and connected as one system.",
  },
  {
    number: "03",
    title: "You Get Booked",
    description:
      "Leads come in, follow-up happens automatically, you focus on the job.",
  },
];

const row = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};

const step = {
  hidden: { x: -56, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: EASE_SNAP },
  },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden px-5 py-28 sm:px-8">
      <div
        className="glow-red absolute left-[-16rem] top-1/3 h-[24rem] w-[34rem] opacity-50"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader index="03" eyebrow="The Process" title="How It Works" />

        <motion.div
          variants={row}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="relative mt-16 grid gap-12 sm:grid-cols-3 sm:gap-6"
        >
          {/* race track — draws in, checkered flag at the finish */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.8, ease: EASE_SNAP }}
            className="absolute left-0 right-10 top-7 hidden h-[2px] origin-left bg-gradient-to-r from-red via-red/40 to-gold/60 sm:block"
            aria-hidden="true"
          />
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 0.5, scale: 1 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.3, delay: 0.8, ease: EASE_SNAP }}
            className="checkered absolute right-0 top-7 hidden h-5 w-8 -translate-y-1/2 sm:block"
            aria-hidden="true"
          />

          {steps.map((item) => (
            <motion.div key={item.number} variants={step} className="relative">
              <span className="stat-glow font-barlow text-6xl font-bold text-red">
                {item.number}
              </span>
              <h3 className="mt-4 font-clash text-2xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-silver">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
