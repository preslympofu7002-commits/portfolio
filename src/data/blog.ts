// src/data/blog.ts
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  date: string;
  readTime: string;
  published: boolean;
  tags: string[];
}

// Add real articles here when ready. The structure supports full content publishing.
export const blogPosts: BlogPost[] = [
  // Template — replace with your actual articles:
  // {
  //   id: 'article-id',
  //   title: 'Article Title',
  //   excerpt: 'Short excerpt shown on card',
  //   content: 'Full article markdown content',
  //   category: 'AI & Machine Learning',
  //   date: '2025-11-01',
  //   readTime: '5 min read',
  //   published: true,
  //   tags: ['AI', 'Machine Learning'],
  // },
];

export const blogCategories = [
  'All',
  'Artificial Intelligence',
  'Machine Learning',
  'Software Engineering',
  'Technology Entrepreneurship',
  'Afrim Technologies',
  'Learning Journey',
];
