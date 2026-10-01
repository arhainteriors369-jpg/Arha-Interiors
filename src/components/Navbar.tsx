"use client";

import React, { useState, useEffect } from "react";
import ArhaLogo from "./ArhaLogo";
import { Phone, MessageSquare, Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#capabilities" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#methodology" },
    { name: "Leadership", href: "#leadership" },
    { name: "Estimator", href: "#estimator" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#07110C]/95 backdrop-blur-md border-b border-[#D4AF37]/20 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            : "bg-gradient-to-b from-[#07110C]/95 via-[#07110C]/70 to-transparent py-3 sm:py-5"
        }`}
      >
        <div className="w-full px-3.5 sm:px-6 lg:px-10 xl:px-14">
          <div className="flex items-center justify-between gap-2">
            {/* Single Clean Brand Logo - Never Duplicated */}
            <a href="#" className="shrink-0 transition-transform hover:scale-[1.02] active:scale-[0.98]">
              <ArhaLogo size="sm" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-6 shrink-0">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[11px] xl:text-xs tracking-[0.14em] uppercase font-medium text-[#E5DFC5]/80 hover:text-[#E5C365] transition-colors relative py-1 group whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E5C365] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right Action Controls */}
            <div className="flex items-center gap-2 shrink-0">
              {/* WhatsApp Quick Action (Desktop) */}
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20ARHA%20Interiors%2C%20I%20am%20interested%20in%20a%20turnkey%20interior%20fit-out%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#14291F] border border-[#2E5E43] text-emerald-300 hover:text-white hover:border-[#D4AF37]/50 text-xs font-medium transition-all whitespace-nowrap shrink-0"
                title="Chat on WhatsApp"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="hidden xl:inline">WhatsApp</span>
              </a>

              {/* Direct Call Link (Desktop) */}
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="hidden md:inline-flex items-center gap-1.5 text-xs text-[#E5DFC5] hover:text-[#E5C365] transition-colors px-2.5 py-1.5 rounded-full bg-[#0F2016] border border-[#1E3B2C] whitespace-nowrap shrink-0"
                title={`Call ${COMPANY_INFO.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#E5C365]" />
                <span className="font-mono tracking-wider hidden 2xl:inline">{COMPANY_INFO.phone}</span>
                <span className="font-mono tracking-wider inline 2xl:hidden text-[11px]">Call</span>
              </a>

              {/* Desktop Proposal Request Button */}
              <button
                onClick={onOpenConsultation}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 xl:px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase text-[#07110C] bg-gradient-to-r from-[#FFF2D6] via-[#E5C365] to-[#D4AF37] hover:from-[#FFFFFF] hover:to-[#E5C365] shadow-[0_0_15px_rgba(212,175,55,0.25)] transition-all hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Request Proposal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile Compact Proposal Button - Never Overflows */}
              <button
                onClick={onOpenConsultation}
                className="sm:hidden px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-[#07110C] bg-gradient-to-r from-[#FFF2D6] to-[#E5C365] shadow-md cursor-pointer whitespace-nowrap shrink-0"
              >
                Proposal
              </button>

              {/* Mobile / Tablet Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1.5 sm:p-2 rounded-lg text-[#E5DFC5] hover:text-[#E5C365] hover:bg-[#14291F] border border-transparent hover:border-[#2B4E3C] transition-colors shrink-0"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#07110C]/98 border-b border-[#D4AF37]/30 px-5 sm:px-8 py-6 space-y-4 shadow-2xl backdrop-blur-2xl animate-in slide-in-from-top-3 duration-200">
            <nav className="grid grid-cols-2 gap-2 pb-4 border-b border-[#1E3B2C]/60">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-medium tracking-wider uppercase text-[#E5DFC5] hover:text-[#E5C365] p-2 rounded-lg hover:bg-[#14291F] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-2.5 pt-1">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#14291F] border border-[#2B4E3C] text-xs font-mono text-[#E5DFC5] hover:text-[#E5C365]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E5C365]" />
                  <span>Call Us</span>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20ARHA%20Interiors%2C%20I%20am%20interested%20in%20a%20turnkey%20interior%20fit-out%20consultation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-950/80 border border-emerald-600/40 text-emerald-300 text-xs font-medium"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-widest text-[#07110C] bg-gradient-to-r from-[#FFF2D6] via-[#E5C365] to-[#D4AF37] shadow-lg cursor-pointer"
              >
                Request Turnkey Proposal
              </button>

              <div className="text-center pt-2 text-[10px] text-[#A3997E] flex items-center justify-center gap-1.5 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E5C365]" />
                <span>GST: 29ESKPS8538H1ZT • Bengaluru</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
