/**
 * Single source of truth for the experience section.
 * Content sourced from Employment-History.md — no invented achievements,
 * metrics, or dates.
 */

export interface Role {
  id: string;
  company: string;
  title: string;
  /** Machine-readable values for <time dateTime>. */
  startIso: string;
  endIso: string;
  /** Human-readable date labels. */
  startLabel: string;
  endLabel: string;
  /** One-line company context. */
  context: string;
  bullets: string[];
  tech: string[];
}

export const roles: Role[] = [
  {
    id: "ravenpack",
    company: "RavenPack",
    title: "Senior Frontend Engineer",
    startIso: "2024",
    endIso: "2026-04",
    startLabel: "2024",
    endLabel: "April 2026",
    context:
      "Leading big data analytics provider for financial services — NLP/ML infrastructure processing millions of documents daily for hedge funds, banks and asset managers.",
    bullets: [
      "Built the new payment and subscription flow in React, TypeScript and Material UI, integrating backend billing services — upgrade, downgrade and failed-transaction edge cases for enterprise customers.",
      "Introduced LaunchDarkly feature flags as the company standard: designed conventions, built helper utilities and onboarded developers — unblocking gradual rollouts, A/B tests and dark launches while reducing release risk.",
      "Drove test culture — Playwright with 90%+ UI coverage, Jest and React Testing Library, plus SonarQube static analysis — for fewer customer-facing bugs and faster releases.",
      "Added GitLab CI quality gates (ESLint, type-check, unit tests) on every merge request, and shipped full-stack with Python AWS Lambda + DynamoDB services and Node/TypeScript BFF endpoints.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Material UI",
      "Node.js",
      "Python",
      "AWS Lambda",
      "DynamoDB",
      "GitLab CI",
      "LaunchDarkly",
      "Playwright",
      "Jest",
      "SonarQube",
    ],
  },
  {
    id: "trilateral",
    company: "Trilateral Research",
    title: "Software Engineer",
    startIso: "2021",
    endIso: "2024",
    startLabel: "2021",
    endLabel: "2024",
    context:
      "Ethical AI for complex social issues — the STRIAD platform family, including CESIUM, recognized by the OECD and CDEI as trustworthy AI.",
    bullets: [
      "Introduced Cypress E2E testing to the company — framework, conventions and Bitbucket Pipelines integration with Dockerised runners and automated reporting; it became the team default.",
      "Moved between the CESIUM, STRIAD and STRIAD:AIR codebases — different stakeholders, data domains and deadlines.",
      "Built full-stack: React, TypeScript, Next.js, Tailwind and Redux frontends over Python FastAPI and PostgreSQL backends on AWS Lambda, deployed via Bitbucket CI/CD.",
      "The STRIAD family won multiple DataIQ Awards, including the 2023 'Data for Society' award for CESIUM, the child-safeguarding platform built with Lincolnshire Police.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Redux",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "AWS Lambda",
      "Bitbucket Pipelines",
      "Cypress",
      "Docker",
    ],
  },
  {
    id: "boyne-park",
    company: "Boyne Park Fitout",
    title: "Software Engineer",
    startIso: "2018",
    endIso: "2021",
    startLabel: "2018",
    endLabel: "2021",
    context:
      "Construction and fitout firm in Ireland — workspace design and commercial interiors.",
    bullets: [
      "One-person product team: the technical hire designing and building custom software that replaced manual spreadsheets — operational efficiency, employee qualifications, site progress and materials tracking, plus auditing and invoicing tooling.",
      "Built a React web app and Flutter mobile app sharing a unified Node.js/Express backend — MongoDB for application data, AWS S3 for site photos and qualification documents uploaded from the field.",
      "Owned the full SDLC — discovery, architecture, build, release, maintenance. The tooling remained in production after I left.",
    ],
    tech: ["React", "Flutter", "Node.js", "Express", "MongoDB", "AWS S3"],
  },
  {
    id: "pramerica",
    company: "Pramerica",
    title: "Associate System Developer",
    startIso: "2016",
    endIso: "2018",
    startLabel: "2016",
    endLabel: "2018",
    context:
      "First professional role — responsive insurance web applications in a large regulated enterprise.",
    bullets: [
      "Built React and Bootstrap frontends over Java/Spring Boot backends.",
      "Worked with OracleDB via JDBC and Hibernate, including query and transaction tuning.",
    ],
    tech: ["React", "Bootstrap", "Java", "Spring Boot", "OracleDB", "Hibernate"],
  },
];

export interface SideProject {
  name: string;
  url: string;
  urlLabel: string;
  description: string;
  tech: string[];
}

export const sideProject: SideProject = {
  name: "Lugh",
  url: "https://lughonline.com",
  urlLabel: "lughonline.com",
  description:
    "AI/GEO SEO consulting for hospitality businesses — a side project I design, build and run end-to-end: TypeScript/Hono backend, React/Vite frontend, Supabase, and Gemini-powered report generation.",
  tech: ["TypeScript", "Hono", "React", "Vite", "Supabase", "Gemini"],
};

export interface SkillGroup {
  name: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    skills: [
      "React",
      "TypeScript (strict)",
      "Next.js",
      "Tailwind CSS",
      "Redux",
      "Material UI",
      "Flutter",
    ],
  },
  {
    name: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "DynamoDB",
      "Java / Spring Boot",
    ],
  },
  {
    name: "Testing",
    skills: [
      "Playwright",
      "Cypress",
      "Jest",
      "React Testing Library",
      "SonarQube",
    ],
  },
  {
    name: "CI/CD & Cloud",
    skills: [
      "GitLab CI",
      "Bitbucket Pipelines",
      "Docker",
      "AWS Lambda",
      "AWS S3",
      "LaunchDarkly",
    ],
  },
  {
    name: "AI Engineering",
    skills: [
      "AI-assisted engineering (Claude, Cursor)",
      "LLM API integration",
      "Gemini",
    ],
  },
];
