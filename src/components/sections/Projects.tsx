import { useState } from 'react';
import img1 from "../../assets/img9.png";
import img14 from "../../assets/img14.png";
import img8 from "../../assets/img8.png";
import img30 from "../../assets/img30.png";
import img7 from "../../assets/img24.png";
import img26 from "../../assets/img26.png";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "Women's Entrepreneurship Summit",
      category: 'NEH',
      image: img1,  // ✅ Use image as a string, not an object
      description: 'Organized a 3-day summit featuring workshops and networking opportunities for women entrepreneurs.'
    },
    {
      title: 'Tourism App Redesign',
      category: 'Info Finder',
      image: img30,
      description: 'Led the UX/UI redesign of the Info Finder mobile app, increasing user engagement by 40%.'
    },
    {
      title: 'Digital Skills Workshop Series',
      category: 'NEH',
      image: img8,
      description: 'Developed and delivered a series of workshops teaching digital marketing skills to women entrepreneurs.'
    },
    {
      title: 'Hotel Partner Acquisition Campaign',
      category: 'Info Finder',
      image: img14,
      description: 'Launched a digital campaign that resulted in 50+ new hotel partnerships for the platform.'
    },
    {
      title: 'Social Media Growth Strategy',
      category: 'Marketing',
      image: img7,
      description: 'Developed a comprehensive social media strategy for a retail client, growing their following by 200%.'
    },
    {
      title: 'Adventure Tourism Campaign',
      category: 'Info Finder',
      image: img26,
      description: 'Created and executed a marketing campaign highlighting adventure tourism opportunities.'
    }
  ];

  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white w-full">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Showcasing some of my most impactful work across different initiatives.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button onClick={() => setActiveFilter('all')} className={`px-6 py-2 rounded-full transition-all duration-300 ${activeFilter === 'all' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
              All
            </button>
            <button onClick={() => setActiveFilter('NEH')} className={`px-6 py-2 rounded-full transition-all duration-300 ${activeFilter === 'NEH' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
              NEH
            </button>
            <button onClick={() => setActiveFilter('Info Finder')} className={`px-6 py-2 rounded-full transition-all duration-300 ${activeFilter === 'Info Finder' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
              Info Finder
            </button>
            <button onClick={() => setActiveFilter('Marketing')} className={`px-6 py-2 rounded-full transition-all duration-300 ${activeFilter === 'Marketing' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
              Marketing
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="text-blue-600 font-medium hover:underline">
                  View details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
