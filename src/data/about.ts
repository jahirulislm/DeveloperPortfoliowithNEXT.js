import type { Skill, Experience, Education, AboutMeData } from '@/types';
import { Code, Briefcase, GraduationCap, Server, Palette, Brain, Database, Users, Search, Settings, MessageCircle } from 'lucide-react';

export const skills: Skill[] = [
  { name: 'JavaScript (ES6+)', level: 95, icon: Code },
  { name: 'TypeScript', level: 90, icon: Code },
  { name: 'React & Next.js', level: 92, icon: Code },
  { name: 'Node.js & Express', level: 85, icon: Server },
  { name: 'HTML5 & CSS3', level: 95, icon: Palette },
  { name: 'Tailwind CSS', level: 90, icon: Palette },
  { name: 'Python & Django/Flask', level: 75, icon: Code },
  { name: 'SQL (PostgreSQL, MySQL)', level: 80, icon: Database },
  { name: 'NoSQL (MongoDB, Firebase)', level: 78, icon: Database },
  { name: 'Git & GitHub/GitLab', level: 95, icon: Code },
  { name: 'RESTful APIs & GraphQL', level: 88, icon: Server },
  { name: 'Docker & Kubernetes', level: 70, icon: Settings },
  { name: 'AWS/GCP Basics', level: 65, icon: Server },
  { name: 'Agile/Scrum Methodologies', level: 85, icon: Users },
  { name: 'Unit & Integration Testing', level: 80, icon: Search },
  { name: 'Problem Solving', level: 95, icon: Brain },
  { name: 'Communication', level: 90, icon: MessageCircle },
];

export const experiences: Experience[] = [
  {
    id: 'exp1',
    title: 'Senior Full Stack Developer',
    company: 'Innovate Solutions Ltd.',
    period: 'Jan 2021 - Present',
    description: 'Leading the development of scalable web applications using Next.js, Node.js, and TypeScript. Architecting microservices, mentoring junior developers, and driving CI/CD pipeline improvements. Successfully launched three major products, reducing load times by 30%.',
    logoUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'modern office',
  },
  {
    id: 'exp2',
    title: 'Mid-Level Web Developer',
    company: 'DigitalCrafters Co.',
    period: 'Jun 2018 - Dec 2020',
    description: 'Developed and maintained client websites and internal tools using React, Python (Django), and PostgreSQL. Contributed to UI/UX design discussions and improved application performance through code optimization.',
    logoUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'team collaboration',
  },
  {
    id: 'exp3',
    title: 'Junior Web Developer',
    company: 'WebStart Inc.',
    period: 'Jul 2016 - May 2018',
    description: 'Assisted senior developers in building responsive websites with HTML, CSS, JavaScript (jQuery), and PHP. Gained foundational experience in version control, testing, and agile development.',
    logoUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'startup environment',
  },
];

export const education: Education[] = [
  {
    id: 'edu1',
    institution: 'Tech University',
    degree: 'M.S. in Software Engineering',
    period: '2020 - 2022',
    description: 'Specialized in cloud computing and distributed systems. Thesis on "Scalable Architectures for Web Applications".',
    logoUrl: 'https://placehold.co/80x80.png',
    dataAiHint: 'university campus',
  },
  {
    id: 'edu2',
    institution: 'State College',
    degree: 'B.S. in Computer Science',
    period: '2012 - 2016',
    description: 'Graduated Magna Cum Laude. Active member of the coding club and contributor to open-source projects.',
    logoUrl: 'https://placehold.co/80x80.png',
    dataAiHint: 'college building',
  },
];

export const aboutMe: AboutMeData = {
  name: "Alex Johnson",
  tagline: "Full Stack Developer | Building Innovative & Scalable Web Solutions",
  bio: `Hello! I'm Alex, a results-driven Full Stack Developer with ${new Date().getFullYear() - 2016}+ years of experience crafting high-performance web applications. My passion lies in transforming complex problems into elegant, user-centric solutions. I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and Next.js, and I'm always eager to explore new technologies that push the boundaries of web development. I believe in clean code, agile practices, and collaborative teamwork to deliver exceptional digital products. When I'm not coding, you can find me exploring new hiking trails or contributing to open-source projects.`,
  profileImageUrl: 'https://placehold.co/300x300.png',
  dataAiHint: 'developer portrait',
  socialLinks: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
    email: 'mailto:youremail@example.com'
  }
};

export const portfolioSummaryForAI = `
Key Skills: JavaScript, TypeScript, React, Next.js, Node.js, Python, SQL, NoSQL, HTML, CSS, Tailwind CSS, Git, REST APIs, GraphQL, Docker.
Experience: Senior Full Stack Developer at Innovate Solutions Ltd. (Jan 2021 - Present), Mid-Level Web Developer at DigitalCrafters Co. (Jun 2018 - Dec 2020), Junior Web Developer at WebStart Inc. (Jul 2016 - May 2018).
Education: M.S. in Software Engineering from Tech University, B.S. in Computer Science from State College.
Notable Projects:
1. E-commerce Platform: Full-featured e-commerce solution with React, Node.js, MongoDB.
2. Task Management App: Real-time collaborative task manager using Vue.js and Firebase.
3. Personal Blog Engine: Lightweight blog built with Next.js and Markdown.
Strengths: Problem-solving, scalable architecture, clean code, agile methodologies, strong communication.
`;
