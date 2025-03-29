export type FeatureKey = 
  | 'pageBasedRouting'
  | 'buildSystem'
  | 'middleware'
  | 'type_0'
  | 'type_1'
  | 'type_2'
  | 'objective_0'
  | 'objective_1'
  | 'objective_2'
  | 'ssr'
  | 'ssg'
  | 'isr'
  | 'turbopack'
  | 'serverActions'
  | 'react19'
  | 'typescript'
  | 'errorHandling'
  | 'errorBoundary';

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
    description: "Next.js enrichit React avec des fonctionnalités serveur tout en gardant sa simplicité.",
    example: `// Composant React classique (Client Component)
'use client';
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

// Server Component Next.js (nouveau paradigme)
async function UserProfile({ userId }) {
  // Accès direct à la base de données côté serveur
  const user = await db.user.findUnique({ 
    where: { id: userId } 
  });

  return (
    <div>
      <h1>{user.name}</h1>
      <Counter /> {/* Composition avec Client Component */}
      {/* Les données sensibles restent côté serveur */}
      <AdminPanel userData={user.admin} />
    </div>
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
  },
  
  ssr: {
    title: "Server-Side Rendering",
    description: "Rendu côté serveur pour de meilleures performances et SEO.",
    example: `// app/page.tsx
export default async function Page() {
  const data = await fetch('https://api.example.com/data')
  const json = await data.json()
  
  return (
    <main>
      {json.items.map(item => (
        <article key={item.id}>{item.title}</article>
      ))}
    </main>
  )
}`
  },

  ssg: {
    title: "Static Site Generation",
    description: "Génération de pages statiques à la compilation.",
    example: `// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  const posts = await fetch('https://api.example.com/posts')
    .then(r => r.json())
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function Post({ params }) {
  return <h1>Post: {params.slug}</h1>
}`
  },

  isr: {
    title: "Incremental Static Regeneration",
    description: "Régénération statique incrémentale des pages.",
    example: `// app/products/[id]/page.tsx
export default async function Product({ params }) {
  const product = await fetch(
    \`https://api.example.com/products/\${params.id}\`,
    { next: { revalidate: 60 } } // Revalidate every 60 seconds
  ).then(r => r.json())
  
  return (
    <div>
      <h1>{product.name}</h1>
      <p>Prix: {product.price}€</p>
    </div>
  )
}`
  },

  // Nouvelles fonctionnalités Next.js 15
  turbopack: {
    title: "Turbopack Stable",
    description: "Le nouveau bundler ultra-rapide en Rust est maintenant stable pour le développement.",
    example: `// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: true // Activer Turbopack
  }
}

// Lancement avec Turbopack
// next dev --turbo`
  },
  serverActions: {
    title: "Server Actions",
    description: "Nouvelle API pour les appels serveur simplifiés et sécurisés.",
    example: `// app/actions.ts
'use server'

export async function createPost(data: FormData) {
  const title = data.get('title')
  const content = data.get('content')
  
  await db.posts.create({
    title,
    content
  })
}

// app/page.tsx
export default function Page() {
  return (
    <form action={createPost}>
      <input name="title" />
      <textarea name="content" />
      <button type="submit">Créer</button>
    </form>
  )
}`
  },
  react19: {
    title: "Support React 19",
    description: "Compatibilité avec les nouvelles fonctionnalités de React 19.",
    example: `// app/page.tsx
import { use } from 'react'

export default function Page() {
  const data = use(fetchData())
  
  return <div>{data}</div>
}`
  },
  typescript: {
    title: "Configuration TypeScript",
    description: "Support natif des fichiers de configuration TypeScript.",
    example: `// next.config.ts
import { NextConfig } from 'next'

const config: NextConfig = {
  images: {
    domains: ['example.com'],
  },
  experimental: {
    serverActions: true,
  }
}

export default config`
  },
  errorHandling: {
    title: "Gestion des Erreurs Runtime",
    description: "Next.js fournit des outils puissants pour la capture et l'affichage des erreurs.",
    example: `// app/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

// ❌ Erreur: URL invalide
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ✅ Solution: Vérifier les variables d'environnement
if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('URL Supabase manquante')
}

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);`
  },
  errorBoundary: {
    title: "Error Boundaries",
    description: "Les Error Boundaries permettent d'isoler et de récupérer les erreurs dans les composants.",
    example: `// app/error.tsx
'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="p-4 bg-red-50">
      <h2>Une erreur est survenue !</h2>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-red-500 text-white"
      >
        Réessayer
      </button>
    </div>
  );
}`
  },
};

export default nextjsFeatureExamples;