import MediaFrame from "./MediaFrame";
import Reveal from "./Reveal";
import { team } from "@/data/portfolio";

export default function Team() {
  return (
    <section className="bg-pink-light pb-20 sm:pb-28">
      <div className="editorial-container">
        <div className="hairline mb-8" />
        <Reveal>
          <h2 className="font-display text-5xl font-extrabold uppercase tracking-tightest text-crimson sm:text-6xl lg:text-7xl">
            Mi equipo
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.1}>
              <article className="flex flex-col items-center text-center">
                {/* Avatar circular en B/N */}
                <div className="aspect-square w-40 overflow-hidden rounded-full border-2 border-crimson/30 grayscale transition-all duration-500 hover:grayscale-0 sm:w-44">
                  <MediaFrame
                    src={member.image}
                    alt={`Retrato de ${member.name}`}
                    label={member.name}
                  />
                </div>
                <h3 className="mt-6 font-display text-2xl font-extrabold uppercase tracking-tightest text-crimson-deep">
                  {member.name}
                </h3>
                <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-crimson-deep/75">
                  {member.role}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
