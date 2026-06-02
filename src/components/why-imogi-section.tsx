'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Unlock, Shield } from 'lucide-react';

export default function WhyImogiSection() {
  return (
    <section id="tentang" className="py-10 md:py-14 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800 gap-1.5 px-3 py-1">
                <Unlock className="w-3.5 h-3.5" />
                Open Source
              </Badge>
              <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800 gap-1.5 px-3 py-1">
                <Shield className="w-3.5 h-3.5" />
                No Vendor Lock-in
              </Badge>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              Implementor ERPNext Terpercaya di Indonesia
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                IMOGI adalah implementor ERPNext yang telah dipercaya oleh berbagai perusahaan di Indonesia.
                Kami memahami bahwa setiap industri memiliki kebutuhan unik — itulah mengapa kami tidak hanya
                menginstal software, tetapi membangun solusi yang benar-benar sesuai dengan proses bisnis Anda.
              </p>
              <p>
                Dengan ERPNext sebagai fondasi, Anda mendapatkan sistem ERP kelas dunia tanpa biaya lisensi
                yang memberatkan. Kode sumber terbuka berarti Anda memiliki kendali penuh atas data dan sistem
                Anda — tanpa vendor lock-in.
              </p>
              <p>
                Tim kami terdiri dari developer bersertifikat yang memahami baik dunia ERP maupun kebutuhan
                bisnis lokal Indonesia. Dari konsultasi hingga Go-Live, kami mendampingi setiap langkah
                transformasi digital Anda.
              </p>
            </div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="space-y-6">
                {[
                  { label: 'Kustomisasi', value: 100, suffix: '%' },
                  { label: 'Go-Live Rate', value: 100, suffix: '%' },
                  { label: 'Kepuasan Klien', value: 98, suffix: '%' },
                  { label: 'Implementasi Tepat Waktu', value: 95, suffix: '%' },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{item.label}</span>
                      <span className="text-sm font-bold text-imogi-secondary">{item.value}{item.suffix}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-imogi-secondary to-imogi-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative badge */}
              <div className="mt-8 p-4 bg-imogi-secondary/5 rounded-xl border border-imogi-secondary/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-imogi-secondary/10 flex items-center justify-center">
                    <Unlock className="w-5 h-5 text-imogi-secondary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">100% Open Source</div>
                    <div className="text-xs text-muted-foreground">Kode sumber milik Anda, tanpa risiko vendor lock-in</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
