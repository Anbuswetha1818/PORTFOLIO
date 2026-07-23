import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        publicKey
      )
      .then(() => {
        setLoading(false);
        setStatus({ type: 'success', message: 'Your message has been sent successfully. Thank you!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.8 }
        });
      })
      .catch((error) => {
        setLoading(false);
        setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
        console.error('EmailJS error:', error);
      });
    } else {
      // Mock Fallback Simulator
      setTimeout(() => {
        setLoading(false);
        setStatus({ type: 'success', message: 'Demo Mode: Message captured successfully! Configure your EmailJS keys in .env to receive actual emails.' });
        
        console.log('--- Captured Message Details ---');
        console.log('Name:', formData.name);
        console.log('Email:', formData.email);
        console.log('Subject:', formData.subject);
        console.log('Message:', formData.message);

        setFormData({ name: '', email: '', subject: '', message: '' });

        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.8 }
        });
      }, 1200);
    }
  };

  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <span className="subtitle">Get In Touch</span>
        <h2>Contact</h2>
        <p>
          Have an open role or want to discuss a project? Drop a message below, and I will get back to you as soon as possible.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          
          {/* Left Column: Info Items */}
          <div className="col-lg-4">
            <div className="info-item">
              <div className="icon-wrapper">
                <i className="bi bi-geo-alt"></i>
              </div>
              <div>
                <h3>Location</h3>
                <p>Pudukkottai, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="info-item mt-4">
              <div className="icon-wrapper">
                <i className="bi bi-telephone"></i>
              </div>
              <div>
                <h3>Call Me</h3>
                <p>+91 8610535728</p>
              </div>
            </div>

            <div className="info-item mt-4">
              <div className="icon-wrapper">
                <i className="bi bi-envelope"></i>
              </div>
              <div>
                <h3>Email Me</h3>
                <p>
                  <a href="mailto:anbuswethabarathan@gmail.com">
                    anbuswethabarathan@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="col-lg-8">
            <form onSubmit={handleSubmit} className="php-email-form">
              <div className="row gy-4">
                
                <div className="col-md-6">
                  <input 
                    type="text" 
                    name="name" 
                    className="form-control" 
                    placeholder="Your Name" 
                    value={formData.name} 
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div className="col-md-6">
                  <input 
                    type="email" 
                    name="email" 
                    className="form-control" 
                    placeholder="Your Email" 
                    value={formData.email} 
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div className="col-md-12">
                  <input 
                    type="text" 
                    name="subject" 
                    className="form-control" 
                    placeholder="Subject" 
                    value={formData.subject} 
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div className="col-md-12">
                  <textarea 
                    name="message" 
                    className="form-control" 
                    rows="6" 
                    placeholder="Message" 
                    value={formData.message} 
                    onChange={handleChange}
                    required 
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  {/* Status Messages */}
                  {status.message && (
                    <div 
                      className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-danger'} mb-3`} 
                      style={{ 
                        background: status.type === 'success' ? '#059652' : '#df1529', 
                        color: '#ffffff',
                        border: 'none',
                        padding: '12px',
                        fontWeight: '600'
                      }}
                    >
                      {status.message}
                    </div>
                  )}

                  <button type="submit" disabled={loading} style={{ background: 'var(--accent-color)', color: '#fff', border: '0', padding: '10px 30px', transition: '0.4s', borderRadius: '50px' }}>
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>

              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
