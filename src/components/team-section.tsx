'use client';

import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  title: string;
  initials: string;
  color: string;
  bio: string;
}

const team: TeamMember[] = [
  {
    name: 'Danny Audian Pratama',
    title: 'Founder',
    initials: 'DA',
    color: 'bg-imogi-secondary',
    bio: 'Visionaris di balik IMOGI dengan pengalaman lebih dari 10 tahun dalam implementasi ERP untuk enterprise Indonesia.',
  },
  {
    name: 'Chandra Sudrajat',
    title: 'Operation Director',
    initials: 'CS',
    color: 'bg-imogi-accent',
    bio: 'Memastikan setiap implementasi berjalan lancar, tepat waktu, dan sesuai standar kualitas tertinggi.',
  },
  {
    name: 'Gilang Ramadhan',
    title: 'Finance Division',
    initials: 'GR',
    color: 'bg-emerald-500',
    bio: 'Mengelola keuangan dan investasi perusahaan dengan transparansi dan akuntabilitas.',
  },
  {
    name: 'Irfaan Ali',
    title: 'Marketing Division',
    initials: 'IA',
    color: 'bg-amber-500',
    bio: 'Membangun brand awareness dan menjalin hubungan strategis dengan klien dan mitra bisnis.',
  },
  {
    name: 'Abisena',
    title: 'Senior Developer',
    initials: 'AB',
    color: 'bg-purple-500',
    bio: 'Ahli teknis ERPNext dan Frappe Framework dengan kontribusi aktif di komunitas open source.',
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Tim di Balik IMOGI
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Profesional berpengalaman yang berkomitmen pada kesuksesan transformasi digital Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group text-center"
            >
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-imogi-secondary/20 transition-all duration-300">
                {/* Avatar */}
                <div className="mx-auto mb-4">
                  <div
                    className={`w-16 h-16 rounded-full ${member.color} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-white font-bold text-lg">{member.initials}</span>
                  </div>
                </div>

                {/* Info */}
                <h3 className="font-semibold text-foreground text-sm mb-0.5">
                  {member.name}
                </h3>
                <p className="text-xs text-imogi-secondary font-medium mb-3">
                  {member.title}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
