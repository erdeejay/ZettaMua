import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, X } from "lucide-react";
import MediaFrame from "./MediaFrame";
import {
  hairProjects,
  trenzasProjects,
  editorialProjects,
  hairMiniCards,
} from "@/data/portfolio";
import { cn } from "@/lib/utils";

// Reúne todo el material real del portfolio con su categoría.
type Category = "Hair" | "Trenzas" | "Editorial";
type Photo = { image: string; caption: string; category: Category };

const photos: Photo[] = [
  ...hairProjects.map((p) => ({ image: p.image, caption: p.caption, category: "Hair" as const })),
  ...hairMiniCards.map((c) => ({ image: c.image, caption: c.project, category: "Hair" as const })),
  ...trenzasProjects.map((p) => ({ image: p.image, caption: p.caption, category: "Trenzas" as const })),
  ...editorialProjects.map((p) => ({ image: p.image, caption: p.caption, category: "Editorial" as const })),
];

// Categorías del índice, con un conteo de cuántas fotos hay en cada una.
const index: { label: string; value: Category | "Todo" }[] = [
  { label: "Todo", value: "Todo" },
  { label: "Hair Styling", value: "Hair" },
  { label: "Trenzas", value: "Trenzas" },
  { label: "Editorial", value: "Editorial" },
];

export default function Galeria() {
  // Índice cerrado por defecto y sin categoría elegida: no se muestran fotos.
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Category | "Todo" | null>(null);

  const items =
    selected === null
      ? []
      : selected === "Todo"
      ? photos
      : photos.filter((p) => p.category === selected);

  const choose = (value: Category | "Todo") => {
    setSelected(value);
    setOpen(false);
  };

  const countFor = (value: Category | "Todo") =>
    value === "Todo" ? photos.length : photos.filter((p) => p.category === value).length;

  return (
    <section id="galeria" className="scroll-mt-20 bg-pink-light py-16 sm:py-24">
      <div className="editorial-container">
        {/* Encabezado */}
        <div className="text-center">
          <span className="tech-label text-crimson">Galería</span>
          <h2 className="mt-3 font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-tightest text-crimson sm:text-6xl lg:text-7xl">
            Mis <span className="text-white">trabajos</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-crimson-deep/80">
            Pulsa el corazón para abrir el índice y elige qué quieres ver.
          </p>
        </div>

        {/* Botón corazón que abre el índice */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Cerrar índice" : "Abrir índice de la galería"}
            className="group relative grid h-20 w-20 place-items-center rounded-full bg-crimson text-white shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            {open ? (
              <X size={30} />
            ) : (
              <Heart
                size={34}
                className="fill-white transition-transform duration-500 group-hover:scale-110"
              />
            )}
            {/* Pulso sutil alrededor del corazón */}
            {!open && (
              <span className="absolute inset-0 animate-ping rounded-full bg-crimson/40" />
            )}
          </button>
        </div>

        {/* Índice desplegable de categorías */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <ul className="mx-auto mt-8 max-w-xl divide-y divide-crimson/20 border-y border-crimson/20">
                {index.map((cat, i) => (
                  <li key={cat.value}>
                    <motion.button
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 * i }}
                      onClick={() => choose(cat.value)}
                      className="group flex w-full items-center justify-between py-4 text-left"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="font-display text-sm font-bold text-crimson">
                          0{i + 1}
                        </span>
                        <span className="font-display text-2xl font-extrabold uppercase tracking-tightest text-crimson-deep transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                          {cat.label}
                        </span>
                      </span>
                      <span className="tech-label text-crimson/60">
                        {countFor(cat.value)} fotos
                      </span>
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fotos de la categoría elegida */}
        <AnimatePresence mode="wait">
          {selected !== null && (
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="mt-12"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <h3 className="font-display text-2xl font-extrabold uppercase tracking-tightest text-crimson sm:text-3xl">
                  {index.find((c) => c.value === selected)?.label}
                </h3>
                <button
                  onClick={() => setSelected(null)}
                  className="tech-label flex items-center gap-1 text-crimson transition-colors hover:text-crimson-deep"
                >
                  <X size={14} /> Cerrar
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {items.map((p, i) => (
                  <figure key={`${p.image}-${i}`} className="group">
                    <div className="aspect-[3/4]">
                      <MediaFrame src={p.image} alt={p.caption} label={p.caption} />
                    </div>
                    <figcaption className="mt-2 flex items-center justify-between gap-2">
                      <span className="text-xs text-crimson-deep/75">{p.caption}</span>
                      <span className="tech-label shrink-0 text-crimson/60">{p.category}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
