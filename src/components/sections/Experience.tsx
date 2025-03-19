import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Experience() {
  const experiences = [
    {
      period: '2023 - Present',
      role: 'Co-founder & Marketing Director',
      company: 'North Elegance Hub',
      description:
        "Leading marketing strategies for an organization focused on women's empowerment through freelancing, vocational training, and skills development initiatives.",
    },
    {
      period: '2024 - Present',
      role: 'Co-founder & Chief Marketing Officer',
      company: 'Info Finder',
      description:
        'Spearheading marketing efforts for a web-based platform that provides location-based tourism information and online booking services.',
    },
    {
      period: '2022 - 2023',
      role: 'Graphic Design',
      company: 'Binary Hub',
      description:
        'Designed visually compelling graphics for social media, creating brand-aligned content that increased engagement by 45% on average.',
    },
    {
      period: '2020 - 2022',
      role: 'Video Editing',
      company: 'Discover Pakistan',
      description:
        "Edited and produced engaging video content for social media, developed video strategies, and increased audience engagement by 300%.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white w-full">
      <div className="container mx-auto px-6">
        {/* Section Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} // Ensures animation occurs only when scrolling down
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A track record of success in social media marketing and business leadership.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-500"></div>

          {/* Experience Items */}
          <div className="relative z-10">
            {experiences.map((exp, index) => {
              const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

              return (
                <motion.div
                  ref={ref}
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className={`flex flex-col md:flex-row items-center md:items-start mb-12 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'
                    } md:text-${index % 2 === 0 ? 'left' : 'right'}`}
                  >
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                      <span className="text-sm font-semibold text-purple-600">
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-bold mt-2">{exp.role}</h3>
                      <h4 className="text-lg text-blue-600 mb-3">{exp.company}</h4>
                      <p className="text-gray-600">{exp.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full my-4 md:my-0 md:mx-4 shadow-md">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-full md:w-1/2"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
