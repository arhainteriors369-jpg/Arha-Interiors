"use client";

import React from "react";
import ArhaLogo from "./ArhaLogo";
import WhatsAppIcon from "./WhatsAppIcon";
import { COMPANY_INFO } from "@/data/companyData";
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp, Sparkles } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050C08] border-t border-[#D4AF37]/30 pt-16 pb-12 overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        {/* Mobile & Desktop Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-[#1E3B2C]/50">
          
          {/* Brand Col - Full Width on Mobile (col-span-2), 2 Cols on Large */}
          <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2 space-y-4">
            <ArhaLogo size="lg" />
            <p className="text-xs text-[#A3997E] leading-relaxed max-w-md">
              End-to-end civil contracting, interior architecture, and turnkey MEP fit-outs for enterprise, commercial, and institutional spaces. A single-point experience from concept through handover.
            </p>
            <div className="p-3 rounded-xl bg-[#09150E] border border-[#1E3B2C] text-xs text-[#E5C365] font-serif italic max-w-md">
              &ldquo;{COMPANY_INFO.thankYouQuote}&rdquo;
            </div>
          </div>

          {/* Column 2: Quick Links (1 Col on Mobile) */}
          <div className="col-span-1 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-[#E5C365]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#A3997E]">
              <li>
                <a href="#about" className="hover:text-[#FFF2D6] transition-colors block py-0.5">
                  About Us
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-[#FFF2D6] transition-colors block py-0.5">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#FFF2D6] transition-colors block py-0.5">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-[#FFF2D6] transition-colors block py-0.5">
                  Methodology
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-[#FFF2D6] transition-colors block py-0.5">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-[#FFF2D6] transition-colors block py-0.5">
                  Estimator
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Capabilities (1 Col on Mobile) */}
          <div className="col-span-1 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-[#E5C365]">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-[#A3997E]">
              <li className="py-0.5">Interior Design & 3D</li>
              <li className="py-0.5">Turnkey Fit-Out</li>
              <li className="py-0.5">Civil & MEP Works</li>
              <li className="py-0.5">Furniture & Joinery</li>
              <li className="py-0.5">Lighting Design</li>
              <li className="py-0.5">Project Management</li>
            </ul>
          </div>

          {/* Column 4: Credentials & Contact (Full span on Mobile/Tablet, 1 Col on Desktop) */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-[#E5C365]">
              Credentials
            </h4>
            <div className="space-y-2.5 text-xs text-[#A3997E]">
              <div className="p-2.5 rounded-xl bg-[#09150E] border border-[#1E3B2C]">
                <div className="flex items-center gap-1.5 text-[#E5DFC5] font-mono text-[11px] font-semibold mb-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>GST Registered</span>
                </div>
                <div className="font-mono text-[10px] text-[#A3997E]">{COMPANY_INFO.registrations.gstin}</div>
              </div>

              <div className="p-2.5 rounded-xl bg-[#09150E] border border-[#1E3B2C]">
                <div className="text-[11px] font-mono text-[#E5DFC5] font-semibold mb-0.5">
                  Udyam Registered
                </div>
                <div className="font-mono text-[10px] text-[#A3997E]">{COMPANY_INFO.registrations.udyam}</div>
              </div>

              <div className="pt-1 text-xs text-[#E5DFC5] space-y-1">
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-[#E5C365] transition-colors block font-mono">
                  {COMPANY_INFO.phone}
                </a>
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#E5C365] transition-colors block break-all text-[11px]">
                  {COMPANY_INFO.email}
                </a>
                <div className="text-[#A3997E] text-[11px]">
                  Bengaluru, Karnataka
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A3997E]">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} ARHA INTERIORS. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Proprietor: Senthil Karuppasamy. R</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-zinc-500 hidden md:inline">
              Civil & Interior Turnkey Fit Out Projects
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-[#E5C365] hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Sticky WhatsApp Button (Optimized for Mobile & Desktop) */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20ARHA%20Interiors%2C%20I%20am%20interested%20in%20a%20turnkey%20interior%20fit-out%20consultation.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:left-6 sm:right-auto z-40 flex items-center justify-center gap-2 w-12 h-12 sm:w-auto sm:h-auto sm:px-4 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_10px_30px_rgba(5,150,105,0.45)] border border-emerald-400/40 transition-all hover:scale-105 active:scale-95 text-xs font-bold uppercase tracking-wider group cursor-pointer"
        title="Instant WhatsApp Consultation"
        aria-label="Instant WhatsApp Consultation"
      >
        {/* Live dot only on desktop/tablet, hidden on mobile */}
        <span className="relative hidden sm:flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
        </span>
        <WhatsAppIcon className="w-5 h-5 sm:w-4 sm:h-4 text-white" />
        <span className="hidden sm:inline">WhatsApp Direct</span>
      </a>
    </footer>
  );
}
