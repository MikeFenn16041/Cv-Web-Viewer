import type { Experience } from '../data/cvData';

interface TerminalExperienceProps {
  experiences: Experience[];
}

export const TerminalExperience = ({ experiences }: TerminalExperienceProps) => {
  return (
    <div className="terminal-window mb-8">
      <div className="terminal-header">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-gray-500"></div>
          <div className="w-3 h-3 rounded-full bg-gray-400"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        </div>
        <div className="text-terminal-gray text-xs uppercase tracking-wider">experience</div>
        <div></div>
      </div>
      
      <div className="terminal-body">
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="border-l-2 pl-5" style={{ borderColor: 'var(--terminal-border)' }}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                <div className="flex-1">
                  <div className="text-terminal-white font-bold text-lg">
                    {exp.title}
                  </div>
                  <div className="text-base mt-1 font-mono" style={{ color: 'var(--terminal-highlight)', opacity: 0.85 }}>
                    {exp.company}
                  </div>
                </div>
                <div className="text-terminal-gray text-sm mt-2 sm:mt-0 sm:text-right font-mono">
                  {exp.startDate} — {exp.endDate}
                </div>
              </div>
              
              <div className="text-terminal-dark-gray text-sm mb-4">
                {exp.location}
              </div>
              
              <ul className="space-y-2.5 mb-4">
                {exp.description.filter(item => item.trim() !== '').map((item, idx) => (
                  <li key={idx} className="text-terminal-text text-base flex items-start">
                    <span className="mr-3 mt-1" style={{ color: 'var(--terminal-highlight)', opacity: 0.6 }}>{'>'}</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              
              {exp.technologies && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 border border-terminal-border text-terminal-gray text-sm font-mono bg-terminal-bg-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
