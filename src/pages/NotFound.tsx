import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaHome, FaSearch, FaExclamationTriangle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="fade-in">
          {/* Icon */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 blur-3xl rounded-full"></div>
            <div className="relative w-32 h-32 gradient-bg-secondary rounded-3xl flex items-center justify-center mx-auto">
              <FaExclamationTriangle className="text-white text-5xl" />
            </div>
          </div>

          {/* 404 Text */}
          <h1 className="text-8xl sm:text-9xl font-bold gradient-text mb-6">404</h1>
          
          {/* Message */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('notFound.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            {t('notFound.description')}
          </p>

          {/* URL Info */}
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 mb-8">
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <FaSearch className="text-primary" />
              <span className="font-mono text-sm break-all">
                {location.pathname}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button 
                size="lg" 
                className="gradient-bg text-white px-8 py-3 text-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                <FaHome className="mr-2" />
                {t('notFound.back')}
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3 text-lg font-semibold border-2 hover:bg-primary hover:text-white transition-all duration-300"
              onClick={() => window.history.back()}
            >
              {t('notFound.goBack')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
