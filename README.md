# 🚀 Blog Profissional Moderno

Um blog profissional desenvolvido com tecnologias modernas, design elegante e arquitetura escalável. Este projeto demonstra as melhores práticas de desenvolvimento frontend com React, TypeScript e Tailwind CSS.

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/TomMenezes/modern-career-blog)

![Blog Preview](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)

## ✨ Características

- 🎨 **Design Moderno** - Interface elegante com gradientes e glass effects
- 🌐 **Internacionalização** - Suporte completo para português e inglês
- 📱 **Responsivo** - Design mobile-first e adaptável
- ⚡ **Performance** - Otimizado com Vite e lazy loading
- 🎯 **SEO Otimizado** - Meta tags e estrutura semântica
- 🔧 **TypeScript** - Tipagem estática para maior confiabilidade
- 🎭 **Animações** - Transições suaves e micro-interações
- 📝 **Blog Técnico** - Seção dedicada para artigos sobre desenvolvimento

## 🔗 Links

- 🌐 **Demo**: [Blog Profissional](https://modern-career-blog.vercel.app)
- 📦 **Repositório**: [GitHub](https://github.com/TomMenezes/modern-career-blog)
- 📖 **Documentação**: Este README

## 🏗️ Arquitetura do Projeto

### Stack Tecnológica

| Categoria | Tecnologias |
|-----------|-------------|
| **Build Tool** | Vite 5.4.14 |
| **Framework** | React 18 + TypeScript |
| **Roteamento** | React Router DOM |
| **Estilização** | Tailwind CSS + Shadcn/ui |
| **Internacionalização** | react-i18next |
| **Estado** | React Hooks |
| **Deploy** | Vercel/Netlify |

### Estrutura de Arquivos

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes Shadcn/ui
│   └── Navbar.tsx      # Navegação principal
├── pages/              # Páginas da aplicação
│   ├── Index.tsx       # Página inicial
│   ├── Blog.tsx        # Lista de posts
│   ├── BlogPost.tsx    # Post individual
│   ├── Portfolio.tsx   # Portfólio
│   ├── Experience.tsx  # Experiência profissional
│   ├── VideoConference.tsx # Projeto específico
│   └── NotFound.tsx    # Página 404
├── hooks/              # Custom hooks
├── lib/                # Utilitários e configurações
├── i18n/               # Configuração de traduções
│   ├── config.ts
│   ├── en/
│   └── pt/
└── index.css           # Estilos globais
```

## 🎨 Design System

### Cores e Gradientes

```css
/* Cores primárias */
--primary: 262 83% 58%    /* Roxo principal */
--ring: 262 83% 58%       /* Cor de foco */

/* Gradientes personalizados */
.gradient-bg {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.gradient-bg-secondary {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.gradient-bg-tertiary {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}
```

### Componentes Principais

- **Glass Effect** - Efeito de vidro fosco para cards
- **Gradient Text** - Texto com gradiente
- **Card Hover** - Animações de hover
- **Fade In** - Animações de entrada
- **Custom Scrollbar** - Scrollbar personalizada

## 🌐 Internacionalização (i18n)

Sistema completo de traduções usando `react-i18next`:

```typescript
// Exemplo de uso
const { t } = useTranslation();
const title = t('home.welcome');
```

### Estrutura de Traduções

```json
{
  "nav": {
    "home": "Início",
    "experience": "Experiência Profissional",
    "portfolio": "Portfólio",
    "blog": "Blog"
  },
  "home": {
    "welcome": "Bem-vindo ao Meu Blog Profissional",
    "subtitle": "Compartilhando experiências e conhecimentos..."
  }
}
```

## ⚡ Performance e Otimizações

### Code Splitting
- Carregamento sob demanda de componentes
- Lazy loading de páginas
- Bundle otimizado com Vite

### Otimizações de CSS
- Purge CSS automático
- Minificação em produção
- Critical CSS inline

### Imagens
- Otimização automática
- Lazy loading
- Formatos modernos (WebP)

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# 1. Clone o repositório
git clone <repository-url>
cd modern-career-blog

# 2. Instale as dependências
npm install

# 3. Execute em modo desenvolvimento
npm run dev

# 4. Acesse http://localhost:5173
```

### Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build
npm run lint         # Linting do código
```

## 📱 Responsividade

O projeto segue uma abordagem mobile-first com breakpoints bem definidos:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🔧 Configurações

### Vite Configuration

```typescript
// vite.config.ts
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
})
```

### Tailwind Configuration

```typescript
// tailwind.config.ts
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
}
```

## 📝 Blog Técnico

O projeto inclui uma seção de blog com artigos técnicos sobre:

- Arquitetura do projeto
- Decisões tecnológicas
- Melhores práticas
- Tutoriais de implementação

### Exemplo de Post

- **Título**: "Arquitetura de um Blog Moderno com Vite + React + TypeScript"
- **Conteúdo**: Explicação detalhada da stack e decisões arquiteturais
- **Tags**: Vite, React, TypeScript, Tailwind CSS, i18n, Arquitetura

## 🎯 Funcionalidades

### Páginas Principais

1. **Home** - Apresentação e navegação
2. **Portfólio** - Projetos e trabalhos
3. **Blog** - Artigos técnicos
4. **Experiência** - Trajetória profissional
5. **Projetos Específicos** - Detalhes de projetos

### Componentes Especiais

- **Navbar** - Navegação com glass effect
- **Cards** - Componentes interativos
- **Timeline** - Linha do tempo de experiência
- **Project Showcase** - Exibição de projetos
- **Blog Posts** - Sistema de artigos

## 🔮 Próximos Passos

### Melhorias Planejadas

- [ ] CMS headless para gerenciamento de conteúdo
- [ ] Sistema de comentários
- [ ] PWA (Progressive Web App)
- [ ] Analytics e métricas
- [ ] SEO avançado
- [ ] Dark mode
- [ ] Sistema de busca
- [ ] Newsletter

### Roadmap

1. **Fase 1**: CMS e gerenciamento de conteúdo
2. **Fase 2**: Funcionalidades interativas
3. **Fase 3**: Otimizações avançadas
4. **Fase 4**: Expansão de funcionalidades

## 🤝 Contribuição

Este projeto é pessoal, mas sugestões e feedback são bem-vindos!

### Como Contribuir

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Wellington Vieira Menezes**
- LinkedIn: [Wellington Menezes](https://www.linkedin.com/in/wellington-menezes-8a12b216/)
- GitHub: [@wellington-menezes](https://github.com/TomMenezes)

## 🙏 Agradecimentos

- [Shadcn/ui](https://ui.shadcn.com/) - Componentes incríveis
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Vite](https://vitejs.dev/) - Build tool ultra-rápido
- [React](https://reactjs.org/) - Biblioteca de UI
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
