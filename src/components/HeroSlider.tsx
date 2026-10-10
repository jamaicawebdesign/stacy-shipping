import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  ArrowRight, 
  Ship, 
  Plane, 
  Truck, 
  Warehouse
} from 'lucide-react';
import { HERO_SLIDES } from '../data/shippingData';

// High-resolution commercial maritime & logistics imagery fallbacks
const FALLBACK_SLIDE_IMAGES: Record<string, string> = {
  'ocean-freight': 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=2000&q=85',
  'air-freight': 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=2000&q=85',
  'road-freight': 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2000&q=85',
  'logistics-hub': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=85',
};

interface HeroSliderProps {
  onSelectServiceQuote?: (serviceId: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slideDuration = 6500; // ms per slide

  // Autoplay cycle
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, slideDuration);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentSlideIndex]);

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  const getSlideIcon = (id: string) => {
    switch (id) {
      case 'ocean-freight':
        return <Ship className="w-4 h-4 text-[#d4af37]" />;
      case 'air-freight':
        return <Plane className="w-4 h-4 text-[#d4af37]" />;
      case 'road-freight':
        return <Truck className="w-4 h-4 text-[#d4af37]" />;
      default:
        return <Warehouse className="w-4 h-4 text-[#d4af37]" />;
    }
  };

  return (
    <section id="home" className="relative min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#030b1e]">
      {/* Background Slides with AnimatePresence - Black overlay with 0.5 opacity */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
              loading="eager"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                const fallback = FALLBACK_SLIDE_IMAGES[currentSlide.id] || FALLBACK_SLIDE_IMAGES['ocean-freight'];
                if (target.src !== fallback) {
                  target.src = fallback;
                }
              }}
            />
            {/* Black overlay with 0.5 opacity */}
            <div className="absolute inset-0 bg-black/50 pointer-events-none" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Slide Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
        <div className="max-w-4xl text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="py-2"
            >
              {/* Category Kicker */}
              <div className="flex items-center gap-2 text-xs font-bold text-[#d4af37] uppercase tracking-wider mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                <span className="p-1 rounded bg-[#081533]/80 border border-[#d4af37]/60 shadow-md">
                  {getSlideIcon(currentSlide.id)}
                </span>
                <span>{currentSlide.category}</span>
                <span aria-hidden="true" className="text-white">·</span>
                <span className="text-white font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                  {currentSlide.subtitle}
                </span>
              </div>

              {/* Hero Title with strong drop shadow */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-5 text-balance drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                {currentSlide.title}
              </h1>

              {/* Description */}
              <p className="text-base sm:text-xl text-white font-normal leading-relaxed mb-8 max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
                {currentSlide.description}
              </p>

              {/* Primary Actions & Key Proof Stat */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold text-[#081533] bg-[#d4af37] hover:bg-[#e6ca65] active:bg-[#c29c29] rounded-lg transition-all duration-200 shadow-xl shadow-black/60 whitespace-nowrap"
                >
                  {currentSlide.primaryAction}
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={currentSlide.secondaryHref}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold text-white bg-[#081533]/90 hover:bg-[#081533] hover:text-[#d4af37] border-2 border-[#d4af37] rounded-lg transition-all shadow-xl shadow-black/60 whitespace-nowrap"
                >
                  {currentSlide.secondaryAction}
                </a>

                {/* Key Proof Stat */}
                <div className="flex items-center gap-3 pl-3 sm:pl-5 border-l-2 border-[#d4af37] py-1 bg-[#081533]/70 backdrop-blur-xs px-3.5 rounded-r-lg shadow-lg">
                  <div className="text-2xl font-bold text-[#d4af37] font-mono tabular-nums drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                    {currentSlide.highlightStat}
                  </div>
                  <div className="text-xs text-white max-w-[130px] leading-tight font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                    {currentSlide.highlightLabel}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Floating Side Navigation Arrows */}
      <div className="hidden sm:flex absolute inset-y-0 left-4 items-center z-20 pointer-events-none">
        <button
          type="button"
          onClick={handlePrev}
          className="pointer-events-auto p-3 rounded-full bg-[#081533]/70 hover:bg-[#081533] text-white hover:text-[#d4af37] border border-[#1b356d] backdrop-blur-sm transition-all duration-200 shadow-xl shadow-black/40 hover:scale-105"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="hidden sm:flex absolute inset-y-0 right-4 items-center z-20 pointer-events-none">
        <button
          type="button"
          onClick={handleNext}
          className="pointer-events-auto p-3 rounded-full bg-[#081533]/70 hover:bg-[#081533] text-white hover:text-[#d4af37] border border-[#1b356d] backdrop-blur-sm transition-all duration-200 shadow-xl shadow-black/40 hover:scale-105"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Sleek Bottom Slider Controls (Pagination Dots & Playback) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-auto">
        <div className="flex items-center justify-between sm:justify-center gap-6 py-3">
          {/* Mobile Prev Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="sm:hidden p-2 rounded-lg bg-[#081533]/80 text-white border border-[#1b356d]"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#081533]/80 backdrop-blur-md border border-[#172c5a] shadow-lg">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlideIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentSlideIndex
                    ? 'w-8 bg-[#d4af37]'
                    : 'w-2.5 bg-[#1b356d] hover:bg-[#284992]'
                }`}
              />
            ))}

            <div className="h-4 w-px bg-[#172c5a] mx-1" />

            {/* Play / Pause Toggle */}
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1 text-slate-300 hover:text-[#d4af37] transition-colors"
              aria-label={isPlaying ? 'Pause slider autoplay' : 'Resume slider autoplay'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Mobile Next Button */}
          <button
            type="button"
            onClick={handleNext}
            className="sm:hidden p-2 rounded-lg bg-[#081533]/80 text-white border border-[#1b356d]"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
