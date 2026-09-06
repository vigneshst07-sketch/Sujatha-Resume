import React from 'react';
import { 
  Download, 
  Sparkles, 
  MapPin, 
  Mail, 
  Phone, 
  MessageCircle, 
  ArrowUpRight, 
  Layers, 
  Palette, 
  CheckCircle2 
} from 'lucide-react';
import { CANDIDATE_INFO, portraitImg } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  onCopyEmail: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact, onCopyEmail }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Ambient Lighting Background Elements - Editorial Theme */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-[550px] h-[550px] rounded-full bg-[#8B5CF6] blur-[140px]" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[550px] h-[550px] rounded-full bg-[#F59E0B] blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Editorial Bio, Headline, Expertise, Pathways */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Status Badge */}
            <div>
              <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-widest bg-[#F59E0B] text-[#0F172A] font-bold rounded-sm shadow-sm">
                Available for Hire
              </span>
            </div>

            {/* Headline - Editorial Large Title */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tighter text-[#F8FAFC] font-['Outfit',sans-serif]">
                SUJATHA<span className="text-[#F59E0B]">.</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-400 font-medium leading-relaxed max-w-xl">
                Visual Artist &amp; Graphic Designer specializing in brand identity, print media, ceremonial event layouts, and digital storytelling.
              </p>
            </div>

            {/* Expertise & Tools Quick Grid - From Editorial Layout */}
            <div className="w-full max-w-lg pt-1">
              <h3 className="text-[10px] uppercase tracking-widest text-[#8B5CF6] font-bold mb-3">
                Expertise &amp; Tools
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div className="text-[11px] bg-slate-900/80 px-3 py-2 rounded border border-slate-800 flex items-center gap-2 text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shrink-0" />
                  <span>Photoshop</span>
                </div>
                <div className="text-[11px] bg-slate-900/80 px-3 py-2 rounded border border-slate-800 flex items-center gap-2 text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shrink-0" />
                  <span>Illustrator</span>
                </div>
                <div className="text-[11px] bg-slate-900/80 px-3 py-2 rounded border border-slate-800 flex items-center gap-2 text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                  <span>Premiere Pro</span>
                </div>
                <div className="text-[11px] bg-slate-900/80 px-3 py-2 rounded border border-slate-800 flex items-center gap-2 text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                  <span>After Effects</span>
                </div>
              </div>
            </div>

            {/* Pathways - Editorial Spine Timeline Snippet */}
            <div className="w-full max-w-lg pt-1">
              <h3 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-3">
                Pathways
              </h3>
              <div className="space-y-3 relative pl-4 border-l border-slate-800">
                <div className="relative">
                  <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#F59E0B] border-2 border-[#0F172A]" />
                  <p className="text-[11px] font-bold text-slate-200">B.Sc. Animation</p>
                  <p className="text-[10px] text-slate-400 italic">Chennai Animation College (2024–27)</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-slate-600 border-2 border-[#0F172A]" />
                  <p className="text-[11px] font-bold text-slate-200">Higher Secondary (HSC)</p>
                  <p className="text-[10px] text-slate-400 italic">Government Higher Secondary School (2021–23)</p>
                </div>
              </div>
            </div>

            {/* CTAs - Editorial High-Contrast Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={onOpenResume}
                id="hero-resume-cta"
                className="bg-white hover:bg-slate-100 text-[#0F172A] text-[11px] font-black uppercase px-6 py-3 rounded-full tracking-wider shadow-xl shadow-slate-950 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Get Resume</span>
              </button>

              <a
                href="#portfolio"
                id="hero-explore-works-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-[11px] uppercase tracking-wider text-slate-200 border border-slate-700 hover:border-[#F59E0B] hover:text-white transition-all"
              >
                <span>Selected Work</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#F59E0B]" />
              </a>

              <button
                onClick={onOpenContact}
                id="hero-contact-cta"
                className="text-[11px] uppercase tracking-wider font-bold text-slate-400 hover:text-[#F59E0B] transition-colors flex items-center gap-1.5 py-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Connect</span>
              </button>
            </div>

            {/* Direct Quick Contact Bar */}
            <div className="pt-3 border-t border-slate-800/80 w-full flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <p className="text-[10px] uppercase tracking-widest text-slate-400">
                Chengalpattu &bull; Chennai, Tamil Nadu
              </p>

              <div className="flex items-center gap-3 font-mono text-[11px]">
                <button
                  onClick={onCopyEmail}
                  id="hero-copy-email-btn"
                  className="text-[#F59E0B] hover:underline flex items-center gap-1"
                  title="Click to copy email"
                >
                  <Mail className="w-3 h-3 text-[#F59E0B]" />
                  <span>sujathaperumall7@gmail.com</span>
                </button>
                <span className="text-slate-600">&bull;</span>
                <a
                  href="tel:+919042461507"
                  className="text-slate-300 hover:text-white"
                >
                  +91 9042461507
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Portrait with Editorial Framing */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              
              {/* Subtle ambient glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#F59E0B]/20 via-[#8B5CF6]/20 to-transparent blur-lg opacity-60" />
              
              {/* Card Frame */}
              <div className="relative rounded-2xl bg-slate-900 border border-slate-800 p-3 shadow-2xl">
                
                {/* Photo container */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80">
                  <img
                    src={portraitImg}
                    alt="Sujatha - Visual Artist and Graphic Designer"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                  
                  {/* Overlay text on image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <div>
                      <span className="inline-block px-2 py-0.5 text-[9px] uppercase tracking-widest bg-[#F59E0B] text-[#0F172A] font-bold rounded-sm mb-1">
                        Visual Artist
                      </span>
                      <p className="text-lg font-black text-white font-['Outfit',sans-serif]">SUJATHA</p>
                    </div>
                    <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-slate-900/90 border border-slate-700 text-slate-300">
                      2024–27
                    </span>
                  </div>
                </div>

                {/* Editorial Micro-Badges */}
                <div className="grid grid-cols-2 gap-2 mt-2.5">
                  <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                    <p className="text-[10px] font-bold text-[#F59E0B] uppercase tracking-wider">Identity</p>
                    <p className="text-xs font-semibold text-slate-200 mt-0.5">Branding &amp; Print</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                    <p className="text-[10px] font-bold text-[#8B5CF6] uppercase tracking-wider">Artistry</p>
                    <p className="text-xs font-semibold text-slate-200 mt-0.5">Henna &amp; Digital Art</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Bottom Stats Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-slate-800/60">
          {CANDIDATE_INFO.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/70 backdrop-blur-sm text-center hover:border-slate-700 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 font-['Outfit',sans-serif]">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
