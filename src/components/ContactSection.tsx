import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Copy, 
  Check, 
  User, 
  AtSign, 
  MessageSquare,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

const SERVICE_OPTIONS = [
  'Customs Pre-Clearance',
  'Door to Door Delivery',
  'Container Haulage & Drayage',
  'Expedited Air Cargo',
  'Motor Vehicle Clearance',
  'Other / General Logistics Inquiry'
];

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionReceipt, setSubmissionReceipt] = useState<{
    referenceId: string;
    fullName: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    submittedAt: string;
  } | null>(null);

  const [copiedId, setCopiedId] = useState(false);

  // Sync initialService if provided from hero slider or services card click
  useEffect(() => {
    if (initialService) {
      const match = SERVICE_OPTIONS.find((s) =>
        s.toLowerCase().includes(initialService.toLowerCase()) ||
        initialService.toLowerCase().includes(s.toLowerCase())
      );
      if (match) {
        setFormData((prev) => ({ ...prev, service: match }));
      } else {
        setFormData((prev) => ({ ...prev, service: initialService }));
      }
    }
  }, [initialService]);

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errors.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      errors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Please enter your phone number.';
    }

    if (!formData.service) {
      errors.service = 'Please select a service from the dropdown.';
    }

    if (!formData.message.trim()) {
      errors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Please provide at least 10 characters in your message.';
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    const randomRef = `HI-INQ-${Math.floor(100000 + Math.random() * 900000)}`;

    try {
      // Forward form data to primary mailbox (hiimpactshipping@outlook.com) and CC copy to islandweb@proton.me
      const inquiryPayload = {
        _subject: `New Shipping Inquiry [${randomRef}] - ${formData.fullName} (${formData.service})`,
        _replyto: formData.email,
        _template: 'table',
        _cc: 'islandweb@proton.me',
        'Reference ID': randomRef,
        'Full Name': formData.fullName,
        'Email Address': formData.email,
        'Phone Number': formData.phone,
        'Selected Service': formData.service,
        'Inquiry Message': formData.message,
        'Submitted Date/Time': new Date().toLocaleString(),
      };

      // Send to both endpoints concurrently to ensure both inboxes receive the submission notification
      await Promise.allSettled([
        fetch('https://formsubmit.co/ajax/hiimpactshipping@outlook.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify(inquiryPayload),
        }),
        fetch('https://formsubmit.co/ajax/islandweb@proton.me', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            ...inquiryPayload,
            _subject: `[Copy] New Shipping Inquiry [${randomRef}] - ${formData.fullName} (${formData.service})`,
          }),
        }),
      ]);
    } catch (err) {
      console.warn('Form forwarding submission notice:', err);
    } finally {
      setSubmissionReceipt({
        referenceId: randomRef,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      });
      setIsSubmitting(false);
      // Reset form fields
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }
  };

  const handleCopyReference = () => {
    if (submissionReceipt?.referenceId) {
      navigator.clipboard.writeText(submissionReceipt.referenceId);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white text-black border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-[#b89225] mb-3">
              Commercial Desk &amp; Inquiries
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#081533] leading-tight">
              Get in Touch with Hi Impact Shipping
            </h2>
          </div>
          <p className="text-sm sm:text-base text-black max-w-md leading-relaxed">
            Have questions about customs clearance, shipping schedules, container haulage, or vehicle import? Fill out the inquiry form below and our team in Kingston will respond promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Contact Form Container */}
          <div className="lg:col-span-8 bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xl">
            
            {submissionReceipt ? (
              /* Success State */
              <div className="py-8 px-6 bg-slate-50 rounded-xl border-2 border-[#d4af37] text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-[#d4af37]/20 text-[#081533] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-9 h-9 text-[#b89225]" />
                </div>
                <h3 className="text-2xl font-bold text-[#081533] mb-2">
                  Inquiry Successfully Received
                </h3>
                <p className="text-sm text-black max-w-md mx-auto mb-4 leading-relaxed">
                  Thank you, <span className="font-bold text-black">{submissionReceipt.fullName}</span>. Your inquiry regarding <span className="font-bold text-[#081533]">{submissionReceipt.service}</span> has been dispatched to our Kingston commercial desk at <span className="font-semibold text-[#081533]">hiimpactshipping@outlook.com</span>.
                </p>
                <p className="text-xs text-black mb-6">
                  A representative will review your message and contact you at <span className="font-semibold text-black">{submissionReceipt.email}</span> or <span className="font-semibold text-black">{submissionReceipt.phone}</span> within 2 hours during normal business operations.
                </p>

                {/* Inquiry Reference Summary */}
                <div className="inline-flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white border border-slate-200 rounded-lg text-left mb-6 max-w-lg mx-auto w-full shadow-sm">
                  <div>
                    <div className="text-xs text-black font-semibold">Inquiry Reference Number</div>
                    <div className="font-mono text-base font-bold text-[#b89225]">
                      {submissionReceipt.referenceId}
                    </div>
                  </div>
                  <div className="sm:border-l sm:border-slate-200 sm:pl-4">
                    <div className="text-xs text-black font-semibold">Service Selected</div>
                    <div className="text-sm font-bold text-[#081533]">
                      {submissionReceipt.service}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyReference}
                    className="p-2 text-black hover:text-[#081533] rounded hover:bg-slate-100 transition-colors shrink-0"
                    title="Copy reference code"
                  >
                    {copiedId ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`mailto:hiimpactshipping@outlook.com?subject=${encodeURIComponent(`Shipping Inquiry [${submissionReceipt.referenceId}] - ${submissionReceipt.fullName}`)}&body=${encodeURIComponent(`Hello Hi Impact Shipping,\n\nReference: ${submissionReceipt.referenceId}\nClient: ${submissionReceipt.fullName}\nPhone: ${submissionReceipt.phone}\nEmail: ${submissionReceipt.email}\nService: ${submissionReceipt.service}\n\nMessage:\n${submissionReceipt.message}`)}`}
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-[#081533] bg-slate-200 hover:bg-slate-300 rounded-lg transition-colors shadow-sm"
                  >
                    <Mail className="w-4 h-4 text-[#081533]" />
                    <span>Open in Email App</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setSubmissionReceipt(null)}
                    className="px-6 py-3 text-xs font-bold text-[#081533] bg-[#d4af37] hover:bg-[#e6ca65] rounded-lg transition-colors shadow-md"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* New Contact Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-slate-200 pb-4 mb-2">
                  <h3 className="text-xl font-bold text-[#081533]">
                    Send Us an Inquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-black mt-1">
                    Please provide your contact details and service needs. All fields marked with * are required.
                  </p>
                </div>

                {/* Row 1: Full Name & Email Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label 
                      htmlFor="fullName" 
                      className="block text-xs font-bold text-black uppercase tracking-wider mb-2"
                    >
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-black">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (formErrors.fullName) setFormErrors({ ...formErrors, fullName: '' });
                        }}
                        placeholder="John Brown"
                        className={`w-full pl-10 pr-3.5 py-3 text-sm bg-slate-50 border rounded-lg text-black placeholder:text-black/60 font-medium transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4af37] ${
                          formErrors.fullName ? 'border-rose-500' : 'border-slate-300'
                        }`}
                      />
                    </div>
                    {formErrors.fullName && (
                      <p className="text-rose-600 text-xs font-semibold mt-1.5">{formErrors.fullName}</p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-xs font-bold text-black uppercase tracking-wider mb-2"
                    >
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-black">
                        <AtSign className="w-4 h-4" />
                      </div>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (formErrors.email) setFormErrors({ ...formErrors, email: '' });
                        }}
                        placeholder="john.brown@example.com"
                        className={`w-full pl-10 pr-3.5 py-3 text-sm bg-slate-50 border rounded-lg text-black placeholder:text-black/60 font-medium transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4af37] ${
                          formErrors.email ? 'border-rose-500' : 'border-slate-300'
                        }`}
                      />
                    </div>
                    {formErrors.email && (
                      <p className="text-rose-600 text-xs font-semibold mt-1.5">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Row 2: Phone Number & Select a Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone Number */}
                  <div>
                    <label 
                      htmlFor="phone" 
                      className="block text-xs font-bold text-black uppercase tracking-wider mb-2"
                    >
                      Phone Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-black">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (formErrors.phone) setFormErrors({ ...formErrors, phone: '' });
                        }}
                        placeholder="(876) 000-0000"
                        className={`w-full pl-10 pr-3.5 py-3 text-sm bg-slate-50 border rounded-lg text-black placeholder:text-black/60 font-medium transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4af37] ${
                          formErrors.phone ? 'border-rose-500' : 'border-slate-300'
                        }`}
                      />
                    </div>
                    {formErrors.phone && (
                      <p className="text-rose-600 text-xs font-semibold mt-1.5">{formErrors.phone}</p>
                    )}
                  </div>

                  {/* Select a Service Dropdown */}
                  <div>
                    <label 
                      htmlFor="service" 
                      className="block text-xs font-bold text-black uppercase tracking-wider mb-2"
                    >
                      Select a Service *
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => {
                          setFormData({ ...formData, service: e.target.value });
                          if (formErrors.service) setFormErrors({ ...formErrors, service: '' });
                        }}
                        className={`w-full px-3.5 py-3 text-sm bg-slate-50 border rounded-lg text-black font-medium transition-colors appearance-none pr-10 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4af37] ${
                          formErrors.service ? 'border-rose-500' : 'border-slate-300'
                        }`}
                      >
                        <option value="" disabled className="text-black">
                          Choose a service...
                        </option>
                        {SERVICE_OPTIONS.map((service) => (
                          <option key={service} value={service} className="text-black font-medium">
                            {service}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-black">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                    {formErrors.service && (
                      <p className="text-rose-600 text-xs font-semibold mt-1.5">{formErrors.service}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-xs font-bold text-black uppercase tracking-wider mb-2"
                  >
                    Message *
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (formErrors.message) setFormErrors({ ...formErrors, message: '' });
                      }}
                      placeholder="Please describe your cargo requirements, destination parish, dimensions, or questions..."
                      className={`w-full px-3.5 py-3 text-sm bg-slate-50 border rounded-lg text-black placeholder:text-black/60 font-medium transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4af37] ${
                        formErrors.message ? 'border-rose-500' : 'border-slate-300'
                      }`}
                    />
                  </div>
                  {formErrors.message && (
                    <p className="text-rose-600 text-xs font-semibold mt-1.5">{formErrors.message}</p>
                  )}
                </div>

                {/* Submit Button: Send Inquiry */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-black font-medium flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#b89225]" />
                    <span>Your information is protected and confidential.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-[#081533] bg-[#d4af37] hover:bg-[#e6ca65] active:scale-[0.98] disabled:opacity-50 rounded-lg transition-all shadow-lg shadow-[#d4af37]/25 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>

          {/* Contact Information & Operational Desks (Right Column) */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-[#081533] border-2 border-[#d4af37]/60 rounded-2xl p-6 sm:p-7 shadow-xl text-white">
              <h3 className="text-base font-bold text-white mb-4 pb-2 border-b border-[#172c5a] flex items-center justify-between">
                <span>Direct Contact &amp; Dispatch</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#d4af37] bg-[#d4af37]/20 px-2 py-0.5 rounded">Kingston, Jamaica</span>
              </h3>
              
              <div className="space-y-4 text-xs">
                <div>
                  <div className="text-white mb-0.5 font-semibold">Primary Dispatch &amp; Operations:</div>
                  <a href="tel:8765780508" className="font-mono text-sm font-bold text-white hover:text-[#d4af37] transition-colors flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                    (876) 578-0508
                  </a>
                  <div className="text-[11px] text-white/90 mt-0.5">Maritime, Air &amp; Overland Logistics</div>
                </div>

                <div>
                  <div className="text-white mb-0.5 font-semibold">Commercial &amp; Customer Support:</div>
                  <a href="tel:8764707066" className="font-mono text-sm font-bold text-white hover:text-[#d4af37] transition-colors flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                    (876) 470-7066
                  </a>
                  <div className="text-[11px] text-white/90 mt-0.5">Rates, Bookings &amp; Container Tracking</div>
                </div>

                <div>
                  <div className="text-white mb-0.5 font-semibold">Official Email:</div>
                  <a href="mailto:hiimpactshipping@outlook.com" className="font-mono text-sm font-bold text-[#d4af37] hover:text-[#f3df8a] transition-colors flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    hiimpactshipping@outlook.com
                  </a>
                  <div className="text-[11px] text-white/90 mt-0.5">Direct rate inquiries &amp; trade documentation</div>
                </div>

                <div className="pt-2 border-t border-[#172c5a]">
                  <div className="text-white mb-0.5 font-semibold">Headquarters Location:</div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    Kingston, Jamaica
                  </div>
                  <div className="text-[11px] text-white/90 mt-0.5">Islandwide delivery &amp; global trade lane corridors</div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-[#081533] to-[#040d22] rounded-xl border border-[#d4af37]/40 text-xs text-white space-y-2 shadow-md">
              <div className="font-bold text-[#d4af37]">
                Hi Impact Service Commitment:
              </div>
              <p className="leading-relaxed text-white/90">
                All client inquiries are addressed directly by experienced logistics professionals. Fast response times, accurate customs guidance, and dedicated freight solutions across all 14 Jamaican parishes.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
