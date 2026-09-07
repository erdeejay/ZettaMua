import MediaFrame from "./MediaFrame";
import Reveal from "./Reveal";
import { useCursorHover } from "./Cursor";
import { hairWorks, editorialWorks, type HairItem } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function GalleryCard({
  item,
  i,
  offset,
  accent,
}: {
  item: HairItem;
  i: number;
  offset?: boolean;
  accent: string; // color de los códigos/acentos
}) {
  const view = useCursorHover("view");
  return (
    <Reveal delay={i * 0.07} className={cn(offset && "lg:mt-16")}>
      <figure {...view} className="group">
        <div className="aspect-[3/4]">
          <MediaFrame src={item.image} alt={item.caption} code={item.code} />
        </div>
        <figcaption className="mt-4 flex items-baseline justify-between gap-3">
          <span className={cn("meta", accent)}>{item.code}</span>
          <span className={cn("meta opacity-0 transition-opacity group-hover:opacity-100", accent)}>
            VIEW
          </span>
        </figcaption>
        <p className="mt-1 font-narrow text-sm">{item.caption}</p>
      </figure>
    </Reveal>
  );
}

/** HAIR — mundo ROJO */
export function HairGallery() {
  return (
    <section id="hair" className="scroll-mt-20 bg-red py-24 text-white sm:py-32">
      <div className="atelier">
        <div className="rule mb-8" />
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <span className="meta text-pink">HAIR / 04</span>
            <h2 className="display-lg mt-3 text-white">Braids</h2>
          </div>
          <span className="meta hidden text-right text-pink sm:block">
            MÁS QUE UN PEINADO.
            <br />
            UNA IDENTIDAD.
          </span>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hairWorks.map((it, i) => (
            <GalleryCard key={it.code} item={it} i={i} offset={i % 2 === 1} accent="text-pink" />
          ))}
        </div>
      </div>
    </section>
  );
}

/** EDITORIAL — mundo BLANCO */
export function EditorialGallery() {
  return (
    <section id="editorial" className="scroll-mt-20 bg-white py-24 text-red sm:py-32">
      <div className="atelier">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <span className="meta text-red">EDITORIAL / 09</span>
            <h2 className="display-lg mt-3 text-red">Editorial</h2>
          </div>
          <span className="meta hidden text-right text-red sm:block">
            CREATE.
            <br />
            DISTORT.
            <br />
            REPEAT.
          </span>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {editorialWorks.map((it, i) => (
            <GalleryCard key={it.code} item={it} i={i} accent="text-red" />
          ))}
        </div>
      </div>
    </section>
  );
}
