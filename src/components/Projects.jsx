import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import {
  ExternalLink,
  CheckCircle2,
  Clock,
  Layers,
  GitBranch,
  ArrowRight,
  Shield,
  Activity,
  Workflow
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section id="projects" className="section-wrapper projects-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">02 / Selected Works</div>
          <h2 className="section-title">Projects built for real constraints.</h2>
          <p className="section-lead">
            Detailed case studies across civic accountability, healthcare capacity management, and privacy-preserving neural networks. Implemented features and roadmap items are explicitly distinguished.
          </p>
        </div>

        {/* Project Case Studies Container */}
        <div className="projects-collection">
          {projects.map((project) => (
            <article key={project.id} id={project.id} className="project-case-study">
              
              {/* Case Study Header */}
              <div className="case-study-header">
                <div className="case-meta">
                  <span className="case-index">{project.index}</span>
                  <span className="case-tag">{project.tag}</span>
                  <span className="case-status-badge">
                    <span className="status-indicator-dot"></span>
                    {project.statusBadge}
                  </span>
                </div>

                <h3 className="case-title">{project.title}</h3>
                <p className="case-subtitle">{project.subtitle}</p>
              </div>

              {/* Case Study Grid */}
              <div className="case-study-grid">
                
                {/* Left: Problem, Approach & Verified Features */}
                <div className="case-content-primary">
                  
                  <div className="case-narrative-block">
                    <h4 className="block-label">The Problem</h4>
                    <p className="block-text">{project.problemStatement}</p>
                  </div>

                  <div className="case-narrative-block">
                    <h4 className="block-label">Engineering Approach</h4>
                    <p className="block-text">{project.approach}</p>
                  </div>

                  {/* Feature Status Matrix: Honest distinction */}
                  <div className="feature-status-matrix">
                    <div className="matrix-column verified-column">
                      <h5 className="matrix-heading">
                        <CheckCircle2 size={16} className="icon-verified" />
                        Implemented & Verified
                      </h5>
                      <ul className="matrix-list">
                        {project.implementedFeatures.map((feat, i) => (
                          <li key={i} className="matrix-item verified">
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="matrix-column roadmap-column">
                      <h5 className="matrix-heading">
                        <Clock size={16} className="icon-roadmap" />
                        Roadmap & In Progress
                      </h5>
                      <ul className="matrix-list">
                        {project.inProgressFeatures.map((feat, i) => (
                          <li key={i} className="matrix-item roadmap">
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions / Links */}
                  <div className="case-links-bar">
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        <span>Open Live Demo</span>
                        <ExternalLink size={15} />
                      </a>
                    )}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-sm"
                      >
                        <GithubIcon size={15} />
                        <span>View Repository</span>
                      </a>
                    ) : (
                      <span className="case-repo-note">
                        {project.repoNote}
                      </span>
                    )}
                  </div>

                </div>

                {/* Right: Architecture Visual & Technical Anatomy */}
                <div className="case-content-secondary">
                  
                  {/* Custom System Architecture Card */}
                  <div className="architecture-card">
                    <div className="arch-card-header">
                      <span className="arch-card-tag">SYSTEM BLUEPRINT</span>
                      <span className="arch-card-title">{project.id.toUpperCase()}</span>
                    </div>

                    {/* Interactive Architecture Layers */}
                    <div className="arch-layers-list">
                      {project.architectureHighlights.map((arch, idx) => (
                        <div key={idx} className="arch-layer-item">
                          <div className="layer-step-marker">{idx + 1}</div>
                          <div className="layer-content">
                            <span className="layer-name">{arch.layer}</span>
                            <p className="layer-desc">{arch.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Lifecycle / Workflow Stages Pill Chain */}
                    <div className="workflow-stages-block">
                      <span className="workflow-label">Data & State Progression</span>
                      <div className="stages-pill-chain">
                        {project.workflowStages.map((stage, idx) => (
                          <React.Fragment key={idx}>
                            <span className="stage-pill">{stage}</span>
                            {idx < project.workflowStages.length - 1 && (
                              <span className="stage-arrow">→</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="arch-tech-stack">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="mono-badge">
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
