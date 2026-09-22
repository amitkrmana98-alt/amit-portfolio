import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.67-1.622-.918-2.213-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.063 2.876 1.21 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.11 1.519 5.84L0 24l6.337-1.503A11.937 11.937 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.802 0-3.52-.464-5.027-1.277l-.36-.194-3.754.891.908-3.662-.213-.362A9.948 9.948 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

export default function ContactModal({ isOpen, onClose, showToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const whatsappNumber = '919876543210';

  const sendViaWhatsApp = (e) => {
    e.preventDefault();
    const formattedText = `Hello Amit,\n\nName: ${formData.name || 'Not provided'}\nEmail: ${formData.email || 'Not provided'}\nSubject: ${formData.subject || 'General Inquiry'}\n\nMessage:\n${formData.message || ''}`;
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedText)}`;
    
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    
    setSubmitted(true);
    if (showToast) showToast('Opening WhatsApp to send your message...');
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      onClose();
    }, 2000);
  };

  const handleDirectWhatsApp = () => {
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Amit, I would like to connect with you!")}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    if (showToast) showToast('Redirecting to WhatsApp...');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-navy-900 border border-navy-700/80 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-white">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-navy-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">WhatsApp & Direct Message</span>
          <h3 className="text-2xl font-bold font-serif text-white mt-1">Connect with Amit Manna</h3>
          <p className="text-xs text-slate-400 mt-1">
            Send a message directly via WhatsApp for executive opportunities, consulting, or fintech initiatives.
          </p>
        </div>

        {/* Quick WhatsApp Banner */}
        <div className="mb-5 p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <WhatsAppIcon className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div className="text-xs">
              <p className="font-semibold text-emerald-200">Prefer instant chat?</p>
              <p className="text-slate-300 text-[11px]">Start a conversation immediately on WhatsApp.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleDirectWhatsApp}
            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold whitespace-nowrap transition-colors flex items-center gap-1 shadow-sm"
          >
            Chat Now
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center justify-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 animate-bounce" />
            <h4 className="text-lg font-bold text-white">Redirecting to WhatsApp!</h4>
            <p className="text-xs text-slate-300">Your message details have been formatted for WhatsApp.</p>
          </div>
        ) : (
          <form onSubmit={sendViaWhatsApp} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">Your Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Sarah Jenkins"
                className="w-full px-4 py-2.5 rounded-lg bg-navy-950 border border-navy-700/80 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="sarah@institution.com"
                className="w-full px-4 py-2.5 rounded-lg bg-navy-950 border border-navy-700/80 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">Subject</label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Opportunity / Collaboration Discussion"
                className="w-full px-4 py-2.5 rounded-lg bg-navy-950 border border-navy-700/80 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">Message</label>
              <textarea
                rows="3"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Please outline details or query..."
                className="w-full px-4 py-2.5 rounded-lg bg-navy-950 border border-navy-700/80 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-lg flex items-center justify-center gap-2 mt-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Send Message via WhatsApp
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
