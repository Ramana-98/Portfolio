import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Database, 
  Palette, 
  Server, 
  Smartphone, 
  Globe,
  GitBranch,
  Users,
  Lightbulb,
  MessageSquare
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = {
    frontend: {
      title: "Frontend",
      icon: Code,
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "JavaScript", level: 90, icon: "🟨" },
        { name: "TypeScript", level: 85, icon: "🔷" },
        { name: "Vue.js", level: 80, icon: "💚" },
        { name: "HTML/CSS", level: 95, icon: "🎨" },
        { name: "Tailwind CSS", level: 90, icon: "💨" },
        { name: "Sass/SCSS", level: 85, icon: "🎀" },
        { name: "Next.js", level: 88, icon: "⚫" }
      ]
    },
    backend: {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", level: 90, icon: "💚" },
        { name: "Python", level: 85, icon: "🐍" },
        { name: "Express.js", level: 88, icon: "🚂" },
        { name: "Django", level: 75, icon: "🎸" },
        { name: "GraphQL", level: 80, icon: "🔗" },
        { name: "REST APIs", level: 92, icon: "🌐" },
        { name: "Microservices", level: 78, icon: "🔧" },
        { name: "Socket.io", level: 82, icon: "🔌" }
      ]
    },
    database: {
      title: "Database",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 88, icon: "🍃" },
        { name: "PostgreSQL", level: 85, icon: "🐘" },
        { name: "MySQL", level: 82, icon: "🐬" },
        { name: "Redis", level: 75, icon: "🔴" },
        { name: "Firebase", level: 80, icon: "🔥" },
        { name: "Prisma", level: 78, icon: "💎" }
      ]
    },
    tools: {
      title: "Tools & DevOps",
      icon: GitBranch,
      skills: [
        { name: "Git", level: 92, icon: "📝" },
        { name: "Docker", level: 80, icon: "🐳" },
        { name: "AWS", level: 75, icon: "☁️" },
        { name: "Vercel", level: 85, icon: "▲" },
        { name: "GitHub Actions", level: 78, icon: "🤖" },
        { name: "Webpack", level: 80, icon: "📦" },
        { name: "Vite", level: 88, icon: "⚡" },
        { name: "Jest", level: 82, icon: "🃏" }
      ]
    },
    soft: {
      title: "Soft Skills",
      icon: Users,
      skills: [
        { name: "Leadership", level: 85, icon: "👑" },
        { name: "Communication", level: 90, icon: "💬" },
        { name: "Problem Solving", level: 92, icon: "🧩" },
        { name: "Team Work", level: 88, icon: "🤝" },
        { name: "Creativity", level: 85, icon: "🎨" },
        { name: "Adaptability", level: 90, icon: "🔄" }
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const SkillCard = ({ skill, index }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group"
    >
      <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
        <CardContent className="p-6 text-center">
          <div className="text-3xl mb-3">{skill.icon}</div>
          <h3 className="font-semibold mb-2">{skill.name}</h3>
          <div className="relative">
            <div className="w-full bg-muted rounded-full h-2 mb-2">
              <motion.div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
            <span className="text-sm text-muted-foreground">{skill.level}%</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Skills & <span className="text-primary">Expertise</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Technologies and tools I work with to bring ideas to life
          </motion.p>
        </motion.div>

        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            {Object.entries(skillCategories).map(([key, category]) => {
              const IconComponent = category.icon;
              return (
                <TabsTrigger key={key} value={key} className="flex items-center space-x-2">
                  <IconComponent className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {Object.entries(skillCategories).map(([key, category]) => (
            <TabsContent key={key} value={key}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              >
                {category.skills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Skills Summary */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants} className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
            <p className="text-muted-foreground">
              Creating responsive and interactive user interfaces with modern frameworks and libraries
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Server className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
            <p className="text-muted-foreground">
              Building scalable server-side applications and APIs with robust architecture
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
            <p className="text-muted-foreground">
              Analyzing complex problems and implementing efficient, maintainable solutions
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
