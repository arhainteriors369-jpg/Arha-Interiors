"use client";

import React, { useState } from "react";
import { Calculator, Clock, Calendar, CheckSquare, ArrowRight, ShieldCheck, Sparkles, Building, Home, Building2, Cog, Sofa } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

interface CostEstimatorProps {
  onEstimateSubmit: (data: {
    spaceType: string;
    area: number;
    timeline: string;
    selectedScopes: string[];
  }) => void;
}

export default function CostEstimator({ onEstimateSubmit }: CostEstimatorProps) {
  const [spaceType, setSpaceType] = useState<string>("Commercial Interiors");
  const [area, setArea] = useState<number>(15000);
  const [scopes, setScopes] = useState<string[]>([
    "Civil & Partition Works",
    "MEP, HVAC & Fire Safety",
    "Modular Furniture & Joinery",
    "Architectural Lighting & Controls",
  ]);

  const spaceTypes = [
    { label: "Commercial Interiors", icon: Building2 },
    { label: "Residential Interiors", icon: Home },
    { label: "Turnkey Solutions", icon: Cog },
    { label: "Furniture & Fit-Out Works", icon: Sofa },
  ];

  const availableScopes = [
    "Civil & Partition Works",
    "MEP, HVAC & Fire Safety",
    "Modular Furniture & Joinery",
    "Architectural Lighting & Controls",
    "Acoustic Wall & Ceiling Paneling",
    "Access Control & Structured Cabling",
  ];

  const toggleScope = (item: string) => {
    if (scopes.includes(item)) {
      if (scopes.length > 1) {
        setScopes(scopes.filter((s) => s !== item));
      }
    } else {
      setScopes([...scopes, item]);
    }
  };

  // Estimate calculations
  const calculateTimeline = () => {
    if (area < 5000) return "4 – 6 Weeks";
    if (area < 15000) return "6 – 8 Weeks";
    if (area < 35000) return "8 – 12 Weeks";
    if (area < 75000) return "12 – 16 Weeks";
    if (area < 125000) return "16 – 20 Weeks";
    return "20 – 26 Weeks (Fast-track)";
  };

  const estimatedTimeline = calculateTimeline();
  const estimatedDedicatedTeam = Math.max(12, Math.round((area / 1000) * 2.5));

  const handleApply = () => {
    onEstimateSubmit({
      spaceType,
      area,
      timeline: estimatedTimeline,
      selectedScopes: scopes,
    });
  };

  return (
    <section id="estimator" className="relative py-24 bg-[#09150E] border-t border-[#D4AF37]/20 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#14291F]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14291F] border border-[#D4AF37]/30 text-xs font-semibold uppercase tracking-[0.2em] text-[#E5C365] mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Project Planner</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FBF8F1] leading-tight mb-4">
            Turnkey Scope & Timeline Estimator
          </h2>
          <p className="text-xs sm:text-sm text-[#A3997E] max-w-xl mx-auto">
            Plan your workspace transformation with realistic enterprise turnaround metrics backed by our 16-year Bangalore fit-out benchmark.
          </p>
        </div>

        {/* Estimator Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Column */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/30 flex flex-col justify-between">
            <div className="space-y-8">
              {/* 1. Space Type Selection */}
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-[#E5C365] mb-3">
                  1. Select Space Typology
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {spaceTypes.map((type) => (
                    <button
                      key={type.label}
                      onClick={() => setSpaceType(type.label)}
                      className={`p-3.5 rounded-xl text-left text-xs font-medium transition-all duration-200 cursor-pointer flex items-center justify-between ${
                        spaceType === type.label
                          ? "bg-[#142C20] border-2 border-[#D4AF37] text-[#FFF2D6] font-semibold"
                          : "bg-[#0E1E16] border border-[#1E3B2C] text-[#C5B899] hover:bg-[#12261C] hover:text-[#FFF2D6]"
                      }`}
                    >
                      <span>{type.label}</span>
                      {spaceType === type.label && (
                        <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Space Area Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-semibold tracking-wider uppercase text-[#E5C365]">
                    2. Approximate Floor Area (sq. ft.)
                  </label>
                  <span className="font-mono text-base font-bold text-[#FFF2D6] px-3 py-1 rounded bg-[#14291F] border border-[#2B4E3C]">
                    {area.toLocaleString("en-IN")} sq. ft.
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="200000"
                  step="1000"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-2 bg-[#14291F] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                />
                <div className="flex justify-between text-[10px] text-[#A3997E] font-mono mt-2">
                  <span>2,000 sq.ft (Boutique)</span>
                  <span>1,00,000 sq.ft (Campus Wing)</span>
                  <span>2,00,000+ sq.ft (Full Floorplate)</span>
                </div>
              </div>

              {/* 3. Scope Checklist */}
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-[#E5C365] mb-3">
                  3. Required Turnkey Scopes
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {availableScopes.map((scope) => {
                    const isChecked = scopes.includes(scope);
                    return (
                      <div
                        key={scope}
                        onClick={() => toggleScope(scope)}
                        className={`p-3 rounded-xl cursor-pointer text-xs flex items-center gap-3 transition-colors ${
                          isChecked
                            ? "bg-[#142C20] border border-[#D4AF37]/60 text-[#FFF2D6]"
                            : "bg-[#0E1E16] border border-[#1E3B2C] text-[#A3997E] hover:text-[#C5B899]"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                            isChecked
                              ? "bg-[#D4AF37] border-[#D4AF37] text-[#07110C]"
                              : "border-[#2B4E3C]"
                          }`}
                        >
                          {isChecked && <CheckSquare className="w-3.5 h-3.5" />}
                        </div>
                        <span className="leading-snug">{scope}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#12261C] to-[#0A1610] p-6 sm:p-8 rounded-3xl border-2 border-[#D4AF37]/40 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E5C365] mb-2">
                <span>Calculated Turnaround Metrics</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#FBF8F1] mb-6">
                Turnkey Project Summary
              </h3>

              {/* Metric Cards */}
              <div className="space-y-3.5 mb-6 sm:mb-8">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0B1912] border border-[#234232] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#14291F] border border-[#2B4E3C] flex items-center justify-center text-[#E5C365] shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#A3997E]">Estimated Delivery</div>
                      <div className="text-sm sm:text-base font-serif font-bold text-[#FFF2D6]">
                        {estimatedTimeline}
                      </div>
                    </div>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 shrink-0">
                    Fast-Track
                  </span>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0B1912] border border-[#234232] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#14291F] border border-[#2B4E3C] flex items-center justify-center text-[#E5C365] shrink-0">
                      <Building className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#A3997E]">Workplace Footprint</div>
                      <div className="text-sm sm:text-base font-serif font-bold text-[#FFF2D6]">
                        {area.toLocaleString("en-IN")} sq. ft.
                      </div>
                    </div>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-[#14291F] text-[#A3997E] border border-[#2B4E3C] shrink-0">
                    Bengaluru Base
                  </span>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0B1912] border border-[#234232] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#14291F] border border-[#2B4E3C] flex items-center justify-center text-[#E5C365] shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#A3997E]">Dedicated In-House Force</div>
                      <div className="text-sm sm:text-base font-serif font-bold text-[#FFF2D6]">
                        ~{estimatedDedicatedTeam} Specialized Craftsmen
                      </div>
                    </div>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800 shrink-0">
                    HSE Certified
                  </span>
                </div>
              </div>

              <div className="text-xs text-[#A3997E] mb-6 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5C365]" />
                  <span>Includes 2D/3D Concept Design & Space Planning</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5C365]" />
                  <span>Full BOQ Transparency & Single-Window Handover</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleApply}
              className="w-full py-4 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-[0.16em] text-[#07110C] bg-gradient-to-r from-[#FFF2D6] via-[#E5C365] to-[#D4AF37] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_25px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2 cursor-pointer font-sans"
            >
              <span>Request Detailed BOQ & Site Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
