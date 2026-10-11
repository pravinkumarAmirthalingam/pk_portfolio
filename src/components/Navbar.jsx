import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    // { label: "Architecture", href: "#architecture" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }  
  ];

  return (
    <header className={`nav-header ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#overview" className="nav-brand" aria-label="Pravin Kumar A Home">
          <span className="brand-monogram">PK</span>
          <span className="brand-name">
            <strong>Pravin Kumar A</strong>
            <small className="brand-role">Software Engineer</small>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-action-link"
            aria-label="GitHub Profile"
          >
            <span>GitHub</span>
            <ArrowUpRight size={14} />
          </a>
          <a
            href="#contact"
            className="btn btn-primary nav-contact-btn"
          >
            Get in touch
          </a>
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" role="dialog" aria-modal="true">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mobile-nav-divider"></li>
            <li>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-nav-link external"
              >
                GitHub <ArrowUpRight size={16} />
              </a>
            </li>
            <li>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-nav-link external"
              >
                LinkedIn <ArrowUpRight size={16} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
