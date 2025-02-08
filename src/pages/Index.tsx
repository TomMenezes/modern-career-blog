
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="fade-in space-y-8">
          <section className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Bem-vindo ao Meu Blog Profissional
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Compartilhando experiências e conhecimentos em desenvolvimento de software
            </p>
          </section>

          <section className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Experiência Profissional</h3>
              <p className="text-gray-600">
                Explore minha jornada profissional e os projetos em que trabalhei.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Portfolio</h3>
              <p className="text-gray-600">
                Conheça os projetos que desenvolvi e as tecnologias utilizadas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Blog</h3>
              <p className="text-gray-600">
                Artigos sobre desenvolvimento, carreira e tecnologia.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
