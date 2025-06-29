
import { useState } from "react";
import { ArrowLeft, X, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const ProjectShowcase = ({ onBack }: { onBack: () => void }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const allProjects: Project[] = [
    {
      id: 1,
      title: "YouTube Content Creation",
      category: "Social Media Design",
      image: "/lovable-uploads/24d64409-fab5-4b2d-9aa6-a031a2d0a4cb.png",
      description: "Engaging YouTube thumbnails and channel graphics that drive views and subscriptions."
    },
    {
      id: 2,
      title: "Brand Identity Design",
      category: "Logo & Branding",
      image: "/lovable-uploads/aa5ed241-32cb-4a88-88c6-268d199aacb2.png",
      description: "Complete brand identity including logos, typography, and visual elements."
    },
    {
      id: 3,
      title: "Event Poster Design",
      category: "Event Marketing",
      image: "/lovable-uploads/5e9f0b4d-d0bd-4ba6-857d-2514801758da.png",
      description: "Professional event posters and promotional materials for various occasions."
    },
    {
      id: 4,
      title: "Social Media Marketing",
      category: "Social Media Design",
      image: "/lovable-uploads/2b168822-fae8-44f2-8b52-1c94db020d85.png",
      description: "Beautiful social media posts and marketing materials for businesses."
    },
    {
      id: 5,
      title: "Book Cover Design",
      category: "Print Design",
      image: "/lovable-uploads/5344a212-14b5-458c-a715-170463af223f.png",
      description: "Compelling book covers that capture the essence of the story."
    },
    {
      id: 6,
      title: "Business Communications",
      category: "Print Design",
      image: "/lovable-uploads/26932d4c-aee1-4b38-b62a-dabccf3a6387.png",
      description: "Professional thank you cards and business communication materials."
    },
    {
      id: 7,
      title: "Food Menu Design",
      category: "Print Design",
      image: "/lovable-uploads/25e64b86-f93b-4ac7-9b2e-2ae18ed13893.png",
      description: "Appetizing menu designs for restaurants and food businesses."
    },
    {
      id: 8,
      title: "Political Campaign Design",
      category: "Event Marketing",
      image: "/lovable-uploads/7b2c535a-bd57-46c5-b91a-51abf679abaa.png",
      description: "Impactful political campaign materials and promotional graphics."
    },
    {
      id: 9,
      title: "UI/UX Design Projects",
      category: "UI/UX",
      image: "/lovable-uploads/679a776f-f5f5-4fc0-83a2-3c767cd11bce.png",
      description: "Modern and user-friendly interface designs for web and mobile applications."
    },
    {
      id: 10,
      title: "Social Media Carousel",
      category: "Social Media Design",
      image: "/lovable-uploads/912841cc-8a24-4a8c-bd82-def6f91f1db7.png",
      description: "Eye-catching carousel posts for Instagram and other social platforms."
    },
    {
      id: 11,
      title: "Corporate Brochure",
      category: "Print Design",
      image: "/lovable-uploads/ccf437d5-938f-4bc1-aec6-58d140663587.png",
      description: "Professional brochures and corporate communication materials."
    }
  ];

  const categories = ["All", "Social Media Design", "Logo & Branding", "Print Design", "Event Marketing", "UI/UX"];

  const filteredProjects = selectedCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            All <span className="text-orange-500">Projects</span>
          </h1>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-orange-100 hover:text-orange-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <div className="group cursor-pointer animate-fade-in">
                  <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="bg-gray-100 rounded-xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full mb-2">
                          {project.category}
                        </span>
                        <h3 className="text-sm font-bold text-gray-900 mb-2">{project.title}</h3>
                        <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">{project.description}</p>
                      </div>
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-transparent border-none">
                <div className="relative bg-white rounded-2xl overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-sm font-medium rounded-full mb-2">
                          {project.category}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{project.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
