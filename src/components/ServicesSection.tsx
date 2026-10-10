import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  X, 
  Clock, 
  Boxes,
  Compass, 
  FileCheck
} from 'lucide-react';
import { SHIPPING_SERVICES, ShippingService } from '../data/shippingData';

interface ServicesSectionProps {
  onSelectServiceQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceQuote }) => {
  const [selectedService, setSelectedService] = useState<ShippingService | null>(null);

  const handleOpenQuote = (title: string) => {
    setSelectedService(null);
    onSelectServiceQuote(title);
    const element = document.querySelector('#contact');
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="services" className="py-24 bg-white text-black border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-[#b89225] mb-3">
              Our Core Services &amp; Logistics Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#081533] leading-tight">
              Comprehensive Shipping, Haulage &amp; Customs Solutions
            </h2>
          </div>
          <p className="text-sm sm:text-base text-black max-w-md leading-relaxed">
            Headquartered in Kingston, Jamaica, Hi Impact Shipping provides end-to-end cargo handling—from pre-clearance and expedited air cargo to heavy container haulage, door-to-door islandwide delivery, and motor vehicle clearance.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SHIPPING_SERVICES.map((service, index) => {
            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between rounded-2xl bg-white border border-slate-200 hover:border-[#d4af37] hover:shadow-2xl transition-all duration-300 shadow-sm overflow-hidden"
              >
                <div>
                  {/* Service Card Featured Image instead of icon */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081533]/85 via-transparent to-black/25" />
                    
                    {/* Index badge floating on image */}
                    <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[#d4af37] font-mono text-xs font-bold border border-[#d4af37]/30 shadow-md">
                      0{index + 1}
                    </div>

                    {/* Badge at bottom of image */}
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-[#d4af37] text-[#050f26] text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                        {service.id === 'pre-clearance' 
                          ? 'ASYCUDA Pre-Clearance' 
                          : service.id === 'haulage' 
                            ? 'Heavy Wharf Drayage' 
                            : service.id === 'air-cargo' 
                              ? 'Expedited Aviation' 
                              : service.id === 'motor-vehicle-clearance' 
                                ? 'Import Valuation & Release' 
                                : 'Door-to-Door Delivery'}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <h3 className="text-xl font-bold text-[#081533] mb-1.5 group-hover:text-[#b89225] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs font-bold text-[#b89225] mb-3">
                      {service.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-black leading-relaxed mb-6 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Key feature checkmarks */}
                    <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-black font-medium">
                          <Check className="w-3.5 h-3.5 text-[#b89225] shrink-0 stroke-[2.5]" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-semibold text-black hover:text-[#081533] transition-colors flex items-center gap-1.5"
                  >
                    View Specifications
                    <ArrowRight className="w-3.5 h-3.5 text-[#b89225]" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleOpenQuote(service.title)}
                    className="px-4 py-2 text-xs font-bold text-[#081533] bg-[#d4af37] hover:bg-[#e6ca65] rounded-md transition-colors shadow-sm"
                  >
                    Quote Rate
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Transit Matrix Strip */}
        <div className="mt-16 bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div>
              <h3 className="text-lg font-bold text-[#081533]">
                Standard Transit Corridors &amp; Velocity Benchmarks
              </h3>
              <p className="text-xs text-black mt-1">
                Typical hub-to-hub transit benchmarks across high-density commerce corridors.
              </p>
            </div>
            <div className="text-xs font-mono text-[#b89225] tabular-nums font-bold">
              Carrier Schedule: Q2 2026 Active Routing
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-xs">
              <div className="text-xs text-[#b89225] font-bold mb-1">Florida Express Corridor</div>
              <div className="text-sm font-bold text-[#081533]">Miami / Fort Lauderdale ⇄ Kingston</div>
              <div className="mt-2 text-xs text-black font-mono font-medium">Ocean Freight: 3–4 Days</div>
              <div className="text-xs text-black font-mono font-medium">Air Cargo: 24 Hours</div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-xs">
              <div className="text-xs text-[#b89225] font-bold mb-1">US Tri-State Corridor</div>
              <div className="text-sm font-bold text-[#081533]">New York / New Jersey ⇄ Kingston</div>
              <div className="mt-2 text-xs text-black font-mono font-medium">Ocean Freight: 5–6 Days</div>
              <div className="text-xs text-black font-mono font-medium">Air Cargo: 24–36 Hours</div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-xs">
              <div className="text-xs text-[#b89225] font-bold mb-1">UK &amp; European Route</div>
              <div className="text-sm font-bold text-[#081533]">London / Southampton ⇄ Kingston</div>
              <div className="mt-2 text-xs text-black font-mono font-medium">Ocean Freight: 12–14 Days</div>
              <div className="text-xs text-black font-mono font-medium">Air Cargo: 48 Hours</div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-xs">
              <div className="text-xs text-[#b89225] font-bold mb-1">Islandwide Haulage</div>
              <div className="text-sm font-bold text-[#081533]">Kingston Wharves ⇄ All 14 Parishes</div>
              <div className="mt-2 text-xs text-black font-mono font-medium">Wharf Pullout: Same-Day</div>
              <div className="text-xs text-black font-mono font-medium">Door Delivery: 24–48 Hours</div>
            </div>
          </div>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white border-2 border-slate-200 rounded-xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-4">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 rounded-xl object-cover border border-[#d4af37]/50 shadow-md shrink-0"
                />
                <div>
                  <h3 className="text-xl font-bold text-[#081533]">{selectedService.title}</h3>
                  <p className="text-xs text-[#b89225] font-bold">{selectedService.tagline}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="p-1.5 text-black hover:text-[#081533] rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-5 space-y-5">
              <p className="text-sm text-black leading-relaxed">
                {selectedService.description}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#b89225] mb-3">
                  Operational Parameters &amp; Specifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-black font-medium flex items-center gap-1.5 mb-1">
                      <Clock className="w-3.5 h-3.5 text-[#b89225]" />
                      Transit Window
                    </span>
                    <span className="font-bold text-[#081533] font-mono">{selectedService.specs.transitTime}</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-black font-medium flex items-center gap-1.5 mb-1">
                      <Boxes className="w-3.5 h-3.5 text-[#b89225]" />
                      Payload &amp; Capacity
                    </span>
                    <span className="font-bold text-[#081533] font-mono">{selectedService.specs.capacity}</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-black font-medium flex items-center gap-1.5 mb-1">
                      <Compass className="w-3.5 h-3.5 text-[#b89225]" />
                      Global Coverage
                    </span>
                    <span className="font-bold text-[#081533]">{selectedService.specs.coverage}</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-black font-medium flex items-center gap-1.5 mb-1">
                      <FileCheck className="w-3.5 h-3.5 text-[#b89225]" />
                      Recommended Cargo
                    </span>
                    <span className="font-bold text-[#081533]">{selectedService.specs.bestFor}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#b89225] mb-2">
                  Key Service Standards
                </h4>
                <ul className="space-y-2 text-xs text-black">
                  {selectedService.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#b89225] mt-0.5 shrink-0 stroke-[2.5]" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-5 border-t border-slate-200 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-xs font-semibold text-black hover:text-[#081533] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => handleOpenQuote(selectedService.title)}
                className="px-4 py-2 text-xs font-bold text-[#081533] bg-[#d4af37] hover:bg-[#e6ca65] rounded-lg transition-colors shadow-sm"
              >
                Request Quote For {selectedService.title}
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
