import React from 'react';
import { X, Download, Copy, FileText } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose, showToast }) {
  if (!isOpen) return null;

  const resumePdfUrl = `${import.meta.env.BASE_URL}uploads/Amit_Manna_Resume_New.pdf`;

  const summaryText = `AMIT MANNA
FINANCE | OPERATIONS | STRATEGY
Gurugram, Haryana, India

SUMMARY:
Finance and operations professional with 6+ years of experience in banking and financial services, specialising in loan syndication, agency services, commercial lending, and operational excellence.

EXPERIENCE:
• National Australia Bank (NAB) | Subject Matter Expert (2023 – Present)
• Bank of America | Analyst II – Assistant Manager (2021 – 2023)
• eClerx — Morgan Stanley Project | Analyst (2018 – 2021)

KEY COMPETENCIES:
Loan Syndication, Agency Services, Commercial Lending, Process Improvement, Project Management, Financial Analysis, Risk & Compliance.`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(summaryText);
    showToast('Resume summary copied to clipboard!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-navy-900 border border-navy-700 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative text-white">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-navy-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6 flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-electric-500/10 border border-electric-500/20 text-electric-400">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold text-electric-400 uppercase tracking-widest">Document Preview</span>
            <h3 className="text-xl font-bold font-serif text-white">Amit Manna — Executive Resume</h3>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-navy-950 border border-navy-800 font-mono text-xs text-slate-300 whitespace-pre-wrap leading-relaxed max-h-80 overflow-y-auto mb-6 custom-scrollbar">
          {summaryText}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-navy-800">
          <button
            onClick={handleCopyText}
            className="px-4 py-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-200 text-xs font-semibold flex items-center gap-2 border border-navy-700 transition-colors"
          >
            <Copy className="w-4 h-4 text-electric-400" />
            Copy Summary
          </button>

          <a
            href={resumePdfUrl}
            download="Amit_Manna_Resume_New.pdf"
            onClick={() => showToast('Downloading PDF resume...')}
            className="px-6 py-2.5 rounded-xl bg-electric-500 hover:bg-electric-400 text-white text-xs font-semibold flex items-center gap-2 shadow-lg transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Download Official Resume (PDF)
          </a>
        </div>

      </div>
    </div>
  );
}
