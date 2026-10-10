import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
import { Topbar } from './Topbar';
import { Logo } from './Logo';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Our Services', href: '#services', id: 'services' },
    { label: 'Contact Us', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(id);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 110;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Topbar with Social Icons, Contact & Location */}
      <Topbar />

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050f26]/98 backdrop-blur-md border-b border-[#172c5a] shadow-xl shadow-black/50 py-3'
            : 'bg-[#030b1e]/90 backdrop-blur-md border-b border-[#172c5a]/40 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            {/* Zone 1: Official Corporate Brand Logo */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home', 'home')}
              className="text-slate-100 group whitespace-nowrap shrink-0 transition-transform duration-200 hover:scale-[1.02]"
              aria-label="HI-Impact Shipping & Co. Home"
            >
              <Logo variant="header" />
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, link.id)}
                    className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'text-[#d4af37] font-semibold'
                        : 'text-slate-200 hover:text-[#d4af37]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d4af37] rounded-full shadow-sm shadow-[#d4af37]/50" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: Direct Phone Call & Primary Action */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href="tel:8765780508"
                className="hidden lg:flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-[#d4af37] bg-[#081533]/80 hover:bg-[#0c1f4a] border border-[#172c5a] rounded-lg transition-colors shadow-sm"
                title="Call Kingston Operations"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>(876) 578-0508</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact', 'contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#030b1e] bg-gradient-to-r from-[#d4af37] to-[#e6ca65] hover:from-[#e6ca65] hover:to-[#f3df8a] active:bg-[#c29c29] rounded-lg transition-all duration-200 shadow-md shadow-[#d4af37]/25 whitespace-nowrap shrink-0"
              >
                Request Quote
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-200 hover:text-[#d4af37] rounded-lg hover:bg-[#0c1c3f] transition-colors"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#050f26]/98 backdrop-blur-xl border-b border-[#172c5a] px-6 py-6 shadow-2xl animate-in fade-in duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.id)}
                  className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-[#0d1e44] text-[#d4af37] font-semibold'
                      : 'text-slate-200 hover:text-[#d4af37] hover:bg-[#0a1837]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-4 border-t border-[#172c5a] flex flex-col gap-3">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact', 'contact')}
                className="w-full text-center py-3 text-sm font-bold text-[#030b1e] bg-[#d4af37] hover:bg-[#e6ca65] rounded-lg transition-colors shadow-md"
              >
                Request Quote
              </a>
            </div>

            {/* Direct Contact in Mobile Menu */}
            <div className="pt-4 border-t border-[#172c5a] flex flex-col gap-2.5 text-xs text-slate-300">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> Kingston, Jamaica
              </div>
              <a href="tel:8765780508" className="flex items-center gap-2 hover:text-[#d4af37]">
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" /> (876) 578-0508
              </a>
              <a href="tel:8764707066" className="flex items-center gap-2 hover:text-[#d4af37]">
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" /> (876) 470-7066
              </a>
              <a href="mailto:hiimpactshipping@outlook.com" className="flex items-center gap-2 hover:text-[#d4af37] break-all">
                <Mail className="w-3.5 h-3.5 text-[#d4af37] shrink-0" /> hiimpactshipping@outlook.com
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
