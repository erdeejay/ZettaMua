import { motion } from "framer-motion";
import { heroBannerUrl } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[60svh] flex-col justify-between overflow-hidden py-8 sm:min-h-[calc(100svh-4rem)]"
    >
      {/* Fondo: banner. En móvil se ve entero (contain); desde sm cubre todo. */}
      <div className="absolute inset-0 z-0 bg-pink-light">
        <img
          src={heroBannerUrl}
          alt="ZETTTA MUA — maquillaje, peluquería y estilismo"
          className="h-full w-full object-contain sm:object-cover"
        />
        {/* Velo muy suave solo en los bordes (arriba/abajo) para los textos.
            El centro queda transparente para que el banner luzca nítido. */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/30" />
      </div>

      {/* Marquee superior sobre el banner */}
      <div className="pointer-events-none relative z-10 select-none overflow-hidden">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <span
              key={i}
              className="tech-label px-4 text-white/80"
              aria-hidden={i === 1}
            >
              HAIR — MAKEUP — STYLING — BRAIDS — EDITORIAL — CREATIVE — HAIR —
              MAKEUP — STYLING — BRAIDS — EDITORIAL — CREATIVE —
            </span>
          ))}
        </div>
      </div>

      {/* Contenido central sobre el banner */}
      <div className="editorial-container relative z-10 flex flex-1 flex-col items-center justify-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="tech-label rounded-full border border-white/30 bg-black/20 px-4 py-2 text-white backdrop-blur-sm"
        >
          MAKEUP ARTIST · HAIR STYLIST · GRANADA
        </motion.p>
      </div>

      {/* Pie del hero */}
      <div className="editorial-container relative z-10">
        <div className="mb-4 h-px w-full bg-white/40" />
        <div className="flex flex-col items-center justify-between gap-1 sm:flex-row">
          <span className="tech-label text-white">@ZETTTA_MUA</span>
          <span className="tech-label text-white/80">ZARA CABALLERO DÍAZ</span>
        </div>
      </div>
    </section>
  );
}
