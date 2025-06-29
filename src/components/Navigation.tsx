
import { useState, useEffect } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    "Home",
    "About", 
    "Services",
    "Portfolio",
    "Experience",
    "Contact"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionName: string) => {
    setActiveSection(sectionName);
    setIsMobileMenuOpen(false);
    const sectionId = sectionName.toLowerCase();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionName === "Home") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 animate-fade-in hidden lg:block ${
        isScrolled ? 'bg-gray-900/98 backdrop-blur-md' : 'bg-gray-900/95 backdrop-blur-sm'
      } rounded-full px-6 py-3 shadow-2xl`}>
        <div className="flex items-center space-x-6">
          {navItems.slice(0, 3).map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                activeSection === item
                  ? "text-orange-500 font-medium bg-orange-500/10"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {item}
            </button>
          ))}
          
          <div className="flex items-center mx-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3 hover:scale-110 transition-transform duration-300">
              A
            </div>
            <span className="text-white font-semibold text-lg">Anjali</span>
          </div>
          
          {navItems.slice(3).map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                activeSection === item
                  ? "text-orange-500 font-medium bg-orange-500/10"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 lg:hidden bg-gray-900/95 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
              A
            </div>
            <span className="text-white font-semibold text-lg">Anjali</span>
          </div>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 rounded-lg hover:bg-white/10"
          >
            <div className="w-6 h-0.5 bg-white mb-1 transition-all duration-300"></div>
            <div className="w-6 h-0.5 bg-white mb-1 transition-all duration-300"></div>
            <div className="w-6 h-0.5 bg-white transition-all duration-300"></div>
          </button>
        </div>
        
        {isMobileMenuOpen && (
          <div className="bg-gray-900/98 backdrop-blur-md border-t border-gray-700">
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === item
                      ? "text-orange-500 bg-orange-500/10"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
