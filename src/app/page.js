'use client';

import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useScroll } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 25, stiffness: 300 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 300 });

  useEffect(() => {
    // Dynamically import bootstrap JS on client side
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
    
    // Custom cursor tracker
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const projects = [
    {
      title: "Leevon Delivery",
      description: "A real-time food delivery ecosystem revolutionized for our native community.",
      img: "/images/leone.png",
      category: "Mobile Application"
    },
    {
      title: "Digital Restaurant Menus",
      description: "Contactless digital experiences for modern dining establishments.",
      img: "/images/menu.png",
      category: "SaaS Solution"
    },
    {
      title: "Bags Industry E-commerce",
      description: "A luxury shopping experience for high-end bag manufacturers.",
      img: "/images/bags.png",
      category: "E-commerce"
    }
  ];

  const services = [
    { icon: "bi-laptop", title: "Static Websites", desc: "Lightning fast, SEO-optimized landing pages and business sites." },
    { icon: "bi-code-slash", title: "Dynamic Web Apps", desc: "Complex functionality with real-time data handling and custom backends." },
    { icon: "bi-bicycle", title: "Scale Up Solutions", desc: "From delivery logistics to e-commerce, we scale your business." },
    { icon: "bi-piggy-bank", title: "Tailored Pricing", desc: "High-end development that respects your budget. No hidden costs." }
  ];

  return (
    <main>
      {/* Scroll Progress Indicator */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          transformOrigin: '0%',
          background: 'var(--accent-gradient)',
          zIndex: 10000,
        }}
      />
      {/* Custom Spring Cursor Tracker */}
      <motion.div
        className="custom-cursor d-none d-lg-block"
        style={{
          translateX: springX,
          translateY: springY,
        }}
      />
      
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-3 glass-card mx-md-4 mt-md-3">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3 gradient-text" href="#">DEMARTOFREE</a>
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link-custom mx-2" href="#projects">Work</a></li>
              <li className="nav-item"><a className="nav-link-custom mx-2" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link-custom mx-2" href="#about">The Trio</a></li>
              <li className="nav-item"><a className="btn-premium ms-lg-3" href="#contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-hero min-vh-100 d-flex align-items-center position-relative overflow-hidden">
        {/* Dynamic Blobs */}
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="container mt-5 position-relative" style={{ zIndex: 10 }}>
          <div className="row">
            <div className="col-lg-8">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-uppercase tracking-widest text-secondary fw-bold mb-3 d-block"
              >
                A Trio of Innovators
              </motion.span>
              <motion.h1 className="display-1 fw-bold mb-4">
                {"Crafting Digital ".split("").map((char, i) => (
                  <motion.span 
                    key={`text1-${i}`} 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.2 + i * 0.03 }}
                  >
                    {char}
                  </motion.span>
                ))}
                <motion.span 
                  initial={{ opacity: 0, scale: 0.5 }} 
                  animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }} 
                  transition={{ 
                    delay: 0.8, 
                    type: "spring", stiffness: 200,
                    y: { repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }
                  }} 
                  className="gradient-text d-inline-block"
                >Excellence</motion.span>
                {" for the Native World.".split("").map((char, i) => (
                  <motion.span 
                    key={`text2-${i}`} 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 1.2 + i * 0.03 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="lead text-secondary mb-5 fs-4"
              >
                From real-time food delivery with <span className="text-white">Leone Delivery</span> to bespoke 
                e-commerce solutions, we build platforms that perform.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="d-flex gap-3"
              >
                <a href="#projects" className="btn-premium">View Our Projects</a>
                <a href="#services" className="btn btn-outline-light rounded-pill px-4 py-3 fw-bold">Our Services</a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Tech Marquee Section */}
      <div className="marquee-container">
        <div className="marquee-content">
          <span className="marquee-item">Next.js Web Apps</span>
          <span className="marquee-item">Real-Time Logistics</span>
          <span className="marquee-item">Digital Menus</span>
          <span className="marquee-item">Luxury E-commerce</span>
          <span className="marquee-item">Data Sync</span>
          <span className="marquee-item">Bootstrap UI</span>
        </div>
        <div className="marquee-content" aria-hidden="true">
          <span className="marquee-item">Next.js Web Apps</span>
          <span className="marquee-item">Real-Time Logistics</span>
          <span className="marquee-item">Digital Menus</span>
          <span className="marquee-item">Luxury E-commerce</span>
          <span className="marquee-item">Data Sync</span>
          <span className="marquee-item">Bootstrap UI</span>
        </div>
      </div>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container">
          <motion.div {...fadeIn} className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3">Our Work</h2>
            <p className="text-secondary mx-auto" style={{maxWidth: '600px'}}>We don&apos;t just build apps, we solve problems. Check out some of our latest real-world deployments.</p>
          </motion.div>
          <div className="row g-4">
            {projects.map((project, index) => (
              <div className="col-lg-4" key={index}>
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10 }}
                  transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className="project-card glow-on-hover"
                >
                  <img src={project.img} alt={project.title} className="project-img" />
                  <div className="project-overlay">
                    <span className="badge bg-info mb-2">{project.category}</span>
                    <h3 className="h4 text-white mb-2">{project.title}</h3>
                    <p className="text-secondary small mb-0">{project.description}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-dark bg-opacity-25">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <motion.div {...fadeIn}>
                <h2 className="display-4 fw-bold mb-4">What We Do</h2>
                <p className="text-secondary mb-4">We are here to provide high-quality digital services. Whether you need a simple static site or a complex dynamic application, our team of three ensures precision and speed.</p>
                <div className="d-flex align-items-center gap-3 mb-5">
                  <div className="fs-1 gradient-text fw-bold">3+</div>
                  <div className="text-secondary">Active Real-Time<br/>Deployments</div>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-7">
              <div className="row g-4">
                {services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -10 }}
                      className="glass-card p-4 h-100 glow-on-hover"
                    >
                      <i className={`bi ${service.icon} fs-1 gradient-text mb-3 d-block`}></i>
                      <h4 className="fw-bold mb-2">{service.title}</h4>
                      <p className="text-secondary small mb-0">{service.desc}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About The Trio Section */}
      <section id="about" className="section-padding">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <motion.h2 {...fadeIn} className="display-4 fw-bold mb-4">The Trio Behind Demartofree</motion.h2>
              <motion.p {...fadeIn} className="text-secondary lead">
                We are a small, focused group of three people passionate about technology and our community. 
                Started with a vision to automate and simplify daily tasks, we launched <span className="text-white">Leone Delivery</span> 
                and continue to expand our impact across various industries.
              </motion.p>
            </div>
          </div>
          <div className="row g-5">
            {[1, 2, 3].map((num) => (
              <div className="col-lg-4" key={num}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <motion.div 
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="rounded-circle overflow-hidden mx-auto mb-4 bg-secondary bg-opacity-25 glow-on-hover" 
                    style={{width: '200px', height: '200px', border: '5px solid #222'}}
                  >
                    <div className="d-flex align-items-center justify-content-center h-100">
                       <i className="bi bi-person-fill display-1 text-secondary"></i>
                    </div>
                  </motion.div>
                  <h4 className="fw-bold mb-1">Founder {num}</h4>
                  <p className="gradient-text fw-bold">Partner & Developer</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-dark">
        <div className="container">
          <div className="glass-card p-5">
            <div className="row">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h2 className="display-5 fw-bold mb-4">Ready to build something <span className="gradient-text">amazing?</span></h2>
                <p className="text-secondary mb-5">We charge fairly—not too little, not too much. Premium service at a tailored price point.</p>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center gap-3">
                    <div className="glass-card p-3 rounded-circle"><i className="bi bi-geo-alt gradient-text"></i></div>
                    <div>
                      <p className="mb-0 fw-bold">Our Native Place</p>
                      <p className="mb-0 text-secondary">Operational Hub</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <div className="glass-card p-3 rounded-circle"><i className="bi bi-envelope gradient-text"></i></div>
                    <div>
                      <p className="mb-0 fw-bold">contact@demartofree.com</p>
                      <p className="mb-0 text-secondary">Send us an email</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <form className="row g-3">
                  <div className="col-md-6">
                    <input type="text" className="form-control bg-transparent border-secondary text-white p-3" placeholder="Your Name" />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control bg-transparent border-secondary text-white p-3" placeholder="Your Email" />
                  </div>
                  <div className="col-12">
                    <textarea className="form-control bg-transparent border-secondary text-white p-3" rows="4" placeholder="How can we help?"></textarea>
                  </div>
                  <div className="col-12 mt-4">
                    <button type="button" className="btn-premium w-100 py-3">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 text-center border-top border-secondary border-opacity-25 mt-5">
        <p className="text-secondary mb-0">© 2026 Demartofree. All Rights Reserved. Built with Precision by The Trio.</p>
      </footer>

      <style jsx>{`
        .navbar-toggler:focus {
          box-shadow: none;
        }
        .navbar-toggler-icon {
          filter: invert(1);
        }
      `}</style>
    </main>
  );
}
