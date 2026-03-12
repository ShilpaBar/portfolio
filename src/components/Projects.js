export default function Projects() {
  const projects = [
    {
      icon: '📋',
      title: 'TaskFlow Pro',
      subtitle: 'Agile Task Management App',
      description: 'A responsive, cross-platform Agile Kanban board targeting iOS, Android, and Web using Flutter and Dart.',
      features: [
        'Clean architecture with robust state management',
        'RESTful APIs + Firebase Auth & Cloud Firestore',
        'Platform-specific configurations (iOS & Web)',
        'Agile sprints with Git branching & feature tracking',
      ],
      tags: ['Flutter', 'Dart', 'Firebase', 'REST API', 'Clean Architecture'],
      tagClass: 'tag-cyan',
      github: null,
      status: null,
    },
    {
      icon: '🚗',
      title: 'Sharide',
      subtitle: 'Real-Time Ride-Sharing App',
      description: 'Feature-rich ride-sharing application with cross-platform compatibility and high-performance UI.',
      features: [
        'Google Maps API for real-time driver tracking',
        'Firebase Firestore for ride booking & payments',
        'Smooth, user-friendly interface design',
        'GetX for state management & route navigation',
      ],
      tags: ['Flutter', 'Google Maps', 'Firebase', 'GetX'],
      tagClass: 'tag-purple',
      github: 'https://github.com/ShilpaBar',
      status: null,
    },
    {
      icon: '🌤️',
      title: 'Weather App',
      subtitle: 'Real-Time Weather Forecasts',
      description: 'Cross-platform mobile application providing accurate real-time weather forecasts with dynamic UI updates.',
      features: [
        'Third-party RESTful API integration',
        'Complex JSON data parsing & display',
        'Clean, intuitive, responsive interface',
        'Efficient data rendering & state management',
      ],
      tags: ['Flutter', 'REST API', 'JSON', 'Responsive UI'],
      tagClass: 'tag-cyan',
      github: null,
      status: null,
    },
    {
      icon: '💬',
      title: 'Chat App',
      subtitle: 'WhatsApp Clone',
      description: 'Real-time messaging application replicating core WhatsApp features with scalable architecture.',
      features: [
        'Firebase Auth, Cloud Storage & Push Notifications',
        'GetX for robust state management & routing',
        'Real-time messaging with clean codebase',
        'Continuous optimization for cross-functional collaboration',
      ],
      tags: ['Flutter', 'Firebase', 'GetX', 'Push Notifications'],
      tagClass: 'tag-purple',
      github: 'https://github.com/ShilpaBar',
      status: 'Ongoing',
    },
  ];

  return (
    <section className="section" id="projects">
      <div className="grid-bg"></div>
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">// Featured Work</span>
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="glass-card project-card animate-on-scroll" key={index}>
              <div className="project-card-header">
                <div className="project-icon">{project.icon}</div>
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="GitHub"
                    >
                      ↗
                    </a>
                  )}
                </div>
              </div>
              <div className="project-card-body">
                {project.status && (
                  <div className="project-status">
                    <span className="pulse"></span>
                    {project.status}
                  </div>
                )}
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="project-features">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="project-card-footer">
                {project.tags.map((tag, i) => (
                  <span className={`tag ${project.tagClass}`} key={i}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
