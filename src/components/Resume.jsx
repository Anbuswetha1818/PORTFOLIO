import React from 'react';

const Resume = () => {


  return (
    <section id="resume" className="resume section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>
          A summary of my professional journey, academic background, certifications, and technical qualifications.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-5">
          
          {/* Left Column: Experience */}
          <div className="col-lg-6">
            <div className="experience-section">
              <div className="section-header" data-aos="fade-right" data-aos-delay="200">
                <div className="header-content">
                  <span className="section-badge">Experience</span>
                  <h2>Professional Journey</h2>
                  <p>My internship experiences in full-stack development and software engineering.</p>
                </div>
              </div>

              <div className="experience-cards">
                
                {/* VDart Academy */}
                <div className="exp-card featured" data-aos="zoom-in" data-aos-delay="300">
                  <div className="card-header">
                    <div className="company-logo">
                      <i className="bi bi-buildings"></i>
                    </div>
                    <div className="period-badge">Current</div>
                  </div>
                  <div className="card-body">
                    <h3>Full Stack Developer Intern</h3>
                    <p className="company-name">VDart Academy • Tiruchirappalli, TN</p>
                    <span className="duration">June 2026 - Present</span>
                    <p className="description">
                      Developing the full-stack InternFlow platform. Collaborating on end-to-end features, dashboard implementations, and deployments.
                    </p>
                    <ul className="small ps-3 mb-3" style={{ color: 'color-mix(in srgb, var(--default-color), transparent 30%)' }}>
                      <li>Designed role-based admin and intern dashboards.</li>
                      <li>Built responsive web modules integrated with backend APIs.</li>
                      <li>Implemented JWT authentication with role-based access control.</li>
                    </ul>
                    <div className="skills-tags">
                      <span className="skill-tag">React</span>
                      <span className="skill-tag">Django REST</span>
                      <span className="skill-tag">PostgreSQL</span>
                      <span className="skill-tag">JWT</span>
                    </div>
                  </div>
                </div>

                {/* NextGen Solutions */}
                <div className="exp-card" data-aos="zoom-in" data-aos-delay="350">
                  <div className="card-header">
                    <div className="company-logo">
                      <i className="bi bi-laptop"></i>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3>Python Intern</h3>
                    <p className="company-name">NextGen Solutions • Cuddalore, TN</p>
                    <span className="duration">Apr 2025 - May 2025</span>
                    <p className="description">
                      Developed database-driven Python applications using Object-Oriented Programming (OOP) and graphical interfaces.
                    </p>
                    <ul className="small ps-3 mb-3" style={{ color: 'color-mix(in srgb, var(--default-color), transparent 30%)' }}>
                      <li>Applied modular coding structures and GUI development.</li>
                      <li>Optimized relational database queries using MySQL integration.</li>
                    </ul>
                    <div className="skills-tags">
                      <span className="skill-tag">Python</span>
                      <span className="skill-tag">OOP</span>
                      <span className="skill-tag">MySQL</span>
                      <span className="skill-tag">GUI Dev</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Education & Credentials */}
          <div className="col-lg-6">
            <div className="education-section">
              <div className="section-header" data-aos="fade-left" data-aos-delay="200">
                <div className="header-content">
                  <span className="section-badge">Education</span>
                  <h2>Academic Background</h2>
                  <p>My academic studies, coursework, and professional learning certifications.</p>
                </div>
              </div>

              <div className="education-timeline" data-aos="fade-left" data-aos-delay="300">
                <div className="timeline-track">
                  
                  {/* Bharathidasan University */}
                  <div className="timeline-item">
                    <div className="timeline-marker">
                      <i className="bi bi-mortarboard-fill"></i>
                    </div>
                    <div className="timeline-content">
                      <div className="education-meta">
                        <span className="year-range">2022 - 2026</span>
                        <span className="degree-level">B.Tech</span>
                      </div>
                      <h4>B.Tech Computer Science Engineering</h4>
                      <p className="institution">Bharathidasan University • Tiruchirappalli, TN</p>
                      <p className="description">
                        Focusing on data structures, database management systems, algorithm design, operating systems, and object-oriented paradigms.
                      </p>
                      <div className="achievement">
                        <i className="bi bi-award"></i>
                        <span>CGPA: 6.9</span>
                      </div>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="timeline-item">
                    <div className="timeline-marker">
                      <i className="bi bi-patch-check-fill"></i>
                    </div>
                    <div className="timeline-content">
                      <div className="education-meta">
                        <span className="year-range">Certs</span>
                        <span className="degree-level">Skills</span>
                      </div>
                      <h4>Professional Certifications</h4>
                      <div className="certifications-list">
                        <div className="cert-item">
                          <span className="cert-name">Certificate on Full Stack</span>
                          <span className="cert-year">Pantech.AI</span>
                        </div>
                        <div className="cert-item">
                          <span className="cert-name">Infosys Python Certificate</span>
                          <span className="cert-year">Infosys</span>
                        </div>
                        <div className="cert-item">
                          <span className="cert-name">Python Intern Letter</span>
                          <span className="cert-year">NextGen</span>
                        </div>
                        <div className="cert-item">
                          <span className="cert-name">Certificate on Power BI</span>
                          <span className="cert-year">KenStack Technologies</span>
                        </div>
                        <div className="cert-item">
                          <span className="cert-name">Certificate on Data Science with AI</span>
                          <span className="cert-year">Elysium Academy</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Coursework */}
                  <div className="timeline-item">
                    <div className="timeline-marker">
                      <i className="bi bi-book"></i>
                    </div>
                    <div className="timeline-content">
                      <div className="education-meta">
                        <span className="year-range">Studies</span>
                        <span className="degree-level">Core</span>
                      </div>
                      <h4>Relevant Coursework</h4>
                      <div className="certifications-list">
                        <div className="cert-item">
                          <span className="cert-name">Data Structures & Algorithms</span>
                        </div>
                        <div className="cert-item">
                          <span className="cert-name">Object-Oriented Programming (OOP)</span>
                        </div>
                        <div className="cert-item">
                          <span className="cert-name">Database Management Systems (DBMS)</span>
                        </div>
                        <div className="cert-item">
                          <span className="cert-name">Operating Systems</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Download CV CTA Box */}
                  <div className="timeline-item">
                    <div className="timeline-content text-center py-4" style={{ background: 'color-mix(in srgb, var(--accent-color), transparent 96%)' }}>
                      <h4 className="mb-2">Get My Full Resume</h4>
                      <p className="mb-3 small" style={{ color: 'color-mix(in srgb, var(--default-color), transparent 30%)' }}>Need a copy of my resume? Get it instantly here.</p>
                      <a href="/resume.pdf" download="Anbu_Swetha_B_Resume.pdf" className="btn-getstarted text-white py-2 px-4 d-inline-block" style={{ borderRadius: '50px', background: 'var(--accent-color)', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>
                        <i className="bi bi-download me-2"></i> Download Resume
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Resume;
