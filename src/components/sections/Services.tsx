import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BarChartIcon, TrendingUpIcon, UsersIcon, BrainIcon, PencilIcon, MonitorIcon } from 'lucide-react';
// import imgone from '../../assets/it.png';
// import imgtwo from '../../assets/hc.png';

export function Services() {
  const [hasAnimated, setHasAnimated] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setHasAnimated(true);
    }
  }, [inView]);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const topItemVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };

  const bottomItemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };

  const services = [
    {
      icon: <BarChartIcon className="w-6 h-6" />, title: "Social Media Strategy", description: "Developing comprehensive strategies to maximize your brand's social media presence and engagement."
    },
    {
      icon: <TrendingUpIcon className="w-6 h-6" />, title: "Growth Marketing", description: "Data-driven approaches to grow your audience and increase conversion rates across platforms."
    },
    {
      icon: <UsersIcon className="w-6 h-6" />, title: "Community Building", description: "Creating and nurturing engaged communities around your brand or product."
    },
    {
      icon: <BrainIcon className="w-6 h-6" />, title: "Content Strategy", description: "Planning and executing content strategies that resonate with your target audience."
    },
    {
      icon: <PencilIcon className="w-6 h-6" />, title: "Copywriting", description: "Crafting compelling copy that drives engagement and conversions across platforms."
    },
    {
      icon: <MonitorIcon className="w-6 h-6" />, title: "Analytics & Reporting", description: "Detailed analysis of campaign performance with actionable insights for improvement."
    },
    {
      icon:  <TrendingUpIcon className="w-6 h-6" /> , title: "IT Training", description: "Learn essential digital skills to enhance your career. Gain knowledge in computers, software, and technology."
    },
    {
      icon:  <UsersIcon className="w-6 h-6" /> , title: "Handicraft Training ", description: " Master creative techniques for making handmade products. Turn your artistic skills into a profession"
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 w-full">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={hasAnimated ? "show" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={topItemVariants}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            My Services
          </motion.h2>
          <motion.p variants={topItemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            Specialized services to elevate your brand's social media presence and marketing strategy.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={hasAnimated ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={index < 3 ? topItemVariants : bottomItemVariants}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
