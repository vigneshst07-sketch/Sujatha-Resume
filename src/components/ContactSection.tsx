import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  Clock, 
  ArrowUpRight 
} from 'lucide-react';
import { CANDIDATE_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onNotify: (msg: string) => void;
  onCopyEmail: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNotify, onCopyEmail }) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: 'Branding & Identity',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(CANDIDATE_INFO.phone);
    setCopiedPhone(true);
    onNotify('Phone number (+91 9042461507) copied to clipboard');
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      onNotify('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onNotify(`Thank you ${formState.name}! Your message has been sent to Sujatha.`);
      setFormState({
        name: '',
        email: '',
        projectType: 'Branding & Identity',
        message: '',
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative border-t border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-widest bg-[#F59E0B] text-[#0F172A] font-bold rounded-sm">
            Contact Channel
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#F8FAFC] tracking-tight font-['Outfit',sans-serif]">
            Initiate Creative Inquiries<span className="text-[#F59E0B]">.</span>
          </h2>
          <p className="text-sm text-slate-400 font-medium leading-relaxed">
            Available for entry-level graphic design positions, creative apprenticeships, agency collaborations, and custom brand identity projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 shadow-xl space-y-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white font-['Outfit',sans-serif]">
                Direct Contact Information
              </h3>

              {/* Email Card with Click-to-Copy */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3 group hover:border-amber-500/40 transition-colors">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-amber-400" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs text-slate-400 font-medium">Email Address</p>
                    <a 
                      href={`mailto:${CANDIDATE_INFO.email}`}
                      className="text-sm font-semibold text-slate-200 hover:text-amber-400 truncate block transition-colors"
                    >
                      {CANDIDATE_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={onCopyEmail}
                  id="contact-copy-email-btn"
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-amber-400 border border-slate-800 hover:border-slate-700 transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>

              {/* Phone Card with Click-to-Copy & Direct Call */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-3 group hover:border-violet-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/30 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Phone / Calling</p>
                    <a
                      href={`tel:${CANDIDATE_INFO.phone}`}
                      className="text-sm font-semibold text-slate-200 hover:text-violet-400 transition-colors"
                    >
                      {CANDIDATE_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={handleCopyPhone}
                    id="contact-copy-phone-btn"
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-violet-400 border border-slate-800 hover:border-slate-700 transition-colors"
                    title="Copy phone number"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={`tel:${CANDIDATE_INFO.phone}`}
                    className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800"
                    title="Call directly"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* WhatsApp Quick Chat */}
              <a
                href={CANDIDATE_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                id="contact-whatsapp-link"
                className="flex items-center justify-between p-4 rounded-xl bg-emerald-950/30 hover:bg-emerald-950/50 border border-emerald-500/30 hover:border-emerald-500/50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-400 font-medium">Instant Messaging</p>
                    <p className="text-sm font-bold text-emerald-100">Chat on WhatsApp</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-400 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div className="space-y-0.5 text-xs text-slate-400">
                  <p className="font-semibold text-slate-200">Permanent Location</p>
                  <p className="leading-relaxed">
                    Singaperumal Koil, Chengalpattu District - 603204
                  </p>
                  <p className="text-amber-400/90 font-medium">Chennai Metropolitan Area, Tamil Nadu, India</p>
                </div>
              </div>

              {/* Response Time Badge */}
              <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
                <Clock className="w-4 h-4 text-slate-500" />
                <span>Typical response time: Within 24 hours</span>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-slate-900/70 border border-slate-800/90 shadow-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white font-['Outfit',sans-serif] mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the form below to propose a project, freelance assignment, or full-time interview.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-emerald-200/90 max-w-md mx-auto">
                    Thank you for reaching out. Sujatha has received your details and will get back to you promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" id="portfolio-contact-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-semibold text-slate-300">
                        Your Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm text-slate-100 placeholder:text-slate-600 outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-semibold text-slate-300">
                        Email Address <span className="text-amber-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. ramesh@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm text-slate-100 placeholder:text-slate-600 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-project-type" className="text-xs font-semibold text-slate-300">
                      Opportunity or Project Type
                    </label>
                    <select
                      id="contact-project-type"
                      value={formState.projectType}
                      onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm text-slate-200 outline-none transition-all cursor-pointer"
                    >
                      <option value="Branding & Identity">Branding & Logo Identity</option>
                      <option value="Brochure & Print Design">Brochure & Print Design</option>
                      <option value="Wedding / Event Album">Wedding & Event Album Design</option>
                      <option value="Social Media Banners">Social Media Marketing Collaterals</option>
                      <option value="Digital Illustration">Digital Art / Custom Henna Concepts</option>
                      <option value="Full-Time / Junior Designer Role">Full-Time / Junior Designer Job Offer</option>
                      <option value="Other Inquiries">Other Inquiries</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-semibold text-slate-300">
                      Message & Brief <span className="text-amber-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Describe your design needs, timeline, or interview details..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm text-slate-100 placeholder:text-slate-600 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="contact-form-submit-btn"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-black text-xs uppercase tracking-wider bg-white hover:bg-slate-100 text-[#0F172A] shadow-xl shadow-slate-950 transition-all disabled:opacity-50 hover:scale-[1.01] active:scale-95"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-[#0F172A]" />
                        <span>Send Message to Sujatha</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
