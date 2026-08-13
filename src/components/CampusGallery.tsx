"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { campusData, CampusItem } from "../data/campus";
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

export default function CampusGallery() {
  const [filter, setFilter] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = ["All", "Classrooms", "Labs", "Computer Lab", "Library", "Sports", "Auditorium", "Transportation", "Cafeteria"];

  // Filter items
  const filteredItems = filter === "All"
    ? campusData
    : campusData.filter((item) => item.category === filter);

  // Close Lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
        if (e.key === "Escape") setLightboxIndex(null);
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : (prev as number) - 1));
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : (prev as number) + 1));
    }
  };

  return (
    <section id="campus" className="py-24 bg-navy-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-600 font-semibold tracking-wider uppercase text-sm inline-flex items-center gap-2">
            <span className="w-6 h-[2px] bg-gold-500" /> Infrastructure <span className="w-6 h-[2px] bg-gold-500" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 mt-3 leading-tight">
            Our Campus & Infrastructure
          </h2>
          <p className="text-navy-800 font-light mt-4 text-base">
            Take a visual tour of our modern state-of-the-art facilities designed to foster holistic development.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-12 flex-wrap max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? "bg-navy-950 text-white shadow-md border border-navy-950"
                  : "bg-white text-navy-800 hover:text-gold-500 border border-navy-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div
          ref={ref}
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4 }}
                onClick={() => setLightboxIndex(idx)}
                className="group relative h-64 bg-navy-900 rounded-2xl overflow-hidden border border-navy-100 shadow-sm cursor-pointer"
              >
                {/* Photo */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 pointer-events-none"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

                {/* Card Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex flex-col justify-end text-white transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                  <span className="text-[10px] uppercase tracking-wider text-gold-400 font-bold mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg font-bold">{item.title}</h4>
                  <p className="text-xs text-navy-200 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-light line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Zoom badge */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-navy-950/70 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4 text-gold-400" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy-950/95 flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close click blocker */}
            <div className="absolute inset-0 cursor-zoom-out" onClick={() => setLightboxIndex(null)} />

            <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
              {/* Photo Box */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="relative bg-navy-950 rounded-2xl overflow-hidden border border-gold-500/20 max-h-[70vh] max-w-full flex items-center justify-center shadow-2xl"
              >
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="max-h-[70vh] object-contain max-w-full"
                />

                {/* Prev and Next Buttons (Desktop Floating inside) */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/10 hover:text-gold-400 transition-all z-20 cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/10 hover:text-gold-400 transition-all z-20 cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </motion.div>

              {/* Text caption details */}
              <div className="text-center text-white mt-6 max-w-2xl px-4 pointer-events-none">
                <span className="text-xs uppercase font-bold tracking-widest text-gold-400">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-sm text-navy-200 mt-2 font-light">
                  {filteredItems[lightboxIndex].description}
                </p>
              </div>

              {/* Close Button top corner */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-[-48px] right-2 sm:right-0 p-3 rounded-full bg-navy-900 border border-gold-500/20 text-white hover:text-gold-400 hover:bg-navy-800 transition-colors z-20 cursor-pointer"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Counter label */}
              <span className="absolute bottom-[-48px] text-xs font-semibold text-gold-400 select-none">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
