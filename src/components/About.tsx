
const About = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="w-80 h-80 bg-orange-500 rounded-full relative overflow-hidden mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face" 
              alt="Jenny pointing"
              className="w-full h-full object-cover"
            />
            <div className="absolute -top-4 -right-4 w-12 h-12 flex flex-col gap-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-1 h-6 bg-gray-900 rounded-full transform rotate-12"></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Why You <span className="text-orange-500">Hire Me</span> for Your Next Projects?
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">600+</div>
              <div className="text-gray-600">Project Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Industry Covered</div>
            </div>
          </div>
          
          <button className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-colors">
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
