// src/data/experience.ts
export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'work' | 'volunteer' | 'leadership';
  description: string;
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: 'current' | 'completed';
  details: string[];
  highlights?: string[];
}

export const experiences: Experience[] = [
  {
    id: 'tutor',
    role: 'Freelance Computer Tutor',
    organization: 'Self-employed',
    period: '2025 – Present',
    type: 'work',
    description: 'Providing individualized computer literacy and introductory programming lessons to students and community members, focusing on digital confidence and foundational computing skills.',
    skills: ['Teaching', 'Digital Literacy', 'Communication', 'Curriculum Design'],
  },
  {
    id: 'event-organizer',
    role: 'Event Organizer — School Sports Days',
    organization: 'Lower Gwelo Adventist High School',
    period: '2024',
    type: 'leadership',
    description: 'Coordinated event logistics, scheduling, team participation, and on-field execution, supporting seamless delivery of annual competitive athletic events.',
    skills: ['Event Planning', 'Logistics', 'Leadership', 'Team Coordination'],
  },
  {
    id: 'volleyball-captain',
    role: 'Volleyball Team Captain',
    organization: 'Lower Gwelo Adventist High School',
    period: '2024',
    type: 'leadership',
    description: 'Captained the varsity volleyball squad, organizing training drills, mentoring younger athletes, and driving morale in inter-school competitions.',
    skills: ['Team Leadership', 'Athletic Strategy', 'Discipline', 'Motivation'],
  },
  {
    id: 'volunteer-assistant',
    role: 'Volunteer Teaching Assistant',
    organization: 'Lower Gwelo Adventist High School',
    period: '2023',
    type: 'volunteer',
    description: 'Supported teaching staff with classroom activities, academic record administration, and student study assistance.',
    skills: ['Academic Support', 'Administration', 'Patience', 'Collaboration'],
  },
  {
    id: 'agriculture',
    role: 'Agriculture Project Assistant',
    organization: 'Lower Gwelo Adventist High School',
    period: '2023',
    type: 'volunteer',
    description: 'Participated in poultry and agricultural initiatives, acquiring hands-on operational experience in sustainable food management and team labor.',
    skills: ['Operations', 'Teamwork', 'Project Execution', 'Reliability'],
  },
];

export const educationHistory: Education[] = [
  {
    id: 'kpriet',
    degree: 'Bachelor of Engineering (B.E.) — Computer Science & Engineering (AI & ML)',
    institution: 'KPR Institute of Engineering and Technology (KPRIET)',
    location: 'Tamil Nadu, India',
    period: 'Currently Studying (2025 – Present)',
    status: 'current',
    details: [
      'Specialization: Artificial Intelligence and Machine Learning',
      'Curriculum covering data structures, intelligent systems, neural networks and modern software engineering',
      'Actively developing scalable digital products and applied AI initiatives alongside coursework',
    ],
  },
  {
    id: 'lgahs-alevel',
    degree: 'Advanced Level (ZIMSEC)',
    institution: 'Lower Gwelo Adventist High School',
    location: 'Zimbabwe',
    period: 'Graduated 2025',
    status: 'completed',
    details: [
      'Pure Mathematics — Grade A',
      'Physics — Grade A',
      'Computer Science — Grade A',
      'Statistics — Grade A',
      'Chemistry — Grade B',
    ],
    highlights: [
      'Overall Best Student, Upper 6 Commerce/Science Class (2025)',
      'Certificate of Merit — Best Computer Science Student, Upper 6 (2025)',
      'Certificates of Excellence on Speech and Prize-Giving Days (2023, 2024, 2025)',
    ],
  },
  {
    id: 'lgahs-olevel',
    degree: 'Ordinary Level (ZIMSEC)',
    institution: 'Lower Gwelo Adventist High School',
    location: 'Zimbabwe',
    period: 'Graduated 2023',
    status: 'completed',
    details: [
      'Mathematics (A), Computer Science (A), Physics (A), Combined Science (A), Biology (A), Geography (A), Statistics (A)',
      'English Language (B), Chemistry (B)',
    ],
  },
];

export const languagesSpoken = [
  { language: 'English', proficiency: 'Fluent / Professional Working' },
  { language: 'Shona', proficiency: 'Native / Fluent' },
  { language: 'Ndebele', proficiency: 'Native / Fluent' },
];

export const timeline = [
  { year: '2023', event: 'Completed O-Levels with 7 As & 2 Bs at Lower Gwelo Adventist High School', type: 'education' },
  { year: '2023', event: 'Volunteered as Teaching Assistant and Agriculture Project Assistant', type: 'volunteer' },
  { year: '2024', event: 'Appointed Volleyball Team Captain & Sports Days Event Organizer', type: 'leadership' },
  { year: '2024', event: 'Earned Speech & Prize-Giving Excellence awards + Outstanding Sportsperson', type: 'achievement' },
  { year: '2025', event: 'Completed A-Levels: Pure Math (A), Physics (A), CS (A), Stats (A), Chem (B)', type: 'education' },
  { year: '2025', event: 'Awarded Overall Best Student & Best CS Student in Upper 6', type: 'achievement' },
  { year: '2025', event: 'Enrolled in B.E. Computer Science & Engineering (AI/ML) at KPRIET, India', type: 'education' },
  { year: '2026', event: 'Founded Afrim Technologies — launched Afrim Marketplace development (afrim.co.zw)', type: 'entrepreneurship' },
  { year: '2026', event: 'Completed 10 specialized credentials across AI, ML, Google Cloud AI & Azure', type: 'learning' },
];
