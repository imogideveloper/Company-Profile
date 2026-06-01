'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CalendarCheck, MessageCircle, ChevronRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)' }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-imogi-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-imogi-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Konsultasi Gratis ERPNext
            <br />
            untuk Bisnis Anda
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Dapatkan analisis kebutuhan dan rekomendasi solusi ERP dari tim ahli kami.
            Tanpa komitmen, tanpa biaya.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-imogi-secondary hover:bg-imogi-secondary/90 text-white gap-2 h-13 px-8 text-base"
              asChild
            >
              <a href="#kontak">
                <CalendarCheck className="w-5 h-5" />
                Jadwalkan Demo
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 gap-2 h-13 px-8 text-base"
              asChild
            >
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Langsung
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
