"use client";

import React from "react";
import { QUALITY_SAFETY_POINTS, WHY_CHOOSE_US } from "@/data/companyData";
import { ShieldAlert, CheckCircle, Award, FileText, Users, Sparkles, Building, CheckCheck } from "lucide-react";

export default function QualitySafetySection() {
  return (
    <section className="relative py-24 bg-[#08120D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14291F] border border-[#D4AF37]/30 text-xs font-semibold uppercase tracking-[0.2em] text-[#E5C365] mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Institutional Rigor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FBF8F1] leading-tight mb-4">
            Quality Assurance & HSE Safety Governance
          </h2>
          <p className="text-xs sm:text-sm text-[#A3997E] max-w-xl mx-auto">
            From zero-incident safety protocols to micro-tolerance joinery inspections, our delivery standards match the most demanding global enterprise PMCs.
          </p>
        </div>

        {/* 6 Quality & Safety Pillars from PDF Page 13 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {QUALITY_SAFETY_POINTS.map((item) => (
            <div
              key={item.code}
              className="glass-panel p-6 rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] font-bold tracking-widest px-2.5 py-1 rounded bg-[#14291F] border border-[#2B4E3C] text-[#E5C365]">
                  {item.code}
                </span>
                <ShieldAlert className="w-5 h-5 text-[#E5C365]/60 group-hover:text-[#E5C365] transition-colors" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#FBF8F1] mb-2 group-hover:text-[#E5C365] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-[#A3997E] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Why Choose ARHA Interiors? (The 8 Criteria from PDF Page 5) */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#12261C] to-[#0A1610]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-[#234232]">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#E5C365]">
                Competitive Advantage
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#FBF8F1] mt-1">
                Why Industry Leaders Choose ARHA Interiors
              </h3>
            </div>
            <p className="text-xs text-[#A3997E] max-w-sm">
              Reproduced from our core executive commitment to transparent pricing and flawless craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((reason, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#14291F] border border-[#D4AF37]/60 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCheck className="w-3.5 h-3.5 text-[#E5C365]" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#F4EFEA] mb-1">
                    {reason.title}
                  </h4>
                  <p className="text-[11px] text-[#A3997E] leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
