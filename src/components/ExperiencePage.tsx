
const ExperiencePage = () => {
  const experiences = [
    {
      title: "Senior Data Scientist",
      company: "Tech Innovation Lab",
      period: "2022 - Present",
      description: "Leading advanced analytics projects and developing machine learning solutions for business optimization and decision support.",
      achievements: [
        "Developed predictive models improving accuracy by 40%",
        "Led cross-functional data science initiatives",
        "Implemented automated ML pipelines"
      ]
    },
    {
      title: "Machine Learning Engineer",
      company: "AI Solutions Group",
      period: "2020 - 2022",
      description: "Designed and deployed scalable machine learning systems for real-world applications across multiple industries.",
      achievements: [
        "Built recommendation systems for 1M+ users",
        "Optimized model performance and training efficiency",
        "Mentored junior data scientists"
      ]
    },
    {
      title: "Data Analyst",
      company: "Analytics Consulting",
      period: "2018 - 2020",
      description: "Conducted comprehensive data analysis and created insights-driven reports for strategic business decisions.",
      achievements: [
        "Created executive-level analytics dashboards",
        "Improved data quality and governance processes",
        "Delivered statistical analysis for key initiatives"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-light mb-8 text-gray-900">
            Experience
          </h1>
          <div className="w-16 h-px bg-gray-300 mb-12"></div>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l border-gray-200 pl-8 relative">
              <div className="absolute -left-1 top-0 w-2 h-2 bg-gray-900 rounded-full"></div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-light text-gray-900">{exp.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-lg text-gray-600">{exp.company}</p>
                    <span className="text-gray-500 text-sm">{exp.period}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                
                <div className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="text-gray-600 text-sm">
                      • {achievement}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
