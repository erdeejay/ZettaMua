import MediaFrame from "./MediaFrame";
import Reveal from "./Reveal";
import { testimonials } from "@/data/portfolio";

export default function Testimonials() {
  return (
    <section className="bg-crimson py-20 text-white sm:py-28">
      <div className="editorial-container">
        {/* Encabezado tipográfico gigante */}
        <Reveal className="text-center">
          <h2 className="font-display text-[13vw] font-extrabold uppercase leading-[0.85] tracking-tightest sm:text-[11vw] lg:text-[8rem]">
            <span className="block text-pink-soft">Clientes</span>
            <span className="-mt-[2vw] block text-white lg:-mt-4">felices</span>
          </h2>
        </Reveal>

        {/*
          Desktop: grid de 4 columnas.
          Móvil: carrusel horizontal con snap-scroll.
        */}
        <div className="mt-20 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 no-scrollbar sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.08}
              className="w-[82%] shrink-0 snap-center sm:w-auto"
            >
              <figure className="relative mt-12 flex h-full flex-col items-center rounded-3xl bg-pink-light px-6 pb-8 pt-16 text-center">
                {/* Avatar que sobresale del borde superior */}
                <div className="absolute -top-11 h-[88px] w-[88px] overflow-hidden rounded-full border-4 border-crimson grayscale">
                  <MediaFrame
                    src={t.image}
                    alt={`Retrato de ${t.name}`}
                    label={t.name}
                    className="h-full"
                  />
                </div>

                <blockquote className="text-sm leading-relaxed text-crimson sm:text-[15px]">
                  “{t.quote}”
                </blockquote>

                <figcaption className="mt-6 font-display text-base font-extrabold uppercase tracking-wide text-crimson">
                  {t.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
