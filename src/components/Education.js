export default function Education() {
  const education = [
    {
      period: '2022 — 2026 (Expected)',
      degree: 'B.Tech in Computer Science Engineering (AIML)',
      school: 'Institute of Engineering and Management (MAKAUT) — Kolkata, West Bengal',
      score: 'CGPA: 8.24',
    },
    {
      period: '2022',
      degree: 'Higher Secondary (WBCHSE) — PCM',
      school: 'Kishorenagar Sachindra Siksha Sadan',
      score: 'Percentage: 85%',
    },
    {
      period: '2020',
      degree: 'Secondary (WBBSE) — General',
      school: 'Kishorenagar Sachindra Siksha Sadan',
      score: 'Percentage: 83%',
    },
  ];

  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">// Education</span>
          <h2 className="section-title">Academic Journey</h2>
        </div>
        <div className="education-timeline">
          {education.map((item, index) => (
            <div className="education-item animate-on-scroll" key={index}>
              <div className="education-period">{item.period}</div>
              <div className="education-degree">{item.degree}</div>
              <div className="education-school">{item.school}</div>
              <div className="education-score">{item.score}</div>
            </div>
          ))}
        </div>

        <div className="section-header animate-on-scroll" style={{ marginTop: 'clamp(3rem, 6vw, 5rem)' }}>
          <span className="section-label">// Languages</span>
          <h2 className="section-title">Languages</h2>
        </div>
        <div className="languages-grid animate-on-scroll">
          <div className="glass-card language-item">
            <div className="language-name">Bengali</div>
            <div className="language-level">Native</div>
          </div>
          <div className="glass-card language-item">
            <div className="language-name">English</div>
            <div className="language-level">Professional</div>
          </div>
          <div className="glass-card language-item">
            <div className="language-name">Hindi</div>
            <div className="language-level">Conversational</div>
          </div>
        </div>
      </div>
    </section>
  );
}
