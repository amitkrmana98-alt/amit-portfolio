import React from 'react';
import { ArrowRight, ShieldCheck, Cpu, Briefcase } from 'lucide-react';

export default function About({ onOpenAboutModal }) {
  const portraitImgUrl = `${import.meta.env.BASE_URL}uploads/DCB6C47E-1749-4D43-B692-18880EAF2621_1_105_c.jpeg`;

  return (
    <section id="about" className="py-20 bg-slate-50 text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-600 text-xs font-semibold tracking-widest uppercase mb-4">
              Executive Profile
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-6 font-serif">
              About Me
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-5">
              I’m <strong className="font-semibold text-slate-900">Amit Manna</strong>, a finance and operations professional with over 6 years of hands-on experience across leading banking and financial institutions. My expertise centers on loan syndication, agency services, commercial lending, and operational process optimization.
            </p>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-8">
              Throughout my career at top tier organizations including National Australia Bank (NAB), Bank of America, and Morgan Stanley projects via eClerx, I have focused on untangling complex workflows, strengthening risk controls, and engineering efficient operational solutions that drive business scale.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-8">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <Briefcase className="w-5 h-5 text-electric-600 mb-2" />
                <h4 className="font-bold text-slate-900 text-sm mb-1">6+ Years</h4>
                <p className="text-xs text-slate-600">Institutional Banking Experience</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-electric-600 mb-2" />
                <h4 className="font-bold text-slate-900 text-sm mb-1">Syndicated Loans</h4>
                <p className="text-xs text-slate-600">Agency & Commercial Lending</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <Cpu className="w-5 h-5 text-electric-600 mb-2" />
                <h4 className="font-bold text-slate-900 text-sm mb-1">Process Excellence</h4>
                <p className="text-xs text-slate-600">Operational Tech & Workflows</p>
              </div>
            </div>

            <button
              onClick={onOpenAboutModal}
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-electric-600 text-white font-semibold text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2.5 group"
            >
              Know More About Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-electric-400 group-hover:text-white" />
            </button>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md rounded-2xl overflow-hidden p-3 bg-white border border-slate-200 shadow-xl group">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-900 shadow-inner">
                <img
                  src={portraitImgUrl}
                  alt="Amit Manna portrait"
                  className="w-full h-full object-cover object-center filter grayscale contrast-110 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 border border-white/20 rounded-xl pointer-events-none"></div>
              </div>
              
              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between px-1">
                <span className="text-xs font-semibold text-slate-600 uppercase tracking-widest">
                  Amit Manna • Editorial Portrait
                </span>
                <span className="text-xs font-medium text-electric-600 bg-electric-50 px-2 py-0.5 rounded">
                  Executive Profile
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
