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

  // Bloquear scroll de fondo cuando el índice está abierto
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
    // Pequeño delay para que cierre el overlay antes de saltar
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 120);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          scrolled || open ? "bg-ink/85 backdrop-blur-md" : "bg-transparent"
        )}
      >
        <div className="atelier">
          <div className="flex h-[72px] items-center justify-between gap-4">
            {/* Marca */}
            <button
              {...link}
              onClick={() => go("top")}
              className="font-display text-2xl uppercase leading-none tracking-tightest text-bone sm:text-3xl"
              aria-label="ZETTTA — inicio"
            >
              ZETTTA
            </button>

            {/* Metadatos centro (desktop) */}
            <div className="hidden items-center gap-6 lg:flex">
              <span className="meta">MAKE-UP / HAIR / IMAGE</span>
              <span className="meta text-blood-bright">
                {microcopy.tagline}
              </span>
            </div>

            {/* Toggle índice */}
            <button
              {...link}
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-bone"
              aria-expanded={open}
              aria-label={open ? "Cerrar índice" : "Abrir índice"}
            >
              <span>{open ? "CLOSE" : "INDEX"}</span>
              <span className="relative flex h-4 w-6 flex-col justify-between">
                <span
                  className={cn(
                    "h-px w-full origin-center bg-bone transition-transform duration-300",
                    open && "translate-y-[7px] rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "h-px w-full bg-bone transition-opacity duration-300",
                    open && "opacity-0"
                  )}
                />
                <span
                  className={cn(
                    "h-px w-full origin-center bg-bone transition-transform duration-300",
                    open && "-translate-y-[7px] -rotate-45"
                  )}
                />
              </span>
            </button>
          </div>
        </div>
        <div className={cn("rule transition-opacity", scrolled || open ? "opacity-100" : "opacity-0")} />
      </header>

      {/* Índice a pantalla completa */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-ink pt-[72px]"
          >
            <div className="atelier flex flex-1 flex-col justify-center py-10">
              <ul className="divide-y divide-bone/10 border-y border-bone/10">
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
                        <span className="meta w-10 text-blood-bright">
                          {item.code}
                        </span>
                        <span className="display-md text-bone transition-colors duration-300 group-hover:text-blood-bright">
                          {item.label}
                        </span>
                      </span>
                      <span className="meta hidden text-ash transition-transform duration-300 group-hover:translate-x-2 sm:block">
                        →
                      </span>
                    </motion.button>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col justify-between gap-4 sm:flex-row">
                <span className="meta">{microcopy.attitude}</span>
                <span className="meta text-blood-bright">GRANADA — 2026</span>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
