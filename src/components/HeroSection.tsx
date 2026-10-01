"use client";

import React, { useRef, useState } from "react";
import { ArrowRight, Play, Pause, Building2, Sparkles } from "lucide-react";

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
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20">
      {/* High-Visibility Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/images/projects/project_img_1.jpg"
          className="w-full h-full object-cover object-center filter brightness-105 contrast-105 transition-transform duration-1000"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Lightweight Cinematic Overlays - Video is clearly visible */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07110C]/70 via-transparent to-[#07110C]/90" />
      </div>

      {/* Video Play/Pause Toggle */}
      <button
        onClick={toggleVideo}
        className="absolute top-24 right-4 sm:top-28 sm:right-8 z-20 flex items-center gap-1.5 bg-[#0B1912]/75 hover:bg-[#14291F] backdrop-blur-md px-3 py-1.5 rounded-full border border-[#D4AF37]/30 text-xs text-[#E5DFC5] transition-all cursor-pointer shadow-lg"
        title={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? <Pause className="w-3 h-3 text-[#E5C365]" /> : <Play className="w-3 h-3 text-[#E5C365]" />}
        <span className="text-[10px] tracking-wider uppercase font-mono hidden sm:inline">
          {isPlaying ? "Video Playing" : "Paused"}
        </span>
      </button>

      {/* Hero Minimalist Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-14 text-center flex flex-col items-center">
        {/* Subtle Luxury Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#07110C]/85 backdrop-blur-md border border-[#D4AF37]/40 shadow-[0_0_20px_rgba(212,175,55,0.25)] mb-4 sm:mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#E5C365] shrink-0" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#F7E7B4]">
            Civil & Interior Turnkey Fit-Outs • Bengaluru
          </span>
        </div>

        {/* Punchy Standout Headline */}
        <h1 className="w-full max-w-5xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-white tracking-tight leading-[1.08] mb-4 sm:mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
          Spaces That Grow <br className="hidden sm:inline" />
          <span className="gold-gradient-text">With You.</span>
        </h1>

        {/* Short, Refined Sub-statement */}
        <p className="max-w-xl text-xs sm:text-base md:text-lg text-white/90 font-light leading-relaxed mb-8 sm:mb-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          End-to-end design, civil engineering, and bespoke turnkey fit-outs for corporate and commercial workspaces.
        </p>

        {/* 2 Clean Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-[0.14em] text-[#07110C] bg-gradient-to-r from-[#FFF2D6] via-[#E5C365] to-[#D4AF37] hover:from-[#FFFFFF] hover:to-[#E5C365] shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer whitespace-nowrap"
          >
            <span>Request Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#portfolio"
            className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-[0.14em] text-white bg-[#07110C]/75 hover:bg-[#14291F] backdrop-blur-md border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap shadow-lg"
          >
            <Building2 className="w-4 h-4 text-[#E5C365]" />
            <span>Explore Works</span>
          </a>
        </div>
      </div>

      {/* Slim Ambient Trust Strip at the Bottom */}
      <div className="absolute bottom-4 left-0 right-0 w-full px-4 sm:px-6 lg:px-10 xl:px-14 z-20 pointer-events-none">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-around gap-3 sm:gap-6 py-2.5 px-5 rounded-2xl bg-[#07110C]/80 backdrop-blur-md border border-[#D4AF37]/25 text-xs text-[#E5DFC5] shadow-2xl pointer-events-auto">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-[#E5C365] text-sm">16+</span>
            <span className="text-[10px] sm:text-[11px] text-[#A3997E] uppercase tracking-wider">Years Experience</span>
          </div>
          <span className="hidden sm:inline text-[#2B4E3C]">•</span>
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-[#E5C365] text-sm">100%</span>
            <span className="text-[10px] sm:text-[11px] text-[#A3997E] uppercase tracking-wider">Turnkey Delivery</span>
          </div>
          <span className="hidden sm:inline text-[#2B4E3C]">•</span>
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-[#E5C365] text-sm">15+</span>
            <span className="text-[10px] sm:text-[11px] text-[#A3997E] uppercase tracking-wider">Fortune Clients</span>
          </div>
          <span className="hidden sm:inline text-[#2B4E3C]">•</span>
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-[#E5C365] text-sm">HSE</span>
            <span className="text-[10px] sm:text-[11px] text-[#A3997E] uppercase tracking-wider">Compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
}
