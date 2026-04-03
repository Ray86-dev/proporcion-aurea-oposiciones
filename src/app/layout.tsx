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

export const metadata: Metadata = {
  title: "Proporción Áurea Oposiciones — Temarios OPOS Escuelas de Arte",
  description:
    "Temarios impresos y encuadernados para oposiciones de secundaria en Escuelas de Arte (Canarias). Volumen, Fotografía y Medios Audiovisuales. Entrega en mano en La Laguna – Santa Cruz.",
  keywords:
    "oposiciones, temarios, escuelas de arte, canarias, volumen, fotografía, medios audiovisuales, secundaria",
  openGraph: {
    title: "Proporción Áurea Oposiciones — Temarios OPOS Escuelas de Arte",
    description:
      "Temarios impresos y encuadernados para oposiciones de secundaria en Escuelas de Arte.",
    type: "website",
    locale: "es_ES",
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
