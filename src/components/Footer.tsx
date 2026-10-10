import React from 'react';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#020817] text-slate-300 border-t border-[#172c5a] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-[#172c5a]">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo variant="footer" />
            </div>
            <p className="text-slate-300 leading-relaxed max-w-sm mb-5 text-xs">
              Reliable, efficient and personalized shipping &amp; customs brokerage solutions. Over 26 years simplifying sending your goods to Jamaica safely and timely.
            </p>
            <div className="text-slate-400 text-[11px] space-y-1">
              <div>FMC Licensed Ocean Transportation Intermediary #024881</div>
              <div>IATA Cargo Agent Network #01-4-8921</div>
              <div>C-TPAT Tier 3 Validated Highway &amp; Ocean Carrier</div>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-3">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-[#d4af37] transition-colors">Home &amp; Hero Slider</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#d4af37] transition-colors">About Us &amp; Mission</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#d4af37] transition-colors">Contact &amp; Rate Quotes</a>
              </li>
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-3">
              Our Services
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors">Pre-Clearance</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors">Door to Door Delivery</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors">Container Haulage</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors">Air Cargo</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors">Motor Vehicle Clearance</a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-3">
              Contact &amp; Office
            </h4>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Kingston, Jamaica</span>
              </div>
              <div className="space-y-1">
                <div className="text-[11px] text-slate-400">Dispatch &amp; Operations:</div>
                <a href="tel:8765780508" className="flex items-center gap-2 hover:text-[#d4af37] font-mono text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                  (876) 578-0508
                </a>
              </div>
              <div className="space-y-1">
                <div className="text-[11px] text-slate-400">Customer Support:</div>
                <a href="tel:8764707066" className="flex items-center gap-2 hover:text-[#d4af37] font-mono text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                  (876) 470-7066
                </a>
              </div>
              <div className="space-y-1 pt-1">
                <div className="text-[11px] text-slate-400">Email Inquiries:</div>
                <a href="mailto:hiimpactshipping@outlook.com" className="flex items-center gap-2 hover:text-[#d4af37] text-white break-all transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  hiimpactshipping@outlook.com
                </a>
              </div>
            </div>
          </div>

          {/* Gateways Col */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-3">
              Operating Gateways
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>Kingston Container Terminal (KCT)</li>
              <li>Port of Los Angeles / Long Beach</li>
              <li>Port of Rotterdam (Maasvlakte)</li>
              <li>Port of Singapore (PSA)</li>
              <li>Hamburg Container Terminal</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; 2026 Hi Impact Shipping Company Inc. All rights reserved. Registered Marine &amp; Intermodal Carrier.
          </div>

          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-slate-200 transition-colors">Terms of Carriage</a>
            <a href="#home" className="hover:text-slate-200 transition-colors">Standard Trading Conditions</a>
            <a href="#home" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 text-slate-300 hover:text-[#d4af37] bg-[#081533] border border-[#172c5a] rounded-lg hover:bg-[#0c1f4a] transition-colors flex items-center gap-1.5 shadow-sm"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
