import { temarios, faqs, WHATSAPP_NUMBER, INSTAGRAM_URL, EMAIL } from "@/lib/data";

const SITE_URL = "https://ray86-dev.github.io/proporcion-aurea-oposiciones";

// Organization + LocalBusiness
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Proporción Áurea Oposiciones",
  description:
    "Temarios impresos y encuadernados para oposiciones de secundaria en Escuelas de Arte (Canarias). Especialidades: Volumen, Fotografía y Medios Audiovisuales.",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/Entrega en mano.png`,
  telephone: `+${WHATSAPP_NUMBER}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Cristóbal de La Laguna",
    addressRegion: "Santa Cruz de Tenerife",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.4853,
    longitude: -16.3146,
  },
  areaServed: {
    "@type": "Place",
    name: "Canarias, España",
  },
  email: EMAIL,
  sameAs: [INSTAGRAM_URL],
  priceRange: "€€",
};

// Product schemas
const productSchemas = temarios.map((temario) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: `Temario ${temario.title} — Oposiciones Escuelas de Arte`,
  description: temario.description.join(" "),
  image: `${SITE_URL}${temario.image}`,
  brand: {
    "@type": "Brand",
    name: "Proporción Áurea Oposiciones",
  },
  offers: {
    "@type": "Offer",
    price: "160.00",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "Proporción Áurea Oposiciones",
    },
    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingDestination: {
        "@type": "DefinedRegion",
        addressCountry: "ES",
        addressRegion: ["TF", "GC", "LP", "FV", "LZ", "GO", "EH"],
      },
    },
  },
  category: "Temarios de oposiciones",
}));

// FAQPage schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

// WebPage + BreadcrumbList
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Proporción Áurea Oposiciones — Temarios OPOS Escuelas de Arte",
  description:
    "Temarios impresos y encuadernados para oposiciones de secundaria en Escuelas de Arte (Canarias).",
  url: SITE_URL,
  inLanguage: "es",
  isPartOf: {
    "@type": "WebSite",
    name: "Proporción Áurea Oposiciones",
    url: SITE_URL,
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: SITE_URL,
      },
    ],
  },
};

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      {productSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
    </>
  );
}
