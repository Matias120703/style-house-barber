import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import BookingSection from "@/components/BookingSection";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <BookingSection />
      <WhatsAppCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
