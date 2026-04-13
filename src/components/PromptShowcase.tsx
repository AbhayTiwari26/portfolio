import { motion } from 'framer-motion';

interface PromptShowcaseProps {
  promptData: {
    title: string;
    problem: string;
    prompt: string;
    output: string;
    whyItWorks: string;
  };
}

export const PromptShowcase = ({ promptData }: PromptShowcaseProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass p-5 rounded-xl mb-6 shadow-lg relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
      
      <h3 className="text-xl font-bold text-accent mb-2">{promptData.title}</h3>
      
      <div className="mb-4">
        <span className="text-xs font-semibold text-secondary uppercase tracking-wider">The Problem</span>
        <p className="text-sm text-accent opacity-90 mt-1">{promptData.problem}</p>
      </div>

      <div className="border border-[var(--color-border)] rounded-lg p-3 mb-4 font-mono text-sm shadow-inner" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="text-xs text-primary mb-2 font-semibold">{"// PROMPT APPLIED"}</div>
        <p className="text-accent opacity-90">"{promptData.prompt}"</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <span className="text-xs font-semibold text-secondary uppercase tracking-wider">Output Result</span>
          <div className="font-mono text-sm text-accent opacity-90 mt-1 p-2 rounded shadow-inner border border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-bg)' }}>
            {promptData.output}
          </div>
        </div>
        <div>
          <span className="text-xs font-semibold text-secondary uppercase tracking-wider">Why it Works</span>
          <div className="font-mono text-sm text-accent opacity-90 mt-1 p-2 rounded shadow-inner" style={{ backgroundColor: 'var(--color-panel)' }}>
            {promptData.whyItWorks}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
