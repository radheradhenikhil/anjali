
const About = () => {
  return (
    <section className="py-20 px-6" id="about">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative animate-fade-in">
          <div className="w-80 h-80 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full relative overflow-hidden mx-auto hover:scale-105 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face" 
              alt="Anjali working on designs"
              className="w-full h-full object-cover"
            />
            <div className="absolute -top-4 -right-4 w-12 h-12 flex flex-col gap-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-1 h-6 bg-gray-900 rounded-full transform rotate-12 animate-pulse" style={{animationDelay: `${i * 0.15}s`}}></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Why Choose <span className="text-orange-500">Anjali</span> for Your Design Needs?
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            With over 5 years of experience in graphic design, I specialize in creating visually stunning designs that capture your brand's essence. From YouTube thumbnails to complete brand identities, I bring creativity and professionalism to every project.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
            <div className="hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-gray-900 mb-2">200+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Design Categories</div>
            </div>
          </div>
          
          <button className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Hire Me Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
