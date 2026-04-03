import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://ray86-dev.github.io/proporcion-aurea-oposiciones";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Proporción Áurea Oposiciones — Temarios OPOS Escuelas de Arte",
  description:
    "Temarios impresos y encuadernados para oposiciones de secundaria en Escuelas de Arte (Canarias). Volumen, Fotografía y Medios Audiovisuales. Entrega en mano en La Laguna – Santa Cruz.",
  keywords: [
    "oposiciones",
    "temarios",
    "escuelas de arte",
    "canarias",
    "volumen",
    "fotografía",
    "medios audiovisuales",
    "secundaria",
    "artes plásticas y diseño",
    "tenerife",
    "la laguna",
    "temario impreso",
    "oposiciones 2026",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Proporción Áurea Oposiciones — Temarios OPOS Escuelas de Arte",
    description:
      "Temarios impresos y encuadernados para oposiciones de secundaria en Escuelas de Arte (Canarias). Volumen, Fotografía y Medios Audiovisuales.",
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "Proporción Áurea Oposiciones",
    images: [
      {
        url: "/images/entrega-en-mano.png",
        width: 1200,
        height: 630,
        alt: "Temarios de Proporción Áurea Oposiciones — Escuelas de Arte Canarias",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proporción Áurea Oposiciones — Temarios OPOS Escuelas de Arte",
    description:
      "Temarios impresos para oposiciones de Escuelas de Arte en Canarias: Volumen, Fotografía y Medios Audiovisuales.",
    images: ["/images/entrega-en-mano.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-[var(--font-sans)]">{children}</body>
    </html>
  );
}
