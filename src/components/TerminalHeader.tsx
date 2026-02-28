import { useState, useEffect } from 'react';
import type { CVData } from '../data/cvData';

interface TerminalHeaderProps {
  personalInfo: CVData['personalInfo'];
}

export const TerminalHeader = ({ personalInfo }: TerminalHeaderProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = `${personalInfo.name}`;
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <div className="terminal-window mb-8">
      <div className="terminal-header">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-gray-500"></div>
          <div className="w-3 h-3 rounded-full bg-gray-400"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        </div>
        <div className="text-terminal-gray text-xs uppercase tracking-wider">profile</div>
        <div></div>
      </div>
      
      <div className="terminal-body">
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <div className="flex-shrink-0">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover object-top border-2"
              style={{ borderColor: 'var(--terminal-border)' }}
            />
          </div>

          <div className="space-y-4 flex-1">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-terminal-white font-mono tracking-tight">
                {displayedText}
                <span className="animate-pulse" style={{ color: 'var(--terminal-highlight)' }}>_</span>
              </div>
              <div className="mt-1 text-base" style={{ color: 'var(--terminal-highlight)', opacity: 0.85 }}>
                {personalInfo.title}
              </div>
            </div>

            <div className="text-terminal-gray text-sm leading-relaxed border-l-2 pl-4" style={{ borderColor: 'var(--terminal-highlight)', opacity: 0.9 }}>
              {personalInfo.summary}
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm pt-1">
              <a href={`mailto:${personalInfo.email}`} className="text-terminal-gray hover:text-terminal-white transition-colors">
                {personalInfo.email}
              </a>
              <span className="text-terminal-gray">
                {personalInfo.phone}
              </span>
              <span className="text-terminal-gray">
                {personalInfo.location}
              </span>
              {personalInfo.linkedin && (
                <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-terminal-gray hover:text-terminal-white transition-colors">
                  {personalInfo.linkedin}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
