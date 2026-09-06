import React, { useState, useMemo } from 'react';
import { 
  Layers, 
  ExternalLink, 
  Eye, 
  Sparkles, 
  Palette, 
  Camera, 
  Brush, 
  BookOpen, 
  ArrowRight 
} from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface PortfolioGridProps {
  onSelectProject: (project: Project) => void;
}

type FilterTab = 'all' | 'branding-print' | 'event' | 'digital';

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<FilterTab>('all');

  const filterTabs = [
    { id: 'all' as FilterTab, label: 'All Works', count: PROJECTS.length },
    { 
      id: 'branding-print' as FilterTab, 
      label: 'Branding & Print', 
      count: PROJECTS.filter(p => p.category === 'branding' || p.category === 'print').length 
    },
    { 
      id: 'event' as FilterTab, 
      label: 'Event & Photo Layouts', 
      count: PROJECTS.filter(p => p.category === 'event').length 
    },
    { 
      id: 'digital' as FilterTab, 
      label: 'Digital Art & Henna', 
      count: PROJECTS.filter(p => p.category === 'digital').length 
    },
  ];

  const filteredProjects = useMemo(() => {
    if (activeTab === 'all') return PROJECTS;
    if (activeTab === 'branding-print') {
      return PROJECTS.filter((p) => p.category === 'branding' || p.category === 'print');
    }
    if (activeTab === 'event') {
      return PROJECTS.filter((p) => p.category === 'event');
    }
    if (activeTab === 'digital') {
      return PROJECTS.filter((p) => p.category === 'digital');
    }
    return PROJECTS;
  }, [activeTab]);

  return (
    <section id="portfolio" className="py-24 bg-slate-950 relative">
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-widest bg-[#F59E0B] text-[#0F172A] font-bold rounded-sm">
              Selected Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#F8FAFC] tracking-tight font-['Outfit',sans-serif]">
              Featured Editorial &amp; Commercial Projects<span className="text-[#F59E0B]">.</span>
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl font-medium leading-relaxed">
              Curated visual systems spanning brand identities, high-density print publications, ceremonial event layouts, and digital illustrations.
            </p>
          </div>

          {/* Project count indicator */}
          <div className="text-[11px] font-mono text-slate-400 px-3.5 py-1.5 rounded bg-slate-900 border border-slate-800 w-fit">
            INDEX: <strong className="text-[#F59E0B]">{filteredProjects.length}</strong> / {PROJECTS.length} RECORDS
          </div>
        </div>

        {/* Editorial Filter Tabs Bar */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-10 mb-12 border-b border-slate-800 pb-2">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-[11px] uppercase tracking-[0.2em] font-bold transition-all relative pb-2 -mb-[9px] flex items-center gap-2 ${
                  isActive
                    ? 'text-[#F59E0B] border-b-2 border-[#F59E0B]'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                  isActive ? 'bg-[#F59E0B]/20 text-[#F59E0B]' : 'bg-slate-800/80 text-slate-400'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Responsive Grid with Editorial Archetype Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const itemNumber = String(index + 1).padStart(2, '0');
            const isSayeesha = project.id === 'sayeesha-photography';
            const isInterior = project.id === 'interior-brochure';
            const isRoyalWedding = project.id === 'royal-wedding-album';
            const isHenna = project.id === 'henna-art' || project.id === 'digital-vector-art';

            // Distinct editorial card border & accent
            let cardAccentClass = 'border-slate-800 hover:border-[#F59E0B]/50';
            if (isRoyalWedding) {
              cardAccentClass = 'border-slate-800 border-l-4 border-l-[#F59E0B]';
            } else if (isInterior) {
              cardAccentClass = 'border-slate-800 hover:border-[#2D5A27]';
            } else if (isHenna) {
              cardAccentClass = 'border-[#8B5CF6]/30 hover:border-[#8B5CF6]';
            }

            return (
              <article
                key={project.id}
                className={`group relative flex flex-col rounded-2xl bg-slate-900 border ${cardAccentClass} transition-all duration-300 overflow-hidden shadow-xl hover:-translate-y-1.5 cursor-pointer`}
                onClick={() => onSelectProject(project)}
              >
                {/* Visual Header / Image Frame */}
                <div className="relative w-full aspect-[4/3] bg-slate-950 overflow-hidden border-b border-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient tint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />

                  {/* Editorial Tag Top Left */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-slate-900/90 border border-slate-700 text-slate-200">
                      {itemNumber} / {project.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Specific Decorative Accent: SAYEESHA Hex Matrix */}
                  {isSayeesha && (
                    <div className="absolute top-3.5 right-3.5 z-10 bg-[#F59E0B]/20 p-1.5 rounded border border-[#F59E0B]/40 backdrop-blur-sm">
                      <div className="w-5 h-5 grid grid-cols-3 gap-0.5 opacity-90">
                        <div className="bg-[#F59E0B]" />
                        <div className="bg-[#F59E0B]" />
                        <div className="bg-[#F59E0B]" />
                        <div className="bg-[#F59E0B]" />
                        <div className="bg-transparent" />
                        <div className="bg-[#F59E0B]" />
                        <div className="bg-[#F59E0B]" />
                        <div className="bg-[#F59E0B]" />
                        <div className="bg-[#F59E0B]" />
                      </div>
                    </div>
                  )}

                  {/* Specific Decorative Accent: Henna SVG Motif */}
                  {isHenna && (
                    <div className="absolute top-2 right-2 z-10 opacity-30 text-[#8B5CF6]">
                      <svg width="40" height="40" viewBox="0 0 100 100" className="stroke-[#8B5CF6] fill-none">
                        <path d="M50,10 C60,40 40,40 50,70 M30,30 Q50,0 70,30 Q100,50 70,70 Q50,100 30,70 Q0,50 30,30" strokeWidth="2"/>
                      </svg>
                    </div>
                  )}

                  {/* Specific Decorative Accent: Interior Architectural Stamp */}
                  {isInterior && (
                    <div className="absolute top-3.5 right-3.5 z-10 px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest bg-[#2D5A27]/80 text-emerald-100 rounded">
                      ARCH-2025
                    </div>
                  )}

                  {/* Quick Action Button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <button
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0F172A] font-black text-[11px] uppercase tracking-wider shadow-2xl transform scale-95 group-hover:scale-100 transition-all duration-200"
                      aria-label={`View ${project.title} details`}
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Case Study</span>
                    </button>
                  </div>
                </div>

                {/* Card Body - Editorial Typography */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                      <span className={isInterior ? 'text-[#2D5A27] font-bold' : isHenna ? 'text-[#8B5CF6] font-bold' : 'text-[#F59E0B] font-bold'}>
                        {itemNumber} / {project.categoryLabel}
                      </span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-xl font-black text-[#F8FAFC] group-hover:text-amber-400 transition-colors font-['Outfit',sans-serif] line-clamp-1">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed font-normal">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Software / Tools Tags & Swatches */}
                  <div className="space-y-3 pt-3 border-t border-slate-800">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.slice(0, 3).map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 text-[10px] font-medium bg-slate-950 text-slate-300 border border-slate-800 rounded"
                        >
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 3 && (
                        <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500">
                          +{project.tools.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Trigger Link with Color Palette */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#F59E0B] group-hover:text-amber-300 flex items-center gap-1">
                        Inspect Details
                        <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="flex items-center gap-1">
                        {project.colorPalette.slice(0, 3).map((c) => (
                          <div
                            key={c.hex}
                            className="w-2.5 h-2.5 rounded-full border border-slate-700"
                            style={{ backgroundColor: c.hex }}
                            title={c.name}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
