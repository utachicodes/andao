
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
                  Passionate data scientist and AI engineer with expertise in machine learning, 
                  deep learning, and advanced analytics. Experienced in transforming complex 
                  datasets into actionable business insights.
                </p>
                <p>
                  Specialized in developing predictive models, implementing AI solutions, 
                  and leading data-driven initiatives across various industries.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-6">Focus Areas</h2>
              <div className="space-y-3">
                {[
                  'Machine Learning & AI',
                  'Data Science & Analytics',
                  'Predictive Modeling',
                  'Deep Learning',
                  'Statistical Analysis',
                  'Business Intelligence'
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
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-light text-gray-900 mb-3">Programming</h3>
                <div className="space-y-2 text-gray-600">
                  <div>Python</div>
                  <div>R</div>
                  <div>SQL</div>
                  <div>JavaScript</div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-light text-gray-900 mb-3">Frameworks</h3>
                <div className="space-y-2 text-gray-600">
                  <div>TensorFlow</div>
                  <div>PyTorch</div>
                  <div>Scikit-learn</div>
                  <div>Pandas</div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-light text-gray-900 mb-3">Tools</h3>
                <div className="space-y-2 text-gray-600">
                  <div>AWS</div>
                  <div>Docker</div>
                  <div>Git</div>
                  <div>Jupyter</div>
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
