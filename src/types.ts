export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Languages' | 'Design' | 'Tools' | 'Database';
  icon?: any;
}

export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  link?: string;
}

export interface Education {
  school: string;
  degree: string;
  duration: string;
  description?: string;
}
