import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, logoUrl } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-y border-crimson/70 backdrop-blur-md transition-colors duration-300",
        scrolled ? "bg-pink-light/90" : "bg-pink-light/60"
      )}
    >
      <div className="editorial-container">
        <div className="flex h-14 items-center justify-between gap-4 sm:h-16">
          {/* Izquierda: portfolio */}
          <span className="tech-label text-crimson">PORTFOLIO 2026/27</span>

          {/* Centro: logo de la marca (con fallback a texto) */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center justify-center"
            aria-label="ZETTTA MUA — Ir al inicio"
          >
            {logoError ? (
              <span className="font-display text-lg font-extrabold uppercase tracking-tightest text-crimson sm:text-xl">
                ZETTTA<span className="text-white">·</span>MUA
              </span>
            ) : (
              <img
                src={logoUrl}
                alt="ZETTTA MUA"
                onError={() => setLogoError(true)}
                className="h-9 w-auto object-contain sm:h-11"
              />
            )}
          </button>

          {/* Derecha: disciplina (desktop) + toggle menú */}
          <div className="flex items-center gap-4">
            <span className="tech-label hidden text-crimson md:inline">
              HAIR — MAKEUP — STYLING
            </span>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-full border border-crimson/70 text-crimson transition-colors hover:bg-crimson hover:text-white"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable de navegación por anclas */}
      <nav
        className={cn(
          "overflow-hidden border-t border-crimson/40 bg-pink-light/95 backdrop-blur-md transition-[max-height,opacity] duration-500 ease-out",
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="editorial-container flex flex-col divide-y divide-crimson/20 py-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="group flex items-center gap-4 py-3 transition-colors hover:text-crimson-bright"
              >
                <span className="font-display text-sm font-bold text-crimson">
                  {item.index}
                </span>
                <span className="font-display text-2xl font-extrabold uppercase tracking-tightest text-crimson-deep transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
