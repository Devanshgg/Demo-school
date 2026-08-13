import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import ResultsDashboard from "@/components/ResultsDashboard";
import Toppers from "@/components/Toppers";
import Achievements from "@/components/Achievements";
import CampusGallery from "@/components/CampusGallery";
import Faculty from "@/components/Faculty";
import EventsSection from "@/components/EventsSection";
import NewsNotices from "@/components/NewsNotices";
import AdmissionsCTA from "@/components/AdmissionsCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingPitch from "@/components/FloatingPitch";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden selection:bg-gold-400 selection:text-navy-950">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="flex-grow">
        {/* Full-screen Hero Section */}
        <Hero />

        {/* About School Section + Counters */}
        <About />

        {/* Core Values / Why Choose Us Grid */}
        <WhyChooseUs />

        {/* Results Tab Panel + Recharts historical trend */}
        <ResultsDashboard />

        {/* Celebrating Student Toppers Podium + Grid */}
        <Toppers />

        {/* Milestone Timeline Journey */}
        <Achievements />

        {/* Infrastructure / Campus categorized Gallery */}
        <CampusGallery />

        {/* Faculty Grid Profiles */}
        <Faculty />

        {/* School Events and Activities Section */}
        <EventsSection />

        {/* Announcements Notice Board */}
        <NewsNotices />

        {/* Admissions Visual Banner */}
        <AdmissionsCTA />

        {/* Contact info + enquiry forms */}
        <ContactSection />
      </main>

      {/* Footer Branding Links */}
      <Footer />

      {/* Floating Demo Pitch Action Button */}
      <FloatingPitch />
    </div>
  );
}
