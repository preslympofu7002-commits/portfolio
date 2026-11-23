// src/data/certifications.ts
export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'AI' | 'ML' | 'Cloud' | 'General';
  code?: string;
  credentialUrl?: string;
  file?: string;
  description: string;
}

export interface Achievement {
  id: string;
  title: string;
  year: string;
  description: string;
  icon: string;
  color: string;
}

export const certificates: Certificate[] = [
  {
    id: 'intro-ai',
    title: 'Introduction to Artificial Intelligence',
    issuer: 'Simplilearn SkillUp',
    date: '13 Nov 2026',
    code: '11026906',
    category: 'AI',
    file: 'certificates/intro-ai.pdf',
    description: 'Foundational concepts of Artificial Intelligence, intelligent agents, problem formulation and heuristic search.',
  },
  {
    id: 'ml-python',
    title: 'Machine Learning Using Python',
    issuer: 'Simplilearn SkillUp',
    date: '14 Nov 2026',
    code: '11032847',
    category: 'ML',
    file: 'certificates/ml-python.pdf',
    description: 'Applied machine learning pipelines in Python, data preprocessing, feature engineering, classification and regression.',
  },
  {
    id: 'ml-onramp',
    title: 'Machine Learning Onramp',
    issuer: 'MathWorks Training Services',
    date: '14 Nov 2026',
    category: 'ML',
    file: 'certificates/ml-onramp.pdf',
    description: 'Supervised machine learning workflows, classification models, feature selection and evaluation in MATLAB.',
  },
  {
    id: 'intro-nn',
    title: 'Introduction to Neural Network',
    issuer: 'Simplilearn SkillUp',
    date: '15 Nov 2026',
    code: '11035220',
    category: 'AI',
    file: 'certificates/intro-nn.pdf',
    description: 'Perceptrons, multi-layer networks, activation functions, backpropagation and deep learning architectural principles.',
  },
  {
    id: 'encoder-decoder',
    title: 'Encoder-Decoder Architecture',
    issuer: 'Simplilearn SkillUp (Powered by Google Cloud)',
    date: '17 Nov 2026',
    code: '11041973',
    category: 'AI',
    file: 'certificates/encoder-decoder.pdf',
    description: 'Sequence-to-sequence deep learning models, encoder-decoder design and attention mechanisms for generative tasks.',
  },
  {
    id: 'databricks-ml',
    title: 'Get Started with Databricks for Machine Learning',
    issuer: 'Simplilearn SkillUp (Powered by Databricks)',
    date: '17 Nov 2026',
    code: '11042119',
    category: 'ML',
    file: 'certificates/databricks-ml.pdf',
    description: 'Unified lakehouse architecture, MLflow tracking, collaborative model development and scalable ML data pipelines.',
  },
  {
    id: 'azure-fundamentals',
    title: 'Azure Fundamentals',
    issuer: 'Simplilearn SkillUp (Powered by Microsoft)',
    date: '17 Nov 2026',
    code: '11042644',
    category: 'Cloud',
    file: 'certificates/azure-fundamentals.pdf',
    description: 'Core Microsoft Azure cloud services, cloud security, network architecture, storage and cloud compute foundations.',
  },
  {
    id: 'gemini-drive',
    title: 'Gemini in Google Drive',
    issuer: 'Simplilearn SkillUp (Powered by Google Cloud)',
    date: '17 Nov 2026',
    code: '11042589',
    category: 'AI',
    file: 'certificates/gemini-drive.pdf',
    description: 'Generative AI productivity workflows with Google Gemini AI integrated across workspace collaboration environments.',
  },
  {
    id: 'google-cloud-ai',
    title: 'Innovating with Google Cloud AI',
    issuer: 'Simplilearn SkillUp (Powered by Google Cloud)',
    date: '19 Nov 2026',
    code: '11052085',
    category: 'Cloud',
    file: 'certificates/google-cloud-ai.pdf',
    description: 'Google Cloud Vertex AI, Vision AI, Natural Language processing APIs, and enterprise AI solution design.',
  },
  {
    id: 'matlab-onramp',
    title: 'MATLAB Onramp',
    issuer: 'MathWorks Training Services',
    date: '12 Nov 2026',
    category: 'General',
    file: 'certificates/matlab-onramp.pdf',
    description: 'Computational programming, numerical matrix analysis, data visualisation and algorithm prototyping in MATLAB.',
  },
];

export const achievements: Achievement[] = [
  {
    id: 'best-student-2025',
    title: 'Overall Best Student — Upper 6 Commerce/Science',
    year: '2025',
    description: 'Awarded Overall Best Student in the Upper 6 Commerce/Science class at Lower Gwelo Adventist High School.',
    icon: 'Trophy',
    color: 'amber',
  },
  {
    id: 'best-cs-2025',
    title: 'Certificate of Merit — Best Computer Science Student',
    year: '2025',
    description: 'Honored as the Best Computer Science Student in Upper 6 at Lower Gwelo Adventist High School.',
    icon: 'Cpu',
    color: 'cyan',
  },
  {
    id: 'excellence-2025',
    title: 'Certificate of Excellence (Speech & Prize-Giving)',
    year: '2025',
    description: 'Awarded for outstanding academic achievement and academic distinction.',
    icon: 'Star',
    color: 'violet',
  },
  {
    id: 'excellence-2024',
    title: 'Certificate of Excellence (Speech & Prize-Giving)',
    year: '2024',
    description: 'Awarded for outstanding academic achievement in Lower 6.',
    icon: 'Star',
    color: 'violet',
  },
  {
    id: 'excellence-2023',
    title: 'Certificate of Excellence (Speech & Prize-Giving)',
    year: '2023',
    description: 'Awarded for academic excellence during high school studies.',
    icon: 'Star',
    color: 'violet',
  },
  {
    id: 'nfc-computer',
    title: 'National Foundation Certificate (Computer Operations)',
    year: '2024',
    description: 'National Foundation Certificate in Computer Operations and Packages.',
    icon: 'Monitor',
    color: 'blue',
  },
  {
    id: 'sportsperson-2024',
    title: 'Outstanding Sportsperson Award',
    year: '2024',
    description: 'Awarded for exceptional sportsmanship, athletic dedication, and representing the school.',
    icon: 'Award',
    color: 'emerald',
  },
  {
    id: 'volleyball-captain',
    title: 'Volleyball Team Captain',
    year: '2024',
    description: 'Appointed Volleyball Team Captain, leading squad strategy, training sessions, and inter-school tournaments.',
    icon: 'Users',
    color: 'orange',
  },
];
