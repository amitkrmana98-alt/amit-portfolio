import React from 'react';
import { ExternalLink, Layers, ArrowRight, ShieldAlert, Cpu } from 'lucide-react';

export default function Projects({ onSelectProject }) {
  const projectList = [
    {
      id: 'treasatech',
      name: 'Treasatech Global',
      category: 'Fintech | Treasury Technology',
      description: 'A technology venture focused on solving complex treasury and financial operations challenges for global financial institutions.',
      visualType: 'treasury',
      tags: ['Treasury Tech', 'Financial Infrastructure', 'Global Banking', 'Process Automation'],
    },
    {
      id: 'richable',
      name: 'Richable',
      category: 'Fintech | Retail Investing',
      description: 'A fintech platform concept focused on helping retail investors access insights and make more informed market decisions.',
      visualType: 'investing',
      tags: ['Retail Investing', 'Market Insights', 'Fintech Concept', 'Product Design'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-navy-950 text-white relative border-b border-navy-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold text-electric-400 uppercase tracking-widest mb-2">
            Initiatives & Products
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif mb-4">
            Featured Projects
          </h2>
          <p className="text-base text-slate-400 font-normal">
            A selection of my work, initiatives and product-building interests.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projectList.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-b from-navy-900 to-navy-950 rounded-2xl border border-navy-800 hover:border-electric-500/50 transition-all duration-300 shadow-xl overflow-hidden group flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Visual Showcase Top Box */}
              <div className="relative p-6 sm:p-8 bg-navy-900/80 border-b border-navy-800 flex flex-col justify-center items-start min-h-[180px] overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-navy-800/40 group-hover:text-electric-500/10 transition-colors pointer-events-none">
                  <Cpu className="w-32 h-32 -mr-8 -mt-8" />
                </div>
                
                <span className="inline-block px-3 py-1 rounded-full bg-electric-500/10 text-electric-400 border border-electric-500/20 text-xs font-bold mb-3 uppercase tracking-wider">
                  {project.category}
                </span>
                
                <h3 className="text-2xl font-bold text-white group-hover:text-electric-300 transition-colors font-serif">
                  {project.name}
                </h3>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-[11px] font-medium px-2.5 py-1 rounded bg-navy-800 text-slate-300 border border-navy-700/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Action */}
                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full py-3 px-4 rounded-xl bg-navy-800 hover:bg-electric-500 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border border-navy-700 hover:border-electric-400 group-hover:shadow-lg"
                >
                  View Project
                  <ArrowRight className="w-4 h-4 text-electric-400 group-hover:text-white transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}