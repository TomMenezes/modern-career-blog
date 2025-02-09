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
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
              Wellington Vieira Menezes
            </h1>
          </div>
          <div className="hidden sm:flex sm:space-x-8">
            <Link to="/" className="nav-link">
              {t('nav.home')}
            </Link>
            <Link to="/portfolio" className="nav-link">
              {t('nav.portfolio')}
            </Link>
            <Link to="/blog" className="nav-link">
              {t('nav.blog')}
            </Link>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="ml-4"
            title={tooltipText}
          >
            <Globe className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="sm:hidden ml-4"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        {isMenuOpen && (
          <div className="sm:hidden mt-2 space-y-2">
            <Link to="/" className="block nav-link">
              {t('nav.home')}
            </Link>
            <Link to="/portfolio" className="block nav-link">
              {t('nav.portfolio')}
            </Link>
            <Link to="/blog" className="block nav-link">
              {t('nav.blog')}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
