import Image from "next/image";
import { img } from "@/lib/basePath";

export default function Hero() {
  return (
    <section className="bg-cream pt-28 sm:pt-32 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="text-center lg:text-left">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-charcoal leading-tight mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Temarios OPOS Secundaria
              <span className="block text-gold mt-2">Escuelas de Arte</span>
            </h1>

            <p className="text-base sm:text-lg text-charcoal/80 mb-4 max-w-xl mx-auto lg:mx-0">
              Somos Verónica y Rayco. Hemos creado los temarios que nos hubiera
              gustado tener: completos, rigurosos y hechos con cariño.
            </p>

            <p className="text-sm text-charcoal/60 mb-8 max-w-xl mx-auto lg:mx-0">
              Impresos y encuadernados, sin versión digital.
              Entrega en mano en La Laguna – Santa Cruz o envío a toda Canarias.
            </p>

            <a
              href="#temarios"
              className="inline-block bg-gold hover:bg-gold-dark text-white font-medium px-8 py-3 rounded-sm transition-colors text-sm uppercase tracking-widest"
            >
              Ver temarios
            </a>
          </div>

          {/* Imagen de los tres temarios */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-sm overflow-hidden shadow-xl">
              <Image
                src={img("/images/entrega-en-mano.png")}
                alt="Los tres temarios de Proporción Áurea Oposiciones: Volumen, Fotografía y Medios Audiovisuales"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Marco dorado decorativo */}
              <div className="absolute inset-0 border-2 border-gold/30 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
