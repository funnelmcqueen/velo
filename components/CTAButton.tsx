"use client";

import { motion } from "framer-motion";
import BoltIcon from "./BoltIcon";
import { EASE_SNAP } from "./motion";

export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/your-org/free-call";

type CTAButtonProps = {
  label?: string;
  variant?: "primary" | "outline";
  className?: string;
};

export default function CTAButton({
  label = "Book a Free Call",
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const base =
    "btn-sharp btn-shine inline-flex items-center gap-2 px-7 py-3.5 font-grotesk font-bold text-[15px] uppercase tracking-wide transition-colors duration-100 [transition-timing-function:var(--ease-snap)]";

  const styles =
    variant === "primary"
      ? "bg-red text-offwhite shadow-[0_0_24px_rgba(225,6,0,0.3)] hover:bg-[#ff1a10] hover:shadow-[0_0_36px_rgba(225,6,0,0.5)]"
      : "border-2 border-gold text-gold hover:bg-gold hover:text-charcoal";

  return (
    <motion.a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.94 }}
      transition={{ duration: 0.09, ease: EASE_SNAP }}
      className={`${base} ${styles} ${className}`}
    >
      <BoltIcon className="h-4 w-4" />
      {label}
    </motion.a>
  );
}
