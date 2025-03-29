'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import FeatureModal from './components/FeatureModal';
import FrameworkCharacteristic from './components/FrameworkCharacteristic';
import frameworkComparisons from './utils/framework-example';
import nextjsFeatureExamples, { FeatureKey } from './utils/nextjs-feature-examples';
import CodeCard from './components/CodeCard';
import ErrorExample from './components/ErrorExample';
import FruitList from './components/FruitList';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCharacteristic, setSelectedCharacteristic] = useState<string | null>(null);
  const [selectedFeature, setSelectedFeature] = useState<FeatureKey | null>(null);

  const slides = [
    // Slide 1
    {
      content: (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-4 relative overflow-hidden">
          <div className="relative z-10 text-center max-w-4xl w-full">
            <Image
              src="/next.svg"
              alt="Next.js"
              width={400}
              height={400}
              className="mx-auto mb-4 w-32 md:w-60 h-auto"
            />
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-black to-transparent mx-auto mb-4"></div>
            <p className="text-sm md:text-lg font-extrabold mb-2 text-black">
              Alice, Killian, Matias, Nathan, Younes
            </p>
            <p className="text-xs md:text-sm font-normal text-gray-400">
              GROUPE 1 - ING1 GIA1 - 2024-2025
            </p>
          </div>
          <Image
            src="/cytech.svg"
            alt="Logo"
            width={80}
            height={80}
            className="absolute top-4 right-4"
          />
        </div>
      )
    },
    // Slide 2
    {
      content: (
        <div className="min-h-screen flex flex-col bg-white relative p-4 overflow-y-auto pb-24">
          <div className="flex-1 max-w-4xl mx-auto w-full flex flex-col justify-center">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-6 text-black">
              Sommaire
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-blue-800">
                  1- Framework : Définition & Caractéristiques
                </h3>
                <p className="text-sm md:text-base text-black/60">
                  Définition, caractéristiques principales et avantages d'un framework.
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-amber-800">
                  2- Framework Next.js
                </h3>
                <p className="text-sm md:text-base text-black/60">
                  Type, objectifs et fonctionnement de Next.js.
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-fuchsia-800">
                  3- Exemple Pratique avec Supabase
                </h3>
                <p className="text-sm md:text-base text-black/60">
                  Gestion d'une liste de fruits avec Supabase comme backend.
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-emerald-800">
                  4- Références
                </h3>
                <p className="text-sm md:text-base text-black/60">
                  Liens utiles pour en savoir plus sur Next.js.
                </p>
              </div>
            </div>
          </div>
          <Image
            src="/cytech.svg"
            alt="Logo"
            width={80}
            height={80}
            className="absolute top-4 right-4"
          />
        </div>
      )
    },
    // Slide 3
    {
      content: (
        <div className="min-h-screen flex flex-col bg-white relative p-4 overflow-y-auto pb-24">
          <div className="flex-1 max-w-4xl mx-auto w-full flex flex-col justify-center">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-6 text-black">
              1. Framework : Définition & Caractéristiques
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-black">
                  Définition
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  Un framework est une structure de développement qui fournit des outils,
                  des bibliothèques et des conventions pour créer des applications web
                  de manière efficace et standardisée...
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-black">
                  Caractéristiques et avantages des Frameworks
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <button
                    onClick={() => setSelectedCharacteristic('example1')}
                    className="p-3 border border-blue-200 rounded-lg bg-blue-50 
                            hover:bg-blue-100 transition-all text-left"
                  >
                    <h4 className="text-base font-bold text-blue-800">
                      Routing et Navigation
                    </h4>
                    <p className="text-sm text-gray-600">
                      Gestion automatique des routes et navigation optimisée
                    </p>
                    <div className="mt-2 text-blue-600 text-xs">
                      Cliquez pour voir un exemple →
                    </div>
                  </button>

                  <button
                    onClick={() => setSelectedCharacteristic('example2')}
                    className="p-3 border border-green-200 rounded-lg bg-green-50 
                            hover:bg-green-100 transition-all text-left"
                  >
                    <h4 className="text-base font-bold text-green-800">
                      Rendu côté serveur
                    </h4>
                    <p className="text-sm text-gray-600">
                      Optimisation des performances et SEO
                    </p>
                    <div className="mt-2 text-green-600 text-xs">
                      Cliquez pour voir un exemple →
                    </div>
                  </button>

                  <button
                    onClick={() => setSelectedCharacteristic('example3')}
                    className="p-3 border border-purple-200 rounded-lg bg-purple-50 
                            hover:bg-purple-100 transition-all text-left"
                  >
                    <h4 className="text-base font-bold text-purple-800">
                      Optimisation des performances
                    </h4>
                    <p className="text-sm text-gray-600">
                      Optimisations automatiques des assets et du code
                    </p>
                    <div className="mt-2 text-purple-600 text-xs">
                      Cliquez pour voir un exemple →
                    </div>
                  </button>

                  <button
                    onClick={() => setSelectedCharacteristic('example4')}
                    className="p-3 border border-orange-200 rounded-lg bg-orange-50 
                            hover:bg-orange-100 transition-all text-left"
                  >
                    <h4 className="text-base font-bold text-orange-800">
                      Gestion des états et des données
                    </h4>
                    <p className="text-sm text-gray-600">
                      Gestion simplifiée des états et des données
                    </p>
                    <div className="mt-2 text-orange-600 text-xs">
                      Cliquez pour voir un exemple →
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Image
            src="/cytech.svg"
            alt="Logo"
            width={80}
            height={80}
            className="absolute top-4 right-4"
          />
        </div>
      )
    },
    // Slide 4
    {
      content: (
        <div className="min-h-screen flex flex-col bg-white relative p-4 overflow-y-auto pb-24">
          <div className="flex-1 max-w-4xl mx-auto w-full flex flex-col justify-center">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-6 text-black">
              2. Framework Next.JS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-black">Type</h3>
                <div className="space-y-3">
                  {[
                    {
                      key: 'type_0' as const,
                      title: 'Framework React Full-Stack',
                      description: 'Étend React avec des fonctionnalités serveur, API routes et SSR'
                    },
                    {
                      key: 'type_1' as const,
                      title: 'Méta-Framework',
                      description: 'Basé sur React avec des fonctionnalités avancées'
                    },
                    {
                      key: 'type_2' as const,
                      title: 'Orienté Production',
                      description: 'Performances optimisées pour la production'
                    }
                  ].map((item) => (
                    <button
                      key={item.key}
                      onClick={() => setSelectedFeature(item.key)}
                      className="w-full p-3 border border-blue-200 rounded-lg bg-blue-50 
                            hover:bg-blue-100 transition-all text-left"
                    >
                      <h4 className="text-sm font-bold text-blue-800 mb-1">{item.title}</h4>
                      <p className="text-xs text-blue-600">{item.description}</p>
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-black">Objectifs</h3>
                <div className="space-y-3">
                  {[
                    {
                      key: 'objective_0' as const,
                      title: 'Simplifier le développement',
                      description: 'Configuration automatique et routing intuitif'
                    },
                    {
                      key: 'objective_1' as const,
                      title: 'Optimiser les performances',
                      description: 'SSR, SSG et optimisation des images'
                    },
                    {
                      key: 'objective_2' as const,
                      title: 'Améliorer l\'expérience dev',
                      description: 'Hot reload et debugging amélioré'
                    }
                  ].map((item) => (
                    <button
                      key={item.key}
                      onClick={() => setSelectedFeature(item.key)}
                      className="w-full p-3 border border-green-200 rounded-lg bg-green-50 
                            hover:bg-green-100 transition-all text-left"
                    >
                      <h4 className="text-sm font-bold text-green-800 mb-1">{item.title}</h4>
                      <p className="text-xs text-green-600">{item.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Image
            src="/cytech.svg"
            alt="Logo"
            width={80}
            height={80}
            className="absolute top-4 right-4"
          />
        </div>
      )
    },
    // Slide 5
    {
      content: (
        <div className="min-h-screen flex flex-col bg-white relative p-4 overflow-y-auto pb-24">
          <div className="flex-1 max-w-4xl mx-auto w-full flex flex-col justify-center">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-6 text-black">
              2. Framework Next.JS - Fonctionnalités
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: '📂',
                  key: 'pageBasedRouting' as const,
                  title: 'Architecture des pages',
                  description: 'Routing basé sur les fichiers'
                },
                {
                  icon: '⚡',
                  key: 'buildSystem' as const,
                  title: 'Build optimisé',
                  description: 'Compilation et bundling automatiques'
                },
                {
                  icon: '🔌',
                  key: 'middleware' as const,
                  title: 'API & Middleware',
                  description: 'Routes API et middleware intégrés'
                },
                {
                  icon: '🖥️',
                  key: 'ssr' as const,
                  title: 'Server-Side Rendering',
                  description: 'Rendu côté serveur pour performances'
                },
                {
                  icon: '📱',
                  key: 'ssg' as const,
                  title: 'Static Generation',
                  description: 'Génération de pages statiques'
                },
                {
                  icon: '🔄',
                  key: 'isr' as const,
                  title: 'Incremental Static Regeneration',
                  description: 'Mise à jour statique incrémentale'
                }
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setSelectedFeature(item.key)}
                  className="p-3 border border-purple-200 rounded-lg bg-purple-50 
                        hover:bg-purple-100 transition-all text-left"
                >
                  <div className="text-xl mb-2">{item.icon}</div>
                  <h4 className="text-sm font-bold text-purple-800 mb-1">{item.title}</h4>
                  <p className="text-xs text-purple-600">{item.description}</p>
                </button>
              ))}
            </div>
          </div>
          <Image
            src="/cytech.svg"
            alt="Logo"
            width={80}
            height={80}
            className="absolute top-4 right-4"
          />
        </div>
      )
    },
    // Slide 6
    {
      content: (
        <div className="min-h-screen flex flex-col bg-white relative p-4 overflow-y-auto pb-24">
          <div className="flex-1 max-w-4xl mx-auto w-full flex flex-col justify-center">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-6 text-black">
              2. Framework Next.JS - Nouveautés v15
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  key: 'turbopack' as const,
                  title: 'Turbopack Stable',
                  description: 'Bundler ultra-rapide en Rust pour le développement'
                },
                {
                  key: 'serverActions' as const,
                  title: 'Server Actions',
                  description: 'Appels serveur simplifiés et sécurisés'
                },
                {
                  key: 'react19' as const,
                  title: 'React 19 Support',
                  description: 'Compatibilité avec les nouvelles fonctionnalités'
                },
                {
                  key: 'typescript' as const,
                  title: 'TypeScript Config',
                  description: 'Support natif des fichiers de config TS'
                }
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setSelectedFeature(item.key)}
                  className="p-3 border border-amber-200 rounded-lg bg-amber-50 
                          hover:bg-amber-100 transition-all text-left"
                >
                  <h4 className="text-sm font-bold text-amber-800 mb-1">{item.title}</h4>
                  <p className="text-xs text-amber-600">{item.description}</p>
                </button>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <CodeCard
                title="APIs Asynchrones"
                description="Les APIs de requête sont maintenant asynchrones par défaut"
                code={`// Avant (Next.js 14)
const headers = headers();
const cookies = cookies();

// Après (Next.js 15)
const headers = await headers();
const cookies = await cookies();`}
              />
              <CodeCard
                title="Cache Redéfini"
                description="Nouvelle configuration du cache pour plus de contrôle"
                code={`// Configuration du cache
export const dynamic = 'force-static';
// ou
export const revalidate = 3600; // 1 heure`}
              />
            </div>
          </div>
          <Image
            src="/cytech.svg"
            alt="Logo"
            width={80}
            height={80}
            className="absolute top-4 right-4"
          />
        </div>
      )
    },
    // Slide 7
    {
      content: (
        <div className="min-h-screen flex flex-col bg-white relative p-4 overflow-y-auto pb-24">
          <div className="flex-1 max-w-4xl mx-auto w-full flex flex-col justify-center">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-6 text-black">
              3. Exemple Pratique avec Supabase
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold mb-4">Gestion des Fruits avec Supabase</h3>
                <p className="text-gray-600 mb-4">
                  Cet exemple montre l'utilisation de Supabase comme backend pour gérer une liste de fruits.
                  Chaque fruit peut être activé ou désactivé, démontrant les opérations CRUD de base.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <FruitList />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CodeCard
                  title="Configuration Supabase"
                  description="Configuration de la connexion à Supabase"
                  code={`// app/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);`}
                />
                <CodeCard
                  title="Requêtes Supabase"
                  description="Exemple de requêtes avec Supabase"
                  code={`// Lecture des données
const { data, error } = await supabase
  .from('fruits')
  .select('*')
  .order('name');

// Mise à jour
const { error } = await supabase
  .from('fruits')
  .update({ is_active: true })
  .eq('id', fruitId);`}
                />
              </div>
            </div>
          </div>
          <Image
            src="/cytech.svg"
            alt="Logo"
            width={80}
            height={80}
            className="absolute top-4 right-4"
          />
        </div>
      )
    },
    // Slide 8
    {
      content: (
        <div className="min-h-screen flex flex-col bg-white relative p-4 overflow-y-auto pb-24">
          <div className="flex-1 max-w-4xl mx-auto w-full flex flex-col justify-center">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-6 text-black">
              3.1 Gestion des Erreurs
            </h2>
            <div className="grid grid-cols-1 gap-6">
              <ErrorExample />
            </div>
          </div>
          <Image
            src="/cytech.svg"
            alt="Logo"
            width={80}
            height={80}
            className="absolute top-4 right-4"
          />
        </div>
      )
    },
    // Slide 9
    {
      content: (
        <div className="min-h-screen flex flex-col bg-white relative p-4 overflow-y-auto pb-24">
          <div className="flex-1 max-w-4xl mx-auto w-full flex flex-col justify-center">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-6 text-black">
              4. Références
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noreferrer"
                className="p-3 border border-blue-200 rounded-lg bg-blue-50 
                      hover:bg-blue-100 transition-all group"
              >
                <h3 className="text-sm font-bold text-blue-800 mb-1">Documentation Officielle</h3>
                <p className="text-xs text-blue-600">nextjs.org/docs</p>
              </a>
              <a
                href="https://nextjs.org/blog"
                target="_blank"
                rel="noreferrer"
                className="p-3 border border-green-200 rounded-lg bg-green-50 
                      hover:bg-green-100 transition-all group"
              >
                <h3 className="text-sm font-bold text-green-800 mb-1">Blog Next.js</h3>
                <p className="text-xs text-green-600">Actualités et mises à jour</p>
              </a>
              <a
                href="https://github.com/vercel/next.js"
                target="_blank"
                rel="noreferrer"
                className="p-3 border border-purple-200 rounded-lg bg-purple-50 
                      hover:bg-purple-100 transition-all group"
              >
                <h3 className="text-sm font-bold text-purple-800 mb-1">GitHub</h3>
                <p className="text-xs text-purple-600">Code source et contributions</p>
              </a>
              <a
                href="https://vercel.com/templates/next.js"
                target="_blank"
                rel="noreferrer"
                className="p-3 border border-orange-200 rounded-lg bg-orange-50 
                      hover:bg-orange-100 transition-all group"
              >
                <h3 className="text-sm font-bold text-orange-800 mb-1">Templates</h3>
                <p className="text-xs text-orange-600">Exemples et démarrages rapides</p>
              </a>
            </div>
          </div>
          <Image
            src="/cytech.svg"
            alt="Logo"
            width={80}
            height={80}
            className="absolute top-4 right-4"
          />
        </div>
      )
    }
  ];

  return (
    <div className="w-full h-screen bg-white relative">
      {selectedCharacteristic && (
        <FrameworkCharacteristic
          {...frameworkComparisons[selectedCharacteristic]}
          onClose={() => setSelectedCharacteristic(null)}
        />
      )}
      {selectedFeature && (
        <FeatureModal
          title={nextjsFeatureExamples[selectedFeature].title}
          description={nextjsFeatureExamples[selectedFeature].description}
          example={nextjsFeatureExamples[selectedFeature].example}
          featureKey={selectedFeature}
          onClose={() => setSelectedFeature(null)}
        />
      )}

      <div className="h-screen overflow-y-auto">
        {slides[currentSlide].content}
      </div>

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black py-2 px-4 rounded-full z-50">
        {slides.map((_, i) => {
          const isActive = i === currentSlide;
          return (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-8 h-8 flex items-center justify-center text-sm rounded-full 
                cursor-pointer transition-colors 
                ${isActive ? 'bg-blue-500 text-white' : 'bg-white text-black/90 hover:bg-blue-300'}`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}
