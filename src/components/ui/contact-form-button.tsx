import React from 'react';

export default function ContactFormButton() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Main Banner */}
            <div className="relative">
                <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-6 shadow-lg">
                    <h2 className="text-xl md:text-2xl font-bold text-center tracking-wide">
                        СВЪРЖИ СЕ С НАС ЧРЕЗ ФОРМАТА ЗА ПОПЪЛВАНЕ
                    </h2>
                </div>
                {/* Shadow effect */}
                <div className="absolute top-2 left-2 w-full h-full bg-orange-600 -z-10"></div>
            </div>

            {/* Important Note */}
            <div className="mt-8 text-center">
                <p className="text-gray-700 text-lg font-medium italic">
                    <span className="font-bold text-gray-900">ВАЖНО:</span> На съобщенията от формата се отговаря в рамките на работния ден.
                </p>
            </div>

            {/* Decorative line */}
            <div className="mt-6 w-full h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
        </div>
    );
}