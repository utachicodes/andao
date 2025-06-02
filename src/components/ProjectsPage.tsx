
const ProjectsPage = () => {
  const projects = [
    {
      title: "Atlantic Fish Guardian",
      description: "AI-powered surveillance system monitoring illegal fishing activities in Senegalese waters using satellite imagery and machine learning.",
      status: "Active",
      impact: "40% reduction in illegal fishing",
      location: "Senegal Coast",
      image: "🎣"
    },
    {
      title: "Marine Biodiversity Monitor",
      description: "Comprehensive ecosystem monitoring using underwater cameras and AI to track marine species populations and behavior patterns.",
      status: "Expanding",
      impact: "25 species monitored",
      location: "West Africa",
      image: "🐠"
    },
    {
      title: "Coral Reef Restoration AI",
      description: "Predictive models identifying optimal locations for coral restoration and monitoring reef health recovery in real-time.",
      status: "Research",
      impact: "3 reef sites restored",
      location: "Guinea-Bissau",
      image: "🪸"
    },
    {
      title: "Fisherman's Digital Assistant",
      description: "Mobile app providing local fishermen with AI-powered insights on sustainable fishing zones and fish population data.",
      status: "Beta",
      impact: "500+ fishermen using",
      location: "Coastal Communities",
      image: "📱"
    },
    {
      title: "Plastic Pollution Tracker",
      description: "Satellite and drone-based system tracking plastic pollution patterns and predicting environmental impact on marine life.",
      status: "Planning",
      impact: "Pollution mapping",
      location: "Regional Waters",
      image: "♻️"
    },
    {
      title: "Marine Protected Area Monitor",
      description: "Comprehensive monitoring system ensuring compliance with marine protected area regulations using AI-powered surveillance.",
      status: "Active",
      impact: "98% compliance rate",
      location: "Protected Zones",
      image: "🛡️"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Expanding': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Research': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Beta': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Planning': return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      default: return 'bg-ocean-teal/20 text-ocean-teal border-ocean-teal/30';
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-inter font-bold mb-6 bioluminescent-glow">
              Our Projects
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Innovative initiatives protecting marine ecosystems and supporting sustainable fishing practices across West Africa.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-ocean-cyan/20 hover:border-ocean-bioluminescent/50 transition-all duration-300 group hover:scale-105"
              >
                <div className="text-4xl mb-4 group-hover:animate-bounce">{project.image}</div>
                
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-white/80 mb-4 leading-relaxed text-sm">{project.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70 text-sm">Impact:</span>
                    <span className="text-ocean-bioluminescent text-sm font-medium">{project.impact}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70 text-sm">Location:</span>
                    <span className="text-white text-sm">{project.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Impact Summary */}
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-ocean-bioluminescent mb-8">Collective Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-ocean-cyan/20">
                <div className="text-3xl font-bold text-ocean-bioluminescent mb-2">6</div>
                <div className="text-white/80 text-sm">Active Projects</div>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-ocean-cyan/20">
                <div className="text-3xl font-bold text-ocean-bioluminescent mb-2">500+</div>
                <div className="text-white/80 text-sm">Fishermen Supported</div>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-ocean-cyan/20">
                <div className="text-3xl font-bold text-ocean-bioluminescent mb-2">40%</div>
                <div className="text-white/80 text-sm">Reduction in Illegal Fishing</div>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-ocean-cyan/20">
                <div className="text-3xl font-bold text-ocean-bioluminescent mb-2">25</div>
                <div className="text-white/80 text-sm">Species Protected</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
