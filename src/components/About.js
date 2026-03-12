export default function About() {
  const highlights = [
    { icon: '📱', label: 'Cross-Platform Mobile Apps' },
    { icon: '🔥', label: 'Firebase Backend Services' },
    { icon: '⚡', label: 'State Management (GetX)' },
    { icon: '🎨', label: 'User-Friendly UI/UX' },
    { icon: '🔄', label: 'Agile / Scrum Developer' },
    { icon: '🧪', label: 'Unit & Widget Testing' },
  ];

  return (
    <section className="section" id="about">
      <div className="grid-bg"></div>
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">// About Me</span>
          <h2 className="section-title">Professional Summary</h2>
        </div>
        <div className="about-content">
          <div className="glass-card about-card animate-on-scroll">
            <p className="about-text">
              Highly motivated <span className="highlight">Computer Science (AIML)</span> student
              and <span className="highlight">Flutter Developer</span> with hands-on experience
              building scalable, cross-platform mobile applications for
              <span className="highlight"> iOS, Android, and Web</span> using Dart. Strong proficiency
              in state management, RESTful API integration, and Firebase backend services. Adept at
              writing clean, well-documented code, utilizing Git for version control, and collaborating
              in Agile environments.
            </p>
            <div className="about-highlights">
              {highlights.map((item, index) => (
                <div className="about-highlight-item" key={index}>
                  <span className="icon">{item.icon}</span>
                  <span className="label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
