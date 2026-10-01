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
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Methodology", href: "#methodology" },
    { name: "Leadership", href: "#leadership" },
    { name: "Estimator", href: "#estimator" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#07110C]/90 backdrop-blur-md border-b border-[#D4AF37]/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "bg-gradient-to-b from-[#07110C]/95 via-[#07110C]/60 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a href="#" className="transition-transform hover:scale-[1.02] active:scale-[0.98]">
              <ArhaLogo size="md" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs tracking-[0.16em] uppercase font-medium text-[#E5DFC5]/80 hover:text-[#E5C365] transition-colors relative py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E5C365] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="hidden md:flex items-center gap-4">
              {/* WhatsApp Quick Chat */}
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20ARHA%20Interiors%2C%20I%20am%20interested%20in%20a%20turnkey%20interior%20fit-out%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#14291F] border border-[#2E5E43] text-emerald-300 hover:text-white hover:border-[#D4AF37]/50 text-xs font-medium transition-all"
                title="Chat on WhatsApp"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="w-2 h-2 -ml-3.5 rounded-full bg-emerald-400" />
                <span>Quick WhatsApp</span>
              </a>

              {/* Direct Call Link */}
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center gap-1.5 text-xs text-[#E5DFC5] hover:text-[#E5C365] transition-colors px-2 py-1"
              >
                <Phone className="w-3.5 h-3.5 text-[#E5C365]" />
                <span className="font-mono tracking-wider">{COMPANY_INFO.phone}</span>
              </a>

              {/* Primary Consultation Button */}
              <button
                onClick={onOpenConsultation}
                className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase text-[#07110C] bg-gradient-to-r from-[#FFF2D6] via-[#E5C365] to-[#D4AF37] hover:from-[#FFFFFF] hover:to-[#E5C365] shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Request Proposal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={onOpenConsultation}
                className="px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase text-[#07110C] bg-[#E5C365]"
              >
                Proposal
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#E5DFC5] hover:text-[#E5C365] hover:bg-[#14291F] transition-colors"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#07110C]/98 border-b border-[#D4AF37]/20 px-6 py-6 mt-2 space-y-4 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium tracking-wider text-[#E5DFC5] hover:text-[#E5C365] py-2 border-b border-[#1E3B2C]/40"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#14291F] border border-[#2B4E3C] text-sm text-[#E5DFC5]"
              >
                <Phone className="w-4 h-4 text-[#E5C365]" />
                <span>{COMPANY_INFO.phone}</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20ARHA%20Interiors%2C%20I%20am%20interested%20in%20a%20turnkey%20interior%20fit-out%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-950/80 border border-emerald-600/40 text-emerald-300 text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 rounded-lg text-xs font-bold uppercase tracking-widest text-[#07110C] bg-gradient-to-r from-[#FFF2D6] via-[#E5C365] to-[#D4AF37]"
              >
                Request Turnkey Proposal
              </button>

              <div className="text-center pt-2 text-[10px] text-zinc-400 flex items-center justify-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E5C365]" />
                <span>GST: 29ESKPS8538H1ZT | Udyam Registered</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
