import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll spy logic
      const sections = navItems.map(item => document.getElementById(item.id));
      let currentSection = 'hero';

      sections.forEach(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section.id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Synchronize mobile menu open state with body class for Craftivo styling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
    }
    return () => {
      document.body.classList.remove('mobile-nav-active');
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header id="header" className={`header fixed-top d-flex align-items-center ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        
        <a href="#hero" className="logo d-flex align-items-center me-auto" onClick={(e) => handleNavClick(e, 'hero')}>
          <h1 className="sitename">Anbu Swetha B</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            {navItems.map(item => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-nav-toggle d-xl-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ cursor: 'pointer' }}>
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </nav>

        <a 
          className="btn-getstarted text-white" 
          href="#contact" 
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Hire Me
        </a>

      </div>
    </header>
  );
};

export default Navbar;
