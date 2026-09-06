import { Instagram, Mail, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { contact } from "@/data/portfolio";

export default function FinalCTA() {
  return (
    <footer id="contacto" className="scroll-mt-20 bg-pink-light">
      <div className="editorial-container py-24 sm:py-32">
        {/* Titular two-tone a pantalla completa */}
        <Reveal className="text-center">
          <h2 className="font-display text-[13vw] font-extrabold uppercase leading-[0.85] tracking-tightest sm:text-[10vw] lg:text-[7.5rem]">
            <span className="block text-white drop-shadow-[0_2px_0_rgba(216,0,50,0.2)]">
              Hagamos realidad
            </span>
            <span className="block text-crimson">tu próxima idea</span>
          </h2>
        </Reveal>

        {/* Enlaces de contacto tipo pill */}
        <Reveal delay={0.12}>
          <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <a
              href={contact.instagram}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-crimson px-8 py-4 font-semibold uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-crimson-deep sm:w-auto"
            >
              <Instagram size={18} />
              {contact.instagramHandle}
            </a>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-crimson px-8 py-4 font-semibold uppercase tracking-[0.15em] text-crimson transition-colors duration-300 hover:bg-crimson hover:text-white sm:w-auto"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-crimson px-8 py-4 font-semibold uppercase tracking-[0.15em] text-crimson transition-colors duration-300 hover:bg-crimson hover:text-white sm:w-auto"
            >
              <Mail size={18} />
              Correo
            </a>
          </div>
        </Reveal>
      </div>

      {/* Footer técnico delimitado con líneas rojas */}
      <div className="editorial-container pb-10">
        <div className="hairline mb-4" />
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <span className="tech-label text-crimson">
            {contact.instagramHandle}
          </span>
          <span className="tech-label text-crimson/70">
            © {new Date().getFullYear()} ZARA CABALLERO DÍAZ
          </span>
          <span className="tech-label text-crimson">{contact.domain}</span>
        </div>
        <div className="hairline mt-4" />
      </div>
    </footer>
  );
}
