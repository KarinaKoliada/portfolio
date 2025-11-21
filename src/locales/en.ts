export default {
  header: {
    home: "Home",
    projects: "Projects",
    about: "About",
    contact: "Contact",
  },

  footer: {
    back: "Back to top",
    github: "github",
    contact: "contact",
  },

  hero: {
    title: "Hello, I’m Karina,",
    part1: "Frontend ",
    part2: "Developer",
    subtitle: "based in Germany.",
    resume: "Resume",
  },

  about: {
    title: "about.",
    intro:
      "I am a motivated Frontend Developer passionate about modern web development. After gaining experience in Customer Success, I specialized in creating user-friendly, responsive interfaces and continue building my skills through hands-on projects and self-directed learning.",

    skillsTitle: "Skills",
    skills: [
      "HTML5",
      "CSS3",
      "SCSS",
      "JavaScript (ES6+)",
      "React",
      "TailwindCSS",
      "Git / GitHub",
      "Responsive Design",
      "Basic Next.js",
      "API integration",
      "Figma (UI/UX)",
    ],

    projectsTitle: "Frontend Projects & Practical Experience",
    projects: [
      "Built multiple course projects during Mate Academy training",
      "Created personal portfolio projects using modern tools and frameworks",
      "Focused on responsive design, clean UI, and component-driven development",
    ],

    experienceTitle: "Work Experience",
    experiences: [
      {
        role: "Customer Success Coordinator (Dec 2022 – Jun 2024, Driveroo & ROO.ai)",
        description:
          "Analyzed customer needs, managed subscriptions, handled communication, and resolved issues efficiently. Worked with Jira, Stripe, Monday.com, Google Sheets, Excel.",
      },
      {
        role: "English Teacher (2018 – 2022)",
        description:
          "Developed personalized teaching materials and supported students aged 6–14 in improving language skills.",
      },
    ],

    educationTitle: "Education",
    education: [
      {
        school: "Odesa I.I. Mechnikov National University (2017 – 2021)",
        description: "Faculty of English Philology",
      },
      {
        school: "Mate Academy (2023 – ongoing)",
        description:
          "Frontend Development (JavaScript, React, HTML, SCSS, Tailwind CSS)",
      },
      {
        school: "Self-directed learning",
        description:
          "Continuous improvement through modern web technologies and practical projects",
      },
    ],

    languagesTitle: "Languages",
    languages: ["German: B1", "English: B2", "Russian/Ukrainian: Native"],
  },
  projects: {
    projectsTitle: "Projects",
    projectsSubtitle: "Recent work & case studies",

    projectsList: [
      {
        id: 1,
        title: "Dia Landing Page",
        description:
          "Responsive landing page with modern design and smooth animations. Built with semantic HTML and SCSS.",
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
          "Multi-section landing page with navigation, smooth scrolling, and interactive components.",
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
          "Full-featured e-commerce catalog with product filtering, cart functionality, and favorites. React-based SPA with modern state management.",
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
          "Marketing agency website with modern UI/UX, showcasing services and case studies.",
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

    viewProject: "View Live",
    technologies: "Technologies",
  },
};
