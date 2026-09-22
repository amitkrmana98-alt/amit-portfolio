import React from 'react';
import { ArrowUp, Linkedin } from 'lucide-react';

export default function Footer({ onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const linkedinUrl = 'https://www.linkedin.com/in/amit-manna-672a85343/';

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-navy-950 text-slate-400 py-12 border-t border-navy-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-navy-800/60">
          
          {/* Monogram Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-electric-500 to-cyan-500 p-[1px]">
              <div className="w-full h-full bg-navy-950 rounded-[7px] flex items-center justify-center font-bold text-sm text-white">
                AM
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold text-base tracking-tight">Amit Manna</h3>
              <p className="text-xs text-slate-300 font-medium">Finance | Operations | Technology</p>
            </div>
          </div>

          {/* Navigation Links & LinkedIn */}
          <div className="flex items-center gap-6">
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg bg-navy-900 hover:bg-electric-500 text-slate-300 hover:text-white transition-colors border border-navy-800 shadow-sm flex items-center gap-1.5 text-xs font-semibold"
            >
              <Linkedin className="w-4 h-4 text-electric-400" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-navy-900 hover:bg-electric-500 text-slate-300 hover:text-white transition-colors border border-navy-800 shadow-sm flex items-center gap-2 text-xs font-semibold"
            aria-label="Scroll to Top"
          >
            Back to Top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Copyright Footer Line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Amit Manna. Executive Portfolio. All rights reserved.</p>
          <p className="font-serif italic text-slate-300">Turning Financial Complexity into Operational Clarity</p>
        </div>
      </div>
    </footer>
  );
}
