import { ArrowRight } from "lucide-react";
import MediaFrame from "./MediaFrame";
import Reveal from "./Reveal";
import { editorialProjects } from "@/data/portfolio";

export default function EditorialCreative() {
  return (
    <section id="editorial" className="scroll-mt-20 bg-crimson text-white">
      {/* Banner de transición */}
      <div className="editorial-container py-16 sm:py-24">
        {/* Encuadre técnico superior */}
        <div className="hairline mb-8 bg-white/40" />
        <div className="flex items-center justify-between gap-4">
          <span className="tech-label text-pink-soft">PORTFOLIO 2026/27</span>
          <span className="tech-label hidden text-white/70 sm:inline">
            HAIR — MAKEUP — STYLING
          </span>
        </div>

        {/* Tipografía central gigante */}
        <Reveal className="py-14 text-center sm:py-20">
          <h2 className="font-display text-[11vw] font-extrabold uppercase leading-[0.85] tracking-tightest sm:text-[10vw] lg:text-[8rem]">
            <span className="block text-white">Editorial &amp;</span>
            <span className="block text-pink-soft">Creative</span>
          </h2>

          {/* CTA pill */}
          <a
            href="#editorial-gallery"
            className="group mt-10 inline-flex items-center gap-4 rounded-full border border-white/60 px-8 py-4 font-semibold uppercase tracking-[0.2em] transition-colors duration-300 hover:border-pink-soft hover:bg-white hover:text-crimson"
          >
            Ver galería
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </a>
        </Reveal>

        {/* Encuadre técnico inferior */}
        <div className="flex items-center justify-between gap-4">
          <span className="tech-label text-pink-soft">@ZETTTA_MUA</span>
          <span className="tech-label text-white/70">ZARA CABALLERO DÍAZ</span>
        </div>
        <div className="hairline mt-8 bg-white/40" />
      </div>

      {/* Galería editorial urbana — grid de 3 columnas */}
      <div id="editorial-gallery" className="editorial-container scroll-mt-20 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          {editorialProjects.map((item, i) => (
            <Reveal key={item.caption} delay={i * 0.1}>
              <figure className="group h-full">
                <div className="aspect-[4/5]">
                  <MediaFrame
                    src={item.image}
                    alt={item.caption}
                    label={item.caption}
                  />
                </div>
                <figcaption className="tech-label mt-3 text-pink-soft">
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
