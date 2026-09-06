import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Rosa chicle claro pastel (fondo principal)
        pink: {
          soft: "#FFAFCC",
          light: "#FCA5C6",
          pale: "#FFD6E7",
        },
        // Rojo carmesí saturado (acento / primario)
        crimson: {
          DEFAULT: "#D80032",
          bright: "#E60039",
          deep: "#B00028",
        },
      },
      fontFamily: {
        display: ['"Syne"', "system-ui", "sans-serif"],
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.05em",
        micro: "0.28em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        marquee: "marquee 26s linear infinite",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
