import React from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Mail, Download, ExternalLink, GraduationCap, Award, BookOpen, Send, Code, Palette, Terminal, Cpu, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PROJECTS, SKILLS, ACHIEVEMENTS, BLOG_POSTS, EDUCATION } from './constants';
import { Project, Skill, Achievement, BlogPost, Education as EducationType } from './types';

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default function App() {
  const [isDark, setIsDark] = React.useState(false);
  const [projectFilter, setProjectFilter] = React.useState('All');

  const allTags = ['All', ...new Set(PROJECTS.flatMap(p => p.tags))];

  const filteredProjects = projectFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.tags.includes(projectFilter));

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter"
          >
            SR<span className="text-primary">.</span>
          </motion.div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {['About', 'Skills', 'Projects', 'Achievements', 'Blog', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              className="rounded-full"
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                  >
                    <Sun className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                  >
                    <Moon className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Download className="mr-2 h-4 w-4" /> Resume
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 space-y-32 relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] left-[5%] w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[40%] right-[5%] w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          />
        </div>

        {/* Hero Section */}
        <section id="hero" className="flex flex-col md:flex-row items-center justify-between gap-12 pt-12">
          <div className="flex-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-2"
            >
              <Badge variant="secondary" className="px-3 py-1">Available for opportunities</Badge>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
                Hi, I'm <span className="text-primary">Saurabh Rakhonde</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Computer Science Student at PCCOE. Passionate about building interactive web experiences and modern UI/UX design.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" asChild>
                <a href="#contact">Get in touch</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 text-muted-foreground"
            >
              <a href="https://github.com/rakhondesaurabh-cyber" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Github className="h-5 w-5" /></a>
              <a href="https://www.linkedin.com/in/saurabh-rakhonde-69b607398" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="mailto:rakhondesaurabh@gmail.com" className="hover:text-primary transition-colors"><Mail className="h-5 w-5" /></a>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-64 h-64 sm:w-80 sm:h-80"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-3xl rotate-6 -z-10" />
            <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-3 -z-10" />
            <img 
              src="https://picsum.photos/seed/saurabh/400/400" 
              alt="Saurabh Rakhonde" 
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </section>

        {/* About & Education */}
        <section id="about" className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Education</h2>
            <div className="space-y-8">
              {EDUCATION.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="mt-1 bg-primary/10 p-2 rounded-lg h-fit">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{edu.school}</h3>
                    <p className="text-primary font-medium">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground mb-2">{edu.duration}</p>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">My Journey</h2>
            <p className="text-muted-foreground leading-relaxed">
              As a first-year Computer Science student at Pimpri Chinchwad College of Engineering, I've dived deep into the world of technology. I started with the basics of Java and web development, and quickly found my passion in creating visually stunning and interactive web applications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe that good software isn't just about code—it's about the experience it provides to the user. That's why I focus on both robust backend logic and polished UI/UX design.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <SectionHeader title="Technical Skills" subtitle="A collection of technologies and tools I've mastered and worked with." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(['Languages', 'Frontend', 'Backend', 'Database', 'Design', 'Tools'] as const).map((category, index) => {
              const CategoryIcon = {
                Languages: Terminal,
                Frontend: Palette,
                Backend: Cpu,
                Database: Code,
                Design: Palette,
                Tools: Terminal
              }[category];

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full border-none shadow-md bg-card/50 backdrop-blur-sm overflow-hidden relative group-hover:shadow-primary/20 group-hover:shadow-2xl transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                      <CategoryIcon className="w-24 h-24" />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <CategoryIcon className="w-5 h-5" />
                        </div>
                        <CardTitle className="text-lg uppercase tracking-wider font-bold">{category}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {SKILLS.filter(s => s.category === category).map((skill) => (
                          <motion.div
                            key={skill.name}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Badge 
                              variant="secondary" 
                              className="px-3 py-1 bg-primary/5 hover:bg-primary/10 text-foreground transition-colors cursor-default"
                            >
                              {skill.name}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <SectionHeader title="Featured Projects" subtitle="Some of my recent work that showcases my skills and problem-solving approach." />
          
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {allTags.map(tag => {
              const count = tag === 'All' 
                ? PROJECTS.length 
                : PROJECTS.filter(p => p.tags.includes(tag)).length;
              return (
                <Button
                  key={tag}
                  variant={projectFilter === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() => setProjectFilter(tag)}
                  className="rounded-full"
                >
                  {tag} <span className="ml-2 opacity-50 text-xs">{count}</span>
                </Button>
              );
            })}
          </div>

          <motion.div 
            layout
            className="grid md:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden h-full flex flex-col group border-none shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                        {project.github && (
                          <Button size="icon" variant="secondary" className="rounded-full" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer"><Github className="h-4 w-4" /></a>
                          </Button>
                        )}
                        {project.link && (
                          <Button size="icon" variant="secondary" className="rounded-full" asChild>
                            <a href={project.link} target="_blank" rel="noopener noreferrer"><ExternalLink className="h-4 w-4" /></a>
                          </Button>
                        )}
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map(tag => (
                            <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-primary">{tag}</span>
                          ))}
                        </div>
                        <Badge variant="outline" className="text-[10px] uppercase tracking-wider">Project</Badge>
                      </div>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Achievements Section */}
        <section id="achievements">
          <SectionHeader title="Achievements & Certifications" subtitle="Milestones and recognitions I've earned along my journey." />
          <div className="grid md:grid-cols-2 gap-6">
            {ACHIEVEMENTS.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-primary/5 border-none">
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                      <CardDescription className="font-medium text-primary">{achievement.issuer} • {achievement.date}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog">
          <SectionHeader title="From the Blog" subtitle="Sharing my thoughts, tutorials, and learnings in the world of computer science." />
          <div className="grid md:grid-cols-2 gap-8">
            {BLOG_POSTS.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:bg-muted/50 transition-colors cursor-pointer border-none shadow-sm group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary/10 group-hover:bg-primary/30 transition-colors" />
                  <CardHeader>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="hover:text-primary transition-colors">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="link" className="p-0 h-auto text-primary" asChild>
                      <a href={post.link || "#"} target="_blank" rel="noopener noreferrer">
                        Read more <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <SectionHeader title="Get In Touch" subtitle="Have a question or want to work together? Feel free to reach out!" />
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Contact Information</h3>
                <p className="text-muted-foreground">I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <div className="flex items-center gap-2">
                      <a href="mailto:rakhondesaurabh@gmail.com" className="font-medium hover:text-primary transition-colors">
                        rakhondesaurabh@gmail.com
                      </a>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-6 w-6"
                        onClick={() => {
                          navigator.clipboard.writeText('rakhondesaurabh@gmail.com');
                        }}
                      >
                        <ExternalLink className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/saurabh-rakhonde-69b607398" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors">
                      linkedin.com/in/saurabh-rakhonde-69b607398
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <Card className="border-none shadow-xl">
              <CardContent className="pt-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="Project Inquiry" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="Tell me about your project..." className="min-h-[120px]" />
                </div>
                <Button className="w-full">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center space-y-4">
          <div className="text-xl font-bold tracking-tighter">
            SR<span className="text-primary">.</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Saurabh Rakhonde. Built with React, Tailwind CSS, and Motion.
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/rakhondesaurabh-cyber" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github className="h-5 w-5" /></a>
            <a href="https://www.linkedin.com/in/saurabh-rakhonde-69b607398" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
            <a href="mailto:rakhondesaurabh@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <motion.div
        style={{ opacity }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Button
          size="icon"
          className="rounded-full shadow-lg"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Send className="h-4 w-4 -rotate-90" />
        </Button>
      </motion.div>
    </div>
  );
}
