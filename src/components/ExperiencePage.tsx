
import { Briefcase, GraduationCap, Users } from 'lucide-react';

const ExperiencePage = () => {
  const workExperience = [
    {
      title: "Python Developer",
      company: "Utachi Industries",
      period: "Nov 2024 - Present",
      type: "Freelance · Remote",
      description: "Specializing in creating AI models, machine learning solutions, and dynamic web applications. Working with clients to design custom software leveraging Python's capabilities for intelligent, data-driven solutions.",
      achievements: [
        "Building predictive models and automating processes",
        "Developing responsive websites and scalable applications",
        "Delivering data-driven solutions for business growth"
      ]
    },
    {
      title: "Information Technology Engineer",
      company: "Dakar American University of Science and Technology",
      period: "Jul 2024 - Present",
      type: "Internship · On-site",
      description: "Managing and enhancing the learning platform, focusing on new features, user experience improvements, and system security maintenance.",
      achievements: [
        "Enhanced learning platform with new features and improved UX",
        "Managed system security including passwords and email configurations",
        "Oversaw updates to university website and blog content"
      ]
    },
    {
      title: "Data Analyst",
      company: "Mafalia",
      period: "May 2024 - Present",
      type: "Part-time · Remote",
      description: "Conducting comprehensive data analysis using AI, machine learning algorithms, and automation for data visualization and insights.",
      achievements: [
        "Implemented AI-driven exploratory data analysis",
        "Developed machine learning models for business insights",
        "Created automated data visualization systems"
      ]
    },
    {
      title: "Machine Learning Engineer",
      company: "DeepSea AI",
      period: "Oct 2023 - Nov 2024",
      type: "Self-employed · Remote",
      description: "Co-Founded a startup leveraging AI and drone technology for marine conservation, developing solutions to monitor and analyze marine ecosystems.",
      achievements: [
        "Created computer vision and ML algorithms for marine life detection in Senegal",
        "Presented one of our innovative marine conservation solutions at the IndabaX 2023",
        "Was selected among the top 10 startups for the 2025 VivaTech Summit",
        "Provided insights for conservation efforts through AI-driven data analysis"
      ]
    },
    {
      title: "Application Developer Intern",
      company: "Atlassian",
      period: "Jun 2023 - Nov 2023",
      type: "Internship · Remote",
      description: "Worked with team to test and improve Jira features, focusing on bug identification, quality assurance, and user experience feedback.",
      achievements: [
        "Tested Jira features including workflow customization",
        "Collaborated with development team on troubleshooting",
        "Gained exposure to agile development lifecycle"
      ]
    },
    {
      title: "Junior Software Developer",
      company: "Roblox",
      period: "Apr 2022 - Present",
      type: "Part-time · Remote",
      description: "Working as junior Lua developer enhancing gameplay experience for Mad City, focusing on weapon mechanics and optimization.",
      achievements: [
        "Scripted new weapon mechanics and improved game balance",
        "Tested and debugged weapon systems for optimal functionality",
        "Introduced engaging features for Mad City player base"
      ]
    }
  ];

  const leadership = [
    {
      title: "External Relations Officer",
      organization: "Art & Design Club - DAUST",
      period: "Oct 2024 - Present",
      description: "Building strategic partnerships with student organizations and external groups to amplify club initiatives and foster collaboration."
    },
    {
      title: "Club President",
      organization: "Daust Muslim Student Association (DMSA)",
      period: "Sep 2023 - Present",
      description: "Leading community focused on promoting Islamic culture, values, and interfaith dialogue through events and discussions."
    },
    {
      title: "Computer Science Club Secretary",
      organization: "DAUST Computer Science Club",
      period: "Jan 2023 - Present",
      description: "Managing club operations, documentation, and coordinating workshops, hackathons, and tech talks."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-light mb-6 text-white">
            Experience
          </h1>
          <div className="w-20 h-px bg-gray-600 mb-8"></div>
          <p className="text-xl text-gray-400 font-light">
            Building skills through diverse projects and leadership roles
          </p>
        </div>

        {/* Work Experience Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-medium text-white">Professional Experience</h2>
          </div>

          <div className="space-y-12">
            {workExperience.map((exp, index) => (
              <div key={index} className="group">
                <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-8 hover:border-gray-600/50 transition-all duration-300">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-medium text-white">{exp.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2">
                        <p className="text-lg text-gray-300">{exp.company}</p>
                        <span className="text-gray-400 text-sm">{exp.period}</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{exp.type}</p>
                    </div>
                    
                    <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div className="text-gray-400 text-sm">{achievement}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Section */}
        <div>
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-medium text-white">Leadership & Involvement</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((role, index) => (
              <div key={index} className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 hover:border-gray-600/50 transition-all duration-300">
                <h3 className="text-lg font-medium text-white mb-2">{role.title}</h3>
                <p className="text-gray-300 mb-3">{role.organization}</p>
                <p className="text-sm text-gray-400 mb-4">{role.period}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
