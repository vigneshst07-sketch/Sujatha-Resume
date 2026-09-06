import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Sparkles, Check, GraduationCap, Heart, Wrench } from 'lucide-react';
import { CANDIDATE_INFO, portraitImg, SKILLS_DATA, SOFTWARE_TOOLS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNotify: (msg: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onNotify }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generates a clean printable window or print dialog
    onNotify('Opening printable resume view...');
    setTimeout(() => {
      window.print();
    }, 400);
  };

  return (
    <div
      id="resume-view-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-candidate-name"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl my-auto bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <h3 className="text-sm font-bold text-slate-200 tracking-wide">
              Official Resume Preview — Sujatha
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              id="resume-print-action"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
              title="Print resume"
            >
              <Printer className="w-4 h-4 text-amber-400" />
              <span className="hidden sm:inline">Print CV</span>
            </button>

            <button
              onClick={handleDownload}
              id="resume-download-action"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-amber-500/20"
              title="Download or save as PDF"
            >
              <Download className="w-4 h-4" />
              <span>Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              id="close-resume-modal-btn"
              className="p-1.5 ml-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Body */}
        <div className="overflow-y-auto p-4 sm:p-8 custom-scrollbar bg-slate-900">
          
          {/* Resume Container Sheet */}
          <div className="max-w-3xl mx-auto bg-slate-950 text-slate-100 rounded-xl border border-slate-800 p-6 sm:p-10 shadow-2xl space-y-8 print:p-0 print:border-none print:shadow-none print:bg-white print:text-black">
            
            {/* Header: Portrait + Name + Title */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-slate-800">
              <img
                src={portraitImg}
                alt="Sujatha"
                referrerPolicy="no-referrer"
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border-2 border-amber-500/40 shadow-lg shrink-0"
              />
              <div className="space-y-2 text-center sm:text-left flex-1">
                <h1 id="resume-candidate-name" className="text-3xl sm:text-4xl font-black text-white font-['Outfit',sans-serif] tracking-wider">
                  SUJATHA
                </h1>
                <p className="text-sm font-bold uppercase tracking-widest text-amber-400">
                  GRAPHIC DESIGNER & VISUAL ARTIST
                </p>
                <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
                  Highly creative and multitalented Graphic Designer with hands-on knowledge in print design, multimedia, branding concepts, and digital visual art.
                </p>
              </div>
            </div>

            {/* Contact Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate">sujathaperumall7@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+91 9042461507</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate">Chengalpattu District - 603204</span>
              </div>
            </div>

            {/* Two-Column Resume Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Left Column: Personal Statement, Education, Hobbies */}
              <div className="md:col-span-7 space-y-6">
                
                {/* Personal Information Statement */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 border-b border-slate-800 pb-1">
                    Personal Information
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    I am a creative and motivated Graphic Design fresher currently pursuing a B.Sc. in Animation at Chennai Animation College. I have a strong interest in visual design and digital creativity, with hands-on knowledge of Adobe Photoshop and Illustrator. I enjoy creating posters, social media designs, branding concepts, and other creative visual content. I am eager to learn new skills, take on creative challenges, and grow as a professional Graphic Designer.
                  </p>
                </div>

                {/* Education Section */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 border-b border-slate-800 pb-1 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5" />
                    Education
                  </h4>
                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                      <div className="flex justify-between font-bold text-slate-200">
                        <span>B.Sc. ANIMATION</span>
                        <span className="text-amber-400 font-mono">2024 - 2027</span>
                      </div>
                      <p className="text-slate-400 font-medium mt-0.5">CHENNAI ANIMATION COLLEGE</p>
                      <p className="text-[11px] text-slate-400 mt-1">Focus on 2D Animation, 3D Digital Modeling, Graphic Pre-press, and Visual Storyboarding.</p>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                      <div className="flex justify-between font-bold text-slate-200">
                        <span>HIGHER SECONDARY SCHOOL (HSC)</span>
                        <span className="text-amber-400 font-mono">2021 - 2023</span>
                      </div>
                      <p className="text-slate-400 font-medium mt-0.5">Government Higher Secondary School</p>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                      <div className="flex justify-between font-bold text-slate-200">
                        <span>SSLC / SECONDARY SCHOOL</span>
                        <span className="text-amber-400 font-mono">2019 - 2021</span>
                      </div>
                      <p className="text-slate-400 font-medium mt-0.5">Government High School</p>
                    </div>
                  </div>
                </div>

                {/* Hobbies & Personal Interests */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 border-b border-slate-800 pb-1 flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5" />
                    Hobbies & Interests
                  </h4>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                      • Henna Designs (Mehndi)
                    </span>
                    <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                      • Drawing & Sketching
                    </span>
                    <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                      • Creative Writing
                    </span>
                    <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                      • Traveling
                    </span>
                  </div>
                </div>

              </div>

              {/* Right Column: Skills & Software Meters */}
              <div className="md:col-span-5 space-y-6">
                
                {/* Core Design Skills */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 border-b border-slate-800 pb-1">
                    Design Skills
                  </h4>
                  <div className="space-y-2 text-xs">
                    {[
                      { name: 'Graphic Design', val: 95 },
                      { name: 'Digital Art', val: 88 },
                      { name: 'Drawing', val: 85 },
                      { name: 'Animation', val: 80 },
                      { name: 'Video Editing', val: 78 }
                    ].map((s) => (
                      <div key={s.name}>
                        <div className="flex justify-between mb-1 text-[11px] font-medium text-slate-300">
                          <span>{s.name}</span>
                          <span className="font-mono text-amber-400">{s.val}%</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                          <div
                            className="h-full bg-amber-400 rounded-full"
                            style={{ width: `${s.val}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Software Suite */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 border-b border-slate-800 pb-1 flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5" />
                    Software Tools
                  </h4>
                  <div className="space-y-2 text-xs">
                    {[
                      { name: 'Adobe Photoshop', val: 94 },
                      { name: 'Adobe Illustrator', val: 92 },
                      { name: 'Adobe Animate CC', val: 85 },
                      { name: 'Adobe Premiere Pro', val: 80 },
                      { name: 'Adobe After Effects', val: 76 },
                      { name: 'Autodesk Maya', val: 70 }
                    ].map((sw) => (
                      <div key={sw.name}>
                        <div className="flex justify-between mb-1 text-[11px] font-medium text-slate-300">
                          <span>{sw.name}</span>
                          <span className="font-mono text-violet-400">{sw.val}%</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                          <div
                            className="h-full bg-violet-400 rounded-full"
                            style={{ width: `${sw.val}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Permanent Address Info */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1 text-xs">
                  <p className="font-bold text-slate-200">Residential Address</p>
                  <p className="text-slate-400 leading-relaxed text-[11px]">
                    No.2/120 Narasimma varman Street,<br />
                    Singaperumal Koil, Chengalpattu District - 603204,<br />
                    Tamil Nadu, India
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
