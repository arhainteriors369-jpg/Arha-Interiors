"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { X, CheckCircle, Send, Phone, Mail, Sparkles, ShieldCheck } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { COMPANY_INFO } from "@/data/companyData";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillService?: string;
  prefillArea?: number;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  prefillService = "Turnkey Fit-Out Execution",
  prefillArea = 15000,
}: ConsultationModalProps) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(prefillService);
  const [area, setArea] = useState(prefillArea);
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#D4AF37", "#E5C365", "#1E3B2C", "#FFFFFF"],
      });
    } catch {
      // ignore
    }
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello ARHA Interiors, I would like to request a turnkey proposal.\n\n` +
      `*Name:* ${name || "Corporate Client"}\n` +
      `*Company:* ${company || "Not specified"}\n` +
      `*Service:* ${service}\n` +
      `*Area:* ${area} sq. ft.\n` +
      `*Contact:* ${phone || email}\n` +
      `*Project Notes:* ${notes || "Looking for fast-track turnkey execution."}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative max-w-2xl w-full bg-[#0B1912] border border-[#D4AF37]/50 rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#142C20] via-[#1E3B2C] to-[#142C20] p-6 border-b border-[#D4AF37]/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#08120D] border border-[#D4AF37] flex items-center justify-center text-[#E5C365]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#FBF8F1]">
                Request Turnkey Proposal
              </h3>
              <p className="text-xs text-[#E5DFC5]/80">
                Single-point responsibility from concept through handover
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#07110C]/80 border border-[#D4AF37]/30 flex items-center justify-center text-[#E5DFC5] hover:text-white hover:bg-[#14291F] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#142C20] border-2 border-[#D4AF37] mx-auto flex items-center justify-center text-[#E5C365]">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#FFF2D6]">
                Consultation Request Received!
              </h4>
              <p className="text-sm text-[#E5DFC5]/90 max-w-md mx-auto leading-relaxed">
                Thank you for your trust. Our principal director,{" "}
                <span className="text-[#E5C365] font-semibold">Senthil Karuppasamy. R</span>, and our technical fit-out team will review your project parameters and contact you within 24 business hours.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-700 hover:bg-emerald-600 text-white flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Send via WhatsApp for Instant Response</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#14291F] text-[#E5DFC5] hover:bg-[#1E3B2C] border border-[#2B4E3C] cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#A3997E] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#08120D] border border-[#234232] text-sm text-[#F4EFEA] focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#A3997E] mb-1.5">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Enterprise Corp"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#08120D] border border-[#234232] text-sm text-[#F4EFEA] focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#A3997E] mb-1.5">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#08120D] border border-[#234232] text-sm text-[#F4EFEA] focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#A3997E] mb-1.5">
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#08120D] border border-[#234232] text-sm text-[#F4EFEA] focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#A3997E] mb-1.5">
                    Service Scope Required
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#08120D] border border-[#234232] text-sm text-[#F4EFEA] focus:border-[#D4AF37] focus:outline-none transition-colors"
                  >
                    <option value="Turnkey Fit-Out Execution">Turnkey Fit-Out Execution</option>
                    <option value="Interior Design & Space Planning">Interior Design & Space Planning</option>
                    <option value="Civil & MEP Works">Civil & MEP Works</option>
                    <option value="Furniture & Custom Joinery">Furniture & Custom Joinery</option>
                    <option value="Lighting Design & Installation">Lighting Design & Installation</option>
                    <option value="Project Management & Handover">Project Management & Handover</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#A3997E] mb-1.5">
                    Approximate Area (sq. ft.)
                  </label>
                  <input
                    type="number"
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#08120D] border border-[#234232] text-sm text-[#F4EFEA] focus:border-[#D4AF37] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A3997E] mb-1.5">
                  Brief Project Requirements
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share details on site location, target handover date, or specific technical requirements..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#08120D] border border-[#234232] text-sm text-[#F4EFEA] focus:border-[#D4AF37] focus:outline-none transition-colors"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#07110C] bg-gradient-to-r from-[#FFF2D6] via-[#E5C365] to-[#D4AF37] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Proposal Request</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-950 text-emerald-300 border border-emerald-700/60 hover:bg-emerald-900 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-300" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>

              <div className="text-center pt-2 text-[10px] text-[#A3997E] flex items-center justify-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E5C365]" />
                <span>Non-disclosure guaranteed. Direct access to principal director.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
