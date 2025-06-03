
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h1 className="text-6xl md:text-8xl font-light mb-8 text-gray-900 tracking-tight">
              Abdoullah Ndao
            </h1>
            
            <div className="w-16 h-px bg-gray-300 mx-auto mb-8"></div>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-6 font-light">
              Python Developer & AI Engineer
            </p>
            
            <p className="text-lg text-gray-500 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
              Specializing in AI models, machine learning solutions, and dynamic applications. Creating intelligent, data-driven solutions for business growth.
            </p>
          </div>

          <div className={`transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                variant="outline"
                size="lg" 
                className="border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-light px-8 py-3 text-base transition-all duration-300"
                onClick={() => onNavigate('projects')}
              >
                View Projects
              </Button>
              
              <Button 
                variant="ghost"
                size="lg" 
                className="text-gray-600 hover:text-gray-900 font-light px-8 py-3 text-base transition-all duration-300"
                onClick={() => onNavigate('contact')}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 opacity-40">
            <div className="w-px h-8 bg-gray-400"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
