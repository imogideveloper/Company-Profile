'use client';

import { useState } from 'react';
import { Wrench, Building2, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const clients = [
  { name: 'PT Pratama Putra Otomotif', icon: Wrench, image: '/ppo.png', iconColor: 'text-emerald-600', scale: 4 },
  { name: 'PT Tiga Perkasa Teknik', icon: Building2, image: '/tpt.png', iconColor: 'text-blue-600', scale: 1 },
  { name: 'PT Pemuda Patriot Rentalindo', icon: Truck, image: '/ppt.png', iconColor: 'text-amber-600', scale: 1 },
];

function ClientLogo({ client }: { client: typeof clients[number] }) {
  const [imgError, setImgError] = useState(false);
  const Icon = client.icon;

  return (
    <div className="flex-shrink-0 flex items-center justify-center w-56 h-24 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
      {!imgError ? (
        <img
          src={client.image}
          alt={client.name}
          className="max-w-full max-h-full object-contain"
          style={client.scale !== 1 ? { transform: `scale(${client.scale})` } : undefined}
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="flex flex-col items-center gap-1">
          <Icon className={`w-8 h-8 ${client.iconColor}`} />
          <span className="text-xs font-medium text-foreground/70 text-center leading-tight">{client.name}</span>
        </div>
      )}
    </div>
  );
}

export default function ClientLogosSection() {
  const duplicated = [...clients, ...clients, ...clients, ...clients, ...clients, ...clients];

  return (
    <section id="klien" className="py-8 md:py-10 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-imogi-secondary mb-2">
            Dipercaya Oleh
          </p>
          <h2 className="text-2xl font-bold text-foreground">Klien Kami</h2>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

        <div className="marquee-track">
          {duplicated.map((client, idx) => (
            <div key={idx} className="marquee-card flex-shrink-0 px-5">
              <ClientLogo client={client} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
