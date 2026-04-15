import { FaLinkedin, FaGoogle } from "react-icons/fa";
import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

type SkillType = {
  skill_name: string;
  image: string;
  width: number;
  height: number;
};

export const SKILL_DATA: SkillType[] = [
  { skill_name: "HTML", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS", image: "css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "Python", image: "python.png", width: 75, height: 75 },
  { skill_name: "React", image: "react.png", width: 80, height: 80 },
  { skill_name: "Node.js", image: "node.png", width: 80, height: 80 },
  { skill_name: "MongoDB", image: "mongodb.png", width: 40, height: 40 },
  { skill_name: "MySQL", image: "mysql.png", width: 70, height: 70 },
];

export const SOCIALS = [
  { name: "GitHub", icon: RxGithubLogo, link: "https://github.com/rohan-056" },
  { name: "LinkedIn", icon: RxLinkedinLogo, link: "https://www.linkedin.com/in/rohan-kumar-7a1468397" },
];

export const FRONTEND_SKILL: SkillType[] = [
  { skill_name: "HTML", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS", image: "css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "React", image: "react.png", width: 80, height: 80 },
];

export const BACKEND_SKILL: SkillType[] = [
  { skill_name: "Python", image: "python.png", width: 70, height: 70 },
  { skill_name: "Node.js", image: "node.png", width: 80, height: 80 },
  { skill_name: "MongoDB", image: "mongodb.png", width: 40, height: 40 },
  { skill_name: "MySQL", image: "mysql.png", width: 70, height: 70 },
];

export const OTHER_SKILL: SkillType[] = [];

export const PROJECTS = [
  {
    title: "Curia AI – Smart Health Assistant",
    description:
      "A full-stack AI-powered health platform with 8+ modules including AI symptom analysis, fitness tracking, and chatbot support. Real-time, data-driven features optimized for performance. (Mar 2026 – Apr 2026)",
    image: "/projects/project-1.png",
    link: "Curiaai.onrender.com ",
  },
  {
    title: "Strangers Things Website",
    description:
      "Responsive Stranger Things themed website using HTML, CSS, JavaScript, React, and Vite. Features reusable React components with interactive UI, animations, and fast loading. (Dec 2025 – Jan 2026)",
    image: "/projects/project-2.png",
    link: "https://st-website.vercel.app",
  },
  {
    title: "Packman Game",
    description:
      "Browser-based Pac-Man clone built with HTML, CSS, and JavaScript. Implements player controls, ghost AI behavior, collision detection, and full game state management. (Jan 2025 – Feb 2025)",
    image: "/projects/project-3.png",
    link: "https://pacman-multiplayer-nine.vercel.app",
  },
];

export const CERTIFICATES = [
  {
    title: "Use Machine Learning APIs on Google Cloud",
    issuer: "Google Cloud",
    date: "Apr 2025",
    link: "https://www.skills.google/public_profiles/90420150-5271-4205-aa9f-8cd1936d3e76",
  },
  {
    title: "Derive Insights from BigQuery Data",
    issuer: "Google Cloud",
    date: "May 2025",
    link: "https://www.skills.google/public_profiles/90420150-5271-4205-aa9f-8cd1936d3e76",
  },
  {
    title: "Build LookML Objects in Looker",
    issuer: "Google Cloud",
    date: "Apr 2025",
    link: "https://www.skills.google/public_profiles/90420150-5271-4205-aa9f-8cd1936d3e76",
  },
  {
    title: "Data Analyst 101",
    issuer: "Microsoft & Simplilearn",
    date: "Jan 2026",
    link: "#",
  },
  {
    title: "Azure Fundamentals",
    issuer: "Microsoft & Simplilearn",
    date: "Jan 2026",
    link: "#",
  },
  {
    title: "Tata – Cybersecurity Analyst",
    issuer: "Forage",
    date: "Nov 2025",
    link: "#",
  },
  {
    title: "Tata – GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage",
    date: "Nov 2025",
    link: "#",
  },
];

export const FOOTER_DATA = [
  {
    title: "Connect",
    data: [
      { name: "GitHub", icon: RxGithubLogo, link: "https://github.com/rohan-056" },
      { name: "LinkedIn", icon: RxLinkedinLogo, link: "https://www.linkedin.com/in/rohan-kumar-7a1468397" },
      { name: "Google Skills", icon: FaGoogle, link: "https://www.skills.google/public_profiles/90420150-5271-4205-aa9f-8cd1936d3e76" },
      { 
        name: "Contact Me", 
        icon: null, 
        link: "mailto:darkrohan9530@gmail.com?subject=Portfolio%20Contact&body=Hello%20Rohan,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect." 
      },
    ],
  },
];

export const NAV_LINKS = [
  { title: "About me", link: "#about-me" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
  { title: "Certificates", link: "#certificates" },
];

export const LINKS = {
  sourceCode: "https://github.com/rohan-056",
};
