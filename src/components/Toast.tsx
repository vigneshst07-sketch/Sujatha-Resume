import React from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'info';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  if (!message) return null;

  return (
    <div
      id="portfolio-toast"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl backdrop-blur-md bg-slate-900/95 border border-amber-500/40 text-slate-100 animate-in fade-in slide-in-from-bottom-4 duration-300"
      role="alert"
    >
      {type === 'success' ? (
        <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
      ) : (
        <Info className="w-5 h-5 text-violet-400 shrink-0" />
      )}
      <p className="text-sm font-medium pr-2 text-slate-100">{message}</p>
      <button
        onClick={onClose}
        className="p-1 text-slate-400 hover:text-slate-100 rounded-lg hover:bg-slate-800 transition-colors"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
