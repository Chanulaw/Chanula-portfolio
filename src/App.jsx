import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import myPhoto from './assets/me-full.png';

const projects = [
  { id: 1, title: "KunuLink", description: "A specialized waste management and logistics platform for efficient collection tracking.", tech: "JavaScript / Node.js", link: "https://github.com/Chanulaw/KunuLink", liveLink: "https://kunulink.vercel.app" },
  { id: 2, title: "ChatBot", description: "An AI-driven conversational interface built to streamline automated user inquiries.", tech: "Python / NLP", link: "https://github.com/Chanulaw/ChatBot", liveLink: "https://chatbot-chanulaw.vercel.app" },
  { id: 3, title: "CineMax", description: "A high-end movie discovery platform focusing on refined UI/UX and cinematic aesthetics.", tech: "CSS / HTML / JS", link: "https://github.com/Chanulaw/CineMax", liveLink: "https://cinemax-chanulaw.vercel.app" },
  { id: 4, title: "AirlineTickets", description: "A robust backend system designed for managing high-concurrency flight bookings.", tech: "Java / Spring Boot", link: "https://github.com/Chanulaw/AirlineTickets", liveLink: "https://airlinetickets-chanulaw.vercel.app" },
  { id: 5, title: "Visit-Sri-Lanka", description: "A tourism-focused application showcasing the heritage and beauty of Sri Lanka.", tech: "C / Web Fundamentals", link: "https://github.com/Chanulaw/Visit-Sri-Lanka", liveLink: "https://visit-sri-lanka.vercel.app" },
  { id: 6, title: "OcpApplication", description: "An open web application platform built with custom HTML and modular web styling.", tech: "HTML / Web", link: "https://github.com/Chanulaw/OcpApplication", liveLink: "https://ocpapplication.vercel.app" }
];

const awardData = {
  title: "The Duke of Edinburgh's International Award",
  standard: "Bronze Standard",
  date: "Jul 2019"
};

const engagements = [
  { year: "2019-Present", title: "Richmond Live", detail: "Strategic media production and digital event coordination for Richmond College." },
  { year: "2026- Present", title: "AIESEC in CINEC", detail: "Business Development vice president focusing on corporate partnerships and high-impact growth." }
];

function App() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="app-container">
      <Navbar />

      {/* SECTION 1: HERO */}
      <section id="home" className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ zIndex: 2, textAlign: 'center' }}
        >
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.8rem, 8vw, 6.5rem)', margin: 0, lineHeight: 1.1 }}>
            Chanula <br /> <span style={{ fontWeight: 700 }}>Wijayarathne</span>
          </h1>
          <p style={{ marginTop: '24px', letterSpacing: '4px', color: '#888', textTransform: 'uppercase', fontSize: 'clamp(0.7rem, 2vw, 0.75rem)' }}>
            Software Engineering Student at CINEC
          </p>
        </motion.div>
        <div className="hero-photo-wrapper">
          <img src={myPhoto} className="hero-photo" alt="Chanula" />
        </div>
      </section>

      {/* SECTION 2: ABOUT ME */}
      <section id="about" className="section-padding-dark">
        <div className="grid-about">
          <div>
            <p style={{ letterSpacing: '4px', fontSize: '0.7rem', color: '#666', textTransform: 'uppercase', marginBottom: '20px' }}>Background / Profile</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 400, lineHeight: 1.2 }}>
              Architect of <br /> Digital Impact
            </h2>
          </div>
          <div style={{ alignSelf: 'center' }}>
            <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', lineHeight: '1.8', color: '#BBB', fontWeight: 300 }}>
              I am a Software Engineering student at CINEC with a passion for building scalable, high-impact systems. As the Business Development vice president at AIESEC in CINEC, I bridge technical execution with professional strategy.
            </p>
            <div style={{ display: 'flex', gap: '30px', marginTop: '40px', flexWrap: 'wrap' }}>
              <div>
                <p style={{ fontSize: '0.7rem', color: '#666', letterSpacing: '2px', textTransform: 'uppercase' }}>Focus</p>
                <p style={{ marginTop: '8px', fontSize: '1rem' }}>Web Systems & Security</p>
              </div>
              <div>
                <p style={{ fontSize: '0.7rem', color: '#666', letterSpacing: '2px', textTransform: 'uppercase' }}>Current Role</p>
                <p style={{ marginTop: '8px', fontSize: '1rem' }}>AIESEC BD vice president at CINEC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: RECOGNITION */}
      <section id="recognition" className="section-padding-alt" style={{ textAlign: 'center' }}>
        <div className="recognition-header">
          <div onClick={() => toggleSection('awards')} style={{ cursor: 'pointer' }}>
            <p style={{ letterSpacing: '4px', fontSize: '0.65rem', color: '#AAA', textTransform: 'uppercase' }}>Distinction</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', borderBottom: activeSection === 'awards' ? '2px solid #1a1a1a' : '2px solid transparent' }}>Awards +</h2>
          </div>
          <div onClick={() => toggleSection('engagements')} style={{ cursor: 'pointer' }}>
            <p style={{ letterSpacing: '4px', fontSize: '0.65rem', color: '#AAA', textTransform: 'uppercase' }}>Professional</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', borderBottom: activeSection === 'engagements' ? '2px solid #1a1a1a' : '2px solid transparent' }}>Engagements +</h2>
          </div>
        </div>
        <AnimatePresence mode="wait">
          {activeSection === 'awards' && (
            <motion.div key="awards" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} style={{ maxWidth: '700px', margin: '30px auto 0', textAlign: 'left', padding: '30px 24px', backgroundColor: '#FFF', border: '1px solid #EEE' }}>
              <span style={{ color: '#AAA', fontSize: '0.8rem' }}>{awardData.date}</span>
              <h3 style={{ fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', marginTop: '10px' }}>{awardData.title}</h3>
              <p style={{ fontStyle: 'italic', color: '#666', fontSize: '1rem', marginTop: '5px' }}>{awardData.standard}</p>
            </motion.div>
          )}
          {activeSection === 'engagements' && (
            <motion.div key="engagements" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} style={{ maxWidth: '800px', margin: '30px auto 0', textAlign: 'left' }}>
              {engagements.map((item, i) => (
                <div key={i} className="engagement-row">
                  <span className="engagement-year" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', width: '120px', color: '#999' }}>{item.year}</span>
                  <div className="engagement-content" style={{ paddingLeft: '40px' }}>
                    <h4 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', fontWeight: 600 }}>{item.title}</h4>
                    <p style={{ color: '#666', marginTop: '5px', lineHeight: '1.6' }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* SECTION 4: PROJECTS */}
      <section id="projects" className="section-padding">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p style={{ letterSpacing: '5px', fontSize: '0.7rem', color: '#AAA', textTransform: 'uppercase' }}>Selected Works</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>Portfolio</h2>
        </div>
        <div className="grid-projects">
          {projects.map((p, i) => (
            <motion.div key={p.id} whileHover={{ y: -6 }} className="project-card">
              <span style={{ fontSize: '0.7rem', color: '#DDD' }}>0{i + 1} /</span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', margin: '16px 0' }}>{p.title}</h3>
              <p style={{ color: '#777', lineHeight: '1.7', marginBottom: '24px', fontSize: '0.95rem' }}>{p.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginTop: '16px' }}>
                <span style={{ fontSize: '0.7rem', color: '#999', textTransform: 'uppercase' }}>{p.tech}</span>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                  {p.liveLink && (
                    <a href={p.liveLink} target="_blank" rel="noreferrer" style={{ fontWeight: 700, textDecoration: 'none', borderBottom: '2px solid #1a1a1a', paddingBottom: '3px', fontSize: '0.8rem', color: '#1a1a1a' }}>LIVE DEMO ↗</a>
                  )}
                  <a href={p.link} target="_blank" rel="noreferrer" style={{ fontWeight: 700, textDecoration: 'none', borderBottom: '2px solid #666', paddingBottom: '3px', fontSize: '0.8rem', color: '#666' }}>VIEW REPO</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 5: CONTACT */}
      <section id="contact" className="section-padding-alt">
        <div className="grid-contact">
          <div>
            <p style={{ letterSpacing: '4px', fontSize: '0.7rem', color: '#AAA', textTransform: 'uppercase', marginBottom: '20px' }}>Connect</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 400 }}>Get in Touch</h2>
            <p style={{ marginTop: '24px', color: '#666', maxWidth: '400px', lineHeight: '1.7' }}>
              Currently based in Malabe,Sri Lanka. Open to collaborations regarding software development and business strategy.
            </p>
          </div>

          <div className="grid-contact-links">
            <div>
              <p style={{ fontSize: '0.65rem', color: '#AAA', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>Contact</p>
              <p style={{ fontSize: '0.95rem', marginBottom: '8px' }}>WhatsApp: 0762732827</p>
              <a href="mailto:chanulawijayarathne@gmail.com" style={{ color: '#1a1a1a', textDecoration: 'none', borderBottom: '1px solid #CCC', fontSize: '0.95rem' }}>Email Me</a>
            </div>
            <div>
              <p style={{ fontSize: '0.65rem', color: '#AAA', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>Professional</p>
              <a href="https://github.com/Chanulaw" target="_blank" rel="noreferrer" style={{ display: 'block', color: '#1a1a1a', textDecoration: 'none', marginBottom: '8px', fontSize: '0.95rem' }}>GitHub</a>
              <a href="https://linkedin.com/in/chanula-wijayarathne" target="_blank" rel="noreferrer" style={{ display: 'block', color: '#1a1a1a', textDecoration: 'none', marginBottom: '8px', fontSize: '0.95rem' }}>LinkedIn</a>
              <a href="https://facebook.com/chanula.wijayarathne" target="_blank" rel="noreferrer" style={{ display: 'block', color: '#1a1a1a', textDecoration: 'none', fontSize: '0.95rem' }}>Facebook</a>
            </div>
            <div>
              <p style={{ fontSize: '0.65rem', color: '#AAA', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>Social</p>
              <a href="https://instagram.com/chanuu.w" target="_blank" rel="noreferrer" style={{ color: '#1a1a1a', textDecoration: 'none', fontSize: '0.95rem' }}>Instagram</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '60px 5%', textAlign: 'center', backgroundColor: '#1a1a1a', color: '#777' }}>
        <p style={{ letterSpacing: '3px', fontSize: '0.65rem', textTransform: 'uppercase' }}>
          Chanula Wijayarathne © 2026 | Architect of Impact
        </p>
      </footer>
    </div>
  );
}

export default App;