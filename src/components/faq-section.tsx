'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

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
    answer: 'Rata-rata 8-10 minggu, tergantung kompleksitas kustomisasi dan kesiapan data.',
    category: 'Proses',
  },
  {
    question: 'Data lama bisa dipindah?',
    answer: 'Ya, kami menyediakan layanan data migration termasuk data master, transaksi historis, dan dokumen pendukung.',
    category: 'Proses',
  },
  {
    question: 'Karyawan gaptek bisa pakai?',
    answer: 'Tentu! ERPNext intuitif dan user-friendly. Kami juga menyediakan training intensif dan dokumentasi.',
    category: 'Proses',
  },
  {
    question: 'Ada biaya lisensi?',
    answer: 'Tidak ada! ERPNext open source, tidak ada biaya lisensi per user maupun tahunan.',
    category: 'Biaya',
  },
  {
    question: 'Cocok untuk UMKM?',
    answer: 'Sangat cocok! Tanpa biaya lisensi dan implementasi terjangkau, ideal untuk UMKM.',
    category: 'Biaya',
  },
  {
    question: 'Berapa investasi implementasi?',
    answer: 'Bervariasi tergantung lingkup. Dimulai dari puluhan juta rupiah. Hubungi kami untuk penawaran detail.',
    category: 'Biaya',
  },
  {
    question: 'Bisa integrasi dengan sistem lama?',
    answer: 'Ya, ERPNext menyediakan REST API lengkap. Kami juga bisa membangun custom integration.',
    category: 'Teknis',
  },
  {
    question: 'Bisa akses dari HP?',
    answer: 'Ya, antarmuka responsif yang bisa diakses dari browser HP. Mobile app khusus juga bisa dikembangkan.',
    category: 'Teknis',
  },
  {
    question: 'Data aman?',
    answer: 'ERPNext menggunakan enkripsi end-to-end, role-based access control, dan audit trail.',
    category: 'Teknis',
  },
  {
    question: 'Kalo ada bug siapa tanggung?',
    answer: 'Tim IMOGI bertanggung jawab. Selama masa support, perbaikan bug tanpa biaya tambahan.',
    category: 'Garansi',
  },
  {
    question: 'Ada jaminan berhasil?',
    answer: 'Track record 100% Go-Live rate. Kami bekerja sama sampai sistem berjalan sesuai kesepakatan.',
    category: 'Garansi',
  },
  {
    question: 'Tim IT dikasih training?',
    answer: 'Ya, training komprehensif termasuk administrasi sistem, troubleshooting, dan custom development dasar.',
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
    <div className={`border rounded-xl overflow-hidden transition-colors ${isOpen ? 'border-imogi-secondary/30 bg-imogi-secondary/5' : 'border-border'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 p-4 text-left hover:bg-muted/30 transition-colors"
      >
        <span className="text-sm font-medium text-foreground flex-1">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown className={`w-4 h-4 transition-colors ${isOpen ? 'text-imogi-secondary' : 'text-muted-foreground'}`} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4">
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

  // Split into 2 columns
  const midPoint = Math.ceil(filteredItems.length / 2);
  const leftItems = filteredItems.slice(0, midPoint);
  const rightItems = filteredItems.slice(midPoint);

  return (
    <section id="faq" className="py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* FAQ Items - 2 Columns */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
          >
            {/* Left Column */}
            <div className="space-y-3">
              {leftItems.map((item, idx) => (
                <FaqAccordionItem
                  key={`l-${activeCategory}-${idx}`}
                  item={item}
                  isOpen={openItems.has(idx)}
                  onToggle={() => toggleItem(idx)}
                />
              ))}
            </div>
            {/* Right Column */}
            <div className="space-y-3">
              {rightItems.map((item, idx) => (
                <FaqAccordionItem
                  key={`r-${activeCategory}-${idx}`}
                  item={item}
                  isOpen={openItems.has(midPoint + idx)}
                  onToggle={() => toggleItem(midPoint + idx)}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}