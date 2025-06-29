
const Experience = () => {
  const experiences = [
    {
      company: "Self-Employed, NYC",
      period: "Sep 2020 - July 2023",
      position: "Visual Designer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      active: true
    },
    {
      company: "Insightancer", 
      period: "Aug 2016 - Sep 2020",
      position: "UI/UX Designer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      active: false
    },
    {
      company: "KG Design Studio",
      period: "Sep 2025 - Aug 2016", 
      position: "Web Designer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      active: true
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
          My Work Experience
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4">
                <h3 className="text-2xl font-bold mb-2">{exp.company}</h3>
                <p className="text-gray-600">{exp.period}</p>
              </div>
              
              <div className="lg:col-span-1 flex justify-center">
                <div className="relative">
                  <div className={`w-4 h-4 rounded-full border-4 border-dashed ${
                    exp.active ? 'border-orange-500' : 'border-gray-400'
                  }`}>
                    <div className={`w-2 h-2 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                      exp.active ? 'bg-orange-500' : 'bg-gray-400'
                    }`}></div>
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="w-0.5 h-16 bg-gray-300 absolute left-1/2 top-6 transform -translate-x-1/2"></div>
                  )}
                </div>
              </div>
              
              <div className="lg:col-span-7">
                <h4 className="text-xl font-semibold mb-2">{exp.position}</h4>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
