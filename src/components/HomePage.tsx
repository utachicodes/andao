
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Code2, Database, Brain, GitBranch } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    'Data Analyst',
    'Machine Learning Engineer',
    'Frontend Developer', 
    'Python Developer',
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
    { icon: Code2, name: 'Python', color: 'text-blue-400' },
    { icon: Database, name: 'Data Analysis', color: 'text-green-400' },
    { icon: Brain, name: 'Machine Learning', color: 'text-purple-400' },
    { icon: GitBranch, name: 'Frontend Dev', color: 'text-orange-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Subtle floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400/10 font-mono text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            {['def', 'import', 'class', 'return'][Math.floor(Math.random() * 4)]}
          </div>
        ))}
      </div>

      <div className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Clean terminal header */}
            <div className="bg-gray-800/40 backdrop-blur border border-gray-700 rounded-lg p-6 mb-12 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-gray-400 ml-4">~/abdoullah-portfolio</span>
              </div>
              <div className="text-left space-y-2">
                <div className="flex">
                  <span className="text-green-400">$ </span>
                  <span className="text-gray-300">whoami</span>
                </div>
                <div className="text-white ml-2">Abdoullah Ndao</div>
                <div className="flex">
                  <span className="text-green-400">$ </span>
                  <span className="text-gray-300">cat role.txt</span>
                </div>
                <div className="text-white ml-2 min-h-[20px]">
                  {typedText}<span className="animate-pulse text-green-400">|</span>
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-light mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Hi, I'm Abdoullah
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
              I build cool stuff that actually works.
            </p>
            
            <p className="text-lg text-gray-400 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            I’m a Data Analyst who loves working with data, AI, and building digital experiences that matter. 
            I’ve always been drawn to the ocean, and my long-term goal is to become a marine biologist. 
            Always curious, always creating.
            </p>

            {/* Tech stack */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`group p-6 bg-gray-800/30 border border-gray-700/50 rounded-xl hover:border-gray-600 transition-all duration-300 cursor-pointer ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <tech.icon className={`w-8 h-8 ${tech.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} />
                  <div className="text-gray-300 text-sm font-medium">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-100 font-medium px-8 py-3 transition-all duration-300 hover:scale-105"
                onClick={() => onNavigate('projects')}
              >
                <Code2 className="w-5 h-5 mr-2" />
                View Projects
              </Button>
              
              <Button 
                variant="outline"
                size="lg" 
                className="border-gray-600 text-gray-300 hover:bg-gray-800 font-medium px-8 py-3 transition-all duration-300 hover:scale-105"
                onClick={() => onNavigate('experience')}
              >
                <Database className="w-5 h-5 mr-2" />
                Experience
              </Button>

              <Button 
                variant="outline"
                size="lg" 
                className="border-gray-600 text-gray-300 hover:bg-gray-800 font-medium px-8 py-3 transition-all duration-300 hover:scale-105"
                onClick={() => onNavigate('contact')}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
