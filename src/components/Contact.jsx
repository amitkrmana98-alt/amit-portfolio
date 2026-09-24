import React from 'react';
import { Mail, Linkedin, MapPin, FileText, ArrowRight, Copy } from 'lucide-react';

const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.67-1.622-.918-2.213-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.063 2.876 1.21 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.11 1.519 5.84L0 24l6.337-1.503A11.937 11.937 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.802 0-3.52-.464-5.027-1.277l-.36-.194-3.754.891.908-3.662-.213-.362A9.948 9.948 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

export default function Contact({ onOpenContact, onOpenResume, showToast }) {
  const email = 'akrmanna95@gmail.com';
  const whatsappNumber = '918918528110';
  const whatsappDisplay = '+91 89185 28110';
  const whatsappDefaultMsg = "Hi Amit, I came across your portfolio and would like to connect!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappDefaultMsg)}`;
  
  const linkedinUrl = 'linkedin.com/in/amit-manna-672a85343';
  const fullLinkedinUrl = 'https://www.linkedin.com/in/amit-manna-672a85343/';
  const location = 'Gurugram, Haryana, India';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    showToast('Email address copied to clipboard!');
  };

  return (
    <section id="contact" className="py-20 bg-navy-950 text-white relative border-b border-navy-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif mb-4">
            Let’s Connect
          </h2>
          <p className="text-base text-slate-300">
            Always open to interesting opportunities, collaborations and meaningful conversations directly via WhatsApp or email.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          
          {/* WhatsApp Card */}
          <div className="bg-navy-900/90 p-6 rounded-2xl border border-emerald-500/30 hover:border-emerald-500/70 transition-all shadow-xl group flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl pointer-events-none"></div>
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-4 shadow-inner">
                <WhatsAppIcon className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="flex items-center gap-2 mb-1">
                <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider">WhatsApp</h4>
                <span className="px-1.5 py-0.5 text-[9px] font-bold bg-emerald-500/20 text-emerald-300 rounded uppercase">Direct</span>
              </div>
              <p className="text-sm font-semibold text-white font-mono break-all mb-4">
                {whatsappDisplay}
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-900/30 text-center"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-navy-900/90 p-6 rounded-2xl border border-navy-800 hover:border-electric-500/50 transition-all shadow-xl group flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-electric-500/10 text-electric-400 border border-electric-500/20 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-1">Email</h4>
              <p className="text-sm font-semibold text-white font-mono break-all mb-4">
                {email}
              </p>
            </div>
            <button
              onClick={handleCopyEmail}
              className="w-full py-2.5 px-3 rounded-lg bg-navy-800 hover:bg-electric-500 text-slate-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-navy-700"
            >
              <Copy className="w-3.5 h-3.5" />
              Copy Email
            </button>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-navy-900/90 p-6 rounded-2xl border border-navy-800 hover:border-electric-500/50 transition-all shadow-xl group flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-electric-500/10 text-electric-400 border border-electric-500/20 flex items-center justify-center mb-4">
                <Linkedin className="w-5 h-5" />
              </div>
              <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-1">LinkedIn</h4>
              <p className="text-sm font-semibold text-white font-mono break-all mb-4">
                {linkedinUrl}
              </p>
            </div>
            <a
              href={fullLinkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-lg bg-navy-800 hover:bg-electric-500 text-slate-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-navy-700 text-center"
            >
              Visit Profile
            </a>
          </div>

          {/* Resume / Location Card */}
          <div className="bg-navy-900/90 p-6 rounded-2xl border border-navy-800 hover:border-electric-500/50 transition-all shadow-xl group flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-1">Executive Resume</h4>
              <p className="text-sm font-semibold text-white mb-4">
                Amit Manna CV
              </p>
            </div>
            <button
              onClick={onOpenResume}
              className="w-full py-2.5 px-3 rounded-lg bg-electric-500/20 hover:bg-electric-500 text-electric-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors border border-electric-500/30"
            >
              View / Download
            </button>
          </div>

        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base tracking-wide shadow-xl shadow-emerald-900/30 transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center justify-center gap-3 group"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Send Message via WhatsApp
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-200 hover:text-white font-bold text-base tracking-wide border border-navy-700 transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
          >
            Compose Custom Message
          </button>
        </div>

      </div>
    </section>
  );
}
