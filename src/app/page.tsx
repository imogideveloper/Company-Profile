import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import ClientLogosSection from '@/components/client-logos-section';
import ProductsSection from '@/components/products-section';
import ProcessSection from '@/components/process-section';
import WhyImogiSection from '@/components/why-imogi-section';
import ErpComparisonSection from '@/components/erp-comparison-section';
import TestimonialsSection from '@/components/testimonials-section';
import FaqSection from '@/components/faq-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import WhatsAppFloat from '@/components/whatsapp-float';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ClientLogosSection />
        <ProductsSection />
        <ProcessSection />
        <WhyImogiSection />
        <ErpComparisonSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}