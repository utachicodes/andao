import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HomePage from '@/components/HomePage';
import AboutPage from '@/components/AboutPage';
import ExperiencePage from '@/components/ExperiencePage';
import ProjectsPage from '@/components/ProjectsPage';
import PoetryPage from '@/components/PoetryPage';
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
      case 'poetry':
        return <PoetryPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <div className="transition-all duration-500 ease-in-out">
        {renderPage()}
      </div>
      
      <footer className="border-t border-gray-800 bg-gray-900 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-sm font-light text-gray-400">
            © 2025 Abdoullah Ndao - Built with React & TypeScript
          </div>
          <div className="text-xs text-gray-500 mt-2 font-mono">
            console.log("Thanks for visiting! 👨‍💻");
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
