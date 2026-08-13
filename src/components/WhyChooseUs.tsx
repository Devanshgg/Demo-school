"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Users, Building, Trophy, Laptop, Sparkles } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description: "Consistently ranked among the top schools for CBSE board results, focusing on conceptual understanding and logical rigour.",
  },
  {
    icon: Users,
    title: "Experienced Faculty",
    description: "Our teachers are industry veterans and educational experts, mentoring students through empathetic and structured pedagogy.",
  },
  {
    icon: Building,
    title: "Modern Infrastructure",
    description: "Fully air-conditioned campus containing advanced scientific laboratories, massive digital libraries, and smart facilities.",
  },
  {
    icon: Trophy,
    title: "Sports & Activities",
    description: "National-grade sports grounds, synthetic courts, and training facilities for basketball, football, tennis, and gymnastics.",
  },
  {
    icon: Laptop,
    title: "Smart Learning",
    description: "Classrooms integrated with high-end interactive projection screens, smart school ERP app panels, and computing grids.",
  },
  {
    icon: Sparkles,
    title: "Holistic Development",
    description: "Rich focus on arts, drama, classical music training, debates, and public service clubs that craft well-rounded global personalities.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section id="why-choose-us" className="py-24 bg-navy-50 relative overflow-hidden">
      {/* Decorative blurred background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-800/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-600 font-semibold tracking-wider uppercase text-sm inline-flex items-center gap-2">
            <span className="w-6 h-[2px] bg-gold-500" /> Core Values <span className="w-6 h-[2px] bg-gold-500" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 mt-3 leading-tight">
            Why Delhi Public Academy?
          </h2>
          <p className="text-navy-800 font-light mt-4 text-base sm:text-lg">
            We provide a robust learning ecology built upon structural rigour, digital infrastructure, and a focus on crafting high-performing scholars.
          </p>
        </div>

        {/* Features Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -8, boxShadow: "0 20px 40px 0 rgba(11,25,44,0.08)" }}
                className="bg-white rounded-2xl p-8 border border-navy-100/80 shadow-[0_4px_20px_rgba(11,25,44,0.02)] transition-all duration-300 flex flex-col items-start text-left group"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center border border-navy-100 group-hover:bg-navy-950 group-hover:border-gold-500 transition-all duration-300 mb-6">
                  <Icon className="w-6 h-6 text-navy-800 group-hover:text-gold-400 transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-bold text-navy-950 mb-3 group-hover:text-navy-900 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-navy-800 text-sm leading-relaxed font-light">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
