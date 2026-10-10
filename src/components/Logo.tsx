import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'header' | 'footer' | 'compact' | 'hero';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'header',
}) => {
  const [imageError, setImageError] = useState(false);
  const isFooter = variant === 'footer';
  const isCompact = variant === 'compact';
  const isHero = variant === 'hero';

  const sizeClasses = isCompact 
    ? 'w-10 h-10' 
    : isFooter 
      ? 'w-14 h-14' 
      : isHero 
        ? 'w-24 h-24' 
        : 'w-14 h-14 sm:w-16 sm:h-16';

  return (
    <div className={`flex items-center select-none ${className}`}>
      {/* Official Brand Logo Box */}
      <div 
        className={`relative group shrink-0 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.04] shadow-lg shadow-black/40 border border-[#d4af37]/40 hover:border-[#d4af37] ${sizeClasses}`}
        title="HI-IMPACT SHIPPING & CO. - Delivering the highest standard and impacting the future"
        aria-label="HI-Impact Shipping Official Logo"
      >
        {/* Ambient Golden Glow on Hover */}
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-[#d4af37]/20 via-[#f59e0b]/10 to-[#38bdf8]/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 pointer-events-none" />

        {!imageError ? (
          <img
            src="/images/hi_impact_brand_logo.png"
            alt="HI-Impact Shipping Official Logo"
            className="w-full h-full object-cover object-center select-none"
            onError={(e) => {
              // try fallback jpg if png fails
              const target = e.currentTarget;
              if (target && !target.src.endsWith('.jpg')) {
                target.src = '/images/hi_impact_brand_logo.jpg';
              } else {
                setImageError(true);
              }
            }}
          />
        ) : (
          /* High-fidelity Vector Fallback */
          <div className="w-full h-full bg-[#051538] flex flex-col items-center justify-center p-1 text-center">
            <span className="font-extrabold text-[#d4af37] text-xs leading-tight">HI-IMPACT</span>
            <span className="text-[9px] text-white font-semibold tracking-wider">SHIPPING</span>
          </div>
        )}
      </div>
    </div>
  );
};
