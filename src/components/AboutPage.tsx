
const AboutPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-light mb-8 text-gray-900">
            About
          </h1>
          <div className="w-16 h-px bg-gray-300 mb-12"></div>
        </div>

        <div className="space-y-16">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-6">Background</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Python Developer and AI Engineer specializing in cutting-edge artificial intelligence models, 
                  machine learning solutions, and dynamic web and mobile applications. I work closely with clients 
                  to design and develop custom software that leverages Python's capabilities to deliver intelligent, 
                  data-driven solutions.
                </p>
                <p>
                  From building predictive models and automating processes to developing responsive websites and 
                  scalable apps, I focus on delivering high-performance, innovative solutions that drive business 
                  growth and efficiency.
                </p>
                <p>
                  Currently pursuing my studies at Dakar American University of Science and Technology while 
                  actively contributing to various organizations and leading innovative projects.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-6">Focus Areas</h2>
              <div className="space-y-3">
                {[
                  'Artificial Intelligence & Machine Learning',
                  'Python Development',
                  'Computer Vision & Neural Networks',
                  'Natural Language Processing',
                  'Robotics & Automation',
                  'Data Analysis & Visualization',
                  'Web & Mobile Development',
                  'Database Management'
                ].map((skill, index) => (
                  <div key={index} className="text-gray-600">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-6">Technical Expertise</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-light text-gray-900 mb-3">Programming</h3>
                <div className="space-y-2 text-gray-600">
                  <div>Python</div>
                  <div>Lua</div>
                  <div>PHP</div>
                  <div>HTML/CSS</div>
                  <div>JavaScript</div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-light text-gray-900 mb-3">AI/ML</h3>
                <div className="space-y-2 text-gray-600">
                  <div>Machine Learning</div>
                  <div>Neural Networks</div>
                  <div>Computer Vision</div>
                  <div>NLP</div>
                  <div>RAG Systems</div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-light text-gray-900 mb-3">Tools & Platforms</h3>
                <div className="space-y-2 text-gray-600">
                  <div>NVIDIA CUDA</div>
                  <div>Docker</div>
                  <div>Arduino</div>
                  <div>Blender</div>
                  <div>WordPress</div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-light text-gray-900 mb-3">Specialized</h3>
                <div className="space-y-2 text-gray-600">
                  <div>RFID/NFC</div>
                  <div>3D Modeling</div>
                  <div>CAD Design</div>
                  <div>Robotics</div>
                  <div>Game Development</div>
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
