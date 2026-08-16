"use client";

import React from "react";
import { ArrowRight, ChevronDown, GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Floating shapes setup
  const particles = Array.from({ length: 8 });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-navy-950 overflow-hidden"
    >
      {/* Background Image with slow zoom animation */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.35 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1920')`,
        }}
      />

      {/* Dark Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-transparent to-navy-950/30 pointer-events-none" />

      {/* Drifting Golden Crest Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted && particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-gold-500/10 bg-gradient-to-br from-gold-400/5 to-transparent"
            style={{
              width: Math.random() * 80 + 40 + "px",
              height: Math.random() * 80 + 40 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Excellence Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 shadow-[0_0_15px_rgba(212,175,55,0.1)] backdrop-blur-sm"
        >
          <Award className="w-4 h-4 text-gold-400 animate-pulse" />
          <span>25+ Years of Academic Excellence</span>
        </motion.div>

        {/* School Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-tight mb-4"
        >
          Goshen <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 text-stroke-gold">
            School
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-serif text-lg sm:text-2xl lg:text-3xl text-gold-400 tracking-wide font-medium italic mb-6"
        >
          "Quality Education, Personality Development"
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-navy-200 leading-relaxed mb-10 font-light"
        >
          Empowering young minds with knowledge, character, and confidence. Goshen School provides a state-of-the-art learning ecology that molds global citizens and leaders of tomorrow.
        </motion.p>

        {/* Interactive Call to Actions */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#about"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold tracking-wide text-white bg-navy-900 border border-gold-500/40 hover:bg-navy-800 hover:border-gold-500 shadow-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] transition-all transform hover:-translate-y-0.5"
          >
            Explore Our School
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#results"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold tracking-wide text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 border border-gold-500/20 shadow-lg hover:shadow-[0_0_25px_rgba(245,196,83,0.3)] transition-all transform hover:-translate-y-0.5"
          >
            View Board Results
          </a>
        </motion.div>
      </div>

      {/* Down Chevron indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-xs tracking-widest text-navy-200 uppercase font-medium">Scroll down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-gold-400" />
        </motion.div>
      </div>
    </section>
  );
}
