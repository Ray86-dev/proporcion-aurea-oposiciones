"use client";

import Image from "next/image";
import { Temario, getWhatsAppUrl, WHATSAPP_COMMUNITY_URL } from "@/lib/data";

type Props = {
  temario: Temario;
  onOpenModal: (temario: Temario) => void;
  className?: string;
};

export default function ProductCard({ temario, onOpenModal, className = "" }: Props) {
  return (
    <article
      className={`group relative bg-white rounded-sm overflow-hidden cursor-pointer
        border border-gold/20 shadow-sm
        transition-all duration-300
        hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)]
        hover:border-gold/50
        ${className}`}
      onClick={() => onOpenModal(temario)}
      role="button"
      tabIndex={0}
      aria-label={`Ver detalles del temario de ${temario.title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpenModal(temario);
        }
      }}
    >
      {/* Imagen con marco dorado */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={temario.image}
          alt={`Temario de ${temario.title} — Proporción Áurea Oposiciones`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Overlay sutil en hover */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/[0.08] transition-colors duration-300" />
        {/* Marco dorado */}
        <div className="absolute inset-2 border border-gold/30 group-hover:border-gold/60 transition-colors duration-300 pointer-events-none" />
      </div>

      {/* Contenido */}
      <div className="p-5 sm:p-6">
        <h3
          className="text-xl sm:text-2xl font-semibold text-charcoal mb-2"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {temario.title}
        </h3>

        <p className="text-gold font-semibold text-lg mb-2">
          160 € <span className="text-charcoal/50 text-sm font-normal">+ gastos de envío</span>
        </p>

        <p className="text-xs text-charcoal/50 mb-3">
          Entrega en mano gratis en La Laguna – Santa Cruz        </p>

        <p className="text-xs text-charcoal/40 italic">
          Solo en papel. Impreso, encuadernado y hecho con cariño.
        </p>
      </div>

      {/* Icono WhatsApp en esquina inferior derecha */}
      <a
        href={getWhatsAppUrl(temario.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Contactar por WhatsApp sobre temario de ${temario.title}`}
        className="absolute bottom-4 right-4 w-10 h-10 bg-gold/90 group-hover:bg-gold rounded-full flex items-center justify-center text-white shadow-md transition-all duration-300 group-hover:scale-110 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </article>
  );
}
