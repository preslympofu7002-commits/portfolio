// src/data/skills.ts
export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  description?: string;
  level?: 'learning' | 'familiar' | 'proficient';
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    label: 'Programming & Development',
    icon: 'Code2',
    color: 'cyan',
    skills: [
      { name: 'Python', description: 'Primary language for AI/ML and scripting', level: 'proficient' },
      { name: 'JavaScript', description: 'Web interactivity and logic', level: 'proficient' },
      { name: 'TypeScript', description: 'Type-safe frontend development', level: 'familiar' },
      { name: 'HTML', description: 'Semantic web markup', level: 'proficient' },
      { name: 'CSS', description: 'Styling and responsive layouts', level: 'proficient' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend Development',
    icon: 'Layout',
    color: 'blue',
    skills: [
      { name: 'React', description: 'Component-based UI development', level: 'familiar' },
      { name: 'Vite', description: 'Modern build tooling', level: 'familiar' },
      { name: 'Tailwind CSS', description: 'Utility-first CSS framework', level: 'familiar' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & Databases',
    icon: 'Database',
    color: 'green',
    skills: [
      { name: 'Supabase', description: 'Open source Firebase alternative with PostgreSQL', level: 'familiar' },
      { name: 'Firebase', description: 'Google cloud application platform', level: 'learning' },
    ],
  },
  {
    id: 'aiml',
    label: 'Artificial Intelligence & ML',
    icon: 'Brain',
    color: 'violet',
    skills: [
      { name: 'AI Fundamentals', description: 'Core concepts, reasoning, and intelligent agents', level: 'familiar' },
      { name: 'Machine Learning', description: 'Supervised, unsupervised learning principles', level: 'familiar' },
      { name: 'Neural Networks', description: 'Deep learning architectures and principles', level: 'learning' },
      { name: 'Encoder-Decoder Architecture', description: 'Sequence-to-sequence model design', level: 'learning' },
      { name: 'Generative AI', description: 'Concepts of LLMs and generative models', level: 'learning' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & Developer Tools',
    icon: 'Cloud',
    color: 'orange',
    skills: [
      { name: 'Google Cloud AI', description: 'Google Cloud AI products and services', level: 'learning' },
      { name: 'Microsoft Azure', description: 'Azure fundamentals and cloud concepts', level: 'learning' },
      { name: 'Databricks', description: 'Unified data analytics and ML platform', level: 'learning' },
      { name: 'Git', description: 'Version control and collaboration', level: 'familiar' },
      { name: 'GitHub', description: 'Repository management and open source', level: 'familiar' },
      { name: 'VS Code', description: 'Primary development environment', level: 'proficient' },
    ],
  },
];
