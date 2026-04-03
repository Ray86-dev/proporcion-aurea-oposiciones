import Image from "next/image";
import { img } from "@/lib/basePath";

export default function AboutSection() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Imagen */}
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-lg order-2 lg:order-1">
            <Image
              src={img("/images/entrega-en-mano.png")}
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
              Quiénes somos
            </h2>

            <div className="space-y-4 text-sm text-charcoal/70 leading-relaxed">
              <p>
                Somos <strong className="text-charcoal">Rayco y Verónica</strong>.
                Sabemos lo que es preparar unas oposiciones: las horas de estudio,
                la incertidumbre y la ilusión. Por eso creamos estos temarios con
                todo el rigor y el cariño que nos hubiera gustado encontrar.
              </p>
              <p>
                Estamos en{" "}
                <strong className="text-charcoal">La Laguna – Santa Cruz de Tenerife</strong> y
                cada temario que entregamos en mano va acompañado de una nota
                escrita por nosotros, porque detrás de cada pedido hay una persona
                con un sueño que merece todo nuestro apoyo.
              </p>
              <p>
                No solo vendemos un libro: te acompañamos en el camino. Todo
                esfuerzo, constancia y talento darán sus frutos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
