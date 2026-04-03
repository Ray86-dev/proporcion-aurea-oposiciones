"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { Temario, WHATSAPP_COMMUNITY_URL } from "@/lib/data";

type Props = {
  temario: Temario | null;
  onClose: () => void;
};

export default function ProductModal({ temario, onClose }: Props) {
  const handleEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!temario) return;
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [temario, handleEsc]);

  if (!temario) return null;

  return (
    <div
      className="modal-overlay fixed inset-0 z-[100] flex items-center justify-center p-4 bg-charcoal/50 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Detalles del temario de ${temario.title}`}
    >
      <div
        className="modal-content relative bg-cream border-2 border-gold/40 rounded-sm max-w-2xl w-full shadow-2xl flex flex-col sm:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Boton cerrar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center text-charcoal/60 hover:text-charcoal transition-colors bg-cream/80 rounded-full"
          aria-label="Cerrar modal"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Imagen - solo en sm+ */}
        <div className="hidden sm:block relative w-52 flex-shrink-0 overflow-hidden">
          <Image
            src={temario.image}
            alt={`Temario de ${temario.title}`}
            fill
            className="object-cover"
            sizes="208px"
          />
          <div className="absolute inset-2 border border-gold/30 pointer-events-none" />
        </div>

        {/* Contenido */}
        <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 min-w-0">
          <div>
            <h2
              className="text-xl sm:text-2xl font-bold text-charcoal mb-0.5"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {temario.title}
            </h2>
            <p className="text-xs text-charcoal/50 mb-3">{temario.specialty}</p>

            <p className="text-sm text-charcoal/70 leading-relaxed mb-3">
              {temario.description[0]}
            </p>

            {/* Precio */}
            <div className="bg-white/60 border border-gold/20 rounded-sm px-3 py-2 mb-4 inline-block">
              <span className="text-xl font-semibold text-gold">160 €</span>
              <span className="text-xs text-charcoal/50 ml-2">+ envío | En mano gratis (La Laguna – Santa Cruz)</span>
            </div>
          </div>

          {/* Botones */}
          <div className="flex gap-3">
            <a
              href={WHATSAPP_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gold hover:bg-gold-dark text-white font-medium py-2.5 px-4 rounded-sm text-center transition-colors text-xs uppercase tracking-widest flex items-center justify-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2.5 border border-charcoal/20 text-charcoal/60 hover:text-charcoal hover:border-charcoal/40 rounded-sm transition-colors text-xs uppercase tracking-widest"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
