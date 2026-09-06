import MediaFrame from "./MediaFrame";
import Reveal from "./Reveal";
import { hairMiniCards, hairProjects } from "@/data/portfolio";

export default function HairStyling() {
  return (
    <section id="hair-styling" className="scroll-mt-20 bg-pink-light py-16 sm:py-24">
      <div className="editorial-container">
        <div className="mb-8 flex items-end justify-between gap-4">
          <span className="tech-label text-crimson">02 — GALERÍA EDITORIAL</span>
          <span className="tech-label hidden text-crimson/70 sm:inline">
            HAIR STYLING
          </span>
        </div>
        <div className="hairline mb-8" />

        {/* Título gigante */}
        <Reveal>
          <h2 className="section-index text-crimson">02. Hair Styling</h2>
        </Reveal>

        {/* Subtítulo destacado + descripción */}
        <Reveal delay={0.1}>
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
            <h3 className="font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-tightest text-crimson-deep sm:text-4xl lg:col-span-7 lg:text-5xl">
              Más que un <span className="text-white">peinado</span>, es una{" "}
              <span className="text-white">identidad</span>
            </h3>
            <p className="text-base leading-relaxed text-crimson-deep/90 lg:col-span-5 lg:text-lg">
              Es lo que quisimos plasmar. Kristina y yo con este recogido de
              trenzas y su pelo completamente liso, que es una de las cosas más
              características de la cantante granadina.
            </p>
          </div>
        </Reveal>

        {/* Grid de galería asimétrica */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-6 sm:gap-5">
          {/* Item 1 — vertical grande */}
          <Reveal className="sm:col-span-2 sm:row-span-2">
            <figure className="group h-full">
              <div className="aspect-[3/4] h-full">
                <MediaFrame
                  src={hairProjects[0].image}
                  alt={hairProjects[0].caption}
                  label={hairProjects[0].caption}
                />
              </div>
              <figcaption className="tech-label mt-3 text-crimson">
                {hairProjects[0].caption}
              </figcaption>
            </figure>
          </Reveal>

          {/* Item 2 — apaisado */}
          <Reveal delay={0.08} className="sm:col-span-4">
            <figure className="group h-full">
              <div className="aspect-[16/10]">
                <MediaFrame
                  src={hairProjects[1].image}
                  alt={hairProjects[1].caption}
                  label={hairProjects[1].caption}
                />
              </div>
              <figcaption className="tech-label mt-3 text-crimson">
                {hairProjects[1].caption}
              </figcaption>
            </figure>
          </Reveal>

          {/* Item 3 — vertical urbana */}
          <Reveal delay={0.16} className="sm:col-span-4">
            <figure className="group h-full">
              <div className="aspect-[16/9]">
                <MediaFrame
                  src={hairProjects[2].image}
                  alt={hairProjects[2].caption}
                  label={hairProjects[2].caption}
                />
              </div>
              <figcaption className="tech-label mt-3 text-crimson">
                {hairProjects[2].caption}
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Mini-cards inferiores */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          {hairMiniCards.map((card, i) => (
            <Reveal key={card.project} delay={i * 0.08}>
              <figure className="group flex h-full flex-col bg-white/50 p-3">
                <div className="aspect-square">
                  <MediaFrame
                    src={card.image}
                    alt={`${card.title} — ${card.project}`}
                    label={card.title}
                  />
                </div>
                <figcaption className="mt-3">
                  <p className="font-display text-lg font-extrabold uppercase tracking-tightest text-crimson">
                    {card.title}
                  </p>
                  <p className="mt-1 text-sm leading-snug text-crimson-deep/80">
                    {card.project}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
