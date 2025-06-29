
import { ArrowRight, Star, Award, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 lg:pt-20 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-orange-50">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-orange-100 rounded-full opacity-60 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-orange-200 rounded-full opacity-40 animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8 animate-fade-in">
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-orange-100">
            <span className="text-gray-700 font-medium">Hello, I'm Anjali!</span>
            <div className="ml-3 w-8 h-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Creative
            <br />
            <span className="text-orange-500 relative">
              Graphic Designer
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
            Transforming ideas into stunning visuals. From YouTube thumbnails to complete brand identities, I create designs that make your brand stand out.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8">
            <div className="text-center lg:text-left group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center lg:justify-start mb-2">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-orange-200 transition-colors duration-300">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">500+</div>
              </div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            
            <div className="text-center lg:text-left group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center lg:justify-start mb-2">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-orange-200 transition-colors duration-300">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">150+</div>
              </div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            
            <div className="text-center lg:text-left group hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center lg:justify-start mb-2">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-orange-200 transition-colors duration-300">
                  <Star className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">5+</div>
              </div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl font-semibold">
              View My Work <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 font-semibold">
              Let's Talk
            </button>
          </div>
        </div>
        
        {/* Right Content - Profile Image */}
        <div className="relative flex justify-center lg:justify-end animate-scale-in" style={{animationDelay: '0.3s'}}>
          <div className="relative">
            {/* Main Image Container */}
            <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-full relative overflow-hidden hover:scale-105 transition-transform duration-500 shadow-2xl">
              <img 
                src="/lovable-uploads/42ff1e92-cbe5-4524-bf3a-052628f2d2a4.png" 
                alt="Anjali - Graphic Designer"
                className="w-full h-full object-cover"
              />
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 flex flex-col gap-1">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-1.5 h-8 bg-gray-900 rounded-full transform rotate-12 animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                ))}
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="flex text-orange-500 text-lg mb-2">
                ★★★★★
              </div>
              <div className="text-2xl font-bold text-gray-900">5.0</div>
              <div className="text-gray-600 text-sm">Client Rating</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{animationDelay: '0.8s'}}>
              <div className="text-3xl font-bold text-orange-500 mb-1">5+</div>
              <div className="text-gray-900 font-semibold">Years</div>
              <div className="text-gray-600 text-sm">Experience</div>
            </div>
            
            <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-white p-3 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 animate-fade-in" style={{animationDelay: '1s'}}>
              <div className="text-sm font-semibold text-gray-900 mb-1">Available for</div>
              <div className="text-orange-500 font-bold">Freelance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
