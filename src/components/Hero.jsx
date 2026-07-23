import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import heroBg from '../assets/hero_bg.png';

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    // Clear inner HTML to prevent duplicate appends in React Strict Mode double-render
    if (el.current) {
      el.current.innerHTML = '';
    }

    // Typed text animation
    const typed = new Typed(el.current, {
      strings: [
        'Full Stack Developer',
        'Python Developer',
        'Software Engineer'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="hero section">
      <div className="blur-circle-1" />
      <div className="blur-circle-2" />
      <img src={heroBg} alt="Tech Background" data-aos="fade-in" style={{ opacity: 0.06 }} />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2>Hi, I'm Anbu Swetha</h2>
            <p>I'm a <span ref={el} className="typed"></span></p>
            <div className="social-links">
              <a href="https://github.com/Anbuswetha1818" target="_blank" rel="noopener noreferrer" title="GitHub Profile">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://linkedin.com/in/anbuswetha" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="mailto:anbuswethabarathan@gmail.com" title="Email Me">
                <i className="bi bi-envelope"></i>
              </a>
              <a href="tel:+918610535728" title="Call Me">
                <i className="bi bi-telephone"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
