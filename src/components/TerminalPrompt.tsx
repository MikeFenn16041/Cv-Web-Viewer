import { useState, useRef, useEffect } from 'react';
import type { CVData } from '../data/cvData';

interface TerminalPromptProps {
  cvData: CVData;
  onNavigate: (section: string) => void;
}

interface HistoryLine {
  type: 'input' | 'output' | 'error';
  text: string;
}

const HELP_TEXT = [
  'Available commands:',
  '  help          — show this message',
  '  whoami        — view profile summary',
  '  experience    — view work experience',
  '  skills        — view skills',
  '  education     — view education & certifications',
  '  contact       — view contact details',
  '  clear         — clear terminal',
  '  pdf           — download CV as PDF',
];

export const TerminalPrompt = ({ cvData, onNavigate }: TerminalPromptProps) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryLine[]>([
    { type: 'output', text: 'Welcome. Type "help" to see available commands.' },
  ]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [cmdIndex, setCmdIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const newHistory: HistoryLine[] = [
      ...history,
      { type: 'input', text: `$ ${raw}` },
    ];

    if (!cmd) {
      setHistory(newHistory);
      return;
    }

    setCmdHistory(prev => [raw, ...prev]);
    setCmdIndex(-1);

    switch (cmd) {
      case 'help':
        setHistory([...newHistory, ...HELP_TEXT.map(t => ({ type: 'output' as const, text: t }))]);
        break;

      case 'whoami':
        setHistory([...newHistory,
          { type: 'output', text: `Name:     ${cvData.personalInfo.name}` },
          { type: 'output', text: `Title:    ${cvData.personalInfo.title}` },
          { type: 'output', text: `Location: ${cvData.personalInfo.location}` },
          { type: 'output', text: '' },
          { type: 'output', text: cvData.personalInfo.summary },
        ]);
        onNavigate('profile');
        break;

      case 'experience':
        setHistory([...newHistory,
          { type: 'output', text: '— Work Experience —' },
          ...cvData.experience.map(e => ({
            type: 'output' as const,
            text: `  ${e.startDate} – ${e.endDate}  |  ${e.title}  @  ${e.company}`,
          })),
        ]);
        onNavigate('experience');
        break;

      case 'skills':
        setHistory([...newHistory,
          { type: 'output', text: '— Skills —' },
          ...cvData.skills.map(g => ({
            type: 'output' as const,
            text: `  ${g.category}: ${g.items.map(i => i.name).join(', ')}`,
          })),
        ]);
        onNavigate('skills');
        break;

      case 'education':
        setHistory([...newHistory,
          { type: 'output', text: '— Education & Certifications —' },
          ...cvData.education.map(e => ({
            type: 'output' as const,
            text: `  ${e.startDate}  |  ${e.degree}  —  ${e.institution}`,
          })),
        ]);
        onNavigate('education');
        break;

      case 'contact':
        setHistory([...newHistory,
          { type: 'output', text: `Email:    ${cvData.personalInfo.email}` },
          { type: 'output', text: `Phone:    ${cvData.personalInfo.phone}` },
          { type: 'output', text: `LinkedIn: ${cvData.personalInfo.linkedin}` },
          { type: 'output', text: `Location: ${cvData.personalInfo.location}` },
        ]);
        onNavigate('profile');
        break;

      case 'clear':
        setHistory([{ type: 'output', text: 'Terminal cleared. Type "help" for commands.' }]);
        break;

      case 'pdf':
        setHistory([...newHistory, { type: 'output', text: 'Opening print dialog...' }]);
        setTimeout(() => window.print(), 300);
        break;

      default:
        setHistory([...newHistory,
          { type: 'error', text: `Command not found: "${cmd}". Type "help" for available commands.` },
        ]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const next = Math.min(cmdIndex + 1, cmdHistory.length - 1);
      setCmdIndex(next);
      setInput(cmdHistory[next] ?? '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = Math.max(cmdIndex - 1, -1);
      setCmdIndex(next);
      setInput(next === -1 ? '' : cmdHistory[next]);
    }
  };

  return (
    <div
      className="terminal-window mb-8 cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="terminal-header">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-gray-500"></div>
          <div className="w-3 h-3 rounded-full bg-gray-400"></div>
          <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        </div>
        <div className="text-terminal-gray text-xs uppercase tracking-wider">terminal</div>
        <div className="text-terminal-dark-gray text-xs">type "help"</div>
      </div>

      <div ref={bodyRef} className="terminal-body max-h-64 overflow-y-auto font-mono text-sm">
        {history.map((line, i) => (
          <div
            key={i}
            className={
              line.type === 'input'
                ? 'text-terminal-white'
                : line.type === 'error'
                ? 'text-red-400'
                : line.text === ''
                ? 'h-3'
                : 'text-terminal-gray'
            }
          >
            {line.text}
          </div>
        ))}

        <div className="flex items-center mt-1">
          <span className="text-terminal-accent mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-terminal-white caret-white font-mono"
            autoComplete="off"
            spellCheck={false}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};
