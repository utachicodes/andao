
import { useState } from 'react';

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div 
            className="text-xl font-light text-gray-900 tracking-wide cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            Abdoullah Ndao
          </div>

          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-light tracking-wide transition-all duration-300 ${
                  currentPage === item.id ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button 
            className="md:hidden text-gray-500 hover:text-gray-900 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`w-full h-px bg-current transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-1' : ''}`}></div>
              <div className={`w-full h-px bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-full h-px bg-current transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-1' : ''}`}></div>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-8 pb-6">
            <div className="space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left text-base font-light tracking-wide transition-all duration-300 ${
                    currentPage === item.id ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
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
