import type { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'frab',
    name: 'FRAB — Financial Crime Investigation Lab',
    shortName: 'FRAB',
    tagline: 'Multi-Agent AI Intelligence Supporting AML & Financial Crime Forensics',
    category: 'AI Agents & FinTech',
    achievement: '3rd Place — Smart Horizon 2026',
    description:
      'FRAB is a multi-agent AI system designed to support financial crime investigations. It analyzes suspicious financial transactions, gathers contextual evidence, and helps investigators assess potential money laundering risks with explainable reporting.',
    problemSolved:
      'Manual anti-money laundering (AML) investigations drown compliance officers in hundreds of disconnected logs, leading to delayed escalations and high false-positive rates.',
    keyFeatures: [
      'Specialized Watchman, Detective, Jurist, Scribe, and Supervisor multi-agent orchestration.',
      'Real-time anomaly detection and pattern matching across transaction clusters.',
      'Automated contextual evidence gathering across disparate financial data points.',
      'Explainable, auditable investigation reports with chain-of-thought provenance.',
      'Human-in-the-loop supervised decision-making architecture.',
    ],
    technologies: [
      'React.js',
      'Tailwind CSS',
      'Node.js',
      'FastAPI',
      'Google ADK',
      'Vertex AI',
      'Firestore',
    ],
    architectureOverview:
      'The system coordinates five specialized AI agents: Watchman detects anomalies, Detective correlates contextual entities, Jurist checks compliance criteria, Scribe synthesizes formal dossiers, and Supervisor ensures workflow safety before presenting dossiers to human forensic leads.',
    agentRoles: [
      { role: 'Watchman Agent', task: 'Monitors raw transaction streams and flags statistical volume anomalies.' },
      { role: 'Detective Agent', task: 'Cross-references counterparty graphs and historic transfer patterns.' },
      { role: 'Jurist Agent', task: 'Validates findings against regulatory AML indicators and compliance rules.' },
      { role: 'Scribe Agent', task: 'Compiles clean, human-readable case summaries and timeline graphs.' },
      { role: 'Supervisor Agent', task: 'Maintains policy boundaries and queues high-risk files for human signoff.' },
    ],
    impactMetrics: [
      { label: 'Hackathon Award', value: '3rd Place Global' },
      { label: 'Prize Awarded', value: 'INR 75,000' },
      { label: 'Sprint Duration', value: '48 Hours' },
      { label: 'Agent Pipeline', value: '5 Specialized Agents' },
    ],
    githubUrl: 'https://github.com/Sartaj-25',
    liveDemoUrl: '',
    themeColor: 'blue',
    featured: true,
  },
  {
    id: 'identipi',
    name: 'IdentiPI — Privacy-First KYC dApp',
    shortName: 'IdentiPI',
    tagline: 'Zero-Knowledge Decentralized Identity & Selective Disclosure dApp',
    category: 'Web3 & Cryptography',
    achievement: 'Top 100 Asia — Cardano Hackathon',
    description:
      'IdentiPI is a decentralized identity application focused on privacy-preserving verification. It explores how users can prove eligibility or identity attributes without exposing unnecessary personal information.',
    problemSolved:
      'Centralized KYC databases store unencrypted passports and IDs in vulnerable silos. Users lose sovereignty over their data, and businesses bear immense compliance breach liabilities.',
    keyFeatures: [
      'Privacy-preserving identity verification powered by Zero-Knowledge Proofs (ZKP).',
      'Zero-Knowledge Proof-based verification: proves criteria (e.g., age > 18) without disclosing birthdate.',
      'W3C-compliant Decentralized Identifiers (DID) with Veridian protocol integration.',
      'Granular selective disclosure — users decide exactly which claim fields to share.',
      'Reusable, tamper-proof digital credentials stored locally and anchored cryptographically.',
    ],
    technologies: [
      'Midnight',
      'Zero-Knowledge Proofs (ZKP)',
      'Veridian DID',
      'React.js',
      'Node.js',
      'IPFS',
    ],
    architectureOverview:
      'Built around Midnight network primitives and Veridian DID standards. Users generate cryptographic proofs client-side, allowing verifying dApps to validate authentic claims against IPFS-pinned schemas without seeing raw PII.',
    impactMetrics: [
      { label: 'Hackathon Standing', value: 'Top 100 in Asia' },
      { label: 'Selection Pool', value: 'Thousands of Applicants' },
      { label: 'Protocol Standard', value: 'Veridian DID + ZKP' },
      { label: 'Data Exposure', value: 'Zero Raw PII Leaked' },
    ],
    githubUrl: 'https://github.com/Sartaj-25',
    liveDemoUrl: '',
    themeColor: 'cyan',
    featured: true,
  },
  {
    id: 'automaton-nexus',
    name: 'Automaton Nexus — AI Multilingual Voice Agent',
    shortName: 'Automaton Nexus',
    tagline: 'Autonomous Speech Agent for High-Volume Workflow & Order Confirmations',
    category: 'AI Voice & Automation',
    achievement: '1st Place — AtherNex',
    description:
      'Automaton Nexus is an AI-powered voice automation system designed to automate order confirmations and reduce repetitive manual interactions.',
    problemSolved:
      'Customer support desks spend thousands of hours placing repetitive outbound verification calls, encountering call fatigue, linguistic variations, and high human overhead.',
    keyFeatures: [
      'Autonomous conversational voice agent supporting real-time dialogue and objection handling.',
      'End-to-end automated order confirmation workflows integrated with fulfillment queues.',
      'Demonstrated 80% reduction in manual verification overhead during hackathon benchmarks.',
      'FastAPI-based asynchronous backend delivering low latency speech streaming.',
      'Live campaign tracking, analytics dashboard, and conversation status diagnostics.',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'AI Voice Processing',
      'Modular Architecture',
    ],
    architectureOverview:
      'A decoupled microservices architecture with a lightning-fast FastAPI asynchronous core handling incoming/outgoing voice streams, dynamic prompt adaptation, and campaign state machines.',
    impactMetrics: [
      { label: 'Hackathon Award', value: '1st Place Winner' },
      { label: 'Teams Competed', value: '120 Teams at BMSCE' },
      { label: 'Manual Effort Saved', value: '80% Reduction' },
      { label: 'Sprint Duration', value: '24-Hour Hackathon' },
    ],
    githubUrl: 'https://github.com/Sartaj-25',
    liveDemoUrl: '',
    themeColor: 'purple',
    featured: true,
  },
];
