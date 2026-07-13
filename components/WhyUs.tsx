"use client";

import { motion } from "framer-motion";
import BoltIcon from "./BoltIcon";
import SectionHeader from "./SectionHeader";
import { EASE_SNAP } from "./motion";

export default function WhyUs() {
  return (
    <section id="why-us" className="relative px-5 py-28 sm:px-8">
      <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-2 lg:gap-12">
        <div>
          <SectionHeader
            index="04"
            eyebrow="Why FunnelMcQueen"
            title="Why FunnelMcQueen"
          />

          <motion.p
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: 0.15, ease: EASE_SNAP }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-silver"
          >
            Most competitors do one piece and leave you to figure out the
            rest. We build the full system — website, ads, and follow-up —
            so nothing falls through the cracks.
          </motion.p>
        </div>

        <motion.blockquote
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, delay: 0.1, ease: EASE_SNAP }}
          className="card-premium relative p-8 sm:p-10"
        >
          <BoltIcon className="h-8 w-8 text-gold [filter:drop-shadow(0_0_10px_rgba(244,180,0,0.5))]" />
          <span className="mt-5 block font-barlow text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            The Story
          </span>
          <p className="mt-4 text-base italic leading-relaxed text-silver sm:text-lg">
            &ldquo;I&apos;ve always been obsessed with speed — not cars
            specifically, just the idea that things done right don&apos;t
            have to be slow. Most agencies take months to ship a website
            that should take weeks. FunnelMcQueen exists because local
            businesses shouldn&apos;t have to choose between fast and good.
            We build fast, we build precise, and we don&apos;t stop tuning
            until you&apos;re winning.&rdquo;
          </p>
          <span
            className="absolute bottom-0 left-0 h-[3px] w-1/3 bg-gradient-to-r from-gold to-transparent"
            aria-hidden="true"
          />
        </motion.blockquote>
      </div>
    </section>
  );
}
