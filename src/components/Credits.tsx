import MediaFrame from "./MediaFrame";
import Reveal from "./Reveal";
import { team, testimonials } from "@/data/portfolio";

export default function Credits() {
  return (
    <section className="border-t border-bone/10 py-24 sm:py-32">
      <div className="atelier">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Equipo */}
          <div className="lg:col-span-5">
            <span className="meta text-blood-bright">STUDIO / TEAM</span>
            <h2 className="display-md mt-3 text-bone">Team</h2>
            <ul className="mt-10 space-y-6">
              {team.map((m, i) => (
                <Reveal key={m.name} delay={i * 0.06}>
                  <li className="flex items-center gap-5 border-b border-bone/10 pb-6">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full grayscale">
                      <MediaFrame src={m.image} alt={m.name} code={m.name} className="h-full" />
                    </div>
                    <div>
                      <p className="font-display text-xl uppercase tracking-tightest text-bone">
                        {m.name}
                      </p>
                      <p className="font-narrow text-sm text-ash">{m.role}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* Testimonios como notas editoriales */}
          <div className="lg:col-span-7">
            <span className="meta text-blood-bright">SELECTED WORDS</span>
            <h2 className="display-md mt-3 text-bone">Voices</h2>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.06}>
                  <figure className="flex h-full flex-col justify-between border-l border-blood-bright/60 pl-5">
                    <blockquote className="font-narrow text-base leading-relaxed text-bone/85">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="meta mt-4 text-ash">— {t.name}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
