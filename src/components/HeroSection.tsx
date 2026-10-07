"use client";

import React from "react";
import { ArrowRight, Building2, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export default function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  return (
    <>
      <section className="relative min-h-[85svh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 sm:pt-28 sm:pb-16">
        {/* High-Visibility Architectural Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/projects/project_img_1.jpg"
            className="w-full h-full object-cover object-center filter brightness-100 contrast-105"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>

          {/* Balanced Overlays: Video is bright and visible while text remains 100% readable */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07110C]/80 via-transparent to-[#07110C]/90" />
        </div>

        {/* Hero Content - Perfectly Proportioned on Mobile & Desktop */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-14 text-center flex flex-col items-center">
          {/* Subtle 1-Line Badge - Guaranteed Never to Overflow or Clip */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1 rounded-full bg-[#07110C]/85 backdrop-blur-md border border-[#D4AF37]/40 shadow-md mb-3.5 sm:mb-5 max-w-[94vw]">
            <Sparkles className="w-3 h-3 text-[#E5C365] shrink-0" />
            <span className="text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-[0.16em] font-semibold text-[#F7E7B4] leading-normal text-center">
              Civil & Interior Turnkey Fit-Outs • Bengaluru
            </span>
          </div>

          {/* Headline with Clean Responsive Mobile Sizing */}
          <h1 className="w-full max-w-4xl font-serif font-bold text-white text-[28px] xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.14] tracking-tight mb-3 sm:mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
            Spaces That Grow <br />
            <span className="gold-gradient-text">With You.</span>
          </h1>

          {/* Clean 1-Sentence Subtitle */}
          <p className="max-w-md sm:max-w-xl text-xs sm:text-base md:text-lg text-white/95 font-light leading-relaxed mb-6 sm:mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] px-2">
            Refined architectural design, civil engineering, and bespoke turnkey fit-outs for enterprise workspaces.
          </p>

          {/* Action Buttons: Sleek Responsive Row with Minimum 44px Touch Targets */}
          <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 w-full max-w-xs sm:max-w-none">
            <button
              onClick={onOpenConsultation}
              className="flex-1 sm:flex-initial px-4 py-3 sm:px-8 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wider text-[#07110C] bg-gradient-to-r from-[#FFF2D6] via-[#E5C365] to-[#D4AF37] hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap min-h-[44px]"
            >
              <span><span className="hidden min-[380px]:inline">Request </span>Proposal</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </button>

            <a
              href="#portfolio"
              className="flex-1 sm:flex-initial px-4 py-3 sm:px-7 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wider text-white bg-[#07110C]/80 hover:bg-[#14291F] backdrop-blur-md border border-[#D4AF37]/40 hover:border-[#D4AF37] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-1.5 whitespace-nowrap shadow-xl min-h-[44px]"
            >
              <Building2 className="w-3.5 h-3.5 text-[#E5C365] shrink-0" />
              <span><span className="hidden min-[380px]:inline">View </span>Works</span>
            </a>
          </div>
        </div>
      </section>

      {/* Dedicated Trust Metrics Strip - Clean Padding and Seamless Viewport Alignment */}
      <div className="w-full bg-[#060E09] border-y border-[#D4AF37]/25 py-4 sm:py-5 px-3.5 sm:px-6 lg:px-10 xl:px-14 relative z-20 shadow-md">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-6 text-center">
          <div className="flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-xl bg-[#0B1912]/60 border border-[#1E3B2C]/40">
            <span className="font-serif font-bold text-[#E5C365] text-lg sm:text-2xl">16+</span>
            <span className="text-[10px] sm:text-xs text-[#A3997E] uppercase tracking-wider font-medium mt-0.5">Years Experience</span>
          </div>

          <div className="flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-xl bg-[#0B1912]/60 border border-[#1E3B2C]/40">
            <span className="font-serif font-bold text-[#E5C365] text-lg sm:text-2xl">100%</span>
            <span className="text-[10px] sm:text-xs text-[#A3997E] uppercase tracking-wider font-medium mt-0.5">Turnkey Delivery</span>
          </div>

          <div className="flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-xl bg-[#0B1912]/60 border border-[#1E3B2C]/40">
            <span className="font-serif font-bold text-[#E5C365] text-lg sm:text-2xl">15+</span>
            <span className="text-[10px] sm:text-xs text-[#A3997E] uppercase tracking-wider font-medium mt-0.5">Fortune Clients</span>
          </div>

          <div className="flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-xl bg-[#0B1912]/60 border border-[#1E3B2C]/40">
            <span className="font-serif font-bold text-[#E5C365] text-lg sm:text-2xl">HSE</span>
            <span className="text-[10px] sm:text-xs text-[#A3997E] uppercase tracking-wider font-medium mt-0.5">Compliant</span>
          </div>
        </div>
      </div>
    </>
  );
}
