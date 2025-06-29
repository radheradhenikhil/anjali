
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-white">
            Ready to Bring Your<br />
            Vision to <span className="text-orange-500">Life?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Let's collaborate and create something amazing together. Get in touch for custom design solutions.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row max-w-2xl mx-auto mb-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-2 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="flex items-center px-4 py-3 flex-1">
            <div className="w-6 h-6 bg-orange-500 rounded-full mr-3 flex items-center justify-center">
              <Mail className="w-3 h-3 text-white" />
            </div>
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 outline-none text-white placeholder-gray-300 bg-transparent"
            />
          </div>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Start Project
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left mb-16 animate-fade-in" style={{animationDelay: '0.3s'}}>
          <div className="flex items-center text-gray-300 hover:text-orange-400 transition-colors duration-300">
            <span className="text-orange-500 mr-3">✓</span>
            <span>Fast 24-48hr Turnaround</span>
          </div>
          <div className="flex items-center text-gray-300 hover:text-orange-400 transition-colors duration-300">
            <span className="text-orange-500 mr-3">✓</span>
            <span>Unlimited Revisions</span>
          </div>
          <div className="flex items-center text-gray-300 hover:text-orange-400 transition-colors duration-300">
            <span className="text-orange-500 mr-3">✓</span>
            <span>100% Satisfaction Guarantee</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <Mail className="w-8 h-8 text-orange-500 mb-4 mx-auto" />
            <h3 className="text-white font-semibold mb-2">Email</h3>
            <p className="text-gray-300 text-sm">anjali.designs@gmail.com</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <Phone className="w-8 h-8 text-orange-500 mb-4 mx-auto" />
            <h3 className="text-white font-semibold mb-2">Phone</h3>
            <p className="text-gray-300 text-sm">+91 98765 43210</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <MapPin className="w-8 h-8 text-orange-500 mb-4 mx-auto" />
            <h3 className="text-white font-semibold mb-2">Location</h3>
            <p className="text-gray-300 text-sm">Mumbai, India</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 text-white overflow-hidden relative animate-fade-in" style={{animationDelay: '0.5s'}}>
          <div className="flex flex-wrap gap-8 items-center justify-center text-xl font-semibold">
            <span className="hover:scale-110 transition-transform duration-300">✦ YouTube Thumbnails</span>
            <span className="hover:scale-110 transition-transform duration-300">✦ Logo Design</span>
            <span className="hover:scale-110 transition-transform duration-300">✦ Social Media</span>
            <span className="hover:scale-110 transition-transform duration-300">✦ UI/UX</span>
            <span className="hover:scale-110 transition-transform duration-300">✦ Brand Identity</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
