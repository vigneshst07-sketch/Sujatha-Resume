import React from 'react';
import { ArrowUp, Heart, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { CANDIDATE_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  onCopyEmail: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenContact, onCopyEmail }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="portfolio-footer" className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Brand & Summary */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#F59E0B] flex items-center justify-center text-[#0F172A] font-black text-sm">
                S
              </div>
              <span className="font-black tracking-tight text-xl text-white font-['Outfit',sans-serif]">
                SUJATHA<span className="text-[#F59E0B]">.</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              Visual Artist &amp; Graphic Designer pursuing B.Sc. Animation at Chennai Animation College. Crafting high-impact brand identities, editorial print publications, and creative digital illustrations.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]"></span>
              <span className="text-slate-300">Open to full-time roles, apprenticeships, and freelance commissions.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
              Navigation
            </p>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li>
                <a href="#portfolio" className="hover:text-[#F59E0B] transition-colors">
                  Portfolio Works &amp; Case Studies
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F59E0B] transition-colors">
                  Biographical Profile
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#F59E0B] transition-colors">
                  Technical Toolchain &amp; Competencies
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-[#F59E0B] transition-colors">
                  Educational Trajectory
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenResume}
                  className="hover:text-[#F59E0B] transition-colors text-left"
                >
                  Official Resume Document
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Direct Links */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
              Direct Inquiries
            </p>
            <div className="space-y-2.5 font-mono text-xs">
              <p className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                <button onClick={onCopyEmail} className="hover:text-amber-400 text-left transition-colors">
                  {CANDIDATE_INFO.email}
                </button>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0" />
                <a href={`tel:${CANDIDATE_INFO.phone}`} className="hover:text-violet-400 transition-colors">
                  {CANDIDATE_INFO.phone}
                </a>
              </p>
              <p className="flex items-start gap-2 text-slate-400 text-[11px] leading-relaxed font-sans">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <span>Chengalpattu &bull; Chennai, Tamil Nadu, India</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Row: Dynamic Year & Copyright & Back to Top */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-mono tracking-widest uppercase text-slate-500 text-center sm:text-left">
            &copy; {currentYear} SUJATHA &bull; EDITORIAL PORTFOLIO ARCHIVE &bull; ALL RIGHTS RESERVED
          </p>

          <button
            onClick={scrollToTop}
            id="back-to-top-btn"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 hover:border-[#F59E0B] text-slate-300 hover:text-white transition-all text-xs font-bold uppercase tracking-wider"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#F59E0B]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
