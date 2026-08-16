"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resultsData, YearResult } from "../data/results";
import { Trophy, TrendingUp, Users, Calendar, Award } from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import confetti from "canvas-confetti";

export default function ResultsDashboard() {
  const [selectedYear, setSelectedYear] = useState<string>("2025");
  const selectedData = resultsData.find((d) => d.year === selectedYear) || resultsData[0];

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    // If selecting the peak year 2025, launch some school celebration confetti!
    if (year === "2025") {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#D4AF37", "#0B192C", "#1E3E62"],
      });
    }
  };

  // Convert the array to ascending order for Recharts chronology
  const chartData = [...resultsData].reverse();

  return (
    <section id="results" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative SVG grids */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-navy-50/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-600 font-semibold tracking-wider uppercase text-sm inline-flex items-center gap-2">
            <span className="w-6 h-[2px] bg-gold-500" /> Metrics of Excellence <span className="w-6 h-[2px] bg-gold-500" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 mt-3 leading-tight">
            Academic Performance Dashboard
          </h2>
          <p className="text-navy-800 font-light mt-4 text-base">
            Goshen School maintains consistent growth across board examinations. Interact with the tabs below to explore historical metrics and multi-year trending.
          </p>
        </div>

        {/* Year Tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-12 flex-wrap">
          {resultsData.map((d) => (
            <button
              key={d.year}
              onClick={() => handleYearChange(d.year)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide border transition-all duration-300 ${
                selectedYear === d.year
                  ? "bg-navy-950 text-white border-navy-950 shadow-md"
                  : "bg-navy-50 text-navy-800 border-navy-100 hover:border-gold-500"
              }`}
            >
              {d.year} CBSE Boards
              {selectedYear === d.year && (
                <motion.span
                  layoutId="activeYearIndicator"
                  className="absolute inset-0 border border-gold-500 rounded-full pointer-events-none"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Column: Quick Stats Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Stat Card 1: Overall Pass % */}
            <motion.div
              key={`overall-${selectedYear}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-navy-50 border border-navy-100/50 rounded-2xl p-6 flex items-center gap-5 shadow-[0_4px_20px_rgba(11,25,44,0.01)]"
            >
              <div className="w-14 h-14 rounded-full bg-gold-500/10 border border-gold-400/20 flex items-center justify-center shrink-0">
                <Trophy className="w-7 h-7 text-gold-600" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-navy-800 uppercase tracking-wider">Overall Pass Rate</span>
                <span className="font-serif text-3xl font-bold text-navy-950 mt-1">{selectedData.overall}%</span>
              </div>
            </motion.div>

            {/* Stat Card 2: 90%+ Scorers */}
            <motion.div
              key={`toppers90-${selectedYear}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-navy-50 border border-navy-100/50 rounded-2xl p-6 flex items-center gap-5 shadow-[0_4px_20px_rgba(11,25,44,0.01)]"
            >
              <div className="w-14 h-14 rounded-full bg-gold-500/10 border border-gold-400/20 flex items-center justify-center shrink-0">
                <Users className="w-7 h-7 text-gold-600" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-navy-800 uppercase tracking-wider">Students Scoring 90%+</span>
                <span className="font-serif text-3xl font-bold text-navy-950 mt-1">{selectedData.toppers90Plus} Scholars</span>
              </div>
            </motion.div>

            {/* Stat Card 3: Class X */}
            <motion.div
              key={`classX-${selectedYear}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-navy-50 border border-navy-100/50 rounded-2xl p-6 flex flex-col gap-4 shadow-[0_4px_20px_rgba(11,25,44,0.01)]"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-navy-800 uppercase tracking-wider">Class X Pass %</span>
                <span className="font-serif text-2xl font-bold text-navy-950">{selectedData.classX}%</span>
              </div>
              {/* Progress bar */}
              <div className="w-full bg-navy-100 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${selectedData.classX}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="bg-navy-900 h-2 rounded-full"
                />
              </div>
            </motion.div>

            {/* Stat Card 4: Class XII */}
            <motion.div
              key={`classXII-${selectedYear}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-navy-50 border border-navy-100/50 rounded-2xl p-6 flex flex-col gap-4 shadow-[0_4px_20px_rgba(11,25,44,0.01)]"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-navy-800 uppercase tracking-wider">Class XII Pass %</span>
                <span className="font-serif text-2xl font-bold text-navy-950">{selectedData.classXII}%</span>
              </div>
              {/* Progress bar */}
              <div className="w-full bg-navy-100 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${selectedData.classXII}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="bg-gold-500 h-2 rounded-full"
                />
              </div>
            </motion.div>

            {/* Stat Card 5: School Average (Full Width Span) */}
            <motion.div
              key={`average-${selectedYear}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="sm:col-span-2 bg-gradient-to-r from-navy-900 to-navy-950 border border-gold-500/20 text-white rounded-2xl p-6 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-gold-400" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-sm font-semibold tracking-wide text-gold-400">School Average Marks</h4>
                  <p className="text-xs text-navy-200 mt-0.5">Aggregated percentage score across all student streams</p>
                </div>
              </div>
              <span className="font-serif text-3xl font-bold text-white pr-4">{selectedData.schoolAverage}%</span>
            </motion.div>
          </div>

          {/* Right Column: Recharts Line Chart */}
          <div className="lg:col-span-5 bg-navy-50 border border-navy-100/50 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center border-b border-navy-200/50 pb-4 mb-4">
                <h4 className="font-serif text-lg font-bold text-navy-950 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-gold-600" /> 5-Year Results Trend
                </h4>
                <span className="text-xs text-navy-800 bg-white px-2 py-1 border border-navy-100 rounded">
                  Overall Board Pass %
                </span>
              </div>
              <p className="text-xs text-navy-800 mb-6 font-light leading-relaxed">
                Aggregated statistics demonstrate an upward trend resulting from digital-learning methodologies.
              </p>
            </div>

            {/* Recharts Container */}
            <div className="w-full h-64 text-xs font-medium">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={chartData}
                  margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="#D4AF37" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#C8D3E4" opacity={0.3} vertical={false} />
                  <XAxis
                    dataKey="year"
                    stroke="#1E3E62"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={10}
                  />
                  <YAxis
                    stroke="#1E3E62"
                    tickLine={false}
                    axisLine={false}
                    domain={[90, 100]}
                    tickCount={6}
                    tickFormatter={(v) => `${v}%`}
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-navy-950 border border-gold-500/20 text-white rounded-lg p-3 shadow-lg">
                            <p className="font-semibold text-xs text-gold-400">CBSE Boards {payload[0].payload.year}</p>
                            <p className="text-xs mt-1 font-bold">Pass Rate: {payload[0].value}%</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="overall"
                    stroke="#D4AF37"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#chartGradient)"
                    activeDot={{ r: 6, fill: "#0B192C", stroke: "#D4AF37", strokeWidth: 2 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
