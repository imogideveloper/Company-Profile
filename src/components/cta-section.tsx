"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-imogi-primary via-imogi-secondary/80 to-imogi-primary" />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-imogi-accent/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-imogi-secondary/15 blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div ref={ref} className="relative z-10 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Ready to Build Your Next Digital Solution?
          </h2>
          <p className="mt-6 text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
            Partner with Imogi Indonesia to create innovative software that
            empowers your business and drives growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-imogi-primary hover:bg-white/90 px-8"
              onClick={() => handleScroll("#contact")}
            >
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8"
              onClick={() => handleScroll("#contact")}
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
