import React, { useState } from 'react';
import { Check, Cpu, Shield, BarChart3, Wrench } from 'lucide-react';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('All');

  const allSkills = [
    { name: 'Loan Syndication', category: 'Finance' },
    { name: 'Agency Services', category: 'Finance' },
    { name: 'Commercial Lending', category: 'Finance' },
    { name: 'Financial Analysis', category: 'Finance' },
    { name: 'Risk & Compliance', category: 'Finance' },
    { name: 'Portfolio Operations', category: 'Finance' },
    
    { name: 'Process Optimization', category: 'Operations' },
    { name: 'Project Management', category: 'Operations' },
    { name: 'Stakeholder Management', category: 'Operations' },
    { name: 'Operations Management', category: 'Operations' },
    { name: 'Workflow Streamlining', category: 'Operations' },
    { name: 'Cross-Functional Collaboration', category: 'Operations' },
    { name: 'Problem Solving', category: 'Operations' },

    { name: 'Advanced Excel', category: 'Tech & Tools' },
    { name: 'Data Analysis', category: 'Tech & Tools' },
    { name: 'Fintech Systems', category: 'Tech & Tools' },
    { name: 'Process Automation', category: 'Tech & Tools' },
    { name: 'Technology Integration', category: 'Tech & Tools' },
    { name: 'Reporting & Dashboards', category: 'Tech & Tools' },
  ];

  const filters = ['All', 'Finance', 'Operations', 'Tech & Tools'];

  const filteredSkills = activeFilter === 'All'
    ? allSkills
    : allSkills.filter(s => s.category === activeFilter);

  return (
    <section id="skills" className="py-20 bg-navy-900 text-white relative border-b border-navy-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold text-electric-400 uppercase tracking-widest mb-2">
            Core Competencies
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif mb-4">
            Skills & Domain Expertise
          </h2>
          <p className="text-sm text-slate-300">
            A breakdown of operational, financial, and technical capabilities refined over 6+ years in institutional financial services.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${ activeFilter === filter ? 'bg-electric-500 text-white shadow-md' : 'bg-navy-950/80 text-slate-300 hover:text-white border border-navy-800' }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="px-4 py-2.5 rounded-full bg-navy-950 border border-navy-700/80 hover:border-electric-400/80 text-slate-200 hover:text-white text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-electric-500/10 flex items-center gap-2 cursor-default group"
            >
              <span className="w-2 h-2 rounded-full bg-electric-400 group-hover:scale-125 transition-transform"></span>
              <span>{skill.name}</span>
              <span className="text-[10px] text-slate-500 font-mono ml-1 uppercase">[{skill.category}]</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
