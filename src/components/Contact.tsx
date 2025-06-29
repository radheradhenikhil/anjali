
import { ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-6xl font-bold mb-8">
          Have An Awesome Project<br />
          Idea? <span className="text-orange-500">Let's Discuss</span>
        </h2>
        
        <div className="flex flex-col sm:flex-row max-w-2xl mx-auto mb-12 bg-white border border-gray-200 rounded-full p-2">
          <div className="flex items-center px-4 py-3 flex-1">
            <div className="w-6 h-6 bg-orange-500 rounded-full mr-3 flex items-center justify-center">
              <span className="text-white text-sm">📧</span>
            </div>
            <input 
              type="email" 
              placeholder="Enter Email Address"
              className="flex-1 outline-none text-gray-700"
            />
          </div>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
            Book Call
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
          <div className="flex items-center">
            <span className="text-orange-500 mr-3">✓</span>
            <span className="text-gray-700">4.9/5 Average Ratings</span>
          </div>
          <div className="flex items-center">
            <span className="text-orange-500 mr-3">✓</span>
            <span className="text-gray-700">25+ Winning Awards</span>
          </div>
          <div className="flex items-center">
            <span className="text-orange-500 mr-3">✓</span>
            <span className="text-gray-700">Certified Product Designer</span>
          </div>
        </div>
        
        <div className="mt-16 bg-orange-500 rounded-3xl p-8 text-white overflow-hidden relative">
          <div className="flex flex-wrap gap-8 items-center justify-center text-2xl font-semibold">
            <span>✦ Web Design</span>
            <span>✦ App Design</span>
            <span>✦ Dashboard</span>
            <span>✦ Wireframe</span>
            <span>✦ User Research</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
