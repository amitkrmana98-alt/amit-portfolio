import React from 'react';
import { X, ExternalLink, ShieldAlert, Cpu } from 'lucide-react';

export default function ProjectModal({ project, onClose, onOpenContact }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-navy-900 border border-navy-700 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative text-white">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-navy-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="inline-block px-2.5 py-1 rounded-md bg-electric-500/10 text-electric-400 text-xs font-bold uppercase tracking-wider border border-electric-500/20 mb-2">
            {project.category}
          </span>
          <h3 className="text-2xl font-bold font-serif text-white">{project.name}</h3>
        </div>

        <div className="p-4 rounded-xl bg-navy-950 border border-navy-800 mb-6">
          <div className="flex items-center gap-3 text-cyan-400 mb-3">
            <Cpu className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-wider">Fintech & Product Overview</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="text-xs px-2.5 py-1 rounded bg-navy-900 text-slate-300 border border-navy-700">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 pt-4 border-t border-navy-800">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-navy-800 hover:bg-navy-700 text-slate-300 text-xs font-semibold transition-colors"
          >
            Close
          </button>
          <button
            onClick={onOpenContact}
            className="px-5 py-2 rounded-lg bg-electric-500 hover:bg-electric-400 text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
          >
            Discuss Venture
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}