import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type CursorMode = "default" | "view" | "open" | "link";

type CursorCtx = {
  setMode: (m: CursorMode) => void;
};

const Ctx = createContext<CursorCtx>({ setMode: () => {} });

export function useCursor() {
  return useContext(Ctx);
}

/**
 * Hook helper: devuelve props onMouseEnter/onMouseLeave para marcar un modo de
 * cursor sobre cualquier elemento.
 */
export function useCursorHover(mode: CursorMode) {
  const { setMode } = useCursor();
  return {
    onMouseEnter: () => setMode(mode),
    onMouseLeave: () => setMode("default"),
  };
}

const LABEL: Record<CursorMode, string> = {
  default: "",
  view: "VIEW",
  open: "OPEN",
  link: "→",
};

export default function CursorProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<CursorMode>("default");
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef<number>();

  useEffect(() => {
    // Solo en dispositivos con puntero fino (desktop)
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(fine);
    if (!fine) return;

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    const loop = () => {
      // Suavizado (lerp) para un movimiento elegante
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  const label = LABEL[mode];
  const expanded = mode !== "default";

  return (
    <Ctx.Provider value={{ setMode }}>
      {children}
      {enabled && (
        <div
          ref={dotRef}
          aria-hidden
          className="pointer-events-none fixed left-0 top-0 z-[70] hidden md:block"
        >
          <div
            className={[
              "flex items-center justify-center rounded-full border transition-all duration-300 ease-out",
              expanded
                ? "h-16 w-16 border-transparent bg-red text-white"
                : "h-4 w-4 border-2 border-red bg-white/30",
            ].join(" ")}
          >
            {label && (
              <span className="font-mono text-[11px] font-medium uppercase tracking-widest">
                {label}
              </span>
            )}
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}
