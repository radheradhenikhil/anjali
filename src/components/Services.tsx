
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "YouTube Thumbnails",
      description: "Eye-catching thumbnails that boost click-through rates",
      image: "/lovable-uploads/25e64b86-f93b-4ac7-9b2e-2ae18ed13893.png",
      highlight: true,
      category: "Social Media"
    },
    {
      title: "Logo Design", 
      description: "Professional brand identities that make lasting impressions",
      image: "/lovable-uploads/679a776f-f5f5-4fc0-83a2-3c767cd11bce.png",
      highlight: false,
      category: "Branding"
    },
    {
      title: "Food Posters",
      description: "Appetizing designs for restaurants and food businesses", 
      image: "/lovable-uploads/912841cc-8a24-4a8c-bd82-def6f91f1db7.png",
      highlight: false,
      category: "Marketing"
    },
    {
      title: "Social Media Carousels",
      description: "Engaging multi-slide content for Instagram and LinkedIn",
      image: "/lovable-uploads/7b2c535a-bd57-46c5-b91a-51abf679abaa.png",
      highlight: false,
      category: "Social Media"
    },
    {
      title: "Political Campaign Design",
      description: "Professional campaign materials and promotional content",
      image: "/lovable-uploads/ccf437d5-938f-4bc1-aec6-58d140663587.png",
      highlight: false,
      category: "Campaign"
    },
    {
      title: "UI/UX Design",
      description: "User-friendly interfaces and seamless user experiences",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
      highlight: true,
      category: "Digital"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-900" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My Design <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From concept to creation, I offer comprehensive design solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in ${
                service.highlight ? 'bg-orange-500' : 'bg-gray-800'
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="p-6 pb-4">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                  service.highlight ? 'bg-white/20 text-white' : 'bg-orange-500/20 text-orange-400'
                }`}>
                  {service.category}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${
                  service.highlight ? 'text-white' : 'text-white'
                }`}>
                  {service.title}
                </h3>
                <p className={`text-sm mb-4 ${
                  service.highlight ? 'text-white/80' : 'text-gray-300'
                }`}>
                  {service.description}
                </p>
              </div>
              
              <div className="px-6 pb-6">
                <div className="bg-gray-200 rounded-2xl overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-40 object-cover"
                  />
                </div>
                
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                  service.highlight ? 'bg-white' : 'bg-gray-700 group-hover:bg-orange-500'
                }`}>
                  <ArrowRight className={`w-5 h-5 transition-colors duration-300 ${
                    service.highlight ? 'text-orange-500' : 'text-white'
                  }`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
