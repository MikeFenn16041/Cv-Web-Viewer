import { useRef } from 'react';
import { TerminalHeader } from './components/TerminalHeader';
import { TerminalExperience } from './components/TerminalExperience';
import { TerminalSkills } from './components/TerminalSkills';
import { TerminalEducation } from './components/TerminalEducation';
import { TerminalPrompt } from './components/TerminalPrompt';
import { PrintView } from './components/PrintView';
import { DownloadButton } from './components/DownloadButton';
import { cvData } from './data/cvData';

function App() {
  const profileRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (section: string) => {
    const map: Record<string, React.RefObject<HTMLDivElement | null>> = {
      profile: profileRef,
      experience: experienceRef,
      skills: skillsRef,
      education: educationRef,
    };
    map[section]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-terminal-bg print:bg-white">
      <div className="screen-only max-w-4xl mx-auto px-4 py-8">
        {/* Terminal interactive prompt - no-print */}
        <div className="no-print">
          <TerminalPrompt cvData={cvData} onNavigate={handleNavigate} />
        </div>

        <div ref={profileRef}>
          <TerminalHeader personalInfo={cvData.personalInfo} />
        </div>
        <div ref={experienceRef}>
          <TerminalExperience experiences={cvData.experience} />
        </div>
        <div ref={skillsRef}>
          <TerminalSkills skills={cvData.skills} />
        </div>
        <div ref={educationRef}>
          <TerminalEducation education={cvData.education} />
        </div>
      </div>

      <div className="no-print"><DownloadButton /></div>

      {/* Clean PDF view - hidden on screen, shown when printing */}
      <PrintView cvData={cvData} />
    </div>
  );
}

export default App;
