"use client";

import { motion } from "framer-motion";
import { CALENDLY_URL } from "./CTAButton";
import SectionHeader from "./SectionHeader";
import { EASE_SNAP } from "./motion";

export default function FinalCTA() {
  return (
    <section id="book" className="relative overflow-hidden px-5 py-28 sm:px-8">
      <div
        className="glow-red absolute left-1/2 top-24 h-[24rem] w-[44rem] -translate-x-1/2 opacity-70"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl">
        <SectionHeader
          index="05"
          eyebrow="The Green Light"
          title="Ready to Stop Losing Calls to Competitors?"
          align="center"
        />

        <motion.p
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.15, ease: EASE_SNAP }}
          className="mx-auto mt-6 max-w-xl text-center text-lg text-silver"
        >
          Book a free, no-obligation 20-minute call. We&apos;ll show you
          exactly where your HVAC business is losing calls — and how the
          system plugs the leak.
        </motion.p>

        <motion.div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, delay: 0.1, ease: EASE_SNAP }}
          className="card-premium mt-12 overflow-hidden"
        >
          {/*
            Calendly inline embed. Set NEXT_PUBLIC_CALENDLY_URL in .env.local
            to your real Calendly scheduling link — see .env.local.example.
          */}
          <iframe
            src={`${CALENDLY_URL}?embed_domain=funnelmcqueen&embed_type=Inline`}
            title="Book a free call with FunnelMcQueen"
            className="h-[650px] w-full"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
