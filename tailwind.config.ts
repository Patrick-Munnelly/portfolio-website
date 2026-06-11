import type { Config } from "tailwindcss";

/**
 * Design tokens from Lugh's design system (Spec.md §3), stripped back.
 * Loaded by Tailwind v4 via the `@config` directive in app/globals.css.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.ts",
  ],
  theme: {
    // Hard cap: 2px is the maximum radius for structural elements.
    borderRadius: {
      none: "0",
      sm: "1px",
      DEFAULT: "2px",
    },
    extend: {
      colors: {
        forest: "#1a3a2a",
        cream: "#f5f0e8",
        "slate-lugh": "#4a7a9b",
        ink: "#0d1f17",
        gold: "#c9a96e",
        rust: "#8b3a2a",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "Courier New", "monospace"],
      },
      transitionDuration: {
        fast: "100ms",
        base: "150ms",
        slow: "300ms",
      },
    },
  },
};

export default config;
