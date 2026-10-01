"use client";

import React, { useState } from "react";
import { SERVICES_DATA, COMPANY_INFO } from "@/data/companyData";
import { 
  Compass, 
  HardHat, 
  Cpu, 
  Armchair, 
  Lightbulb, 
  ClipboardCheck, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  Users,
  Leaf,
  Award,
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState(SERVICES_DATA[0].id);

  const icons = [
    Compass,
    HardHat,
    Cpu,
    Armchair,
    Lightbulb,
    ClipboardCheck,
  ];

  const pillarIcons = [Users, Sparkles, Leaf, Award];

  const currentService = SERVICES_DATA.find((s) => s.id === activeTab) || SERVICES_DATA[0];

  return (
    <section id="capabilities" className="relative py-24 bg-[#08120D] overflow-hidden">
      {/* Background architectural grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#14291F0A_1px,transparent_1px),linear-gradient(to_bottom,#14291F0A_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14291F] border border-[#D4AF37]/30 text-xs font-semibold uppercase tracking-[0.2em] text-[#E5C365] mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>End-to-End Turnkey Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FBF8F1] leading-tight mb-4">
            Capabilities & Core Service Offerings
          </h2>
          <p className="text-sm sm:text-base text-[#E5DFC5]/80 leading-relaxed font-light">
            We deliver single-point turnkey responsibility covering architectural conceptualization, 
            structural civil modifications, integrated MEP engineering, bespoke joinery, and seamless handover.
          </p>
        </div>

        {/* The 4 Core Pillars Strip - Horizontal Swipe on Mobile */}
        <div className="flex overflow-x-auto snap-x sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mb-12 sm:mb-16 no-scrollbar pb-2">
          {COMPANY_INFO.pillars.map((pillar, idx) => {
            const IconComponent = pillarIcons[idx % pillarIcons.length];
            return (
              <div
                key={pillar.title}
                className="w-[75vw] sm:w-auto shrink-0 snap-start glass-panel p-5 rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#14291F] border border-[#2B4E3C] flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-[#D4AF37] transition-all">
                  <IconComponent className="w-5 h-5 text-[#E5C365]" />
                </div>
                <h3 className="font-serif font-semibold text-base text-[#F4EFEA] mb-1 group-hover:text-[#E5C365] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#A3997E] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* MOBILE VIEW (Under lg): In-Place Expandable Accordion with Next/Prev Switcher */}
        {/* Solves mobile friction: No scrolling down to a separate box, and no repetitive horizontal scroll bar */}
        <div className="block lg:hidden space-y-3.5">
          {SERVICES_DATA.map((service, index) => {
            const Icon = icons[index % icons.length];
            const isOpen = activeTab === service.id;

            return (
              <div
                key={service.id}
                className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? "bg-[#142C20] border-[#D4AF37] shadow-[0_8px_25px_rgba(212,175,55,0.18)]"
                    : "bg-[#0E1E16]/90 border-[#1E3B2C] hover:border-[#D4AF37]/40"
                }`}
              >
                {/* Accordion Header / Card Trigger */}
                <button
                  type="button"
                  onClick={() => setActiveTab(isOpen ? "" : service.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-3 cursor-pointer"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <span
                      className={`text-xs font-mono font-bold tracking-widest px-2.5 py-1 rounded-md shrink-0 transition-colors mt-0.5 ${
                        isOpen
                          ? "bg-[#D4AF37] text-[#07110C]"
                          : "bg-[#1A3325] text-[#A3997E]"
                      }`}
                    >
                      {service.number}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <Icon
                          className={`w-4 h-4 shrink-0 transition-colors ${
                            isOpen ? "text-[#E5C365]" : "text-[#7A9E8A]"
                          }`}
                        />
                        <h3
                          className={`font-serif text-sm sm:text-base font-semibold leading-snug transition-colors ${
                            isOpen ? "text-[#FFF2D6]" : "text-[#E5DFC5]"
                          }`}
                        >
                          {service.title}
                        </h3>
                      </div>
                      {!isOpen && (
                        <p className="text-[11px] text-[#A3997E] line-clamp-1 mt-1 pl-6 leading-relaxed">
                          {service.shortDesc}
                        </p>
                      )}
                    </div>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#D4AF37]/20 border-[#D4AF37] text-[#E5C365] rotate-180"
                        : "bg-[#14291F] border-[#2B4E3C] text-[#A3997E]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Inline Expanded Scope & Deliverables */}
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 pt-1 border-t border-[#1E3B2C]/70 animate-in fade-in duration-200">
                    <div className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-[#E5C365] uppercase mb-2">
                      <span>Detailed Scope</span>
                      <span>•</span>
                      <span>{service.number} / 06</span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#E5DFC5]/90 font-light leading-relaxed mb-4">
                      {service.fullDesc}
                    </p>

                    {/* Scope Deliverables List */}
                    <div className="bg-[#0B1711]/70 rounded-xl p-3.5 border border-[#1E3B2C]/60 mb-4">
                      <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#E5C365] mb-2.5">
                        Key Scope & Deliverables:
                      </h4>
                      <div className="space-y-2">
                        {service.deliverables.map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#E5C365] shrink-0 mt-0.5" />
                            <span className="text-xs text-[#E5DFC5] leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Inquire CTA Button + Quick Next/Prev Switchers */}
                    <div className="flex flex-col gap-2.5">
                      <button
                        onClick={() => onSelectService(service.title)}
                        className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#07110C] bg-gradient-to-r from-[#FFF2D6] via-[#E5C365] to-[#D4AF37] shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
                      >
                        <span>Inquire for {service.title.split(" ")[0]}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      {/* Instant Next/Prev Navigation: User can switch services with one tap right here */}
                      <div className="flex items-center justify-between pt-2 border-t border-[#1E3B2C]/50 text-[11px] text-[#A3997E]">
                        {index > 0 ? (
                          <button
                            type="button"
                            onClick={() => setActiveTab(SERVICES_DATA[index - 1].id)}
                            className="inline-flex items-center gap-1 hover:text-[#E5C365] transition-colors py-1 cursor-pointer"
                          >
                            <ChevronLeft className="w-3.5 h-3.5" />
                            <span>Prev ({SERVICES_DATA[index - 1].number})</span>
                          </button>
                        ) : <div />}

                        {index < SERVICES_DATA.length - 1 && (
                          <button
                            type="button"
                            onClick={() => setActiveTab(SERVICES_DATA[index + 1].id)}
                            className="inline-flex items-center gap-1 hover:text-[#E5C365] transition-colors py-1 cursor-pointer ml-auto text-right font-medium text-[#E5DFC5]"
                          >
                            <span>Next: {SERVICES_DATA[index + 1].title.split(" ")[0]} ({SERVICES_DATA[index + 1].number})</span>
                            <ChevronRight className="w-3.5 h-3.5 text-[#E5C365]" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* DESKTOP VIEW (lg and above): Classic 2-Column Split with Sticky Deep-Dive Drawer */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 6 Service Cards / Selectors */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {SERVICES_DATA.map((service, index) => {
              const Icon = icons[index % icons.length];
              const isSelected = activeTab === service.id;

              return (
                <div
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 relative overflow-hidden group ${
                    isSelected
                      ? "bg-[#142C20] border-2 border-[#D4AF37] shadow-[0_10px_30px_rgba(212,175,55,0.15)] -translate-y-1"
                      : "bg-[#0E1E16]/80 border border-[#1E3B2C] hover:border-[#D4AF37]/40 hover:bg-[#12261C]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-mono font-bold tracking-widest px-2 py-0.5 rounded ${
                        isSelected
                          ? "bg-[#D4AF37] text-[#07110C]"
                          : "bg-[#1A3325] text-[#A3997E] group-hover:text-[#E5C365]"
                      }`}
                    >
                      {service.number}
                    </span>
                    <Icon
                      className={`w-5 h-5 transition-transform group-hover:scale-110 ${
                        isSelected ? "text-[#E5C365]" : "text-[#7A9E8A]"
                      }`}
                    />
                  </div>

                  <h3
                    className={`font-serif text-base font-semibold leading-snug mb-2 transition-colors ${
                      isSelected ? "text-[#FFF2D6]" : "text-[#E5DFC5] group-hover:text-[#FFF2D6]"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#A3997E] line-clamp-2 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Service Drawer / Deep Dive */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#12261C] to-[#0A1610] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <span className="font-serif text-8xl font-bold text-[#E5C365]">
                  {currentService.number}
                </span>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#E5C365] uppercase mb-2">
                <span>Detailed Service Scope</span>
                <span>•</span>
                <span>{currentService.number} / 06</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#FBF8F1] mb-4">
                {currentService.title}
              </h3>

              <p className="text-sm sm:text-base text-[#E5DFC5]/90 font-light leading-relaxed mb-6">
                {currentService.fullDesc}
              </p>

              <div className="border-t border-[#234232] pt-6 mb-8">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E5C365] mb-4">
                  Key Scope & Deliverables:
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {currentService.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#E5C365] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#E5DFC5] leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <button
                  onClick={() => onSelectService(currentService.title)}
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-[#07110C] bg-gradient-to-r from-[#FFF2D6] via-[#E5C365] to-[#D4AF37] hover:from-[#FFFFFF] hover:to-[#E5C365] shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-105"
                >
                  <span>Inquire for {currentService.title.split(" ")[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <span className="text-[11px] text-[#A3997E]">
                  Guaranteed fast-track turnaround & single-window coordination.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
