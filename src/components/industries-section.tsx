"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Factory,
  ShoppingCart,
  Truck,
  Package,
  Building,
  Heart,
  GraduationCap,
  Landmark,
} from "lucide-react";

const industries = [
  { icon: Factory, name: "Manufacturing" },
  { icon: ShoppingCart, name: "Retail" },
  { icon: Truck, name: "Distribution" },
  { icon: Package, name: "Logistics" },
  { icon: Building, name: "Construction" },
  { icon: Heart, name: "Healthcare" },
  { icon: GraduationCap, name: "Education" },
  { icon: Landmark, name: "Financial Services" },
];

export default function IndustriesSection() {
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
            Industries
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Industries We Serve
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Our expertise spans across multiple industries, delivering tailored
            solutions for each sector.
          </p>
          <div className="mt-4 w-16 h-1 bg-imogi-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group bg-card rounded-xl p-6 border border-border text-center hover:shadow-lg hover:border-imogi-secondary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-imogi-secondary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-imogi-secondary/20 group-hover:scale-110 transition-all duration-300">
                <industry.icon className="h-7 w-7 text-imogi-secondary" />
              </div>
              <h3 className="font-medium text-foreground text-sm md:text-base">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
