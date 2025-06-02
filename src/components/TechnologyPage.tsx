
const TechnologyPage = () => {
  const technologies = [
    {
      title: "AI-Powered Fish Detection",
      description: "Advanced computer vision models trained to identify fish species, count populations, and detect illegal fishing activities in real-time.",
      icon: "🐟",
      features: ["Species Recognition", "Population Counting", "Behavior Analysis"]
    },
    {
      title: "Satellite Monitoring",
      description: "High-resolution satellite imagery analysis to track vessel movements, monitor protected areas, and detect environmental changes.",
      icon: "🛰️",
      features: ["Vessel Tracking", "Area Monitoring", "Change Detection"]
    },
    {
      title: "Underwater Sensors",
      description: "IoT sensor networks that monitor water quality, temperature, pH levels, and marine life activity around the clock.",
      icon: "📡",
      features: ["Water Quality", "Temperature Monitoring", "Marine Activity"]
    },
    {
      title: "Predictive Analytics",
      description: "Machine learning models that predict migration patterns, environmental threats, and optimal conservation strategies.",
      icon: "📊",
      features: ["Migration Prediction", "Threat Assessment", "Strategy Optimization"]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-inter font-bold mb-6 bioluminescent-glow">
              Our Technology
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Cutting-edge AI and marine technology working together to revolutionize ocean conservation and monitoring.
            </p>
          </div>

          {/* Technology Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-ocean-cyan/20 hover:border-ocean-bioluminescent/50 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:animate-bounce">{tech.icon}</div>
                <h3 className="text-2xl font-semibold text-ocean-bioluminescent mb-4">{tech.title}</h3>
                <p className="text-white/80 mb-6 leading-relaxed">{tech.description}</p>
                <div className="space-y-2">
                  {tech.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-2 h-2 bg-ocean-teal rounded-full mr-3"></div>
                      <span className="text-white/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* How It Works */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-ocean-bioluminescent mb-8">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-ocean-teal rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">1</div>
                <h4 className="font-semibold text-white mb-2">Data Collection</h4>
                <p className="text-white/70 text-sm">Sensors and satellites gather marine data 24/7</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-ocean-teal rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">2</div>
                <h4 className="font-semibold text-white mb-2">AI Analysis</h4>
                <p className="text-white/70 text-sm">Machine learning processes and analyzes the data</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-ocean-teal rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">3</div>
                <h4 className="font-semibold text-white mb-2">Insights</h4>
                <p className="text-white/70 text-sm">Generate actionable conservation insights</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-ocean-teal rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">4</div>
                <h4 className="font-semibold text-white mb-2">Action</h4>
                <p className="text-white/70 text-sm">Implement protection and conservation measures</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-ocean-cyan/20">
              <div className="text-2xl font-bold text-ocean-bioluminescent mb-2">99.2%</div>
              <div className="text-white/80 text-sm">AI Accuracy</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-ocean-cyan/20">
              <div className="text-2xl font-bold text-ocean-bioluminescent mb-2">24/7</div>
              <div className="text-white/80 text-sm">Monitoring</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-ocean-cyan/20">
              <div className="text-2xl font-bold text-ocean-bioluminescent mb-2">100+</div>
              <div className="text-white/80 text-sm">Species Tracked</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-ocean-cyan/20">
              <div className="text-2xl font-bold text-ocean-bioluminescent mb-2">5000km²</div>
              <div className="text-white/80 text-sm">Area Covered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage;
