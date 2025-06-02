
const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light mb-6 text-slate-800">
              About Me
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
              Passionate data scientist dedicated to leveraging machine learning and AI to solve complex problems.
            </p>
          </div>

          {/* Professional Summary */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-slate-800 mb-8">Professional Summary</h2>
            <div className="prose prose-lg text-slate-600 leading-relaxed">
              <p className="mb-6">
                I am a dedicated and experienced professional in public speaking, event planning, machine learning, 
                engineering, and data analysis. My ability to captivate audiences as a conference speaker stems from years of 
                expertise and consulting in event planning.
              </p>
              <p className="mb-6">
                I excel in machine learning algorithms and data analysis, with proficiency in Python, R, and SQL. I have 
                implemented advanced techniques and strategic implementations. Complemented by my expertise in data analysis, 
                I offer invaluable insights critical for informed decision-making.
              </p>
              <p>
                My unwavering passion for innovation drives me to continuously explore emerging technologies and 
                methodologies, ensuring I remain at the forefront of industry advancements.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-slate-800 mb-8">Core Competencies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { category: "Machine Learning", skills: ["Deep Learning", "Neural Networks", "Model Development"] },
                { category: "Programming", skills: ["Python", "R", "SQL", "TensorFlow"] },
                { category: "Data Analysis", skills: ["Statistical Analysis", "Data Visualization", "Big Data"] },
                { category: "AI Technologies", skills: ["Computer Vision", "NLP", "Reinforcement Learning"] },
                { category: "Tools & Platforms", skills: ["AWS", "Docker", "Git", "Jupyter"] },
                { category: "Soft Skills", skills: ["Public Speaking", "Team Leadership", "Problem Solving"] }
              ].map((skillGroup, index) => (
                <div key={index} className="p-6 bg-white/70 rounded-xl border border-gray-200/50 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-lg font-medium text-slate-800 mb-3">{skillGroup.category}</h3>
                  <ul className="space-y-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-slate-600 text-sm flex items-center">
                        <div className="w-2 h-2 bg-slate-400 rounded-full mr-2"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white/70 rounded-xl border border-gray-200/50">
              <h3 className="text-2xl font-light text-slate-800 mb-6">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-slate-800">Master's in Data Science</h4>
                  <p className="text-slate-600 text-sm">University of Technology, 2020</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">Bachelor's in Computer Science</h4>
                  <p className="text-slate-600 text-sm">National University, 2018</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white/70 rounded-xl border border-gray-200/50">
              <h3 className="text-2xl font-light text-slate-800 mb-6">Certifications</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-slate-800">AWS Machine Learning Specialist</h4>
                  <p className="text-slate-600 text-sm">Amazon Web Services, 2023</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-800">TensorFlow Developer Certificate</h4>
                  <p className="text-slate-600 text-sm">Google, 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
