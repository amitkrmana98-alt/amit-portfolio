import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Header({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${' bg-navy-950/90 backdrop-blur-md border-b border-navy-800/80 shadow-lg py-3'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Left Brand */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-electric-500 to-cyan-500 p-[1px] shadow-sm group-hover:shadow-electric-500/20 transition-all">
              <div className="w-full h-full bg-navy-950 rounded-[7px] flex items-center justify-center font-bold text-sm tracking-wider text-white group-hover:text-electric-400 transition-colors">
                AM
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-base tracking-tight text-white group-hover:text-electric-300 transition-colors">
                Amit Manna
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">
                Finance • Operations
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-navy-800/60 rounded-md transition-all duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-electric-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenContact}
              className="px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider bg-electric-500/10 text-electric-400 border border-electric-500/30 hover:bg-electric-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-electric-500/25 active:scale-95 flex items-center gap-1.5"
            >
              Let’s Connect
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-navy-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-900 border-b border-navy-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-navy-800 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-navy-800/80">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 px-4 rounded-lg font-semibold text-center text-sm uppercase tracking-wider bg-electric-500 text-white hover:bg-electric-400 transition-colors shadow-md flex items-center justify-center gap-2"
            >
              Let’s Connect
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}