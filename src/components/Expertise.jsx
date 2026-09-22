import React from 'react';
import { Layers, ShieldCheck, LineChart, Workflow } from 'lucide-react';

export default function Expertise() {
  const expertiseCards = [
    {
      title: 'Loan Syndication',
      description: 'Transaction support, documentation, credit processes and lender coordination.',
      icon: Layers,
      tag: 'Syndicated Loans',
    },
    {
      title: 'Agency Services',
      description: 'Facility administration, compliance, reporting and stakeholder management.',
      icon: ShieldCheck,
      tag: 'Facility Admin',
    },
    {
      title: 'Commercial Lending',
      description: 'Credit analysis support, portfolio management and operational oversight.',
      icon: LineChart,
      tag: 'Portfolio Ops',
    },
    {
      title: 'Operations & Process Improvement',
      description: 'Streamlining processes, improving efficiency and driving operational excellence.',
      icon: Workflow,
      tag: 'Process Optimization',
    },
  ];

  return (
    <section className="py-20 bg-navy-950 text-white relative border-b border-navy-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold text-electric-400 uppercase tracking-widest mb-2">
            Core Competencies
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif mb-4">
            My Expertise
          </h2>
          <p className="text-base text-slate-400 font-normal">
            Areas where I work and create the most value.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseCards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <div
                key={idx}
                className="bg-gradient-to-b from-navy-900 to-navy-950 p-6 rounded-2xl border border-navy-800/80 hover:border-electric-500/50 transition-all duration-300 shadow-xl hover:shadow-electric-500/10 group flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-electric-500/10 border border-electric-500/20 flex items-center justify-center text-electric-400 mb-6 group-hover:bg-electric-500 group-hover:text-white transition-colors duration-300 shadow-inner">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <span className="inline-block px-2.5 py-1 text-[11px] font-semibold text-cyan-400 bg-cyan-500/10 rounded-md border border-cyan-500/20 mb-3">
                    {card.tag}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-electric-300 transition-colors">
                    {card.title}
                  </h3>
                  
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-navy-800/50 flex items-center justify-between text-xs text-slate-400 group-hover:text-slate-300">
                  <span>Domain Expertise</span>
                  <span className="text-electric-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}