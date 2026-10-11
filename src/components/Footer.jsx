import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        
        <div className="footer-top-row">
          <div className="footer-brand-col">
            <span className="footer-monogram">PK</span>
            <span className="footer-name">{personalInfo.name}</span>
            <p className="footer-motto">
              "I build software for problems that exist outside the screen."
            </p>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-nav">
              <li><a href="#overview">Overview</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Selected Works</a></li>
              <li><a href="#architecture">Engineering Principles</a></li>
              <li><a href="#skills">Competencies</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-heading">Verified Profiles</h4>
            <ul className="footer-nav">
              <li>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  GitHub Profile
                </a>
              </li>
              <li>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <a href="https://smart-public-grievance-managment.vercel.app" target="_blank" rel="noopener noreferrer">
                  Civic Grievance App (Live)
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-action-col">
            <button
              onClick={scrollToTop}
              className="back-to-top-btn"
              aria-label="Scroll back to top"
            >
              <ArrowUp size={16} />
              <span>Top of page</span>
            </button>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-colophon">
            Designed & engineered with React, Vite & pure CSS tokens. Written with factual integrity.
          </p>
          <div className="footer-status-pill">
            <span className="pulse-dot"></span>
            Chennai, India · 2026-2027
          </div>
        </div>

      </div>
    </footer>
  );
}
