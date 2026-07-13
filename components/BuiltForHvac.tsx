"use client";

import { motion } from "framer-motion";
import BoltIcon from "./BoltIcon";
import { FlameIcon, SnowflakeIcon } from "./HvacIcons";
import { EASE_SNAP } from "./motion";

const trades = [
  { label: "AC Repair", Icon: SnowflakeIcon, iconClass: "text-silver" },
  { label: "Furnace Installs", Icon: FlameIcon, iconClass: "text-red" },
  { label: "Heat Pumps", Icon: FlameIcon, iconClass: "text-red" },
  { label: "Maintenance Plans", Icon: BoltIcon, iconClass: "text-gold" },
  { label: "Emergency Call-Outs", Icon: FlameIcon, iconClass: "text-red" },
  { label: "Mini-Splits", Icon: SnowflakeIcon, iconClass: "text-silver" },
  { label: "Air Quality", Icon: SnowflakeIcon, iconClass: "text-silver" },
  { label: "Seasonal Tune-Ups", Icon: BoltIcon, iconClass: "text-gold" },
];

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const chip = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: EASE_SNAP },
  },
};

/** Compact band mirroring the visitor's trade — HVAC companies should see themselves here. */
export default function BuiltForHvac() {
  return (
    <section className="relative border-b border-white/5 px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, ease: EASE_SNAP }}
          className="text-center font-barlow text-xs font-semibold uppercase tracking-[0.35em] text-gold"
        >
          Built for the work you do
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, delay: 0.08, ease: EASE_SNAP }}
          className="mx-auto mt-3 max-w-xl text-center text-base text-silver"
        >
          If you install, repair, or maintain heating and cooling, this
          system was built for you.
        </motion.p>

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-2.5"
        >
          {trades.map(({ label, Icon, iconClass }) => (
            <motion.span
              key={label}
              variants={chip}
              className="flex items-center gap-2 border border-white/10 bg-white/[0.03] px-4 py-2 transition-colors duration-100 [transition-timing-function:var(--ease-snap)] hover:border-red/40"
            >
              <Icon className={`h-3.5 w-3.5 ${iconClass}`} />
              <span className="font-barlow text-xs font-semibold uppercase tracking-[0.2em] text-offwhite/90">
                {label}
              </span>
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
