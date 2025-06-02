
const ExperiencePage = () => {
  const experiences = [
    {
      title: "Senior Data Scientist",
      company: "Tech Corp",
      period: "2022 - Present",
      description: "Leading machine learning initiatives and developing predictive models for business optimization.",
      achievements: [
        "Developed ML models improving prediction accuracy by 40%",
        "Led a team of 5 data scientists",
        "Implemented automated data pipelines"
      ]
    },
    {
      title: "Machine Learning Engineer",
      company: "AI Solutions",
      period: "2020 - 2022",
      description: "Designed and implemented scalable machine learning solutions for various industries.",
      achievements: [
        "Built recommendation systems serving 1M+ users",
        "Reduced model training time by 60%",
        "Mentored junior developers"
      ]
    },
    {
      title: "Data Analyst",
      company: "Data Insights",
      period: "2018 - 2020",
      description: "Analyzed complex datasets to provide actionable business insights and recommendations.",
      achievements: [
        "Created dashboards used by C-level executives",
        "Improved data quality processes",
        "Conducted statistical analysis for key business decisions"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light mb-6 text-slate-800">
              Experience
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              A journey through innovative projects and impactful contributions in data science and AI.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-px h-24 bg-slate-200"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Timeline Dot */}
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-white font-medium text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 p-8 bg-white/70 rounded-xl border border-gray-200/50 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-medium text-slate-800">{exp.title}</h3>
                        <p className="text-lg text-slate-600">{exp.company}</p>
                      </div>
                      <span className="text-slate-500 font-light mt-2 md:mt-0">{exp.period}</span>
                    </div>
                    
                    <p className="text-slate-600 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-slate-600 text-sm flex items-start">
                            <div className="w-2 h-2 bg-slate-400 rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default ExperiencePage;
