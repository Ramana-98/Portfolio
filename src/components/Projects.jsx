import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
      longDescription: "A comprehensive e-commerce platform featuring user authentication, product management, shopping cart functionality, payment integration with Stripe, and an admin dashboard. Built with modern technologies and best practices.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      github: "https://github.com/yourusername/ecommerce",
      live: "https://ecommerce-demo.com",
      features: [
        "User Authentication & Authorization",
        "Product Catalog with Search & Filters",
        "Shopping Cart & Wishlist",
        "Secure Payment Processing",
        "Admin Dashboard",
        "Order Management System"
      ]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      longDescription: "A modern task management application that allows teams to collaborate effectively with real-time updates, drag-and-drop functionality, and comprehensive project tracking.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      github: "https://github.com/yourusername/taskmanager",
      live: "https://taskmanager-demo.com",
      features: [
        "Real-time Collaboration",
        "Drag & Drop Interface",
        "Project & Task Organization",
        "Team Management",
        "Progress Tracking",
        "Notification System"
      ]
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts",
      longDescription: "An intuitive weather dashboard that provides detailed weather information, forecasts, and interactive maps. Features location-based services and beautiful data visualizations.",
      image: "/api/placeholder/400/250",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Geolocation"],
      github: "https://github.com/yourusername/weather",
      live: "https://weather-demo.com",
      features: [
        "Current Weather Conditions",
        "7-Day Forecast",
        "Interactive Weather Maps",
        "Location-based Services",
        "Weather Alerts",
        "Data Visualizations"
      ]
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management",
      longDescription: "A comprehensive social media analytics dashboard that helps businesses track their social media performance across multiple platforms with detailed insights and reporting.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      github: "https://github.com/yourusername/social-dashboard",
      live: "https://social-demo.com",
      features: [
        "Multi-platform Integration",
        "Real-time Analytics",
        "Custom Reports",
        "Engagement Tracking",
        "Content Scheduling",
        "Performance Insights"
      ]
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website with animations",
      longDescription: "A sleek and modern portfolio website showcasing projects and skills with smooth animations, dark/light mode, and optimized performance.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://portfolio-demo.com",
      features: [
        "Responsive Design",
        "Smooth Animations",
        "Dark/Light Mode",
        "SEO Optimized",
        "Fast Loading",
        "Modern UI/UX"
      ]
    },
    {
      id: 6,
      title: "AI Chat Application",
      description: "Real-time chat app with AI-powered features",
      longDescription: "An innovative chat application that integrates AI capabilities for smart responses, language translation, and content moderation, built with modern real-time technologies.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Socket.io", "OpenAI API", "Express.js"],
      github: "https://github.com/yourusername/ai-chat",
      live: "https://ai-chat-demo.com",
      features: [
        "Real-time Messaging",
        "AI-powered Responses",
        "Language Translation",
        "Content Moderation",
        "File Sharing",
        "Group Chats"
      ]
    }
  ];

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

  return (
    <section id="projects" className="py-20">
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
            Featured <span className="text-primary">Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Here are some of my recent projects that showcase my skills and experience
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-4xl font-bold text-primary opacity-50">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button
                      variant="secondary"
                      size="sm"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* View Details Button */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                        <DialogDescription className="text-base">
                          {project.longDescription}
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-6">
                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold mb-2">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Features */}
                        <div>
                          <h4 className="font-semibold mb-2">Key Features</h4>
                          <ul className="space-y-1">
                            {project.features.map((feature, index) => (
                              <li key={index} className="flex items-center text-sm">
                                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Links */}
                        <div className="flex space-x-4">
                          <Button asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              View Code
                            </a>
                          </Button>
                          <Button variant="outline" asChild>
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
