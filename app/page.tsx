'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import FeatureModal from './components/FeatureModal';
import FrameworkCharacteristic from './components/FrameworkCharacteristic';
import frameworkComparisons from './utils/framework-example';
import nextjsFeatureExamples, { FeatureKey } from './utils/nextjs-feature-examples';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCharacteristic, setSelectedCharacteristic] = useState<string | null>(null);
  const [selectedFeature, setSelectedFeature] = useState<FeatureKey | null>(null);

  const slides = [
    // Slide 1
    {
      content: (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-4 py-8 md:p-8 relative pb-24 md:pb-0">
          <div className="relative z-10 text-center">
            <Image
              src="/next.svg"
              alt="Next.js"
              width={400}
              height={400}
              className="mx-auto mb-4 md:mb-8 w-40 md:w-80 h-auto"
            />
          </div>
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-black to-transparent mx-auto mb-6"></div>
          <p className="text-sm md:text-xl font-extrabold mb-4 text-black">
            Alice, Nathan, Younes, Killian, Matias
          </p>
          <p className="text-xs md:text-base font-normal text-gray-400">
            GROUPE 1 - ING1 GIA1 - 2024-2025
          </p>
          <Image
            src="/cytech.svg"
            alt="Logo"
            width={100}
            height={100}
            className="hidden md:block absolute top-4 right-4 md:top-16 md:right-16"
          />
        </div>
      )
    },
    // Slide 2
    {
      content: (
        <div className="min-h-screen px-4 py-8 md:p-16 bg-white relative pb-24 md:pb-0">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 md:mb-12 text-black">
              Sommaire
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-24">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-blue-800">
                  1- Framework : Définition & Caractéristiques
                </h3>
                <p className="text-base md:text-lg text-black/60 leading-relaxed">
                  Définition, caractéristiques principales et avantages d'un framework.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-amber-800">
                  2- Framework Next.js
                </h3>
                <p className="text-base md:text-lg text-black/60 leading-relaxed">
                  Type, objectifs et fonctionnement de Next.js.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-fuchsia-800">
                  3- Exemple
                </h3>
                <p className="text-base md:text-lg text-black/60 leading-relaxed">
                  Exemple (TODO: à compléter).
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-emerald-800">
                  4- Références
                </h3>
                <p className="text-base md:text-lg text-black/60 leading-relaxed">
                  Liens utiles pour en savoir plus sur Next.js.
                </p>
              </div>
            </div>
          </div>
          <Image
            src="/cytech.svg"
            alt="Logo"
            width={100}
            height={100}
            className="hidden md:block absolute top-4 right-4 md:top-16 md:right-16"
          />
        </div>
      )
    },
    // Slide 3
    {
      content: (
        <div className="min-h-screen px-4 py-8 md:p-16 bg-white relative pb-24 md:pb-0">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 md:mb-12 text-black">
              1. Framework : Définition & Caractéristiques
            </h2>

            <div className="space-y-8 md:space-y-12">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-black">
                  Définition
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Un framework est une structure de développement qui fournit des outils,
                  des bibliothèques et des conventions pour créer des applications web
                  de manière efficace et standardisée...
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-black">
                  Caractéristiques et avantages des Frameworks
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <button
                    onClick={() => setSelectedCharacteristic('example1')}
                    className="p-4 md:p-6 border border-blue-200 rounded-lg bg-blue-50 
                            hover:bg-blue-100 transition-all hover:scale-105 text-left"
                  >
                    <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-blue-800">
                      Titre1
                    </h4>
                    <p className="text-gray-600">
                      Description de la caractéristique 1.
                    </p>
                    <div className="mt-2 md:mt-4 text-blue-600 text-xs md:text-sm">
                      Cliquez pour voir un exemple →
                    </div>
                  </button>

                  <button
                    onClick={() => setSelectedCharacteristic('example2')}
                    className="p-4 md:p-6 border border-green-200 rounded-lg bg-green-50 
                            hover:bg-green-100 transition-all hover:scale-105 text-left"
                  >
                    <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-green-800">
                      Titre2
                    </h4>
                    <p className="text-gray-600">
                      Description de la caractéristique 2.
                    </p>
                    <div className="mt-2 md:mt-4 text-green-600 text-xs md:text-sm">
                      Cliquez pour voir un exemple →
                    </div>
                  </button>

                  <button
                    onClick={() => setSelectedCharacteristic('example3')}
                    className="p-4 md:p-6 border border-purple-200 rounded-lg bg-purple-50 
                            hover:bg-purple-100 transition-all hover:scale-105 text-left"
                  >
                    <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-purple-800">
                      Titre3
                    </h4>
                    <p className="text-gray-600">
                      Description de la caractéristique 3.
                    </p>
                    <div className="mt-2 md:mt-4 text-purple-600 text-xs md:text-sm">
                      Cliquez pour voir un exemple →
                    </div>
                  </button>

                  <button
                    onClick={() => setSelectedCharacteristic('example4')}
                    className="p-4 md:p-6 border border-orange-200 rounded-lg bg-orange-50 
                            hover:bg-orange-100 transition-all hover:scale-105 text-left"
                  >
                    <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-orange-800">
                      Titre4
                    </h4>
                    <p className="text-gray-600">
                      Description de la caractéristique 4.
                    </p>
                    <div className="mt-2 md:mt-4 text-orange-600 text-xs md:text-sm">
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
            width={100}
            height={100}
            className="hidden md:block absolute top-4 right-4 md:top-16 md:right-16"
          />
        </div>
      )
    },
    // Slide 4
    {
      content: (
        <div className="min-h-screen px-4 py-8 md:p-16 bg-white relative pb-24 md:pb-0">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 md:mb-12 text-black flex flex-wrap items-center gap-4">
              2. Framework Next.JS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-black">Type</h3>
                <div className="space-y-4">
                  {[
                    {
                      key: 'type_0' as const,
                      title: 'Framework React Full-Stack',
                      description: 'Développement front-end et back-end unifié'
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
                      className="w-full p-4 md:p-6 border border-blue-200 rounded-lg bg-blue-50 
                            hover:bg-blue-100 transition-all duration-300 hover:scale-105
                            text-left group"
                    >
                      <h4 className="font-bold text-blue-800 mb-2">{item.title}</h4>
                      <p className="text-blue-600 text-sm">{item.description}</p>
                      <span className="mt-2 md:mt-4 block text-blue-500 text-xs md:text-sm">
                        Cliquer pour plus de détails →
                      </span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-black">Objectifs</h3>
                <div className="space-y-4">
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
                      className="w-full p-4 md:p-6 border border-green-200 rounded-lg bg-green-50 
                            hover:bg-green-100 transition-all duration-300 hover:scale-105
                            text-left group"
                    >
                      <h4 className="font-bold text-green-800 mb-2">{item.title}</h4>
                      <p className="text-green-600 text-sm">{item.description}</p>
                      <span className="mt-2 md:mt-4 block text-green-500 text-xs md:text-sm">
                        Cliquer pour plus de détails →
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {/* Note */}
            <div className="mt-6 md:mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-xs md:text-sm text-gray-600 text-center">
                Next.js est maintenu par Vercel et utilisé par des entreprises comme
                Spotify, OpenAI, et Nike
              </p>
            </div>
          </div>
          <Image
            src="/cytech.svg"
            alt="Logo"
            width={100}
            height={100}
            className="hidden md:block absolute top-4 right-4 md:top-16 md:right-16"
          />

          {/* Modal pour les exemples */}
          {selectedFeature && (
            <FeatureModal
              {...nextjsFeatureExamples[selectedFeature]}
              onClose={() => setSelectedFeature(null)}
            />
          )}
        </div>
      )
    },
    // Slide 5
    {
      content: (
        <div className="min-h-screen px-4 py-8 md:p-16 bg-white relative pb-24 md:pb-0">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 md:mb-12 text-black flex items-center gap-4">
              2. Framework Next.JS
            </h2>
            <div className="mt-8 md:mt-12">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-black">
                Fonctionnalités Clés
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
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
                  }
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setSelectedFeature(item.key)}
                    className="p-4 md:p-6 border border-purple-200 rounded-lg bg-purple-50 
                          hover:bg-purple-100 transition-all duration-300 
                          hover:scale-105 text-left group"
                  >
                    <div
                      className="text-2xl md:text-3xl mb-2 md:mb-3 group-hover:scale-110 
                               transition-transform duration-300"
                    >
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-purple-800 mb-1 md:mb-2">
                      {item.title}
                    </h4>
                    <p className="text-purple-600 text-xs md:text-sm">
                      {item.description}
                    </p>
                    <div className="mt-2 md:mt-4 text-purple-500 text-xs">
                      Voir un exemple →
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <Image
            src="/cytech.svg"
            alt="Logo"
            width={100}
            height={100}
            className="hidden md:block absolute top-4 right-4 md:top-16 md:right-16"
          />

          {/* Modal pour les exemples */}
          {selectedFeature && (
            <FeatureModal
              {...nextjsFeatureExamples[selectedFeature]}
              onClose={() => setSelectedFeature(null)}
            />
          )}
        </div>
      )
    },
    // Slide 6
    {
      content: (
        <div className="min-h-screen px-4 py-8 md:p-16 bg-white relative pb-24 md:pb-0">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 md:mb-12 text-black">
              3. Exemple
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-black">Exemple 1</h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Description de l'exemple 1.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-black">Exemple 2</h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Description de l'exemple 2.
                </p>
              </div>
            </div>
          </div>
          <Image
            src="/cytech.svg"
            alt="Logo"
            width={100}
            height={100}
            className="hidden md:block absolute top-4 right-4 md:top-16 md:right-16"
          />
        </div>
      )
    },
    // Slide 7
    {
      content: (
        <div className="min-h-screen px-4 py-8 md:p-16 bg-white relative pb-24 md:pb-0">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 md:mb-12 text-black">
              3. Exemple
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-black">Exemple 3</h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Description de l'exemple 3.
                </p>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-black">Exemple 4</h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Description de l'exemple 4.
                </p>
              </div>
            </div>
          </div>
          <Image
            src="/cytech.svg"
            alt="Logo"
            width={100}
            height={100}
            className="hidden md:block absolute top-4 right-4 md:top-16 md:right-16"
          />
        </div>
      )
    },
    // Slide 8
    {
      content: (
        <div className="min-h-screen px-4 py-8 md:p-16 bg-white relative pb-24 md:pb-0">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 md:mb-12 text-black">
              4. Références
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-black">
                  Documentation Officielle
                </h3>
                <a
                  href="https://nextjs.org/docs"
                  target="_blank"
                  rel="noreferrer"
                  className="text-base md:text-lg text-blue-500 hover:underline"
                >
                  https://nextjs.org/docs
                </a>
              </div>
            </div>
          </div>
          <Image
            src="/cytech.svg"
            alt="Logo"
            width={100}
            height={100}
            className="hidden md:block absolute top-4 right-4 md:top-16 md:right-16"
          />
        </div>
      )
    }
  ];

  return (
    <div className="w-full bg-white relative">
      {/* Modals (caractéristiques & features) */}
      {selectedCharacteristic && (
        <FrameworkCharacteristic
          {...frameworkComparisons[selectedCharacteristic]}
          onClose={() => setSelectedCharacteristic(null)}
        />
      )}
      {selectedFeature && (
        <FeatureModal
          {...nextjsFeatureExamples[selectedFeature]}
          onClose={() => setSelectedFeature(null)}
        />
      )}

      {/* affiche le slide courant */}
      {slides[currentSlide].content}

      {/* pagination*/}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black py-2 px-4 rounded-full">
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
