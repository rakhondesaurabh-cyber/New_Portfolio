import { Project, Skill, Achievement, BlogPost, Education } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: '3D Interactive Portfolio',
    description: 'A personal portfolio built with Three.js and React Three Fiber, featuring interactive 3D elements and smooth GSAP animations.',
    tags: ['React', 'Three.js', 'GSAP', 'Tailwind'],
    image: 'https://picsum.photos/seed/portfolio/800/600',
    github: '#'
  },
  {
    id: '2',
    title: 'E-Commerce Dashboard',
    description: 'A modern admin dashboard for managing products, orders, and customers with real-time analytics.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: 'https://picsum.photos/seed/dashboard/800/600',
    github: '#'
  },
  {
    id: '3',
    title: 'UI/UX Design Concept',
    description: 'A mobile app design concept focused on clean aesthetics and user-centric navigation patterns.',
    tags: ['Figma', 'UI/UX', 'Design'],
    image: 'https://picsum.photos/seed/design/800/600',
    link: '#'
  },
  {
    id: '4',
    title: 'Spectrum',
    description: 'A full stack website using React, Node, Express, Css3/ vannila Css, Database is Supabase and Stripe Payment Gatway.',
    tags: ['React', 'Three.js', 'GSAP', 'Tailwind', 'UI/UX', 'Design','Node.js', 'Express'],
    image: 'https://picsum.photos/seed/picsum/200/300',
    link: 'https://www.pccoespectrum.in/'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Java', category: 'Languages' },
  { name: 'Python', category: 'Languages' },
  { name: 'Javascript', category: 'Languages' },
  { name: 'C++/C', category: 'Languages' },
  { name: 'HTML5', category: 'Frontend' },
  { name: 'CSS3', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Bootstrap', category: 'Frontend' },
  { name: 'Three.js', category: 'Frontend' },
  { name: 'GSAP', category: 'Design' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express', category: 'Backend' },
  { name: 'UI/UX Design', category: 'Design' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Firebase', category: 'Database' },
  { name: 'Git', category: 'Tools' }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Smart India Hackathon Finalist',
    issuer: 'Government of India',
    date: '2025',
    description: 'Developed a solution for real-time traffic management using AI.'
  },
  {
    title: 'Google Cloud Practitioner',
    issuer: 'Google Cloud',
    date: '2024',
    description: 'Certified in cloud fundamentals and infrastructure management.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Three.js',
    excerpt: 'A beginner guide to creating your first 3D scene in the browser using Three.js.',
    date: 'Oct 12, 2025',
    readTime: '5 min read',
    category: 'Development',
    link: 'https://threejs-journey.com/'
  },
  {
    id: '2',
    title: 'The Future of Web Animations',
    excerpt: 'Exploring how GSAP and Framer Motion are changing the way we think about web interactions.',
    date: 'Sep 28, 2025',
    readTime: '4 min read',
    category: 'Design',
    link: 'https://gsap.com/resources/'
  }
];

export const EDUCATION: Education[] = [
  {
    school: 'Pimpri Chinchwad College of Engineering (PCCOE)',
    degree: 'B.Tech in Computer Science',
    duration: '2025 - Present',
    description: 'First-year student focusing on core computer science principles and web technologies.'
  }
];
