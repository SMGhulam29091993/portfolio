export const heroData = {
  badge: "Available for Projects",
  title: {
    first: "Full Stack",
    middle: "Developer",
    last: "& Engineer",
  },
  description: "MERN Stack Developer with 2+ years of experience building scalable full-stack applications. Expert in React, Node.js, and AI-powered systems.",
  trustText: "Proven track record in Production-Grade Apps",
  cta: "Get in Touch",
};

export const aboutData = {
  badge: "Identity 01-A",
  massiveTitle: "PROFILE SUMMARY",
  highlight: "clean, reusable, production-grade code",
  description: [
    "MERN Stack Developer with 2+ years of experience building scalable full-stack applications. Strong expertise in React.js, Node.js (Express/NestJS), MongoDB, and RESTful API development.",
    "Experienced in database migration, backend architecture design, authentication systems, and AI integration. Passionate about writing clean, reusable, and performance-optimized production-grade code."
  ],
  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Systems Built", value: "15+" }
  ],
  tags: [
    { label: "MERN Stack Specialist", icon: "terminal", color: "secondary" },
    { label: "AI & RAG Integration", icon: "zap", color: "primary" },
    { label: "Backend Specialist", icon: "deployed_code", color: "tertiary" }
  ]
};

export const experienceData = [
  {
    company: "Indus Net Technologies",
    role: "Associate Software Engineer",
    period: "Sept 2024 – Present",
    location: "Kolkata",
    points: [
      "Developing a Health Risk Assessment application using React, Node.js (NestJS), and MongoDB",
      "Designed and optimized REST APIs for mobile and admin panel integration",
      "Migrated complex nested Firebase database to normalized MongoDB architecture",
      "Improved performance and scalability by restructuring collections and indexing",
      "Built reusable backend modules following clean architecture principles",
      "Implemented AI-powered RAG system using GPT-4 for personalized health insights",
      "Reduced API response time through optimized queries and better data modeling"
    ]
  },
  {
    company: "DCG Data Core System",
    role: "Project Associate",
    period: "Jan 2024 – Sept 2024",
    location: "Kolkata",
    points: [
      "Contributed to an EdTech platform using React and REST APIs",
      "Designed responsive UI components for better user experience",
      "Integrated backend APIs to enhance application functionality"
    ]
  }
];

export const skillsData = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "HTML/CSS"],
  },
  {
    category: "Frontend",
    skills: ["Reactjs", "Nextjs", "Framer Motion", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "NestJS", "REST APIs"],
  },
  {
    category: "Databases & ORM",
    skills: ["MongoDB", "PostgreSQL", "Prisma", "TypeORM"],
  },
  {
    category: "Architecture & Ops",
    skills: ["Modular Architecture", "Git", "Postman", "OOPS"],
  },
];

export const projectsData = [
  {
    title: "Second Brain",
    description: "A full-stack content management system with RESTful API architecture and Google Gemini AI integration.",
    tags: ["MERN", "TypeScript", "JWT", "Zustand", "Zod", "Tanstack Query", "Nodemailer"],
    link: "https://app.second-brain.live",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    period: "April 2025",
    points: [
      "Built a full-stack content management system with RESTful API architecture",
      "Implemented JWT-based authentication with bcrypt password hashing",
      "Developed OTP-based email verification using Nodemailer",
      "Integrated Google Gemini AI to generate smart summaries and tags",
      "Structured scalable backend using controllers, services, and models",
      "Enforced data validation using Zod"
    ]
  }
];

export const contactData = {
  email: "smghulam.ghausfaiyaz19@gmail.com",
  phone: "9007045010",
  location: "Kolkata, West Bengal",
  message: "I'm currently open to new opportunities. Whether you have a project in mind or just want to connect, feel free to reach out!",
  linkedinHandle: "smghulamghausfaiyaz",
  githubHandle: "smghulamghausfaiyaz"
};

export const footerData = {
  brand: "SMG2F",
  copyright: `© ${new Date().getFullYear()} S M GHULAM GHAUS FAIYAZ. ALL RIGHTS RESERVED.`,
  socials: [
    { name: "LinkedIn", link: "https://linkedin.com/in/smghulamghausfaiyaz" },
    { name: "GitHub", link: "https://github.com/smghulamghausfaiyaz" },
    { name: "LeetCode", link: "https://leetcode.com/smghulamghausfaiyaz" }
  ]
};
