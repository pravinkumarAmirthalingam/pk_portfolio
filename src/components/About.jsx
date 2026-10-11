import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { BookOpen, Code2, Cpu, Database, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-wrapper about-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">01 / Background & Trajectory</div>
          <h2 className="section-title">Engineering from curiosity, not shortcuts.</h2>
        </div>

        <div className="about-grid">
          
          {/* Main Narrative Column */}
          <div className="about-narrative">
            <p className="narrative-paragraph highlight-lead">
              I am a final-year Artificial Intelligence and Data Science undergraduate at <strong>Saveetha Engineering College</strong>, graduating in 2027. My technical focus connects reliable backend engineering with applied machine learning.
            </p>

            <p className="narrative-paragraph">
              I care about understanding <em>how</em> systems work under the surface—from how Spring Data JPA translates entity graphs into SQL queries, to how convolutional filters isolate spatial features, to how decentralized client nodes aggregate gradient updates in federated learning without leaking private records.
            </p>

            <p className="narrative-paragraph">
              My engineering trajectory isn't defined by chasing every new framework. Instead, I invest time in durable foundations: <strong>Data Structures & Algorithms, Object-Oriented Design in Java, ACID properties in relational databases, and clean RESTful API contracts</strong>.
            </p>

            <div className="about-personal-touch">
              <div className="personal-touch-badge">Outside of code</div>
              <p className="personal-touch-text">
                Outside the terminal, strength training and cooking keep me grounded. Both demand patience, deliberate repetition, and an appreciation for technique over speed—habits that directly shape how I write and review software.
              </p>
            </div>
          </div>

          {/* Editorial Sidebar: Technical Direction Pillars */}
          <div className="about-pillars">
            <h3 className="pillars-title">Core Intersections</h3>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <Code2 size={20} className="pillar-icon" />
              </div>
              <div className="pillar-content">
                <h4>Backend & System Design</h4>
                <p>
                  Architecting modular Spring Boot microservices, Spring Security role workflows, and relational MySQL schemas designed for transactional consistency.
                </p>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <Cpu size={20} className="pillar-icon" />
              </div>
              <div className="pillar-content">
                <h4>Applied AI & Privacy</h4>
                <p>
                  Exploring machine learning where data cannot be pooled naively: federated learning (FedAvg), NLP for regional Indian dialects (Tanglish), and edge processing.
                </p>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-box">
                <Database size={20} className="pillar-icon" />
              </div>
              <div className="pillar-content">
                <h4>Full-Stack Integration</h4>
                <p>
                  Connecting responsive React frontends with verified REST APIs, ensuring clean error boundaries, accessible UI states, and rapid feedback loops.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
