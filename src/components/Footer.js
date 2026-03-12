export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-socials">
            <a
              href="https://github.com/ShilpaBar"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="GitHub"
            >
              GH
            </a>
            <a
              href="https://linkedin.com/in/shilpa-bar-315190296"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              href="mailto:shilpabar0@gmail.com"
              className="footer-social-link"
              aria-label="Email"
            >
              @
            </a>
          </div>
          <p className="footer-text">
            Designed & Built by <span className="highlight">Shilpa Bar</span> · © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
