"use client";

import { motion } from "framer-motion";
import BoltIcon from "./BoltIcon";
import SectionHeader from "./SectionHeader";
import { EASE_SNAP } from "./motion";

const packages = [
  {
    name: "Pole Position",
    role: "Website",
    description:
      "A fast, mobile-first HVAC website built to earn homeowner trust and convert visitors into calls. Custom-built, not templated.",
  },
  {
    name: "Full Throttle",
    role: "Ads",
    description:
      "Targeted campaigns for the jobs you actually want — installs, repairs, maintenance plans — without burning budget on clicks that don't convert.",
  },
  {
    name: "Victory Lap",
    role: "Funnel",
    description:
      "Instant follow-up, missed-call text-back, and booking automation — so no lead slips away while you're out on a job.",
  },
];

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
};

const card = {
  hidden: { y: 48, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.42, ease: EASE_SNAP },
  },
};

export default function Solution() {
  return (
    <section id="solution" className="relative px-5 py-28 sm:px-8">
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          index="02"
          eyebrow="The System"
          title="One Pit Crew. Three Jobs."
        />

        <motion.p
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: 0.15, ease: EASE_SNAP }}
          className="mt-7 max-w-2xl text-lg text-silver"
        >
          Most agencies hand you a website and wish you luck. We build the
          whole system — and keep tuning it.
        </motion.p>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-16 grid gap-5 sm:grid-cols-3"
        >
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              variants={card}
              whileHover={{ y: -6, transition: { duration: 0.12, ease: EASE_SNAP } }}
              className="card-premium group flex flex-col p-8"
            >
              <div className="flex items-start justify-between">
                <BoltIcon className="h-7 w-7 text-gold transition-transform duration-100 [transition-timing-function:var(--ease-snap)] group-hover:scale-125" />
                <span className="font-barlow text-6xl font-bold leading-none text-white/[0.06] transition-colors duration-150 group-hover:text-red/20">
                  0{i + 1}
                </span>
              </div>

              <span className="mt-6 font-barlow text-xs font-semibold uppercase tracking-[0.25em] text-silver/70">
                {pkg.role}
              </span>
              <h3 className="mt-1.5 font-clash text-3xl font-semibold tracking-tight">
                {pkg.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-silver">
                {pkg.description}
              </p>

              {/* racing stripe fires across on hover */}
              <span
                className="mt-8 block h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r from-red to-gold transition-transform duration-200 [transition-timing-function:var(--ease-snap)] group-hover:scale-x-100"
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
