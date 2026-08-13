"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { eventsData, SchoolEvent } from "../data/events";
import { Calendar, Tag, ArrowUpRight } from "lucide-react";

export default function EventsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = ["All", "Cultural", "Sports", "Academic", "National", "Excursion"];

  const filteredEvents = selectedCategory === "All"
    ? eventsData
    : eventsData.filter((ev) => ev.category === selectedCategory);

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
    <section id="activities" className="py-24 bg-navy-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-600 font-semibold tracking-wider uppercase text-sm inline-flex items-center gap-2">
            <span className="w-6 h-[2px] bg-gold-500" /> Co-Curricular <span className="w-6 h-[2px] bg-gold-500" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 mt-3 leading-tight">
            Events & Activities
          </h2>
          <p className="text-navy-800 font-light mt-4 text-base">
            Exploring the rich tapestry of student life beyond the classroom.
          </p>
        </div>

        {/* Categories Tab navigation */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-navy-950 text-white border border-navy-950"
                  : "bg-white text-navy-800 hover:text-gold-500 border border-navy-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Events Cards Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredEvents.map((ev) => (
            <motion.div
              key={ev.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden border border-navy-100 shadow-[0_4px_20px_rgba(11,25,44,0.01)] flex flex-col group transition-all duration-300"
            >
              {/* Image and Date Badge overlay */}
              <div className="relative h-56 w-full overflow-hidden bg-navy-900">
                <img
                  src={ev.image}
                  alt={ev.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Calendar-style Date badge */}
                <div className="absolute top-4 left-4 bg-white rounded-xl shadow-md border border-navy-100 p-2 text-center w-14 h-15 flex flex-col justify-center items-center">
                  <span className="text-[10px] uppercase font-bold text-gold-600 leading-none mb-1">
                    {ev.month}
                  </span>
                  <span className="font-serif text-xl font-bold text-navy-950 leading-none">
                    {ev.day}
                  </span>
                </div>

                {/* Category tag overlay */}
                <div className="absolute bottom-4 left-4 bg-navy-950/80 backdrop-blur-md text-white border border-gold-500/20 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase flex items-center gap-1.5 shadow-sm">
                  <Tag className="w-3 h-3 text-gold-400" />
                  <span>{ev.category}</span>
                </div>
              </div>

              {/* Event Content Details */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-serif text-lg font-bold text-navy-950 group-hover:text-gold-600 transition-colors mb-3 leading-snug">
                    {ev.name}
                  </h3>
                  <p className="text-navy-800 text-sm font-light leading-relaxed mb-6">
                    {ev.description}
                  </p>
                </div>

                <div className="border-t border-navy-100 pt-4 flex justify-between items-center mt-auto">
                  <span className="text-xs text-navy-800 font-medium flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-gold-500" />
                    <span>{ev.date}</span>
                  </span>

                  <button className="text-xs text-gold-600 hover:text-navy-950 font-semibold flex items-center gap-1 group/btn transition-colors">
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
