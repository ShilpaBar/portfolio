export default function Skills() {
  const categories = [
    {
      icon: '💻',
      iconClass: 'cyan',
      title: 'Programming Languages',
      skills: ['Dart', 'Java', 'C'],
    },
    {
      icon: '📱',
      iconClass: 'purple',
      title: 'Mobile Development',
      skills: ['Flutter', 'Web Platform', 'Cross-Platform'],
    },
    {
      icon: '🔥',
      iconClass: 'cyan',
      title: 'Backend & Integrations',
      skills: ['Firebase Auth', 'Cloud Firestore', 'Firebase Storage', 'Push Notifications', 'RESTful APIs', 'Google Maps API'],
    },
    {
      icon: '🏗️',
      iconClass: 'purple',
      title: 'State Management & Architecture',
      skills: ['GetX', 'Provider', 'BLoC', 'Clean Architecture'],
    },
    {
      icon: '🛠️',
      iconClass: 'cyan',
      title: 'Tools & Version Control',
      skills: ['Git', 'GitHub', 'VS Code', 'Android Studio', 'Flutter SDK'],
    },
    {
      icon: '🧪',
      iconClass: 'purple',
      title: 'Testing & Methodologies',
      skills: ['Flutter Test', 'Unit Testing', 'Widget Testing'],
    },
  ];

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">// Skills & Expertise</span>
          <h2 className="section-title">Technical Toolkit</h2>
        </div>
        <div className="skills-grid">
          {categories.map((cat, index) => (
            <div className="glass-card skill-category animate-on-scroll" key={index}>
              <div className="skill-category-header">
                <div className={`skill-category-icon ${cat.iconClass}`}>{cat.icon}</div>
                <h3 className="skill-category-title">{cat.title}</h3>
              </div>
              <div className="skill-tags">
                {cat.skills.map((skill, i) => (
                  <span className="skill-tag" key={i}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
