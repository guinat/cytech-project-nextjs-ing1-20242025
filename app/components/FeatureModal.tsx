import React from 'react';
import { XCircle, Code } from 'lucide-react';

interface FeatureModalProps {
    title: string;
    description: string;
    example: string;
    featureKey: string;
    onClose: () => void;
}

const FeatureModal: React.FC<FeatureModalProps> = ({
    title,
    description,
    example,
    onClose
}) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6 border-b relative flex justify-between items-center">
                    <h2 className="text-3xl font-bold text-black">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                        <XCircle size={24} />
                    </button>
                </div>

                <div className="p-6">
                    <p className="text-lg text-gray-600 mb-8">{description}</p>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-black mb-4">Exemple</h3>
                            <div className="relative">
                                <div className="absolute top-4 left-4 text-white">
                                    <Code size={20} />
                                </div>
                                <pre className="bg-gray-900 rounded-lg p-6 pt-12 overflow-x-auto">
                                    <code className="text-gray-300 text-sm whitespace-pre">
                                        {example}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureModal;