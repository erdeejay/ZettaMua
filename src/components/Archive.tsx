import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MediaFrame from "./MediaFrame";
import { useCursorHover } from "./Cursor";
import { archive } from "@/data/portfolio";
import { cn } from "@/lib/utils";

// Color system del archivo: cada entrada tiene un color al hover.
const HOVER = [
  "hover:bg-pink hover:text-red", // rosa
  "hover:bg-red hover:text-white", // rojo
  "hover:bg-red hover:text-white", // rojo (más presencia)
];

export default function Archive() {
  const [active, setActive] = useState<number | null>(null);
  const floatRef = useRef<HTMLDivElement>(null);
  const view = useCursorHover("view");

  const onMove = (e: React.MouseEvent) => {
    if (!floatRef.current) return;
    floatRef.current.style.transform = `translate3d(${e.clientX + 24}px, ${e.clientY - 140}px, 0)`;
  };

  return (
    <section
      id="archive"
      onMouseMove={onMove}
      className="relative scroll-mt-20 bg-white py-24 text-red sm:py-32"
    >
      <div className="atelier">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="meta text-red">THE ARCHIVE</span>
            <h2 className="display-lg mt-3 text-red">Archive</h2>
          </div>
          <span className="meta text-red/60">
            ARCHIVE 2024—2026 · {archive.length} ENTRIES
          </span>
        </div>

        {/* Índice tipo lista con color system */}
        <div className="border-t border-red/20">
          {archive.map((item, i) => (
            <div
              key={item.n}
              {...view}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className={cn(
                "grid grid-cols-12 items-center gap-2 border-b border-red/20 px-2 py-4 transition-colors duration-300 sm:py-5",
                HOVER[i % 3]
              )}
            >
              <span className="col-span-2 font-mono text-xs sm:text-sm">{item.n}</span>
              <span className="col-span-5 font-narrow text-base font-medium sm:text-xl">
                {item.title}
              </span>
              <span className="col-span-3 font-mono text-[10px] uppercase tracking-widest sm:text-xs">
                {item.category}
              </span>
              <span className="col-span-2 text-right font-mono text-xs sm:text-sm">
                {item.year}
              </span>
            </div>
          ))}
        </div>

        {/* Vista compacta en móvil */}
        <div className="mt-10 grid grid-cols-3 gap-3 sm:hidden">
          {archive.slice(0, 6).map((item) => (
            <div key={`m-${item.n}`} className="aspect-square">
              <MediaFrame src={item.image} alt={item.title} code={item.n} />
            </div>
          ))}
        </div>
      </div>

      {/* Imagen flotante que sigue el cursor (desktop) */}
      <div
        ref={floatRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-30 hidden md:block"
        style={{ willChange: "transform" }}
      >
        <AnimatePresence>
          {active !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="h-64 w-52 overflow-hidden border-2 border-red"
            >
              <MediaFrame
                src={archive[active].image}
                alt={archive[active].title}
                code={archive[active].n}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
