import type { Skill } from '../data/cvData';

interface TerminalSkillsProps {
  skills: Skill[];
}

export const TerminalSkills = ({ skills }: TerminalSkillsProps) => {
  return (
    <div className="terminal-window mb-8">
      <div className="terminal-header">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-gray-500"></div>
          <div className="w-3 h-3 rounded-full bg-gray-400"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        </div>
        <div className="text-terminal-gray text-xs uppercase tracking-wider">skills</div>
        <div></div>
      </div>
      
      <div className="terminal-body">
        <div className="space-y-5">
          {skills.map((skillGroup, index) => (
            <div key={index}>
              <div className="font-bold mb-3 text-sm uppercase tracking-wider font-mono" style={{ color: 'var(--terminal-highlight)', opacity: 0.85 }}>
                {skillGroup.category}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1.5 border border-terminal-border text-terminal-text text-base font-mono bg-terminal-bg-light"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
