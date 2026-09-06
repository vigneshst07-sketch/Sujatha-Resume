import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle, Sparkles, Award } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const EducationTimeline: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-widest bg-[#F59E0B] text-[#0F172A] font-bold rounded-sm">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#F8FAFC] tracking-tight font-['Outfit',sans-serif]">
            Formal Training &amp; Educational Trajectory<span className="text-[#F59E0B]">.</span>
          </h2>
          <p className="text-sm text-slate-400 font-medium leading-relaxed">
            Continuous progression in visual communication, foundational art theory, digital illustration, and 2D/3D animation pipeline disciplines.
          </p>
        </div>

        {/* Minimal Vertical Timeline */}
        <div className="relative max-w-3xl mx-auto">
          
          {/* Vertical central/left spine line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 -translate-x-1/2 w-[1px] bg-slate-800" />

          <div className="space-y-12">
            {EDUCATION_DATA.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={item.period} 
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node - Editorial Gold Point */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-6 h-6 rounded-full bg-[#0F172A] border border-slate-700">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] border-2 border-[#0F172A]" />
                  </div>

                  {/* Card Container (offset for left on mobile, staggered on desktop) */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0 ${isEven ? 'sm:text-left' : 'sm:text-left'}`}>
                    <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-[#F59E0B]/40 transition-all duration-300 shadow-xl group hover:-translate-y-1">
                      
                      {/* Top Header Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-mono font-bold text-[#F59E0B]">
                          {item.period}
                        </span>
                        <span className={`px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest rounded-sm ${
                          item.status === 'Current'
                            ? 'bg-[#F59E0B]/15 border border-[#F59E0B]/30 text-[#F59E0B]'
                            : 'bg-slate-800 text-slate-400'
                        }`}>
                          {item.status}
                        </span>
                      </div>

                      {/* Degree & College */}
                      <h3 className="text-lg font-black text-[#F8FAFC] group-hover:text-amber-400 transition-colors font-['Outfit',sans-serif]">
                        {item.degree}
                      </h3>

                      <p className="text-xs font-semibold text-slate-300 mt-1">
                        {item.institution}
                      </p>

                      <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-1 mb-4">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{item.location}</span>
                      </div>

                      {/* Curriculum Highlights */}
                      <div className="space-y-1.5 pt-3 border-t border-slate-800">
                        {item.highlights.map((point, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed font-normal">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] mt-1.5 shrink-0" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
