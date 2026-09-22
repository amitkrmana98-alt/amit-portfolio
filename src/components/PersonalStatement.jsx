import React from 'react';
import { Quote } from 'lucide-react';

export default function PersonalStatement() {
  return (
    <section className="py-16 bg-navy-900 border-b border-navy-800/80 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-electric-500/10 text-electric-400 mb-6 border border-electric-500/20 shadow-inner">
          <Quote className="w-6 h-6" />
        </div>
        
        <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-serif tracking-tight leading-tight mb-4">
          “Continuous learning is a compounding advantage.”
        </blockquote>
        
        <p className="text-xs font-bold uppercase tracking-widest text-electric-400">
          — Amit Manna
        </p>
      </div>
    </section>
  );
}