"use client";

import React, { useState } from "react";
import { COMPANY_INFO } from "@/data/companyData";
import { Award, Briefcase, Phone, Mail, ShieldCheck, Check, Copy, UserCheck, Layers, Sparkles } from "lucide-react";

export default function LeadershipSection() {
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

  const coordinationWings = [
    "Project Coordination",
    "Project Management",
    "Purchase & Stores",
    "Site Execution",
    "Architecture & 3D",
    "Tendering & Estimation",
    "QS / QC Auditing",
    "Accounts & Administration",
  ];

  return (
    <section id="leadership" className="relative py-24 bg-[#07110C] border-t border-[#D4AF37]/20 overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14291F] border border-[#D4AF37]/30 text-xs font-semibold uppercase tracking-[0.2em] text-[#E5C365] mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Leadership & Governance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FBF8F1] leading-tight mb-4">
            Seasoned Industry Direction
          </h2>
          <p className="text-xs sm:text-sm text-[#A3997E] max-w-xl mx-auto">
            Experienced leadership for interior & turnkey fit-out projects with an unbroken track record across South India&apos;s corporate landscape.
          </p>
        </div>

        {/* Leadership & Credentials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Proprietor Spotlight Card (PDF Page 3) */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-[#D4AF37]/40 bg-gradient-to-br from-[#12261C] to-[#0A1610] relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <span className="font-serif text-9xl font-bold text-[#D4AF37]">SK</span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#234232]">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-[#E5C365]">
                  Proprietor & Principal Leader
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FBF8F1] mt-1">
                  {COMPANY_INFO.proprietor.name}
                </h3>
                <p className="text-xs text-[#A3997E] mt-0.5">
                  ARHA INTERIORS • Bengaluru, Karnataka
                </p>
              </div>

              {/* 16 Years Experience Badge */}
              <div className="px-5 py-3 rounded-2xl bg-[#14291F] border border-[#D4AF37] flex items-center gap-3 shrink-0">
                <div className="font-serif text-3xl font-bold text-[#E5C365]">16</div>
                <div className="text-[10px] uppercase font-bold tracking-wider text-[#F4EFEA] leading-tight">
                  Years Professional<br />Experience
                </div>
              </div>
            </div>

            <p className="text-sm text-[#E5DFC5]/90 font-light leading-relaxed mb-6">
              {COMPANY_INFO.proprietor.bio}
            </p>

            {/* Experience Background (Ocean Life Spaces) */}
            <div className="p-4 rounded-2xl bg-[#09150E] border border-[#1E3B2C] mb-6">
              <div className="flex items-center gap-2 text-xs text-[#A3997E] mb-1">
                <Briefcase className="w-3.5 h-3.5 text-[#E5C365]" />
                <span className="uppercase font-mono tracking-wider">Previous Enterprise Background:</span>
              </div>
              <div className="text-sm font-serif font-semibold text-[#FFF2D6]">
                {COMPANY_INFO.proprietor.previousFirm}
              </div>
            </div>

            {/* Direct Connect Action Row */}
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#14291F] border border-[#2B4E3C] hover:border-[#D4AF37] text-[#E5DFC5] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#E5C365]" />
                <span className="font-mono">{COMPANY_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#14291F] border border-[#2B4E3C] hover:border-[#D4AF37] text-[#E5DFC5] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#E5C365]" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Statutory Business Registrations (PDF Page 14) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#12261C] to-[#0A1610]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase font-mono tracking-widest text-[#E5C365]">
                  Statutory Credential
                </span>
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>

              <h4 className="font-serif text-xl font-bold text-[#FBF8F1] mb-4">
                Official Business Registrations
              </h4>

              {/* GST Box */}
              <div className="p-4 rounded-2xl bg-[#09150E] border border-[#234232] mb-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs uppercase font-mono text-[#A3997E]">GST Registration</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                    Active Regular
                  </span>
                </div>
                <div className="font-mono text-base font-bold text-[#FFF2D6] flex items-center justify-between">
                  <span>{COMPANY_INFO.registrations.gstin}</span>
                  <button
                    onClick={() => copyToClipboard(COMPANY_INFO.registrations.gstin, "gst")}
                    className="p-1 hover:text-[#E5C365] transition-colors cursor-pointer"
                    title="Copy GSTIN"
                  >
                    {copiedGst ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#A3997E]" />}
                  </button>
                </div>
                <div className="text-[10px] text-[#A3997E] mt-1">
                  Constitution: {COMPANY_INFO.registrations.constitution} • Issued {COMPANY_INFO.registrations.issueDate}
                </div>
              </div>

              {/* Udyam Box */}
              <div className="p-4 rounded-2xl bg-[#09150E] border border-[#234232]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs uppercase font-mono text-[#A3997E]">Udyam Registration</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#14291F] text-[#E5C365] border border-[#2B4E3C]">
                    Micro • 2026–27
                  </span>
                </div>
                <div className="font-mono text-base font-bold text-[#FFF2D6] flex items-center justify-between">
                  <span>{COMPANY_INFO.registrations.udyam}</span>
                  <button
                    onClick={() => copyToClipboard(COMPANY_INFO.registrations.udyam, "udyam")}
                    className="p-1 hover:text-[#E5C365] transition-colors cursor-pointer"
                    title="Copy Udyam"
                  >
                    {copiedUdyam ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#A3997E]" />}
                  </button>
                </div>
                <div className="text-[10px] text-[#A3997E] mt-1">
                  Major Activity: {COMPANY_INFO.registrations.majorActivity} • Registered {COMPANY_INFO.registrations.udyamDate}
                </div>
              </div>
            </div>

            {/* Coordination Wings (PDF Page 8) */}
            <div className="p-6 rounded-3xl bg-[#09150E] border border-[#1E3B2C]">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-[#E5C365] mb-3 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5" />
                <span>Integrated Functional Wings</span>
              </h5>
              <div className="flex flex-wrap gap-2">
                {coordinationWings.map((wing, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-3 py-1 rounded-full bg-[#12241A] border border-[#2B4E3C] text-[#C5B899]"
                  >
                    {wing}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
