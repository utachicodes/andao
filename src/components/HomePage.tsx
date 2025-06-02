
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Profile Image */}
            <div className={`mb-12 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="relative inline-block">
                <div className="w-32 h-32 bg-gradient-to-br from-slate-800 to-slate-600 rounded-full mx-auto flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
                  AN
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
              </div>
            </div>

            {/* Name and Title */}
            <div className={`transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <h1 className="text-5xl md:text-7xl font-light mb-4 tracking-tight text-slate-800">
                ABDOULLAH <span className="font-medium">NDAO</span>
              </h1>
              
              <div className="w-24 h-px bg-slate-300 mx-auto mb-6"></div>
              
              <p className="text-xl md:text-2xl text-slate-600 mb-4 font-light">
                Data Scientist & AI Engineer
              </p>
              
              <p className="text-lg text-slate-500 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
                Specializing in machine learning, deep learning, and advanced analytics with a passion for innovation and problem-solving
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`transform transition-all duration-1000 delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Button 
                  size="lg" 
                  className="bg-slate-800 hover:bg-slate-700 text-white font-medium px-12 py-4 rounded-lg text-lg transition-all duration-300"
                  onClick={() => onNavigate('about')}
                >
                  View My Work
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 font-medium px-12 py-4 rounded-lg text-lg transition-all duration-300"
                  onClick={() => onNavigate('contact')}
                >
                  Get In Touch
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className={`transform transition-all duration-1000 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="group p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:border-slate-300 transition-all duration-300 hover:shadow-lg">
                  <div className="text-3xl font-light text-slate-800 mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
                  <div className="text-slate-600 font-light">Years Experience</div>
                  <div className="text-sm text-slate-500 mt-1">Data Science & AI</div>
                </div>
                
                <div className="group p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:border-slate-300 transition-all duration-300 hover:shadow-lg">
                  <div className="text-3xl font-light text-slate-800 mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                  <div className="text-slate-600 font-light">Projects Completed</div>
                  <div className="text-sm text-slate-500 mt-1">Machine Learning</div>
                </div>
                
                <div className="group p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:border-slate-300 transition-all duration-300 hover:shadow-lg">
                  <div className="text-3xl font-light text-slate-800 mb-2 group-hover:scale-110 transition-transform duration-300">∞</div>
                  <div className="text-slate-600 font-light">Innovation</div>
                  <div className="text-sm text-slate-500 mt-1">Continuous Learning</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 transition-opacity duration-300">
            <div className="text-xs text-slate-500 font-light tracking-widest">SCROLL</div>
            <div className="w-px h-8 bg-gradient-to-b from-slate-400 to-transparent"></div>
            <div className="w-2 h-2 border border-slate-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
