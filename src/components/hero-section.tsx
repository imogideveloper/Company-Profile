"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-imogi-primary via-imogi-primary/95 to-imogi-secondary/30" />

      {/* Dot grid pattern */}
      <div className="absolute inset-0 dot-grid opacity-60" />

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-imogi-secondary/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-imogi-accent/15 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-imogi-secondary/20 border border-imogi-secondary/30 text-imogi-accent text-sm font-medium mb-6">
                Software House Indonesia
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Building Digital Solutions That Drive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-imogi-accent to-imogi-secondary">
                Business Growth
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-base md:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0"
            >
              Imogi Indonesia helps organizations transform their business
              processes through custom software development, ERP solutions, and
              innovative digital technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-imogi-secondary hover:bg-imogi-secondary/90 text-white px-8"
                onClick={() => handleScroll("#contact")}
              >
                Discuss Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-400 text-white hover:bg-white/10 px-8"
                onClick={() => handleScroll("#services")}
              >
                View Our Services
              </Button>
            </motion.div>
          </div>

          {/* Right: Floating Dashboard Elements */}
          <div className="hidden lg:block relative">
            <div className="relative w-full h-[480px]">
              {/* Main Dashboard Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute top-0 left-0 w-80 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-4 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white text-sm font-medium">Revenue Dashboard</span>
                  <span className="text-imogi-accent text-xs">Live</span>
                </div>
                <div className="flex items-end gap-1.5 h-24">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-sm bg-gradient-to-t from-imogi-secondary to-imogi-accent"
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.6, delay: 0.8 + i * 0.05 }}
                    />
                  ))}
                </div>
                <div className="mt-3 flex justify-between text-xs text-slate-400">
                  <span>Jan</span>
                  <span>Jun</span>
                  <span>Dec</span>
                </div>
              </motion.div>

              {/* Code Snippet Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute top-8 right-0 w-64 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-4 shadow-2xl"
              >
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="space-y-1.5 font-mono text-xs">
                  <div>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-300">solution</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="text-yellow-300">await</span>{" "}
                    <span className="text-green-300">imogi</span>
                    <span className="text-white">.</span>
                    <span className="text-blue-300">build</span>
                    <span className="text-white">({"{"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-300">erp</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-orange-300">true</span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-blue-300">cloud</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-orange-300">true</span>
                  </div>
                  <div>
                    <span className="text-white">{"}"});</span>
                  </div>
                </div>
              </motion.div>

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute bottom-0 left-8 w-72 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-4 shadow-2xl"
              >
                <span className="text-white text-sm font-medium">Performance</span>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {[
                    { label: "Uptime", value: "99.9%" },
                    { label: "Speed", value: "< 200ms" },
                    { label: "Users", value: "10K+" },
                    { label: "Satisfaction", value: "98%" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center p-2 rounded-lg bg-white/5">
                      <div className="text-imogi-accent text-sm font-bold">{stat.value}</div>
                      <div className="text-slate-400 text-xs mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Mini Table Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="absolute bottom-12 right-4 w-56 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-3 shadow-2xl"
              >
                <span className="text-white text-xs font-medium">Active Projects</span>
                <div className="mt-2 space-y-1.5">
                  {["ERP Module", "CRM Portal", "Mobile App"].map((item, i) => (
                    <div key={i} className="flex items-center justify-between text-xs">
                      <span className="text-slate-300">{item}</span>
                      <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                        i === 0 ? "bg-green-500/20 text-green-400" :
                        i === 1 ? "bg-imogi-secondary/20 text-imogi-accent" :
                        "bg-yellow-500/20 text-yellow-400"
                      }`}>
                        {i === 0 ? "Active" : i === 1 ? "In Progress" : "Review"}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <button
          onClick={() => handleScroll("#about")}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs">Scroll Down</span>
          <ArrowDown className="h-4 w-4" />
        </button>
      </motion.div>
    </section>
  );
}
