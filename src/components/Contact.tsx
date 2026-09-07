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
      className="group flex items-center justify-between border-b border-bone/15 py-6 transition-colors duration-300 hover:border-blood-bright"
    >
      <span className="display-md text-bone transition-colors duration-300 group-hover:text-blood-bright">
        {label}
      </span>
      <span className="flex items-center gap-4">
        <span className="meta hidden text-ash sm:block">{meta}</span>
        <span className="font-mono text-2xl text-bone transition-transform duration-300 group-hover:translate-x-2">
          →
        </span>
      </span>
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-24 sm:py-32">
      <div className="atelier">
        <span className="meta text-blood-bright">CONTACT / →</span>

        {/* Titular enorme */}
        <Reveal>
          <h2 className="display-lg mt-6 text-bone">
            Let&apos;s make
            <br />
            something
            <br />
            <span className="text-blood-bright">weird.</span>
          </h2>
        </Reveal>

        {/* Enlaces */}
        <div className="mt-16 max-w-4xl">
          <ContactLink href={contact.instagram} label="Instagram" meta={contact.instagramHandle} />
          <ContactLink href={`mailto:${contact.email}`} label="Email" meta={contact.email} />
          <ContactLink href={contact.whatsapp} label="Bookings" meta="WHATSAPP" />
        </div>

        <p className="meta mt-12 animate-flicker text-blood-bright">
          {microcopy.tagline}
        </p>
      </div>
    </section>
  );
}
