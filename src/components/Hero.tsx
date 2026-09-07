import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { microcopy } from "@/data/portfolio";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const onMove = (e: React.MouseEvent) => {
    const nx = (e.clientX / window.innerWidth - 0.5) * 2;
    const ny = (e.clientY / window.innerHeight - 0.5) * 2;
    setTilt({ x: nx * 12, y: ny * 6 });
  };

  return (
    <section
      ref={ref}
      id="top"
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-pink pb-8 pt-[72px] text-red"
    >
      {/* Cabecera de identidad conservada */}
      <div className="atelier">
        <div className="rule-red mb-3 mt-2" />
        <div className="grid grid-cols-3 items-center">
          <span className="meta text-red">PORTFOLIO 2026/27</span>
          <span className="text-center font-display text-lg uppercase tracking-tightest text-red sm:text-xl">
            ZETTTA<span className="text-white">.</span>MUA
          </span>
          <span className="meta text-right text-red">HAIR — MAKEUP — STYLING</span>
        </div>
        <div className="rule-red mt-3" />
      </div>

      {/* Marquee */}
      <div className="pointer-events-none select-none overflow-hidden py-4">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="meta px-3 text-red" aria-hidden={i === 1}>
              EDITORIAL — CREATIVE — HAIR — MAKEUP — STYLING — BRANDS — EDITORIAL
              — CREATIVE — HAIR — MAKEUP — STYLING — BRANDS —{" "}
            </span>
          ))}
        </div>
      </div>

      {/* ZETTTA gigante con efecto offset print */}
      <div className="atelier relative flex flex-1 items-center justify-center">
        <span className="meta vertical-rl absolute left-0 top-1/2 hidden -translate-y-1/2 text-red/70 lg:block">
          FACE / 003 · TEXTURE / 014
        </span>
        <span className="meta vertical-rl absolute right-0 top-1/2 hidden -translate-y-1/2 rotate-180 text-red/70 lg:block">
          ARCHIVE / 2026
        </span>

        <motion.h1 style={{ y, scale, opacity }} className="relative w-full text-center">
          <motion.span
            animate={{ x: tilt.x, y: tilt.y }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
            className="offset-print display-xl block text-white"
            data-text="ZETTTA"
          >
            ZETTTA
          </motion.span>
        </motion.h1>
      </div>

      {/* Pie del hero */}
      <div className="atelier">
        <div className="rule-red mb-4" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div className="meta text-red">
            MAKE-UP ARTIST · HAIR STYLIST
            <br />
            GRANADA — 2026
          </div>
          <div className="hidden justify-center sm:flex">
            <span className="meta animate-flicker text-white">
              {microcopy.tagline}
            </span>
          </div>
          <div className="meta text-right text-red">
            SCROLL ↓
            <br />
            001 — SELECTED WORK
          </div>
        </div>
      </div>
    </section>
  );
}
