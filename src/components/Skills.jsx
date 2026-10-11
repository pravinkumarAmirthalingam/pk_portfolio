import React from 'react';
import { skillCategories, certifications } from '../data/portfolioData';
import { Award, Terminal, Check } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="section-wrapper skills-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">04 / Competencies & Tools</div>
          <h2 className="section-title">Technical capabilities & certifications.</h2>
          <p className="section-lead">
            Curated according to hands-on usage in verified projects and academic coursework. No arbitrary percentage bars or artificial 5-star ratings.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="skills-category-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="cat-header">
                <h3 className="cat-title">{cat.category}</h3>
                <p className="cat-desc">{cat.description}</p>
              </div>

              <div className="skills-tag-list">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-pill">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-note">{skill.note}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Subsection */}
        <div className="certifications-block">
          <div className="certifications-header">
            <div className="cert-title-group">
              <Award size={20} className="cert-icon" />
              <h3>Verified Certifications</h3>
            </div>
            <span className="cert-subtext">Credentialed through official coursework & specializations</span>
          </div>

          <div className="certifications-grid">
            {certifications.map((cert, cIdx) => (
              <div key={cIdx} className="cert-card">
                <div className="cert-meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-year">{cert.year}</span>
                </div>
                <h4 className="cert-name">{cert.title}</h4>
                <p className="cert-focus">{cert.focus}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
