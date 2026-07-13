"use client";

import { motion } from "framer-motion";

const DIM = "rgba(245,245,245,0.10)";
const RED = "#E10600";
const NO_GLOW = "0 0 0px rgba(225,6,0,0)";
const GLOW = "0 0 14px rgba(225,6,0,0.8)";

/**
 * F1 race-start light sequence: five lights come on one by one,
 * hold, then all go out — lights out and away we go.
 */
export default function StartLights() {
  return (
    <div className="flex items-center gap-2.5" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => {
        const onAt = (0.25 + i * 0.14) / 1.9;
        return (
          <motion.span
            key={i}
            className="h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3"
            initial={{ backgroundColor: DIM, boxShadow: NO_GLOW }}
            animate={{
              backgroundColor: [DIM, DIM, RED, RED, DIM],
              boxShadow: [NO_GLOW, NO_GLOW, GLOW, GLOW, NO_GLOW],
            }}
            transition={{
              duration: 1.9,
              times: [0, Math.max(onAt - 0.01, 0), onAt, 0.78, 0.86],
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
}
