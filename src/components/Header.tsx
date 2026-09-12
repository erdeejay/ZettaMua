import { useEffect, useState } from "react";
import { Heart, X } from "lucide-react";
import { navItems } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        <div className="grid h-14 grid-cols-3 items-center gap-4 sm:h-16">
          {/* Izquierda: botón índice con forma de corazón */}
          <div className="flex items-center gap-3 justify-self-start">
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full bg-crimson text-white transition-transform duration-300 hover:scale-105 active:scale-95"
              aria-label={open ? "Cerrar índice" : "Abrir índice"}
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Heart size={20} className="fill-white" />}
            </button>
            <span className="tech-label hidden text-crimson sm:inline">
              {open ? "Cerrar" : "Índice"}
            </span>
          </div>

          {/* Centro: marca (centrada de verdad) */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="justify-self-center font-display text-lg font-extrabold uppercase tracking-tightest text-crimson sm:text-xl"
            aria-label="ZETTTA MUA — Ir al inicio"
          >
            ZETTTA<span className="text-white">·</span>MUA
          </button>

          {/* Derecha: metadatos (oculto en móvil para no apretar) */}
          <span className="tech-label hidden justify-self-end text-right text-crimson sm:inline">
            PORTFOLIO 2026/27
          </span>
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
