import React from 'react';
import { X, Building2, Calendar, CheckCircle2 } from 'lucide-react';

export default function ExperienceModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const fullHistory = [
    {
      company: 'National Australia Bank (NAB)',
      role: 'Subject Matter Expert',
      period: '2023 – Present',
      summary: 'Serving as Subject Matter Expert driving complex loan syndication, agency facility oversight, and operational workflow enhancement.',
      focus: [
        'Loan Syndication',
        'Agency Services',
        'Process Improvement',
        'Operational Excellence',
        'Stakeholder Management'
      ]
    },
    {
      company: 'Bank of America',
      role: 'Analyst II – Assistant Manager',
      period: '2021 – 2023',
      summary: 'Managed credit process coordination, syndicated transaction administration, and commercial portfolio operations support.',
      focus: [
        'Loan Syndication',
        'Agency Services',
        'Commercial Lending',
        'Portfolio Operations'
      ]
    },
    {
      company: 'Eclerx — Morgan Stanley Project',
      role: 'Analyst',
      period: '2018 – 2021',
      summary: 'Executed institutional financial operations, high-volume reconciliations, client servicing, and operational workflow maintenance.',
      focus: [
        'Financial Operations',
        'Reconciliations',
        'Client Servicing',
        'Process Support'
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-navy-900 border border-navy-700 rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-white custom-scrollbar">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-navy-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-8 border-b border-navy-800 pb-4">
          <span className="text-xs font-bold text-electric-400 uppercase tracking-widest">Detailed Timeline</span>
          <h3 className="text-2xl font-bold font-serif text-white mt-1">6+ Years Full Professional Career</h3>
        </div>

        <div className="space-y-8">
          {fullHistory.map((item, idx) => (
            <div key={idx} className="bg-navy-950 p-6 rounded-xl border border-navy-800 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-electric-400 font-bold text-lg">
                  <Building2 className="w-5 h-5" />
                  <span>{item.company}</span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-navy-800 text-slate-300 rounded border border-navy-700 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-cyan-400" />
                  {item.period}
                </span>
              </div>

              <p className="text-sm font-semibold text-slate-200">{item.role}</p>
              <p className="text-xs text-slate-400 leading-relaxed">{item.summary}</p>

              <div className="pt-3 border-t border-navy-800/80">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Key Competencies Applied:</span>
                <div className="flex flex-wrap gap-2">
                  {item.focus.map((f, i) => (
                    <span key={i} className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded bg-navy-900 text-electric-300 border border-navy-700">
                      <CheckCircle2 className="w-3 h-3 text-electric-400" />
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}