import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Instagram, 
  Facebook, 
  Linkedin, 
  Youtube 
} from 'lucide-react';

// Custom crisp WhatsApp icon
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg 
    viewBox="0 0 24 24" 
    width="24" 
    height="24" 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

// Custom crisp TikTok icon
const TikTokIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg 
    viewBox="0 0 24 24" 
    width="24" 
    height="24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.26 6.26 0 0 0 1.96-4.57V8.71a8.21 8.21 0 0 0 4.81 1.56V6.8a4.8 4.8 0 0 1-1-.11z" />
  </svg>
);

export const Topbar: React.FC = () => {
  return (
    <div className="bg-[#d4af37] text-[#050f26] text-xs border-b border-[#bfa030] relative z-50 font-medium shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-9 sm:h-10">
          
          {/* Left: Contact Info & Location */}
          <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-1">
            {/* Location */}
            <div className="flex items-center gap-1.5 text-[#050f26] shrink-0 font-semibold">
              <MapPin className="w-3.5 h-3.5 text-[#050f26]" />
              <span className="hidden sm:inline">Kingston, Jamaica</span>
              <span className="sm:hidden">Kingston, JA 🇯🇲</span>
            </div>

            {/* Primary Phone */}
            <a 
              href="tel:8765780508" 
              className="flex items-center gap-1.5 text-[#050f26] hover:text-black transition-colors shrink-0 font-semibold"
              title="Call primary operations"
            >
              <Phone className="w-3.5 h-3.5 text-[#050f26]" />
              <span>(876) 578-0508</span>
            </a>

            {/* Secondary Phone (desktop) */}
            <a 
              href="tel:8764707066" 
              className="hidden md:flex items-center gap-1.5 text-[#050f26]/90 hover:text-black transition-colors shrink-0 font-medium"
              title="Call customer support"
            >
              <span className="text-[#050f26]/50">/</span>
              <span>(876) 470-7066</span>
            </a>

            {/* Email (desktop) */}
            <a 
              href="mailto:hiimpactshipping@outlook.com" 
              className="hidden lg:flex items-center gap-1.5 text-[#050f26]/90 hover:text-black transition-colors shrink-0 font-medium"
              title="Email Hi-Impact Shipping"
            >
              <Mail className="w-3.5 h-3.5 text-[#050f26]" />
              <span>hiimpactshipping@outlook.com</span>
            </a>
          </div>

          {/* Right: Social Media Icons & Hours */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Business Hours (large screens) */}
            <div className="hidden xl:flex items-center gap-1.5 text-[#050f26]/85 text-[11px] pr-3 border-r border-[#050f26]/20 font-medium">
              <Clock className="w-3 h-3 text-[#050f26]" />
              <span>Mon - Fri: 8:30 AM - 5:00 PM</span>
            </div>

            {/* Social Icons Strip */}
            <div className="flex items-center gap-1 sm:gap-1.5">
              {/* WhatsApp */}
              <a
                href="https://wa.me/18765780508?text=Hello%20Hi-Impact%20Shipping%2C%20I%20would%20like%20to%20inquire%20about%20shipping%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-md flex items-center justify-center text-[#050f26] hover:text-[#0b4d26] hover:bg-black/10 transition-all duration-200"
                aria-label="Chat with Hi-Impact on WhatsApp"
                title="WhatsApp Direct"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/hi.impactshipping?obrf=MWtmMXR5am1jMzlqMA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-md flex items-center justify-center text-[#050f26] hover:text-[#7f1d39] hover:bg-black/10 transition-all duration-200"
                aria-label="Follow Hi-Impact on Instagram"
                title="Instagram (@hi.impactshipping)"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-md flex items-center justify-center text-[#050f26] hover:text-[#0b2b5c] hover:bg-black/10 transition-all duration-200"
                aria-label="Connect with Hi-Impact on Facebook"
                title="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-md flex items-center justify-center text-[#050f26] hover:text-[#063363] hover:bg-black/10 transition-all duration-200"
                aria-label="Follow Hi-Impact on LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-md flex items-center justify-center text-[#050f26] hover:text-black hover:bg-black/10 transition-all duration-200"
                aria-label="Follow Hi-Impact on TikTok"
                title="TikTok"
              >
                <TikTokIcon className="w-3.5 h-3.5" />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex w-7 h-7 rounded-md items-center justify-center text-[#050f26] hover:text-[#880000] hover:bg-black/10 transition-all duration-200"
                aria-label="Watch Hi-Impact on YouTube"
                title="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
