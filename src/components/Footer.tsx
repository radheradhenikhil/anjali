
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            Let's Connect there
          </h2>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors flex items-center gap-2 mx-auto">
            Hire me <span className="text-xl">↗</span>
          </button>
        </div>
        
        <div className="border-t border-gray-700 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                  j
                </div>
                <span className="text-xl font-semibold">Jenny</span>
              </div>
              <p className="text-gray-400 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <Facebook className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <div className="w-5 h-5 bg-white rounded-sm"></div>
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <Youtube className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <Twitter className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <Instagram className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div>
              <h3 className="text-orange-500 font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resume</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Project</a></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="text-orange-500 font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+0123-456-789</li>
                <li>www.example.com</li>
                <li>example@gmail.com</li>
              </ul>
            </div>
            
            {/* Newsletter */}
            <div>
              <h3 className="text-orange-500 font-semibold mb-4">Get the latest information</h3>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email address"
                  className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-lg outline-none"
                />
                <button className="bg-orange-500 px-4 py-2 rounded-r-lg hover:bg-orange-600 transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p>Copyright © 2023 <span className="text-orange-500">Jenny</span>. All Rights Reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">User Terms & Conditions</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
