"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Sparkles, MoveHorizontal, CheckCircle2, Clock } from "lucide-react";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    let percentage = (x / width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
  }, []);

  return (
    <section className="relative py-16 sm:py-24 bg-[#08120D] border-t border-[#D4AF37]/20 overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14291F] border border-[#D4AF37]/30 text-xs font-semibold uppercase tracking-[0.2em] text-[#E5C365] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Turnkey Transformation Benchmark</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-[#FBF8F1] leading-tight mb-3 sm:mb-4">
            From Bare Shell to Flawless Handover
          </h2>
          <p className="text-xs sm:text-sm text-[#A3997E] max-w-xl mx-auto">
            Drag the slider interactively to reveal the precision engineering, acoustic detailing, and bespoke joinery that turns raw civil sites into world-class corporate spaces.
          </p>
        </div>

        {/* Interactive Slider Frame */}
        <div className="w-full max-w-6xl mx-auto">
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={handleMouseDown}
            className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#D4AF37]/40 shadow-[0_20px_60px_rgba(0,0,0,0.8)] cursor-ew-resize select-none bg-black"
          >
            {/* "After" Image (Complete Turnkey Handover) - Full Width Underneath */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="/images/projects/project_img_10.jpg"
                alt="After Turnkey Fit-out"
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#07110C]/85 backdrop-blur-md border border-[#D4AF37] text-[10px] sm:text-xs font-bold text-[#E5C365] flex items-center gap-1 sm:gap-1.5 shadow-lg">
                <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />
                <span className="hidden xs:inline">COMPLETED HANDOVER</span>
                <span className="inline xs:hidden">HANDOVER</span>
              </div>
            </div>

            {/* "Before" Image (Work in Progress / Execution Phase) - Clipped by Slider */}
            <div
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="/images/projects/project_img_2.jpg"
                alt="Before Civil Shell"
                className="absolute inset-0 w-full h-full object-cover filter contrast-125 brightness-90"
                style={{
                  width: containerRef.current?.getBoundingClientRect().width || "100%",
                  maxWidth: "none",
                }}
                draggable={false}
              />
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#07110C]/85 backdrop-blur-md border border-zinc-600 text-[10px] sm:text-xs font-bold text-zinc-300 flex items-center gap-1 sm:gap-1.5 shadow-lg">
                <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400" />
                <span className="hidden xs:inline">SITE EXECUTION & MEP</span>
                <span className="inline xs:hidden">CIVIL SHELL</span>
              </div>
            </div>

            {/* Vertical Divider Line with Luxury Gold Grip */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-[#FFF2D6] via-[#E5C365] to-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.8)] z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0B1912] border-2 border-[#D4AF37] shadow-xl flex items-center justify-center text-[#E5C365]">
                <MoveHorizontal className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Bottom Info Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 mt-4 sm:mt-6 text-[11px] sm:text-xs text-[#A3997E] px-2 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E5C365]" />
              <span>Interactive Slider: Drag left or right to compare</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <span>Zero Handover Delays</span>
              <span>•</span>
              <span className="text-[#E5DFC5]">Fast-Track MEP & Joinery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
