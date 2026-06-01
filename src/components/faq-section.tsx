'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type Category = 'Semua' | 'Proses' | 'Biaya' | 'Teknis' | 'Garansi';

interface FaqItem {
  question: string;
  answer: string;
  category: Exclude<Category, 'Semua'>;
}

const categories: Category[] = ['Semua', 'Proses', 'Biaya', 'Teknis', 'Garansi'];

const faqItems: FaqItem[] = [
  {
    question: 'Implementasi butuh berapa lama?',
    answer: 'Rata-rata implementasi membutuhkan 8-10 minggu, tergantung kompleksitas kustomisasi dan kesiapan data. Kami akan memberikan timeline detail setelah tahap konsultasi.',
    category: 'Proses',
  },
  {
    question: 'Data lama bisa dipindah?',
    answer: 'Ya, kami menyediakan layanan data migration untuk memindahkan data dari sistem lama Anda ke ERPNext. Termasuk data master, transaksi historis, dan dokumen pendukung.',
    category: 'Proses',
  },
  {
    question: 'Karyawan gaptek bisa pakai?',
    answer: 'Tentu! ERPNext memiliki antarmuka yang intuitif dan user-friendly. Kami juga menyediakan training intensif dan dokumentasi panduan penggunaan untuk semua level pengguna.',
    category: 'Proses',
  },
  {
    question: 'Gimana cara pantau progress?',
    answer: 'Anda akan mendapat akses ke dashboard project monitoring yang real-time. Selain itu, kami juga mengadakan weekly progress meeting dan menyediakan laporan berkala.',
    category: 'Proses',
  },
  {
    question: 'Banyak cabang bisa handle?',
    answer: 'Ya, ERPNext mendukung multi-branch dan multi-company. Setiap cabang bisa memiliki konfigurasi sendiri sambil tetap terintegrasi di bawah satu sistem.',
    category: 'Proses',
  },
  {
    question: 'Kebutuhan berubah bisa disesuaikan?',
    answer: 'Karena berbasis open source, ERPNext sangat fleksibel untuk dikustomisasi. Perubahan kebutuhan bisnis dapat diakomodasi melalui custom development.',
    category: 'Proses',
  },
  {
    question: 'Ada biaya lisensi?',
    answer: 'Tidak ada! ERPNext adalah platform open source sehingga tidak ada biaya lisensi per user maupun tahunan. Anda hanya membayar biaya implementasi dan support opsional.',
    category: 'Biaya',
  },
  {
    question: 'Cocok untuk UMKM?',
    answer: 'Sangat cocok! Tanpa biaya lisensi dan dengan biaya implementasi yang terjangkau, ERPNext + IMOGI menjadi solusi ERP yang ideal untuk UMKM yang ingin digitalisasi tanpa investasi besar.',
    category: 'Biaya',
  },
  {
    question: 'Berapa investasi implementasi?',
    answer: 'Investasi bervariasi tergantung lingkup dan kompleksitas. Kami menawarkan paket yang kompetitif dimulai dari puluhan juta rupiah. Hubungi kami untuk konsultasi dan penawaran detail.',
    category: 'Biaya',
  },
  {
    question: 'Minimal berapa user?',
    answer: 'Tidak ada batasan minimal user karena ERPNext bersifat open source. Anda bisa menambah user tanpa biaya tambahan, baik 5 user maupun 500 user.',
    category: 'Biaya',
  },
  {
    question: 'Kalo berhenti datanya gimana?',
    answer: 'Data 100% milik Anda. Karena open source, Anda bisa export semua data kapan saja. Tidak ada vendor lock-in — Anda bebas menggunakan data sesuai kebutuhan.',
    category: 'Biaya',
  },
  {
    question: 'Bisa integrasi dengan sistem lama?',
    answer: 'Ya, ERPNext menyediakan REST API yang lengkap untuk integrasi dengan sistem lain. Kami juga bisa membangun custom integration sesuai kebutuhan Anda.',
    category: 'Teknis',
  },
  {
    question: 'Bisa akses dari HP?',
    answer: 'Ya, ERPNext memiliki antarmuka responsif yang bisa diakses dari browser HP. Kami juga bisa mengembangkan mobile app khusus jika diperlukan.',
    category: 'Teknis',
  },
  {
    question: 'Data aman?',
    answer: 'Keamanan data adalah prioritas kami. ERPNext menggunakan enkripsi end-to-end, role-based access control, dan audit trail. Server bisa di-host on-premise atau cloud dengan standar keamanan tinggi.',
    category: 'Teknis',
  },
  {
    question: 'Backup dan disaster recovery?',
    answer: 'Kami menyiapkan automated backup harian dan disaster recovery plan. Data disimpan di multiple location untuk memastikan ketersediaan dan keamanan data Anda.',
    category: 'Teknis',
  },
  {
    question: 'Bisa request fitur custom?',
    answer: 'Tentu! Itu keunggulan utama open source. Tim developer kami bisa membangun fitur custom yang spesifik untuk kebutuhan bisnis Anda.',
    category: 'Teknis',
  },
  {
    question: 'Bedanya apa sama implementor lain?',
    answer: 'IMOGI fokus pada 3 industri spesifik (Konstruksi, Fleet, Bengkel) dengan solusi yang sudah proven. Kami bukan sekadar menginstal software, tapi membangun solusi yang benar-benar sesuai proses bisnis Anda.',
    category: 'Teknis',
  },
  {
    question: 'Kalo ada bug siapa tanggung?',
    answer: 'Tim IMOGI bertanggung jawab atas bug yang muncul. Selama masa support, kami akan memperbaiki bug tanpa biaya tambahan. Response time maksimal 24 jam untuk bug kritis.',
    category: 'Garansi',
  },
  {
    question: 'Ada jaminan berhasil?',
    answer: 'Kami memiliki track record 100% Go-Live rate. Jika dalam proses implementasi terkendala, kami akan bekerja sama sampai sistem berjalan sesuai kesepakatan.',
    category: 'Garansi',
  },
  {
    question: 'Tim IT dikasih training?',
    answer: 'Ya, kami menyediakan training komprehensif untuk tim IT internal Anda, termasuk administrasi sistem, troubleshooting, dan custom development dasar. Training bisa dilakukan on-site atau online.',
    category: 'Garansi',
  },
];

function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-4 p-5 text-left hover:bg-muted/50 transition-colors"
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="outline" className="text-[10px] px-1.5 py-0">
              {item.category}
            </Badge>
          </div>
          <span className="text-sm font-medium text-foreground">{item.question}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 mt-1"
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-0">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('Semua');
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const filteredItems = faqItems.filter(
    (item) => activeCategory === 'Semua' || item.category === activeCategory
  );

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <p className="text-muted-foreground">
            Temukan jawaban untuk pertanyaan umum tentang layanan kami
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenItems(new Set());
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-imogi-secondary text-white shadow-md'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              {filteredItems.map((item, idx) => (
                <FaqAccordionItem
                  key={`${activeCategory}-${idx}`}
                  item={item}
                  isOpen={openItems.has(idx)}
                  onToggle={() => toggleItem(idx)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
