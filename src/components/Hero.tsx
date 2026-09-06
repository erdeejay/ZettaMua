import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[calc(100svh-3.5rem)] flex-col justify-between overflow-hidden py-8 sm:min-h-[calc(100svh-4rem)]"
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

        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[19vw] font-extrabold uppercase leading-[0.82] tracking-tightest text-white drop-shadow-[0_2px_0_rgba(216,0,50,0.25)] sm:text-[18vw] lg:text-[13rem]"
          >
            ZETTTA
          </motion.h1>
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="-mt-[4vw] block font-display text-[19vw] font-extrabold uppercase leading-[0.82] tracking-tightest text-crimson sm:-mt-[3vw] sm:text-[18vw] lg:-mt-12 lg:text-[13rem]"
          >
            MUA
          </motion.span>
        </div>
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
