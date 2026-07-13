"use client";

import { motion } from "framer-motion";
import CountUp from "./CountUp";
import SectionHeader from "./SectionHeader";
import { EASE_SNAP } from "./motion";

const stats = [
  {
    value: (
      <>
        <CountUp to={2} />–<CountUp to={5} />%
      </>
    ),
    label: "Average HVAC website conversion rate",
  },
  {
    value: (
      <>
        <CountUp to={3} duration={0.7} /> sec
      </>
    ),
    label: "How long you have before half your mobile visitors leave",
  },
  {
    value: (
      <>
        $<CountUp to={47} />K–$<CountUp to={312} duration={1.1} />K
      </>
    ),
    label: "Estimated annual revenue lost to missed calls",
  },
];

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { y: 44, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: EASE_SNAP },
  },
};

export default function Problem() {
  return (
    <section id="problem" className="relative overflow-hidden px-5 py-28 sm:px-8">
      <div
        className="glow-red absolute right-[-14rem] top-10 h-[26rem] w-[36rem] opacity-60"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          index="01"
          eyebrow="The Leak"
          title="You're Losing More Than You Think"
        />

        <motion.p
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: 0.15, ease: EASE_SNAP }}
          className="mt-7 max-w-2xl text-lg text-silver"
        >
          78% of jobs go to whoever calls back first. Miss even 5 calls a
          week during peak season, and that&apos;s $47,000–$312,000 walking
          to a competitor every year. Add a slow website and wasted ad
          spend, and the leak gets worse.
        </motion.p>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 grid gap-5 sm:grid-cols-3"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={card}
              className="card-premium hud-corners p-7"
            >
              <span className="font-barlow text-[11px] font-semibold uppercase tracking-[0.3em] text-silver/50">
                Data / 0{i + 1}
              </span>
              <div className="stat-glow mt-4 font-barlow text-5xl font-bold text-red sm:text-6xl">
                {stat.value}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-silver">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
