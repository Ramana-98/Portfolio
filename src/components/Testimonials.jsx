import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "Tech Innovations Inc.",
      image: "SJ",
      content: "Working with this developer was an absolute pleasure. They delivered high-quality code on time and exceeded our expectations. Their attention to detail and problem-solving skills are exceptional.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      company: "StartupXYZ",
      image: "MC",
      content: "One of the most talented developers I've worked with. They have a great understanding of both frontend and backend technologies, and their code is always clean and well-documented.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Design Director",
      company: "Creative Agency",
      image: "ER",
      content: "They perfectly translated our designs into pixel-perfect, responsive websites. The collaboration was smooth, and they provided valuable technical insights that improved the final product.",
      rating: 5
    },
    {
      id: 4,
      name: "David Kim",
      role: "Lead Developer",
      company: "Digital Solutions Ltd.",
      image: "DK",
      content: "An excellent team player with strong technical skills. They consistently deliver high-quality work and are always willing to help others. Their expertise in React and Node.js is impressive.",
      rating: 5
    }
  ];

  const achievements = [
    {
      title: "Best Developer Award",
      organization: "Tech Conference 2023",
      year: "2023",
      description: "Recognized for outstanding contribution to open-source projects"
    },
    {
      title: "Innovation Excellence",
      organization: "Startup Accelerator",
      year: "2022",
      description: "Led development of award-winning fintech application"
    },
    {
      title: "Community Leader",
      organization: "Developer Community",
      year: "2021",
      description: "Mentored 50+ junior developers and organized tech meetups"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

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
    <section className="py-20 bg-muted/50">
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
            Testimonials & <span className="text-primary">Achievements</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            What clients say about my work and recognition I've received
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Testimonials Carousel */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">Client Testimonials</h3>
            
            <div 
              className="relative"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-8 hover:shadow-xl transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                          {testimonials[currentIndex].image}
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                          <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                          <p className="text-sm text-primary">{testimonials[currentIndex].company}</p>
                        </div>
                      </div>
                      
                      <div className="flex mb-4">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      
                      <div className="relative">
                        <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                        <p className="text-muted-foreground leading-relaxed pl-6">
                          {testimonials[currentIndex].content}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-center space-x-4 mt-6">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2 mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">Achievements</h3>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                          {achievement.year.slice(-2)}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1">{achievement.title}</h4>
                          <p className="text-primary text-sm mb-2">{achievement.organization}</p>
                          <p className="text-muted-foreground text-sm">{achievement.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
