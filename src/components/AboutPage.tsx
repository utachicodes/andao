
import { Code2, Database, Brain, Users, GraduationCap } from 'lucide-react';

const AboutPage = () => {
  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "JavaScript", "Lua", "HTML/CSS", "TypeScript", "C++" , "MySQL"]
    },
    {
      category: "Data & ML",
      items: ["Machine Learning", "Data Analysis", "Pandas", "NumPy", "Exploratory Data Analysis"]
    },
    {
      category: "Frameworks & Tools",
      items: ["React", "Docker", "Arduino", "Blender", "CAD", "WordPress"]
    },
    {
      category: "Technologies",
      items: ["RFID/NFC", "RAG Systems", "Computer Vision", "Web Development", "API Development"]
    }
  ];

  const interests = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Passionate about building intelligent systems and exploring the potential of AI in solving real-world problems."
    },
    {
      icon: Database,
      title: "Data Analysis",
      description: "Love uncovering insights from data and creating visualizations that tell compelling stories."
    },
    {
      icon: Code2,
      title: "Web Development",
      description: "Enjoy creating responsive, user-friendly web applications with modern technologies."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Active in leading student organizations and fostering collaboration within tech communities."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-light mb-6 text-white">
            About Me
          </h1>
          <div className="w-20 h-px bg-gray-600 mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* About content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-medium text-white">Hello, I'm Abdoullah Ndao</h2>
              <p className="text-gray-400 leading-relaxed">
              I'm a Data Analyst and Frontend Developer based in Senegal. 
              I didn’t grow up dreaming of a career in tech but I adapted to it with purpose. 
              My true passion is nature: the ocean, marine life, and protecting our planet. 
              I see technology as a powerful way to support conservation and scientific research, 
              especially in marine biology, which is where I hope to make my biggest impact.
              </p>
              <p className="text-gray-400 leading-relaxed">
              I’ve built a strong skill set in data analysis, data visualization, 
              and frontend development using tools like React, TypeScript, Python, and SQL.
              I enjoy turning raw data into clear insights and crafting digital experiences that are thoughtful,
              useful, and human-centered. Whether it's dashboards, web apps, or AI-driven tools,
              I aim to build solutions that can support real-world environmental and community needs
              </p>
              <p className="text-gray-400 leading-relaxed">
              Outside of work, I love skateboarding, writing poetry, and getting involved in student and community projects. 
              I’m always learning, always evolving and I believe that meaningful change starts with curiosity, creativity, and care.
              </p>
            </div>

            {/* Education */}
            <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-5 h-5 text-white" />
                <h3 className="text-lg font-medium text-white">Education</h3>
              </div>
              <div>
                <h4 className="text-white font-medium">Computer Science</h4>
                <p className="text-gray-400">Dakar American University of Science and Technology</p>
                <p className="text-gray-500 text-sm">Current Student</p>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-white mb-6">What I'm Passionate About</h3>
            <div className="space-y-4">
              {interests.map((interest, index) => (
                <div key={index} className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 hover:border-gray-600/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-700/50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <interest.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-2">{interest.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{interest.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-2xl font-medium text-white mb-8">Skills & Technologies</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6">
                <h4 className="text-white font-medium mb-4">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-lg text-sm border border-gray-600/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
