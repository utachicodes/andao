
const ProjectsPage = () => {
  const projects = [
    {
      title: "Predictive Analytics Platform",
      category: "Machine Learning",
      description: "Comprehensive platform for business forecasting using advanced ML algorithms, enabling data-driven decision making and trend analysis.",
      technologies: ["Python", "TensorFlow", "AWS", "React"],
      year: "2023"
    },
    {
      title: "Computer Vision System",
      category: "Deep Learning",
      description: "Automated quality control system using computer vision for manufacturing processes, reducing inspection time while improving accuracy.",
      technologies: ["PyTorch", "OpenCV", "Docker", "Flask"],
      year: "2023"
    },
    {
      title: "NLP Sentiment Analyzer",
      category: "Natural Language Processing",
      description: "Sophisticated sentiment analysis tool for social media monitoring and brand perception analysis across multiple languages.",
      technologies: ["Python", "BERT", "FastAPI", "MongoDB"],
      year: "2022"
    },
    {
      title: "Recommendation Engine",
      category: "Machine Learning",
      description: "Scalable recommendation system implementing collaborative filtering and content-based approaches for enhanced user engagement.",
      technologies: ["Python", "Spark", "Kafka", "Redis"],
      year: "2022"
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
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {project.description}
              </p>
              
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
