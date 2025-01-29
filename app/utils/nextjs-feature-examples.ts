export type FeatureKey = 
  | 'pageBasedRouting'
  | 'buildSystem'
  | 'middleware'
  | 'type_0'
  | 'type_1'
  | 'type_2'
  | 'objective_0'
  | 'objective_1'
  | 'objective_2';

interface FeatureExample {
  title: string;
  description: string;
  example: string;
}

type FeatureExamples = {
  [K in FeatureKey]: FeatureExample;
}

export const nextjsFeatureExamples: FeatureExamples = {
  // Types
  type_0: {
    title: "Framework React Full-Stack",
    description: "Next.js permet de développer à la fois le front-end et le back-end dans un même projet.",
    example: `// pages/api/users.ts
export async function GET(request: Request) {
  const users = await db.users.findMany();
  return Response.json(users);
}

// app/users/page.tsx
export default async function Users() {
  const users = await fetch('/api/users').then(r => r.json());
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`
  },
  type_1: {
    title: "Méta-Framework",
    description: "Construit sur React, Next.js ajoute des fonctionnalités avancées comme le SSR et le SSG.",
    example: `// Exemple de SSR (Server-Side Rendering)
export default async function Page() {
  const data = await fetchData(); // Exécuté côté serveur
  return <Component data={data} />;
}

// Exemple de SSG (Static Site Generation)
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}`
  },
  type_2: {
    title: "Orienté Production",
    description: "Optimisé pour les performances en production avec des fonctionnalités intégrées.",
    example: `// next.config.js
module.exports = {
  output: 'standalone',
  images: {
    domains: ['example.com'],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    serverActions: true,
  },
  // Optimisations automatiques
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}`
  },

  // Objectifs
  objective_0: {
    title: "Simplifier le développement",
    description: "Configuration automatique et système de fichiers intuitif.",
    example: `// Structure de projet Next.js
app/
├── layout.tsx      // Layout partagé
├── page.tsx        // Page d'accueil
├── about/
│   └── page.tsx    // Page À propos
└── blog/
    ├── page.tsx    // Liste des articles
    └── [slug]/     // Articles dynamiques
        └── page.tsx`
  },
  objective_1: {
    title: "Optimiser les performances",
    description: "Rendu côté serveur et génération statique pour de meilleures performances.",
    example: `// Exemple d'optimisation des images
import Image from 'next/image'

export default function Gallery() {
  return (
    <Image
      src="/photo.jpg"
      alt="Photo"
      width={800}
      height={600}
      placeholder="blur"
      quality={75}
      priority={true}
    />
  )
}`
  },
  objective_2: {
    title: "Améliorer l'expérience développeur",
    description: "Hot reload et outils de développement intégrés.",
    example: `// Fast Refresh automatique
// Modifiez ce composant et sauvegardez
// L'état sera préservé automatiquement
export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </button>
  )
}`
  },

  // Fonctionnalités
  pageBasedRouting: {
    title: "Architecture basée sur les pages",
    description: "Le routing est basé sur la structure des fichiers du projet.",
    example: `// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}

// app/page.tsx
export default function Home() {
  return <h1>Accueil</h1>
}

// app/blog/[slug]/page.tsx
export default function BlogPost({
  params: { slug }
}: {
  params: { slug: string }
}) {
  return <h1>Article: {slug}</h1>
}`
  },
  buildSystem: {
    title: "Système de build optimisé",
    description: "Compilation et bundling automatiques avec webpack.",
    example: `// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimisations de build
  swcMinify: true,
  optimizeFonts: true,
  
  // Configuration webpack
  webpack: (config, { isServer }) => {
    // Optimisations personnalisées
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups = {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
        },
      }
    }
    return config
  },
}`
  },
  middleware: {
    title: "Middleware et API Routes",
    description: "Routes API et middleware intégrés pour un contrôle total.",
    example: `// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Vérification d'authentification
  if (!request.cookies.get('token')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Ajout d'en-têtes personnalisés
  const response = NextResponse.next()
  response.headers.set('x-custom-header', 'hello')
  return response
}

// Configuration du middleware
export const config = {
  matcher: ['/dashboard/:path*', '/api/:path*'],
}`
  }
};

export default nextjsFeatureExamples;