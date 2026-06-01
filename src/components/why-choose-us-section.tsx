"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";

const advantages = [
  {
    title: "Experienced Development Team",
    description:
      "Our team brings years of industry experience and technical expertise to every project.",
  },
  {
    title: "Agile Development Methodology",
    description:
      "We follow agile practices for flexible, iterative development and rapid delivery.",
  },
  {
    title: "Business-Oriented Solutions",
    description:
      "Every solution we build is designed to solve real business problems and deliver ROI.",
  },
  {
    title: "Scalable Architecture",
    description:
      "Our systems are built to grow with your business, from startup to enterprise scale.",
  },
  {
    title: "High Security Standards",
    description:
      "We implement industry-leading security practices to protect your data and systems.",
  },
  {
    title: "Dedicated Support",
    description:
      "Our support team is always available to ensure your systems run smoothly 24/7.",
  },
  {
    title: "Transparent Communication",
    description:
      "We maintain open, honest communication throughout every project lifecycle.",
  },
  {
    title: "Long-Term Partnership Approach",
    description:
      "We build lasting relationships, supporting your technology needs as your business evolves.",
  },
];

export default function WhyChooseUsSection() {
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
            Why Us
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Why Choose Imogi Indonesia
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We combine technical excellence with business understanding to deliver
            solutions that truly make a difference.
          </p>
          <div className="mt-4 w-16 h-1 bg-imogi-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-card rounded-xl p-6 border border-border hover:shadow-lg hover:border-imogi-secondary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-imogi-secondary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground text-sm md:text-base mb-1">
                    {advantage.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
