
const ProjectsPage = () => {
  const projects = [
    {
      title: "XamSaDine AI: Multilingual RAG-Based Islamic Chatbot",
      category: "AI/NLP",
      description: "AI-powered platform providing accurate, authentic Islamic legal rulings and religious guidance. Implemented custom RAG system with curated knowledge base from renowned Islamic scholars, supporting Wolof, French, and English responses.",
      technologies: ["Python", "RAG", "NLP", "Docker", "Ollama", "Web Development"],
      year: "2024",
      details: "Transcribed over 100 Wolof audio files and built comprehensive database preventing misinformation in religious queries."
    },
    {
      title: "SapioVision: Smart Facial Recognition Glasses",
      category: "Computer Vision",
      description: "Advanced facial recognition system designed for Senegalese Police Force with real-time database integration for citizen identification, ID/passport verification, and license status checking.",
      technologies: ["Python", "Computer Vision", "Arduino", "Machine Learning", "CAD"],
      year: "2024",
      details: "Seamlessly interfaces with centralized database for instantaneous access to critical citizen data and security enforcement."
    },
    {
      title: "Underwater Exploration Drone with AI",
      category: "Robotics/AI",
      description: "Collaborative drone project equipped with machine learning algorithms for marine life detection, underwater mapping, and 3D reconstruction. Specialized in neural network development for underwater image processing.",
      technologies: ["Neural Networks", "3D Modeling", "Deep Learning", "CUDA", "Computer Vision"],
      year: "2024",
      details: "Used NVIDIA tools to train models for 3D reconstruction of the Joola sunken ferry from camera data."
    },
    {
      title: "Smart Plate Dispenser System",
      category: "IoT/Automation",
      description: "Automated plate dispensing system for university cafeteria using RFID/NFC technology for student card recognition and database integration for subscription verification.",
      technologies: ["RFID", "NFC", "Python", "Machine Learning", "Database Integration"],
      year: "2024",
      details: "Streamlined cafeteria operations ensuring only subscribed students receive plates through secure database queries."
    },
    {
      title: "Algae-Based Biofuel Production System",
      category: "Bioengineering",
      description: "Research project developing sustainable biofuel alternatives through closed-loop photobioreactor system optimized for high-lipid algae cultivation with automated monitoring and control.",
      technologies: ["Arduino", "Python", "CAD", "Biochemistry", "Sensor Integration"],
      year: "2023",
      details: "Integrated monitoring sensors for optimal growth conditions including light intensity, nutrients, and CO2 concentration."
    },
    {
      title: "DeepSea AI: Marine Conservation Platform",
      category: "AI/Conservation",
      description: "Startup leveraging AI and drone technology for marine ecosystem monitoring and protection. Developed computer vision algorithms for marine life analysis and habitat assessment.",
      technologies: ["Machine Learning", "Python", "Computer Vision", "Drone Technology"],
      year: "2023-2024",
      details: "Revolutionary approach to marine data collection offering unprecedented precision for conservation efforts."
    },
    {
      title: "Educational Robotics with Mini Fighter Bots",
      category: "Education/Robotics",
      description: "Interactive educational platform teaching children robotics and AI through hands-on programming, sensor integration, and machine learning concepts using engaging mini fighter bots.",
      technologies: ["Robotics", "CAD", "Arduino", "Scratch", "AI Education"],
      year: "2023",
      details: "Structured learning modules covering motion control, obstacle avoidance, and basic AI algorithms for STEM education."
    },
    {
      title: "Mad City Weapon Systems (Roblox)",
      category: "Game Development",
      description: "Enhanced gameplay experience for Mad City on Roblox platform, focusing on weapon mechanics development, game balance optimization, and feature integration.",
      technologies: ["Lua", "Blender", "Game Mechanics", "Game Development"],
      year: "2022-Present",
      details: "Scripted new weapon mechanics, improved balance, and ensured smooth integration of weapon features."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-light mb-8 text-gray-900">
            Projects
          </h1>
          <div className="w-16 h-px bg-gray-300 mb-12"></div>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="border-b border-gray-100 pb-12 last:border-b-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-light text-gray-900 mb-2">{project.title}</h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <span className="text-gray-500 text-sm mt-2 md:mt-0">{project.year}</span>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {project.description}
              </p>

              {project.details && (
                <p className="text-gray-500 text-sm leading-relaxed mb-6 italic">
                  {project.details}
                </p>
              )}
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="text-xs text-gray-600 border border-gray-200 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
