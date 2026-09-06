import React from 'react';
import { 
  User, 
  Sparkles, 
  Palette, 
  Wrench, 
  Heart, 
  Feather, 
  BookOpen, 
  Compass, 
  CheckCircle2, 
  Film, 
  Video, 
  Box, 
  PenTool, 
  Image as ImageIcon 
} from 'lucide-react';
import { CANDIDATE_INFO, SKILLS_DATA, SOFTWARE_TOOLS, HOBBIES_DATA } from '../data/portfolioData';

const getToolIcon = (iconName: string) => {
  switch (iconName) {
    case 'PenTool':
      return <PenTool className="w-5 h-5 text-amber-400" />;
    case 'Film':
      return <Film className="w-5 h-5 text-amber-400" />;
    case 'Video':
      return <Video className="w-5 h-5 text-violet-400" />;
    case 'Sparkles':
      return <Sparkles className="w-5 h-5 text-violet-400" />;
    case 'Box':
      return <Box className="w-5 h-5 text-cyan-400" />;
    case 'Image':
    default:
      return <ImageIcon className="w-5 h-5 text-amber-400" />;
  }
};

const getHobbyIcon = (iconName: string) => {
  switch (iconName) {
    case 'Feather':
      return <Feather className="w-5 h-5 text-amber-400" />;
    case 'BookOpen':
      return <BookOpen className="w-5 h-5 text-emerald-400" />;
    case 'Compass':
      return <Compass className="w-5 h-5 text-cyan-400" />;
    case 'Palette':
    default:
      return <Palette className="w-5 h-5 text-violet-400" />;
  }
};

export const AboutSkills: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/60 border-t border-b border-slate-800/80 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Row 1: Candidate Narrative & About Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-widest bg-[#F59E0B] text-[#0F172A] font-bold rounded-sm">
              Biographical Profile
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-black text-[#F8FAFC] font-['Outfit',sans-serif] leading-tight tracking-tight">
              Purposeful Visual Design &amp; Digital Storytelling<span className="text-[#F59E0B]">.</span>
            </h2>

            <p className="text-sm text-slate-400 leading-relaxed font-normal">
              I am a creative and motivated graphic design fresher currently pursuing my <strong className="text-amber-400 font-semibold">B.Sc. in Animation at Chennai Animation College</strong>. 
              My creative journey is rooted in an obsessive eye for detail—whether engineering print-ready marketing brochures, balancing typography for brand identities, or hand-crafting intricate floral henna mandalas.
            </p>

            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-2 border-l-4 border-l-[#F59E0B]">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#F59E0B]">Design Manifesto</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                "Great design is neither pure decoration nor pure function—it is the deliberate harmony of clarity, emotional resonance, and meticulous craftsmanship."
              </p>
            </div>

            <div className="space-y-2.5 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>Specialized in both digital screen assets &amp; physical print pre-press layouts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0" />
                <span>Strong foundation in 2D animation timing and video editing pipelines</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Rapid learner eager to contribute to collaborative creative teams</span>
              </div>
            </div>
          </div>

          {/* Core Skills Progress Meters */}
          <div className="lg:col-span-7 space-y-6" id="skills">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#8B5CF6]">
                Design Competencies
              </span>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                Proficiency Index
              </span>
            </div>

            <div className="space-y-4">
              {SKILLS_DATA.map((skill) => (
                <div 
                  key={skill.name} 
                  className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-slate-200">{skill.name}</span>
                    <span className="text-xs font-mono font-bold text-[#F59E0B]">{skill.level}%</span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#F59E0B] to-[#8B5CF6] transition-all duration-700 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  <p className="text-[11px] text-slate-400 mt-2 font-normal leading-relaxed">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Row 2: Software Mastery Badges */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-widest bg-[#8B5CF6]/20 text-[#8B5CF6] border border-[#8B5CF6]/40 font-bold rounded-sm mb-2">
                Production Environment
              </span>
              <h3 className="text-2xl font-black text-[#F8FAFC] font-['Outfit',sans-serif]">
                Creative &amp; Technical Toolchain<span className="text-[#F59E0B]">.</span>
              </h3>
            </div>
            <p className="text-xs text-slate-400 max-w-sm font-normal">
              Applied proficiency across vector illustration, digital compositing, video editing, and 3D modeling pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SOFTWARE_TOOLS.map((tool) => (
              <div
                key={tool.name}
                className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/80 hover:border-amber-500/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getToolIcon(tool.iconName)}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-slate-900 border border-slate-800 text-amber-300">
                    {tool.experienceLevel}
                  </span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors font-['Outfit',sans-serif]">
                    {tool.name}
                  </h4>
                  <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                    {tool.category}
                  </p>

                  {/* Software Meter */}
                  <div className="pt-2">
                    <div className="flex justify-between text-[11px] mb-1 font-mono">
                      <span className="text-slate-400">Mastery</span>
                      <span className="text-amber-400 font-bold">{tool.percentage}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-amber-400 to-violet-400"
                        style={{ width: `${tool.percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Personal Interests & Creative Passions */}
        <div className="space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-rose-400 uppercase tracking-wider mb-2">
              <Heart className="w-3.5 h-3.5" />
              <span>Creative Identity</span>
            </div>
            <h3 className="text-2xl font-extrabold text-white font-['Outfit',sans-serif]">
              Personal Interests & Artistic Hobbies
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              Creative disciplines beyond commercial design that fuel imagination, patience, and compositional harmony.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HOBBIES_DATA.map((hobby) => (
              <div
                key={hobby.title}
                className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                      {getHobbyIcon(hobby.icon)}
                    </div>
                    <span className="text-[10px] font-semibold text-slate-400 px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800">
                      {hobby.tag}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-100 font-['Outfit',sans-serif]">
                    {hobby.title}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {hobby.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
