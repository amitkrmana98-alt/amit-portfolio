import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import BeyondWork from './components/BeyondWork';
import PersonalStatement from './components/PersonalStatement';
import Contact from './components/Contact';
import Footer from './components/Footer';

import ContactModal from './components/ContactModal';
import ExperienceModal from './components/ExperienceModal';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import AboutModal from './components/AboutModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col relative font-sans">
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-electric-500 text-white px-5 py-3 rounded-lg shadow-2xl font-medium flex items-center gap-3 animate-bounce border border-white/20">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-white"></span>
          {toastMessage}
        </div>
      )}

      <Header 
        onOpenContact={() => setIsContactOpen(true)}
      />

      <main className="flex-grow">
        <Hero 
          onOpenContact={() => setIsContactOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <About 
          onOpenAboutModal={() => setIsAboutOpen(true)}
        />

        <Expertise />

        <Experience 
          onOpenFullExperience={() => setIsExperienceOpen(true)}
        />

        <Projects 
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <Skills />

        <BeyondWork />

        <PersonalStatement />

        <Contact 
          onOpenContact={() => setIsContactOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
          showToast={showToast}
        />
      </main>

      <Footer 
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Interactive Modals */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
        showToast={showToast}
      />

      <ExperienceModal 
        isOpen={isExperienceOpen} 
        onClose={() => setIsExperienceOpen(false)} 
      />

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
        onOpenContact={() => {
          setSelectedProject(null);
          setIsContactOpen(true);
        }}
      />

      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
        showToast={showToast}
      />

      <AboutModal 
        isOpen={isAboutOpen} 
        onClose={() => setIsAboutOpen(false)} 
        onOpenContact={() => {
          setIsAboutOpen(false);
          setIsContactOpen(true);
        }}
      />
    </div>
  );
}