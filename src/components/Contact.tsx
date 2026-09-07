import Reveal from "./Reveal";
import { useCursorHover } from "./Cursor";
import { contact, microcopy } from "@/data/portfolio";

function ContactLink({
  href,
  label,
  meta,
}: {
  href: string;
  label: string;
  meta: string;
}) {
  const link = useCursorHover("link");
  return (
    <a
      {...link}
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between border-b border-white/30 py-6 transition-colors duration-300 hover:border-pink"
    >
      <span className="display-md text-white transition-colors duration-300 group-hover:text-pink">
        {label}
      </span>
      <span className="flex items-center gap-4">
        <span className="meta hidden text-pink sm:block">{meta}</span>
        <span className="font-mono text-2xl text-white transition-transform duration-300 group-hover:translate-x-2">
          →
        </span>
      </span>
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-red py-24 text-white sm:py-32">
      <div className="atelier">
        <span className="meta text-pink">CONTACT / →</span>

        <Reveal>
          <h2 className="display-lg mt-6 text-white">
            Let&apos;s make
            <br />
            something
            <br />
            <span className="text-pink">weird.</span>
          </h2>
        </Reveal>

        <div className="mt-16 max-w-4xl">
          <ContactLink href={contact.instagram} label="Instagram" meta={contact.instagramHandle} />
          <ContactLink href={`mailto:${contact.email}`} label="Email" meta={contact.email} />
          <ContactLink href={contact.whatsapp} label="Bookings" meta="WHATSAPP" />
        </div>

        <p className="meta mt-12 animate-flicker text-pink">{microcopy.tagline}</p>
      </div>
    </section>
  );
}
