import React from 'react';
import { AlertCircle, Code } from 'lucide-react';
import Image from 'next/image';

interface ErrorExampleProps {
  showError?: boolean;
}

const ErrorExample: React.FC<ErrorExampleProps> = ({ showError = false }) => {
  if (showError) {
    throw new Error('Exemple d\'erreur dans Next.js');
  }

  return (
    <div className="space-y-6">
      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="text-lg font-bold text-black mb-2">Gestion des Erreurs dans Next.js</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <AlertCircle className="text-amber-500 mt-1" size={20} />
            <div>
              <h4 className="font-semibold text-black">Erreur de Construction d'URL dans Supabase</h4>
              <p className="text-sm text-gray-600">Next.js capture et affiche clairement les erreurs de construction d'URL invalides.</p>
            </div>
          </div>
          <div className="p-4 rounded-lg">
            <Image 
              src="/assets/error-example.png"
              alt="Erreur Next.js"
              width={800}
              height={400}
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="text-lg font-bold text-black mb-2">Avantages de Next.js pour la Gestion d'Erreurs</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-center space-x-2">
            <span className="text-green-500">✓</span>
            <span>Capture et affichage clair des erreurs d'URL</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-green-500">✓</span>
            <span>Stack trace précise avec numéros de ligne</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-green-500">✓</span>
            <span>Indication exacte de l'emplacement de l'erreur</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-green-500">✓</span>
            <span>Validation automatique des URLs et des paramètres</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ErrorExample; 