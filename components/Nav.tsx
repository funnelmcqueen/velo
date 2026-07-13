"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Logo from "./Logo";
import CTAButton from "./CTAButton";
import { EASE_SNAP } from "./motion";

const links = [
  { href: "#problem", label: "The Problem" },
  { href: "#solution", label: "Packages" },
  { href: "#how-it-works", label: "Process" },
  { href: "#why-us", label: "Why Us" },
];

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 32 });

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: EASE_SNAP }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-night/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#hero">
          <Logo className="h-6 w-auto sm:h-7" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-barlow text-[13px] font-semibold uppercase tracking-[0.2em] text-silver transition-colors duration-100 [transition-timing-function:var(--ease-snap)] hover:text-offwhite"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <CTAButton
          label="Book a Free Call"
          className="hidden sm:inline-flex !px-5 !py-2.5 !text-[13px]"
        />
        <CTAButton label="Book a Call" className="sm:hidden !px-4 !py-2 !text-[12px]" />
      </div>

      {/* scroll-progress speedline */}
      <motion.div
        style={{ scaleX }}
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-red via-red to-gold"
        aria-hidden="true"
      />
    </motion.header>
  );
}
