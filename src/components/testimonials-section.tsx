'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  name: string;
  title: string;
  company: string;
  initials: string;
  color: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Budi Santoso',
    title: 'Direktur Operasional',
    company: 'PT Konstruksi Mandiri',
    initials: 'BS',
    color: 'bg-amber-500',
    content:
      'Setelah implementasi IMOGI Konstruksi, proses RAB dan progress claim kami jauh lebih cepat dan akurat. Tidak ada lagi kesalahan hitung manual yang merugikan perusahaan.',
  },
  {
    name: 'Siti Rahayu',
    title: 'General Manager',
    company: 'PT Armada Jaya',
    initials: 'SR',
    color: 'bg-imogi-secondary',
    content:
      'IMOGI Fleet mengubah cara kami mengelola armada. Dispatch yang dulunya pakai WhatsApp sekarang otomatis, dan kami bisa tracking GPS setiap unit secara real-time.',
  },
  {
    name: 'Ahmad Wijaya',
    title: 'Pemilik',
    company: 'PT Bengkel Prima',
    initials: 'AW',
    color: 'bg-emerald-500',
    content:
      'Sistem antrian digital dan inventory suku cadang dari IMOGI Bengkel sangat membantu. Mekanik kami lebih produktif dan pelanggan lebih puas dengan estimasi biaya yang transparan.',
  },
  {
    name: 'Dewi Kusuma',
    title: 'CFO',
    company: 'PT Infrastruktur Nusantara',
    initials: 'DK',
    color: 'bg-purple-500',
    content:
      'Biaya implementasi yang terjangkau dan tanpa lisensi tahunan sangat membantu cash flow perusahaan. ROI terasa dalam 3 bulan pertama setelah Go-Live.',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Apa Kata Mereka
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Testimoni dari klien yang telah merasakan manfaat implementasi ERPNext bersama IMOGI
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-card border border-border rounded-2xl p-8 md:p-10"
            >
              <Quote className="w-10 h-10 text-imogi-secondary/20 mb-6" />
              <p className="text-foreground leading-relaxed mb-8 text-base md:text-lg">
                &ldquo;{testimonials[current].content}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full ${testimonials[current].color} flex items-center justify-center`}
                >
                  <span className="text-white font-bold text-sm">
                    {testimonials[current].initials}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonials[current].name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[current].title}, {testimonials[current].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="h-10 w-10 rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === current
                      ? 'w-8 bg-imogi-secondary'
                      : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Testimoni ${idx + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="h-10 w-10 rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
