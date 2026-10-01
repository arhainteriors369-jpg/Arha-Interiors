"use client";

import React from "react";
import ArhaLogo from "./ArhaLogo";
import { COMPANY_INFO } from "@/data/companyData";
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp, MessageSquare } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050C08] border-t border-[#D4AF37]/30 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1E3B2C]/50">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <ArhaLogo size="lg" />
            <p className="text-xs text-[#A3997E] leading-relaxed max-w-sm">
              End-to-end civil contracting, interior architecture, and turnkey MEP fit-outs for enterprise, commercial, and institutional spaces. A single-point experience from concept through handover.
            </p>
            <div className="pt-2 text-xs text-[#E5C365] font-serif italic">
              &ldquo;{COMPANY_INFO.thankYouQuote}&rdquo;
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-[#E5C365]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#A3997E]">
              <li>
                <a href="#about" className="hover:text-[#FFF2D6] transition-colors">
                  Company Background
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-[#FFF2D6] transition-colors">
                  Turnkey Capabilities
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#FFF2D6] transition-colors">
                  Enterprise Portfolio
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-[#FFF2D6] transition-colors">
                  5-Step Methodology
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-[#FFF2D6] transition-colors">
                  Leadership & Experience
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-[#FFF2D6] transition-colors">
                  Scope & Timeline Estimator
                </a>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-[#E5C365]">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-[#A3997E]">
              <li>Interior Design & 3D Visualization</li>
              <li>Turnkey Fit-Out Contracting</li>
              <li>Civil & Structural Works</li>
              <li>Integrated MEP & HVAC</li>
              <li>Furniture & Custom Joinery</li>
              <li>Lighting Design & Automation</li>
              <li>Project Management & Handover</li>
            </ul>
          </div>

          {/* Registrations & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-[#E5C365]">
              Credentials & Contact
            </h4>
            <div className="space-y-2 text-xs text-[#A3997E]">
              <div className="flex items-center gap-1.5 text-[#E5DFC5]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-mono text-[11px]">GST: {COMPANY_INFO.registrations.gstin}</span>
              </div>
              <div className="text-[11px] text-[#A3997E]">
                Udyam: {COMPANY_INFO.registrations.udyam}
              </div>
              <div className="pt-2 text-xs text-[#E5DFC5]">
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-[#E5C365] transition-colors block">
                  {COMPANY_INFO.phone}
                </a>
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#E5C365] transition-colors block break-all mt-1">
                  {COMPANY_INFO.email}
                </a>
                <div className="text-[#A3997E] mt-1">
                  {COMPANY_INFO.location}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A3997E]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} ARHA INTERIORS. All rights reserved.</span>
            <span>•</span>
            <span>Proprietor: Senthil Karuppasamy. R</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-zinc-500">
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

      {/* Floating Sticky WhatsApp Button */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20ARHA%20Interiors%2C%20I%20am%20interested%20in%20a%20turnkey%20interior%20fit-out%20consultation.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_10px_25px_rgba(5,150,105,0.4)] transition-all hover:scale-110 active:scale-95 text-xs font-bold uppercase tracking-wider group"
        title="Instant WhatsApp Consultation"
      >
        <MessageSquare className="w-4 h-4 fill-white" />
        <span className="hidden sm:inline">WhatsApp Direct</span>
      </a>
    </footer>
  );
}
