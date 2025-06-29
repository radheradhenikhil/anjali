
import { useState } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("Home");

  const navItems = [
    "Home",
    "About", 
    "Service",
    "Resume",
    "Project",
    "Contact Us"
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-gray-900 rounded-full px-6 py-3">
      <div className="flex items-center space-x-8">
        {navItems.map((item, index) => (
          <div key={item} className="flex items-center">
            {index === 2 && (
              <div className="flex items-center mx-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-2">
                  J
                </div>
                <span className="text-white font-semibold text-lg">Jenny</span>
              </div>
            )}
            <button
              onClick={() => setActiveSection(item)}
              className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                activeSection === item
                  ? "text-orange-500 font-medium"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item}
            </button>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
