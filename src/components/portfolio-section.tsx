"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "PT Manufaktur Indonesia ERP",
    category: "ERP",
    description:
      "Full-scale ERP implementation for a leading manufacturing company, covering production planning, inventory, and financial management.",
    gradient: "from-imogi-primary via-imogi-secondary to-imogi-accent",
  },
  {
    title: "RetailHub POS Platform",
    category: "Web App",
    description:
      "Cloud-based point-of-sale and inventory management platform for a nationwide retail chain with 200+ outlets.",
    gradient: "from-imogi-secondary via-imogi-accent to-imogi-primary",
  },
  {
    title: "LogiTrack Fleet Management",
    category: "Mobile App",
    description:
      "Real-time fleet tracking and logistics management mobile app with GPS integration and route optimization.",
    gradient: "from-imogi-accent via-imogi-secondary to-imogi-primary",
  },
  {
    title: "HealthCare Management System",
    category: "Custom Software",
    description:
      "Comprehensive hospital management system with patient records, billing, and appointment scheduling modules.",
    gradient: "from-imogi-primary via-imogi-accent to-imogi-secondary",
  },
  {
    title: "FinancePro CRM",
    category: "Web App",
    description:
      "Customer relationship management platform for financial services with compliance tracking and reporting.",
    gradient: "from-imogi-secondary via-imogi-primary to-imogi-accent",
  },
  {
    title: "EduConnect Learning Platform",
    category: "Web App",
    description:
      "Online learning management system with live classes, assessments, and student progress analytics.",
    gradient: "from-imogi-accent via-imogi-primary to-imogi-secondary",
  },
];

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-muted/30">
      <div ref={ref} className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-imogi-secondary font-semibold text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Our Portfolio
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Explore our successful projects that have helped businesses achieve
            their digital transformation goals.
          </p>
          <div className="mt-4 w-16 h-1 bg-imogi-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300"
            >
              {/* Gradient placeholder image */}
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
              >
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-4 w-20 h-2 bg-white/40 rounded" />
                  <div className="absolute top-8 left-4 w-14 h-2 bg-white/30 rounded" />
                  <div className="absolute top-14 left-4 right-4 bottom-4 bg-white/10 rounded" />
                  <div className="absolute bottom-8 right-6 w-12 h-8 bg-white/20 rounded" />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-imogi-primary/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white text-imogi-primary rounded-lg font-medium text-sm hover:bg-white/90 transition-colors">
                    View Project
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-5">
                <Badge
                  variant="secondary"
                  className="mb-2 bg-imogi-secondary/10 text-imogi-secondary hover:bg-imogi-secondary/20"
                >
                  {project.category}
                </Badge>
                <h3 className="font-semibold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
