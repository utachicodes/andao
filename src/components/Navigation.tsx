
import { useState } from 'react';
import { Code2 } from 'lucide-react';

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
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-green-400/20">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-3 text-xl font-bold text-green-400 tracking-wide cursor-pointer hover:text-green-300 transition-colors duration-300"
            onClick={() => onNavigate('home')}
          >
            <Code2 className="w-6 h-6" />
            <span className="font-mono">Abdoullah.dev</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative group ${
                  currentPage === item.id 
                    ? 'text-green-400' 
                    : 'text-gray-300 hover:text-green-400'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-green-400 transform origin-left transition-transform duration-300 ${
                  currentPage === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </button>
            ))}
          </div>

          <button 
            className="md:hidden text-green-400 hover:text-green-300 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-green-400/20 pt-6">
            <div className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left text-base font-medium tracking-wide transition-all duration-300 ${
                    currentPage === item.id ? 'text-green-400' : 'text-gray-300 hover:text-green-400'
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
