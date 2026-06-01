import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import IndustriesSection from "@/components/industries-section";
import WhyChooseUsSection from "@/components/why-choose-us-section";
import FeaturedSolutionsSection from "@/components/featured-solutions-section";
import DevelopmentProcessSection from "@/components/development-process-section";
import PortfolioSection from "@/components/portfolio-section";
import TestimonialsSection from "@/components/testimonials-section";
import CtaSection from "@/components/cta-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <IndustriesSection />
        <WhyChooseUsSection />
        <FeaturedSolutionsSection />
        <DevelopmentProcessSection />
        <PortfolioSection />
        <TestimonialsSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
