import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Palette } from 'lucide-react';
import { CustomCursor } from './components/CustomCursor';
import { Scene } from './components/Scene';
import { OverlayPanel } from './components/OverlayPanel';
import { portfolioData } from './data';

const THEMES = ['dark', 'cyberpunk', 'light'];

function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [themeIndex, setThemeIndex] = useState(0);

  const currentTheme = THEMES[themeIndex];

  useEffect(() => {
    document.body.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  const toggleTheme = () => {
    setThemeIndex((prev) => (prev + 1) % THEMES.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden transition-colors duration-500">
      <CustomCursor />
      
      {/* Theme Button */}
      <button 
        onClick={toggleTheme}
        className="absolute top-8 right-8 z-50 p-4 rounded-full glass hover:scale-110 transition-transform flex items-center justify-center cursor-pointer pointer-events-auto"
        title="Toggle Theme"
        style={{ cursor: 'none' }}
      >
        <Palette className="text-primary" size={28} />
      </button>

      {/* Intro Header */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-8 left-0 w-full z-20 pointer-events-none text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-accent mb-2 tracking-tight">
          {portfolioData.personal.name}
        </h1>
        <p className="text-lg md:text-xl text-secondary uppercase tracking-widest font-semibold flex items-center justify-center gap-3">
          <span className="w-12 h-[1px] bg-secondary" />
          {portfolioData.personal.role}
          <span className="w-12 h-[1px] bg-secondary" />
        </p>
        <div className="mt-4 max-w-2xl mx-auto px-4">
           <p className="text-xs md:text-sm text-accent opacity-60 font-mono">
             "Select an object in the room to access my neural database."
           </p>
        </div>
      </motion.div>

      {/* 3D Scene Background */}
      <Scene theme={currentTheme} onItemClick={(section) => setActiveSection(section)} />
      
      {/* UI Overlays */}
      <OverlayPanel activeSection={activeSection} onClose={() => setActiveSection(null)} />
    </div>
  );
}

export default App;
