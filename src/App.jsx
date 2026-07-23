import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

// Animation & CSS styling imports
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

// Section components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Services from './components/Services';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    // Initialize AOS scroll animations
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      delay: 50
    });

    // Mouse glow coordinate tracker
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Premium ambient cursor trail */}
      <div className="mouse-glow" />
      
      {/* Application structure */}
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Services />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />

      {/* Floating Theme Toggle Switch (Bottom-Left Corner) */}
      <div className="theme-switch-floating" style={{
        position: 'fixed',
        bottom: '25px',
        left: '25px',
        zIndex: 9999,
        background: 'var(--surface-color)',
        border: '1px solid color-mix(in srgb, var(--default-color), transparent 85%)',
        borderRadius: '50px',
        padding: '6px 10px',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        backdropFilter: 'blur(8px)',
        transition: 'all 0.3s ease'
      }}>
        <label className="theme-switch" title="Toggle Light/Dark Theme" style={{ display: 'inline-block', height: '26px', position: 'relative', width: '50px', margin: 0 }}>
          <input 
            type="checkbox" 
            checked={theme === 'dark'} 
            onChange={toggleTheme} 
            style={{ display: 'none' }}
          />
          <span className="theme-slider">
            <span className="theme-slider-knob">
              {theme === 'dark' ? <FaMoon size={11} /> : <FaSun size={11} />}
            </span>
          </span>
        </label>
      </div>
    </>
  );
}

export default App;
