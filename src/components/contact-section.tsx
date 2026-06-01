'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const contacts = [
  {
    icon: Phone,
    label: 'TELEPON',
    value: '+62 21 1234 5678',
    detail: 'Senin–Jumat, 09:00–18:00 WIB',
    color: 'bg-imogi-secondary',
    href: 'tel:+622112345678',
  },
  {
    icon: Mail,
    label: 'EMAIL',
    value: 'info@imogi.id',
    detail: 'Respon dalam 1×24 jam',
    color: 'bg-imogi-accent',
    href: 'mailto:info@imogi.id',
  },
  {
    icon: MessageCircle,
    label: 'WHATSAPP',
    value: '+62 812 3456 7890',
    detail: 'Chat langsung dengan tim sales',
    color: 'bg-emerald-500',
    href: 'https://wa.me/6281234567890',
  },
];

export default function ContactSection() {
  return (
    <section id="kontak" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Hubungi Kami
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Siap membantu Anda memulai transformasi digital. Hubungi kami melalui channel yang paling nyaman untuk Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contacts.map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.label === 'WHATSAPP' ? '_blank' : undefined}
                rel={contact.label === 'WHATSAPP' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg hover:border-imogi-secondary/30 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${contact.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  {contact.label}
                </div>
                <div className="font-semibold text-foreground mb-1">{contact.value}</div>
                <div className="text-sm text-muted-foreground">{contact.detail}</div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
