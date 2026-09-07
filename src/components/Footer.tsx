import { useCursorHover } from "./Cursor";
import { contact } from "@/data/portfolio";

function FooterLink({ href, children }: { href: string; children: string }) {
  const link = useCursorHover("link");
  return (
    <a
      {...link}
      href={href}
      target="_blank"
      rel="noreferrer"
      className="meta text-red transition-colors hover:text-white"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-pink py-10 text-red">
      <div className="atelier">
        {/* Marca gigante de cierre con offset print */}
        <div className="offset-print display-lg mb-10 text-white" data-text="ZETTTA">
          ZETTTA
        </div>

        <div className="rule-red mb-6" />

        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-1">
            <p className="meta text-red">MAKE-UP / HAIR / IMAGE</p>
            <p className="meta text-red">{contact.location} · {contact.year}</p>
          </div>

          <div className="flex gap-6">
            <FooterLink href={contact.instagram}>INSTAGRAM</FooterLink>
            <FooterLink href={`mailto:${contact.email}`}>CONTACT</FooterLink>
          </div>

          <p className="meta text-red">© {contact.year} ZETTTA MUA — {contact.domain}</p>
        </div>
      </div>
    </footer>
  );
}
