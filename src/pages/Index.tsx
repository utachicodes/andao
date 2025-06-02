
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
    <div className="min-h-screen relative">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <div className="transition-all duration-500 ease-in-out">
        {renderPage()}
      </div>
      
      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="text-lg font-light mb-2">ABDOULLAH NDAO</div>
          <p className="text-slate-400 text-sm">Data Scientist & AI Engineer</p>
          <p className="text-slate-500 text-xs mt-2">© 2024 Abdoullah Ndao. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
