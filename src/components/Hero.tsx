import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { microcopy } from "@/data/portfolio";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // El nombre se deforma/desplaza sutilmente al hacer scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Interacción sutil con el cursor
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const onMove = (e: React.MouseEvent) => {
    const nx = (e.clientX / window.innerWidth - 0.5) * 2; // -1..1
    const ny = (e.clientY / window.innerHeight - 0.5) * 2;
    setTilt({ x: nx * 14, y: ny * 8 });
  };

  return (
    <section
      ref={ref}
      id="top"
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pb-8 pt-[72px]"
    >
      {/* Marquee superior */}
      <div className="pointer-events-none select-none overflow-hidden py-4">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="meta px-3" aria-hidden={i === 1}>
              {microcopy.alt} — {microcopy.tagline} — {microcopy.attitude} —{" "}
              {microcopy.alt} — {microcopy.tagline} — {microcopy.attitude} —{" "}
            </span>
          ))}
        </div>
      </div>

      {/* Nombre gigante */}
      <div className="atelier relative flex flex-1 items-center justify-center">
        {/* etiquetas laterales */}
        <span className="meta vertical-rl absolute left-0 top-1/2 hidden -translate-y-1/2 text-ash lg:block">
          FACE / 003 · TEXTURE / 014
        </span>
        <span className="meta vertical-rl absolute right-0 top-1/2 hidden -translate-y-1/2 rotate-180 text-ash lg:block">
          ARCHIVE / 2026
        </span>

        <motion.h1
          style={{ y, scale, opacity }}
          className="relative w-full text-center"
        >
          <motion.span
            animate={{ x: tilt.x, y: tilt.y }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
            className="display-xl block text-bone"
          >
            ZETTTA
          </motion.span>
        </motion.h1>
      </div>

      {/* Pie del hero */}
      <div className="atelier">
        <div className="rule-blood mb-4" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div className="meta">
            MAKE-UP / HAIR / IMAGE
            <br />
            GRANADA — 2026
          </div>
          <div className="hidden justify-center sm:flex">
            <span className="meta animate-flicker text-blood-bright">
              {microcopy.tagline}
            </span>
          </div>
          <div className="meta text-right">
            SCROLL ↓
            <br />
            001 — SELECTED WORK
          </div>
        </div>
      </div>
    </section>
  );
}
