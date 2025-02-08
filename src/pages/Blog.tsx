
import Navbar from "@/components/Navbar";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
          <div className="grid gap-8">
            {/* Exemplo de Post */}
            <article className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Título do Post
              </h2>
              <p className="text-gray-500 text-sm mb-4">12 de Março, 2024</p>
              <p className="text-gray-600">
                Preview do conteúdo do post. Aqui você pode compartilhar suas experiências
                e conhecimentos sobre desenvolvimento de software e carreira.
              </p>
              <div className="mt-4">
                <button className="text-primary hover:text-primary/80 font-medium transition-colors">
                  Ler mais →
                </button>
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
