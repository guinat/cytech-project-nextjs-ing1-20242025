import React from 'react';
import { Code, XCircle, Maximize2 } from 'lucide-react';

interface CodeCardProps {
  title: string;
  code: string;
  description?: string;
}

const CodeCard: React.FC<CodeCardProps> = ({
  title,
  code,
  description
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <>
      <div className="relative group">
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-all">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-black">{title}</h3>
            <button
              onClick={() => setIsExpanded(true)}
              className="text-gray-500 hover:text-gray-700 transition-colors opacity-0 group-hover:opacity-100"
            >
              <Maximize2 size={20} />
            </button>
          </div>
          {description && (
            <p className="text-sm text-gray-600 mb-3">{description}</p>
          )}
          <div className="relative">
            <div className="absolute top-4 left-4 text-white">
              <Code size={20} />
            </div>
            <pre className="bg-gray-900 rounded-lg p-4 pt-12 overflow-x-auto">
              <code className="text-gray-300 text-sm whitespace-pre">
                {code}
              </code>
            </pre>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b relative flex justify-between items-center">
              <h2 className="text-3xl font-bold text-black">{title}</h2>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <XCircle size={24} />
              </button>
            </div>

            <div className="p-6">
              {description && (
                <p className="text-lg text-gray-600 mb-8">{description}</p>
              )}

              <div className="relative">
                <div className="absolute top-4 left-4 text-white">
                  <Code size={20} />
                </div>
                <pre className="bg-gray-900 rounded-lg p-6 pt-12 overflow-x-auto">
                  <code className="text-gray-300 text-sm whitespace-pre">
                    {code}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CodeCard; 