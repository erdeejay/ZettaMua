import MediaFrame from "./MediaFrame";
import Reveal from "./Reveal";
import { about, services, microcopy } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-pink py-24 text-red sm:py-32">
      <div className="atelier">
        <span className="meta text-red">ABOUT / 01</span>

        {/* Nombre gigante + retrato integrado */}
        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <h2 className="display-lg text-white">
              {about.name[0]}
              <br />
              {about.name[1]}
              <br />
              <span className="text-red">{about.name[2]}</span>
            </h2>
            <span className="meta mt-6 block text-red">
              {about.role} · {about.base.toUpperCase()} — ES
            </span>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-4">
            <div className="aspect-[3/4]">
              <MediaFrame
                src="/portfolio/retrato.jpg"
                alt={`Retrato de ${about.name.join(" ")}`}
                code="PORTRAIT / 001"
              />
            </div>
          </Reveal>
        </div>

        {/* Texto editorial */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <span className="meta animate-flicker text-white">
              {microcopy.attitude}
            </span>
          </div>
          <div className="space-y-6 lg:col-span-9">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="max-w-3xl font-narrow text-lg leading-relaxed text-red sm:text-xl">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Servicios como lista técnica con tipografía enorme */}
        <div className="mt-24">
          <div className="rule-red mb-8" />
          <div className="mb-10 flex items-end justify-between gap-4">
            <h3 className="display-md text-white">Services</h3>
            <span className="meta text-red">CAPABILITIES / 2026</span>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-3">
            {services.map((s) => (
              <Reveal key={s.group}>
                <div>
                  <div className="flex items-baseline justify-between border-b border-red/30 pb-3">
                    <span className="font-display text-4xl uppercase tracking-tightest text-red sm:text-5xl">
                      {s.group}
                    </span>
                    <span className="meta text-red/60">
                      {String(s.items.length).padStart(2, "0")}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {s.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-center gap-3 font-narrow text-base text-red"
                      >
                        <span className="h-px w-4 bg-white" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
