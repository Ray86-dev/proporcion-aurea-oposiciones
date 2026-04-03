"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-12 h-px bg-gold mx-auto mb-4" />
          <h2
            className="text-2xl sm:text-3xl font-bold text-charcoal"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Preguntas frecuentes
          </h2>
        </div>

        <div className="divide-y divide-charcoal/10">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left group"
                aria-expanded={openIndex === i}
              >
                <span
                  className="text-sm sm:text-base font-medium text-charcoal group-hover:text-gold transition-colors pr-4"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 text-gold transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>

              <div
                className="faq-answer"
                data-open={openIndex === i}
              >
                <div>
                  <p className="pb-5 text-sm text-charcoal/60 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
