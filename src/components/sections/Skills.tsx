export function Skills() {
  const skills = [{
    category: 'Social Media',
    items: [{
      name: 'Strategy Development',
      level: 95
    }, {
      name: 'Content Creation',
      level: 90
    }, {
      name: 'Community Management',
      level: 85
    }, {
      name: 'Analytics & Insights',
      level: 88
    }]
  }, {
    category: 'Marketing',
    items: [{
      name: 'Campaign Planning',
      level: 92
    }, {
      name: 'Brand Development',
      level: 85
    }, {
      name: 'Marketing Analytics',
      level: 80
    }, {
      name: 'SEO',
      level: 75
    }]
  }, {
    category: 'Technical',
    items: [{
      name: 'Digital Tools',
      level: 85
    }, {
      name: 'Photoshop',
      level: 80
    }, {
      name: 'Figma',
      level: 78
    }, {
      name: 'Adobe Illustrator',
      level: 70
    }]
  }];
  
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 w-full">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A diverse set of skills honed through years of experience in social media marketing and entrepreneurship.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <div key={groupIndex} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                {skillGroup.category}
              </h3>
              <div className="space-y-6">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
