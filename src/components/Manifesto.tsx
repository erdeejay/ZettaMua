import Reveal from "./Reveal";

export default function Manifesto() {
  return (
    <section className="bg-pink-light py-20 sm:py-28">
      <div className="editorial-container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="section-index text-crimson">Introducción</h2>
          <p className="mt-10 text-lg leading-relaxed text-crimson-deep/90 text-balance sm:text-xl lg:text-2xl">
            Creo en el poder del estilismo y la imagen como un puente directo
            entre el artista y su audiencia. Cada look es una oportunidad para
            transmitir emociones, valores e identidad. Mi trabajo se centra en
            capturar la esencia de cada proyecto y transformarla en un lenguaje
            visual que impacte y perdure.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
