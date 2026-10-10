import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'header' | 'footer' | 'compact' | 'hero';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'header',
}) => {
  const isFooter = variant === 'footer';
  const isCompact = variant === 'compact';
  const isHero = variant === 'hero';

  const sizeClasses = isCompact 
    ? 'w-10 h-10' 
    : isFooter 
      ? 'w-14 h-14' 
      : isHero 
        ? 'w-20 h-20' 
        : 'w-14 h-14 sm:w-16 sm:h-16';

  return (
    <div className={`flex items-center select-none ${className}`}>
      {/* Official Circular Brand Emblem */}
      <div 
        className={`relative group shrink-0 rounded-full transition-transform duration-300 hover:scale-[1.03] ${sizeClasses}`}
        title="HI-Impact Shipping & Co."
        aria-label="HI-Impact Shipping & Co. Logo"
      >
        {/* Ambient Golden Glow */}
        <div className="absolute -inset-1 rounded-full bg-[#d4af37]/25 blur-md opacity-75 group-hover:opacity-100 group-hover:bg-[#d4af37]/45 transition-all duration-300" />

        {/* Master Scalable Vector Logo */}
        <svg 
          viewBox="0 0 500 500" 
          className="relative w-full h-full drop-shadow-xl select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Rich Gold Metallic Gradient Suite */}
            <linearGradient id="logoGoldRim" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFE89E" />
              <stop offset="25%" stopColor="#E5BE53" />
              <stop offset="50%" stopColor="#FFF0B8" />
              <stop offset="75%" stopColor="#B88A22" />
              <stop offset="100%" stopColor="#8A630A" />
            </linearGradient>

            <linearGradient id="logoGoldBright" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DFB143" />
              <stop offset="30%" stopColor="#FFF3C4" />
              <stop offset="70%" stopColor="#E7BD54" />
              <stop offset="100%" stopColor="#B3841D" />
            </linearGradient>

            <linearGradient id="logoGoldAccent" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C59628" />
              <stop offset="50%" stopColor="#FDE89C" />
              <stop offset="100%" stopColor="#9C7015" />
            </linearGradient>

            {/* Deep Maritime Navy Radial Dial */}
            <radialGradient id="logoNavyBg" cx="50%" cy="45%" r="65%">
              <stop offset="0%" stopColor="#122f6d" />
              <stop offset="45%" stopColor="#08183d" />
              <stop offset="85%" stopColor="#030c22" />
              <stop offset="100%" stopColor="#020817" />
            </radialGradient>

            {/* Azure Wave Accent */}
            <linearGradient id="logoWaveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.4" />
            </linearGradient>

            {/* Text & Crest Drop Shadows */}
            <filter id="logoDropShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="3" stdDeviation="3.5" floodColor="#000000" floodOpacity="0.8" />
            </filter>

            {/* Circular Text Paths */}
            {/* Top Arc for HI-IMPACT */}
            <path id="logoTopTextArc" d="M 75,250 A 175,175 0 0,1 425,250" fill="none" />
            
            {/* Bottom Arc for SHIPPING & CO. */}
            <path id="logoBottomTextArc" d="M 90,270 A 175,175 0 0,0 410,270" fill="none" />
          </defs>

          {/* Outer Heavy Gold Beveled Outer Ring */}
          <circle cx="250" cy="250" r="240" fill="url(#logoGoldRim)" />

          {/* Outer Inset Navy Channel */}
          <circle cx="250" cy="250" r="228" fill="#040d21" />

          {/* Concentric Gold Hairline */}
          <circle cx="250" cy="250" r="224" fill="none" stroke="url(#logoGoldBright)" strokeWidth="2.5" />

          {/* Main Midnight Navy Dial Face */}
          <circle cx="250" cy="250" r="219" fill="url(#logoNavyBg)" />

          {/* Nautical Globe & Compass Latitude/Longitude Grid */}
          <g opacity="0.18" stroke="#93c5fd" strokeWidth="1.2" fill="none">
            <ellipse cx="250" cy="250" rx="190" ry="85" />
            <ellipse cx="250" cy="250" rx="190" ry="145" />
            <ellipse cx="250" cy="250" rx="190" ry="190" />
            <ellipse cx="250" cy="250" rx="90" ry="190" />
            <ellipse cx="250" cy="250" rx="150" ry="190" />
            <line x1="250" y1="60" x2="250" y2="440" strokeDasharray="4,4" />
            <line x1="60" y1="250" x2="440" y2="250" strokeDasharray="4,4" />
          </g>

          {/* Inner Gold Bezel Ring */}
          <circle cx="250" cy="250" r="148" fill="none" stroke="url(#logoGoldRim)" strokeWidth="3" />
          <circle cx="250" cy="250" r="143" fill="none" stroke="#040c1f" strokeWidth="1.5" />

          {/* ================= TOP TEXT: HI-IMPACT ================= */}
          <text 
            fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, Montserrat, sans-serif" 
            fontWeight="900" 
            fontSize="34" 
            letterSpacing="4" 
            fill="url(#logoGoldBright)" 
            filter="url(#logoDropShadow)"
          >
            <textPath href="#logoTopTextArc" startOffset="50%" textAnchor="middle">
              HI-IMPACT
            </textPath>
          </text>

          {/* Left Star Flank */}
          <g transform="translate(74, 258) scale(0.95)" fill="url(#logoGoldBright)" filter="url(#logoDropShadow)">
            <polygon points="12,0 15,9 24,9 17,14 20,23 12,18 4,23 7,14 0,9 9,9" />
          </g>

          {/* Right Star Flank */}
          <g transform="translate(402, 258) scale(0.95)" fill="url(#logoGoldBright)" filter="url(#logoDropShadow)">
            <polygon points="12,0 15,9 24,9 17,14 20,23 12,18 4,23 7,14 0,9 9,9" />
          </g>

          {/* ================= BOTTOM TEXT: SHIPPING & CO. ================= */}
          <text 
            fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, Montserrat, sans-serif" 
            fontWeight="800" 
            fontSize="24" 
            letterSpacing="5" 
            fill="url(#logoGoldBright)" 
            filter="url(#logoDropShadow)"
          >
            <textPath href="#logoBottomTextArc" startOffset="50%" textAnchor="middle">
              SHIPPING &amp; CO.
            </textPath>
          </text>

          {/* ================= CENTER ARTWORK: CARGO SHIP & JET ================= */}
          {/* Subtle Ambient Sunburst behind Center */}
          <circle cx="250" cy="250" r="120" fill="#d4af37" opacity="0.09" />

          {/* Dynamic Ocean Wave Crests */}
          <path 
            d="M 140,295 C 170,285 200,310 240,295 C 280,280 320,305 360,290 L 360,330 C 310,355 190,355 140,330 Z" 
            fill="url(#logoNavyBg)" 
          />
          <path 
            d="M 145,305 C 180,290 215,315 255,300 C 295,285 330,310 355,298 C 340,320 300,335 250,335 C 200,335 160,320 145,305 Z" 
            fill="url(#logoWaveGrad)" 
          />
          <path 
            d="M 155,312 C 190,300 220,322 255,310 C 290,298 325,318 345,310 C 330,326 295,338 250,338 C 205,338 170,326 155,312 Z" 
            fill="url(#logoGoldAccent)" 
          />

          {/* Flight Jet Trail Arc soaring from ship to sky */}
          <path 
            d="M 160,285 C 160,200 200,165 315,160 C 345,158 360,154 365,150" 
            fill="none" 
            stroke="url(#logoGoldRim)" 
            strokeWidth="3.2" 
            strokeLinecap="round" 
            strokeDasharray="160 12" 
            opacity="0.95" 
            filter="url(#logoDropShadow)" 
          />
          <path 
            d="M 175,280 C 180,215 220,180 310,172" 
            fill="none" 
            stroke="#67e8f9" 
            strokeWidth="1.8" 
            strokeLinecap="round" 
            opacity="0.75" 
          />

          {/* Golden Cargo Aircraft Silhouette Climbing */}
          <g transform="translate(362, 146) rotate(-22) scale(0.95)" fill="url(#logoGoldBright)" filter="url(#logoDropShadow)">
            <path d="M -2,0 L 26,5 L 29,7 L 26,9 L -2,14 L -12,14 L -8,7 L -12,0 Z" />
            <path d="M 8,5 L -6,-16 L 2,-16 L 15,5 Z" />
            <path d="M 8,9 L -6,30 L 2,30 L 15,9 Z" />
            <path d="M -8,7 L -17,-4 L -13,-4 L -4,7 Z" />
          </g>

          {/* Ocean Carrier Cargo Vessel */}
          <g filter="url(#logoDropShadow)">
            {/* Vessel Hull */}
            <path 
              d="M 152,274 L 175,296 L 315,296 L 350,266 L 340,264 L 305,270 L 170,270 Z" 
              fill="url(#logoGoldRim)" 
              stroke="#926914" 
              strokeWidth="1.2" 
            />
            {/* Hull Waterline Accent */}
            <path 
              d="M 175,292 L 315,292 L 345,268 L 342,265 L 310,287 L 178,287 Z" 
              fill="#8a6108" 
              opacity="0.6" 
            />

            {/* Deck Bar */}
            <rect x="175" y="262" width="135" height="4" fill="url(#logoGoldBright)" rx="1" />

            {/* Cargo Containers - Tier 1 */}
            <g fill="url(#logoGoldAccent)" stroke="#06122b" strokeWidth="1">
              <rect x="180" y="247" width="22" height="14" rx="1.5" />
              <rect x="204" y="247" width="22" height="14" rx="1.5" fill="#e5be53" />
              <rect x="228" y="247" width="22" height="14" rx="1.5" />
              <rect x="252" y="247" width="22" height="14" rx="1.5" fill="#fde68a" />
              <rect x="276" y="247" width="22" height="14" rx="1.5" />
            </g>

            {/* Cargo Containers - Tier 2 */}
            <g fill="url(#logoGoldRim)" stroke="#06122b" strokeWidth="1">
              <rect x="184" y="233" width="22" height="13" rx="1.5" fill="#fde68a" />
              <rect x="208" y="233" width="22" height="13" rx="1.5" />
              <rect x="232" y="233" width="22" height="13" rx="1.5" fill="#e5be53" />
              <rect x="256" y="233" width="22" height="13" rx="1.5" />
            </g>

            {/* Cargo Containers - Tier 3 */}
            <g fill="url(#logoGoldAccent)" stroke="#06122b" strokeWidth="1">
              <rect x="210" y="220" width="22" height="12" rx="1.5" />
              <rect x="234" y="220" width="22" height="12" rx="1.5" fill="#fde68a" />
            </g>

            {/* Bridge Tower & Navigation Aft */}
            <path d="M 302,264 L 302,228 L 322,228 L 322,264 Z" fill="url(#logoGoldRim)" stroke="#926914" strokeWidth="1" />
            <path d="M 306,228 L 306,218 L 318,218 L 318,228 Z" fill="url(#logoGoldBright)" />
            <rect x="306" y="222" width="12" height="3" fill="#040e24" />
            <rect x="305" y="233" width="14" height="2.5" fill="#040e24" />

            {/* Radar Mast */}
            <line x1="312" y1="218" x2="312" y2="204" stroke="url(#logoGoldBright)" strokeWidth="2" />
            <line x1="308" y1="208" x2="316" y2="208" stroke="url(#logoGoldBright)" strokeWidth="1.8" />
            <ellipse cx="312" cy="204" rx="4" ry="1.5" fill="url(#logoGoldBright)" />

            {/* Ship Funnel / Stack */}
            <path d="M 324,242 L 324,264 L 331,264 L 331,238 Z" fill="url(#logoGoldAccent)" stroke="#926914" strokeWidth="1" />
            <rect x="323" y="238" width="8" height="3" fill="#050e24" />
          </g>

          {/* Nautical Crest Base Accent */}
          <g transform="translate(250, 318)" filter="url(#logoDropShadow)">
            <path d="M -22,-2 C -18,12 18,12 22,-2" fill="none" stroke="url(#logoGoldBright)" strokeWidth="3" strokeLinecap="round" />
            <circle cx="0" cy="5" r="3" fill="url(#logoGoldBright)" />
          </g>

          {/* Polished Glass Specular Light Curve */}
          <path d="M 95,140 A 219,219 0 0,1 405,140" fill="none" stroke="#ffffff" strokeWidth="1.6" opacity="0.3" />
        </svg>
      </div>
    </div>
  );
};
