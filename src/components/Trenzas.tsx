import MediaFrame from "./MediaFrame";
import Reveal from "./Reveal";
import { trenzasProjects } from "@/data/portfolio";

export default function Trenzas() {
  return (
    <section id="trenzas" className="scroll-mt-20 py-16 sm:py-24">
      <div className="editorial-container">
        <div className="mb-8 flex items-end justify-between gap-4">
          <span className="tech-label text-crimson">03 — GALERÍA DE TRABAJOS</span>
          <span className="tech-label hidden text-crimson/70 sm:inline">
            BRAIDS
          </span>
        </div>
        <div className="hairline mb-8" />

        <Reveal>
          <h2 className="section-index text-crimson">03. Trenzas</h2>
        </Reveal>

        {/* Grid fotográfico horizontal dinámico */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {trenzasProjects.map((item, i) => (
            <Reveal
              key={item.caption}
              delay={i * 0.08}
              className={i % 2 === 1 ? "lg:mt-10" : ""}
            >
              <figure className="group h-full">
                <div className="aspect-[3/4]">
                  <MediaFrame
                    src={item.image}
                    alt={item.caption}
                    label={item.caption}
                  />
                </div>
                <figcaption className="tech-label mt-3 text-crimson">
                  {item.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
