import React from 'react';

const Services = () => {
  const servicesList = [
    {
      icon: <i className="bi bi-laptop"></i>,
      title: 'Full Stack Development',
      desc: 'Building responsive, scalable, and secure web applications with React frontends and Django or Flask backend servers.',
      featured: true
    },
    {
      icon: <i className="bi bi-code-slash"></i>,
      title: 'Frontend React Apps',
      desc: 'Creating interactive user interfaces using modern React state management, hooks, and responsive Bootstrap layouts.',
      featured: false
    },
    {
      icon: <i className="bi bi-server"></i>,
      title: 'RESTful API Engineering',
      desc: 'Designing and integrating modular REST endpoints using Django REST Framework with secure JWT authentication policies.',
      featured: false
    },
    {
      icon: <i className="bi bi-database"></i>,
      title: 'Database Normalization',
      desc: 'Architecting relational schemas in MySQL and SQLite, normalising tables, and optimizing queries for fast performance.',
      featured: false
    },
    {
      icon: <i className="bi bi-cpu"></i>,
      title: 'Machine Learning & AI',
      desc: 'Training regression and classification models (e.g. LSTM models for load forecasting) using Scikit-learn, Pandas, and NumPy.',
      featured: false
    },
    {
      icon: <i className="bi bi-git"></i>,
      title: 'Git Version Control',
      desc: 'Managing codebase iterations with Git, maintaining branches, handling merge conflicts, and conducting code reviews on GitHub.',
      featured: false
    }
  ];

  return (
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <span className="subtitle">What I Offer</span>
        <h2>Services</h2>
        <p>
          I offer dedicated software development and engineering solutions to build high-performance web systems.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          
          {servicesList.map((service, index) => (
            <div 
              className="col-lg-4 col-md-6" 
              data-aos="zoom-in" 
              data-aos-delay={100 * (index + 1)}
              key={service.title}
            >
              <div className={`service-item ${service.featured ? 'featured' : ''}`}>
                {service.featured && <div className="featured-tag">Featured</div>}
                
                <div className="icon-wrapper">
                  {service.icon}
                </div>
                
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
                
              </div>
            </div>
          ))}

        </div>

        {/* Bottom CTA Box */}
        <div className="row mt-5">
          <div className="col-12" data-aos="fade-up" data-aos-delay="200">
            <div className="cta-box">
              <div className="row align-items-center">
                <div className="col-lg-8 text-center text-lg-start">
                  <h3>Transform Your Vision Into Reality</h3>
                  <p>Partner with me to build scalable, robust, and state-of-the-art web and AI applications tailored to your business needs.</p>
                </div>
                <div className="col-lg-4 text-center text-lg-end mt-4 mt-lg-0">
                  <a href="#contact" className="cta-btn">Start Your Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
