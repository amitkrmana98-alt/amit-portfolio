import React, { useState } from 'react';
import {
  Calendar,
  Building2,
  ArrowRight,
  CheckCircle2,
  Award,
  Globe,
  MapPin,
  TrendingUp,
  Users,
  ChevronDown,
  ChevronUp,
  Zap,
  ShieldCheck,
  FileText
} from 'lucide-react';

export default function Experience({ onOpenFullExperience }) {
  const [expandedIndex, setExpandedIndex] = useState(0); // First NAB role expanded by default

  const timelineItems = [
    {
      company: 'National Australia Bank (NAB)',
      role: 'Assistant Manager / Analyst II',
      dates: 'Jul 2025 – Present',
      location: 'Gurugram, India',
      globalHubs: 'London, Paris, New York',
      isCurrent: true,
      isProgressionTop: true,
      badge: 'Current Role',
      summary:
        'Leads end-to-end loan fulfillment activities across Agency, Bilateral and Syndicated deals, including amendments, deal closings, reallocations and joinders, ensuring accuracy and regulatory compliance.',
      responsibilities: [
        'Manages a diverse portfolio of Agency, Bilateral and Participant deals.',
        'Coordinates with global stakeholders across London, Paris and New York.',
        'Executes Swift payments, day loans, amendments and deal closings.',
        'Owns Risk and Regulatory reporting for the Syndications portfolio.',
        'Partners with onshore teams on project implementation, process improvement and operational migration.',
        'Acts as a key liaison between onshore and offshore teams.',
        'Supports complex syndicated transactions and operational alignment.'
      ],
      highlights: ['Global Operations Liaison', 'Risk & Regulatory Owner', 'Complex Deal Closings']
    },
    {
      company: 'National Australia Bank (NAB)',
      role: 'Team Lead / Analyst I',
      dates: 'Jun 2023 – Jul 2025',
      location: 'Gurugram, India',
      isProgressionBase: true,
      badge: 'Promotion Path',
      summary:
        'Led the transition of the Syndicated Loans project from London to India, managing and training 7 analysts while resolving 500+ reconciliation breaks within two months.',
      responsibilities: [
        'Resolved 500+ reconciliation breaks within the first two months.',
        'Led the transition of the Syndicated Loans project from London to India.',
        'Coordinated a multi-phase process migration with zero business disruption.',
        'Built and implemented Risk & Compliance reporting structures.',
        'Managed and trained a team of 7 analysts.',
        'Took on acting-manager responsibilities during leadership absences.',
        'Resolved client and stakeholder escalations and earned approver access within six months.',
        'Received Star Performer and Spot Awards.',
        'Developed expertise across LoanIQ, Intellimatch, GSS, GMM, ClearPar, Datanet and Syntrak.',
        'Worked across Credit Agreements, loan reallocations/refinancing and amendment/upfront fee processing.'
      ],
      highlights: ['500+ Breaks Resolved', '7 Analysts Managed', 'Process Migration Leader', 'Star Performer Award']
    },
    {
      company: 'Bank of America',
      role: 'Team Developer',
      dates: 'Jan 2022 – Mar 2023',
      location: 'India',
      badge: 'Commercial Lending',
      summary:
        'Managed 350+ syndicated loan deals as a Participation Bank, serving as Subject Matter Expert leading a team of 4.',
      responsibilities: [
        'Managed 350+ syndicated loan deals as a Participation Bank.',
        'Processed rollovers, conversions, paydowns, advances and fee payments.',
        'Conducted multi-currency payment reconciliation and resolved debit/credit discrepancies.',
        'Processed Deal Change, Pricing Change and Loan Change transactions.',
        'Corrected loan balances and updated pro-rata shares.',
        'Used LoanIQ, GIN and internal associate tools while maintaining partner bank communication.',
        'Trained and onboarded new team members and served as SME leading a team of 4.',
        'Managed escalations, exceptions and team performance metrics.'
      ],
      highlights: ['350+ Deals Managed', '4 Team Members Led (SME)', 'Multi-currency Reconciliation']
    },
    {
      company: 'eClerx Services Ltd.',
      role: 'Financial Analyst',
      dates: 'Oct 2020 – Jan 2022',
      location: 'India',
      badge: 'Agency Servicing',
      summary:
        'Delivered Agency Servicing support as an Agent Bank within the Loan Syndication department across LoanIQ, ClearPar, and DebtDomain.',
      responsibilities: [
        'Delivered Agency Servicing support as an Agent Bank within the Loan Syndication department.',
        'Processed syndicated loan transactions using LoanIQ, ClearPar, SafeCash, Safe GUI, DebtDomain and Intralinks.',
        'Processed repricing/rollovers, paydowns, borrowings, admin fees, interest payments and PIK transactions.',
        'Resolved position discrepancies, payment discrepancies and missing funds.',
        'Managed notice/datasite requests and processed interest and rate change notices.',
        'Maintained active communication with onshore stakeholders.'
      ],
      highlights: ['Agent Bank Servicing', 'LoanIQ & ClearPar Ops', 'Discrepancy Resolution']
    },
    {
      company: 'Centre For Monitoring Indian Economy (CMIE)',
      role: 'Business Relationship Manager',
      dates: 'Jan 2020 – Oct 2020',
      location: 'Maharashtra & Goa, India',
      badge: 'Client Management',
      summary:
        'Managed the Maharashtra and Goa B2B region, delivering analytical tool training across Banking, Investments and Transfer Pricing sectors.',
      responsibilities: [
        'Managed the Maharashtra and Goa B2B region.',
        'Delivered analytical tool training to clients across Banking, Investments and Transfer Pricing sectors.',
        'Delivered tailored client training and strategic business recommendations.',
        'Achieved a documented 20% increase in client efficiency.',
        'Oversaw backend service operations and managed client accounts, payments and receipts.'
      ],
      highlights: ['20% Client Efficiency Boost', 'B2B Regional Operations', 'Client Advisory']
    },
    {
      company: 'HDFC Bank',
      role: 'Intern, KYC Verification',
      dates: '2020 (3 Months)',
      location: 'India',
      isEarlyCareer: true,
      badge: 'Early Career',
      summary:
        'Supported savings/current account opening and loan product verifications while streamlining document validation.',
      responsibilities: [
        'Worked on KYC documentation and verification for account openings and loan products.',
        'Supported personal/business loans, two-wheeler loans, credit cards and auto loans.',
        'Streamlined document verification, reducing account opening and loan processing time by 20%.',
        'Implemented enhanced verification procedures, reducing fraudulent applications by 15%.'
      ],
      highlights: ['20% Faster Processing', '15% Fraud Reduction', 'KYC Documentation']
    }
  ];

  const careerHighlights = [
    { metric: '500+', label: 'Reconciliation breaks resolved' },
    { metric: '350+', label: 'Syndicated loan deals managed' },
    { metric: '7', label: 'Analysts managed & trained' },
    { metric: '4', label: 'Team members led as SME at BofA' },
    { metric: '6 Mos', label: 'Time to achieve approver access' },
    { metric: '20%', label: 'Client efficiency improvement' },
    { metric: '20%', label: 'KYC processing time reduction' },
    { metric: '15%', label: 'Fraudulent applications reduction' }
  ];

  const qualitativeBadges = [
    'Star Performer Award',
    'Spot Award',
    'Syndicated Loans Process Migration',
    'Risk & Compliance Reporting',
    'Global Stakeholder Management'
  ];

  return (
    <section id="experience" className="py-20 bg-navy-950 text-white relative border-b border-navy-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-electric-500/10 text-electric-400 border border-electric-500/20 text-xs font-semibold uppercase tracking-widest mb-3">
              Verified Career Progression
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif text-white">
              6+ Years
            </h2>
            <p className="text-lg text-slate-300 font-medium mt-1 max-w-2xl">
              A progressive career across banking operations, loan syndication, agency servicing, commercial lending, client management and financial operations.
            </p>
          </div>

          <button
            onClick={onOpenFullExperience}
            className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-electric-500 hover:bg-electric-400 text-white font-semibold text-sm tracking-wide transition-all shadow-md hover:shadow-electric-500/20 flex items-center gap-2 group shrink-0"
          >
            View Complete Detailed Timeline
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Career Highlights Metric Grid */}
        <div className="mb-16 bg-navy-900/80 rounded-2xl border border-navy-800 p-6 sm:p-8 shadow-xl">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-electric-400" />
            <h3 className="text-lg font-bold font-serif text-white tracking-wide">Verified Career Highlights</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {careerHighlights.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-navy-950 border border-navy-800/90 text-center hover:border-electric-500/40 transition-colors">
                <p className="text-2xl sm:text-3xl font-extrabold text-electric-400 font-sans tracking-tight">{item.metric}</p>
                <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-navy-800/80">
            <span className="text-xs text-slate-400 font-medium uppercase tracking-wider mr-2">Key Recognition:</span>
            {qualitativeBadges.map((badge, idx) => (
              <span key={idx} className="px-3 py-1 rounded-full text-xs font-medium bg-navy-800/60 text-slate-200 border border-navy-700/60 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-electric-400 shrink-0" />
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Timeline List */}
        <div className="space-y-6 relative">
          {timelineItems.map((item, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  item.isCurrent
                    ? 'bg-navy-900/90 border-electric-500/40 shadow-lg shadow-electric-500/5'
                    : 'bg-navy-900/50 border-navy-800/80 hover:border-navy-700'
                }`}
              >
                {/* Item Header / Accordion Toggle */}
                <div
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="p-6 sm:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-navy-800 text-electric-400 text-xs font-semibold border border-navy-700">
                        {item.badge}
                      </span>
                      {item.isCurrent && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Current Role
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
                      <h3 className="text-xl sm:text-2xl font-bold font-serif text-white group-hover:text-electric-400 transition-colors">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-2 text-slate-300 text-sm font-mono shrink-0">
                        <Calendar className="w-4 h-4 text-electric-400" />
                        <span>{item.dates}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-300">
                      <div className="flex items-center gap-1.5 font-medium text-slate-200">
                        <Building2 className="w-4 h-4 text-slate-400" />
                        <span>{item.company}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{item.location}</span>
                      </div>
                      {item.globalHubs && (
                        <div className="flex items-center gap-1.5 text-slate-400">
                          <Globe className="w-3.5 h-3.5 text-electric-400" />
                          <span>Hubs: {item.globalHubs}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-navy-800">
                    <div className="text-xs text-electric-400 font-medium md:hidden">
                      {isExpanded ? 'Hide details' : 'Show details'}
                    </div>
                    <div className="p-2 rounded-xl bg-navy-800/80 text-slate-300 hover:text-white transition-colors">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2 border-t border-navy-800/60 space-y-6">
                    <p className="text-slate-300 leading-relaxed font-normal text-sm sm:text-base bg-navy-950/60 p-4 rounded-xl border border-navy-800/50">
                      {item.summary}
                    </p>

                    <div>
                      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-electric-400" />
                        Key Responsibilities & Scope
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {item.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2.5 text-sm text-slate-300 bg-navy-950/40 p-3 rounded-lg border border-navy-800/40">
                            <CheckCircle2 className="w-4 h-4 text-electric-400 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-electric-400" />
                        Core Highlights
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((hl, hIdx) => (
                          <span
                            key={hIdx}
                            className="px-3 py-1 rounded-lg text-xs font-medium bg-electric-500/10 text-electric-300 border border-electric-500/20"
                          >
                            {hl}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenFullExperience}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-900 hover:bg-navy-800 border border-navy-700 hover:border-electric-500/50 text-slate-200 hover:text-white font-medium text-sm transition-all shadow-lg group"
          >
            <FileText className="w-4 h-4 text-electric-400" />
            <span>View Full Career History & Comprehensive Portfolio</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
