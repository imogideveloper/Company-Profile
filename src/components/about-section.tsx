"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, FolderOpen, Calendar, Award } from "lucide-react";

const stats = [
  { icon: FolderOpen, value: 50, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 30, suffix: "+", label: "Satisfied Clients" },
  { icon: Calendar, value: 5, suffix: "+", label: "Years Experience" },
  { icon: Award, value: 20, suffix: "+", label: "Team Members" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-imogi-secondary">
      {count}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-muted/30"
    >
      <div ref={ref} className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-imogi-secondary font-semibold text-sm uppercase tracking-wider">
            About Us
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Your Trusted Technology Partner
          </h2>
          <div className="mt-4 w-16 h-1 bg-imogi-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Imogi Indonesia is a leading software house based in Jakarta, dedicated
              to empowering businesses through innovative technology solutions. With
              years of experience in custom software development, ERP implementation,
              and digital transformation, we deliver solutions that streamline
              operations and drive growth.
            </p>
            <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              Our team of skilled developers, designers, and consultants work closely
              with clients to understand their unique challenges and craft tailored
              solutions that exceed expectations. From startups to enterprise
              organizations, we are committed to building technology that makes a real
              difference.
            </p>

            {/* Tech illustration */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {["I", "T", "S", "D"].map((letter, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background flex items-center justify-center text-xs font-bold text-white"
                    style={{
                      backgroundColor: i === 0 ? "#0F172A" : i === 1 ? "#2563EB" : i === 2 ? "#38BDF8" : "#1E293B",
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Innovation</span>,{" "}
                <span className="font-semibold text-foreground">Trust</span>,{" "}
                <span className="font-semibold text-foreground">Solutions</span>,{" "}
                <span className="font-semibold text-foreground">Delivery</span>
              </p>
            </div>
          </motion.div>

          {/* Right: Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4 md:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-lg hover:border-imogi-secondary/30 transition-all duration-300"
              >
                <stat.icon className="h-8 w-8 text-imogi-secondary mx-auto mb-3" />
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
