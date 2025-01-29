import React from 'react';
import { Code, XCircle } from 'lucide-react';

interface FrameworkCharacteristicProps {
    title: string;
    description: string;
    withFramework: string;
    withoutFramework: string;
    onClose: () => void;
}

const FrameworkCharacteristic: React.FC<FrameworkCharacteristicProps> = ({
    title,
    description,
    withFramework,
    withoutFramework,
    onClose
}) => {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6 border-b relative">
                    <h2 className="text-3xl font-bold text-black">{title}</h2>
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-gray-500 hover:text-gray-700"
                    >
                        <XCircle size={24} />
                    </button>
                </div>

                <div className="p-6">
                    <p className="text-lg text-gray-600 mb-8">{description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Code size={24} className="text-green-500" />
                                <h3 className="text-xl font-bold text-black">Avec Framework</h3>
                            </div>
                            <div className="bg-gray-900 rounded-lg p-4">
                                <pre className="text-sm text-gray-300 overflow-x-auto">
                                    <code>{withFramework}</code>
                                </pre>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Code size={24} className="text-red-500" />
                                <h3 className="text-xl font-bold text-black">Sans Framework</h3>
                            </div>
                            <div className="bg-gray-900 rounded-lg p-4">
                                <pre className="text-sm text-gray-300 overflow-x-auto">
                                    <code>{withoutFramework}</code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrameworkCharacteristic;