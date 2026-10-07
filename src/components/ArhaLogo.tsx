import React from "react";

interface ArhaLogoProps {
  className?: string;
  variant?: "full" | "monogram" | "stacked";
  size?: "sm" | "md" | "lg" | "xl";
  showSubtitle?: boolean;
}

export default function ArhaLogo({
  className = "",
  variant = "full",
  size = "md",
  showSubtitle = false,
}: ArhaLogoProps) {
  // Height sizing for the authentic botanical branch + AR monogram
  const heightClasses = {
    sm: "h-7 sm:h-8",
    md: "h-9 sm:h-10",
    lg: "h-11 sm:h-12",
    xl: "h-14 sm:h-16",
  };

  const currentHeight = heightClasses[size] || heightClasses.md;

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none group cursor-pointer ${className}`}>
      {/* Authentic Golden Monogram with Natural Botanical Leaf Branch */}
      <div className={`relative ${currentHeight} flex items-center justify-center shrink-0`}>
        <img
          src="/images/arha_logo_monogram.png"
          alt="ARHA Interiors Monogram"
          className="h-full w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)] group-hover:scale-105 group-hover:drop-shadow-[0_4px_16px_rgba(212,175,55,0.6)] transition-all duration-300"
        />
      </div>

      {/* Typography - ONLY Company Name */}
      {variant !== "monogram" && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <span className="font-serif tracking-[0.2em] text-[#FBF8F1] font-bold text-base sm:text-lg leading-tight uppercase">
              ARHA
            </span>
            <span className="font-serif tracking-[0.2em] text-[#E5C365] font-light text-base sm:text-lg leading-tight uppercase">
              INTERIORS
            </span>
          </div>
          {showSubtitle && (
            <span className="text-[10px] tracking-[0.24em] text-[#C5B899] font-serif italic mt-0.5 whitespace-nowrap">
              Spaces that grow with you
            </span>
          )}
        </div>
      )}
    </div>
  );
}
