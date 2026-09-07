import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems, microcopy } from "@/data/portfolio";
import { useCursorHover } from "./Cursor";
import { cn } from "@/lib/utils";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const link = useCursorHover("link");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 120);
  };

  // Barra con fondo rojo al hacer scroll (texto blanco); transparente sobre el
  // hero rosa (texto rojo). Cuando el índice está abierto se oculta la barra.
  const solid = scrolled && !open;
  const barText = solid ? "text-white" : "text-red";
  const barLine = solid ? "bg-white" : "bg-red";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          solid ? "bg-red" : "bg-transparent"
        )}
      >
        <div className="atelier">
          <div className="flex h-[72px] items-center justify-between gap-4">
            <button
              {...link}
              onClick={() => go("top")}
              className={cn(
                "font-display text-2xl uppercase leading-none tracking-tightest sm:text-3xl",
                barText
              )}
              aria-label="ZETTTA — inicio"
            >
              ZETTTA
            </button>

            <div className={cn("hidden items-center gap-6 lg:flex", barText)}>
              <span className="meta">MAKE-UP / HAIR / IMAGE</span>
              <span className={cn("meta", solid ? "text-white" : "text-red")}>
                {microcopy.tagline}
              </span>
            </div>

            <button
              {...link}
              onClick={() => setOpen((v) => !v)}
              className={cn(
                "flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest",
                barText
              )}
              aria-expanded={open}
              aria-label={open ? "Cerrar índice" : "Abrir índice"}
            >
              <span>{open ? "CLOSE" : "INDEX"}</span>
              <span className="relative flex h-4 w-6 flex-col justify-between">
                <span className={cn("h-px w-full origin-center transition-transform duration-300", barLine, open && "translate-y-[7px] rotate-45")} />
                <span className={cn("h-px w-full transition-opacity duration-300", barLine, open && "opacity-0")} />
                <span className={cn("h-px w-full origin-center transition-transform duration-300", barLine, open && "-translate-y-[7px] -rotate-45")} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Índice a pantalla completa — mundo rojo */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-red pt-[72px] text-white"
          >
            <div className="atelier flex flex-1 flex-col justify-center py-10">
              <ul className="divide-y divide-white/20 border-y border-white/20">
                {navItems.map((item, i) => (
                  <li key={item.id}>
                    <motion.button
                      {...link}
                      onClick={() => go(item.id)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                      className="group flex w-full items-center justify-between py-4 text-left sm:py-5"
                    >
                      <span className="flex items-baseline gap-4 sm:gap-8">
                        <span className="meta w-10 text-pink">{item.code}</span>
                        <span className="display-md text-white transition-colors duration-300 group-hover:text-pink">
                          {item.label}
                        </span>
                      </span>
                      <span className="meta hidden text-white/70 transition-transform duration-300 group-hover:translate-x-2 sm:block">
                        →
                      </span>
                    </motion.button>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col justify-between gap-4 sm:flex-row">
                <span className="meta text-pink">{microcopy.attitude}</span>
                <span className="meta text-white">GRANADA — 2026</span>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
