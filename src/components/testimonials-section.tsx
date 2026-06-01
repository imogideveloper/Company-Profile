"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Budi Santoso",
    company: "PT Manufaktur Indonesia",
    role: "CEO",
    quote:
      "Imogi Indonesia transformed our entire production planning process with their ERP solution. The system has reduced our operational costs by 30% and improved efficiency across all departments.",
    rating: 5,
    initials: "BS",
  },
  {
    name: "Sari Dewi",
    company: "RetailHub Group",
    role: "CTO",
    quote:
      "The POS platform built by Imogi has been a game-changer for our retail operations. Their team understood our complex requirements and delivered a solution that exceeded our expectations.",
    rating: 5,
    initials: "SD",
  },
  {
    name: "Ahmad Rizki",
    company: "LogiTrack Express",
    role: "Operations Director",
    quote:
      "Working with Imogi on our fleet management app was a seamless experience. Their agile approach meant we could adapt features quickly based on driver feedback. Highly recommended!",
    rating: 5,
    initials: "AR",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const resetInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, 5000);
  }, [next]);

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [next]);

  const handleNext = () => {
    next();
    resetInterval();
  };

  const handlePrev = () => {
    prev();
    resetInterval();
  };

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
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from the businesses we&apos;ve
            helped transform.
          </p>
          <div className="mt-4 w-16 h-1 bg-imogi-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-xl p-6 md:p-8 border border-border text-center"
            >
              <Quote className="h-10 w-10 text-imogi-secondary/20 mx-auto mb-4" />
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed italic">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-1 mt-4">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <div className="mt-6 flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-imogi-secondary flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {testimonials[current].initials}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonials[current].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[current].role},{" "}
                    {testimonials[current].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrent(i);
                    resetInterval();
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-imogi-secondary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
