import React, { useState } from 'react';
import { Project } from './types';
import { PROJECTS, CANDIDATE_INFO } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortfolioGrid } from './components/PortfolioGrid';
import { ProjectModal } from './components/ProjectModal';
import { AboutSkills } from './components/AboutSkills';
import { EducationTimeline } from './components/EducationTimeline';
import { ResumeModal } from './components/ResumeModal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 3500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CANDIDATE_INFO.email);
    showToast(`Copied ${CANDIDATE_INFO.email} to clipboard!`);
  };

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-amber-500/30 selection:text-amber-200">
      {/* Sticky Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={handleOpenContact}
          onCopyEmail={handleCopyEmail}
        />

        {/* Portfolio Gallery with Interactive Tabs */}
        <PortfolioGrid
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* About Candidate & Skills & Tools */}
        <AboutSkills />

        {/* Education & Academic Timeline */}
        <EducationTimeline />

        {/* Contact Bar & Form */}
        <ContactSection
          onNotify={showToast}
          onCopyEmail={handleCopyEmail}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={handleOpenContact}
        onCopyEmail={handleCopyEmail}
      />

      {/* Case Study / Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        projects={PROJECTS}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(proj) => setSelectedProject(proj)}
        onNotify={showToast}
      />

      {/* Interactive Official Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onNotify={showToast}
      />

      {/* Feedback Toast Notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
