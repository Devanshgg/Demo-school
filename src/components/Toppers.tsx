"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { toppersData, Topper } from "../data/toppers";
import { Award, Star, Quote, ChevronRight } from "lucide-react";

export default function Toppers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeQuote, setActiveQuote] = useState<string | null>(toppersData[0].quote || null);
  const [activeTopperId, setActiveTopperId] = useState<string | null>(toppersData[0].id);

  // Divide the data
  const podiumToppers = toppersData.filter((t) => t.rank <= 3);
  const gridToppers = toppersData.filter((t) => t.rank > 3);

  // Sort podium as 2nd (left), 1st (center), 3rd (right)
  const sortedPodium = [
    podiumToppers.find((t) => t.rank === 2),
    podiumToppers.find((t) => t.rank === 1),
    podiumToppers.find((t) => t.rank === 3),
  ].filter(Boolean) as Topper[];

  return (
    <section id="toppers" className="py-24 bg-navy-50 relative overflow-hidden">
      {/* Decorative radial blur */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gold-500/5 rounded-full filter blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-600 font-semibold tracking-wider uppercase text-sm inline-flex items-center gap-2">
            <span className="w-6 h-[2px] bg-gold-500" /> Merit List <span className="w-6 h-[2px] bg-gold-500" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 mt-3 leading-tight">
            Celebrating Our Achievers
          </h2>
          <p className="text-navy-800 font-light mt-4 text-base">
            Honoring the dedication, intellect, and academic excellence of our top board examination scholars.
          </p>
        </div>

        {/* Podium Layout */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-end justify-center gap-6 lg:gap-0 max-w-4xl mx-auto mb-20 pt-16"
        >
          {sortedPodium.map((topper) => {
            const isFirst = topper.rank === 1;
            const isSecond = topper.rank === 2;
            const isThird = topper.rank === 3;

            // Height and styling variables based on rank
            const heightClass = isFirst
              ? "h-72 sm:h-80 border-t-4 border-gold-500 shadow-[0_15px_40px_rgba(212,175,55,0.15)] z-20"
              : isSecond
              ? "h-56 sm:h-64 border-t-4 border-navy-800 opacity-95 z-10"
              : "h-48 sm:h-56 border-t-4 border-gold-600 opacity-90 z-10";

            return (
              <div
                key={topper.id}
                onClick={() => {
                  if (topper.quote) {
                    setActiveQuote(topper.quote);
                    setActiveTopperId(topper.id);
                  }
                }}
                className={`w-full lg:w-1/3 flex flex-col items-center cursor-pointer group`}
              >
                {/* Photo and Badge Floating container */}
                <div className="relative mb-4 flex flex-col items-center">
                  {/* Photo Circle */}
                  <div
                    className={`relative rounded-full p-1 overflow-hidden transition-all duration-300 ${
                      isFirst
                        ? "w-28 h-28 sm:w-32 sm:h-32 bg-gradient-to-tr from-gold-400 via-gold-500 to-gold-600 shadow-[0_0_20px_rgba(212,175,55,0.3)] group-hover:scale-105"
                        : "w-24 h-24 sm:w-28 sm:h-28 bg-navy-200 group-hover:scale-105"
                    }`}
                  >
                    <img
                      src={topper.image}
                      alt={topper.name}
                      className="w-full h-full object-cover rounded-full bg-white"
                    />
                  </div>

                  {/* Rank Emblem */}
                  <div
                    className={`absolute -bottom-2 w-8 h-8 rounded-full border flex items-center justify-center font-bold text-xs shadow-md ${
                      isFirst
                        ? "bg-gradient-to-r from-gold-400 to-gold-500 border-gold-600 text-navy-950"
                        : isSecond
                        ? "bg-navy-900 border-navy-800 text-white"
                        : "bg-amber-700 border-amber-800 text-white"
                    }`}
                  >
                    {topper.rank}
                  </div>
                </div>

                {/* Podium Column Shape */}
                <div
                  className={`w-full ${heightClass} bg-gradient-to-b ${
                    isFirst ? "from-navy-900 to-navy-950 text-white" : "from-white to-navy-50 text-navy-950"
                  } rounded-t-2xl p-6 flex flex-col justify-between items-center text-center`}
                >
                  <div className="mt-2">
                    <h3 className="font-serif text-lg font-bold tracking-wide">{topper.name}</h3>
                    <p className={`text-xs mt-1 ${isFirst ? "text-gold-400" : "text-navy-800"} font-medium`}>
                      {topper.class} {topper.stream ? `• ${topper.stream}` : ""}
                    </p>
                  </div>
                  
                  <div>
                    <span
                      className={`font-serif text-3xl font-extrabold tracking-tight ${
                        isFirst ? "text-gold-400" : "text-navy-900"
                      }`}
                    >
                      {topper.percentage}%
                    </span>
                    <p className={`text-[10px] uppercase tracking-wider ${isFirst ? "text-navy-200" : "text-navy-800"} mt-1`}>
                      Aggregate Score
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Dynamic Quote Box */}
        {activeQuote && (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTopperId || "quote"}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="max-w-3xl mx-auto bg-white border border-gold-500/10 rounded-2xl p-8 shadow-[0_10px_35px_rgba(212,175,55,0.04)] mb-20 relative"
            >
              <Quote className="w-10 h-10 text-gold-500/20 absolute top-4 left-4" />
              <div className="relative z-10 text-center">
                <p className="font-serif text-lg text-navy-950 italic leading-relaxed px-6">
                  "{activeQuote}"
                </p>
                <h5 className="font-semibold text-xs tracking-wider uppercase text-gold-600 mt-4">
                  — {toppersData.find((t) => t.id === activeTopperId)?.name} (Topper Insight)
                </h5>
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Toppers Grid */}
        <div className="border-t border-navy-100/50 pt-16">
          <h4 className="font-serif text-2xl font-bold text-navy-950 text-center mb-8">
            Distinguished Merit Scholars
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {gridToppers.map((topper) => (
              <div
                key={topper.id}
                className="bg-white border border-navy-100 rounded-xl p-5 flex items-center gap-4 hover:shadow-md hover:border-gold-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 bg-navy-50">
                  <img src={topper.image} alt={topper.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="font-serif font-bold text-navy-950 truncate text-base">{topper.name}</h5>
                  <p className="text-xs text-navy-800 font-medium">
                    {topper.class} {topper.stream ? `• ${topper.stream}` : ""}
                  </p>
                  <div className="flex items-center gap-1.5 mt-2 bg-navy-50 w-max px-2.5 py-0.5 rounded-full border border-navy-100">
                    <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-500" />
                    <span className="font-serif text-sm font-bold text-navy-950">{topper.percentage}%</span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-gold-600 bg-gold-50 px-2 py-1 rounded">
                  Rank {topper.rank}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
