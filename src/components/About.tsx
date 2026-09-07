import MediaFrame from "./MediaFrame";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-20 py-16 sm:py-24">
      <div className="editorial-container">
        {/* Cabecera de índice */}
        <div className="mb-8 flex items-end justify-between gap-4">
          <span className="tech-label text-crimson">01 — SOBRE MÍ</span>
          <span className="tech-label hidden text-crimson/70 sm:inline">
            CHIPIONA · GRANADA
          </span>
        </div>
        <div className="hairline mb-10" />

        <div className="grid grid-cols-1 overflow-hidden rounded-sm lg:grid-cols-12">
          {/* Bloque izquierdo carmesí (asimétrico, más ancho) */}
          <Reveal className="lg:col-span-7">
            <div className="flex h-full flex-col justify-between bg-crimson p-8 text-white sm:p-12 lg:p-14">
              <h2 className="font-display text-6xl font-extrabold uppercase leading-[0.85] tracking-tightest sm:text-7xl lg:text-8xl">
                Sobre <span className="text-pink-soft">mí</span>
              </h2>

              <div className="mt-10 max-w-xl space-y-6 text-base leading-relaxed text-white/90 sm:text-lg">
                <p>
                  Soy <strong className="font-semibold">Zara Caballero Díaz</strong>,
                  maquilladora y peluquera, especializada en trenzas y recogidos.
                </p>
                <p>
                  Natural de Chipiona (Cádiz) y actualmente ubicada en Granada,
                  ciudad donde he desarrollado y potenciado mi creatividad y mi
                  forma de entender la imagen.
                </p>
                <p>
                  Formada en Asesoría de la Imagen Personal; desde clientes de a
                  pie hasta artistas o proyectos audiovisuales.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-2">
                <span className="tech-label text-pink-soft">HAIR</span>
                <span className="tech-label text-pink-soft">MAKEUP</span>
                <span className="tech-label text-pink-soft">STYLING</span>
                <span className="tech-label text-pink-soft">BRAIDS</span>
              </div>
            </div>
          </Reveal>

          {/* Bloque derecho rosa claro con retrato */}
          <Reveal delay={0.12} className="lg:col-span-5">
            <div className="flex h-full min-h-[380px] flex-col bg-pink-soft p-4 sm:min-h-[520px] lg:min-h-full">
              <MediaFrame
                src="/portfolio/retrato.jpg"
                alt="Retrato profesional de Zara Caballero Díaz"
                label="RETRATO · ZARA CABALLERO"
                className="flex-1"
              />
              <span className="tech-label mt-3 text-crimson">
                ZARA CABALLERO DÍAZ · @ZETTTA_MUA
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
