
import Navbar from "@/components/Navbar";
import { FaGithub, FaExternalLinkAlt, FaRocket, FaCode, FaVideo } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: t('portfolio.projects.videoConference.title'),
      description: t('portfolio.projects.videoConference.description'),
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: t('portfolio.projects.videoConference.technologies', { returnObjects: true }) as string[],
      features: t('portfolio.projects.videoConference.features', { returnObjects: true }) as string[],
      isDemo: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="fade-in">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-indigo-500/20 blur-3xl rounded-full"></div>
              <div className="relative w-20 h-20 gradient-bg-secondary rounded-3xl flex items-center justify-center mx-auto">
                <FaRocket className="text-white text-3xl" />
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold gradient-text mb-6">{t('portfolio.title')}</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('portfolio.subtitle')}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} className="glass-effect rounded-2xl overflow-hidden card-hover group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/90 text-sm">
                      {project.description.substring(0, 80)}...
                    </p>
                  </div>
                  {project.isDemo && (
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {t('portfolio.demo')}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <Link to={project.isDemo ? "/videoconference" : "#"} className="flex-1">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        <FaVideo className="mr-2" />
                        {project.isDemo ? t('portfolio.viewDemo') : t('portfolio.viewProject')}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State (hidden when projects exist) */}
          {projects.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 gradient-bg-tertiary rounded-3xl flex items-center justify-center mx-auto mb-8">
                <FaCode className="text-white text-4xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('portfolio.empty.title')}</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                {t('portfolio.empty.description')}
              </p>
              <Button 
                size="lg" 
                className="gradient-bg text-white px-8 py-3 text-lg font-semibold hover:shadow-lg transition-all duration-300"
                onClick={() => window.history.back()}
              >
                {t('portfolio.back')}
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
