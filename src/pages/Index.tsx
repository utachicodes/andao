
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import OceanBackground from '@/components/OceanBackground';
import HomePage from '@/components/HomePage';
import AboutPage from '@/components/AboutPage';
import TechnologyPage from '@/components/TechnologyPage';
import ProjectsPage from '@/components/ProjectsPage';
import ContactPage from '@/components/ContactPage';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');
  
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'technology':
        return <TechnologyPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <OceanBackground />
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <div className="relative z-10 transition-all duration-500 ease-in-out">
        {renderPage()}
      </div>
      
      {/* Footer */}
      <footer className="relative z-10 bg-ocean-deep/80 backdrop-blur-md border-t border-ocean-cyan/20 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="text-ocean-bioluminescent font-bold text-xl mb-2">DeepSea AI</div>
          <p className="text-white/60 text-sm">Protecting our oceans with artificial intelligence</p>
          <p className="text-white/40 text-xs mt-2">© 2024 DeepSea AI. Based in Dakar, Senegal.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
