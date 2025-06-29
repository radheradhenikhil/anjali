import { ArrowLeft, ArrowRight } from "lucide-react";
const Testimonials = () => {
  const testimonials = [{
    rating: 5,
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas",
    author: "Henry, Arthur",
    position: "CEO, Food Express",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
  }];
  return <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-4 flex items-center justify-center gap-2">
          <div className="w-8 h-8 border-2 border-white rounded transform rotate-45"></div>
        </div>
        
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          Testimonials that
        </h2>
        <h3 className="text-4xl lg:text-5xl font-bold mb-8">
          Speak to <span className="text-orange-500">My Results</span>
        </h3>
        
        <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left testimonial - partial */}
          <div className="bg-gray-800 p-8 rounded-3xl opacity-50">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => <span key={i} className="text-orange-500 text-xl">★</span>)}
              <span className="text-white ml-2 font-bold">5.0</span>
            </div>
            <p className="text-gray-400 text-left mb-6">
              Sed ut perspiciatis unde omn doloremque laudantium, tota veritatis et quasi architecto b voluptatem quia voluptas
            </p>
          </div>
          
          {/* Center testimonial - main */}
          <div className="bg-gray-800 p-8 rounded-3xl relative">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => <span key={i} className="text-orange-500 text-xl">★</span>)}
              <span className="text-white ml-2 font-bold">5.0</span>
            </div>
            <p className="text-gray-300 text-left mb-6">
              {testimonials[0].text}
            </p>
            <div className="flex items-center">
              <img src={testimonials[0].avatar} alt={testimonials[0].author} className="w-12 h-12 rounded-full mr-4" />
              <div className="text-left">
                <div className="text-white font-semibold">{testimonials[0].author}</div>
                <div className="text-gray-400 text-sm">{testimonials[0].position}</div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 text-6xl text-gray-600 opacity-30">"</div>
          </div>
          
          {/* Right testimonial - partial */}
          <div className="bg-gray-800 p-8 rounded-3xl opacity-50">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => <span key={i} className="text-orange-500 text-xl">★</span>)}
              <span className="text-white ml-2 font-bold">5.0</span>
            </div>
            <p className="text-gray-400 text-left mb-6">
              Sed ut perspiciatis unde omn doloremque laudantium, tota veritatis et quasi architecto b voluptatem quia voluptas
            </p>
            <div className="flex items-center">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" alt="Joshua Arthur" className="w-12 h-12 rounded-full mr-4" />
              <div className="text-left">
                <div className="text-white font-semibold">Joshua, Arthur</div>
                <div className="text-gray-400 text-sm">CTO, EV Charger</div>
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
    </section>;
};
export default Testimonials;