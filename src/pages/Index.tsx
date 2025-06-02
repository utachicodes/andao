
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HomePage from '@/components/HomePage';
import AboutPage from '@/components/AboutPage';
import ExperiencePage from '@/components/ExperiencePage';
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
      case 'experience':
        return <ExperiencePage />;
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <div className="transition-all duration-500 ease-in-out">
        {renderPage()}
      </div>
      
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-sm font-light text-gray-500">
            © 2024 Abdoullah Ndao
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
