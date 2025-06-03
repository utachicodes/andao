
const ExperiencePage = () => {
  const experiences = [
    {
      title: "Python Developer",
      company: "Utachi Industries",
      period: "Nov 2024 - Present",
      type: "Freelance · Remote",
      description: "Specializing in creating cutting-edge AI models, machine learning solutions, and dynamic web and mobile applications. Working closely with clients to design and develop custom software that leverages Python's capabilities to deliver intelligent, data-driven solutions.",
      achievements: [
        "Building predictive models and automating processes",
        "Developing responsive websites and scalable apps",
        "Delivering high-performance, innovative solutions for business growth"
      ]
    },
    {
      title: "External Relations Officer",
      company: "Dakar American University of Science and Technology",
      period: "Oct 2024 - Present",
      type: "Art & Design Club · On-site",
      description: "Serving as the bridge between our club and the wider community, building strategic partnerships with other student organizations, campus groups, and external organizations.",
      achievements: [
        "Building strategic partnerships and fostering collaboration",
        "Managing outreach and facilitating networking opportunities",
        "Strengthening club impact through meaningful connections"
      ]
    },
    {
      title: "Information Technology Engineer",
      company: "Dakar American University of Science and Technology",
      period: "Jul 2024 - Present",
      type: "Internship · On-site",
      description: "Managing and enhancing the learning platform to ensure it meets the evolving needs of students and faculty. Focusing on adding new features, improving user experience, and maintaining system security.",
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
      description: "Conducting comprehensive data analysis using artificial intelligence, machine learning algorithms, and automation for data visualization and insights.",
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
      description: "Founded startup leveraging cutting-edge AI and drone technology for marine conservation. Developing solutions to monitor, analyze, and protect marine ecosystems with AI precision.",
      achievements: [
        "Deployed advanced computer vision and ML algorithms",
        "Revolutionized marine life and habitat data collection",
        "Provided invaluable insights for conservation efforts"
      ]
    },
    {
      title: "Club President",
      company: "Daust Muslim Student Association (DMSA)",
      period: "Sep 2023 - Present",
      type: "Leadership Role",
      description: "Leading a vibrant community focused on promoting Islamic culture, values, and interfaith dialogue. Organizing events, seminars, and discussions that foster understanding and unity.",
      achievements: [
        "Organized cultural events and interfaith dialogue sessions",
        "Created opportunities for growth and leadership development",
        "Showcased Islamic traditions to diverse campus audience"
      ]
    },
    {
      title: "Application Developer Intern",
      company: "Atlassian",
      period: "Jun 2023 - Nov 2023",
      type: "Internship · Remote",
      description: "Worked with team of interns to test and improve features for Jira. Focused on identifying and reporting bugs, ensuring new features met quality standards, and providing UX feedback.",
      achievements: [
        "Tested Jira features including workflow customization and project tracking",
        "Collaborated with development team on troubleshooting and performance improvements",
        "Gained valuable exposure to agile development lifecycle"
      ]
    },
    {
      title: "Computer Science Club Secretary",
      company: "Dakar American University of Science and Technology",
      period: "Jan 2023 - Present",
      type: "Student Organization",
      description: "Ensuring smooth club operations by managing schedules, documenting meetings, and organizing events. Coordinating workshops, hackathons, and tech talks.",
      achievements: [
        "Streamlined club processes and maintained accurate records",
        "Coordinated technical workshops and hackathons",
        "Fostered collaboration between club members and officers"
      ]
    },
    {
      title: "Junior Software Developer",
      company: "Roblox",
      period: "Apr 2022 - Present",
      type: "Part-time · Remote",
      description: "Working as junior Lua developer enhancing gameplay experience for Mad City, with specific focus on developing and optimizing in-game weapons and mechanics.",
      achievements: [
        "Scripted new weapon mechanics and improved game balance",
        "Tested and debugged weapon systems for optimal functionality",
        "Introduced engaging weapon features for Mad City player base"
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
                  <p className="text-sm text-gray-500">{exp.type}</p>
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
