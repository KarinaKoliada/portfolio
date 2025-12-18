export default {
  header: {
    home: "Home",
    projects: "Projekte",
    about: "Über mich",
    contact: "Kontakt",
  },

  footer: {
    back: "Zurück nach oben",
    github: "github",
    contact: "kontakt",
  },

  hero: {
    title: "Hallo, ich bin Karina,",
    part1: "Frontend ",
    part2: "Developerin",
    subtitle: "mit Sitz in Deutschland.",
    resume: "Lebenslauf",
  },

  about: {
    title: "über mich.",
    intro:
      "Ich bin eine motivierte Frontend-Entwicklerin mit einer Leidenschaft für moderne Webentwicklung. Nach meiner Erfahrung im Customer Success habe ich mich auf die Erstellung benutzerfreundlicher und responsiver Interfaces spezialisiert und erweitere meine Fähigkeiten kontinuierlich durch praktische Projekte und selbstständiges Lernen.",

    skillsTitle: "Fähigkeiten",
    skills: [
      "HTML5",
      "CSS3",
      "SCSS",
      "JavaScript (ES6+)",
      "React",
      "TailwindCSS",
      "Git / GitHub",
      "Responsive Design",
      "Grundkenntnisse Next.js",
      "API-Integration",
      "Figma (UI/UX)",
    ],

    projectsTitle: "Frontend-Projekte & Praxiserfahrung",
    projects: [
      "Entwicklung mehrerer Kursprojekte während der Mate Academy Ausbildung",
      "Erstellung eigener Portfolio-Projekte mit modernen Tools und Frameworks",
      "Fokus auf Responsive Design, sauberes UI und komponentenorientierte Entwicklung",
    ],

    experienceTitle: "Berufserfahrung",
    experiences: [
      {
        role: "Customer Success Coordinator (Dez 2022 – Jun 2024, Driveroo & ROO.ai)",
        description:
          "Analyse von Kundenbedürfnissen, Verwaltung von Abonnements, Kommunikation mit Kunden und effiziente Problemlösung. Arbeit mit Jira, Stripe, Monday.com, Google Sheets und Excel.",
      },
      {
        role: "Englischlehrerin (2018 – 2022)",
        description:
          "Entwicklung individueller Lehrmaterialien und Unterstützung von Schülern (6–14 Jahre) beim Verbessern ihrer Sprachkenntnisse.",
      },
    ],

    educationTitle: "Ausbildung",
    education: [
      {
        school: "Selbstständiges Lernen",
        description:
          "Kontinuierliche Weiterbildung in modernen Webtechnologien und praktischen Projekten",
      },
      {
        school: "Mate Academy (2023 – aktuell)",
        description:
          "Frontend Development (JavaScript, React, HTML, SCSS, Tailwind CSS)",
      },

            {
        school: "Odesa I.I. Mechnikov Nationaluniversität (2017 – 2021)",
        description: "Fachbereich Englische Philologie",
      },
    ],

    languagesTitle: "Sprachen",
    languages: [
      "Deutsch: B1",
      "Englisch: B2",
      "Russisch/Ukrainisch: Muttersprache",
    ],
  },
  projects: {
    projectsTitle: "Projekte",
    projectsSubtitle: "Aktuelle Arbeiten & Fallstudien",

    projectsList: [
      {
        id: 1,
        title: "Dia Landing Page",
        description:
          "Responsives Landingpage-Design mit modernen Animationen. Erstellt mit semantischem HTML und SCSS.",
        tech: [
          "HTML5",
          "SCSS",
          "BEM",
          "Flexbox",
          "CSS Grid",
          "Responsive Design",
        ],
        link: "https://karinakoliada.github.io/layout_dia/",
        image: "/web/dia.png",
      },
      {
        id: 2,
        title: "Landing Page Template",
        description:
          "Mehrteilige Landingpage mit Navigation, weichem Scrollen und interaktiven Komponenten.",
        tech: [
          "HTML5",
          "CSS3",
          "JavaScript (ES6+)",
          "Smooth Scroll",
          "Flexbox",
          "Responsive Design",
        ],
        link: "https://karinakoliada.github.io/layout_landing-page/#about-us",
        image: "/web/landing.png",
      },
      {
        id: 3,
        title: "Phone Catalog",
        description:
          "Umfangreicher Produktkatalog mit Filterfunktion, Warenkorb und Favoriten. React-basierte SPA mit modernem State-Management.",
        tech: [
          "React",
          "TypeScript",
          "React Router",
          "Context API",
          "Local Storage",
          "SCSS",
          "REST API",
          "Responsive Design",
        ],
        link: "https://react-phone-catalog-plum.vercel.app/",
        image: "/web/phones.png",
      },
      {
        id: 4,
        title: "Positivus Agency",
        description:
          "Marketingagentur-Website mit modernem UI/UX und Präsentation von Dienstleistungen sowie Fallstudien.",
        tech: [
          "React",
          "TypeScript",
          "TailwindCSS",
          "React Router",
          "Vite",
          "Responsive Design",
        ],
        link: "https://positivus-zcyc.vercel.app/",
        image: "/web/positivus.png",
      },
    ],

    viewProject: "Projekt ansehen",
    technologies: "Technologien",
  },
};
