'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  name: string;
  title: string;
  company: string;
  initials: string;
  color: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Ahmad Wijaya',
    title: 'Pemilik',
    company: 'PT Pratama Putra Otomotif',
    initials: 'AW',
    color: 'from-emerald-400 to-emerald-600',
    content: 'Sistem antrian digital dan inventory suku cadang dari IMOGI Bengkel sangat membantu. Mekanik lebih produktif, pelanggan lebih puas dengan estimasi biaya yang transparan.',
    rating: 5,
  },
  {
    name: 'Budi Santoso',
    title: 'Direktur Operasional',
    company: 'PT Tiga Perkasa Teknik',
    initials: 'BS',
    color: 'from-blue-400 to-blue-600',
    content: 'Setelah implementasi IMOGI Konstruksi, proses RAB dan progress claim kami jauh lebih cepat dan akurat. Tidak ada lagi kesalahan hitung manual yang merugikan perusahaan.',
    rating: 5,
  },
  {
    name: 'Siti Rahayu',
    title: 'General Manager',
    company: 'PT Pemuda Patriot Rentalindo',
    initials: 'SR',
    color: 'from-amber-400 to-amber-600',
    content: 'IMOGI Fleet mengubah cara kami mengelola armada. Dispatch yang dulunya pakai WhatsApp sekarang otomatis, dan kami bisa tracking GPS setiap unit secara real-time.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);

  const total = testimonials.length;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto slide
  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev >= total - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [mounted, total]);

  const prev = () => setCurrent((c) => (c <= 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c >= total - 1 ? 0 : c + 1));

  return (
    <section className="py-10 md:py-14 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-imogi-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-imogi-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-imogi-secondary/10 text-imogi-secondary text-sm font-medium mb-4">
            Testimoni
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Apa Kata Mereka
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Testimoni dari klien yang telah merasakan manfaat implementasi ERPNext bersama IMOGI
          </p>
        </motion.div>

        {/* Desktop: 3 cards side by side | Mobile: carousel */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="bg-card border border-border rounded-2xl p-7 flex flex-col hover:shadow-lg hover:border-imogi-secondary/30 transition-all duration-300"
            >
              {/* Quote + Stars */}
              <div className="flex items-center justify-between mb-5">
                <Quote className="w-10 h-10 text-imogi-secondary/20" />
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-foreground/80 leading-relaxed text-sm mb-6 flex-1">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                >
                  <span className="text-white font-bold text-sm">{t.initials}</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{t.name}</div>
                  <div className="text-muted-foreground text-xs">{t.title} · {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-card border border-border rounded-2xl p-7 flex flex-col">
                {/* Quote + Stars */}
                <div className="flex items-center justify-between mb-5">
                  <Quote className="w-10 h-10 text-imogi-secondary/20" />
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <p className="text-foreground/80 leading-relaxed text-sm mb-6 flex-1">
                  &ldquo;{testimonials[current].content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-border">
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center shadow-lg flex-shrink-0`}
                  >
                    <span className="text-white font-bold text-sm">{testimonials[current].initials}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{testimonials[current].name}</div>
                    <div className="text-muted-foreground text-xs">{testimonials[current].title} · {testimonials[current].company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-imogi-secondary/30 hover:bg-imogi-secondary/5 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === current
                      ? 'w-8 bg-imogi-secondary'
                      : 'w-2 bg-muted-foreground/20 hover:bg-muted-foreground/40'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-imogi-secondary/30 hover:bg-imogi-secondary/5 transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}