import { useState } from "react";
import { cn } from "@/lib/utils";

type MediaFrameProps = {
  src?: string;
  hoverSrc?: string;
  alt: string;
  code?: string;
  className?: string;
};

/**
 * Marco de imagen editorial. Soporta segunda imagen para hover (crossfade).
 * Si no hay imagen real, muestra un placeholder clínico oscuro con metadato,
 * manteniendo la maquetación intacta.
 */
export default function MediaFrame({
  src,
  hoverSrc,
  alt,
  code,
  className,
}: MediaFrameProps) {
  const [errored, setErrored] = useState(false);
  const [hoverErrored, setHoverErrored] = useState(false);
  const showPlaceholder = !src || errored;

  return (
    <div className={cn("media h-full w-full", className)}>
      {showPlaceholder ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-smoke p-6 text-center">
          <span className="font-display text-4xl uppercase tracking-tightest text-bone/10">
            ZETTTA
          </span>
          <span className="meta">{code ?? alt}</span>
        </div>
      ) : (
        <>
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setErrored(true)}
          />
          {hoverSrc && !hoverErrored && (
            <img
              src={hoverSrc}
              alt=""
              aria-hidden
              loading="lazy"
              onError={() => setHoverErrored(true)}
              className="!absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          )}
        </>
      )}
    </div>
  );
}
