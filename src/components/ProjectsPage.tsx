
const ProjectsPage = () => {
  const projects = [
    {
      title: "Predictive Analytics Platform",
      category: "Machine Learning",
      description: "Developed a comprehensive platform for predictive analytics using advanced ML algorithms to forecast business trends and optimize decision-making processes.",
      technologies: ["Python", "TensorFlow", "AWS", "React"],
      features: [
        "Real-time data processing",
        "Interactive dashboards",
        "Automated model retraining",
        "API integration"
      ]
    },
    {
      title: "Computer Vision System",
      category: "Deep Learning",
      description: "Built an intelligent computer vision system for automated quality control in manufacturing, reducing inspection time by 80% while improving accuracy.",
      technologies: ["PyTorch", "OpenCV", "Docker", "Flask"],
      features: [
        "Object detection and classification",
        "Real-time processing",
        "Defect identification",
        "Quality reporting"
      ]
    },
    {
      title: "NLP Sentiment Analyzer",
      category: "Natural Language Processing",
      description: "Created a sophisticated sentiment analysis tool for social media monitoring, helping brands understand customer perception and market trends.",
      technologies: ["Python", "BERT", "FastAPI", "MongoDB"],
      features: [
        "Multi-language support",
        "Real-time analysis",
        "Trend visualization",
        "Alert system"
      ]
    },
    {
      title: "Recommendation Engine",
      category: "Machine Learning",
      description: "Designed and implemented a scalable recommendation system serving millions of users, increasing user engagement by 35%.",
      technologies: ["Python", "Spark", "Kafka", "Redis"],
      features: [
        "Collaborative filtering",
        "Content-based recommendations",
        "A/B testing framework",
        "Performance monitoring"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light mb-6 text-slate-800">
              Projects
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Showcasing innovative solutions and technical excellence across various domains of AI and machine learning.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group p-8 bg-white/70 rounded-xl border border-gray-200/50 hover:shadow-xl transition-all duration-500 hover:scale-105">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <h3 className="text-2xl font-medium text-slate-800 group-hover:text-slate-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-medium text-slate-800 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-slate-600 text-sm flex items-center">
                        <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-slate-800 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs font-medium text-slate-600 bg-slate-200 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
