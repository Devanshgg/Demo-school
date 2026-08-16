"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Award, CheckCircle, GraduationCap } from "lucide-react";

// Count Up component that triggers when in view
function StatCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const duration = 2; // seconds
      const totalMiliseconds = duration * 1000;
      const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);
      
      const timer = setInterval(() => {
        start += Math.ceil(end / (totalMiliseconds / incrementTime));
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-serif text-4xl sm:text-5xl font-bold text-navy-950">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-navy-50 rounded-full filter blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid */}
        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-20">
          {/* Left Column: Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-gold-500/20 shadow-[0_20px_50px_rgba(11,25,44,0.1)] group">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800"
                alt="Goshen School Campus"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent pointer-events-none" />
              
              {/* Overlaid Badging */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl glass-card-dark text-white border border-gold-500/30">
                <h4 className="font-serif text-gold-400 text-lg font-bold">Goshen School</h4>
                <p className="text-xs text-navy-200 mt-1">Established in 1999 • Affiliated with Central Board of Secondary Education (CBSE), Affiliation No. 3530276</p>
              </div>
            </div>

            {/* Backing decorative frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-gold-500 rounded-2xl -z-0 pointer-events-none opacity-40 translate-x-2 translate-y-2" />
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="flex items-center gap-2 text-gold-600 font-semibold tracking-wider uppercase text-sm">
              <span className="w-8 h-[2px] bg-gold-500" /> About Our School
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
              Building Tomorrow's Leaders
            </h2>

            <p className="text-navy-800 leading-relaxed font-light">
              Goshen School is committed to providing quality education with an emphasis on the personality development of the student.
            </p>

            <p className="text-navy-800 leading-relaxed font-light">
              We aim to provide value-based quality education and opportunities to our students so that they turn into responsible, competent, confident, and holistic youths.
            </p>

            {/* Micro Feature Bullet Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="flex gap-3 items-center">
                <CheckCircle className="w-5 h-5 text-gold-500 shrink-0" />
                <span className="text-sm font-medium text-navy-900">Holistic Character Development</span>
              </div>
              <div className="flex gap-3 items-center">
                <CheckCircle className="w-5 h-5 text-gold-500 shrink-0" />
                <span className="text-sm font-medium text-navy-900">Advanced Digital Classrooms</span>
              </div>
              <div className="flex gap-3 items-center">
                <CheckCircle className="w-5 h-5 text-gold-500 shrink-0" />
                <span className="text-sm font-medium text-navy-900">National-Level Sports Coaches</span>
              </div>
              <div className="flex gap-3 items-center">
                <CheckCircle className="w-5 h-5 text-gold-500 shrink-0" />
                <span className="text-sm font-medium text-navy-900">Robotics & Innovation Hub</span>
              </div>
            </div>

            <div className="mt-4">
              <a
                href="#why-choose-us"
                className="inline-flex items-center justify-center px-6 py-3 border border-navy-900 text-navy-950 font-semibold rounded-full hover:bg-navy-950 hover:text-white transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 border-t border-navy-100">
          <div className="flex flex-col items-center text-center">
            <StatCounter value={25} suffix="+" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-gold-600 uppercase mt-2">
              Years of Excellence
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <StatCounter value={900} suffix="+" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-gold-600 uppercase mt-2">
              Students Enrolled
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <StatCounter value={45} suffix="+" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-gold-600 uppercase mt-2">
              Faculty Members
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <StatCounter value={95} suffix="%" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-gold-600 uppercase mt-2">
              Board Exam Results
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
