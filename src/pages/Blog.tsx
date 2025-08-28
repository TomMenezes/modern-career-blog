
import Navbar from "@/components/Navbar";
import { FaNewspaper, FaCode, FaRocket, FaArrowLeft } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Blog = () => {
  const { t } = useTranslation();

  const posts = [
    {
      id: t('blog.posts.architecture.id'),
      title: t('blog.posts.architecture.title'),
      excerpt: t('blog.posts.architecture.excerpt'),
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      date: t('blog.posts.architecture.date'),
      readTime: t('blog.posts.architecture.readTime'),
      tags: t('blog.posts.architecture.tags', { returnObjects: true }) as string[]
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
                <FaNewspaper className="text-white text-3xl" />
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold gradient-text mb-6">{t('blog.title')}</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('blog.subtitle')}
            </p>
          </div>

          {/* Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="glass-effect rounded-2xl overflow-hidden card-hover group">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-white/80 text-sm">{post.date}</span>
                      <span className="text-white/60">•</span>
                      <span className="text-white/80 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      {t('blog.readMore')}
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State (hidden when posts exist) */}
          {posts.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 gradient-bg-tertiary rounded-3xl flex items-center justify-center mx-auto mb-8">
                <FaCode className="text-white text-4xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('blog.empty.title')}</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                {t('blog.empty.description')}
              </p>
              <Button
                size="lg"
                className="gradient-bg text-white px-8 py-3 text-lg font-semibold hover:shadow-lg transition-all duration-300"
                onClick={() => window.history.back()}
              >
                {t('blog.back')}
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Blog;
