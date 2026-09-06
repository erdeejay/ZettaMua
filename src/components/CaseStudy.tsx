import MediaFrame from "./MediaFrame";
import Reveal from "./Reveal";

export default function CaseStudy() {
  return (
    <section className="scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Lado izquierdo — rosa pastel */}
        <Reveal>
          <div className="flex h-full flex-col justify-center bg-pink-light px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
            <span className="tech-label text-crimson">CASO DE ESTUDIO</span>
            <h2 className="mt-6 font-display text-6xl font-extrabold uppercase leading-[0.85] tracking-tightest text-crimson sm:text-7xl">
              Proyecto 2
            </h2>
            <h3 className="mt-6 font-display text-2xl font-extrabold uppercase tracking-tightest text-crimson-deep sm:text-3xl">
              Imágenes que venden emociones
            </h3>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-crimson-deep/85 sm:text-lg">
              Para esta campaña, el objetivo fue crear un concepto visual fuerte
              que conectara de inmediato con el público objetivo. Diseñé una
              propuesta estética con peinados vibrantes y una narrativa que
              destacara los beneficios del proyecto sin perder el aspecto
              emocional.
            </p>
          </div>
        </Reveal>

        {/* Lado derecho — fotografía vertical de set */}
        <Reveal delay={0.12}>
          <div className="min-h-[420px] bg-crimson/10 lg:min-h-[640px] lg:h-full">
            <MediaFrame
              src="/portfolio/case-study.jpg"
              alt="Set de rodaje: focos, trípodes y claqueta"
              label="SET DE RODAJE · PRODUCCIÓN"
              className="h-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
