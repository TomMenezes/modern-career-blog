import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Globe, Menu, X } from "lucide-react";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const nextLanguage = i18n.language === 'pt' ? 'en' : 'pt';
  const tooltipText = nextLanguage === 'pt' ? 'Setar a linguagem em português' : 'Set the language to English';

  return (
    <nav className="fixed top-0 left-0 right-0 glass-effect border-b border-white/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="group">
              <h1 className="text-2xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
                Wellington Vieira Menezes
              </h1>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:space-x-8">
            <Link to="/" className="nav-link text-lg font-medium">
              {t('nav.home')}
            </Link>
            <Link to="/experience" className="nav-link text-lg font-medium">
              {t('nav.experience')}
            </Link>
            <Link to="/portfolio" className="nav-link text-lg font-medium">
              {t('nav.portfolio')}
            </Link>
            <Link to="/blog" className="nav-link text-lg font-medium">
              {t('nav.blog')}
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="w-10 h-10 rounded-xl hover:bg-white/20 transition-all duration-300"
              title={tooltipText}
            >
              <Globe className="h-5 w-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="sm:hidden w-10 h-10 rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden mt-4 pb-6 space-y-4 slide-up">
            <Link 
              to="/" 
              className="block nav-link text-lg font-medium py-3 px-4 rounded-xl hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/experience" 
              className="block nav-link text-lg font-medium py-3 px-4 rounded-xl hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.experience')}
            </Link>
            <Link 
              to="/portfolio" 
              className="block nav-link text-lg font-medium py-3 px-4 rounded-xl hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.portfolio')}
            </Link>
            <Link 
              to="/blog" 
              className="block nav-link text-lg font-medium py-3 px-4 rounded-xl hover:bg-white/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.blog')}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
