
import { useState } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("Home");

  const navItems = [
    "Home",
    "About", 
    "Services",
    "Portfolio",
    "Experience",
    "Contact"
  ];

  const scrollToSection = (sectionName: string) => {
    setActiveSection(sectionName);
    const sectionId = sectionName.toLowerCase();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionName === "Home") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-gray-900/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-2xl animate-fade-in">
      <div className="flex items-center space-x-8">
        {navItems.map((item, index) => (
          <div key={item} className="flex items-center">
            {index === 2 && (
              <div className="flex items-center mx-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-2 hover:scale-110 transition-transform duration-300">
                  A
                </div>
                <span className="text-white font-semibold text-lg">Anjali</span>
              </div>
            )}
            <button
              onClick={() => scrollToSection(item)}
              className={`px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                activeSection === item
                  ? "text-orange-500 font-medium bg-orange-500/10"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
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
