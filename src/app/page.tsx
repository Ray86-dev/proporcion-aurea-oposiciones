import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import WhyPaperSection from "@/components/WhyPaperSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import StructuredData from "@/components/StructuredData";
import Watermark from "@/components/Watermark";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Watermark />
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <WhyPaperSection />
        <AboutSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
