
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navigation = ({ currentPage, onNavigate }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'technology', label: 'Technology' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ocean-deep/70 backdrop-blur-xl border-b border-ocean-cyan/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Premium Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <img 
              src="/lovable-uploads/b48cb700-5c2c-47b3-83b5-e0791fa3a941.png" 
              alt="DeepSea AI" 
              className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(0, 212, 255, 0.3))'
              }}
            />
            <div className="text-xl font-light text-white tracking-wide">
              DEEP<span className="text-ocean-bioluminescent font-medium">SEA</span>
            </div>
          </div>

          {/* Sophisticated Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative text-sm font-light tracking-wide transition-all duration-300 hover:text-ocean-bioluminescent group ${
                  currentPage === item.id ? 'text-ocean-bioluminescent' : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
                <div className={`absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ocean-bioluminescent to-transparent transition-all duration-300 ${
                  currentPage === item.id ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-100'
                }`}></div>
              </button>
            ))}
          </div>

          {/* Premium CTA Button */}
          <Button className="hidden md:block bg-gradient-to-r from-ocean-teal/80 to-ocean-cyan/80 hover:from-ocean-cyan hover:to-ocean-bioluminescent text-white font-light px-6 py-2 rounded-full transition-all duration-500 border border-ocean-cyan/30 backdrop-blur-sm">
            Contact Us
          </Button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white/80 hover:text-ocean-bioluminescent transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <div className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-ocean-cyan/20">
            <div className="space-y-4 pt-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 text-sm font-light tracking-wide transition-all duration-300 ${
                    currentPage === item.id ? 'text-ocean-bioluminescent' : 'text-white/70 hover:text-ocean-bioluminescent'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
