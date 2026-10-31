import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="footer" className="footer">
      <div className="container footer-top">
        <div className="row gy-4">
          
          {/* Column 1: About */}
          <div className="col-lg-5 col-md-12 footer-about">
            <a href="#hero" className="logo d-flex align-items-center" onClick={scrollToTop}>
              <span className="sitename">Anbu Swetha B</span>
            </a>
            <p>
              Motivated Full Stack Developer with industry experience building web applications using Python, React, Next.js, Node.js, and REST APIs. Experienced in scalable backends and modern frontend architectures.
            </p>
            <div className="social-links d-flex mt-4">
              <a href="https://github.com/Anbuswetha1818" target="_blank" rel="noopener noreferrer" title="GitHub">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://linkedin.com/in/anbuswetha" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="mailto:anbuswethabarathan@gmail.com" title="Email">
                <i className="bi bi-envelope"></i>
              </a>
              <a href="tel:+918610535728" title="Call">
                <i className="bi bi-telephone"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#hero" onClick={(e) => handleLinkClick(e, 'hero')}>Home</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About</a></li>
              <li><a href="#resume" onClick={(e) => handleLinkClick(e, 'resume')}>Resume</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>Services</a></li>
              <li><a href="#portfolio" onClick={(e) => handleLinkClick(e, 'portfolio')}>Portfolio</a></li>
            </ul>
          </div>

          {/* Column 3: Tech Stack Links */}
          <div className="col-lg-2 col-6 footer-links">
            <h4>Tech Stack</h4>
            <ul>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>React & Next.js</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>Node & Express</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>Python & Django</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>MySQL & Postgres</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>Machine Learning</a></li>
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div className="col-lg-3 col-md-12 footer-contact text-start">
            <h4>Contact Details</h4>
            <p>Pudukkottai, Tamil Nadu, India</p>
            <p className="mt-4"><strong>Phone:</strong> <span>+91 8610535728</span></p>
            <p><strong>Email:</strong> <span>anbuswethabarathan@gmail.com</span></p>
          </div>

        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>© <span>Copyright</span> <strong className="px-1 sitename" style={{ fontSize: '15px' }}>Anbu Swetha B</strong> <span>All Rights Reserved</span></p>
      </div>

      {/* Floating Scroll to Top button */}
      <a 
        href="#" 
        className={`scroll-top d-flex align-items-center justify-content-center ${showScroll ? 'active' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </footer>
  );
};

export default Footer;
