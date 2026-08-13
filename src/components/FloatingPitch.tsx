"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Laptop, X, Users, BookOpen, Clock, 
  FileSpreadsheet, CreditCard, Calendar, 
  CheckSquare, MessageSquare, Bell, BarChart3, 
  ShieldAlert, Send, Sparkles
} from "lucide-react";
import confetti from "canvas-confetti";

const erpModules = [
  {
    icon: Users,
    title: "Student Management",
    description: "Detailed enrollment trackers, digitised dossiers, behavioral tracking logs, and automated registration profiles.",
  },
  {
    icon: BookOpen,
    title: "Teacher & Staff Portal",
    description: "Pedagogy lesson-planning panels, class assignments logs, attendance registers, and payroll configurations.",
  },
  {
    icon: Clock,
    title: "Real-time Attendance",
    description: "GPS-enabled biometric integration, smart RFID entry cards, and immediate automated absence SMS alerts to parents.",
  },
  {
    icon: FileSpreadsheet,
    title: "Exam & Gradebook",
    description: "Digital report cards generation, weighted exam grading, class rank lists, and CBSE marksheet integrations.",
  },
  {
    icon: CreditCard,
    title: "Online Fees Management",
    description: "Direct payment gateway integration, automated receipt generation, discount models, and dues reminders.",
  },
  {
    icon: Calendar,
    title: "Smart Timetable",
    description: "Conflict-free schedule algorithm generator mapping classes, teacher substitutions, and sports/lab rotations.",
  },
  {
    icon: CheckSquare,
    title: "Homework Desk",
    description: "Virtual assignments portal allowing students to view daily syllabus, submit doc sheets, and receive grades.",
  },
  {
    icon: MessageSquare,
    title: "Parent Communication",
    description: "Direct in-app messaging feeds connecting parents, teachers, and coordinators with translated chat logs.",
  },
  {
    icon: Bell,
    title: "Push Notices & Alerts",
    description: "Instant announcements broadcasts for emergency holidays, exam sheets release, or school sports meets.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description: "Comparative visual metrics charting year-on-year pass averages, fees collections, and student drop rates.",
  },
];

export default function FloatingPitch() {
  const [isOpen, setIsOpen] = useState(false);
  const [pitchForm, setPitchForm] = useState({
    schoolName: "",
    directorName: "",
    contact: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Show a mini-glowing tip after a few seconds of browsing
    const timer = setTimeout(() => {
      // Trigger a light notification tone or just let it sit
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handlePitchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pitchForm.schoolName || !pitchForm.directorName || !pitchForm.contact) {
      alert("Please fill in all the demo request fields.");
      return;
    }

    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      colors: ["#D4AF37", "#0B192C"],
    });

    setTimeout(() => {
      setSubmitted(false);
      setPitchForm({ schoolName: "", directorName: "", contact: "" });
      setIsOpen(false);
    }, 2500);
  };

  return (
    <>
      {/* Floating Action Button (FAB) */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          {/* Pulsing ring outer */}
          <div className="absolute inset-0 rounded-full bg-gold-500/30 scale-110 blur-sm animate-ping pointer-events-none" />

          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2.5 px-5 py-3.5 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-navy-950 rounded-full font-bold shadow-[0_10px_25px_rgba(212,175,55,0.4)] border border-gold-600/30 hover:scale-105 active:scale-95 transition-all cursor-pointer relative z-10 group"
          >
            <Laptop className="w-5 h-5 text-navy-950 animate-pulse group-hover:rotate-12 transition-transform" />
            <span className="text-sm tracking-wide">Explore Digital School</span>
            <Sparkles className="w-4 h-4 text-navy-950 absolute -top-1 -right-1" />
          </button>
        </motion.div>
      </div>

      {/* Immersive Pitch Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white border border-gold-500/20 rounded-2xl w-full max-w-4xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto z-10 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-navy-50 text-navy-800 hover:text-navy-950 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Pitch Header */}
              <div className="mb-8 border-b border-navy-100 pb-6 pr-6">
                <div className="flex items-center gap-2 text-gold-600 font-semibold tracking-wider uppercase text-xs">
                  <Laptop className="w-4.5 h-4.5 text-gold-500" /> Digital School Solution Pitch
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 mt-2">
                  Transforming School Management
                </h3>
                <p className="text-sm text-navy-800 font-light mt-2 leading-relaxed">
                  This showcase website is powered by our premium, full-suite **School ERP & Portal solution**. We can white-label and deploy this entire digital ecosystem for your institution, integrating your public site directly with private admin and parent consoles.
                </p>
              </div>

              {/* Modules Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                {erpModules.map((mod, i) => {
                  const Icon = mod.icon;
                  return (
                    <div
                      key={i}
                      className="p-4 rounded-xl border border-navy-100 bg-navy-50/50 flex gap-4 items-start"
                    >
                      <div className="w-10 h-10 rounded-lg bg-navy-950 border border-gold-500/20 text-gold-400 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-navy-950 text-sm leading-snug">
                          {mod.title}
                        </h4>
                        <p className="text-xs text-navy-800 font-light mt-1.5 leading-relaxed">
                          {mod.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Demo Pitch Form Panel */}
              <div className="bg-navy-900 text-white rounded-xl p-6 border border-gold-500/20 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-24 h-24 bg-gold-500/5 rounded-full filter blur-xl pointer-events-none" />

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 flex flex-col items-center justify-center"
                  >
                    <Sparkles className="w-12 h-12 text-gold-400 mb-2 animate-bounce" />
                    <h5 className="font-serif text-lg font-bold text-gold-400">Demo Request Dispatched!</h5>
                    <p className="text-xs text-navy-200 mt-1 max-w-md leading-relaxed">
                      Our system architect will assemble your custom sandbox parameters and reach out to schedule a live console walkthrough.
                    </p>
                  </motion.div>
                ) : (
                  <div>
                    <h4 className="font-serif text-lg font-bold text-gold-400">Want to Deploy this ERP for Your School?</h4>
                    <p className="text-xs text-navy-200 mt-1 mb-6 font-light leading-relaxed">
                      Enter your school's credentials below to receive a custom sandbox URL, documentation booklets, and a live pricing sheet.
                    </p>

                    <form onSubmit={handlePitchSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                      <div>
                        <label className="block text-[10px] font-bold text-gold-400 uppercase tracking-wide mb-1.5">
                          School Name
                        </label>
                        <input
                          type="text"
                          required
                          value={pitchForm.schoolName}
                          onChange={(e) => setPitchForm({ ...pitchForm, schoolName: e.target.value })}
                          placeholder="e.g. St. Xavier Academy"
                          className="w-full bg-navy-950/80 border border-navy-800 focus:border-gold-500 rounded px-3 py-2 text-xs text-white placeholder-navy-200/30 outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-gold-400 uppercase tracking-wide mb-1.5">
                          Principal/Director Name
                        </label>
                        <input
                          type="text"
                          required
                          value={pitchForm.directorName}
                          onChange={(e) => setPitchForm({ ...pitchForm, directorName: e.target.value })}
                          placeholder="e.g. Dr. Robert"
                          className="w-full bg-navy-950/80 border border-navy-800 focus:border-gold-500 rounded px-3 py-2 text-xs text-white placeholder-navy-200/30 outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-navy-950 rounded font-bold text-xs shadow-md transition-all cursor-pointer"
                        >
                          <span>Request Sandboxed Trial</span>
                          <Send className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
