'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WA_NUMBER = '6285311552401';

const solutionLabels: Record<string, string> = {
  konstruksi: 'ERPNext untuk Konstruksi',
  fleet: 'ERPNext untuk Fleet Management',
  bengkel: 'ERPNext untuk Bengkel',
  custom: 'Kustomisasi Lainnya',
};

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState({
    nama: '',
    perusahaan: '',
    email: '',
    telepon: '',
    solusi: '',
    pesan: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const buildMessage = () => {
    const solusiText = solutionLabels[form.solusi] || '-';
    return `Halo, saya ingin konsultasi mengenai layanan IMOGI.

*Nama:* ${form.nama || '-'}
*Perusahaan:* ${form.perusahaan || '-'}
*Email:* ${form.email || '-'}
*Telepon:* ${form.telepon || '-'}
*Solusi:* ${solusiText}
*Pesan:* ${form.pesan || '-'}

Terima kasih.`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(buildMessage())}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleEmailSubmit = () => {
    const solusiText = solutionLabels[form.solusi] || '-';
    const subject = encodeURIComponent(`Konsultasi ERPNext - ${form.perusahaan || form.nama || 'Calon Klien'}`);
    const body = encodeURIComponent(
      `Nama: ${form.nama || '-'}\nPerusahaan: ${form.perusahaan || '-'}\nEmail: ${form.email || '-'}\nTelepon: ${form.telepon || '-'}\nSolusi: ${solusiText}\n\nPesan:\n${form.pesan || '-'}`
    );
    window.open(`mailto:imogi.indonesia@gmail.com?subject=${subject}&body=${body}`, '_self');
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-300 focus:outline-none focus:border-imogi-secondary focus:ring-1 focus:ring-imogi-secondary/50 transition-all text-sm [&:not(:placeholder-shown)]:bg-slate-50 [&:not(:placeholder-shown)]:border-slate-300 [&:-webkit-autofill]:shadow-[inset_0_0_0_1000px_rgb(248,250,252)] [&:-webkit-autofill]:[-webkit-text-fill-color:rgb(30,41,59)]';

  return (
    <section
      id="kontak"
      className="py-10 md:py-14 relative overflow-hidden bg-white"
    >
      {/* Logo watermark */}
      <div className="absolute inset-0 flex items-start justify-center pt-4 pointer-events-none select-none">
        <img src="/logo.png" alt="" className="w-96 h-96 object-contain opacity-[0.04]" />
      </div>

      {/* Geometric triangles — bottom right */}
      <div className="absolute bottom-0 right-0 pointer-events-none select-none overflow-hidden w-80 h-80">
        <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <polygon points="320,320 160,320 320,160" fill="#CBD5E1" fillOpacity="0.4" />
          <polygon points="320,320 220,320 320,220" fill="#94A3B8" fillOpacity="0.3" />
          <polygon points="320,320 270,320 320,270" fill="#64748B" fillOpacity="0.2" />
          <polygon points="320,160 200,320 320,320" fill="#E2E8F0" fillOpacity="0.3" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — Heading & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 leading-tight">
              Konsultasi Gratis ERPNext
              <br />
              untuk Bisnis Anda
            </h2>
            <p className="text-slate-500 text-lg mb-10">
              Dapatkan analisis kebutuhan dan rekomendasi solusi ERP dari tim ahli kami.
              Tanpa komitmen, tanpa biaya.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-slate-400 text-sm pl-1">
                <MapPin className="w-4 h-4" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm"
          >
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-500 mb-1.5">Nama Lengkap</label>
                  <input
                    name="nama"
                    type="text"
                    value={form.nama}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-500 mb-1.5">Perusahaan</label>
                  <input
                    name="perusahaan"
                    type="text"
                    value={form.perusahaan}
                    onChange={handleChange}
                    placeholder="PT. Contoh"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-500 mb-1.5">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-500 mb-1.5">No. Telepon</label>
                  <input
                    name="telepon"
                    type="tel"
                    value={form.telepon}
                    onChange={handleChange}
                    placeholder="+62 812 3456 7890"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-slate-500 mb-1.5">Solusi yang Diminati</label>
                <select
                  name="solusi"
                  value={form.solusi}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border transition-all text-sm appearance-none focus:outline-none focus:border-imogi-secondary focus:ring-1 focus:ring-imogi-secondary/50 ${form.solusi ? 'bg-slate-50 border-slate-300 text-slate-800' : 'bg-white border-slate-200 text-slate-400'}`}
                >
                  <option value="">Pilih solusi...</option>
                  <option value="konstruksi">ERPNext untuk Konstruksi</option>
                  <option value="fleet">ERPNext untuk Fleet Management</option>
                  <option value="bengkel">ERPNext untuk Bengkel</option>
                  <option value="custom">Kustomisasi Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-slate-500 mb-1.5">Pesan</label>
                <textarea
                  name="pesan"
                  rows={4}
                  value={form.pesan}
                  onChange={handleChange}
                  placeholder="Ceritakan kebutuhan Anda..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-300 focus:outline-none focus:border-imogi-secondary focus:ring-1 focus:ring-imogi-secondary/50 transition-all text-sm resize-none [&:not(:placeholder-shown)]:bg-slate-50 [&:not(:placeholder-shown)]:border-slate-300"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white gap-2 h-12 rounded-xl text-sm font-semibold"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  WhatsApp
                </Button>
                <Button
                  type="button"
                  size="lg"
                  onClick={handleEmailSubmit}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white gap-2 h-12 rounded-xl text-sm font-semibold"
                >
                  <Mail className="w-5 h-5" />
                  Email
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
