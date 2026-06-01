"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Database,
  Code,
  Globe,
  Smartphone,
  Network,
  Workflow,
  Cloud,
  MessageSquare,
} from "lucide-react";

const services = [
  {
    icon: Database,
    title: "ERP Solutions",
    description:
      "Design, development, customization, and implementation of ERP systems tailored to your business needs.",
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "Tailored business applications built to meet unique operational requirements and drive efficiency.",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description:
      "Modern, secure, and scalable web platforms built with the latest technologies.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications for Android and iOS with native-like performance.",
  },
  {
    icon: Network,
    title: "System Integration",
    description:
      "Connecting multiple systems into a unified ecosystem for seamless data flow and operations.",
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description:
      "Automating repetitive workflows and operational tasks to save time and reduce errors.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Cloud migration, deployment, and infrastructure services for scalable and reliable systems.",
  },
  {
    icon: MessageSquare,
    title: "IT Consulting",
    description:
      "Technology strategy and digital transformation consulting to guide your business forward.",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 lg:py-28">
      <div ref={ref} className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-imogi-secondary font-semibold text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Our Services
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive technology solutions to help your business
            thrive in the digital era.
          </p>
          <div className="mt-4 w-16 h-1 bg-imogi-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-card rounded-xl p-6 border border-border hover:shadow-xl hover:border-imogi-secondary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-imogi-secondary/10 flex items-center justify-center mb-4 group-hover:bg-imogi-secondary/20 transition-colors">
                <service.icon className="h-6 w-6 text-imogi-secondary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
