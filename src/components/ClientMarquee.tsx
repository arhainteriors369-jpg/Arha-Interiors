"use client";

import React, { useState } from "react";
import { ENTERPRISE_CLIENTS, COMPANY_INFO } from "@/data/companyData";
import { ShieldCheck, Check, Copy, ExternalLink, Sparkles } from "lucide-react";

export default function ClientMarquee() {
  const [copiedGst, setCopiedGst] = useState(false);
  const [copiedUdyam, setCopiedUdyam] = useState(false);

  const copyToClipboard = (text: string, type: "gst" | "udyam") => {
    navigator.clipboard.writeText(text);
    if (type === "gst") {
      setCopiedGst(true);
      setTimeout(() => setCopiedGst(false), 2000);
    } else {
      setCopiedUdyam(true);
      setTimeout(() => setCopiedUdyam(false), 2000);
    }
  };

  // Duplicate list to create a seamless infinite loop
  const marqueeList = [...ENTERPRISE_CLIENTS, ...ENTERPRISE_CLIENTS];

  return (
    <section className="relative py-12 bg-[#09150E] border-y border-[#D4AF37]/20 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-24 bg-[#1E3B2C]/30 blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 mb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#E5C365] mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Track Record of Excellence</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#FBF8F1]">
              Trusted by Leading Global Enterprises & PMCs
            </h2>
          </div>
          <p className="text-xs text-[#A3997E] max-w-md">
            Representative client experience reproduced from our certified corporate portfolio, delivering turnkey workspaces across Bengaluru and pan-India.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Ticker */}
      <div className="relative w-full overflow-hidden py-4 select-none">
        {/* Left & Right Gradient Shadows */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#09150E] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#09150E] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-4">
          {marqueeList.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#12241A] border border-[#2B4E3C]/60 hover:border-[#D4AF37] hover:bg-[#183224] transition-all duration-300 group cursor-default shrink-0 shadow-md"
            >
              <div className="w-2 h-2 rounded-full bg-[#D4AF37]/50 group-hover:bg-[#E5C365] group-hover:scale-125 transition-all" />
              <div className="flex flex-col">
                <span className="font-serif tracking-wide text-sm font-semibold text-[#F4EFEA] group-hover:text-[#E5C365] transition-colors whitespace-nowrap">
                  {client.name}
                </span>
                <span className="text-[10px] text-[#A3997E] tracking-wider uppercase font-sans">
                  {client.industry}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verified Government Credentials Badge Strip */}
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 mt-6 pt-6 border-t border-[#1E3B2C]/60">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3.5 text-xs text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2 text-[#E5DFC5]/80">
            <ShieldCheck className="w-4 h-4 text-[#E5C365] shrink-0" />
            <span className="font-medium">Statutory Registrations:</span>
            <span className="text-[#A3997E]">Govt Certified Micro Enterprise • Bengaluru</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {/* GST Chip */}
            <div className="flex items-center gap-2 px-2.5 py-1.5 sm:px-3 rounded-lg bg-[#0F2016] border border-[#2B4E3C] text-[10px] sm:text-[11px] text-[#E5DFC5]">
              <span className="text-[#A3997E]">GSTIN:</span>
              <span className="font-mono text-[#E5C365] font-semibold">{COMPANY_INFO.registrations.gstin}</span>
              <button
                onClick={() => copyToClipboard(COMPANY_INFO.registrations.gstin, "gst")}
                className="hover:text-white transition-colors cursor-pointer ml-1"
                title="Copy GSTIN"
              >
                {copiedGst ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#A3997E]" />}
              </button>
            </div>

            {/* Udyam Chip */}
            <div className="flex items-center gap-2 px-2.5 py-1.5 sm:px-3 rounded-lg bg-[#0F2016] border border-[#2B4E3C] text-[10px] sm:text-[11px] text-[#E5DFC5]">
              <span className="text-[#A3997E]">Udyam:</span>
              <span className="font-mono text-[#E5C365] font-semibold">{COMPANY_INFO.registrations.udyam}</span>
              <button
                onClick={() => copyToClipboard(COMPANY_INFO.registrations.udyam, "udyam")}
                className="hover:text-white transition-colors cursor-pointer ml-1"
                title="Copy Udyam Number"
              >
                {copiedUdyam ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#A3997E]" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
