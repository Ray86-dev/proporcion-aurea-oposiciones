import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Imagen */}
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-lg order-2 lg:order-1">
            <Image
              src="/images/Entrega en mano.png"
              alt="Entrega en mano de un temario de Proporción Áurea Oposiciones"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 border-2 border-gold/20 pointer-events-none" />
          </div>

          {/* Texto */}
          <div className="order-1 lg:order-2">
            <div className="w-12 h-px bg-gold mb-4" />
            <h2
              className="text-2xl sm:text-3xl font-bold text-charcoal mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Sobre Proporción Áurea Oposiciones
            </h2>

            <div className="space-y-4 text-sm text-charcoal/70 leading-relaxed">
              <p>
                Estamos especializados en la preparación de oposiciones para el
                Cuerpo de Profesores de Artes Plásticas y Diseño, con temarios
                específicos para las <strong className="text-charcoal">Escuelas de Arte</strong> de Canarias.
              </p>
              <p>
                Ubicados en la zona metropolitana de{" "}
                <strong className="text-charcoal">La Laguna – Santa Cruz de Tenerife</strong>,
                ofrecemos entrega en mano gratuita y acompañamiento al opositor:
                no solo vendemos el libro, te ayudamos en el camino.
              </p>
              <p>
                Nuestro compromiso es ofrecer un material riguroso, actualizado
                y con la calidad que merece tu preparación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
