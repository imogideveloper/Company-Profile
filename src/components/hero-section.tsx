'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Play, Monitor, ShieldCheck, Globe } from 'lucide-react';

const slides = [
  {
    headline: 'Fleet Management Cerdas & Otomatis',
    subtitle: 'Monitoring armada secara real-time, kontrol BBM, dispatch otomatis, dan maintenance reminder — semua dalam satu platform ERPNext.',
  },
  {
    headline: 'Manajemen Proyek Konstruksi Terintegrasi',
    subtitle: 'Dari perencanaan RAB, penjadwalan, pengadaan material, hingga progress claim dan billing — terhubung tanpa celah.',
  },
  {
    headline: 'Operasional Bengkel Digital & Efisien',
    subtitle: 'Antrian digital, inventory suku cadang, manajemen mekanik, dan billing otomatis untuk bengkel modern.',
  },
];

const badges = [
  { icon: Monitor, label: 'Real-time Monitoring' },
  { icon: ShieldCheck, label: 'Data Terjamin' },
  { icon: Globe, label: 'Akses dari Mana Saja' },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)' }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-imogi-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-imogi-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badges */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
              {badges.map((badge) => (
                <Badge
                  key={badge.label}
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white/90 gap-1.5 px-3 py-1 text-xs"
                >
                  <badge.icon className="w-3.5 h-3.5 text-imogi-accent" />
                  {badge.label}
                </Badge>
              ))}
            </div>

            {/* Carousel Headline */}
            <div className="relative h-[120px] sm:h-[100px] mb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    {slides[current].headline}
                  </h1>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Subtitle */}
            <AnimatePresence mode="wait">
              <motion.p
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-base sm:text-lg text-white/70 mb-8 max-w-xl mx-auto lg:mx-0"
              >
                {slides[current].subtitle}
              </motion.p>
            </AnimatePresence>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="bg-imogi-secondary hover:bg-imogi-secondary/90 text-white gap-2 h-12 px-6"
                asChild
              >
                <a href="#kontak">
                  Demo Gratis
                  <ChevronRight className="w-4 h-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 gap-2 h-12 px-6"
                asChild
              >
                <a href="#layanan">
                  <Play className="w-4 h-4" />
                  Lihat Demo
                </a>
              </Button>
            </div>

            {/* Carousel Dots */}
            <div className="flex gap-2 justify-center lg:justify-start">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === current
                      ? 'w-8 bg-imogi-secondary'
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right - Dashboard Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main dashboard card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
                {/* Top bar */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="ml-4 h-6 bg-white/10 rounded flex-1" />
                </div>
                {/* Dashboard content mock */}
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Armada Aktif', value: '48', color: 'bg-imogi-secondary' },
                      { label: 'Dalam Perjalanan', value: '32', color: 'bg-imogi-accent' },
                      { label: 'Maintenance', value: '5', color: 'bg-amber-500' },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-white/5 rounded-lg p-3">
                        <div className={`w-8 h-1 ${stat.color} rounded mb-2`} />
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-xs text-white/50">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  {/* Chart mock */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-xs text-white/50 mb-3">Utilisasi Armada</div>
                    <div className="flex items-end gap-1 h-20">
                      {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-imogi-secondary/60 rounded-t hover:bg-imogi-secondary transition-colors"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  {/* Map mock */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-xs text-white/50 mb-2">Live Tracking</div>
                    <div className="h-16 bg-imogi-secondary/10 rounded flex items-center justify-center">
                      <Globe className="w-8 h-8 text-imogi-accent/50" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notification */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-white/15 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-white">Data Terjamin</div>
                    <div className="text-[10px] text-white/50">Enkripsi end-to-end</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
