"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Navigation } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    gradeInterested: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const formRef = useRef(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone || !formData.email) {
      alert("Please fill in the required fields (Name, Email, and Phone).");
      return;
    }

    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      confetti({
        particleCount: 50,
        spread: 45,
        origin: { y: 0.6 },
        colors: ["#D4AF37", "#0B192C"],
      });
      // Clear form
      setFormData({
        parentName: "",
        email: "",
        phone: "",
        gradeInterested: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-600 font-semibold tracking-wider uppercase text-sm inline-flex items-center gap-2">
            <span className="w-6 h-[2px] bg-gold-500" /> Connect <span className="w-6 h-[2px] bg-gold-500" />
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 mt-3 leading-tight">
            Get In Touch
          </h2>
          <p className="text-navy-800 font-light mt-4 text-base">
            Reach out to our admissions desk or visit our campus for an in-person orientation program.
          </p>
        </div>

        {/* Form and Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* Left Column: Contact Cards + Map */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-navy-50 border border-navy-100 rounded-xl p-5 flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-navy-950 text-sm">Address</h4>
                  <p className="text-xs text-navy-800 font-light mt-1.5 leading-relaxed">
                    Sector 12, Dwarka, Near Dwarka Metro Station, New Delhi - 110075
                  </p>
                </div>
              </div>

              <div className="bg-navy-50 border border-navy-100 rounded-xl p-5 flex items-start gap-4">
                <Phone className="w-6 h-6 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-navy-950 text-sm">Phone</h4>
                  <p className="text-xs text-navy-800 font-light mt-1.5 leading-relaxed">
                    +91 11 2808 4500 <br />
                    +91 99990 12345
                  </p>
                </div>
              </div>

              <div className="bg-navy-50 border border-navy-100 rounded-xl p-5 flex items-start gap-4">
                <Mail className="w-6 h-6 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-navy-950 text-sm">Email</h4>
                  <p className="text-xs text-navy-800 font-light mt-1.5 leading-relaxed break-all">
                    admissions@dpa.edu.in <br />
                    info@dpa.edu.in
                  </p>
                </div>
              </div>

              <div className="bg-navy-50 border border-navy-100 rounded-xl p-5 flex items-start gap-4">
                <Clock className="w-6 h-6 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-navy-950 text-sm">Office Hours</h4>
                  <p className="text-xs text-navy-800 font-light mt-1.5 leading-relaxed">
                    Mon - Sat: 8:00 AM - 2:30 PM <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Premium Google Map Placeholder */}
            <div className="relative rounded-2xl overflow-hidden border border-navy-100 h-64 bg-navy-50 group shadow-sm flex flex-col justify-end">
              {/* Map background placeholder grid layout using CSS */}
              <div 
                className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-40 transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600')`
                }}
              />
              {/* Overlay lines and details representing map grid */}
              <div className="absolute inset-0 bg-navy-950/20 mix-blend-overlay pointer-events-none" />

              {/* Glowing Coordinate Ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gold-500/25 border border-gold-400 flex items-center justify-center animate-ping absolute" />
                <div className="w-10 h-10 rounded-full bg-navy-950 border-2 border-gold-500 flex items-center justify-center shadow-lg relative z-10">
                  <Navigation className="w-4 h-4 text-gold-400 rotate-45" />
                </div>
              </div>

              {/* Map detail strip */}
              <div className="relative z-10 p-4 bg-white/95 backdrop-blur-sm border-t border-navy-100 flex justify-between items-center">
                <div>
                  <h5 className="font-serif font-bold text-navy-950 text-xs">Delhi Public Academy</h5>
                  <p className="text-[10px] text-navy-800 mt-0.5">Dwarka Sec-12, New Delhi</p>
                </div>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-navy-950 text-white rounded text-[10px] font-semibold hover:bg-navy-900 border border-navy-900 hover:border-gold-500 transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <span>Open Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-navy-50 border border-navy-100/50 rounded-2xl p-6 sm:p-8 shadow-[0_10px_35px_rgba(11,25,44,0.02)] h-full flex flex-col justify-between">
              
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold text-navy-950">Quick Admission Enquiry</h3>
                <p className="text-xs text-navy-800 mt-2 font-light leading-relaxed">
                  Have questions about admissions, fees, or curricula? Send an enquiry and our counselors will respond within 24 business hours.
                </p>
              </div>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center justify-center p-8 bg-white border border-gold-500/20 rounded-xl my-auto shadow-sm"
                >
                  <CheckCircle className="w-16 h-16 text-gold-500 mb-4 animate-bounce" />
                  <h4 className="font-serif text-xl font-bold text-navy-950">Enquiry Submitted!</h4>
                  <p className="text-xs text-navy-800 mt-2 font-light leading-relaxed max-w-sm">
                    Thank you for your interest. A confirmation email has been dispatched, and our admissions desk will call you shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 px-5 py-2 bg-navy-950 text-white text-xs font-semibold rounded hover:bg-navy-900 border border-navy-950 hover:border-gold-500 transition-colors"
                  >
                    Send Another Enquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="parentName" className="block text-xs font-semibold text-navy-800 uppercase tracking-wide mb-1.5">
                      Parent's Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="parentName"
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="Enter parent's full name"
                      className="w-full bg-white border border-navy-200 focus:border-gold-500 rounded-lg px-4 py-2.5 text-sm text-navy-950 placeholder-navy-800/40 outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email field */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-navy-800 uppercase tracking-wide mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="parent@domain.com"
                        className="w-full bg-white border border-navy-200 focus:border-gold-500 rounded-lg px-4 py-2.5 text-sm text-navy-950 placeholder-navy-800/40 outline-none transition-colors"
                      />
                    </div>

                    {/* Phone field */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-navy-800 uppercase tracking-wide mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-white border border-navy-200 focus:border-gold-500 rounded-lg px-4 py-2.5 text-sm text-navy-950 placeholder-navy-800/40 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Grade Interest Dropdown */}
                  <div>
                    <label htmlFor="gradeInterested" className="block text-xs font-semibold text-navy-800 uppercase tracking-wide mb-1.5">
                      Class / Grade Interested In
                    </label>
                    <select
                      id="gradeInterested"
                      value={formData.gradeInterested}
                      onChange={(e) => setFormData({ ...formData, gradeInterested: e.target.value })}
                      className="w-full bg-white border border-navy-200 focus:border-gold-500 rounded-lg px-4 py-2.5 text-sm text-navy-950 outline-none transition-colors"
                    >
                      <option value="">-- Choose Class --</option>
                      <option value="Nursery-KG">Nursery / Preparatory KG</option>
                      <option value="Primary 1-5">Primary School (Class I-V)</option>
                      <option value="Middle 6-8">Middle School (Class VI-VIII)</option>
                      <option value="Secondary 9-10">Secondary School (Class IX-X)</option>
                      <option value="Senior 11-12">Senior Secondary (Class XI-XII)</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-navy-800 uppercase tracking-wide mb-1.5">
                      Message / Enquiry Details
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your details here..."
                      className="w-full bg-white border border-navy-200 focus:border-gold-500 rounded-lg px-4 py-2.5 text-sm text-navy-950 placeholder-navy-800/40 outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-navy-950 text-white font-semibold rounded-lg hover:bg-navy-900 border border-navy-950 hover:border-gold-500 transition-all cursor-pointer shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === "sending" ? (
                        <span>Submitting enquiry...</span>
                      ) : (
                        <>
                          <span>Submit Enquiry Form</span>
                          <Send className="w-4 h-4 text-gold-400" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
