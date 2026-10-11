import type { PersonalInfo } from '../types';

export const personalData: PersonalInfo = {
  name: 'Sartaj Ali',
  titles: [
    'Full-Stack Developer',
    'AI Engineer',
    'Blockchain Developer',
    'Hackathon Builder'
  ],
  education: {
    degree: 'B.E. in Computer Science and Engineering',
    institution: 'Sambhram Institute of Technology',
    location: 'Bangalore, India',
    period: '2023–2027',
    cgpa: '7.3/10',
  },
  contact: {
    email: 'sartajali4125@gmail.com',
    phone: '+91 7546917019',
    linkedin: 'https://www.linkedin.com/in/Sartaj-25',
    github: 'https://github.com/Sartaj-25',
    location: 'Bangalore, India',
  },
  availability: {
    isOpen: true,
    badgeText: 'Open to Opportunities',
  },
  hero: {
    badge: "HELLO, I'M SARTAJ ALI",
    headline: [
      'Building Intelligent Systems.',
      'Engineering Decentralized Futures.'
    ],
    description:
      "I'm a Computer Science Engineering student passionate about building scalable web applications, AI-powered systems, and privacy-preserving blockchain solutions. I turn complex problems into practical, user-focused products.",
  },
  about: {
    heading: 'About Me',
    subtitle: 'Curiosity-driven. Solution-focused. Built for impact.',
    bioParagraphs: [
      "I'm Sartaj Ali, a Computer Science Engineering student at Sambhram Institute of Technology, Bangalore. My interests span full-stack development, artificial intelligence, and blockchain technology.",
      "I enjoy transforming ideas into working products, experimenting with emerging technologies, and collaborating with teams to solve real-world problems.",
      "Through hackathons and project development, I've explored AI agents, multilingual voice automation, decentralized identity, and privacy-preserving verification.",
      "My goal is to build reliable, intelligent, and secure digital experiences that solve meaningful problems."
    ],
    pillars: [
      {
        title: 'Full-Stack Engineering',
        description: 'Building responsive applications and scalable backend systems.',
        icon: 'Layout',
      },
      {
        title: 'Artificial Intelligence',
        description: 'Developing AI agents, automation workflows, and intelligent applications.',
        icon: 'BrainCircuit',
      },
      {
        title: 'Blockchain & Privacy',
        description: 'Exploring decentralized identity, zero-knowledge proofs, and privacy-first systems.',
        icon: 'ShieldCheck',
      },
    ],
  },
};
