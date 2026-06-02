'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const footerLinks = {
  layanan: {
    title: 'LAYANAN',
    links: [
      { label: 'IMOGI Konstruksi', href: '#layanan' },
      { label: 'IMOGI Fleet', href: '#layanan' },
      { label: 'IMOGI Bengkel', href: '#layanan' },
      { label: 'Konsultasi ERP', href: '#kontak' },
    ],
  },
  perusahaan: {
    title: 'PERUSAHAAN',
    links: [
      { label: 'Tentang Kami', href: '#tentang' },
      { label: 'Tim Kami', href: '#tentang' },
      { label: 'Klien', href: '#klien' },
      { label: 'Karir', href: '#kontak' },
    ],
  },
  dukungan: {
    title: 'DUKUNGAN',
    links: [
      { label: 'Pusat Bantuan', href: '#faq' },
      { label: 'Dokumentasi', href: '#faq' },
      { label: 'Status Layanan', href: '#' },
      { label: 'Hubungi Kami', href: '#kontak' },
    ],
  },
  legal: {
    title: 'LEGAL',
    links: [
      { label: 'Kebijakan Privasi', href: '#' },
      { label: 'Syarat & Ketentuan', href: '#' },
      { label: 'Service Level Agreement', href: '#' },
    ],
  },
};

export default function Footer() {
  return (
    <footer
      className="pt-16 pb-8"
      style={{ background: 'linear-gradient(180deg, #0F172A 0%, #0a0f1a 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo-rmvbg.png"
                alt="IMOGI Logo"
                className="h-9 w-auto"
              />
              <div>
                <div className="font-bold text-lg text-white">IMOGI</div>
                <div className="text-[10px] text-white/50">PT. Inovasi Terbaik Bangsa</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Implementor ERPNext terpercaya untuk bisnis konstruksi, transportasi, dan otomotif Indonesia.
            </p>
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <MapPin className="w-4 h-4" />
              Jakarta, Indonesia
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Imogi Indonesia. Hak cipta dilindungi.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-white/40 hover:text-white/70 transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="text-sm text-white/40 hover:text-white/70 transition-colors">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
