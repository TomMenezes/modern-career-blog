
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const posts = [
  {
    id: 1,
    title: "Minha Jornada como Desenvolvedor",
    date: "12 de Março, 2024",
    content: `Minha jornada como desenvolvedor começou há alguns anos, quando decidi fazer uma transição de carreira. Desde então, tenho aprendido constantemente e enfrentado diversos desafios que me ajudaram a crescer profissionalmente.

    Durante esse período, trabalhei em diversos projetos interessantes e aprendi várias tecnologias importantes. A chave para o sucesso foi manter-me sempre atualizado e disposto a aprender.

    Uma das maiores lições que aprendi é que o desenvolvimento de software não é apenas sobre código, mas também sobre resolver problemas e trabalhar em equipe.`,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    id: 2,
    title: "Tecnologias que Mudaram Minha Carreira",
    date: "10 de Março, 2024",
    content: `Ao longo da minha carreira como desenvolvedor, algumas tecnologias se destacaram por terem um impacto significativo na minha trajetória profissional.

    React foi uma das tecnologias que mais impactaram minha carreira. A biblioteca não apenas mudou a forma como eu desenvolvo interfaces, mas também abriu muitas oportunidades profissionais.

    Além disso, o TypeScript trouxe uma nova dimensão ao meu código, tornando-o mais seguro e manutenível. A combinação de React com TypeScript se tornou minha stack preferida para desenvolvimento frontend.`,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <Navbar />
        <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post não encontrado</h1>
            <Link to="/blog" className="text-primary hover:text-primary/80">
              Voltar para o Blog
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="fade-in">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
          >
            ← Voltar para o Blog
          </Link>
          <article className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <p className="text-gray-500 text-sm mb-8">{post.date}</p>
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </article>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;
