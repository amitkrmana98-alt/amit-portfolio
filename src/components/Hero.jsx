import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, Download, CheckCircle2, Quote, FileText, ChevronLeft, ChevronRight, Pause, Play, Maximize2, X, Image as ImageIcon } from 'lucide-react';

export default function Hero({ onOpenContact, onOpenResume }) {
  const capabilities = [
    'Loan Syndication & Agency',
    'Process Optimization',
    'Commercial Lending',
    'Risk & Compliance Operations',
  ];

  const sidebarHighlights = [
    'Subject Matter Expert',
    'Global Banking Operations',
    'Cross-Functional Leadership',
    'Process Automation',
    'Continuous Learning',
  ];

  const heroImages = [
    {
      id: 1,
      src: `${import.meta.env.BASE_URL}uploads/hero1.png`,
      alt: 'Amit Manna - Executive Banking & Operations Leader',
      title: 'Amit Manna',
      subtitle: 'Subject Matter Expert • NAB',
      tag: 'Executive Leadership',
    },
    {
      id: 2,
      src: `${import.meta.env.BASE_URL}uploads/Hero 2.png`,
      alt: 'Amit Manna - Loan Syndication & Agency Operations',
      title: 'Amit Manna',
      subtitle: 'Syndication & Lending Specialist',
      tag: 'Strategic Operations',
    },
    {
      id: 3,
      src: `${import.meta.env.BASE_URL}uploads/hero3.png`,
      alt: 'Amit Manna - Finance & Operational Excellence',
      title: 'Amit Manna',
      subtitle: 'Finance & Strategy Consultant',
      tag: 'Continuous Innovation',
    },
  ];

  const resumePdfUrl = `${import.meta.env.BASE_URL}uploads/Amit_Manna_Resume_New.pdf`;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  }, [heroImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  }, [heroImages.length]);

  useEffect(() => {
    if (!isAutoPlaying || isHovered || isLightboxOpen) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlaying, isHovered, isLightboxOpen, nextSlide]);

  const currentImage = heroImages[currentIndex];

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-navy-950 overflow-hidden bg-grid-pattern border-b border-navy-800/60">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-electric-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 text-xs font-semibold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-electric-400 animate-pulse"></span>
              FINANCE • OPERATIONS • STRATEGY
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 font-serif">
              Turning Financial Complexity into{' '}
              <span className="text-electric-400 inline-block underline decoration-electric-500/40 underline-offset-8">
                Operational Clarity
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8 max-w-xl">
              6+ years of specialized experience in banking and financial services, focusing on loan syndication, agency services, commercial lending, and end-to-end operational process excellence.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-electric-500 hover:bg-electric-400 text-white font-semibold text-sm tracking-wide shadow-lg shadow-electric-500/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href={resumePdfUrl}
                download="Amit_Manna_Resume_New.pdf"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-navy-800/80 hover:bg-navy-700 text-slate-200 hover:text-white border border-navy-600/50 font-semibold text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 shadow-sm"
              >
                Download Resume
                <Download className="w-4 h-4 text-electric-400" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto px-4 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white border border-navy-700 font-semibold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                Preview Resume
              </button>
            </div>

            <div className="pt-6 border-t border-navy-800/80 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {capabilities.map((cap, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-300 bg-navy-900/60 p-2.5 rounded-lg border border-navy-800/50 hover:border-electric-500/30 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-electric-400 shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Photo Album / Carousel */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative my-6 lg:my-0">
            <div 
              className="relative w-full max-w-sm sm:max-w-md lg:max-w-none rounded-2xl p-3 bg-gradient-to-b from-navy-700/60 via-navy-800/80 to-navy-900 border border-navy-700/80 shadow-2xl group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Album Bar Header */}
              <div className="flex items-center justify-between mb-2.5 px-1.5 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-1.5 text-electric-400 font-semibold uppercase tracking-wider text-[11px]">
                  <ImageIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Photo Album</span>
                  <span className="text-slate-500 font-normal">•</span>
                  <span className="text-slate-300 font-mono text-[11px]">{currentIndex + 1}/{heroImages.length}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="p-1 rounded-md bg-navy-900/80 hover:bg-navy-700 text-slate-300 hover:text-white transition-colors border border-navy-700/60 flex items-center gap-1 text-[10px] uppercase font-semibold tracking-wider px-2"
                    title={isAutoPlaying ? "Pause slideshow" : "Start auto-slide"}
                  >
                    {isAutoPlaying ? (
                      <><Pause className="w-3 h-3 text-electric-400" /> Auto</>
                    ) : (
                      <><Play className="w-3 h-3 text-slate-400" /> Paused</>
                    )}
                  </button>

                  <button
                    onClick={() => setIsLightboxOpen(true)}
                    className="p-1.5 rounded-md bg-navy-900/80 hover:bg-navy-700 text-slate-300 hover:text-white transition-colors border border-navy-700/60"
                    title="Expand album view"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                  </button>
                </div>
              </div>

              {/* Main Image Frame */}
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-navy-950 shadow-inner group/image">
                {heroImages.map((img, idx) => (
                  <div
                    key={img.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      idx === currentIndex ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.03] transition-transform duration-700 group-hover/image:scale-[1.03] cursor-pointer"
                      onClick={() => setIsLightboxOpen(true)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-black/10 pointer-events-none"></div>
                  </div>
                ))}

                {/* Navigation Arrows Overlay */}
                <button
                  onClick={prevSlide}
                  aria-label="Previous photo"
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-navy-950/70 hover:bg-electric-500 text-white backdrop-blur-md border border-white/20 transition-all opacity-90 hover:scale-110 active:scale-95 shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next photo"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-navy-950/70 hover:bg-electric-500 text-white backdrop-blur-md border border-white/20 transition-all opacity-90 hover:scale-110 active:scale-95 shadow-lg"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Floating Tag */} walls
                <div className="absolute top-3 right-3 z-20 bg-navy-950/80 backdrop-blur-md border border-electric-500/30 text-electric-300 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                  {currentImage.tag}
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 z-20 bg-navy-950/85 backdrop-blur-md border border-white/10 p-3 rounded-lg flex items-center justify-between shadow-xl">
                  <div>
                    <p className="text-xs font-bold text-white tracking-wide">{currentImage.title}</p>
                    <p className="text-[10px] text-electric-400 font-medium">{currentImage.subtitle}</p>
                  </div>
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20 shrink-0" title="Available for leadership & strategy opportunities"></span>
                </div>
              </div>

              {/* Slide Thumbnail Row / Selectors */}
              <div className="mt-3 grid grid-cols-3 gap-2">
                {heroImages.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all duration-200 ${'focus:outline-none '} ${
                      idx === currentIndex 
                        ? 'border-electric-400 ring-2 ring-electric-500/40 opacity-100 scale-[1.02] shadow-md'
                        : 'border-navy-700/60 opacity-60 hover:opacity-100 hover:border-navy-500'
                    }`}
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover object-top" />
                    <div className={`absolute inset-0 ${idx === currentIndex ? 'bg-electric-500/10' : 'bg-navy-950/30'}`}></div>
                    <span className="absolute bottom-0.5 right-1 text-[9px] font-bold text-white drop-shadow font-mono">
                      0{idx + 1}
                    </span>
                  </button>
                ))}
              </div>

              {/* Handwritten Ethos Quote Banner */}
              <div className="absolute -bottom-5 -right-2 sm:-right-4 bg-navy-900/95 border border-electric-500/40 p-3.5 rounded-xl shadow-2xl backdrop-blur-md max-w-[210px] z-20 transform rotate-1 pointer-events-none hidden sm:block">
                <p className="font-handwriting text-electric-300 text-lg leading-tight font-semibold">
                  “Better Processes,<br />
                  <span className="text-white">Stronger Businesses”</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Ethos & Quote */}
          <div className="lg:col-span-2 flex flex-col justify-between h-full space-y-6 pt-4 lg:pt-0 lg:pl-2 border-t lg:border-t-0 lg:border-l border-navy-800/60">
            <div className="space-y-3.5">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest border-b border-navy-800/80 pb-2">
                Core Ethos
              </p>
              {sidebarHighlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2 group cursor-default">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric-500 group-hover:scale-150 transition-transform"></span>
                  <span className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-navy-900/70 p-4 rounded-xl border border-navy-800/80 text-left relative mt-auto">
              <Quote className="w-4 h-4 text-electric-400/60 mb-2" />
              <blockquote className="text-xs text-slate-300 font-serif italic leading-relaxed mb-2">
                “Finance moves the world.<br />
                Operations keep it moving.”
              </blockquote>
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                — Amit Manna
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Album Modal Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-navy-950/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-navy-900 text-slate-300 hover:text-white border border-navy-700 hover:bg-navy-800 transition-colors shadow-lg"
            aria-label="Close album modal"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center">
            <div className="relative max-h-[75vh] w-full flex items-center justify-center overflow-hidden rounded-2xl bg-navy-900 border border-navy-800 p-2 shadow-2xl">
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl"
              />

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-navy-950/80 hover:bg-electric-500 text-white border border-white/20 transition-all hover:scale-110 active:scale-95 shadow-xl"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-navy-950/80 hover:bg-electric-500 text-white border border-white/20 transition-all hover:scale-110 active:scale-95 shadow-xl"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Controls & Caption */}
            <div className="mt-4 w-full flex flex-col sm:flex-row items-center justify-between gap-3 px-2 text-center sm:text-left">
              <div>
                <h3 className="text-lg font-bold text-white font-serif">{currentImage.title}</h3>
                <p className="text-xs text-electric-400 font-medium">{currentImage.subtitle} • {currentImage.tag}</p>
              </div>

              {/* Thumbnails in modal */}
              <div className="flex items-center gap-2">
                {heroImages.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${'focus:outline-none '} ${
                      idx === currentIndex ? 'border-electric-400 ring-2 ring-electric-500/50 scale-105' : 'border-navy-700 opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover object-top" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
