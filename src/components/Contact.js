export default function Contact() {
  const links = [
    {
      icon: '📧',
      label: 'Email',
      value: 'shilpabar0@gmail.com',
      href: 'mailto:shilpabar0@gmail.com',
    },
    {
      icon: '📞',
      label: 'Phone',
      value: '+91-7063480428',
      href: 'tel:+917063480428',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/shilpa-bar-315190296',
      href: 'https://linkedin.com/in/shilpa-bar-315190296',
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/ShilpaBar',
      href: 'https://github.com/ShilpaBar',
    },
  ];

  return (
    <section className="section" id="contact">
      <div className="grid-bg"></div>
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">// Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
        </div>
        <div className="contact-content animate-on-scroll">
          <p className="contact-description">
            I&apos;m currently looking for opportunities as a Flutter Developer.
            Whether you have a project in mind, a question, or just want to say hello — 
            my inbox is always open!
          </p>
          <div className="contact-links">
            {links.map((link, index) => (
              <a
                href={link.href}
                className="glass-card contact-link"
                key={index}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <span className="contact-icon">{link.icon}</span>
                <div className="contact-info">
                  <div className="contact-label">{link.label}</div>
                  <div className="contact-value">{link.value}</div>
                </div>
              </a>
            ))}
          </div>
          <div className="contact-actions">
            <a href="mailto:shilpabar0@gmail.com" className="btn btn-primary">
              Say Hello 👋
            </a>
            <a
              href="https://linkedin.com/in/shilpa-bar-315190296"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
