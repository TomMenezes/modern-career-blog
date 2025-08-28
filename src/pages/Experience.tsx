
import Navbar from "@/components/Navbar";
import { useTranslation } from "react-i18next";
import { FaBriefcase, FaCalendarAlt, FaBuilding } from "react-icons/fa";

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      "name": "senior4",
      "components": ["AWS", "Golang", "MongoDB", "Crypto", "Redis", "GRPC", "NodeJS"]
    },
    {
      "name": "senior3",
      "components": ["AWS", "Golang", "Mysql", "NodeJS"]
    },
    {
      "name": "senior2",
      "components": ["AWS", "Golang", "SQL Server", "PostgresDB"]
    },
    {
      "name": "specialist",
      "components": ["AWS", "C#", "ASPNet", "SQL Server", "MongoDB", "MySQL", "NodeJS"]
    },
    {
      "name": "senior1",
      "components": ["C#", "ASPNet", "SQL Server"]
    },
    {
      "name": "junior",
      "components": ["Windows Forms", "ASPNet", "SQL Server"]
    },
    {
      "name": "intern",
      "components": ["ASP", "VB", "Delphi", "Com+", "SQL Server"]
    },
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
              <div className="relative w-20 h-20 gradient-bg rounded-3xl flex items-center justify-center mx-auto">
                <FaBriefcase className="text-white text-3xl" />
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold gradient-text mb-6">{t('experience.title')}</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('experience.subtitle')}
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-purple-500 to-indigo-500 rounded-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {experiences.map((item, index) => (
                <div key={item.name} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 gradient-bg rounded-full border-4 border-white shadow-lg hidden lg:block group-hover:scale-150 transition-transform duration-300"></div>
                  
                  <div className="lg:ml-16">
                    <div className="glass-effect rounded-2xl overflow-hidden card-hover">
                      <div className="p-8">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                          <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                            <div className="w-12 h-12 gradient-bg-secondary rounded-xl flex items-center justify-center">
                              <FaBuilding className="text-white text-lg" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900 hover:gradient-text transition-all duration-300">
                                {t(`experience.${item.name}.company`)}
                              </h3>
                              <h4 className="text-lg font-medium text-gray-700">
                                {t(`experience.${item.name}.role`)}
                              </h4>
                            </div>
                          </div>
                          <div className="flex items-center text-gray-500 bg-white/50 px-4 py-2 rounded-xl">
                            <FaCalendarAlt className="mr-2" />
                            <span className="font-medium">
                              {t(`experience.${item.name}.begin`)} - {t(`experience.${item.name}.end`)}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                          {t(`experience.${item.name}.description`)}
                        </p>
                        
                        <div className="flex flex-wrap gap-3">
                          {item.components.map((component) => (
                            <span 
                              key={component}
                              className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
                            >
                              {component}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Experience;
