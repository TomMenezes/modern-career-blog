
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
    </div>
  );
};

export default Index;
