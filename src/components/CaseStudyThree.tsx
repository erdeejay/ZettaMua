import MediaFrame from "./MediaFrame";
import Reveal from "./Reveal";

export default function CaseStudyThree() {
  return (
    <section className="scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Lado izquierdo — rosa pastel */}
        <Reveal>
          <div className="flex h-full flex-col justify-center bg-pink-light px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
            <span className="tech-label text-crimson">PORTFOLIO 2026/27</span>
            <h2 className="mt-6 font-display text-6xl font-extrabold uppercase leading-[0.85] tracking-tightest text-crimson sm:text-7xl">
              Proyecto 3
            </h2>
            <h3 className="mt-6 font-display text-2xl font-extrabold uppercase tracking-tightest text-crimson-deep sm:text-3xl">
              Un sitio que brilla con luz propia
            </h3>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-crimson-deep/85 sm:text-lg">
              En este caso trabajé en la producción fotográfica para el
              relanzamiento de un sitio web. La meta era aportar imágenes
              frescas, modernas y coherentes con el rediseño digital. A través
              de fotografías de producto, retratos del equipo y composiciones
              lifestyle, conseguimos un look and feel atractivo que elevó la
              experiencia de navegación y reforzó la confianza del cliente en la
              marca.
            </p>
            <span className="tech-label mt-10 text-crimson">@ZETTTA_MUA</span>
          </div>
        </Reveal>

        {/* Lado derecho — retrato editorial B/N de alto contraste */}
        <Reveal delay={0.12}>
          <div className="min-h-[420px] bg-crimson/10 contrast-125 grayscale lg:min-h-[640px] lg:h-full">
            <MediaFrame
              src="/portfolio/case-study-3.jpg"
              alt="Retrato editorial de cuerpo entero en blanco y negro"
              label="EDITORIAL · B/N ALTO CONTRASTE"
              className="h-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
