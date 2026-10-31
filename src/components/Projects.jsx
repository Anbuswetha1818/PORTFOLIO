import React, { useState } from 'react';
import energystreamAiImg from '../assets/energystream_ai.png';
import internflowImg from '../assets/internflow.png';
import oneomicsLimsImg from '../assets/oneomics_lims.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 3,
      title: 'ONEOMICS-LIMS',
      image: oneomicsLimsImg,
      category: 'react-node-mysql',
      categoryTag: 'Enterprise / Full Stack',
      year: '2026',
      tags: ['React', 'Node.js', 'Express', 'MySQL', 'Sequelize'],
      summary: 'Laboratory Information Management System for tracking genomic sequencing workflows, samples, and reports.',
      description: 'A comprehensive full-stack enterprise LIMS platform built for ONEOMICS PRIVATE LIMITED to manage laboratory operations, sequencing datasets (such as metabarcoding workflows), customer project records, internal employee attendance, and automated data exports.',
      features: [
        'Genomic sample tracking and sequencing status management',
        'Role-based access control and employee management system',
        'Relational database architecture powered by MySQL & Sequelize',
        'Automated real-time reporting with dynamic Excel export generation',
        'Secure RESTful APIs built with Node.js and Express'
      ],
      github: 'https://github.com/Anbuswetha1818',
      demo: ''
    },
    {
      id: 2,
      title: 'EnergyStream AI - Energy Forecasting',
      image: energystreamAiImg,
      category: 'django-python',
      categoryTag: 'Machine Learning',
      year: '2026',
      tags: ['Python', 'Flask API', 'LSTM Models', 'Scikit-learn'],
      summary: 'Household electricity usage prediction application using LSTM neural networks.',
      description: 'An AI-driven energy analytics dashboard that forecasts household consumption patterns. Built and trained Long Short-Term Memory (LSTM) machine learning models on a dataset of over 2 million records, achieving 97.3% forecasting accuracy. Integrated with a Flask API for real-time predictions.',
      features: [
        'LSTM Neural Network trained on 2M+ records',
        'High prediction accuracy of 97.3%',
        'Flask API backend serving real-time inference payloads',
        'Interactive analytics dashboard presenting load forecasts',
        'Data preprocessing pipeline using Pandas and NumPy'
      ],
      github: 'https://github.com/Anbuswetha1818/ENERGYSTREAM_AI.git',
      demo: 'https://energystream-ai.onrender.com'
    },
    {
      id: 1,
      title: 'InternFlow',
      image: internflowImg,
      category: 'react-django-mysql',
      categoryTag: 'Full Stack',
      year: '2026',
      tags: ['React', 'Django REST', 'PostgreSQL', 'JWT'],
      summary: 'Corporate workspace platform to manage intern attendance, payroll, and task assignments.',
      description: 'A comprehensive portal designed during the internship at VDart Academy to streamline intern tracking. Features secure JSON Web Token authentication, role-based dashboards (Admin, Staff, Intern), detailed attendance logs, automatic payroll calculation, and progress charts.',
      features: [
        'Secure JWT Authentication & Password Encryption',
        'Role-Based Dashboards & Access Controls',
        'Attendance tracking with Check-In/Check-Out logs',
        'Automatic payroll and stipend calculating engine',
        'Task management board and intern progress statistics'
      ],
      github: 'https://github.com/Anbuswetha1818/INTERN_FLOW.git',
      demo: 'https://intern-flow-pink.vercel.app'
    }
  ];



  return (
    <section id="portfolio" className="portfolio section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <span className="subtitle">Recent Work</span>
        <h2>Portfolio</h2>
        <p>
          A showcase of recent software applications and machine learning projects I have built.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        
        {/* Project Grid */}
        <div className="row gy-4" data-aos="fade-up" data-aos-delay="300">
          {projectsData.map(project => (
            <div className="col-lg-4 col-md-6" key={project.id}>
              <div className="portfolio-card">
                <div className="portfolio-image-container">
                  {project.image ? (
                    <img src={project.image} alt={project.title} />
                  ) : (
                    /* Native SVG graphic mockup */
                    <svg viewBox="0 0 160 100" width="100%" height="100%" style={{ background: 'linear-gradient(135deg, #1c1c1c, #2a2a2a)', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <defs>
                        <linearGradient id={`grad-${project.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#2563EB" />
                          <stop offset="100%" stopColor="#38BDF8" />
                        </linearGradient>
                      </defs>
                      <rect x="10" y="10" width="140" height="80" rx="6" fill="#141414" stroke={`url(#grad-${project.id})`} strokeWidth="1" />
                      <circle cx="25" cy="22" r="3" fill="#2563EB" />
                      <circle cx="33" cy="22" r="3" fill="#38BDF8" />
                      <circle cx="41" cy="22" r="3" fill="#389e0d" />
                      
                      {project.id === 1 ? (
                        <>
                          <rect x="20" y="35" width="120" height="40" rx="3" fill="#1c1c1c" />
                          <circle cx="40" cy="55" r="10" fill="url(#grad-1)" opacity="0.8" />
                          <rect x="60" y="48" width="50" height="4" rx="2" fill="#d9d9d9" opacity="0.3" />
                          <rect x="60" y="58" width="70" height="4" rx="2" fill="#d9d9d9" opacity="0.15" />
                        </>
                      ) : (
                        <>
                          <path d="M 20 75 L 40 50 L 60 65 L 80 40 L 100 55 L 120 30 L 140 45" fill="none" stroke="url(#grad-2)" strokeWidth="2" strokeLinecap="round" />
                          <circle cx="120" cy="30" r="3" fill="#2563EB" />
                          <rect x="20" y="80" width="120" height="2" fill="#434343" />
                        </>
                      )}
                    </svg>
                  )}
                  
                  <div className="portfolio-overlay">
                    <div className="portfolio-info">
                      <span className="project-category">{project.categoryTag}</span>
                      <h4>{project.title}</h4>
                    </div>
                    <div className="portfolio-actions">
                      <button onClick={() => setSelectedProject(project)} className="border-0 bg-transparent text-white" style={{ cursor: 'pointer' }} title="Project Info">
                        <i className="bi bi-plus-lg" style={{ fontSize: '1.5rem' }}></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="portfolio-meta">
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-year">{project.year}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="portfolio-bottom text-center mt-5" data-aos="fade-up" data-aos-delay="400">
          <h3>Like what you see?</h3>
          <p className="mb-4 text-muted">I am always looking for challenging Full Stack development or Software Engineering roles.</p>
          <a href="#contact" className="btn-getstarted text-white py-2 px-4" style={{ borderRadius: '50px', background: 'var(--accent-color)', fontSize: '14px', fontWeight: '600' }}>
            Let's Work Together
          </a>
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="custom-modal-backdrop" onClick={() => setSelectedProject(null)} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.65)', zIndex: 1050, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="custom-modal p-3 p-md-5" onClick={(e) => e.stopPropagation()} style={{ background: 'var(--surface-color)', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '16px', maxWidth: '700px', width: '92%', position: 'relative', maxHeight: '80vh', overflowY: 'auto' }}>
            <div className="custom-modal-close" onClick={() => setSelectedProject(null)} style={{ position: 'absolute', top: '15px', right: '15px', cursor: 'pointer', fontSize: '1.5rem', color: 'var(--heading-color)' }}>
              <i className="bi bi-x-lg"></i>
            </div>

            <span className="section-badge mb-3 d-inline-block" style={{ background: 'color-mix(in srgb, var(--accent-color), transparent 90%)', color: 'var(--accent-color)', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '600' }}>Project Details</span>
            <h3 className="mb-2" style={{ color: 'var(--heading-color)', fontWeight: '700' }}>{selectedProject.title}</h3>
            
            <div className="d-flex gap-2 flex-wrap mb-4">
              {selectedProject.tags.map(tag => (
                <span key={tag} className="badge" style={{ background: 'color-mix(in srgb, var(--accent-color), transparent 92%)', border: '1px solid color-mix(in srgb, var(--accent-color), transparent 85%)', color: 'var(--accent-color)' }}>{tag}</span>
              ))}
            </div>

            <p style={{ color: 'var(--default-color)', lineHeight: '1.8' }}>{selectedProject.description}</p>
            
            <h4 className="mt-4 mb-3" style={{ fontSize: '18px', color: 'var(--heading-color)', fontWeight: '600' }}>Key Features:</h4>
            <ul className="list-unstyled">
              {selectedProject.features.map((feat, idx) => (
                <li key={idx} className="d-flex align-items-start mb-2" style={{ color: 'color-mix(in srgb, var(--default-color), transparent 20%)' }}>
                  <i className="bi bi-chevron-right text-primary me-2 mt-1"></i>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="d-flex gap-3 mt-5">
              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn-getstarted text-white py-2 px-4 border-0" style={{ borderRadius: '50px', background: 'var(--accent-color)', fontSize: '14px', fontWeight: '600' }}>
                <i className="bi bi-github me-2"></i> GitHub Repo
              </a>
              {selectedProject.demo ? (
                <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn-getstarted py-2 px-4 border-0" style={{ borderRadius: '50px', background: 'rgba(0,0,0,0.05)', color: 'var(--heading-color)', fontSize: '14px', fontWeight: '600' }}>
                  <i className="bi bi-box-arrow-up-right me-2"></i> Demo Link
                </a>
              ) : null}
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;
