'use client';

import { motion } from 'framer-motion';
import { MessageSquare, PenTool, Code, Rocket, Headphones, Clock } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Konsultasi',
    duration: '2 Minggu',
    description: 'Analisis kebutuhan & pain points bisnis',
  },
  {
    icon: PenTool,
    title: 'Desain',
    duration: '2 Minggu',
    description: 'Blueprint modul & workflow yang dikustomisasi',
  },
  {
    icon: Code,
    title: 'Implementasi',
    duration: '4 Minggu',
    description: 'Setup ERPNext + custom module + migrasi data',
  },
  {
    icon: Rocket,
    title: 'Go-Live',
    duration: '1 Minggu',
    description: 'Training tim + launching bertahap',
  },
  {
    icon: Headphones,
    title: 'Support',
    duration: 'Beres!',
    description: 'Dukungan teknis & optimasi berkelanjutan',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-10 md:py-14 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-imogi-secondary">
            Proses Implementasi
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            5 Langkah Menuju Transformasi Digital
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proses implementasi yang terstruktur dan terbukti berhasil
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden md:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-imogi-secondary/20 via-imogi-secondary to-imogi-secondary/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isLast = idx === steps.length - 1;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center relative"
                >
                  {/* Step icon + number */}
                  <div className="relative z-10 mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-card border-2 flex items-center justify-center shadow-sm hover:shadow-md transition-all group ${
                      isLast
                        ? 'border-slate-300 hover:border-slate-400'
                        : 'border-imogi-secondary/20 hover:border-imogi-secondary'
                    }`}>
                      <Icon className={`w-7 h-7 group-hover:scale-110 transition-transform ${
                        isLast ? 'text-slate-400' : 'text-imogi-secondary'
                      }`} />
                    </div>
                    <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center ${
                      isLast ? 'bg-slate-400' : 'bg-imogi-secondary'
                    }`}>
                      {idx + 1}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`font-semibold mb-1 ${isLast ? 'text-slate-500' : 'text-foreground'}`}>
                    {step.title}
                  </h3>

                  {/* Duration badge */}
                  <div className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold mb-2 ${
                    isLast
                      ? 'bg-slate-100 text-slate-500'
                      : 'bg-imogi-secondary/10 text-imogi-secondary'
                  }`}>
                    <Clock className="w-3 h-3" />
                    {step.duration}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Total timeline summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border border-border shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-imogi-secondary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-imogi-secondary" />
              </div>
              <div className="text-left">
                <div className="text-sm text-muted-foreground">Estimasi Total Waktu</div>
                <div className="text-lg font-bold text-foreground">
                  ~9 Minggu <span className="text-sm font-normal text-muted-foreground">+ Support Berkelanjutan</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}