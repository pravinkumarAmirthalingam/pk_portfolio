import React from 'react';
import { engineeringPrinciples } from '../data/portfolioData';
import { Compass, GitMerge, FileCode, Server } from 'lucide-react';

export default function EngineeringApproach() {
  return (
    <section id="architecture" className="section-wrapper architecture-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">03 / Engineering Discipline</div>
          <h2 className="section-title">How I approach software systems.</h2>
          <p className="section-lead">
            Concrete working principles forged from real project implementation: managing boundaries between services, enforcing data integrity, and respecting real-world operational constraints.
          </p>
        </div>

        <div className="principles-grid">
          {engineeringPrinciples.map((item) => (
            <div key={item.number} className="principle-card">
              <div className="principle-num">{item.number}</div>
              <h3 className="principle-title">{item.title}</h3>
              <p className="principle-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Technical Ledger Note */}
        <div className="architecture-note-box">
          <div className="note-box-header">
            <span className="note-badge">NOTEBOOK ENTRY</span>
            <span className="note-title">On Code Quality vs. Speed</span>
          </div>
          <p className="note-body">
            "Writing clean Spring Boot entity models or setting up a reproducible Python virtual environment might take ten more minutes upfront, but it prevents days of debugging corrupt data, unindexed slow joins, or subtle model serialization crashes later."
          </p>
        </div>

      </div>
    </section>
  );
}
