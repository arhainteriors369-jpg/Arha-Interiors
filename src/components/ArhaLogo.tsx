import React from "react";

interface ArhaLogoProps {
  className?: string;
  variant?: "full" | "monogram" | "stacked";
  size?: "sm" | "md" | "lg" | "xl";
}

export default function ArhaLogo({
  className = "",
  variant = "full",
  size = "md",
}: ArhaLogoProps) {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
    xl: "w-20 h-20",
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Golden Monogram "AR" with Leaf */}
      <div
        className={`relative ${iconSizes[size]} flex items-center justify-center shrink-0 rounded-lg p-1 bg-gradient-to-br from-[#1E3B2C] via-[#0E1E16] to-[#08120D] border border-[#D4AF37]/40 shadow-inner group`}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full fill-none drop-shadow-[0_2px_4px_rgba(212,175,55,0.4)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="arGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2D6" />
              <stop offset="35%" stopColor="#E5C365" />
              <stop offset="70%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#9E761C" />
            </linearGradient>
            <linearGradient id="leafGreen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#81C784" />
              <stop offset="100%" stopColor="#2E7D32" />
            </linearGradient>
          </defs>

          {/* Golden Elegant "AR" Letterform Calligraphy */}
          {/* Main "A" flourish */}
          <path
            d="M 32 82 L 48 24 Q 50 18 55 24 L 70 82"
            stroke="url(#arGold)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Crossbar with loop */}
          <path
            d="M 38 62 Q 52 56 64 62"
            stroke="url(#arGold)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* "R" Bow and Leg */}
          <path
            d="M 48 24 Q 76 22 76 46 Q 76 60 56 60 Q 64 68 76 82"
            stroke="url(#arGold)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Left sweeping serif flourish */}
          <path
            d="M 22 82 Q 30 76 34 82"
            stroke="url(#arGold)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Delicate botanical leaf sprouting at top (From original logo) */}
          <path
            d="M 52 18 C 50 10 56 6 62 4 C 64 10 60 16 52 18 Z"
            fill="url(#arGold)"
          />
          <path
            d="M 62 4 C 66 8 68 14 62 18"
            stroke="#FFF2D6"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>

        {/* Ambient subtle glow ring */}
        <div className="absolute inset-0 rounded-lg ring-1 ring-[#D4AF37]/30 pointer-events-none" />
      </div>

      {/* Typography */}
      {variant !== "monogram" && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1.5">
            <span className="font-serif tracking-[0.22em] text-[#FBF8F1] font-bold text-base md:text-lg leading-tight uppercase">
              ARHA
            </span>
            <span className="font-serif tracking-[0.22em] text-[#E5C365] font-light text-base md:text-lg leading-tight uppercase">
              INTERIORS
            </span>
          </div>
          <span className="text-[9px] md:text-[10px] tracking-[0.28em] text-[#C5B899] font-sans uppercase font-medium mt-0.5">
            Spaces that grow with you
          </span>
        </div>
      )}
    </div>
  );
}
