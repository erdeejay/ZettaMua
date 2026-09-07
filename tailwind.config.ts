import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // PALETA OBLIGATORIA — la identidad de ZETTTA
        pink: {
          DEFAULT: "#FCA5C6", // rosa principal (lienzo)
          soft: "#FFC4DC",
          deep: "#F87DAE",
        },
        red: {
          DEFAULT: "#D80032", // rojo/fucsia intenso (el gesto)
          bright: "#E60039",
          deep: "#B0002A",
        },
        white: "#FFFFFF",
        ink: "#160309", // negro cálido SOLO para contraste puntual
      },
      fontFamily: {
        display: ['"Anton"', "Impact", "sans-serif"],
        sans: ['"Archivo"', "system-ui", "sans-serif"],
        narrow: ['"Archivo Narrow"', '"Archivo"', "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.055em",
        micro: "0.32em",
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
        flicker: {
          "0%, 100%": { opacity: "1" },
          "92%": { opacity: "1" },
          "94%": { opacity: "0.55" },
          "96%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        marquee: "marquee 30s linear infinite",
        flicker: "flicker 6s linear infinite",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
