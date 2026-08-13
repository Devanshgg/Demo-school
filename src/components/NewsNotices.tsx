"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { noticesData, Notice } from "../data/notices";
import { Bell, Calendar, ChevronRight, FileText, Megaphone } from "lucide-react";

export default function NewsNotices() {
  const [activeNoticeId, setActiveNoticeId] = useState<string>(noticesData[0].id);
  const activeNotice = noticesData.find((n) => n.id === activeNoticeId) || noticesData[0];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="notices" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-600 font-semibold tracking-wider uppercase text-sm inline-flex items-center gap-2">
            <span className="w-6 h-[2px] bg-gold-500" /> Notifications <span className="w-6 h-[2px] bg-gold-500" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 mt-3 leading-tight">
            Latest News & Notices
          </h2>
          <p className="text-navy-800 font-light mt-4 text-base">
            Stay updated with our official schedules, upcoming PTMs, board updates, and admission cycles.
          </p>
        </div>

        {/* Layout Grid */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Left Column: Highlighted Board Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 bg-gradient-to-br from-navy-900 to-navy-950 text-white rounded-2xl p-8 border border-gold-500/20 flex flex-col justify-between shadow-xl relative overflow-hidden"
          >
            {/* Background vector crest watermark */}
            <div className="absolute right-[-40px] bottom-[-40px] w-64 h-64 text-gold-500/5 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current stroke-1">
                <path d="M50,15 L80,25 C80,55 50,85 50,85 C50,85 20,55 20,25 L50,15 Z" />
              </svg>
            </div>

            <div>
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold-500/10 border border-gold-500/30 rounded-lg flex items-center justify-center">
                    <Megaphone className="w-5 h-5 text-gold-400" />
                  </div>
                  <span className="font-serif font-bold text-gold-400 text-sm tracking-wide">Featured Notice</span>
                </div>
                {activeNotice.isUrgent && (
                  <span className="text-[10px] bg-red-600 text-white px-2.5 py-0.5 rounded font-bold uppercase tracking-wider animate-pulse">
                    Urgent
                  </span>
                )}
              </div>

              <span className="text-xs text-navy-200 bg-navy-800 px-3 py-1 rounded border border-navy-700/50 uppercase font-semibold tracking-wider">
                {activeNotice.category} Notice
              </span>
              
              <h3 className="font-serif text-2xl font-bold mt-4 mb-4 text-white leading-snug">
                {activeNotice.title}
              </h3>
              
              <p className="text-sm text-navy-200 leading-relaxed font-light mb-8">
                {activeNotice.description}
              </p>
            </div>

            <div className="border-t border-navy-800 pt-6 flex justify-between items-center mt-auto">
              <span className="text-xs text-navy-200 flex items-center gap-2 font-medium">
                <Calendar className="w-4 h-4 text-gold-400" />
                <span>Published: {activeNotice.date}</span>
              </span>

              <a
                href="#contact"
                className="text-xs text-gold-400 hover:text-white font-semibold flex items-center gap-1.5 transition-colors"
              >
                <span>Request details</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Scrollable List of Notices */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-between bg-navy-50 rounded-2xl p-6 border border-navy-100/50"
          >
            {/* Scrollable container list */}
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
              {noticesData.map((notice) => (
                <div
                  key={notice.id}
                  onClick={() => setActiveNoticeId(notice.id)}
                  className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer flex gap-4 items-start ${
                    activeNoticeId === notice.id
                      ? "bg-white border-gold-500 shadow-md"
                      : "bg-white/40 border-navy-100 hover:border-gold-500/30 hover:bg-white"
                  }`}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                    activeNoticeId === notice.id
                      ? "bg-navy-950 text-gold-400"
                      : "bg-navy-100 text-navy-800"
                  }`}>
                    <FileText className="w-4.5 h-4.5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-bold text-gold-600 uppercase tracking-wide">
                        {notice.category}
                      </span>
                      <span className="text-[10px] text-navy-800">• {notice.date}</span>
                      
                      {/* Interactive badges */}
                      <div className="flex gap-1">
                        {notice.isNew && (
                          <span className="text-[8px] bg-green-100 text-green-700 font-bold px-1.5 py-0.2 rounded uppercase">
                            New
                          </span>
                        )}
                        {notice.isUrgent && (
                          <span className="text-[8px] bg-red-100 text-red-700 font-bold px-1.5 py-0.2 rounded uppercase">
                            Urgent
                          </span>
                        )}
                      </div>
                    </div>
                    <h4 className="font-serif font-bold text-navy-950 text-sm mt-1 group-hover:text-gold-600 transition-colors line-clamp-1">
                      {notice.title}
                    </h4>
                    <p className="text-xs text-navy-800 font-light mt-1 line-clamp-2 leading-relaxed">
                      {notice.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="border-t border-navy-200/50 pt-4 mt-6 flex justify-center">
              <button className="px-6 py-2.5 bg-navy-950 text-white rounded-full text-xs font-semibold hover:bg-navy-900 border border-navy-950 hover:border-gold-500 transition-all">
                View All Notices
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
