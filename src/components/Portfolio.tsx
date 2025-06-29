
import { ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "YouTube Content Creation",
      category: "Social Media Design",
      image: "/lovable-uploads/25e64b86-f93b-4ac7-9b2e-2ae18ed13893.png",
      description: "Engaging YouTube thumbnails and channel graphics that drive views and subscriptions."
    },
    {
      title: "Food Brand Identity",
      category: "Restaurant Branding",
      image: "/lovable-uploads/912841cc-8a24-4a8c-bd82-def6f91f1db7.png",
      description: "Complete pizza brand identity including logos, posters, and promotional materials."
    },
    {
      title: "Political Campaign Design",
      category: "Campaign Materials",
      image: "/lovable-uploads/ccf437d5-938f-4bc1-aec6-58d140663587.png",
      description: "Professional campaign graphics and promotional content for political candidates."
    },
    {
      title: "Social Media Carousels",
      category: "Instagram Content",
      image: "/lovable-uploads/7b2c535a-bd57-46c5-b91a-51abf679abaa.png",
      description: "Beautiful carousel designs for social media engagement and storytelling."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50" id="portfolio">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="text-orange-500">Portfolio</span>
            </h2>
            <p className="text-gray-600 max-w-lg">
              Explore my latest design projects across various industries and platforms
            </p>
          </div>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in" style={{animationDelay: '0.2s'}}>
            View All Work <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <div key={index} className={`group cursor-pointer animate-fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
              <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="bg-gray-100 rounded-2xl overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-sm font-medium rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
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
