import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import myPhoto from './assets/me-full.png'; 

const projects = [
  { id: 1, title: "KunuLink", description: "A specialized waste management and logistics platform for efficient collection tracking.", tech: "JavaScript / Node.js", link: "https://github.com/Chanulaw/KunuLink" },
  { id: 2, title: "ChatBot", description: "An AI-driven conversational interface built to streamline automated user inquiries.", tech: "Python / NLP", link: "https://github.com/Chanulaw/ChatBot" },
  { id: 3, title: "CineMate", description: "A high-end movie discovery platform focusing on refined UI/UX and cinematic aesthetics.", tech: "HTML / CSS / JS", link: "https://github.com/Chanulaw/CineMate" },
  { id: 4, title: "AirlineTickets", description: "A robust backend system designed for managing high-concurrency flight bookings.", tech: "Java / Spring Boot", link: "https://github.com/Chanulaw/AirlineTickets" },
  { id: 5, title: "Visit-Sri-Lanka", description: "A tourism-focused application showcasing the heritage and beauty of Sri Lanka.", tech: "C / Web Fundamentals", link: "https://github.com/Chanulaw/Visit-Sri-Lanka" }
];

const awardData = {
  title: "The Duke of Edinburgh's International Award",
  standard: "Bronze Standard",
  date: "Jul 2019"
};

const engagements = [
  { year: "2024", title: "Richmond Live", detail: "Strategic media production and digital event coordination for Richmond College." },
  { year: "2023 - Present", title: "AIESEC in CINEC", detail: "Business Development Lead focusing on corporate partnerships and high-impact growth." }
];

function App() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div style={{ width: '100vw', backgroundColor: '#FCFCFC', overflowX: 'hidden', color: '#1a1a1a' }}>
      <Navbar />
      
      {/* SECTION 1: HERO */}
      <section id="home" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} style={{ zIndex: 2, textAlign: 'center' }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(3rem, 8vw, 6.5rem)', margin: 0, lineHeight: 1.1 }}>
            Chanula <br /> <span style={{ fontWeight: 700 }}>Wijayarathne</span>
          </h1>
          <p style={{ marginTop: '30px', letterSpacing: '6px', color: '#888', textTransform: 'uppercase', fontSize: '0.75rem' }}>
            Software Engineering Student @ CINEC
          </p>
        </motion.div>
        <div style={{ position: 'absolute', right: '5%', bottom: 0, height: '70vh', zIndex: 1 }}>
          <img src={myPhoto} style={{ height: '100%', opacity: 0.95, maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }} alt="Chanula" />
        </div>
      </section>

      {/* SECTION 2: ABOUT ME */}
      <section id="about" style={{ padding: '160px 10%', backgroundColor: '#1a1a1a', color: '#FFF' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '80px' }}>
          <div>
            <p style={{ letterSpacing: '4px', fontSize: '0.7rem', color: '#666', textTransform: 'uppercase', marginBottom: '20px' }}>Background / Profile</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3.5rem', fontWeight: 400, lineHeight: 1.2 }}>Architect of <br /> Digital Impact</h2>
          </div>
          <div style={{ alignSelf: 'center' }}>
            <p style={{ fontSize: '1.4rem', lineHeight: '1.8', color: '#BBB', fontWeight: 300 }}>
              I am a Software Engineering student at **CINEC** with a passion for building scalable, high-impact systems. As the **Business Development Lead at AIESEC in CINEC**, I bridge technical execution with professional strategy.
            </p>
            <div style={{ display: 'flex', gap: '40px', marginTop: '50px' }}>
              <div>
                <p style={{ fontSize: '0.7rem', color: '#666', letterSpacing: '2px', textTransform: 'uppercase' }}>Focus</p>
                <p style={{ marginTop: '10px', fontSize: '1rem' }}>Web Systems & Security</p>
              </div>
              <div>
                <p style={{ fontSize: '0.7rem', color: '#666', letterSpacing: '2px', textTransform: 'uppercase' }}>Current Role</p>
                <p style={{ marginTop: '10px', fontSize: '1rem' }}>AIESEC BD Lead @ CINEC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: RECOGNITION */}
      <section id="recognition" style={{ padding: '120px 10%', backgroundColor: '#F9F9F9', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', marginBottom: '40px' }}>
          <div onClick={() => toggleSection('awards')} style={{ cursor: 'pointer' }}>
            <p style={{ letterSpacing: '4px', fontSize: '0.65rem', color: '#AAA', textTransform: 'uppercase' }}>Distinction</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', borderBottom: activeSection === 'awards' ? '2px solid #1a1a1a' : '2px solid transparent' }}>Awards +</h2>
          </div>
          <div onClick={() => toggleSection('engagements')} style={{ cursor: 'pointer' }}>
            <p style={{ letterSpacing: '4px', fontSize: '0.65rem', color: '#AAA', textTransform: 'uppercase' }}>Professional</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', borderBottom: activeSection === 'engagements' ? '2px solid #1a1a1a' : '2px solid transparent' }}>Engagements +</h2>
          </div>
        </div>
        <AnimatePresence mode="wait">
          {activeSection === 'awards' && (
            <motion.div key="awards" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} style={{ maxWidth: '700px', margin: '40px auto', textAlign: 'left', padding: '40px', backgroundColor: '#FFF', border: '1px solid #EEE' }}>
              <span style={{ color: '#AAA', fontSize: '0.8rem' }}>{awardData.date}</span>
              <h3 style={{ fontSize: '1.8rem', marginTop: '10px' }}>{awardData.title}</h3>
              <p style={{ fontStyle: 'italic', color: '#666', fontSize: '1.1rem' }}>{awardData.standard}</p>
            </motion.div>
          )}
          {activeSection === 'engagements' && (
            <motion.div key="engagements" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} style={{ maxWidth: '800px', margin: '40px auto', textAlign: 'left' }}>
              {engagements.map((item, i) => (
                <div key={i} style={{ display: 'flex', padding: '30px 0', borderBottom: '1px solid #EEE' }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', width: '120px', color: '#999' }}>{item.year}</span>
                  <div style={{ paddingLeft: '40px' }}>
                    <h4 style={{ fontSize: '1.6rem', fontWeight: 600 }}>{item.title}</h4>
                    <p style={{ color: '#666', marginTop: '5px' }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* SECTION 4: PROJECTS */}
      <section id="projects" style={{ padding: '160px 10%', backgroundColor: '#FFFFFF' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <p style={{ letterSpacing: '5px', fontSize: '0.7rem', color: '#AAA', textTransform: 'uppercase' }}>Selected Works</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '4rem' }}>Portfolio</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px' }}>
          {projects.map((p, i) => (
            <motion.div key={p.id} whileHover={{ y: -10 }} style={{ padding: '60px 40px', backgroundColor: '#FBFBFB', border: '1px solid #F2F2F2' }}>
              <span style={{ fontSize: '0.7rem', color: '#DDD' }}>0{i + 1} /</span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.2rem', margin: '20px 0' }}>{p.title}</h3>
              <p style={{ color: '#777', lineHeight: '1.7', marginBottom: '30px' }}>{p.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.7rem', color: '#999', textTransform: 'uppercase' }}>{p.tech}</span>
                <a href={p.link} target="_blank" rel="noreferrer" style={{ fontWeight: 700, textDecoration: 'none', borderBottom: '2px solid #1a1a1a', paddingBottom: '5px', fontSize: '0.8rem' }}>VIEW REPO</a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 5: CONTACT */}
      <section id="contact" style={{ padding: '120px 10%', backgroundColor: '#F9F9F9' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
          <div>
            <p style={{ letterSpacing: '4px', fontSize: '0.7rem', color: '#AAA', textTransform: 'uppercase', marginBottom: '20px' }}>Connect</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3.5rem', fontWeight: 400 }}>Get in Touch</h2>
            <p style={{ marginTop: '30px', color: '#666', maxWidth: '400px' }}>
              Currently based in **Thotagamuwa, Hikkaduwa**. Open to collaborations regarding software development and business strategy.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div>
              <p style={{ fontSize: '0.65rem', color: '#AAA', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>Contact</p>
              <p style={{ fontSize: '1rem', marginBottom: '5px' }}>WhatsApp: 0762732827</p>
              <a href="mailto:chanulawijayarathne@gmail.com" style={{ color: '#1a1a1a', textDecoration: 'none', borderBottom: '1px solid #CCC' }}>Email Me</a>
            </div>
            <div>
              <p style={{ fontSize: '0.65rem', color: '#AAA', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>Professional</p>
              <a href="https://linkedin.com/in/chanula-wijayarathne" target="_blank" rel="noreferrer" style={{ display: 'block', color: '#1a1a1a', textDecoration: 'none', marginBottom: '5px' }}>LinkedIn</a>
              <a href="https://facebook.com/chanula.wijayarathne" target="_blank" rel="noreferrer" style={{ display: 'block', color: '#1a1a1a', textDecoration: 'none' }}>Facebook</a>
            </div>
            <div>
              <p style={{ fontSize: '0.65rem', color: '#AAA', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>Social</p>
              <a href="https://instagram.com/chanuu.w" target="_blank" rel="noreferrer" style={{ color: '#1a1a1a', textDecoration: 'none' }}>Instagram</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '80px 10%', textAlign: 'center', backgroundColor: '#1a1a1a', color: '#444' }}>
        <p style={{ letterSpacing: '4px', fontSize: '0.65rem', textTransform: 'uppercase' }}>
          Chanula Wijayarathne © 2026 | Architect of Impact
        </p>
      </footer>
    </div>
  );
}

export default App;