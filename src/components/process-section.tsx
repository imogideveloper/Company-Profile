'use client';

import { motion } from 'framer-motion';
import { MessageSquare, PenTool, Code, Rocket, Headphones } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Konsultasi',
    description: 'Analisis kebutuhan bisnis dan proses kerja Anda secara mendalam',
  },
  {
    icon: PenTool,
    title: 'Desain',
    description: 'Merancang solusi dan workflow yang sesuai dengan kebutuhan Anda',
  },
  {
    icon: Code,
    title: 'Implementasi',
    description: 'Membangun dan mengustomisasi ERPNext sesuai desain yang disetujui',
  },
  {
    icon: Rocket,
    title: 'Go-Live',
    description: 'Peluncuran sistem dengan pendampingan dan data migration',
  },
  {
    icon: Headphones,
    title: 'Support',
    description: 'Dukungan teknis 24/7 dan pembaruan berkelanjutan',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
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
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center relative"
                >
                  {/* Step number */}
                  <div className="relative z-10 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-card border-2 border-imogi-secondary/20 flex items-center justify-center shadow-sm hover:border-imogi-secondary hover:shadow-md transition-all group">
                      <Icon className="w-7 h-7 text-imogi-secondary group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-imogi-secondary text-white text-xs font-bold flex items-center justify-center">
                      {idx + 1}
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
