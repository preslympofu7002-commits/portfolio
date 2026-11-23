// src/data/ailab.ts
export interface LabCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
  description: string;
  items: LabItem[];
}

export interface LabItem {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  tags: string[];
  link?: string;
  date?: string;
  type: 'course' | 'experiment' | 'notebook' | 'project' | 'research';
}

export const labCategories: LabCategory[] = [
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    icon: 'Brain',
    color: 'cyan',
    description: 'Exploring foundational AI concepts, reasoning, intelligent agents and real-world AI applications.',
    items: [
      {
        id: 'ai-fundamentals',
        title: 'AI Fundamentals',
        description: 'Core principles of Artificial Intelligence including problem solving, search, reasoning and decision-making in intelligent agents.',
        status: 'completed',
        tags: ['AI', 'Agents', 'Reasoning', 'Search'],
        type: 'course',
        date: '2024',
      },
      {
        id: 'generative-ai-learning',
        title: 'Generative AI Exploration',
        description: 'Understanding large language models, generative architectures including Gemini AI and practical applications of generative AI tools.',
        status: 'in-progress',
        tags: ['LLMs', 'Gemini AI', 'Generative AI'],
        type: 'research',
        date: '2024',
      },
      {
        id: 'ai-applications',
        title: 'AI Applications & Use Cases',
        description: 'Studying how AI is applied across industries: healthcare, finance, education, and digital commerce.',
        status: 'in-progress',
        tags: ['Applications', 'Use Cases', 'Industry AI'],
        type: 'research',
        date: '2024',
      },
    ],
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    icon: 'TrendingUp',
    color: 'blue',
    description: 'Building foundational understanding of machine learning algorithms, workflows and Python-based implementation.',
    items: [
      {
        id: 'intro-ml',
        title: 'Introduction to Machine Learning',
        description: 'Supervised and unsupervised learning concepts, model evaluation, overfitting, underfitting and core ML principles.',
        status: 'completed',
        tags: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation'],
        type: 'course',
        date: '2024',
      },
      {
        id: 'ml-python',
        title: 'Machine Learning Using Python',
        description: 'Practical ML implementation using Python, exploring sklearn, data preprocessing, feature engineering and model training.',
        status: 'completed',
        tags: ['Python', 'scikit-learn', 'Data Preprocessing'],
        type: 'course',
        date: '2024',
      },
      {
        id: 'ml-mathworks',
        title: 'ML Onramp — MathWorks',
        description: 'Introduction to machine learning using MATLAB, covering classification, regression and ML workflow fundamentals.',
        status: 'completed',
        tags: ['MATLAB', 'MathWorks', 'Classification', 'Regression'],
        type: 'course',
        date: '2024',
      },
    ],
  },
  {
    id: 'neural-networks',
    title: 'Neural Networks',
    icon: 'Network',
    color: 'violet',
    description: 'Exploring deep learning architectures, neural network design and sequence modelling approaches.',
    items: [
      {
        id: 'nn-fundamentals',
        title: 'Neural Network Fundamentals',
        description: 'Perceptrons, activation functions, backpropagation, layers and training deep neural networks.',
        status: 'completed',
        tags: ['Neural Networks', 'Backpropagation', 'Deep Learning'],
        type: 'course',
        date: '2024',
      },
      {
        id: 'encoder-decoder',
        title: 'Encoder-Decoder Architecture',
        description: 'Sequence-to-sequence models, encoder-decoder design principles and attention mechanisms in neural networks.',
        status: 'completed',
        tags: ['Encoder-Decoder', 'Seq2Seq', 'Attention'],
        type: 'course',
        date: '2024',
      },
      {
        id: 'intelligent-architectures',
        title: 'Exploring Intelligent Architectures',
        description: 'Ongoing exploration of transformer architectures, CNNs, RNNs and emerging neural network designs.',
        status: 'in-progress',
        tags: ['Transformers', 'CNN', 'RNN', 'Architecture'],
        type: 'research',
        date: '2024',
      },
    ],
  },
  {
    id: 'cloud-ai',
    title: 'Cloud & AI Technologies',
    icon: 'Cloud',
    color: 'emerald',
    description: 'Learning cloud platforms designed to support AI and machine learning at scale.',
    items: [
      {
        id: 'google-cloud-ai',
        title: 'Innovating with Google Cloud AI',
        description: 'Google Cloud AI products, Vision AI, Natural Language, AutoML and AI-powered innovation on GCP.',
        status: 'completed',
        tags: ['Google Cloud', 'AutoML', 'Vision AI', 'NLP'],
        type: 'course',
        date: '2024',
      },
      {
        id: 'databricks-ml',
        title: 'Databricks for Machine Learning',
        description: 'Getting started with Databricks unified analytics platform for collaborative ML workflows and data engineering.',
        status: 'completed',
        tags: ['Databricks', 'Apache Spark', 'MLflow'],
        type: 'course',
        date: '2024',
      },
      {
        id: 'azure-fundamentals',
        title: 'Azure Fundamentals',
        description: 'Microsoft Azure cloud services, storage, compute and core cloud concepts including AI services.',
        status: 'completed',
        tags: ['Azure', 'Cloud Computing', 'Microsoft'],
        type: 'course',
        date: '2024',
      },
      {
        id: 'gemini-drive',
        title: 'Gemini in Google Drive',
        description: 'Leveraging Google Gemini AI capabilities within Google Workspace to enhance productivity workflows.',
        status: 'completed',
        tags: ['Gemini', 'Google Workspace', 'Productivity AI'],
        type: 'course',
        date: '2024',
      },
    ],
  },
  {
    id: 'experiments',
    title: 'Future Experiments',
    icon: 'FlaskConical',
    color: 'amber',
    description: 'Planned AI experiments, Python notebooks, ML demonstrations and research mini-projects.',
    items: [
      {
        id: 'coming-soon-1',
        title: 'Python ML Notebooks',
        description: 'Planned Jupyter notebooks implementing machine learning algorithms from scratch and with libraries.',
        status: 'planned',
        tags: ['Python', 'Jupyter', 'ML'],
        type: 'notebook',
      },
      {
        id: 'coming-soon-2',
        title: 'AI Experiment — Text Classification',
        description: 'A planned mini-project exploring text classification using Python and scikit-learn.',
        status: 'planned',
        tags: ['NLP', 'Classification', 'Python'],
        type: 'experiment',
      },
      {
        id: 'coming-soon-3',
        title: 'Neural Network from Scratch',
        description: 'Building a simple neural network implementation in Python to consolidate deep learning fundamentals.',
        status: 'planned',
        tags: ['Neural Networks', 'Python', 'Deep Learning'],
        type: 'experiment',
      },
    ],
  },
];
