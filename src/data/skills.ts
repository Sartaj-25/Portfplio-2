import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    iconName: 'Code2',
    skills: [
      { name: 'Java', highlight: true, description: 'Core OOP, Data Structures, Concurrency' },
      { name: 'Python', highlight: true, description: 'FastAPI, AI agent scripting, async I/O' },
      { name: 'JavaScript', highlight: true, description: 'ES6+, Async, DOM, Node runtime' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    iconName: 'Layout',
    skills: [
      { name: 'React.js', highlight: true, description: 'Component architecture, Hooks, State' },
      { name: 'Tailwind CSS', highlight: true, description: 'Modern responsive systems & utility-first styling' },
      { name: 'Figma', highlight: false, description: 'Wireframing, UI/UX prototyping, design systems' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Engineering',
    iconName: 'Server',
    skills: [
      { name: 'Node.js', highlight: true, description: 'REST APIs, Event loop, Microservices' },
      { name: 'FastAPI', highlight: true, description: 'High-throughput async Python endpoints' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    iconName: 'Database',
    skills: [
      { name: 'MongoDB', highlight: true, description: 'Document schemas, aggregation pipelines' },
      { name: 'PostgreSQL', highlight: true, description: 'Relational data modeling, ACID compliance' },
      { name: 'Supabase', highlight: false, description: 'Real-time database, Auth & Edge functions' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    iconName: 'Cpu',
    skills: [
      { name: 'AI Agents', highlight: true, description: 'Multi-agent orchestration & reasoning loops' },
      { name: 'NLP', highlight: false, description: 'Text comprehension, embeddings & semantics' },
      { name: 'AI Voice Processing', highlight: true, description: 'Speech synthesis, transcription & conversational flows' },
      { name: 'AWS Bedrock', highlight: false, description: 'Foundation model integration & safety rails' },
      { name: 'Prompt Engineering', highlight: false, description: 'Structured JSON outputs, few-shot conditioning' },
    ],
  },
  {
    id: 'blockchain',
    title: 'Blockchain & Privacy',
    iconName: 'Shield',
    skills: [
      { name: 'Midnight', highlight: true, description: 'Privacy-first smart contract ecosystem' },
      { name: 'Zero-Knowledge Proofs (ZKP)', highlight: true, description: 'ZK-SNARK concepts, private eligibility verification' },
      { name: 'Veridian DID', highlight: true, description: 'Decentralized identity & verifiable credentials' },
      { name: 'IPFS', highlight: false, description: 'Content-addressed decentralized file storage' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    iconName: 'Wrench',
    skills: [
      { name: 'Git', highlight: true, description: 'Branching, PRs, collaborative workflows' },
      { name: 'GitHub', highlight: true, description: 'CI/CD workflows, releases, issues' },
      { name: 'AWS', highlight: false, description: 'Cloud compute, S3, serverless functions' },
      { name: 'Google ADK', highlight: true, description: 'Google Agent Development Kit & Vertex AI' },
    ],
  },
];
