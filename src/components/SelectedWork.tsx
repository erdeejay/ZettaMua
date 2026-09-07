import MediaFrame from "./MediaFrame";
import Reveal from "./Reveal";
import { useCursorHover } from "./Cursor";
import { works, faces, type Work } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function WorkMeta({
  w,
  align = "left",
  onDark = false,
}: {
  w: Work;
  align?: "left" | "right";
  onDark?: boolean;
}) {
  return (
    <div className={cn("flex flex-col gap-3", align === "right" && "items-end text-right")}>
      <span className={cn("meta", onDark ? "text-pink" : "text-red")}>
        {w.index} / {w.category}
      </span>
      <h3 className={cn("display-md", onDark ? "text-white" : "text-red")}>{w.title}</h3>
      <div className={cn("flex flex-wrap gap-x-5 gap-y-1", align === "right" && "justify-end")}>
        {w.role.map((r) => (
          <span key={r} className={cn("meta", onDark ? "text-white/80" : "text-red")}>
            {r}
          </span>
        ))}
      </div>
      <div className={cn("mt-2 flex flex-wrap gap-x-6 gap-y-1", align === "right" && "justify-end")}>
        <span className={cn("meta", onDark ? "text-white/80" : "text-red")}>CLIENT / {w.client}</span>
        <span className={cn("meta", onDark ? "text-white/80" : "text-red")}>YEAR / {w.year}</span>
      </div>
      {w.note && (
        <p className={cn("mt-3 max-w-sm font-narrow text-sm", onDark ? "text-white/70" : "text-red/70")}>
          {w.note}
        </p>
      )}
    </div>
  );
}

function FaceCard({ f, i }: { f: (typeof faces)[number]; i: number }) {
  const view = useCursorHover("view");
  return (
    <Reveal delay={i * 0.08}>
      <figure {...view} className="group">
        <div className="aspect-[4/5]">
          <MediaFrame src={f.image} alt={f.title} code={f.code} />
        </div>
        <figcaption className="mt-4 flex items-baseline justify-between gap-3">
          <span className="meta text-red">{f.code}</span>
          <span className="meta text-red/60 opacity-0 transition-opacity group-hover:opacity-100">
            VIEW
          </span>
        </figcaption>
        <p className="mt-1 font-narrow text-sm text-red">{f.title}</p>
        <p className="font-narrow text-xs text-red/60">{f.project}</p>
      </figure>
    </Reveal>
  );
}

function WorkImage({ w, className }: { w: Work; className?: string }) {
  const view = useCursorHover("view");
  return (
    <div {...view} className={cn("group relative", className)}>
      <div className="h-full w-full">
        <MediaFrame src={w.image} hoverSrc={w.imageHover} alt={w.title} code={`${w.index} / ${w.category}`} />
      </div>
      <span className="meta absolute left-3 top-3 z-10 bg-red px-2 py-1 text-white">
        {w.category} / {w.year}
      </span>
      <span className="meta absolute bottom-3 right-3 z-10 bg-white px-2 py-1 text-red opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        VIEW PROJECT →
      </span>
    </div>
  );
}

export default function SelectedWork() {
  return (
    <section id="work" className="relative scroll-mt-20 bg-pink py-24 text-red sm:py-32">
      <div className="atelier">
        {/* Encabezado de sección */}
        <div className="mb-16 flex items-end justify-between gap-4">
          <div>
            <span className="meta text-red">001 — SELECTED WORK</span>
            <h2 className="display-lg mt-3 text-white">Work</h2>
          </div>
          <span className="meta hidden text-right text-red sm:block">
            NOT A LOOK.
            <br />A STATEMENT.
          </span>
        </div>

        <div className="flex flex-col gap-28 sm:gap-40">
          {/* 01 — imagen izquierda, meta derecha */}
          <Reveal>
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <WorkImage w={works[0]} className="aspect-[4/5] lg:col-span-7" />
              <div className="lg:col-span-5 lg:pl-6">
                <WorkMeta w={works[0]} />
              </div>
            </div>
          </Reveal>

          {/* 02 — meta izquierda, imagen desplazada derecha */}
          <Reveal>
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="order-2 lg:order-1 lg:col-span-4">
                <WorkMeta w={works[1]} />
              </div>
              <WorkImage
                w={works[1]}
                className="order-1 aspect-[16/11] lg:order-2 lg:col-span-8 lg:translate-y-8"
              />
            </div>
          </Reveal>

          {/* 03 — imagen vertical centrada, meta en caja roja superpuesta */}
          <Reveal>
            <div className="relative mx-auto max-w-4xl">
              <WorkImage w={works[2]} className="mx-auto aspect-[3/4] w-full sm:w-[80%]" />
              <div className="mt-8 flex flex-col items-center text-center sm:absolute sm:-bottom-6 sm:left-0 sm:mt-0 sm:items-start sm:text-left">
                <div className="bg-red px-5 py-4">
                  <WorkMeta w={works[2]} onDark />
                </div>
              </div>
              <span className="meta vertical-rl absolute -right-2 top-0 hidden text-red lg:block sm:-right-8">
                LOOK / 027 · TEXTURE / 014
              </span>
            </div>
          </Reveal>
        </div>

        {/* FACE — subserie */}
        <div id="face" className="mt-32 scroll-mt-20 sm:mt-40">
          <div className="rule-red mb-8" />
          <div className="mb-10 flex items-end justify-between gap-4">
            <h3 className="display-md text-white">Face</h3>
            <span className="meta text-red">013—015 / FACE</span>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {faces.map((f, i) => (
              <FaceCard key={f.index} f={f} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
