import type { CVData } from '../data/cvData';

interface PrintViewProps {
  cvData: CVData;
}

export const PrintView = ({ cvData }: PrintViewProps) => {
  const { personalInfo, experience, skills, education } = cvData;

  return (
    <div className="print-only" id="print-view">
      <div className="print-header">
        <div className="print-header-inner">
          <img src="/profile.jpg" alt="Profile" className="print-photo" />
          <div className="print-header-text">
            <h1 className="print-name">{personalInfo.name}</h1>
            <p className="print-title">{personalInfo.title}</p>
            <div className="print-contact">
              <span>{personalInfo.email}</span>
              <span className="print-sep">|</span>
              <span>{personalInfo.phone}</span>
              <span className="print-sep">|</span>
              <span>{personalInfo.location}</span>
              {personalInfo.linkedin && (
                <>
                  <span className="print-sep">|</span>
                  <span>{personalInfo.linkedin}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="print-divider" />

      <div className="print-section">
        <p className="print-summary">{personalInfo.summary}</p>
      </div>

      <div className="print-divider" />

      <div className="print-section">
        <h2 className="print-section-title">Experience</h2>
        {experience.map((exp) => (
          <div key={exp.id} className="print-entry">
            <div className="print-entry-header">
              <div>
                <span className="print-entry-title">{exp.title}</span>
                <span className="print-entry-company"> — {exp.company}</span>
              </div>
              <span className="print-entry-date">{exp.startDate} – {exp.endDate}</span>
            </div>
            <p className="print-entry-location">{exp.location}</p>
            <ul className="print-list">
              {exp.description.filter(d => d.trim()).map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
            {exp.technologies && (
              <p className="print-tech">
                <strong>Technologies:</strong> {exp.technologies.join(' · ')}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="print-divider" />

      <div className="print-section">
        <h2 className="print-section-title">Skills</h2>
        <div className="print-skills-grid">
          {skills.map((group, i) => (
            <div key={i} className="print-skill-group">
              <span className="print-skill-category">{group.category}: </span>
              <span className="print-skill-items">{group.items.map(s => s.name).join(', ')}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="print-divider" />

      <div className="print-section">
        <h2 className="print-section-title">Education & Certifications</h2>
        {education.map((edu) => (
          <div key={edu.id} className="print-entry">
            <div className="print-entry-header">
              <div>
                <span className="print-entry-title">{edu.degree}</span>
                <span className="print-entry-company"> — {edu.institution}</span>
              </div>
              <span className="print-entry-date">{edu.startDate} – {edu.endDate}</span>
            </div>
            <p className="print-entry-location">{edu.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
