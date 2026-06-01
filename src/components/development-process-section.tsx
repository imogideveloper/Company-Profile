"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Search,
  BarChart3,
  PenTool,
  Code,
  ShieldCheck,
  Rocket,
  Headphones,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery & Consultation",
    description: "Understanding your business needs, goals, and current challenges.",
  },
  {
    icon: BarChart3,
    number: "02",
    title: "Business Analysis",
    description: "Detailed analysis of requirements and process mapping.",
  },
  {
    icon: PenTool,
    number: "03",
    title: "System Design",
    description: "Architecture design and UI/UX planning for optimal user experience.",
  },
  {
    icon: Code,
    number: "04",
    title: "Development",
    description: "Agile development with iterative sprints and regular reviews.",
  },
  {
    icon: ShieldCheck,
    number: "05",
    title: "Testing & QA",
    description: "Comprehensive testing to ensure quality, security, and performance.",
  },
  {
    icon: Rocket,
    number: "06",
    title: "Deployment",
    description: "Seamless deployment with minimal downtime and data migration.",
  },
  {
    icon: Headphones,
    number: "07",
    title: "Maintenance & Support",
    description: "Ongoing support, updates, and continuous improvement.",
  },
];

export default function DevelopmentProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28">
      <div ref={ref} className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-imogi-secondary font-semibold text-sm uppercase tracking-wider">
            Process
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Our Development Process
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A structured, proven methodology that ensures quality delivery from
            concept to launch and beyond.
          </p>
          <div className="mt-4 w-16 h-1 bg-imogi-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-border" />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="absolute top-16 left-0 right-0 h-0.5 bg-imogi-secondary origin-left"
            />
            <div className="grid grid-cols-7 gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.12 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative z-10 w-12 h-12 rounded-full bg-imogi-secondary flex items-center justify-center mb-4 ring-4 ring-background">
                    <step.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xs font-bold text-imogi-secondary mb-1">
                    STEP {step.number}
                  </span>
                  <h3 className="font-semibold text-foreground text-sm mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: Vertical Timeline */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-border" />
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="absolute top-0 bottom-0 left-6 w-0.5 bg-imogi-secondary origin-top"
            />
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="relative z-10 w-12 h-12 shrink-0 rounded-full bg-imogi-secondary flex items-center justify-center ring-4 ring-background">
                    <step.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="pt-1">
                    <span className="text-xs font-bold text-imogi-secondary">
                      STEP {step.number}
                    </span>
                    <h3 className="font-semibold text-foreground mt-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
