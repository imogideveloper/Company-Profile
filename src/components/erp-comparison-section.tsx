'use client';

import { motion } from 'framer-motion';
import { Check, X, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ErpFeature {
  name: string;
  sap: boolean | string;
  oracle: boolean | string;
  dynamics: boolean | string;
  erpnext: boolean | string;
}

const features: ErpFeature[] = [
  { name: 'Lisensi', sap: 'Mahal (Rp 500jt+)', oracle: 'Mahal (Rp 400jt+)', dynamics: 'Sedang (Rp 300jt+)', erpnext: 'Gratis (Open Source)' },
  { name: 'Kustomisasi', sap: false, oracle: false, dynamics: false, erpnext: true },
  { name: 'Source Code', sap: false, oracle: false, dynamics: false, erpnext: true },
  { name: 'Vendor Lock-in', sap: true, oracle: true, dynamics: true, erpnext: false },
  { name: 'Biaya Implementasi', sap: 'Sangat Tinggi', oracle: 'Tinggi', dynamics: 'Sedang', erpnext: 'Terjangkau' },
  { name: 'Biaya Tahunan', sap: 'Rp 100jt+', oracle: 'Rp 80jt+', dynamics: 'Rp 60jt+', erpnext: 'Rp 0' },
  { name: 'Modul Lengkap', sap: true, oracle: true, dynamics: true, erpnext: true },
  { name: 'Dukungan Lokal', sap: false, oracle: false, dynamics: false, erpnext: true },
  { name: 'Implementasi Cepat', sap: false, oracle: false, dynamics: false, erpnext: true },
  { name: 'Skalabilitas', sap: true, oracle: true, dynamics: true, erpnext: true },
];

const erpColumns = [
  { key: 'sap', name: 'SAP Business One', highlighted: false },
  { key: 'oracle', name: 'Oracle NetSuite', highlighted: false },
  { key: 'dynamics', name: 'Microsoft Dynamics', highlighted: false },
  { key: 'erpnext', name: 'ERPNext + IMOGI', highlighted: true },
] as const;

type ErpKey = typeof erpColumns[number]['key'];

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="w-5 h-5 text-green-500 mx-auto" />
    ) : (
      <X className="w-5 h-5 text-red-400 mx-auto" />
    );
  }
  return <span className="text-sm text-foreground">{value}</span>;
}

export default function ErpComparisonSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-imogi-secondary">
            Perbandingan
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
            ERPNext vs ERP Komersial
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bandingkan fitur dan biaya ERPNext dengan solusi ERP komersial lainnya
          </p>
        </motion.div>

        {/* Desktop Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left p-4 bg-muted/50 text-sm font-semibold text-foreground w-48">
                    Fitur
                  </th>
                  {erpColumns.map((col) => (
                    <th
                      key={col.key}
                      className={`p-4 text-center text-sm font-semibold ${
                        col.highlighted
                          ? 'bg-imogi-secondary text-white'
                          : 'bg-muted/50 text-foreground'
                      }`}
                    >
                      <div className="flex flex-col items-center gap-1">
                        {col.highlighted && (
                          <Badge className="bg-white/20 text-white border-0 gap-1 text-[10px]">
                            <Star className="w-3 h-3" />
                            Rekomendasi
                          </Badge>
                        )}
                        {col.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, idx) => (
                  <tr
                    key={feature.name}
                    className={idx % 2 === 0 ? 'bg-card' : 'bg-muted/20'}
                  >
                    <td className="p-4 text-sm font-medium text-foreground">
                      {feature.name}
                    </td>
                    {erpColumns.map((col) => {
                      const value = feature[col.key as ErpKey];
                      return (
                        <td
                          key={col.key}
                          className={`p-4 text-center ${
                            col.highlighted ? 'bg-imogi-secondary/5' : ''
                          }`}
                        >
                          <CellValue value={value} />
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {erpColumns.map((col, colIdx) => (
            <motion.div
              key={col.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: colIdx * 0.1 }}
              className={`rounded-2xl border p-6 ${
                col.highlighted
                  ? 'border-imogi-secondary bg-imogi-secondary/5'
                  : 'border-border bg-card'
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                {col.highlighted && (
                  <Badge className="bg-imogi-secondary text-white border-0 gap-1">
                    <Star className="w-3 h-3" />
                    Rekomendasi
                  </Badge>
                )}
                <h3 className="font-semibold text-foreground">{col.name}</h3>
              </div>
              <div className="space-y-3">
                {features.map((feature) => (
                  <div key={feature.name} className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{feature.name}</span>
                    <CellValue value={feature[col.key as ErpKey]} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
