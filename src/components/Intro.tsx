import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Transición de entrada: pantalla negra con ZETTTA / 01 que se retira
 * revelando la web. Corta y elegante (~700ms de salida).
 */
export default function Intro() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-ink"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="display-lg text-bone"
          >
            ZETTTA
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="meta mt-4 text-blood-bright"
          >
            01 — DIGITAL ATELIER
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
