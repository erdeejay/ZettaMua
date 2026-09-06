import { useState } from "react";
import { cn } from "@/lib/utils";

type MediaFrameProps = {
  src?: string;
  alt: string;
  label?: string;
  className?: string;
  imgClassName?: string;
};

/**
 * Marco de imagen editorial con hover (zoom + brillo sutil).
 * Si la imagen real no existe todavía, muestra un placeholder limpio con el
 * texto indicado, manteniendo la maquetación intacta.
 */
export default function MediaFrame({
  src,
  alt,
  label,
  className,
  imgClassName,
}: MediaFrameProps) {
  const [errored, setErrored] = useState(false);
  const showPlaceholder = !src || errored;

  return (
    <div className={cn("gallery-media h-full w-full", className)}>
      {showPlaceholder ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-pink-soft via-pink-pale to-white p-6 text-center">
          <span className="font-display text-3xl font-extrabold uppercase tracking-tightest text-crimson/30">
            ZETTTA
          </span>
          <span className="tech-label text-crimson/50">
            {label ?? alt}
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setErrored(true)}
          className={imgClassName}
        />
      )}
    </div>
  );
}
