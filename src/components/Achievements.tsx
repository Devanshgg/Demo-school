"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Trophy, Compass, Star, Sparkles } from "lucide-react";

const achievements = [
  {
    year: "2025",
    title: "Best Academic Performance Award",
    description: "Honored by the National Council of Secondary Education for producing the district's highest average CBSE scores and 90%+ merit listings.",
    icon: Award,
    color: "from-gold-400 to-gold-500",
  },
  {
    year: "2024",
    title: "Inter-School Sports Champions",
    description: "Lifted the district-wide Athletic and Team Sports Shield, securing 12 Gold Medals in track, football, and synthetic court volleyball finals.",
    icon: Trophy,
    color: "from-navy-800 to-navy-950",
  },
  {
    year: "2023",
    title: "100% Science Fair Participation",
    description: "Accredited with the Innovation in Pedagogy seal for ensuring every student designed and showcased science projects in regional tech galleries.",
    icon: Compass,
    color: "from-gold-400 to-gold-500",
  },
  {
    year: "2022",
    title: "Excellence in Education Award",
    description: "Awarded by the State Ministry of Digital Solutions for successfully rolling out full-module classroom ERP frameworks and interactive screen systems.",
    icon: Star,
    color: "from-navy-800 to-navy-950",
  },
  {
    year: "2021",
    title: "District-Level Debate Champions",
    description: "Secured first and second runner-up titles at the Inter-Academy Forensics and Debate League addressing technology ethics.",
    icon: Sparkles,
    color: "from-gold-400 to-gold-500",
  },
];

export default function Achievements() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24 bg-white relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-navy-50 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gold-600 font-semibold tracking-wider uppercase text-sm inline-flex items-center gap-2">
            <span className="w-6 h-[2px] bg-gold-500" /> Milestone Journey <span className="w-6 h-[2px] bg-gold-500" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 mt-3 leading-tight">
            Our Achievements Timeline
          </h2>
          <p className="text-navy-800 font-light mt-4 text-base">
            Tracing our institutional growth, awards, and victories over the recent half-decade.
          </p>
        </div>

        {/* Timeline Track */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-navy-100 -translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="space-y-16">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center">
                  {/* Left Side Content (Desktop only, even items) */}
                  <div className={`w-full md:w-1/2 md:pr-12 md:text-right hidden md:block ${isEven ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-navy-50 border border-navy-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                      >
                        <span className="font-serif text-2xl font-bold text-gold-600 block mb-2">{item.year}</span>
                        <h3 className="font-serif text-xl font-bold text-navy-950 mb-3">{item.title}</h3>
                        <p className="text-navy-800 text-sm leading-relaxed font-light">{item.description}</p>
                      </motion.div>
                    )}
                  </div>

                  {/* Node Dot marker */}
                  <div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-navy-950 border-2 border-gold-400 flex items-center justify-center -translate-x-1/2 z-10 shadow-md">
                    <Icon className="w-5 h-5 text-gold-400" />
                  </div>

                  {/* Right Side Content (Desktop: odd items, Mobile: all items) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-12 md:text-left">
                    {/* Render content on the right side if it's odd, or on mobile */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`bg-navy-50 border border-navy-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow ${
                        !isEven ? "md:block" : "md:hidden"
                      }`}
                    >
                      <span className="font-serif text-2xl font-bold text-gold-600 block mb-2">{item.year}</span>
                      <h3 className="font-serif text-xl font-bold text-navy-950 mb-3">{item.title}</h3>
                      <p className="text-navy-800 text-sm leading-relaxed font-light">{item.description}</p>
                    </motion.div>

                    {/* For even items, show on right side ONLY in mobile */}
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-navy-50 border border-navy-100 p-6 rounded-2xl shadow-sm md:hidden"
                      >
                        <span className="font-serif text-2xl font-bold text-gold-600 block mb-2">{item.year}</span>
                        <h3 className="font-serif text-xl font-bold text-navy-950 mb-3">{item.title}</h3>
                        <p className="text-navy-800 text-sm leading-relaxed font-light">{item.description}</p>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
