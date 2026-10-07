"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, ShieldCheck, Sparkles, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";
import confetti from "canvas-confetti";

export default function ContactSection() {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#D4AF37", "#E5C365", "#1E3B2C"],
      });
    } catch {}
  };

  return (
    <section id="contact" className="relative py-24 bg-[#08120D] border-t border-[#D4AF37]/20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#14291F]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14291F] border border-[#D4AF37]/30 text-xs font-semibold uppercase tracking-[0.2em] text-[#E5C365] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FBF8F1] leading-tight mb-4">
            Together, Let&apos;s Create Spaces That Grow With You
          </h2>
          <p className="text-xs sm:text-sm text-[#A3997E] max-w-lg mx-auto italic font-serif">
            &ldquo;{COMPANY_INFO.thankYouQuote}&rdquo;
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Details & Bengaluru Coverage */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#12261C] to-[#0A1610] shadow-xl">
              <h3 className="font-serif text-2xl font-bold text-[#FBF8F1] mb-6">
                Corporate Office & Inquiries
              </h3>

              <div className="space-y-6">
                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#14291F] border border-[#D4AF37]/40 flex items-center justify-center shrink-0 text-[#E5C365]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs uppercase font-mono tracking-wider text-[#A3997E]">
                      Corporate Direct Line & WhatsApp
                    </div>
                    <div className="flex flex-wrap items-center gap-3 mt-1">
                      <a
                        href={`tel:${COMPANY_INFO.phoneRaw}`}
                        className="text-base font-serif font-bold text-[#FFF2D6] hover:text-[#E5C365] transition-colors"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                      <a
                        href={COMPANY_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-700/60 hover:bg-emerald-900 text-[11px] font-medium transition-colors"
                      >
                        <MessageCircle className="w-3 h-3 text-emerald-400" />
                        <span>Chat</span>
                      </a>
                    </div>
                    <div className="text-[11px] text-[#A3997E] mt-1 flex items-center gap-2">
                      <span>Alt Personal Line:</span>
                      <a
                        href={`tel:${COMPANY_INFO.alternatePhoneRaw}`}
                        className="text-[#C5B899] hover:text-[#FFF2D6] font-mono underline underline-offset-2"
                      >
                        {COMPANY_INFO.alternatePhone}
                      </a>
                    </div>
                    <div className="text-[11px] text-emerald-400 mt-1">
                      Available Mon–Sat: 9:00 AM – 7:30 PM IST
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#14291F] border border-[#D4AF37]/40 flex items-center justify-center shrink-0 text-[#E5C365]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-mono tracking-wider text-[#A3997E]">Official Email</div>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-sm font-sans font-medium text-[#FFF2D6] hover:text-[#E5C365] transition-colors break-all"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <div className="text-[11px] text-[#A3997E] mt-0.5">
                      Direct inbox of Principal Director
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#14291F] border border-[#D4AF37]/40 flex items-center justify-center shrink-0 text-[#E5C365]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-mono tracking-wider text-[#A3997E]">Registered Office & Headquarters</div>
                    <div className="text-sm font-medium text-[#FFF2D6] leading-relaxed mt-0.5">
                      {COMPANY_INFO.address.line1},<br />
                      {COMPANY_INFO.address.line2},<br />
                      <span className="font-semibold text-[#E5C365]">{COMPANY_INFO.address.city} – {COMPANY_INFO.address.pincode}</span>
                    </div>
                    <div className="text-[11px] text-[#A3997E] mt-1.5">
                      Serving Hongasandra, HSR Layout, Koramangala, Electronic City, Whitefield & Pan-Karnataka
                    </div>
                  </div>
                </div>

                {/* Quick Connect Actions */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="py-3 px-4 rounded-xl bg-[#14291F] hover:bg-[#1E3B2C] border border-[#2B4E3C] hover:border-[#D4AF37]/50 text-[#FFF2D6] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md group"
                  >
                    <Phone className="w-4 h-4 text-[#E5C365] group-hover:scale-110 transition-transform shrink-0" />
                    <span>Call Direct</span>
                  </a>

                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/60 hover:border-emerald-500 text-emerald-200 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md group"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform shrink-0" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Handover Guarantee */}
            <div className="p-6 rounded-3xl bg-[#09150E] border border-[#1E3B2C] flex items-center gap-4">
              <ShieldCheck className="w-8 h-8 text-[#E5C365] shrink-0" />
              <div>
                <h4 className="font-serif text-sm font-bold text-[#F4EFEA]">
                  Single-Point Experience Guarantee
                </h4>
                <p className="text-xs text-[#A3997E] mt-0.5">
                  Concept through handover with zero sub-contractor finger-pointing and total schedule adherence.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#12261C] to-[#0A1610] shadow-2xl">
              <h3 className="font-serif text-2xl font-bold text-[#FBF8F1] mb-2">
                Send a Message or Project Brief
              </h3>
              <p className="text-xs text-[#A3997E] mb-6">
                Receive a dedicated site visit and itemized fit-out proposal within 24–48 hours.
              </p>

              {formSent ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-[#142C20] border-2 border-[#D4AF37] mx-auto flex items-center justify-center text-[#E5C365]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#FFF2D6]">
                    Thank You for Reaching Out!
                  </h4>
                  <p className="text-xs text-[#E5DFC5]/80 max-w-sm mx-auto">
                    We have received your message. Our director Senthil Karuppasamy will connect with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#A3997E] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#08120D] border border-[#234232] text-sm text-[#F4EFEA] focus:border-[#D4AF37] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#A3997E] mb-1.5">
                        Organization / Brand *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Tech India"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#08120D] border border-[#234232] text-sm text-[#F4EFEA] focus:border-[#D4AF37] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#A3997E] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#08120D] border border-[#234232] text-sm text-[#F4EFEA] focus:border-[#D4AF37] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#A3997E] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#08120D] border border-[#234232] text-sm text-[#F4EFEA] focus:border-[#D4AF37] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#A3997E] mb-1.5">
                      Space Details & Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about the property location, approx square footage, target move-in date, and specific turnkey scopes needed..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#08120D] border border-[#234232] text-sm text-[#F4EFEA] focus:border-[#D4AF37] focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-widest text-[#07110C] bg-gradient-to-r from-[#FFF2D6] via-[#E5C365] to-[#D4AF37] hover:scale-[1.01] active:scale-[0.99] transition-all shadow-[0_0_25px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2 cursor-pointer font-sans"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Fit-Out Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
