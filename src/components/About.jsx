import React from 'react';
import swethaProfile from '../assets/swetha_profile.png';

const About = () => {


  const skillsData = [
    { name: 'React & JavaScript', percent: '90%' },
    { name: 'Python & Django (DRF, Flask)', percent: '90%' },
    { name: 'MySQL & SQLite', percent: '85%' },
    { name: 'ML & AI (Scikit-learn, Pandas, NumPy)', percent: '80%' },
    { name: 'Tools (Git, GitHub, Postman, Vite)', percent: '85%' }
  ];

  return (
    <section id="about" className="about section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>About Me</h2>
        <p>
          Software Engineering fresher skilled in full-stack development, agile methodologies, and machine learning.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-5">
          
          {/* Left Column: Profile Card */}
          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="150">
            <div className="profile-card">
              <div className="profile-header">
                <div className="profile-avatar">
                  <img src={swethaProfile} className="img-fluid" alt="Anbu Swetha B" />
                  <div className="status-indicator"></div>
                </div>
                <h3>Anbu Swetha B</h3>
                <span className="role">Full Stack Developer</span>
                <div className="rating">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <span>5.0</span>
                </div>
              </div>

              <div className="profile-stats">
                <div className="stat-item">
                  <h4>3+</h4>
                  <p>Projects</p>
                </div>
                <div className="stat-item">
                  <h4>3</h4>
                  <p>Experiences</p>
                </div>
                <div className="stat-item">
                  <h4>6.9</h4>
                  <p>CGPA</p>
                </div>
              </div>

              <div className="profile-actions">
                <a href="/resume.pdf" download="Anbu_Swetha_B_Resume.pdf" className="btn-primary">
                  <i className="bi bi-download"></i> Download CV
                </a>
                <a href="#contact" className="btn-secondary">
                  <i className="bi bi-envelope"></i> Contact
                </a>
              </div>

              <div className="social-connect">
                <a href="https://linkedin.com/in/anbuswetha" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://github.com/Anbuswetha1818" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <i className="bi bi-github"></i>
                </a>
                <a href="mailto:anbuswethabarathan@gmail.com" title="Email">
                  <i className="bi bi-envelope-fill"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Content & Detail Grid */}
          <div className="col-lg-8" data-aos="fade-left" data-aos-delay="200">
            <div className="content-wrapper">
              <div className="bio-section">
                <div className="section-tag">About Me</div>
                <h2>Designing Scalable Backends & Fluid Frontends</h2>
                <p>
                  Motivated Software Engineering fresher skilled in full-stack development, agile methodologies, and cloud technologies. Strong problem-solving ability with hands-on experience in Python, React, and REST APIs.
                </p>
                <p>
                  I enjoy developing end-to-end applications, from UI/UX design to robust server architectures and database normalization. Having built full-stack solutions like InternFlow and machine learning models for energy forecasting, I am well-prepared to tackle real-world development challenges.
                </p>
              </div>

              <div className="details-grid">
                
                <div className="detail-item" data-aos="fade-up" data-aos-delay="250">
                  <i className="bi bi-briefcase"></i>
                  <div className="detail-content">
                    <span>Experience</span>
                    <strong>Full Stack Developer</strong>
                  </div>
                </div>

                <div className="detail-item" data-aos="fade-up" data-aos-delay="300">
                  <i className="bi bi-mortarboard"></i>
                  <div className="detail-content">
                    <span>Degree</span>
                    <strong>B.Tech CSE</strong>
                  </div>
                </div>

                <div className="detail-item" data-aos="fade-up" data-aos-delay="350">
                  <i className="bi bi-geo-alt"></i>
                  <div className="detail-content">
                    <span>Based In</span>
                    <strong>Pudukkottai, TN, India</strong>
                  </div>
                </div>

                <div className="detail-item" data-aos="fade-up" data-aos-delay="100">
                  <i className="bi bi-envelope"></i>
                  <div className="detail-content">
                    <span>Email</span>
                    <strong>anbuswethabarathan@gmail.com</strong>
                  </div>
                </div>

                <div className="detail-item" data-aos="fade-up" data-aos-delay="150">
                  <i className="bi bi-phone"></i>
                  <div className="detail-content">
                    <span>Phone</span>
                    <strong>+91 8610535728</strong>
                  </div>
                </div>

                <div className="detail-item" data-aos="fade-up" data-aos-delay="200">
                  <i className="bi bi-calendar-check"></i>
                  <div className="detail-content">
                    <span>Availability</span>
                    <strong>Open to Work</strong>
                  </div>
                </div>

              </div>

              {/* Skills Showcase */}
              <div className="skills-showcase" data-aos="fade-up" data-aos-delay="250">
                <div className="section-tag">Core Skills</div>
                <h3>Technical Proficiency</h3>

                <div className="skills-list skills-animation">
                  {skillsData.map((skill, idx) => (
                    <div className="skill-item" key={idx}>
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percent">{skill.percent}</span>
                      </div>
                      <div className="progress">
                        <div 
                          className="progress-bar" 
                          role="progressbar" 
                          style={{ width: skill.percent }}
                          aria-valuenow={skill.percent.replace('%', '')} 
                          aria-valuemin="0" 
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
