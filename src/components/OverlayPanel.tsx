import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe, Share2, Mail, Code } from 'lucide-react';
import { portfolioData } from '../data';
import { PromptShowcase } from './PromptShowcase';

interface OverlayPanelProps {
  activeSection: string | null;
  onClose: () => void;
}

export const OverlayPanel = ({ activeSection, onClose }: OverlayPanelProps) => {
  if (!activeSection) return null;

  const renderContent = () => {
    switch (activeSection) {
      case 'Projects':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-accent border-b border-primary/30 pb-2 flex items-center gap-2">
              <Code className="text-secondary" /> Project & Prompt Showcase
            </h2>
            <p className="text-accent opacity-80">A demonstration of traditional engineering paired with prompt engineering capabilities.</p>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-primary mb-4">Prompt Engineering Case Studies</h3>
              {portfolioData.prompts.map(prompt => (
                <PromptShowcase key={prompt.id} promptData={prompt} />
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-primary mb-4">Software Engineering Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {portfolioData.projects.map(proj => (
                  <div key={proj.id} className="glass p-5 rounded-xl hover:border-secondary transition-colors">
                    <h4 className="text-lg font-bold text-accent">{proj.title}</h4>
                    <p className="text-xs text-secondary mb-2">{proj.stack}</p>
                    <p className="text-sm text-accent opacity-80 mb-3">{proj.features}</p>
                    <div className="text-xs text-accent opacity-60 border-t border-[var(--color-border)] pt-2">
                      <span className="text-primary font-semibold">Learned:</span> {proj.learned}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'Skills':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-accent border-b border-primary/30 pb-2">Knowledge Base</h2>

            {Object.entries(portfolioData.skills).map(([category, skills]) => (
              <div key={category} className="mb-4">
                <h3 className="text-lg font-semibold text-secondary uppercase tracking-wider mb-2">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-primary/20 border border-primary/40 rounded-full text-sm text-accent">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      case 'Achievements':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-accent border-b border-primary/30 pb-2">Milestones & Achievements</h2>
            <ul className="space-y-4">
              {portfolioData.achievements.map((ach, idx) => (
                <li key={idx} className="flex items-start gap-4 p-4 glass rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center text-secondary shrink-0">🏆</div>
                  <p className="text-accent opacity-90">{ach}</p>
                </li>
              ))}
            </ul>
          </div>
        );
      case 'About Me':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-accent border-b border-primary/30 pb-2">About Me</h2>
            <div className="glass p-6 rounded-xl flex flex-col md:flex-row gap-6 items-start">
              <div className="shrink-0 flex items-center justify-center w-full md:w-auto">
                <img src="/me.jpeg" alt="Abhay Tiwari" className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-2xl border-4 border-primary/30 shadow-[0_0_20px_rgba(107,33,168,0.4)]" />
              </div>
              <div>
                <h3 className="text-xl text-primary font-semibold mb-2">My Objective</h3>
                <p className="text-accent opacity-90 mb-6">{portfolioData.personal.objective}</p>

                <h3 className="text-xl text-primary font-semibold mb-2">Passions & Hobbies</h3>
                <ul className="list-disc pl-5 text-accent opacity-90 space-y-2">
                  {portfolioData.passionHobbies.map((hobby, i) => (
                    <li key={i}>{hobby}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      case 'Contact':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-accent border-b border-primary/30 pb-2">Connect</h2>
            <div className="flex flex-col gap-4">
              <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center gap-4 p-4 glass rounded-lg hover:border-secondary transition-colors cursor-pointer">
                <Mail className="text-primary" />
                <span className="text-accent text-lg">{portfolioData.contact.email}</span>
              </a>
              <a href={portfolioData.contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 glass rounded-lg hover:border-secondary transition-colors cursor-pointer">
                <Share2 className="text-primary" />
                <span className="text-accent text-lg">LinkedIn Profile</span>
              </a>
              <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 glass rounded-lg hover:border-secondary transition-colors cursor-pointer">
                <Globe className="text-primary" />
                <span className="text-accent text-lg">GitHub Repository</span>
              </a>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed inset-0 z-30 flex items-center justify-center p-4 md:p-10 pointer-events-none"
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto" onClick={onClose} />

        <div className="glass w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl relative pointer-events-auto p-6 md:p-10 z-40">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-[var(--color-border)] hover:bg-primary/20 rounded-full transition-colors text-accent"
          >
            <X size={24} />
          </button>

          {renderContent()}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
