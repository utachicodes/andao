
import { Button } from '@/components/ui/button';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Hero Content */}
          <h1 className="text-5xl md:text-7xl font-inter font-bold mb-6 bioluminescent-glow animate-fade-in">
            Protecting Our
            <span className="block text-ocean-bioluminescent">Oceans with AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            DeepSea AI combines cutting-edge artificial intelligence with marine science to monitor, protect, and preserve our ocean ecosystems across West Africa.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="bg-ocean-teal hover:bg-ocean-cyan text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:animate-glow ripple-effect"
              onClick={() => onNavigate('about')}
            >
              Discover Our Mission
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-ocean-bioluminescent text-ocean-bioluminescent hover:bg-ocean-bioluminescent hover:text-ocean-deep font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300"
              onClick={() => onNavigate('technology')}
            >
              Explore Technology
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-ocean-cyan/20">
              <div className="text-3xl font-bold text-ocean-bioluminescent mb-2">500K+</div>
              <div className="text-white/80">Marine Data Points</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-ocean-cyan/20">
              <div className="text-3xl font-bold text-ocean-bioluminescent mb-2">15</div>
              <div className="text-white/80">Active Projects</div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-ocean-cyan/20">
              <div className="text-3xl font-bold text-ocean-bioluminescent mb-2">99%</div>
              <div className="text-white/80">Detection Accuracy</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-ocean-bioluminescent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-ocean-bioluminescent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
