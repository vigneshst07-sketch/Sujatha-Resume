import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles, Send } from 'lucide-react';
import { CANDIDATE_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Skills & Tools', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="Sujatha Portfolio Homepage"
        >
          <div className="w-9 h-9 rounded-sm bg-[#F59E0B] flex items-center justify-center text-[#0F172A] font-black text-base shadow-sm group-hover:bg-amber-400 transition-colors">
            S
          </div>
          <div>
            <div className="flex items-center">
              <span className="font-black tracking-tight text-xl text-[#F8FAFC] group-hover:text-amber-400 transition-colors font-['Outfit',sans-serif]">
                SUJATHA<span className="text-[#F59E0B]">.</span>
              </span>
            </div>
            <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
              Visual Artist & Designer
            </p>
          </div>
        </a>

        {/* Desktop Nav Links - Editorial Minimal Typography */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-400 hover:text-[#F59E0B] transition-colors py-1 relative group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#F59E0B] group-hover:w-full transition-all duration-200" />
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <span className="text-[11px] font-mono text-slate-400 hidden xl:inline">
            +91 9042461507
          </span>

          <span className="inline-block px-2.5 py-1 text-[10px] uppercase tracking-widest bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/40 font-bold rounded-sm">
            Available for Hire
          </span>

          <button
            onClick={onOpenResume}
            id="nav-resume-btn"
            className="bg-white hover:bg-slate-100 text-[#0F172A] text-[10px] font-black uppercase px-5 py-2 rounded-full tracking-wider shadow-lg shadow-slate-950 transition-all hover:scale-105 active:scale-95"
          >
            Get Resume
          </button>

          <button
            onClick={onOpenContact}
            id="nav-hire-btn"
            className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-300 hover:text-white border border-slate-700 hover:border-[#F59E0B] rounded-full transition-colors"
          >
            <Send className="w-3 h-3 text-[#F59E0B]" />
            <span>Connect</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="mobile-menu-toggle"
          className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2 pt-2">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs font-medium w-fit mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for Hire & Internships
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-300 hover:text-amber-400 hover:bg-slate-900 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="flex flex-col gap-2.5 pt-4 border-t border-slate-800 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-sm font-semibold hover:border-amber-500/50"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                View & Download Resume
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-sm font-bold shadow-md shadow-amber-500/25"
              >
                <Sparkles className="w-4 h-4" />
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
