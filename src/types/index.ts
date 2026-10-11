export interface PersonalInfo {
  name: string;
  titles: string[];
  education: {
    degree: string;
    institution: string;
    location: string;
    period: string;
    cgpa: string;
  };
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    location: string;
  };
  availability: {
    isOpen: boolean;
    badgeText: string;
  };
  hero: {
    badge: string;
    headline: string[];
    description: string;
  };
  about: {
    heading: string;
    subtitle: string;
    bioParagraphs: string[];
    pillars: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  skills: {
    name: string;
    highlight?: boolean;
    description?: string;
  }[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  date: string;
  badge: string;
  description: string;
  responsibilities: string[];
  metrics?: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  category: string;
  achievement?: string;
  description: string;
  problemSolved: string;
  keyFeatures: string[];
  technologies: string[];
  architectureOverview?: string;
  agentRoles?: { role: string; task: string }[];
  impactMetrics?: { label: string; value: string }[];
  githubUrl?: string;
  liveDemoUrl?: string;
  themeColor: 'blue' | 'cyan' | 'purple';
  featured: boolean;
}

export interface AchievementItem {
  id: string;
  title: string;
  organizationOrEvent: string;
  dateOrYear: string;
  badge: string;
  details: string;
  prize?: string;
  highlightMetric?: string;
  iconName: string;
}

export interface ValuePillar {
  title: string;
  description: string;
  iconName: string;
  tags: string[];
}
