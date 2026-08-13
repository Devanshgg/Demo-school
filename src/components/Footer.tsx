"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0B192C] text-navy-100 border-t border-gold-500/20 pt-16 pb-8 overflow-hidden">
      {/* Decorative backdrop shapes */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-800/20 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-navy-800 to-navy-950 border border-gold-500 rounded shadow-[0_0_10px_rgba(212,175,55,0.15)]">
                <svg
                  viewBox="0 0 100 100"
                  className="w-6 h-6 fill-none stroke-gold-400 stroke-2"
                >
                  <path d="M50,15 L80,25 C80,55 50,85 50,85 C50,85 20,55 20,25 L50,15 Z" />
                  <path d="M35,45 Q50,38 65,45 M50,32 L50,70" strokeWidth="1.5" />
                  <circle cx="50" cy="30" r="3" fill="#D4AF37" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-md font-bold tracking-wide text-white leading-none">
                  DELHI PUBLIC
                </span>
                <span className="font-sans text-[10px] font-semibold tracking-[0.2em] text-gold-400 leading-none mt-0.5">
                  ACADEMY
                </span>
              </div>
            </div>
            <p className="text-sm text-navy-200 mt-2 leading-relaxed">
              Empowering young minds with academic rigour, moral values, and creative confidence. Providing a holistic platform where excellence meets character.
            </p>
            <div className="flex items-center gap-3 mt-4 text-navy-100">
              <a href="#" aria-label="Facebook" className="w-9 h-9 flex items-center justify-center rounded-full bg-navy-900 border border-navy-800 hover:text-gold-400 hover:border-gold-500 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 flex items-center justify-center rounded-full bg-navy-900 border border-navy-800 hover:text-gold-400 hover:border-gold-500 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 flex items-center justify-center rounded-full bg-navy-900 border border-navy-800 hover:text-gold-400 hover:border-gold-500 transition-all">
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 flex items-center justify-center rounded-full bg-navy-900 border border-navy-800 hover:text-gold-400 hover:border-gold-500 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 flex items-center justify-center rounded-full bg-navy-900 border border-navy-800 hover:text-gold-400 hover:border-gold-500 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163c-.272-1.016-1.07-1.815-2.087-2.087C19.566 3.5 12 3.5 12 3.5s-7.566 0-9.412.576c-1.017.272-1.815 1.07-2.087 2.087C0 8.01 0 12 0 12s0 3.99.502 5.837c.272 1.016 1.07 1.815 2.087 2.087C4.434 20.5 12 20.5 12 20.5s7.566 0 9.412-.576c1.017-.272 1.815-1.07 2.087-2.087C24 15.99 24 12 24 12s0-3.99-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-white font-semibold text-lg tracking-wide border-b border-gold-500/20 pb-2 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-navy-200">
              <li><a href="#about" className="hover:text-gold-400 hover:underline transition-colors">About Our School</a></li>
              <li><a href="#why-choose-us" className="hover:text-gold-400 hover:underline transition-colors">Academic Programs</a></li>
              <li><a href="#results" className="hover:text-gold-400 hover:underline transition-colors">Board Exam Results</a></li>
              <li><a href="#toppers" className="hover:text-gold-400 hover:underline transition-colors">Student Toppers</a></li>
              <li><a href="#campus" className="hover:text-gold-400 hover:underline transition-colors">Campus Infrastructure</a></li>
              <li><a href="#faculty" className="hover:text-gold-400 hover:underline transition-colors">Our Faculty</a></li>
            </ul>
          </div>

          {/* Admissions Info */}
          <div>
            <h3 className="font-serif text-white font-semibold text-lg tracking-wide border-b border-gold-500/20 pb-2 mb-4">
              Admissions
            </h3>
            <ul className="space-y-2 text-sm text-navy-200">
              <li><a href="#admissions" className="hover:text-gold-400 hover:underline transition-colors">Admission Procedure</a></li>
              <li><a href="#contact" className="hover:text-gold-400 hover:underline transition-colors">Fee Structure Query</a></li>
              <li><a href="#activities" className="hover:text-gold-400 hover:underline transition-colors">Co-curricular Programs</a></li>
              <li><a href="#notices" className="hover:text-gold-400 hover:underline transition-colors">News & Notifications</a></li>
              <li><a href="#contact" className="hover:text-gold-400 hover:underline transition-colors">Apply Online Enquiry</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-serif text-white font-semibold text-lg tracking-wide border-b border-gold-500/20 pb-2 mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm text-navy-200">
              <li className="flex gap-2 items-start">
                <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <span>Sector 12, Dwarka, Near Metro Station, New Delhi - 110075</span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>+91 11 2808 4500, +91 99990 12345</span>
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span>admissions@dpa.edu.in</span>
              </li>
              <li className="text-xs text-gold-400 mt-2 bg-navy-950 p-2.5 rounded border border-gold-500/10">
                <strong>Office Hours:</strong> 8:00 AM - 2:30 PM (Monday - Saturday)
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-navy-200">
          <p>© 2026 Delhi Public Academy. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-gold-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
