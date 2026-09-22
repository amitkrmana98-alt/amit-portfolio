import React from 'react';
import { Music, Mic, Activity, BookOpen } from 'lucide-react';

export default function BeyondWork() {
  const lifestyleCards = [
    {
      title: 'Playing Guitar',
      subtitle: 'My creative escape.',
      icon: Music,
      gradient: 'from-blue-600/20 to-indigo-900/40',
      badge: '🎸 Music',
    },
    {
      title: 'Singing',
      subtitle: 'A way to express.',
      icon: Mic,
      gradient: 'from-cyan-600/20 to-blue-900/40',
      badge: '🎤 Creative',
    },
    {
      title: 'Fitness',
      subtitle: 'Stronger every day.',
      icon: Activity,
      gradient: 'from-emerald-600/20 to-teal-900/40',
      badge: '💪 Discipline',
    },
    {
      title: 'Continuous Learning',
      subtitle: 'Always curious.',
      icon: BookOpen,
      gradient: 'from-sky-600/20 to-blue-900/40',
      badge: '📚 Growth',
    },
  ];

  return (
    <section className="py-20 bg-navy-950 text-white relative border-b border-navy-800/60 overflow-hidden">
      {/* Subtle Guitar Visual Subtle BG Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold text-electric-400 uppercase tracking-widest mb-2">
            Personal Passions
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif mb-3">
            Beyond Work
          </h2>
          <p className="text-base text-electric-300 font-medium font-serif italic">
            Music keeps me balanced.
          </p>
        </div>

        {/* 4 Lifestyle Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {lifestyleCards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-gradient-to-b ${card.gradient} bg-navy-900/90 border border-navy-800 hover:border-electric-400/50 transition-all duration-300 shadow-xl group flex flex-col justify-between hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-2.5 py-1 rounded-md bg-navy-950/80 text-xs font-semibold text-slate-300 border border-navy-800">
                      {card.badge}
                    </span>
                    <IconComp className="w-6 h-6 text-electric-400 group-hover:text-cyan-300 transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-electric-300 transition-colors font-serif">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-300 font-medium">
                    {card.subtitle}
                  </p>
                </div>

                <div className="mt-8 pt-3 border-t border-white/10 text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                  Mindset & Balance
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}