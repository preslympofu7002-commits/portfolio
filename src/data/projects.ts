// src/data/projects.ts
export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  features: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'in-development' | 'exploration' | 'live';
  category: 'afrim' | 'software';
  featured?: boolean;
}

export const afrimProjects: Project[] = [
  {
    id: 'afrim-marketplace',
    title: 'Afrim Marketplace',
    tagline: 'African digital commerce platform · afrim.co.zw',
    description: 'An African e-commerce marketplace platform designed to connect buyers and sellers through a digital shopping experience tailored for regional commerce and local payment methods.',
    problem: 'African commerce lacks accessible, purpose-built digital platforms that cater to regional market dynamics, enabling merchants of all sizes to participate in the digital economy.',
    features: [
      'Customer registration and secure authentication',
      'Product discovery, search and category browsing',
      'Real-time shopping cart and checkout workflows',
      'Merchant & seller dashboard for catalog management',
      'Order processing and shipment lifecycle tracking',
      'Mobile-first responsive design for emerging consumer networks',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Supabase', 'Tailwind CSS'],
    liveUrl: 'https://afrim.co.zw',
    githubUrl: 'https://github.com/preslympofu7002-commits',
    status: 'in-development',
    category: 'afrim',
    featured: true,
  },
  {
    id: 'afrim-ai',
    title: 'Afrim AI',
    tagline: 'Applied artificial intelligence for African commerce',
    description: 'An emerging AI-focused initiative under Afrim Technologies, exploring intelligent digital solutions, regional language processing, and personalized consumer recommendations.',
    problem: 'Mainstream AI solutions rarely account for local African dialects, emerging market inventory realities, and unique commercial purchasing behaviors.',
    features: [
      'Regional language and intent understanding exploration',
      'Personalized product recommendation prototypes',
      'Predictive inventory demand forecasting concepts',
      'Automated merchant customer support integrations',
    ],
    technologies: ['Python', 'scikit-learn', 'Generative AI', 'NLP'],
    status: 'exploration',
    category: 'afrim',
    featured: true,
  },
  {
    id: 'afrim-pay',
    title: 'Afrim Pay',
    tagline: 'Inclusive digital payment protocols for emerging markets',
    description: 'A fintech initiative under Afrim Technologies researching digital transaction settlement protocols and frictionless payment gateways tailored for emerging economies.',
    problem: 'High cross-border fees and limited access to formal banking infrastructure inhibit fluid commerce across African markets.',
    features: [
      'Mobile-money transaction gateway research',
      'Low-bandwidth payment confirmation protocols',
      'Merchant settlement flow prototypes',
      'Security and fraud prevention framework study',
    ],
    technologies: ['Fintech Protocols', 'Security Architecture', 'API Integration'],
    status: 'exploration',
    category: 'afrim',
    featured: true,
  },
];

export const softwareProjects: Project[] = [
  {
    id: 'khetvani',
    title: 'Khetvani',
    tagline: 'Agricultural technology · early concept',
    description: 'An agri-tech initiative exploring how accessible digital tools can support smallholder farmers — from crop advisory information and market linkages to practical, mobile-first agricultural knowledge.',
    problem: 'Smallholder farmers often lack timely access to agricultural information, market prices and digital tools suited to rural connectivity constraints.',
    features: [
      'Research into crop advisory and farming information access for smallholders',
      'Exploration of market price and buyer linkage mechanisms',
      'Mobile-first, low-bandwidth design considerations for rural users',
      'Early-stage concept — actively defining the product scope',
    ],
    technologies: ['Product Research', 'AgriTech', 'Mobile-First Design'],
    status: 'exploration',
    category: 'software',
  },
];
