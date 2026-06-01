"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Database, Package, Users, HeartHandshake, BarChart3, Smartphone } from "lucide-react";

const solutions = [
  {
    icon: Database,
    title: "ERP System",
    description: "Integrated business management platform for streamlined operations.",
    gradient: "from-imogi-primary to-imogi-secondary",
  },
  {
    icon: Package,
    title: "Inventory Management System",
    description: "Real-time inventory tracking and warehouse management solution.",
    gradient: "from-imogi-secondary to-imogi-accent",
  },
  {
    icon: Users,
    title: "HR Management System",
    description: "Employee, payroll, and attendance management in one platform.",
    gradient: "from-imogi-primary to-imogi-accent",
  },
  {
    icon: HeartHandshake,
    title: "CRM Platform",
    description: "Customer relationship and sales management for better engagement.",
    gradient: "from-imogi-secondary to-imogi-primary",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence Dashboard",
    description: "Analytics and reporting solution for data-driven decisions.",
    gradient: "from-imogi-accent to-imogi-secondary",
  },
  {
    icon: Smartphone,
    title: "Mobile Business Applications",
    description: "Operational apps for field teams and customers on the go.",
    gradient: "from-imogi-primary to-imogi-secondary",
  },
];

export default function FeaturedSolutionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div ref={ref} className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-imogi-secondary font-semibold text-sm uppercase tracking-wider">
            Solutions
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Featured Solutions
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Discover our flagship products designed to transform business operations.
          </p>
          <div className="mt-4 w-16 h-1 bg-imogi-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-xl p-6 border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${solution.gradient} flex items-center justify-center mb-4`}
              >
                <solution.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">
                {solution.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {solution.description}
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center text-sm font-medium text-imogi-secondary hover:text-imogi-accent transition-colors"
              >
                Learn More
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
