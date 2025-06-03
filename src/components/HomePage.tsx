
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Code2, Database, Brain, Zap } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    'Python Developer',
    'AI Engineer', 
    'Data Analyst',
    'Machine Learning Engineer',
    'Full-Stack Developer'
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const fullText = roles[currentRole];
    let index = 0;
    
    const typeInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentRole]);

  const techStack = [
    { icon: Code2, name: 'Python', color: 'text-blue-500' },
    { icon: Database, name: 'ML/AI', color: 'text-green-500' },
    { icon: Brain, name: 'Neural Networks', color: 'text-purple-500' },
    { icon: Zap, name: 'Data Analysis', color: 'text-yellow-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400/20 font-mono text-xs animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {['def', 'import', 'class', 'return', 'if', 'for', 'while', 'try'][Math.floor(Math.random() * 8)]}
          </div>
        ))}
      </div>

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-green-400 to-transparent animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              height: `${20 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            {/* Terminal-style Header */}
            <div className="bg-gray-900/50 backdrop-blur border border-green-400/30 rounded-lg p-6 mb-8 font-mono">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 ml-4">~/portfolio</span>
              </div>
              <div className="text-left">
                <div className="text-green-400">$ whoami</div>
                <div className="text-white">Abdoullah Ndao</div>
                <div className="text-green-400">$ cat role.txt</div>
                <div className="text-white min-h-[24px]">
                  {typedText}<span className="animate-pulse">|</span>
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Abdoullah Ndao
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
              Transforming data into intelligence, code into solutions
            </p>
            
            <p className="text-lg text-gray-400 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
              Building the future with AI, machine learning, and innovative Python solutions. 
              From neural networks to data pipelines, I turn complex challenges into elegant code.
            </p>

            {/* Tech Stack Display */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`p-4 bg-gray-800/30 border border-gray-700 rounded-lg hover:border-green-400/50 transition-all duration-300 hover:scale-105 cursor-pointer transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <tech.icon className={`w-8 h-8 ${tech.color} mx-auto mb-2`} />
                  <div className="text-gray-300 font-mono text-sm">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-4 text-base transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
                onClick={() => onNavigate('projects')}
              >
                <Code2 className="w-5 h-5 mr-2" />
                View Projects
              </Button>
              
              <Button 
                variant="outline"
                size="lg" 
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-semibold px-8 py-4 text-base transition-all duration-300 hover:scale-105"
                onClick={() => onNavigate('contact')}
              >
                <Database className="w-5 h-5 mr-2" />
                Get in Touch
              </Button>

              <Button 
                variant="outline"
                size="lg" 
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black font-semibold px-8 py-4 text-base transition-all duration-300 hover:scale-105"
                onClick={() => onNavigate('blog')}
              >
                <Brain className="w-5 h-5 mr-2" />
                Read Blog
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center space-y-2 opacity-60 animate-bounce">
              <div className="w-px h-8 bg-green-400"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
