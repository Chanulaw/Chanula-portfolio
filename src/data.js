import noveraImage from './assets/novera.png';
import kalanaFiberMillsImage from './assets/kalana-fiber-mills.png';
import kunulinkImage from './assets/kunulink.png';
import ocpApplicationImage from './assets/ocp-application.png';

const createProjectCover = (title, category, accent, artwork) => {
  const titleSize = title.length > 14 ? 48 : 64;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700">
      <defs>
        <linearGradient id="background" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#101827"/>
          <stop offset="1" stop-color="#202b3d"/>
        </linearGradient>
        <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${accent}" stop-opacity=".35"/>
          <stop offset="1" stop-color="${accent}" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="700" fill="url(#background)"/>
      <circle cx="900" cy="320" r="290" fill="url(#glow)"/>
      <circle cx="900" cy="320" r="210" fill="none" stroke="${accent}" stroke-opacity=".14" stroke-width="2"/>
      <circle cx="900" cy="320" r="160" fill="none" stroke="${accent}" stroke-opacity=".12" stroke-width="2"/>
      <g transform="translate(700 105)" fill="none" stroke="${accent}" stroke-linecap="round" stroke-linejoin="round" stroke-width="14">
        ${artwork}
      </g>
      <path d="M88 438h54" stroke="${accent}" stroke-width="6" stroke-linecap="round"/>
      <text x="88" y="530" fill="#fff" font-family="Arial, Helvetica, sans-serif" font-size="${titleSize}" font-weight="700">${title}</text>
      <text x="90" y="582" fill="${accent}" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="600" letter-spacing="5">${category.toUpperCase()}</text>
      <text x="90" y="635" fill="#9aa7b8" font-family="Arial, Helvetica, sans-serif" font-size="16" letter-spacing="3">SELECTED PROJECT</text>
    </svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

export const projects = [
  {
    id: 9,
    title: "Novera",
    description: "A website for Novera, an event organized by AIESEC in CINEC.",
    tech: "HTML",
    link: "https://github.com/Chanulaw/Novera",
    liveLink: "https://novera-taupe.vercel.app/",
    image: noveraImage
  },
  {
    id: 10,
    title: "NotesHub",
    description: "A web-based marketplace for sharing and accessing peer-created notes.",
    tech: "HTML",
    link: "https://github.com/kethmi03/NotesHub",
    image: createProjectCover("NotesHub", "Knowledge sharing", "#69d5c3", `
      <path d="M70 95h145a35 35 0 0 1 35 35v210H105a35 35 0 0 0-35 35z"/>
      <path d="M70 95v280a35 35 0 0 1 35-35h145V130a35 35 0 0 0-35-35z"/>
      <path d="M112 160h90M112 205h90M112 250h58"/>
      <path d="M248 130h120v180H248"/>
      <path d="M278 180h60M278 220h60M278 260h38"/>
    `)
  },
  {
    id: 11,
    title: "OGX Sprinter",
    description: "An AIESEC in CINEC campaign performance tracker with member profiles, points, and department leaderboards.",
    tech: "HTML / CSS / JavaScript",
    link: "https://github.com/randinigunasekara/OGX-Sprinter",
    image: createProjectCover("OGX Sprinter", "Campaign performance", "#f7b955", `
      <path d="M65 330h310M100 330V235h62v95M205 330V165h62v165M310 330V95h62v235"/>
      <path d="M85 145l85-55 75 28 105-75"/>
      <path d="M310 43h40v40"/>
      <circle cx="220" cy="84" r="30"/>
      <path d="M205 115l-20 35 40 20 24-37M200 135l-40 20 14 25 40-12"/>
    `)
  },
  {
    id: 12,
    title: "MediRoute",
    description: "A crowdsourced platform for finding essential medicines across pharmacies and hospitals.",
    tech: "Flutter / Dart",
    link: "https://github.com/Kalana23/MediRoute",
    image: createProjectCover("MediRoute", "Find care nearby", "#66d6c3", `
      <path d="M220 345s-130-113-130-210a130 130 0 0 1 260 0c0 97-130 210-130 210z"/>
      <path d="M220 80v110M165 135h110"/>
      <path d="M40 315h85l32-45 38 75 40-95 34 65h100"/>
      <circle cx="220" cy="135" r="78" stroke-opacity=".45"/>
    `)
  },
  {
    id: 7,
    title: "Kalana Fiber Mills",
    description: "A corporate website showcasing a Sri Lankan fiber mill and its coir products.",
    tech: "HTML / CSS / JavaScript",
    link: "https://github.com/Chanulaw/Kalana-Fiber-Mills",
    liveLink: "https://kalana-fiber-mills.vercel.app/",
    image: kalanaFiberMillsImage
  },
  {
    id: 1,
    title: "KunuLink",
    description: "A specialized waste management and logistics platform for efficient collection tracking.",
    tech: "JavaScript / Node.js",
    link: "https://github.com/Chanulaw/KunuLink",
    liveLink: "https://kunu-link-rust.vercel.app/",
    image: kunulinkImage
  },
  {
    id: 2,
    title: "ChatBot",
    description: "An AI-driven conversational interface built to streamline automated user inquiries.",
    tech: "Python / NLP",
    link: "https://github.com/Chanulaw/ChatBot",
    image: createProjectCover("ChatBot", "AI conversation", "#a99bff", `
      <path d="M70 105a35 35 0 0 1 35-35h215a35 35 0 0 1 35 35v155a35 35 0 0 1-35 35H190l-78 55v-55h-7a35 35 0 0 1-35-35z"/>
      <path d="M155 165h2M255 165h2M145 220q65 55 130 0"/>
      <path d="M205 70V35M160 35h90"/>
      <circle cx="205" cy="20" r="14"/>
    `)
  },
  {
    id: 3,
    title: "CineMax",
    description: "A high-end movie discovery platform focusing on refined UI/UX and cinematic aesthetics.",
    tech: "CSS / HTML / JS",
    link: "https://github.com/Chanulaw/CineMax",
    image: createProjectCover("CineMax", "Discover cinema", "#f47f91", `
      <path d="M75 115h300v215H75z"/>
      <path d="M75 115l55-70h300l-55 70M130 45l-55 70M230 45l-55 70M330 45l-55 70M430 45l-55 70"/>
      <path d="M175 165l105 58-105 58z"/>
      <path d="M110 330v35M340 330v35"/>
    `)
  },
  {
    id: 4,
    title: "AirlineTickets",
    description: "A robust backend system designed for managing high-concurrency flight bookings.",
    tech: "Java / Spring Boot",
    link: "https://github.com/Chanulaw/AirlineTickets",
    image: createProjectCover("AirlineTickets", "Travel booking system", "#72b7ff", `
      <path d="M45 215l145 28 115-133q18-20 42-15l18 4-78 164 93 47q18 9 18 29v15l-132-33-83 89-25-6 44-98-127-51z"/>
      <path d="M275 335l84 17"/>
      <path d="M65 95h105M65 130h70"/>
    `)
  },
  {
    id: 5,
    title: "Visit-Sri-Lanka",
    description: "A tourism-focused application showcasing the heritage and beauty of Sri Lanka.",
    tech: "C / Web Fundamentals",
    link: "https://github.com/Chanulaw/Visit-Sri-Lanka",
    image: createProjectCover("Visit-Sri-Lanka", "Island travel guide", "#f1bd69", `
      <circle cx="300" cy="95" r="43" fill="#f1bd69" stroke="none"/>
      <path d="M55 330q90-95 180 0 90-95 180 0"/>
      <path d="M230 320V155M230 170l-65-42M230 170l65-50M230 170l-13-75M230 170l58 5"/>
      <path d="M165 128l-27-6M165 128l-6-28M295 120l14-25M295 120l27-4M217 95l-16-22M217 95l24-12M288 175l23-12"/>
      <path d="M85 355h290"/>
    `)
  },
  {
    id: 6,
    title: "OcpApplication",
    description: "An open web application platform built with custom HTML and modular web styling.",
    tech: "HTML / Web",
    link: "https://github.com/Chanulaw/OcpApplication",
    liveLink: "https://ocp-application.vercel.app/",
    image: ocpApplicationImage
  }
];