import React from 'react';

const Certifications = () => {
  const certificationsData = [
    {
      title: 'Full Stack Development',
      issuer: 'Pantech.AI',
      date: '2026',
      icon: 'bi-window-stack',
      description: 'Comprehensive certification program covering end-to-end full stack development technologies, database design, and API integration workflows.'
    },
    {
      title: 'Infosys Python Certificate',
      issuer: 'Infosys',
      date: '2025',
      icon: 'bi-code-square',
      description: 'Industry-standard certification program focusing on core Python, data structures, algorithms, and modular object-oriented software engineering.'
    },
    {
      title: 'Python Intern Letter',
      issuer: 'NextGen Solutions',
      date: '2025',
      icon: 'bi-journal-check',
      description: 'Validation of practical experience in Python OOP application building, GUI modules, and relational database systems (MySQL) optimization.'
    },
    {
      title: 'Certificate on Power BI',
      issuer: 'KenStack Technologies',
      date: '2025',
      icon: 'bi-bar-chart-line',
      description: 'Professional training credential in data modeling, business intelligence pipelines, visual dashboards, and analytics reports.'
    },
    {
      title: 'Certificate on Data Science with AI',
      issuer: 'Elysium Academy',
      date: '2025',
      icon: 'bi-cpu-fill',
      description: 'Advanced credential validating expertise in machine learning regression, classification architectures, data manipulation, and analytics integrations.'
    }
  ];

  return (
    <section id="certifications" className="certifications section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <span className="subtitle">Credentials</span>
        <h2>Certifications</h2>
        <p>
          Professional credentials, industry certifications, and internship qualifications I have earned.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          {certificationsData.map((cert, index) => (
            <div 
              className="col-lg-4 col-md-6" 
              data-aos="zoom-in" 
              data-aos-delay={100 * (index + 1)}
              key={cert.title}
            >
              <div className="cert-card">
                <div className="cert-header">
                  <div className="cert-icon-box">
                    <i className={`bi ${cert.icon}`}></i>
                  </div>
                  <span className="cert-date">{cert.date}</span>
                </div>
                
                <div className="cert-body">
                  <h4>{cert.title}</h4>
                  <span className="cert-issuer">{cert.issuer}</span>
                  <p>{cert.description}</p>
                </div>

                <div className="cert-footer">
                  <a 
                    href="https://www.linkedin.com/in/anbuswetha/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cert-link"
                  >
                    <i className="bi bi-linkedin me-2"></i> Verify Credential
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="400">
          <p className="text-muted mb-3">All credentials are fully detailed on my professional network profile.</p>
          <a 
            href="https://www.linkedin.com/in/anbuswetha/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-getstarted text-white py-2.5 px-4" 
            style={{ borderRadius: '50px', background: 'var(--accent-color)', fontSize: '14px', fontWeight: '600', display: 'inline-block', textDecoration: 'none' }}
          >
            <i className="bi bi-linkedin me-2"></i> View LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
