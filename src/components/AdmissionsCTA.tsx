"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight, PhoneCall, GraduationCap } from "lucide-react";

export default function AdmissionsCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="admissions"
      className="relative py-24 bg-navy-950 overflow-hidden flex items-center justify-center"
    >
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1920')`,
        }}
      />
      {/* Dark Navy Premium Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent pointer-events-none" />

      {/* Decorative vectors */}
      <div className="absolute top-1/2 left-[-100px] w-96 h-96 bg-gold-500/5 rounded-full filter blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-navy-800/30 rounded-full filter blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="border border-gold-500/20 rounded-3xl p-8 sm:p-12 lg:p-16 bg-navy-900/50 backdrop-blur-md shadow-[0_20px_50px_rgba(11,25,44,0.3)]"
        >
          {/* Cap Icon Badge */}
          <div className="inline-flex w-14 h-14 rounded-full bg-gold-500/10 border border-gold-500/30 items-center justify-center mb-6">
            <GraduationCap className="w-7 h-7 text-gold-400" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            Shape Your Child's Future With Us
          </h2>

          {/* Support Text */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-navy-200 leading-relaxed font-light mb-10">
            Join a vibrant community where curiosity is encouraged, academic excellence is celebrated, and every single student is given the supportive opportunity to shine. Admission registration is currently open for the academic cycle 2026–27.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold tracking-wide text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 shadow-md hover:shadow-[0_0_20px_rgba(245,196,83,0.3)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Apply for Admission</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold tracking-wide text-white bg-navy-950 border border-navy-800 hover:bg-navy-900 transition-all shadow-md transform hover:-translate-y-0.5"
            >
              <PhoneCall className="w-4 h-4 text-gold-400" />
              <span>Talk to Admissions Desk</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
