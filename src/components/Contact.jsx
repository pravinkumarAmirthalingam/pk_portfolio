import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">05 / Communication</div>
          <h2 className="section-title">Let’s discuss engineering & opportunities.</h2>
          <p className="section-lead">
            I am actively exploring software engineering internships, entry-level engineering roles, and collaborative projects at the intersection of full-stack systems and applied machine learning.
          </p>
        </div>

        <div className="contact-card-container">
          
          <div className="contact-main-card">
            
            <div className="contact-intro">
              <span className="contact-available-flag">
                <span className="status-indicator-dot"></span>
                Open for conversations & interviews
              </span>
              <h3 className="contact-card-headline">
                Have a challenging problem to solve?
              </h3>
              <p className="contact-card-sub">
                Drop me an email directly or connect with me on LinkedIn. I reply promptly to genuine queries and technical discussions.
              </p>
            </div>

            {/* Direct Email Action Box */}
            <div className="email-action-box">
              <div className="email-display">
                <Mail size={20} className="email-icon" />
                <span className="email-text">{personalInfo.email}</span>
              </div>
              <div className="email-btn-group">
                <button
                  onClick={handleCopyEmail}
                  className="btn btn-outline btn-sm copy-btn"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="copied-icon" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="btn btn-primary btn-sm"
                >
                  <span>Send Mail</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Verified Communication Channels */}
            <div className="channels-grid">
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-item"
              >
                <div className="channel-icon-wrap">
                  <GithubIcon size={20} />
                </div>
                <div className="channel-info">
                  <span className="channel-title">GitHub</span>
                  <span className="channel-meta">pravinkumarAmirthalingam</span>
                </div>
                <ArrowUpRight size={16} className="channel-arrow" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-item"
              >
                <div className="channel-icon-wrap">
                  <LinkedinIcon size={20} />
                </div>
                <div className="channel-info">
                  <span className="channel-title">LinkedIn</span>
                  <span className="channel-meta">in/pravinnamirtha</span>
                </div>
                <ArrowUpRight size={16} className="channel-arrow" />
              </a>

              <div className="channel-item non-link">
                <div className="channel-icon-wrap">
                  <Phone size={20} />
                </div>
                <div className="channel-info">
                  <span className="channel-title">Phone</span>
                  <span className="channel-meta">{personalInfo.phone}</span>
                </div>
              </div>

              <div className="channel-item non-link">
                <div className="channel-icon-wrap">
                  <MapPin size={20} />
                </div>
                <div className="channel-info">
                  <span className="channel-title">Location</span>
                  <span className="channel-meta">Chennai, India</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
