'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Building2,
  Truck,
  Wrench,
  X,
  Check,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  image: string;
  color: string;
  bgColor: string;
  borderColor: string;
  hoverBgColor: string;
  badge: string;
  problems: string[];
  solutions: string[];
  flow: string[];
}

const products: Product[] = [
  {
    id: 'konstruksi',
    name: 'IMOGI Konstruksi',
    subtitle: 'ERPNext untuk Manajemen Proyek',
    description:
      'Implementasi ERPNext yang dikustomisasi untuk industri konstruksi — menghubungkan seluruh proses proyek dari perencanaan RAB, penjadwalan, pengadaan material, hingga serah terima dan billing.',
    icon: Building2,
    image: '/kontruksi.png',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    hoverBgColor: 'hover:bg-amber-50',
    badge: 'Konstruksi',
    problems: [
      'RAB sering salah hitung',
      'Material boros & tidak terkontrol',
      'Progress claim tertunda',
      'Laporan proyek manual',
    ],
    solutions: [
      'RAB & Budgeting otomatis',
      'Penjadwalan & Gantt chart',
      'Pengadaan material & vendor',
      'Progress claim & billing',
      'Laporan proyek real-time',
    ],
    flow: ['RAB', 'Pengadaan', 'Progress', 'Claim', 'Billing'],
  },
  {
    id: 'fleet',
    name: 'IMOGI Fleet',
    subtitle: 'ERPNext untuk Fleet Management',
    description:
      'ERPNext yang dikustomisasi untuk mengelola armada towing & rental — tracking GPS real-time, scheduling dispatch, kontrol BBM, dan maintenance reminder otomatis.',
    icon: Truck,
    image: '/fleet.jpeg',
    color: 'text-imogi-secondary',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    hoverBgColor: 'hover:bg-blue-50',
    badge: 'Transportasi',
    problems: [
      'Dispatch pakai WhatsApp',
      'Armada nganggur tanpa tracking',
      'BBM boros & tidak terkontrol',
      'Maintenance terlambat',
    ],
    solutions: [
      'GPS tracking real-time',
      'Dispatch & scheduling otomatis',
      'Kontrol BBM & operasional',
      'Maintenance reminder',
      'Laporan utilisasi armada',
    ],
    flow: ['Order', 'Dispatch', 'Tracking', 'Complete', 'Invoice'],
  },
  {
    id: 'bengkel',
    name: 'IMOGI Bengkel',
    subtitle: 'ERPNext untuk Workshop Management',
    description:
      'ERPNext yang dikustomisasi untuk operasional bengkel — antrian digital, inventory suku cadang, manajemen mekanik, billing otomatis, hingga riwayat servis pelanggan.',
    icon: Wrench,
    image: '/bengkel.jpeg',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    hoverBgColor: 'hover:bg-emerald-50',
    badge: 'Otomotif',
    problems: [
      'Suku cadang sering hilang',
      'Mekanik nunggu lama',
      'Estimasi biaya tidak transparan',
      'Riwayat servis tercecer',
    ],
    solutions: [
      'Antrian & service order digital',
      'Inventory suku cadang otomatis',
      'Manajemen mekanik & workload',
      'Billing & estimasi biaya',
      'Riwayat servis pelanggan',
    ],
    flow: ['Antrian', 'Estimasi', 'Servis', 'Billing', 'Riwayat'],
  },

];

function ProductCard({ product, index }: { product: Product; index: number }) {
  const Icon = product.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group"
    >
      <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-imogi-secondary/5 transition-all duration-500">
        <div className="flex flex-col lg:flex-row">
          {/* Left - Full image with overlay */}
          <div className="lg:w-80 relative w-full h-56 lg:h-auto overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 320px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-8 h-8 rounded-lg ${product.bgColor} dark:bg-white/10 flex items-center justify-center shadow`}>
                  <Icon className={`w-4 h-4 ${product.color}`} />
                </div>
                <Badge
                  variant="outline"
                  className="border-white/30 text-white bg-white/10 backdrop-blur-sm"
                >
                  {product.badge}
                </Badge>
              </div>
              <h3 className="text-xl font-bold text-white">
                {product.name}
              </h3>
              <p className="text-sm text-white/80 mt-0.5">
                {product.subtitle}
              </p>
            </div>
          </div>

          {/* Right - Content area */}
          <div className="flex-1 p-6 lg:p-8">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Problems & Solutions */}
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              {/* Problems */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <X className="w-3 h-3 text-red-500" />
                  </div>
                  Masalah Umum
                </h4>
                <ul className="space-y-2">
                  {product.problems.map((problem) => (
                    <li
                      key={problem}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <X className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <div className="w-5 h-5 rounded bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-500" />
                  </div>
                  Solusi ERPNext
                </h4>
                <ul className="space-y-2">
                  {product.solutions.map((solution) => (
                    <li
                      key={solution}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Process Flow */}
            <div className="bg-muted/50 rounded-xl p-4 mb-6">
              <div className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                Alur Proses
              </div>
              <div className="flex items-center gap-1 overflow-x-auto pb-1">
                {product.flow.map((step, idx) => (
                  <div key={step} className="flex items-center shrink-0">
                    <div className={`px-3 py-1.5 rounded-lg text-xs font-medium ${product.bgColor} ${product.color} border ${product.borderColor}`}>
                      {step}
                    </div>
                    {idx < product.flow.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-muted-foreground/40 mx-0.5 shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Button
              variant="outline"
              className={`${product.borderColor} ${product.color} ${product.hoverBgColor} gap-1`}
              asChild
            >
              <a href="#kontak">
                Lihat Produk
                <ChevronRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductsSection() {
  return (
    <section id="layanan" className="py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <Badge variant="outline" className="mb-4">
            PRODUK KAMI
          </Badge>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Solusi ERP untuk Setiap Industri
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Implementasi ERPNext yang dikustomisasi khusus untuk kebutuhan industri Anda
          </p>
        </motion.div>

        <div className="space-y-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
