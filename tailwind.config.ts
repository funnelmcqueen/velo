import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#0A0A0A",
        carbon: "#131313",
        charcoal: "#1A1A1A",
        red: "#E10600",
        gold: "#F4B400",
        silver: "#B8BCC2",
        offwhite: "#F5F5F5",
      },
      fontFamily: {
        grotesk: ["var(--font-space-grotesk)", "sans-serif"],
        barlow: ["var(--font-barlow-condensed)", "sans-serif"],
        clash: ["'Clash Display'", "var(--font-space-grotesk)", "sans-serif"],
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
      animation: {
        flicker: "flicker 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
