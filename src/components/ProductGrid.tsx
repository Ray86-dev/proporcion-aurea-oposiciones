"use client";

import { useState } from "react";
import { temarios, Temario } from "@/lib/data";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

export default function ProductGrid() {
  const [selectedTemario, setSelectedTemario] = useState<Temario | null>(null);

  return (
    <section id="temarios" className="bg-cream py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titulo de seccion */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="w-12 h-px bg-gold mx-auto mb-4" />
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Nuestros Temarios
          </h2>
          <p className="text-charcoal/60 mt-3 max-w-md mx-auto text-sm">
            Tres especialidades del Cuerpo de Profesores de Artes Plásticas y Diseño
          </p>
        </div>

        {/* Grid: 3 columnas en desktop, 2 en tablet, 1 en movil */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <ProductCard
            temario={temarios[0]}
            onOpenModal={setSelectedTemario}
          />
          <ProductCard
            temario={temarios[1]}
            onOpenModal={setSelectedTemario}
          />
          <ProductCard
            temario={temarios[2]}
            onOpenModal={setSelectedTemario}
            className="md:col-span-2 lg:col-span-1"
          />
        </div>
      </div>

      <ProductModal
        temario={selectedTemario}
        onClose={() => setSelectedTemario(null)}
      />
    </section>
  );
}
