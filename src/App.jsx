import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import myPhoto from './assets/me-full.png';
import { projects } from './data.js';
import noveraStageImage from './assets/novera-event-stage.jpg';
import noveraAwardImage from './assets/novera-event-award.jpg';
import noveraOpeningImage from './assets/novera-event-opening.jpg';
import ieeeInterviewImage from './assets/ieee-xtreme-interview.jpg';
import ieeeTeamImage from './assets/ieee-xtreme-team.jpg';
import ieeeMediaImage from './assets/ieee-xtreme-media.jpg';
import ieeeLeadershipImage from './assets/ieee-xtreme-leadership.jpg';
import ieeeCompetitionImage from './assets/ieee-xtreme-competition.jpg';

const awardData = {
  title: "The Duke of Edinburgh's International Award",
  standard: "Bronze Standard",
  date: "Jul 2019"
};

const engagements = [
  { year: "2019-Present", title: "Richmond Live", detail: "Strategic media production and digital event coordination for Richmond College." },
  { year: "2026-Present", title: "AIESEC in CINEC", detail: "Business Development vice president focusing on corporate partnerships and high-impact growth." }
];

const leadershipEvents = [
  {
    role: 'Event Manager',
    title: "Novera '26",
    detail: "An AIESEC in CINEC event featuring a fashion show and workshop.",
    images: [
      { src: noveraStageImage, alt: "Novera event stage", objectPosition: 'center center' },
      { src: noveraAwardImage, alt: "Novera event recognition on stage", objectPosition: 'center 18%' },
      { src: noveraOpeningImage, alt: "Opening ceremony at Novera" },
    ],
    photoLinks: [
      { label: 'Facebook post', href: 'https://www.facebook.com/share/p/1A7XjeWMaf/?mibextid=wwXIfr' },
      { label: 'Facebook post', href: 'https://web.facebook.com/share/p/1UhVNhqci2/' },
      { label: 'Facebook post', href: 'https://web.facebook.com/share/p/1FjnE2TV8t/' },
    ],
    videos: [
      { label: 'Novera video 1', href: 'https://web.facebook.com/share/r/1CHwVQPiQf/' },
      { label: 'Novera video 2', href: 'https://web.facebook.com/reel/1483973750298472/' },
      { label: 'Novera video 3', href: 'https://web.facebook.com/share/r/14wHy4rMWkE/' },
      { label: 'Novera video 4', href: 'https://web.facebook.com/reel/3271665519690753/' },
      { label: 'Novera video 5', href: 'https://web.facebook.com/reel/3373415939524797/' },
    ],
  },
  {
    role: 'Program Leader',
    title: 'IEEE Xtreme 20.0',
    detail: 'Program Leader for the IEEE Student Branch at CINEC.',
    images: [
      { src: ieeeInterviewImage, alt: "Program leader speaking at IEEE Xtreme" },
      { src: ieeeTeamImage, alt: "IEEE Xtreme team reviewing event details" },
      { src: ieeeMediaImage, alt: "IEEE Xtreme event media coverage" },
      { src: ieeeLeadershipImage, alt: "IEEE Xtreme program leader with team members" },
      { src: ieeeCompetitionImage, alt: "Participants taking part in IEEE Xtreme" },
    ],
    links: [
      { label: 'LinkedIn post', href: 'https://www.linkedin.com/posts/chanula-wijayarathne_ieeextreme-ieeextreme24-competitiveprogramming-activity-7526235814687686656-r5KT?utm_medium=ios_app&rcm=ACoAAEufka4BkUPcuhObaLOYUApGZnS8vqKN1V4&utm_source=social_share_send&utm_campaign=copy_link' },
    ],
    videos: [
      { label: 'Facebook video', href: 'https://www.facebook.com/share/v/1DMjeTkXZ2/?mibextid=wwXIfr' },
    ],
  },
];

const skills = [
  { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
  { name: "React", icon: "https://skillicons.dev/icons?i=react" },
  { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
  { name: "Java", icon: "https://skillicons.dev/icons?i=java" },
  { name: "Spring Boot", icon: "https://skillicons.dev/icons?i=spring" },
  { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
  { name: "HTML5", icon: "https://skillicons.dev/icons?i=html" },
  { name: "CSS3", icon: "https://skillicons.dev/icons?i=css" },
  { name: "Figma", icon: "https://skillicons.dev/icons?i=figma" },
  { name: "C++", icon: "https://skillicons.dev/icons?i=cpp" },
  { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
  { name: "Git", icon: "https://skillicons.dev/icons?i=git" }
];

const profileModes = {
  engineering: {
    label: 'Engineering',
    title: 'Software Engineer',
    subtitle: 'Software Engineering Student at CINEC | Building reliable digital systems',
    aboutLabel: 'Engineering Profile',
    aboutTitle: 'Building systems that solve real problems',
    aboutText: 'I design and build practical software systems across web, mobile, backend and AI. I focus on clean implementation, scalable architecture and solutions that work for real users.',
    focus: 'Web Systems, Backend & AI',
    currentRole: 'Software Engineering Student at CINEC',
    projectIds: [12, 1, 4, 9, 3, 11, 10, 5, 6, 7, 2],
  },
  combined: {
    label: 'Combined',
    title: 'Engineer + Builder',
    subtitle: 'Software Engineering Student at CINEC | Business Development VP at AIESEC in CINEC',
    aboutLabel: 'Background / Profile',
    aboutTitle: 'Architect of Digital Impact',
    aboutText: 'I am a Software Engineering student at CINEC with a passion for building scalable, high-impact systems. As the Business Development vice president at AIESEC in CINEC, I bridge technical execution with professional strategy and take on event and program leadership roles.',
    focus: 'Web Systems & Security',
    currentRole: 'AIESEC BD VP · Event & Program Leader',
    projectIds: [12, 11, 9, 1, 10, 4, 3, 7, 6, 5, 2],
  },
  business: {
    label: 'Business',
    title: 'Business Builder',
    subtitle: 'Business Development VP at AIESEC in CINEC | Partnerships, campaigns & growth',
    aboutLabel: 'Leadership Profile',
    aboutTitle: 'Turning strategy into measurable impact',
    aboutText: "I connect ideas, teams and organisations to create meaningful outcomes. As an Event Manager, I organized Novera '26, an AIESEC in CINEC fashion show and workshop. I also served as Program Leader for IEEE Xtreme 20.0 at the IEEE Student Branch, CINEC.",
    focus: 'Business Development & Partnerships',
    currentRole: "Event Manager · Program Leader",
    projectIds: [11, 9, 10, 12, 1, 7, 6, 3, 5, 4, 2],
  },
};

const profileProjectDescriptions = {
  engineering: {
    12: 'A Flutter and Dart platform that helps users locate essential medicines across hospitals and pharmacies.',
    11: 'A JavaScript campaign tracker with member profiles, points and department leaderboards.',
    1: 'A JavaScript and Node.js waste logistics platform for efficient collection and tracking workflows.',
  },
  business: {
    9: 'A focused event website created to support communication, promotion and the audience experience for Novera.',
    11: 'A campaign platform that improves performance visibility, team motivation and department competition.',
    10: 'A peer knowledge marketplace designed to make sharing and discovering student-created notes easier.',
  },
};

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12.04 2C6.58 2 2.13 6.44 2.13 11.9c0 1.74.46 3.42 1.34 4.91L2 22l5.36-1.42A9.9 9.9 0 0 0 12.04 21c5.46 0 9.9-4.44 9.9-9.9S17.5 2 12.04 2Zm5.13 13.57c-.22.62-1.27 1.17-1.74 1.24-.46.07-1.04.1-3.34-.71-2.82-1.05-4.64-3.82-4.78-4-.14-.17-1.15-1.53-1.15-2.91 0-1.38.72-2.06 1-2.34.25-.27.56-.34.75-.34h.53c.18 0 .42.01.66.5.27.56.9 1.98.98 2.12.09.15.14.33.02.54-.12.2-.18.33-.36.52-.17.19-.35.43-.5.59-.17.17-.35.36-.15.7.2.35.9 1.48 1.93 2.39 1.33 1.18 2.45 1.55 2.8 1.72.35.17.56.15.76-.1.2-.24.87-1 .98-1.35.12-.34.25-.29.53-.17.28.12 1.77.84 2.08.99.31.16.52.23.6.36.08.12.08.67-.14 1.3Z" fill="currentColor"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.8 1.4 3.5 1 .1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.4-5.5-6.1 0-1.3.5-2.5 1.2-3.4-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.8.9 1.2 2.1 1.2 3.4 0 4.7-2.8 5.8-5.5 6.1.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z" fill="currentColor"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M6.94 8.2A1.75 1.75 0 1 1 6.94 4.7a1.75 1.75 0 0 1 0 3.5ZM5.5 9.8h2.9v9.7H5.5V9.8Zm4.58 0h2.77v1.33h.04c.39-.73 1.33-1.5 2.74-1.5 2.93 0 3.47 1.93 3.47 4.43V19.5h-2.9v-18.2c0-1.4-.03-3.2-1.96-3.2-1.96 0-2.26 1.53-2.26 3.12v18.3H10.08V9.8Z" fill="currentColor"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V7.4c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7v3.1h3.1v8h3.4Z" fill="currentColor"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7.6 2.5h8.8A5.1 5.1 0 0 1 21.5 7.6v8.8A5.1 5.1 0 0 1 16.4 21.5H7.6A5.1 5.1 0 0 1 2.5 16.4V7.6A5.1 5.1 0 0 1 7.6 2.5Zm0 1.8A3.3 3.3 0 0 0 4.3 7.6v8.8a3.3 3.3 0 0 0 3.3 3.3h8.8a3.3 3.3 0 0 0 3.3-3.3V7.6a3.3 3.3 0 0 0-3.3-3.3H7.6Zm9.7 1.4a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 6.8a5.2 5.2 0 1 1 0 10.4 5.2 5.2 0 0 1 0-10.4Zm0 1.8A3.4 3.4 0 1 0 12 17.4a3.4 3.4 0 0 0 0-6.8Z" fill="currentColor"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5v-11Zm2.2-.2 6.8 5.7 6.8-5.7H5.2Zm14.3 1.7-7.2 5.9a1.2 1.2 0 0 1-1.4 0L4.5 8v9.5c0 .3.2.5.5.5h13c.3 0 .5-.2.5-.5V8Z" fill="currentColor"/>
    </svg>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [activeEventMedia, setActiveEventMedia] = useState({});
  const [profileMode, setProfileMode] = useState(() => {
    const urlMode = new URLSearchParams(window.location.search).get('view');
    if (urlMode && profileModes[urlMode]) return urlMode;
    const savedMode = window.localStorage.getItem('portfolio-profile');
    return profileModes[savedMode] ? savedMode : 'combined';
  });

  useEffect(() => {
    window.localStorage.setItem('portfolio-profile', profileMode);
    const url = new URL(window.location.href);
    url.searchParams.set('view', profileMode);
    window.history.replaceState({}, '', url);
  }, [profileMode]);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const activeProfile = profileModes[profileMode];
  const orderedProjects = [...projects].sort((a, b) => {
    const aIndex = activeProfile.projectIds.indexOf(a.id);
    const bIndex = activeProfile.projectIds.indexOf(b.id);
    return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
  });

  return (
    <div className="app-container">
      <Navbar />

      {/* SECTION 1: HERO */}
      <section id="home" className="hero-section">
        {/* Background Watermark Text */}
        <div className="hero-watermark">CREATIVE</div>

        {/* Hero Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hero-content"
        >
          <h1 className="hero-title">
            Chanula <br />
            <span className="hero-title-accent">Wijayarathne</span>
          </h1>

          <AnimatePresence mode="wait">
            <motion.p
              key={profileMode}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="hero-subtitle"
            >
              {activeProfile.subtitle}
            </motion.p>
          </AnimatePresence>

          <div className="profile-switcher" role="group" aria-label="Choose portfolio profile">
            {Object.entries(profileModes).map(([mode, content]) => (
              <button
                key={mode}
                type="button"
                className={`profile-switcher-button${profileMode === mode ? ' active' : ''}`}
                aria-pressed={profileMode === mode}
                onClick={() => setProfileMode(mode)}
              >
                {content.label}
              </button>
            ))}
          </div>

          <div className="hero-cta-group">
            <a href="#projects" className="btn-primary">
              View Projects ↓
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch ✉
            </a>
          </div>
        </motion.div>

        {/* Hero Right Photo & Interactive Badges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="hero-photo-wrapper"
        >
          <div className="hero-photo-container">
            <img src={myPhoto} className="hero-photo" alt="Chanula Wijayarathne" />
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <a href="#about" className="hero-scroll-indicator">
          <span>SCROLL</span>
          <span style={{ fontSize: '0.9rem' }}>↓</span>
        </a>
      </section>

      {/* SECTION 2: ABOUT ME */}
      <section id="about" className="section-padding-dark">
        <motion.div className="grid-about" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}>
          <div>
            <p style={{ letterSpacing: '4px', fontSize: '0.7rem', color: '#666', textTransform: 'uppercase', marginBottom: '20px' }}>{activeProfile.aboutLabel}</p>
            <AnimatePresence mode="wait">
              <motion.h2
                key={profileMode}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 600, lineHeight: 1.2 }}
              >
                {activeProfile.aboutTitle}
              </motion.h2>
            </AnimatePresence>
          </div>
          <div style={{ alignSelf: 'center' }}>
            <AnimatePresence mode="wait">
              <motion.p
                key={`${profileMode}-about`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', lineHeight: '1.8', color: '#BBB', fontWeight: 300 }}
              >
                {activeProfile.aboutText}
              </motion.p>
            </AnimatePresence>
            <div style={{ display: 'flex', gap: '30px', marginTop: '40px', flexWrap: 'wrap' }}>
              <div>
                <p style={{ fontSize: '0.7rem', color: '#666', letterSpacing: '2px', textTransform: 'uppercase' }}>Focus</p>
                <p style={{ marginTop: '8px', fontSize: '1rem' }}>{activeProfile.focus}</p>
              </div>
              <div>
                <p style={{ fontSize: '0.7rem', color: '#666', letterSpacing: '2px', textTransform: 'uppercase' }}>Current Role</p>
                <p style={{ marginTop: '8px', fontSize: '1rem' }}>{activeProfile.currentRole}</p>
              </div>
            </div>


          </div>
        </motion.div>
      </section>

      {/* SECTION 3: RECOGNITION */}
      <section id="recognition" className="section-padding-alt" style={{ textAlign: 'center' }}>
        <motion.div className="recognition-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}>
          <div onClick={() => toggleSection('awards')} style={{ cursor: 'pointer' }}>
            <p style={{ letterSpacing: '4px', fontSize: '0.65rem', color: '#AAA', textTransform: 'uppercase' }}>Distinction</p>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 600, borderBottom: activeSection === 'awards' ? '2px solid #1a1a1a' : '2px solid transparent' }}>Awards +</h2>
          </div>
          <div onClick={() => toggleSection('engagements')} style={{ cursor: 'pointer' }}>
            <p style={{ letterSpacing: '4px', fontSize: '0.65rem', color: '#AAA', textTransform: 'uppercase' }}>Professional</p>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 600, borderBottom: activeSection === 'engagements' ? '2px solid #1a1a1a' : '2px solid transparent' }}>Engagements +</h2>
          </div>
        </motion.div>
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
                  <span className="engagement-year" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: '1.2rem', width: '120px', color: '#999' }}>{item.year}</span>
                  <div className="engagement-content" style={{ paddingLeft: '40px' }}>
                    <h4 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', fontWeight: 600 }}>{item.title}</h4>
                    <p style={{ color: '#666', marginTop: '5px', lineHeight: '1.6' }}>{item.detail}</p>
                  </div>
                </div>
              ))}
              {profileMode !== 'engineering' && (
                <div className="leadership-events">
                  <p className="leadership-events-eyebrow">Leadership in action</p>
                  <h3 className="leadership-events-title">Events & Programs</h3>
                  <div className="leadership-event-list">
                    {leadershipEvents.map((event) => {
                      const selectedMedia = activeEventMedia[event.title] || 'photos';

                      return (
                        <article className="leadership-event-card" key={event.title}>
                          <div className="leadership-event-copy">
                            <p className="leadership-event-role">{event.role}</p>
                            <h4>{event.title}</h4>
                            <p>{event.detail}</p>
                            {event.links && (
                              <div className="engagement-links">
                                {event.links.map((link) => (
                                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                                    {link.label} ↗
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                          <div className="event-media">
                            <div className="event-media-tabs" role="group" aria-label={`${event.title} media categories`}>
                              <button
                                type="button"
                                className={`event-media-tab${selectedMedia === 'photos' ? ' active' : ''}`}
                                aria-pressed={selectedMedia === 'photos'}
                                onClick={() => setActiveEventMedia((current) => ({ ...current, [event.title]: 'photos' }))}
                              >
                                Photos
                              </button>
                              <button
                                type="button"
                                className={`event-media-tab${selectedMedia === 'videos' ? ' active' : ''}`}
                                aria-pressed={selectedMedia === 'videos'}
                                onClick={() => setActiveEventMedia((current) => ({ ...current, [event.title]: 'videos' }))}
                              >
                                Videos
                              </button>
                            </div>
                            {selectedMedia === 'photos' ? (
                              <div className="event-media-content" aria-label={`${event.title} photos`}>
                                <div className={`event-gallery event-gallery-${event.images.length}`}>
                                  {event.images.map((image) => (
                                    <img
                                      key={image.src}
                                      src={image.src}
                                      alt={image.alt}
                                      loading="lazy"
                                      style={{ objectPosition: image.objectPosition || 'center center' }}
                                    />
                                  ))}
                                </div>
                                {event.photoLinks && (
                                  <div className="event-media-links">
                                    {event.photoLinks.map((link, index) => (
                                      <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                                        View Facebook post {index + 1} ↗
                                      </a>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <div className="event-media-content event-video-list" aria-label={`${event.title} videos`}>
                                {event.videos.map((video, index) => (
                                  <a key={video.href} href={video.href} target="_blank" rel="noreferrer">
                                    <span aria-hidden="true">▶</span>
                                    {video.label || `Video ${index + 1}`}
                                    <span aria-hidden="true">↗</span>
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* SECTION 4: PROJECTS */}
      <section id="projects" className="section-padding">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p style={{ letterSpacing: '5px', fontSize: '0.7rem', color: '#AAA', textTransform: 'uppercase' }}>Selected Works</p>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>Portfolio</h2>
        </motion.div>
        <div className="grid-projects">
          {orderedProjects.map((p, i) => {
            const profileDescription = profileProjectDescriptions[profileMode]?.[p.id];
            const gradientBg = `linear-gradient(135deg, hsl(${i * 45}, 70%, 90%), hsl(${i * 45 + 30}, 70%, 95%))`;
            return (
              <motion.div key={p.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: (i % 3) * 0.1 }} whileHover={{ y: -6 }} className="project-card">
                <div className="project-media" style={{ background: p.imageFit === 'contain' ? '#101827' : p.image ? '#0a0a0a' : gradientBg }}>
                  {p.image && <img src={p.image} alt={`${p.title} project preview`} style={{ objectFit: p.imageFit || 'cover' }} />}
                </div>
                <span style={{ fontSize: '0.7rem', color: '#DDD' }}>0{i + 1} /</span>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', margin: '16px 0' }}>{p.title}</h3>
                <p style={{ color: '#777', lineHeight: '1.7', marginBottom: '24px', fontSize: '0.95rem', flexGrow: 1 }}>{profileDescription || p.description}</p>
                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                  <span style={{ fontSize: '0.7rem', color: '#999', textTransform: 'uppercase' }}>{p.tech}</span>
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    {p.liveLink && (
                      <a href={p.liveLink} target="_blank" rel="noreferrer" style={{ fontWeight: 700, textDecoration: 'none', borderBottom: '2px solid #1a1a1a', paddingBottom: '3px', fontSize: '0.8rem', color: '#1a1a1a' }}>LIVE DEMO ↗</a>
                    )}
                    <a href={p.link} target="_blank" rel="noreferrer" style={{ fontWeight: 700, textDecoration: 'none', borderBottom: '2px solid #666', paddingBottom: '3px', fontSize: '0.8rem', color: '#666' }}>VIEW REPO</a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Full-width Running Skills Bar (Now under Projects) */}
      <div className="skills-marquee">
         <div className="skills-track">
           {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
              <div key={index} className="skill-badge" title={skill.name}>
                <img src={skill.icon} alt={skill.name} />
              </div>
           ))}
         </div>
      </div>

      {/* SECTION 5: CONTACT */}
      <section id="contact" className="section-padding-alt">
        <motion.div className="grid-contact" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}>
          <div>
            <p style={{ letterSpacing: '4px', fontSize: '0.7rem', color: '#AAA', textTransform: 'uppercase', marginBottom: '20px' }}>Connect</p>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 600 }}>Get in Touch</h2>
            <p style={{ marginTop: '24px', color: '#666', maxWidth: '400px', lineHeight: '1.7' }}>
              Currently based in Malabe,Sri Lanka. Open to collaborations regarding software development and business strategy.
            </p>
          </div>

          <div className="grid-contact-links">
            <div>
              <p className="contact-section-label">Contact</p>
              <div className="contact-link-row">
                <span className="contact-icon"><WhatsAppIcon /></span>
                <p className="contact-text">WhatsApp: 0762732827</p>
              </div>
              <a href="mailto:chanulawijayarathne@gmail.com" className="contact-link email-link">
                <span className="contact-icon"><MailIcon /></span>
                <span>Email Me</span>
              </a>
            </div>
            <div>
              <p className="contact-section-label">Professional</p>
              <a href="https://github.com/Chanulaw" target="_blank" rel="noreferrer" className="contact-link">
                <span className="contact-icon"><GitHubIcon /></span>
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/chanula-wijayarathne" target="_blank" rel="noreferrer" className="contact-link">
                <span className="contact-icon"><LinkedInIcon /></span>
                <span>LinkedIn</span>
              </a>
              <a href="https://facebook.com/chanula.wijayarathne" target="_blank" rel="noreferrer" className="contact-link">
                <span className="contact-icon"><FacebookIcon /></span>
                <span>Facebook</span>
              </a>
            </div>
            <div>
              <p className="contact-section-label">Social</p>
              <a href="https://instagram.com/chanuu.w" target="_blank" rel="noreferrer" className="contact-link">
                <span className="contact-icon"><InstagramIcon /></span>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </motion.div>
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