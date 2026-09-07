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
      className="meta-bone transition-colors hover:text-blood-bright"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-bone/10 py-10">
      <div className="atelier">
        {/* Marca gigante de cierre */}
        <div className="display-lg mb-10 text-bone/10">ZETTTA</div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-1">
            <p className="meta-bone">MAKE-UP / HAIR / IMAGE</p>
            <p className="meta">{contact.location} · {contact.year}</p>
          </div>

          <div className="flex gap-6">
            <FooterLink href={contact.instagram}>INSTAGRAM</FooterLink>
            <FooterLink href={`mailto:${contact.email}`}>CONTACT</FooterLink>
          </div>

          <p className="meta">© {contact.year} ZETTTA MUA — {contact.domain}</p>
        </div>
      </div>
    </footer>
  );
}
