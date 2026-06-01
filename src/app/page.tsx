import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import ClientLogosSection from '@/components/client-logos-section';
import ProductsSection from '@/components/products-section';
import ProcessSection from '@/components/process-section';
import TechStackSection from '@/components/tech-stack-section';
import WhyImogiSection from '@/components/why-imogi-section';
import TeamSection from '@/components/team-section';
import ErpComparisonSection from '@/components/erp-comparison-section';
import StatsSection from '@/components/stats-section';
import TestimonialsSection from '@/components/testimonials-section';
import FaqSection from '@/components/faq-section';
import CtaSection from '@/components/cta-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ClientLogosSection />
        <ProductsSection />
        <ProcessSection />
        <TechStackSection />
        <WhyImogiSection />
        <TeamSection />
        <ErpComparisonSection />
        <StatsSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
