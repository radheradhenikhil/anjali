
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user experiences",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
      highlight: false
    },
    {
      title: "Web Design", 
      description: "Modern and responsive website designs",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      highlight: true
    },
    {
      title: "Landing Page",
      description: "High-converting landing pages that drive results", 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      highlight: false
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              My <span className="text-orange-500">Services</span>
            </h2>
            <p className="text-gray-400 max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-105 ${
                service.highlight ? 'bg-orange-500' : 'bg-gray-800'
              }`}
            >
              <div className="p-8 pb-4">
                <h3 className={`text-2xl font-bold mb-4 ${
                  service.highlight ? 'text-white' : 'text-white'
                }`}>
                  {service.title}
                </h3>
              </div>
              
              <div className="px-8 pb-8">
                <div className="bg-gray-200 rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  service.highlight ? 'bg-white' : 'bg-gray-700'
                }`}>
                  <ArrowRight className={`w-6 h-6 ${
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
