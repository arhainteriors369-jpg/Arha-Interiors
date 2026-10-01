"use client";

import React, { useRef, useState } from "react";
import { ArrowRight, Play, Pause, Award, CheckCircle2, ShieldCheck, Sparkles, Building2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export default function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Background Video with Luxury Emerald Film Overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/images/projects/project_img_1.jpg"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-110 transition-transform duration-1000"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Multi-layered cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07110C] via-[#07110C]/80 to-[#07110C]/60" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0B1912]/70 to-[#07110C]/95" />
        
        {/* Subtle Luxury Gold Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#D4AF37 1px, transparent 1px)`,
            backgroundSize: "36px 36px"
          }}
        />
      </div>

      {/* Video Control Widget */}
      <div className="absolute bottom-8 right-6 z-20 hidden md:flex items-center gap-3 bg-[#0B1912]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D4AF37]/30 text-xs text-[#E5DFC5]">
        <button
          onClick={toggleVideo}
          className="flex items-center gap-1.5 hover:text-[#E5C365] transition-colors cursor-pointer"
          title={isPlaying ? "Pause background video" : "Play background video"}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5 text-[#E5C365]" /> : <Play className="w-3.5 h-3.5 text-[#E5C365]" />}
          <span className="text-[11px] tracking-wider uppercase font-mono">
            {isPlaying ? "Ambient Video" : "Paused"}
          </span>
        </button>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14291F]/90 border border-[#D4AF37]/40 shadow-[0_0_25px_rgba(212,175,55,0.2)] mb-6 animate-pulse-slow">
          <Sparkles className="w-3.5 h-3.5 text-[#E5C365]" />
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F7E7B4]">
            Civil & Interior Turnkey Fit-Out Partner • Bengaluru
          </span>
        </div>

        {/* Primary Tagline from PDF */}
        <div className="mb-3">
          <p className="font-serif italic text-lg sm:text-2xl text-[#E5C365] tracking-wide font-light">
            &ldquo;Spaces that grow with you&rdquo;
          </p>
        </div>

        {/* Big Impact Headline */}
        <h1 className="max-w-5xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#FBF8F1] leading-[1.15] mb-6">
          A Refined Turnkey Interior Partner for{" "}
          <span className="gold-gradient-text block sm:inline">
            Corporate & Commercial
          </span>{" "}
          Spaces.
        </h1>

        {/* Executive Sub-statement */}
        <p className="max-w-3xl text-sm sm:text-base md:text-lg text-[#E5DFC5]/90 font-light leading-relaxed mb-10">
          End-to-end architectural design, fast-track civil contracting, and precision MEP engineering.
          Backed by <span className="text-[#E5C365] font-semibold">16 years</span> of leadership delivering landmark campuses for 
          <span className="text-white font-medium"> Walmart, Google India, Shell, TATA, L&apos;Oréal</span>, and leading enterprises.
        </p>

        {/* Interactive Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-[0.16em] text-[#07110C] bg-gradient-to-r from-[#FFF2D6] via-[#E5C365] to-[#D4AF37] hover:from-[#FFFFFF] hover:to-[#E5C365] shadow-[0_0_30px_rgba(212,175,55,0.35)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>Request Turnkey Proposal</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href="#portfolio"
            className="w-full sm:w-auto px-7 py-4 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-[0.16em] text-[#FBF8F1] bg-[#14291F]/80 hover:bg-[#1E3B2C] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
          >
            <Building2 className="w-4 h-4 text-[#E5C365]" />
            <span>Explore Works</span>
          </a>

          <a
            href="#estimator"
            className="w-full sm:w-auto px-6 py-4 rounded-full font-medium text-xs sm:text-sm tracking-wider text-[#E5C365] hover:text-[#FFF2D6] bg-transparent border border-[#2B4E3C] hover:border-[#E5C365]/50 transition-all flex items-center justify-center gap-2"
          >
            <span>Calculate Cost & Timeline</span>
          </a>
        </div>

        {/* Executive Stats & Trust Badges Strip */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 pt-8 border-t border-[#D4AF37]/20">
          <div className="glass-panel p-4 md:p-5 rounded-2xl flex flex-col items-center justify-center text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#E5C365] mb-1">
              16+
            </div>
            <div className="text-xs uppercase tracking-wider text-[#E5DFC5]/80 font-medium">
              Years Experience
            </div>
            <div className="text-[10px] text-[#A3997E] mt-0.5">
              Led by Senthil Karuppasamy
            </div>
          </div>

          <div className="glass-panel p-4 md:p-5 rounded-2xl flex flex-col items-center justify-center text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#E5C365] mb-1">
              100%
            </div>
            <div className="text-xs uppercase tracking-wider text-[#E5DFC5]/80 font-medium">
              Turnkey Accountability
            </div>
            <div className="text-[10px] text-[#A3997E] mt-0.5">
              Concept to Handover
            </div>
          </div>

          <div className="glass-panel p-4 md:p-5 rounded-2xl flex flex-col items-center justify-center text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#E5C365] mb-1">
              15+
            </div>
            <div className="text-xs uppercase tracking-wider text-[#E5DFC5]/80 font-medium">
              Fortune & Global Brands
            </div>
            <div className="text-[10px] text-[#A3997E] mt-0.5">
              Walmart, Google, TATA, Shell
            </div>
          </div>

          <div className="glass-panel p-4 md:p-5 rounded-2xl flex flex-col items-center justify-center text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#E5C365] mb-1 flex items-center justify-center gap-1">
              <ShieldCheck className="w-7 h-7 text-[#E5C365]" />
              <span>HSE</span>
            </div>
            <div className="text-xs uppercase tracking-wider text-[#E5DFC5]/80 font-medium">
              Compliant & Registered
            </div>
            <div className="text-[10px] text-[#A3997E] mt-0.5">
              GST & Udyam Certified
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#08120D] to-transparent pointer-events-none" />
    </section>
  );
}
