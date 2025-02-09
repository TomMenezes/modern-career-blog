import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="fade-in space-y-8">
          <section className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              {t('home.welcome')}
            </h1>
            <p className="text-xl text-gray-600 mx-auto">
              {t('home.subtitle')}
            </p>
          </section>

          <section className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Link 
              to="/experience" 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary">
                {t('home.experience.title')}
              </h3>
              <p className="text-gray-600">
                {t('home.experience.description')}
              </p>
            </Link>

            <Link 
              to="/portfolio" 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary">
                {t('home.portfolio.title')}
              </h3>
              <p className="text-gray-600">
                {t('home.portfolio.description')}
              </p>
            </Link>

            <Link 
              to="/blog" 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary">
                {t('home.blog.title')}
              </h3>
              <p className="text-gray-600">
                {t('home.blog.description')}
              </p>
            </Link>
          </section>
        </div>
      </main>
      <footer className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">{t('home.contacts')}</h2>
        <ul className="space-y-4">
          <li className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <a href="mailto:wvm.menezes@gmail.com" className="text-xl text-gray-900 hover:text-primary transition-colors flex items-center">
              <FaEnvelope className="mr-2" /> Email: wvm.menezes@gmail.com
            </a>
          </li>
          <li className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <a href="https://www.linkedin.com/in/wellington-menezes-8a12b216/" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-900 hover:text-primary transition-colors flex items-center">
              <FaLinkedin className="mr-2" /> LinkedIn: https://www.linkedin.com/in/wellington-menezes-8a12b216/
            </a>
          </li>
          <li className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <a href="https://github.com/TomMenezes" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-900 hover:text-primary transition-colors flex items-center">
              <FaGithub className="mr-2" /> GitHub: https://github.com/TomMenezes
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Index;
