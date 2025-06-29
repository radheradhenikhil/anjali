
import { ArrowRight, ArrowLeft } from "lucide-react";

const Portfolio = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Let's Have a Look at<br />
            my <span className="text-orange-500">Portfolio</span>
          </h2>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-orange-600 transition-colors">
            See More <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-100 rounded-3xl p-8 relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
              alt="Food Express Project"
              className="w-full h-64 object-cover rounded-2xl"
            />
          </div>
          
          <div className="bg-gray-100 rounded-3xl p-8 relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop"
              alt="Web Design Project"
              className="w-full h-64 object-cover rounded-2xl"
            />
          </div>
        </div>
        
        <div className="flex justify-center gap-4 mb-8">
          <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-600">UI/UX Design</span>
          <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-600">Landing Page</span>
          <span className="px-4 py-2 bg-gray-100 rounded-full text-gray-600">Wireframe</span>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
            Food Express - Food Delivery Solution
            <ArrowRight className="w-6 h-6 text-orange-500" />
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
          </p>
        </div>
        
        <div className="flex justify-center gap-4 mt-8">
          <button className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
            <ArrowRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
