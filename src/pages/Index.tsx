import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaLinkedin, FaGithub, FaRocket, FaBriefcase, FaBookOpen } from 'react-icons/fa';
import { Button } from "@/components/ui/button";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      {/* Hero Section */}
      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="fade-in space-y-12">
          <section className="text-center space-y-6 py-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-indigo-500/20 blur-3xl rounded-full"></div>
              <h1 className="relative text-5xl sm:text-7xl font-bold gradient-text mb-6">
                {t('home.welcome')}
              </h1>
            </div>
            <p className="text-xl sm:text-2xl text-gray-700 mx-auto max-w-3xl leading-relaxed">
              {t('home.subtitle')}
            </p>
            <div className="flex justify-center mt-8">
              <Button size="lg" className="gradient-bg text-white px-8 py-3 text-lg font-semibold hover:shadow-lg transition-all duration-300">
                {t('home.explore')}
              </Button>
            </div>
          </section>

          {/* Cards Section */}
          <section className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Link 
              to="/experience" 
              className="group relative overflow-hidden"
            >
              <div className="glass-effect p-8 rounded-2xl card-hover h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <FaBriefcase className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:gradient-text transition-all duration-300">
                    {t('home.experience.title')}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('home.experience.description')}
                  </p>
                  <div className="mt-6 flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    {t('home.experience.action')} <FaRocket className="ml-2" />
                  </div>
                </div>
              </div>
            </Link>

            <Link 
              to="/portfolio" 
              className="group relative overflow-hidden"
            >
              <div className="glass-effect p-8 rounded-2xl card-hover h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/10 to-red-500/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 gradient-bg-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <FaRocket className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:gradient-text transition-all duration-300">
                    {t('home.portfolio.title')}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('home.portfolio.description')}
                  </p>
                  <div className="mt-6 flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    {t('home.portfolio.action')} <FaRocket className="ml-2" />
                  </div>
                </div>
              </div>
            </Link>

            <Link 
              to="/blog" 
              className="group relative overflow-hidden"
            >
              <div className="glass-effect p-8 rounded-2xl card-hover h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 gradient-bg-tertiary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <FaBookOpen className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:gradient-text transition-all duration-300">
                    {t('home.blog.title')}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('home.blog.description')}
                  </p>
                  <div className="mt-6 flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    {t('home.blog.action')} <FaRocket className="ml-2" />
                  </div>
                </div>
              </div>
            </Link>
          </section>
        </div>
      </main>

      {/* Contact Section */}
      <footer className="mt-32 pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="slide-up">
          <h2 className="text-3xl font-bold gradient-text mb-8 text-center">{t('home.contacts')}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <a 
              href="mailto:wvm.menezes@gmail.com" 
              className="glass-effect p-6 rounded-2xl card-hover group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope className="text-white text-lg" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600 text-sm">wvm.menezes@gmail.com</p>
                </div>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/wellington-menezes-8a12b216/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="glass-effect p-6 rounded-2xl card-hover group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 gradient-bg-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaLinkedin className="text-white text-lg" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">LinkedIn</p>
                  <p className="text-gray-600 text-sm">Wellington Menezes</p>
                </div>
              </div>
            </a>

            <a 
              href="https://github.com/TomMenezes" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="glass-effect p-6 rounded-2xl card-hover group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 gradient-bg-tertiary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaGithub className="text-white text-lg" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">GitHub</p>
                  <p className="text-gray-600 text-sm">@TomMenezes</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
