import React from 'react';
import { X, ArrowRight, ShieldCheck, Cpu, Building2 } from 'lucide-react';

export default function AboutModal({ isOpen, onClose, onOpenContact }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-navy-900 border border-navy-700 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative text-white max-h-[85vh] overflow-y-auto custom-scrollbar">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-navy-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-xs font-bold text-electric-400 uppercase tracking-widest">Detailed Story</span>
          <h3 className="text-2xl font-bold font-serif text-white mt-1">About Amit Manna</h3>
        </div>

        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p>
            I’m Amit Manna, a finance and operations professional with 6+ years of experience across the banking and financial services industry. I specialise in loan syndication, agency services, commercial lending and operational process improvement.
          </p>
          <p>
            I enjoy solving complex operational problems, building efficient processes and working with cross-functional teams to create meaningful impact. I’m also passionate about finance, technology, continuous learning and exploring new ways to improve how financial operations work.
          </p>
        </div>

        <div className="my-6 p-4 rounded-xl bg-navy-950 border border-navy-800 space-y-3">
          <h4 className="text-xs font-bold text-electric-400 uppercase tracking-wider">Operational Philosophy</h4>
          <ul className="text-xs text-slate-300 space-y-2 list-disc list-inside">
            <li>Combining analytical financial rigor with execution speed</li>
            <li>Eliminating friction points in institutional lending operations</li>
            <li>Fostering cross-functional alignment between credit, risk, and client teams</li>
          </ul>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-navy-800">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-navy-800 text-slate-300 text-xs font-semibold hover:bg-navy-700 transition-colors"
          >
            Close
          </button>
          <button
            onClick={onOpenContact}
            className="px-5 py-2 rounded-lg bg-electric-500 hover:bg-electric-400 text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
          >
            Let’s Connect
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}