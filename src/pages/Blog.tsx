
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Blog = () => {
  // const posts = [
  //   {
  //     id: 1,
  //     title: "Minha Jornada como Desenvolvedor",
  //     date: "12 de Março, 2024",
  //     preview: "Como iniciei minha carreira em desenvolvimento de software e as lições aprendidas ao longo do caminho.",
  //     image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  //   },
  //   {
  //     id: 2,
  //     title: "Tecnologias que Mudaram Minha Carreira",
  //     date: "10 de Março, 2024",
  //     preview: "As principais tecnologias e ferramentas que impactaram positivamente minha trajetória profissional.",
  //     image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  //   }
  // ];
  const posts = [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
          <div className="grid gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm mb-4">{post.date}</p>
                    <p className="text-gray-600 mb-4">{post.preview}</p>
                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      Ler mais <span className="ml-1">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
