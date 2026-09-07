import MediaFrame from "./MediaFrame";
import Reveal from "./Reveal";
import { useCursorHover } from "./Cursor";
import { hairWorks, editorialWorks, type HairItem } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function GalleryCard({
  item,
  i,
  offset,
}: {
  item: HairItem;
  i: number;
  offset?: boolean;
}) {
  const view = useCursorHover("view");
  return (
    <Reveal delay={i * 0.07} className={cn(offset && "lg:mt-16")}>
      <figure {...view} className="group">
        <div className="aspect-[3/4]">
          <MediaFrame src={item.image} alt={item.caption} code={item.code} />
        </div>
        <figcaption className="mt-4 flex items-baseline justify-between gap-3">
          <span className="meta text-blood-bright">{item.code}</span>
          <span className="meta text-ash opacity-0 transition-opacity group-hover:opacity-100">
            VIEW
          </span>
        </figcaption>
        <p className="mt-1 font-narrow text-sm text-bone/80">{item.caption}</p>
      </figure>
    </Reveal>
  );
}

export function HairGallery() {
  return (
    <section id="hair" className="scroll-mt-20 py-24 sm:py-32">
      <div className="atelier">
        <div className="rule mb-8" />
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <span className="meta text-blood-bright">HAIR / 04</span>
            <h2 className="display-lg mt-3 text-bone">Braids</h2>
          </div>
          <span className="meta hidden text-right sm:block">
            MÁS QUE UN PEINADO.
            <br />
            UNA IDENTIDAD.
          </span>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hairWorks.map((it, i) => (
            <GalleryCard key={it.code} item={it} i={i} offset={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function EditorialGallery() {
  return (
    <section id="editorial" className="scroll-mt-20 bg-smoke py-24 sm:py-32">
      <div className="atelier">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <span className="meta text-blood-bright">EDITORIAL / 09</span>
            <h2 className="display-lg mt-3 text-bone">Editorial</h2>
          </div>
          <span className="meta hidden text-right sm:block">
            CREATE.
            <br />
            DISTORT.
            <br />
            REPEAT.
          </span>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {editorialWorks.map((it, i) => (
            <GalleryCard key={it.code} item={it} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
