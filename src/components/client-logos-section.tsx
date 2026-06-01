'use client';

import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';

const clients = [
  'PT Konstruksi Mandiri',
  'PT Armada Jaya',
  'PT Bengkel Prima',
  'PT Infrastruktur Nusantara',
  'PT Logistik Sejahtera',
  'PT Properti Berkah',
  'PT Transportasi Kita',
  'PT Otomotif Sentosa',
];

export default function ClientLogosSection() {
  return (
    <section id="klien" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl font-bold text-foreground">Klien Kami</h2>
          <p className="text-muted-foreground mt-2">Dipercaya oleh perusahaan-perusahaan terkemuka di Indonesia</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"
        >
          {clients.map((client, idx) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex items-center justify-center p-4 rounded-lg bg-card border border-border/50 hover:border-imogi-secondary/30 hover:shadow-sm transition-all"
            >
              <div className="flex flex-col items-center gap-2">
                <Building2 className="w-6 h-6 text-muted-foreground/40" />
                <span className="text-[10px] text-muted-foreground text-center leading-tight">
                  {client}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
