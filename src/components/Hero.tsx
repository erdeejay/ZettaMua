import { useState } from "react";
import { motion } from "framer-motion";
import { logoUrl } from "@/data/portfolio";

export default function Hero() {
  const [logoError, setLogoError] = useState(false);

  return (
    <section
      id="inicio"
      className="relative flex min-h-[calc(100svh-3.5rem)] flex-col justify-between overflow-hidden bg-pink-pale py-8 sm:min-h-[calc(100svh-4rem)]"
    >
      {/* Marquee superior sutil */}
      <div className="pointer-events-none select-none overflow-hidden">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <span
              key={i}
              className="tech-label px-4 text-crimson/70"
              aria-hidden={i === 1}
            >
              HAIR — MAKEUP — STYLING — BRAIDS — EDITORIAL — CREATIVE — HAIR —
              MAKEUP — STYLING — BRAIDS — EDITORIAL — CREATIVE —
            </span>
          ))}
        </div>
      </div>

      {/* Composición tipográfica central */}
      <div className="editorial-container flex flex-1 flex-col items-center justify-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="tech-label mb-6 text-crimson"
        >
          MAKEUP ARTIST · HAIR STYLIST · GRANADA
        </motion.p>

        {logoError ? (
          // Fallback tipográfico si el logo no carga
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: "clamp(3.5rem, 17vw, 12rem)" }}
              className="block font-display font-extrabold uppercase leading-[0.82] tracking-tightest text-white drop-shadow-[0_2px_0_rgba(216,0,50,0.25)]"
            >
              ZETTTA
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: "clamp(3.5rem, 17vw, 12rem)" }}
              className="-mt-[3vw] block font-display font-extrabold uppercase leading-[0.82] tracking-tightest text-crimson lg:-mt-10"
            >
              MUA
            </motion.span>
          </div>
        ) : (
          <motion.img
            src={logoUrl}
            alt="ZETTTA MUA"
            onError={() => setLogoError(true)}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 h-auto w-full max-w-[820px] object-contain px-4"
          />
        )}
      </div>

      {/* Pie del hero */}
      <div className="editorial-container">
        <div className="hairline mb-4" />
        <div className="flex flex-col items-center justify-between gap-1 sm:flex-row">
          <span className="tech-label text-crimson">@ZETTTA_MUA</span>
          <span className="tech-label text-crimson-deep">
            ZARA CABALLERO DÍAZ
          </span>
        </div>
      </div>
    </section>
  );
}
