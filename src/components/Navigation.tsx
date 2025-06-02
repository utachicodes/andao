
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
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-lg">AN</span>
            </div>
            <div className="text-xl font-light text-slate-800 tracking-wide">
              ABDOULLAH <span className="font-medium">NDAO</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative text-sm font-light tracking-wide transition-all duration-300 group ${
                  currentPage === item.id ? 'text-slate-800' : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                {item.label}
                <div className={`absolute bottom-0 left-0 w-full h-px bg-slate-800 transition-all duration-300 ${
                  currentPage === item.id ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-100'
                }`}></div>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <Button className="hidden md:block bg-slate-800 hover:bg-slate-700 text-white font-light px-6 py-2 rounded-lg transition-all duration-300">
            Download CV
          </Button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-600 hover:text-slate-800 transition-colors duration-300"
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
          <div className="md:hidden mt-6 pb-6 border-t border-gray-200">
            <div className="space-y-4 pt-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 text-sm font-light tracking-wide transition-all duration-300 ${
                    currentPage === item.id ? 'text-slate-800' : 'text-slate-600 hover:text-slate-800'
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
