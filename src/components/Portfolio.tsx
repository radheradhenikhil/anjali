import { ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";
import { useState } from "react";
import ProjectShowcase from "./ProjectShowcase";

const Portfolio = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const portfolioItems = [
    {
      title: "YouTube Content Creation",
      category: "Social Media Design",
      image: "/lovable-uploads/24d64409-fab5-4b2d-9aa6-a031a2d0a4cb.png",
      description: "Engaging YouTube thumbnails and channel graphics that drive views and subscriptions."
    },
    {
      title: "Brand Identity Design",
      category: "Logo & Branding",
      image: "/lovable-uploads/aa5ed241-32cb-4a88-88c6-268d199aacb2.png",
      description: "Complete brand identity including logos, typography, and visual elements."
    },
    {
      title: "Event Poster Design",
      category: "Event Marketing",
      image: "/lovable-uploads/5e9f0b4d-d0bd-4ba6-857d-2514801758da.png",
      description: "Professional event posters and promotional materials for various occasions."
    },
    {
      title: "Social Media Marketing",
      category: "Instagram Content",
      image: "/lovable-uploads/2b168822-fae8-44f2-8b52-1c94db020d85.png",
      description: "Beautiful social media posts and marketing materials for businesses."
    },
    {
      title: "Book Cover Design",
      category: "Publishing Design",
      image: "/lovable-uploads/5344a212-14b5-458c-a715-170463af223f.png",
      description: "Compelling book covers that capture the essence of the story."
    },
    {
      title: "Business Communications",
      category: "Corporate Design",
      image: "/lovable-uploads/26932d4c-aee1-4b38-b62a-dabccf3a6387.png",
      description: "Professional thank you cards and business communication materials."
    }
  ];

  if (showAllProjects) {
    return <ProjectShowcase onBack={() => setShowAllProjects(false)} />;
  }

  return (
    <section className="py-20 px-6 bg-gray-50" id="portfolio">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="text-orange-500">Portfolio</span>
            </h2>
            <p className="text-gray-600 max-w-lg text-base md:text-lg">
              Explore my latest design projects across various industries and platforms
            </p>
          </div>
          <button 
            onClick={() => setShowAllProjects(true)}
            className="bg-orange-500 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in" 
            style={{animationDelay: '0.2s'}}
          >
            View All Work <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <div key={index} className={`group cursor-pointer animate-fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
              <div className="bg-white rounded-3xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="bg-gray-100 rounded-2xl overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 md:h-64 object-cover"
                  />
                </div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-sm font-medium rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
          <div className="flex justify-center gap-4 mb-8">
            <button className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-all duration-300 hover:scale-110">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all duration-300 hover:scale-110">
              <ArrowRight className="w-6 h-6 text-white" />
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-white rounded-full text-gray-600 hover:bg-orange-100 hover:text-orange-600 transition-colors duration-300 cursor-pointer">All</span>
            <span className="px-4 py-2 bg-white rounded-full text-gray-600 hover:bg-orange-100 hover:text-orange-600 transition-colors duration-300 cursor-pointer">Branding</span>
            <span className="px-4 py-2 bg-white rounded-full text-gray-600 hover:bg-orange-100 hover:text-orange-600 transition-colors duration-300 cursor-pointer">Social Media</span>
            <span className="px-4 py-2 bg-white rounded-full text-gray-600 hover:bg-orange-100 hover:text-orange-600 transition-colors duration-300 cursor-pointer">UI/UX</span>
            <span className="px-4 py-2 bg-white rounded-full text-gray-600 hover:bg-orange-100 hover:text-orange-600 transition-colors duration-300 cursor-pointer">Print Design</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
