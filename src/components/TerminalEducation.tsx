import type { Education } from '../data/cvData';

interface TerminalEducationProps {
  education: Education[];
}

export const TerminalEducation = ({ education }: TerminalEducationProps) => {
  return (
    <div className="terminal-window mb-8">
      <div className="terminal-header">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-gray-500"></div>
          <div className="w-3 h-3 rounded-full bg-gray-400"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        </div>
        <div className="text-terminal-gray text-xs uppercase tracking-wider">education</div>
        <div></div>
      </div>
      
      <div className="terminal-body">
        <div className="space-y-5">
          {education.map((edu) => (
            <div key={edu.id} className="border-l-2 border-terminal-border pl-5">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                <div className="flex-1">
                  <div className="text-terminal-white font-bold text-base">
                    {edu.degree}
                  </div>
                  <div className="text-terminal-accent text-base mt-1">
                    {edu.institution}
                  </div>
                </div>
                <div className="text-terminal-gray text-sm mt-2 sm:mt-0 sm:text-right font-mono">
                  {edu.startDate} — {edu.endDate}
                </div>
              </div>
              
              <div className="text-terminal-dark-gray text-sm">
                {edu.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
