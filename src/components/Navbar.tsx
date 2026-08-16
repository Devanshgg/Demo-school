"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Academics", href: "#why-choose-us" },
  { name: "Results", href: "#results" },
  { name: "Achievements", href: "#achievements" },
  { name: "Campus", href: "#campus" },
  { name: "Faculty", href: "#faculty" },
  { name: "Activities", href: "#activities" },
  { name: "Admissions", href: "#admissions" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy-950/90 backdrop-blur-md border-b border-gold-500/20 py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Crest & Name */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-12 h-12 rounded-full overflow-hidden bg-white shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:scale-105 transition-all p-0.5 border border-gold-500/40">
                <img
                  src="/goshen-logo.png"
                  alt="Goshen School Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg md:text-xl font-bold tracking-wide text-white leading-none group-hover:text-gold-400 transition-colors">
                  GOSHEN
                </span>
                <span className="font-sans text-xs font-semibold tracking-[0.2em] text-gold-400 leading-none mt-1">
                  SCHOOL
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-navy-100 hover:text-gold-400 rounded-md transition-all relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gold-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden xl:block">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold tracking-wide text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 rounded-full border border-gold-600/30 hover:shadow-[0_0_20px_rgba(245,196,83,0.3)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Enquire Now
              </a>
            </div>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-md text-navy-100 hover:text-gold-400 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="xl:hidden bg-navy-950 border-b border-gold-500/20 shadow-xl overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-3 text-base font-medium text-navy-100 hover:text-gold-400 hover:bg-navy-900 rounded-md transition-all"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 px-3">
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex w-full items-center justify-center px-4 py-3 text-base font-semibold text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 rounded-md shadow-md transition-all"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
