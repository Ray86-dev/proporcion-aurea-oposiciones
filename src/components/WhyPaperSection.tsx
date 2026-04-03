export default function WhyPaperSection() {
  const reasons = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      title: "Protección frente al plagio",
      text: "El formato exclusivamente en papel garantiza que el contenido no se copie ni distribuya sin autorización.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: "Estudio concentrado",
      text: "Estudiar en papel elimina las distracciones digitales y mejora la retención y la comprensión profunda.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M9 15l2 2 4-4" />
        </svg>
      ),
      title: "Durabilidad y anotaciones",
      text: "Material encuadernado de calidad que puedes subrayar, anotar y consultar tantas veces como necesites.",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-12 h-px bg-gold mx-auto mb-4" />
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            ¿Por qué solo en papel?
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 sm:gap-12">
          {reasons.map((r, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 text-gold mb-4">
                {r.icon}
              </div>
              <h3
                className="text-base font-semibold text-charcoal mb-2"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {r.title}
              </h3>
              <p className="text-sm text-charcoal/60 leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
