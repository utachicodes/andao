
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Advanced Particle System */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={`neural-${i}`}
            className="absolute w-1 h-1 bg-ocean-bioluminescent rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `neural-pulse ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
              filter: 'blur(0.5px)',
              boxShadow: '0 0 6px currentColor'
            }}
          />
        ))}
      </div>

      {/* Dynamic Light Rays */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`ray-${i}`}
            className="absolute top-0 w-px h-full bg-gradient-to-b from-ocean-bioluminescent/40 via-ocean-cyan/20 to-transparent"
            style={{
              left: `${10 + i * 11}%`,
              transform: `translateX(${mousePosition.x * 20}px) skewX(${i % 2 === 0 ? '2deg' : '-2deg'})`,
              transition: 'transform 0.3s ease-out',
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      {/* Cinematic Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          {/* Logo Integration */}
          <div className={`mb-12 transform transition-all duration-2000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="relative inline-block">
              <img 
                src="/lovable-uploads/b48cb700-5c2c-47b3-83b5-e0791fa3a941.png" 
                alt="DeepSea AI" 
                className="w-32 h-auto mx-auto filter drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(0, 212, 255, 0.3))'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ocean-bioluminescent/20 to-transparent animate-pulse"></div>
            </div>
          </div>

          {/* Sophisticated Typography */}
          <div className={`transform transition-all duration-2000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-tight">
              <span className="block text-white font-extralight">DEEP</span>
              <span className="block text-ocean-bioluminescent font-medium tracking-wider">SEA AI</span>
            </h1>
            
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-ocean-cyan to-transparent mx-auto mb-8"></div>
            
            <p className="text-xl md:text-2xl text-white/70 mb-4 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
              Pioneering the future of marine intelligence
            </p>
            
            <p className="text-lg text-ocean-bioluminescent/80 mb-12 font-light italic max-w-2xl mx-auto">
              Advanced AI-powered underwater drones for ocean data analysis
            </p>
          </div>

          {/* Premium CTA Section */}
          <div className={`transform transition-all duration-2000 delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="group relative bg-gradient-to-r from-ocean-teal to-ocean-cyan hover:from-ocean-cyan hover:to-ocean-bioluminescent text-white font-medium px-12 py-4 rounded-full text-lg transition-all duration-500 overflow-hidden border border-ocean-cyan/30"
                onClick={() => onNavigate('about')}
              >
                <span className="relative z-10">Explore Our Vision</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="group border-2 border-ocean-bioluminescent/50 text-ocean-bioluminescent hover:bg-ocean-bioluminescent/10 hover:border-ocean-bioluminescent font-medium px-12 py-4 rounded-full text-lg transition-all duration-500 backdrop-blur-sm"
                onClick={() => onNavigate('technology')}
              >
                <span className="group-hover:text-white transition-colors duration-300">Technology</span>
              </Button>
            </div>
          </div>

          {/* Startup Status Indicators */}
          <div className={`transform transition-all duration-2000 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="group p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-ocean-cyan/20 hover:border-ocean-bioluminescent/40 transition-all duration-500 hover:bg-white/10">
                <div className="text-4xl font-light text-ocean-bioluminescent mb-3 group-hover:scale-110 transition-transform duration-300">R&D</div>
                <div className="text-white/70 font-light">Research Phase</div>
                <div className="text-sm text-ocean-cyan/60 mt-2">Advanced AI Development</div>
              </div>
              
              <div className="group p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-ocean-cyan/20 hover:border-ocean-bioluminescent/40 transition-all duration-500 hover:bg-white/10">
                <div className="text-4xl font-light text-ocean-bioluminescent mb-3 group-hover:scale-110 transition-transform duration-300">2024</div>
                <div className="text-white/70 font-light">Founded</div>
                <div className="text-sm text-ocean-cyan/60 mt-2">Dakar, Senegal</div>
              </div>
              
              <div className="group p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-ocean-cyan/20 hover:border-ocean-bioluminescent/40 transition-all duration-500 hover:bg-white/10">
                <div className="text-4xl font-light text-ocean-bioluminescent mb-3 group-hover:scale-110 transition-transform duration-300">∞</div>
                <div className="text-white/70 font-light">Potential</div>
                <div className="text-sm text-ocean-cyan/60 mt-2">Ocean Conservation</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 transition-opacity duration-300">
          <div className="text-xs text-white/60 font-light tracking-widest">SCROLL</div>
          <div className="w-px h-8 bg-gradient-to-b from-ocean-bioluminescent to-transparent"></div>
          <div className="w-2 h-2 border border-ocean-bioluminescent rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
