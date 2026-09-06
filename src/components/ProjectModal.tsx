import React, { useEffect, useState } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Wrench, 
  Target, 
  UserCheck, 
  Palette, 
  Sparkles, 
  Type, 
  Check, 
  Maximize2, 
  Copy 
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  projects: Project[];
  onClose: () => void;
  onSelectProject: (p: Project) => void;
  onNotify: (msg: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  projects,
  onClose,
  onSelectProject,
  onNotify,
}) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, projects]);

  if (!project) return null;

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const handlePrev = () => onSelectProject(prevProject);
  const handleNext = () => onSelectProject(nextProject);

  const copyColor = (hex: string, name: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    onNotify(`Copied ${name} (${hex}) to clipboard`);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div
      id="project-case-study-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-5xl my-auto bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60 shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300">
              {project.categoryLabel}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              Case Study ({currentIndex + 1} of {projects.length})
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Prev / Next controls */}
            <button
              onClick={handlePrev}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Previous project (Arrow Left)"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Next project (Arrow Right)"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              id="close-project-modal-btn"
              className="p-1.5 ml-2 rounded-lg bg-slate-800 hover:bg-red-500/20 hover:text-red-300 text-slate-300 transition-colors"
              aria-label="Close modal (Escape)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-8 custom-scrollbar">
          
          {/* Main Visual Showcase Frame */}
          <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800 group shadow-inner">
            <div className={`relative flex items-center justify-center transition-all ${isZoomed ? 'scale-110 cursor-zoom-out' : 'cursor-zoom-in'}`} onClick={() => setIsZoomed(!isZoomed)}>
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="max-h-[500px] w-auto object-contain rounded-lg transition-transform duration-300"
              />
            </div>
            
            {/* Zoom hint overlay */}
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-900 border border-slate-700 text-xs text-slate-300 flex items-center gap-1.5 backdrop-blur-sm transition-all"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>{isZoomed ? 'Reset View' : 'Zoom In'}</span>
            </button>
          </div>

          {/* Title & Client Metadata */}
          <div className="border-b border-slate-800 pb-6">
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit',sans-serif]">
              {project.title}
            </h2>
            <p className="text-base text-amber-300/90 font-medium mt-1">
              {project.subtitle}
            </p>
            {project.client && (
              <p className="text-xs text-slate-400 mt-2">
                <span className="font-semibold text-slate-300">Client / Context:</span> {project.client} • {project.year}
              </p>
            )}
          </div>

          {/* Objective & Designer Role Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-sm font-bold">
                <Target className="w-4 h-4" />
                <span>Project Objective & Brief</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.objective}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-violet-400 text-sm font-bold">
                <UserCheck className="w-4 h-4" />
                <span>Designer Role & Execution</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.role}
              </p>
            </div>
          </div>

          {/* Detailed Overview */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Project Overview & Approach
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Key Deliverables & Design Highlights */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Key Design Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-800/40 border border-slate-800 text-xs sm:text-sm text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Software Badges */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-violet-400" />
              Software & Disciplines Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Color Palette & Typography Specifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
            {/* Palette */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Palette className="w-3.5 h-3.5 text-amber-400" />
                Color Palette (Click to Copy HEX)
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {project.colorPalette.map((color) => (
                  <button
                    key={color.hex}
                    onClick={() => copyColor(color.hex, color.name)}
                    className="group flex items-center gap-2.5 p-2 rounded-lg bg-slate-950 border border-slate-800 hover:border-amber-500/50 transition-all text-left"
                    title={`Click to copy ${color.hex}`}
                  >
                    <div
                      className="w-7 h-7 rounded-md border border-slate-700/50 shadow-inner shrink-0"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="overflow-hidden">
                      <p className="text-xs font-medium text-slate-200 truncate">{color.name}</p>
                      <p className="text-[11px] font-mono text-slate-400 group-hover:text-amber-400 flex items-center gap-1">
                        {color.hex}
                        {copiedHex === color.hex ? (
                          <Check className="w-3 h-3 text-emerald-400 inline" />
                        ) : (
                          <Copy className="w-2.5 h-2.5 opacity-60 inline" />
                        )}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Typography */}
            {project.typography && (
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Type className="w-3.5 h-3.5 text-violet-400" />
                  Typography Specifications
                </h3>
                <div className="space-y-2">
                  {project.typography.map((font, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300">
                      <span className="font-semibold text-slate-200">{font}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Modal Footer Navigation */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-950/80 shrink-0">
          <button
            onClick={handlePrev}
            className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-amber-400 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous: {prevProject.title}</span>
          </button>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-amber-400 transition-colors"
          >
            <span>Next: {nextProject.title}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
