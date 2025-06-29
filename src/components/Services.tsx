
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "YouTube Thumbnails",
      description: "Eye-catching thumbnails that boost click-through rates and views",
      image: "/lovable-uploads/24d64409-fab5-4b2d-9aa6-a031a2d0a4cb.png",
      highlight: true,
      category: "Social Media"
    },
    {
      title: "Logo Design", 
      description: "Professional brand identities that make lasting impressions",
      image: "/lovable-uploads/aa5ed241-32cb-4a88-88c6-268d199aacb2.png",
      highlight: false,
      category: "Branding"
    },
    {
      title: "Event Poster Design",
      description: "Vibrant and engaging posters for events and celebrations", 
      image: "/lovable-uploads/5e9f0b4d-d0bd-4ba6-857d-2514801758da.png",
      highlight: false,
      category: "Event Design"
    },
    {
      title: "Social Media Posts",
      description: "Engaging posts and carousels for Instagram and other platforms",
      image: "/lovable-uploads/2b168822-fae8-44f2-8b52-1c94db020d85.png",
      highlight: false,
      category: "Social Media"
    },
    {
      title: "Book Cover Design",
      description: "Compelling book covers that capture readers' attention",
      image: "/lovable-uploads/5344a212-14b5-458c-a715-170463af223f.png",
      highlight: true,
      category: "Publishing"
    },
    {
      title: "Thank You Cards",
      description: "Beautiful thank you cards and business communications",
      image: "/lovable-uploads/26932d4c-aee1-4b38-b62a-dabccf3a6387.png",
      highlight: false,
      category: "Print Design"
    },
    {
      title: "UI/UX Design",
      description: "User-friendly interfaces and seamless user experiences",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
      highlight: false,
      category: "Digital"
    },
    {
      title: "Web Design",
      description: "Modern and responsive website designs",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      highlight: false,
      category: "Web Design"
    },
    {
      title: "Pamphlet Design",
      description: "Professional brochures and pamphlets for marketing",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
      highlight: false,
      category: "Print Design"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-900" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            My Design <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            From concept to creation, I offer comprehensive design solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in ${
                service.highlight ? 'bg-orange-500' : 'bg-gray-800'
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="p-4 md:p-6 pb-4">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                  service.highlight ? 'bg-white/20 text-white' : 'bg-orange-500/20 text-orange-400'
                }`}>
                  {service.category}
                </div>
                <h3 className={`text-lg md:text-xl font-bold mb-3 ${
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
              
              <div className="px-4 md:px-6 pb-4 md:pb-6">
                <div className="bg-gray-200 rounded-2xl overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-32 md:h-40 object-cover"
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
