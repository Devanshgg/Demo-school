"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { facultyData } from "../data/faculty";
import { Mail, GraduationCap, Award } from "lucide-react";

export default function Faculty() {
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
    <section id="faculty" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-navy-50 rounded-full filter blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-600 font-semibold tracking-wider uppercase text-sm inline-flex items-center gap-2">
            <span className="w-6 h-[2px] bg-gold-500" /> Educators <span className="w-6 h-[2px] bg-gold-500" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 mt-3 leading-tight">
            Meet Our Dedicated Faculty
          </h2>
          <p className="text-navy-800 font-light mt-4 text-base">
            Goshen School educators are leaders in academic pedagogy, steering scholars with empathy, intelligence, and professional experience.
          </p>
        </div>

        {/* Faculty Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {facultyData.map((teacher) => (
            <motion.div
              key={teacher.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-navy-50 rounded-2xl overflow-hidden border border-navy-100/80 shadow-[0_4px_25px_rgba(11,25,44,0.02)] flex flex-col group transition-all duration-300"
            >
              {/* Photo Box */}
              <div className="relative h-72 w-full overflow-hidden bg-navy-950">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlaid Experience Badge */}
                <div className="absolute top-4 left-4 bg-navy-950/80 backdrop-blur-md text-gold-400 border border-gold-500/20 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                  <Award className="w-3.5 h-3.5 text-gold-400" />
                  <span>{teacher.experience.replace(" Experience", "")}</span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-xs uppercase tracking-wider text-gold-600 font-bold">
                    {teacher.designation}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-navy-950 mt-1 mb-2">
                    {teacher.name}
                  </h3>

                  <div className="flex gap-2 items-start mt-4">
                    <GraduationCap className="w-4.5 h-4.5 text-navy-800 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-navy-800 uppercase tracking-wider leading-relaxed">
                      {teacher.subject}
                    </span>
                  </div>
                </div>

                {/* Email line link */}
                {teacher.email && (
                  <div className="border-t border-navy-200/50 pt-4 mt-6 flex justify-between items-center">
                    <a
                      href={`mailto:${teacher.email}`}
                      className="text-xs text-navy-800 hover:text-gold-600 flex items-center gap-2 transition-colors font-medium"
                    >
                      <Mail className="w-4 h-4 text-gold-500" />
                      <span>{teacher.email}</span>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
