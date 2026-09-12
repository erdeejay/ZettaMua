import { useState } from "react";
import MediaFrame from "./MediaFrame";
import {
  hairProjects,
  trenzasProjects,
  editorialProjects,
  hairMiniCards,
} from "@/data/portfolio";
import { cn } from "@/lib/utils";

// Reúne todo el material real del portfolio con su categoría.
type Photo = { image: string; caption: string; category: "Hair" | "Trenzas" | "Editorial" };

const photos: Photo[] = [
  ...hairProjects.map((p) => ({ image: p.image, caption: p.caption, category: "Hair" as const })),
  ...hairMiniCards.map((c) => ({ image: c.image, caption: c.project, category: "Hair" as const })),
  ...trenzasProjects.map((p) => ({ image: p.image, caption: p.caption, category: "Trenzas" as const })),
  ...editorialProjects.map((p) => ({ image: p.image, caption: p.caption, category: "Editorial" as const })),
];

const categories = ["Todo", "Hair", "Trenzas", "Editorial"] as const;

export default function Galeria() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("Todo");

  const items = filter === "Todo" ? photos : photos.filter((p) => p.category === filter);

  return (
    <section id="galeria" className="scroll-mt-20 bg-pink-light py-16 sm:py-24">
      <div className="editorial-container">
        {/* Introducción */}
        <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center">
          <span className="tech-label text-crimson">Galería</span>
          <h2
            className="mt-3 font-display font-extrabold uppercase leading-[0.9] tracking-tightest text-crimson"
            style={{ fontSize: "clamp(2rem, 8vw, 5rem)" }}
          >
            Introducción
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-crimson-deep/90 text-balance sm:text-xl lg:text-2xl">
            Creo en el poder del estilismo y la imagen como un puente directo
            entre el artista y su audiencia. Cada look es una oportunidad para
            transmitir emociones, valores e identidad. Mi trabajo se centra en
            capturar la esencia de cada proyecto y transformarla en un lenguaje
            visual que impacte y perdure.
          </p>
        </div>
        <div className="hairline mb-8" />

        {/* Filtros por categoría */}
        <div id="fotos" className="mb-10 flex scroll-mt-24 flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-semibold uppercase tracking-wider transition-colors",
                filter === c
                  ? "border-crimson bg-crimson text-white"
                  : "border-crimson/40 text-crimson hover:bg-crimson/10"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid de fotos */}
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
      </div>
    </section>
  );
}
