
import Navbar from "@/components/Navbar";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      "name": "senior3",
      "components": ["AWS", "Golang", "MongoDB", "Crypto", "Redis", "GRPC", "NodeJS"]
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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{t('experience.title')}</h1>
          <div className="grid gap-8">

            {experiences.map((item) => (
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{t(`experience.${item.name}.company`)}</h3>
                    <span className="text-gray-500">{t(`experience.${item.name}.begin`)} - {t(`experience.${item.name}.end`)}</span>
                  </div>
                  <h4 className="text-lg font-medium text-gray-700 mb-2">{t(`experience.${item.name}.role`)}</h4>
                  <p className="text-gray-600 mb-4">
                    {t(`experience.${item.name}.description`)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.components.map((component) => (
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{component}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </main>
    </div>
  );
};

export default Experience;
