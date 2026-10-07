"use client";

import React, { useState } from "react";
import { METHODOLOGY_STEPS } from "@/data/companyData";
import { Search, PenTool, Calendar, Hammer, KeyRound, CheckCircle2, ArrowRight } from "lucide-react";

export default function ProcessMethodology() {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [Search, PenTool, Calendar, Hammer, KeyRound];

  return (
    <section id="methodology" className="relative py-20 sm:py-24 bg-[#07110C] overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14291F] border border-[#D4AF37]/30 text-xs font-semibold uppercase tracking-[0.2em] text-[#E5C365] mb-3">
            <span>Our Project Approach</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FBF8F1] leading-tight mb-3">
            The 5-Step Turnkey Methodology
          </h2>
          <p className="text-xs sm:text-sm text-[#A3997E] max-w-lg mx-auto">
            From initial site discovery to flawless handover, our transparent 5-stage process ensures total engineering precision and predictable timelines.
          </p>
        </div>

        {/* 5-Step Interactive Roadmap Navigation - Perfectly Aligned 5-Col Grid on Desktop, Smooth Swipe on Mobile */}
        <div className="flex overflow-x-auto snap-x md:grid md:grid-cols-5 gap-3 sm:gap-3.5 mb-8 sm:mb-10 no-scrollbar pb-2 items-stretch">
          {METHODOLOGY_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx];
            const isCurrent = activeStep === idx;

            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`w-[76vw] max-w-[280px] sm:w-[45vw] md:w-auto shrink-0 snap-start p-4 rounded-2xl text-left transition-all duration-200 relative cursor-pointer flex flex-col justify-between border ${
                  isCurrent
                    ? "bg-[#142C20] border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.25)] ring-1 ring-[#D4AF37]"
                    : "bg-[#0E1E16] border-[#1E3B2C] hover:border-[#D4AF37]/50 hover:bg-[#12261C]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-mono text-xs font-bold px-2 py-0.5 rounded transition-colors ${
                      isCurrent
                        ? "bg-[#D4AF37] text-[#07110C]"
                        : "bg-[#1A3325] text-[#A3997E]"
                    }`}
                  >
                    {step.number}
                  </span>
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isCurrent ? "text-[#E5C365]" : "text-[#7A9E8A]"
                    }`}
                  />
                </div>

                <div>
                  <h3
                    className={`font-serif text-sm font-bold tracking-wide uppercase transition-colors ${
                      isCurrent ? "text-[#FFF2D6]" : "text-[#E5DFC5]"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-[#A3997E] line-clamp-1 mt-0.5">
                    {step.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep Dive Display Panel */}
        <div className="glass-panel p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#12261C] to-[#0A1610] shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Stage Description & Milestones */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#E5C365] uppercase mb-2">
                <span>Phase {METHODOLOGY_STEPS[activeStep].number} of 05</span>
                <span>•</span>
                <span>{METHODOLOGY_STEPS[activeStep].tagline}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#FBF8F1] mb-4">
                {METHODOLOGY_STEPS[activeStep].title} — {METHODOLOGY_STEPS[activeStep].tagline}
              </h3>

              <p className="text-sm sm:text-base text-[#E5DFC5]/90 font-light leading-relaxed mb-6">
                {METHODOLOGY_STEPS[activeStep].description}
              </p>

              <div className="border-t border-[#234232] pt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E5C365] mb-3">
                  Key Deliverables & Action Items:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {METHODOLOGY_STEPS[activeStep].activities.map((act, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#E5C365] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#E5DFC5] leading-snug">{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stage Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-xl bg-[#07110C]">
                <img
                  src={
                    activeStep === 0
                      ? "/images/projects/project_img_12.jpg"
                      : activeStep === 1
                      ? "/images/projects/project_img_1.jpg"
                      : activeStep === 2
                      ? "/images/projects/project_img_15.jpg"
                      : activeStep === 3
                      ? "/images/projects/project_img_16.jpg"
                      : "/images/projects/project_img_19.jpg"
                  }
                  alt={METHODOLOGY_STEPS[activeStep].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1912] via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#FFF2D6] font-mono">
                  <span>STAGE {METHODOLOGY_STEPS[activeStep].number}</span>
                  <span className="text-[#E5C365]">100% QUALITY GOVERNED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
