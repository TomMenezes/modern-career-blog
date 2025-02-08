
import Navbar from "@/components/Navbar";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Portfolio</h1>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Exemplo de Projeto */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Nome do Projeto</h3>
                <p className="text-gray-600 mb-4">
                  Descrição detalhada do projeto e suas principais características.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    Tailwind
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
