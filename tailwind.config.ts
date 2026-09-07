import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta clinical / fashion / raw
        ink: "#0A0A0A", // negro casi puro
        bone: "#EDEAE3", // blanco roto
        paper: "#F4F2EC", // papel clínico claro
        ash: "#9A968E", // gris clínico
        smoke: "#1A1A1A", // negro suave para bloques
        blood: "#8E0E1E", // rojo sangre / oscuro (acento)
        "blood-bright": "#B71324",
      },
      fontFamily: {
        // Display editorial de altísimo impacto
        display: ['"Anton"', "Impact", "sans-serif"],
        // Sans técnica limpia
        sans: ['"Archivo"', "system-ui", "sans-serif"],
        narrow: ['"Archivo Narrow"', '"Archivo"', "sans-serif"],
        // Monoespaciada para metadatos / etiquetas
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
          "94%": { opacity: "0.4" },
          "96%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        marquee: "marquee 32s linear infinite",
        flicker: "flicker 6s linear infinite",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
