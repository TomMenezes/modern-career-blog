
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { FaArrowLeft, FaCalendar, FaClock, FaUser, FaCode, FaRocket, FaPalette, FaGlobe, FaMobile, FaDesktop } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const BlogPost = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  // Post content
  const post = {
    id: t('blog.posts.architecture.id'),
    title: t('blog.posts.architecture.title'),
    excerpt: t('blog.posts.architecture.excerpt'),
    content: `
      <div class="prose prose-lg max-w-none">
        <h2>🎯 ${t('blog.content.overview')}</h2>
        <p>${t('blog.content.overviewDesc')}</p>
        
        <h2>🏗️ ${t('blog.content.techStack')}</h2>
        <div class="grid md:grid-cols-2 gap-6 my-8">
          <div class="glass-effect rounded-xl p-6">
            <h3 class="text-xl font-bold mb-4 flex items-center">
              <FaRocket class="mr-2 text-primary" />
              ${t('blog.content.frontendFramework')}
            </h3>
            <ul class="space-y-2">
              <li><strong>${t('blog.content.vite')}</strong></li>
              <li><strong>${t('blog.content.react18')}</strong></li>
              <li><strong>${t('blog.content.typescript')}</strong></li>
              <li><strong>${t('blog.content.reactRouter')}</strong></li>
            </ul>
          </div>
          
          <div class="glass-effect rounded-xl p-6">
            <h3 class="text-xl font-bold mb-4 flex items-center">
              <FaPalette class="mr-2 text-primary" />
              ${t('blog.content.styling')}
            </h3>
            <ul class="space-y-2">
              <li><strong>${t('blog.content.tailwind')}</strong></li>
              <li><strong>${t('blog.content.shadcn')}</strong></li>
              <li><strong>${t('blog.content.cssProps')}</strong></li>
              <li><strong>${t('blog.content.animations')}</strong></li>
            </ul>
          </div>
        </div>

        <h2>🌐 ${t('blog.content.i18n')}</h2>
        <p>${t('blog.content.i18nDesc')}</p>
        
        <div class="glass-effect rounded-xl p-6 my-6">
          <h3 class="text-lg font-bold mb-3">${t('blog.content.translationStructure')}</h3>
          <pre class="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
<code>src/i18n/
├── config.ts
├── en/
│   └── translation.json
└── pt/
    └── translation.json</code></pre>
        </div>

        <h2>🎨 ${t('blog.content.designSystem')}</h2>
        <p>${t('blog.content.designSystemDesc')}</p>
        
        <div class="grid md:grid-cols-3 gap-4 my-6">
          <div class="text-center p-4 glass-effect rounded-lg">
            <div class="w-12 h-12 gradient-bg rounded-xl mx-auto mb-3 flex items-center justify-center">
              <FaPalette class="text-white" />
            </div>
            <h4 class="font-bold">${t('blog.content.gradients')}</h4>
            <p class="text-sm text-gray-600">${t('blog.content.gradientsDesc')}</p>
          </div>
          
          <div class="text-center p-4 glass-effect rounded-lg">
            <div class="w-12 h-12 gradient-bg-secondary rounded-xl mx-auto mb-3 flex items-center justify-center">
              <FaDesktop class="text-white" />
            </div>
            <h4 class="font-bold">${t('blog.content.glassEffect')}</h4>
            <p class="text-sm text-gray-600">${t('blog.content.glassEffectDesc')}</p>
          </div>
          
          <div class="text-center p-4 glass-effect rounded-lg">
            <div class="w-12 h-12 gradient-bg-tertiary rounded-xl mx-auto mb-3 flex items-center justify-center">
              <FaMobile class="text-white" />
            </div>
            <h4 class="font-bold">${t('blog.content.responsive')}</h4>
            <p class="text-sm text-gray-600">${t('blog.content.responsiveDesc')}</p>
          </div>
        </div>

        <h2>📁 ${t('blog.content.fileStructure')}</h2>
        <div class="glass-effect rounded-xl p-6 my-6">
          <pre class="bg-gray-900 text-blue-400 p-4 rounded-lg overflow-x-auto text-sm">
<code>src/
├── components/
│   ├── ui/           # Componentes Shadcn/ui
│   └── Navbar.tsx    # Navegação principal
├── pages/            # Páginas da aplicação
├── hooks/            # Custom hooks
├── lib/              # Utilitários
├── i18n/             # Configuração de traduções
└── index.css         # Estilos globais</code></pre>
        </div>

        <h2>⚡ ${t('blog.content.performance')}</h2>
        <ul>
          <li><strong>${t('blog.content.codeSplitting')}</strong> - ${t('blog.content.codeSplittingDesc')}</li>
          <li><strong>${t('blog.content.lazyLoading')}</strong> - ${t('blog.content.lazyLoadingDesc')}</li>
          <li><strong>${t('blog.content.imageOpt')}</strong> - ${t('blog.content.imageOptDesc')}</li>
          <li><strong>${t('blog.content.cssPurge')}</strong> - ${t('blog.content.cssPurgeDesc')}</li>
        </ul>

        <h2>🔧 ${t('blog.content.configurations')}</h2>
        
        <h3>${t('blog.content.viteConfig')}</h3>
        <div class="glass-effect rounded-xl p-6 my-6">
          <pre class="bg-gray-900 text-yellow-400 p-4 rounded-lg overflow-x-auto text-sm">
<code>// vite.config.ts
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: "./postcss.config.js",
  },
})</code></pre>
        </div>

        <h3>${t('blog.content.tailwindConfig')}</h3>
        <div class="glass-effect rounded-xl p-6 my-6">
          <pre class="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
<code>// tailwind.config.ts
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
      },
      borderRadius: {
        lg: "var(--radius)",
      },
    },
  },
}</code></pre>
        </div>

        <h2>🚀 ${t('blog.content.deploy')}</h2>
        <p>${t('blog.content.deployDesc')}</p>
        <ul>
          <li>${t('blog.content.buildOpt')}</li>
          <li>${t('blog.content.minification')}</li>
          <li>${t('blog.content.gzip')}</li>
          <li>${t('blog.content.cacheHeaders')}</li>
        </ul>

        <h2>📱 ${t('blog.content.responsiveness')}</h2>
        <p>${t('blog.content.responsivenessDesc')}</p>
        <ul>
          <li><strong>${t('blog.content.mobile')}</strong>: 320px - 768px</li>
          <li><strong>${t('blog.content.tablet')}</strong>: 768px - 1024px</li>
          <li><strong>${t('blog.content.desktop')}</strong>: 1024px+</li>
        </ul>

        <h2>🎯 ${t('blog.content.nextSteps')}</h2>
        <p>${t('blog.content.nextStepsDesc')}</p>
        <ul>
          <li>${t('blog.content.cms')}</li>
          <li>${t('blog.content.comments')}</li>
          <li>${t('blog.content.pwa')}</li>
          <li>${t('blog.content.analytics')}</li>
          <li>${t('blog.content.seo')}</li>
        </ul>

        <h2>📦 ${t('blog.content.repository')}</h2>
        <p>${t('blog.content.repositoryDesc')}</p>
        <div class="glass-effect rounded-xl p-6 my-6">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-lg font-bold mb-2">modern-career-blog</h3>
              <p class="text-gray-600 text-sm">Um blog profissional moderno desenvolvido com Vite + React + TypeScript</p>
            </div>
            <a href="${t('blog.content.githubUrl')}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path>
              </svg>
              ${t('blog.content.githubLink')}
            </a>
          </div>
        </div>

        <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-8">
          <p class="text-blue-800">
            <strong>💡 ${t('blog.content.tip')}:</strong> ${t('blog.content.tipDesc')}
          </p>
        </div>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    date: t('blog.posts.architecture.date'),
    readTime: t('blog.posts.architecture.readTime'),
    author: t('blog.posts.architecture.author'),
    role: t('blog.posts.architecture.role'),
    tags: t('blog.posts.architecture.tags', { returnObjects: true }) as string[]
  };

  // Check if post exists
  if (id !== post.id) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <Navbar />
        <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="fade-in">
            <div className="text-center py-20">
              <div className="w-24 h-24 gradient-bg-tertiary rounded-3xl flex items-center justify-center mx-auto mb-8">
                <FaCode className="text-white text-4xl" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('blog.post.notFound.title')}</h1>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                {t('blog.post.notFound.description')}
              </p>
              <Link to="/blog">
                <Button
                  size="lg"
                  className="gradient-bg text-white px-8 py-3 text-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  {t('blog.post.back')}
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="fade-in">
          {/* Back to Blog */}
          <Link
            to="/blog"
            className="inline-flex items-center text-gray-600 hover:text-primary mb-8 transition-colors duration-300"
          >
            <FaArrowLeft className="mr-2" />
            {t('blog.post.back')}
          </Link>

          {/* Article */}
          <article className="glass-effect rounded-2xl overflow-hidden">
            {/* Hero Image */}
            <div className="relative h-64 md:h-80">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Article Content */}
            <div className="p-8">
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center">
                  <FaCalendar className="mr-2" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <FaClock className="mr-2" />
                  {post.readTime}
                </div>
                <div className="flex items-center">
                  <FaUser className="mr-2" />
                  {post.author}
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 gradient-text">
                {post.title}
              </h1>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Content */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Author Info */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center">
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mr-4">
                    <FaUser className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{post.author}</h3>
                    <p className="text-gray-600">{post.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* More Articles */}
          <div className="mt-12 text-center">
            <Link to="/blog">
              <Button
                variant="outline"
                size="lg"
                className="hover:bg-primary hover:text-white transition-all duration-300"
              >
                {t('blog.post.moreArticles')}
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;
