
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-6">
          <div className="inline-flex items-center bg-gray-100 rounded-full px-4 py-2 mb-4">
            <span className="text-gray-700">Hello!</span>
            <div className="ml-2 w-6 h-1 bg-orange-500 rounded-full transform rotate-12"></div>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            I'm <span className="text-orange-500">Jenny,</span>
            <br />
            <span className="text-gray-900">Product Designer</span>
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-700 italic">
                "Jenny's exceptional product design ensured our website's success. Highly recommended!"
              </p>
            </div>
            
            <div className="text-left">
              <div className="text-4xl font-bold text-gray-900 mb-2">450+</div>
              <div className="text-gray-600">Client Served</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors">
              Portfolio <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full hover:bg-gray-900 hover:text-white transition-colors">
              Hire Me
            </button>
          </div>
        </div>
        
        {/* Right Content - Profile Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 bg-orange-500 rounded-full relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=500&h=500&fit=crop&crop=face" 
                alt="Jenny - Product Designer"
                className="w-full h-full object-cover"
              />
              <div className="absolute -top-4 -right-4 w-12 h-12 flex flex-col gap-1">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-1 h-6 bg-gray-900 rounded-full transform rotate-12"></div>
                ))}
              </div>
            </div>
            
            <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-lg">
              <div className="flex text-orange-500 text-xl">
                ★★★★★
              </div>
              <div className="text-2xl font-bold text-gray-900 mt-1">10 Years</div>
              <div className="text-gray-600 text-sm">Experts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
