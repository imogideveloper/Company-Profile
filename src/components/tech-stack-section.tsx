'use client';

import { motion } from 'framer-motion';

const technologies = [
  { name: 'ERPNext', description: 'Platform ERP Open Source' },
  { name: 'Frappe Framework', description: 'Low-code Web Framework' },
  { name: 'Python', description: 'Bahasa Pemrograman' },
  { name: 'MariaDB', description: 'Database Relasional' },
  { name: 'Redis', description: 'Cache & Message Broker' },
  { name: 'REST API', description: 'Integrasi Sistem' },
];

export default function TechStackSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-imogi-secondary">
            Teknologi yang Digunakan
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Didukung Teknologi Terbaik
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kami menggunakan stack teknologi yang terbukti andal dan scalable untuk kebutuhan enterprise
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {technologies.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group flex flex-col items-center p-6 rounded-2xl bg-card border border-border hover:border-imogi-secondary/30 hover:shadow-lg transition-all duration-300 w-40 sm:w-44"
            >
              <div className="w-12 h-12 rounded-xl bg-imogi-secondary/10 flex items-center justify-center mb-3 group-hover:bg-imogi-secondary/20 transition-colors">
                <span className="text-imogi-secondary font-bold text-sm">
                  {tech.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">{tech.name}</h3>
              <p className="text-xs text-muted-foreground text-center">{tech.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
