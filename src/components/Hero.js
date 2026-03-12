'use client';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const canvasRef = useRef(null);
  const [typedText, setTypedText] = useState('');
  const titles = ['Flutter Developer', 'Mobile App Developer', 'CS (AIML) Student', 'Firebase Expert'];

  useEffect(() => {
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout;

    const type = () => {
      const currentTitle = titles[titleIndex];
      if (isDeleting) {
        charIndex--;
        setTypedText(currentTitle.substring(0, charIndex));
      } else {
        charIndex++;
        setTypedText(currentTitle.substring(0, charIndex));
      }

      let speed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentTitle.length) {
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        speed = 500;
      }

      timeout = setTimeout(type, speed);
    };

    timeout = setTimeout(type, 1000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 229, 255, ${0.06 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <canvas ref={canvasRef}></canvas>
      </div>
      <div className="hero-gradient"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot"></span>
            Open to opportunities
          </div>
          <h1 className="hero-name">
            Hi, I&apos;m{' '}
            <span className="gradient-text">Shilpa Bar</span>
          </h1>
          <p className="hero-title">
            <span className="typed-text">{typedText}</span>
          </p>
          <p className="hero-description">
            Building scalable, cross-platform mobile applications with Flutter & Dart.
            Passionate about creating beautiful user interfaces and optimizing app performance.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-outline">View Projects</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="stat-value">4+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="hero-stat">
              <div className="stat-value">8.24</div>
              <div className="stat-label">CGPA</div>
            </div>
            <div className="hero-stat">
              <div className="stat-value">3+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
