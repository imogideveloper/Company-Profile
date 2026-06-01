'use client';

import { motion } from 'framer-motion';
import { Building2, Rocket, Clock, Headphones } from 'lucide-react';

const stats = [
  {
    icon: Building2,
    value: '3',
    label: 'Industri',
    description: 'Konstruksi, Transportasi, Otomotif',
  },
  {
    icon: Rocket,
    value: '100%',
    label: 'Go-Live',
    description: 'Semua project berhasil diluncurkan',
  },
  {
    icon: Clock,
    value: '8-10',
    label: 'Minggu',
    description: 'Rata-rata waktu implementasi',
  },
  {
    icon: Headphones,
    value: '24/7',
    label: 'Support',
    description: 'Dukungan teknis sepanjang waktu',
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto w-14 h-14 rounded-2xl bg-imogi-secondary/20 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-imogi-accent" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-imogi-accent mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-white/50">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
