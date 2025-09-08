import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
      achievements: [
        "Increased application performance by 40%",
        "Led a team of 5 developers",
        "Implemented CI/CD pipelines",
        "Reduced deployment time by 60%"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      location: "New York, NY",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create user-friendly interfaces.",
      achievements: [
        "Built 15+ client projects",
        "Improved code quality with testing",
        "Reduced bug reports by 50%",
        "Mentored 3 junior developers"
      ]
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2019 - 2020",
      description: "Focused on creating responsive and interactive user interfaces. Worked closely with UX designers to implement pixel-perfect designs.",
      achievements: [
        "Developed responsive web applications",
        "Improved user engagement by 35%",
        "Implemented modern CSS frameworks",
        "Optimized for mobile devices"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      location: "Stanford, CA",
      period: "2017 - 2019",
      description: "Specialized in Software Engineering and Machine Learning. Graduated with honors.",
      achievements: [
        "GPA: 3.8/4.0",
        "Research in AI/ML",
        "Published 2 papers",
        "Teaching Assistant"
      ]
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      school: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2013 - 2017",
      description: "Strong foundation in computer science fundamentals, algorithms, and software development.",
      achievements: [
        "Magna Cum Laude",
        "Dean's List (6 semesters)",
        "ACM Programming Contest Winner",
        "Computer Science Society President"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const TimelineItem = ({ item, index, isEducation = false }) => (
    <motion.div
      variants={itemVariants}
      className="relative pl-8 pb-8 last:pb-0"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border"></div>
      
      {/* Timeline Dot */}
      <motion.div
        className="absolute left-0 top-2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
      >
        <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
      </motion.div>

      <Card className="ml-4 hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-xl mb-1">
                {isEducation ? item.degree : item.title}
              </CardTitle>
              <CardDescription className="text-base font-medium text-primary">
                {isEducation ? item.school : item.company}
              </CardDescription>
            </div>
            <div className="text-right text-sm text-muted-foreground">
              <div className="flex items-center mb-1">
                <Calendar className="h-4 w-4 mr-1" />
                {item.period}
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {item.location}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{item.description}</p>
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">Key Achievements:</h4>
            <ul className="space-y-1">
              {item.achievements.map((achievement, i) => (
                <li key={i} className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Experience & <span className="text-primary">Education</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            My professional journey and educational background
          </motion.p>
        </motion.div>

        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="experience" className="flex items-center space-x-2">
              <Briefcase className="h-4 w-4" />
              <span>Experience</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center space-x-2">
              <GraduationCap className="h-4 w-4" />
              <span>Education</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experience">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="relative"
            >
              {experiences.map((experience, index) => (
                <TimelineItem
                  key={index}
                  item={experience}
                  index={index}
                  isEducation={false}
                />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="education">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="relative"
            >
              {education.map((edu, index) => (
                <TimelineItem
                  key={index}
                  item={edu}
                  index={index}
                  isEducation={true}
                />
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
