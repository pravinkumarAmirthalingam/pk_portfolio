import React from 'react';
import { personalInfo, stats } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight, ShieldCheck, Terminal, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="overview" className="hero-section">
      <div className="container hero-container">
        
        {/* Meta Header / Editorial Index */}
        <div className="hero-meta-bar">
          <div className="meta-tag-group">
            <span className="live-indicator">
              <span className="live-dot"></span>
              Available for Software Engineering Internships & Roles
            </span>
            <span className="meta-divider">|</span>
            <span className="meta-location">
              <MapPin size={13} /> {personalInfo.location}
            </span>
          </div>
          <div className="meta-index-label">
            PORTFOLIO FOLIO / 2026-2027
          </div>
        </div>

        {/* Hero Title & Identity */}
        <div className="hero-main-content">
          <h1 className="hero-title">
            <span className="hero-name-prefix">Pravin Kumar A</span>
            <span className="hero-tagline">
              "I build software for problems that exist outside the screen."
            </span>
          </h1>

          <p className="hero-subheading">
            {personalInfo.subheading}
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              <span>Explore Selected Work</span>
              <ArrowDown size={16} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <span>GitHub Profile</span>
              <ArrowUpRight size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <span>LinkedIn</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Technical Ledger / Stats Bar */}
        <div className="hero-ledger">
          {stats.map((item, idx) => (
            <div key={idx} className="ledger-cell">
              <span className="ledger-label">{item.label}</span>
              <span className="ledger-value">{item.value}</span>
              <span className="ledger-detail">{item.detail}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
