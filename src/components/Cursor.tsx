import { createContext, useContext } from "react";
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
 * Hook helper conservado por compatibilidad: antes cambiaba el cursor
 * personalizado. Ahora usamos el cursor nativo del navegador, así que no hace
 * nada, pero mantenemos la API para no tocar el resto de componentes.
 */
export function useCursorHover(_mode: CursorMode) {
  return {};
}

/** Provider ligero: solo mantiene el contexto (sin cursor personalizado). */
export default function CursorProvider({ children }: { children: ReactNode }) {
  return <Ctx.Provider value={{ setMode: () => {} }}>{children}</Ctx.Provider>;
}
