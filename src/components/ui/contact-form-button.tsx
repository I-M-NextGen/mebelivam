"use client"
import React from 'react';
import scrollToSection from "@/utils/scrollTo";

export default function ContactFormButton() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            {/* Main Banner */}
               <ContactButton onClick={() => scrollToSection("contact")}/>
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

type ContactButtonProps = {
    onClick?: () => void;
    className?: string;
};

function ContactButton({ onClick, className = "" }: ContactButtonProps) {
    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            console.log('Contact button clicked');
        }
    };

    return (
        <div className={`inline-block ${className}`}>
            {/* Main Button */}
            <div className="relative">
                <button
                    onClick={handleClick}
                    className="relative bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-8 py-6 shadow-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-opacity-50"
                >
                    <h2 className="text-xl md:text-2xl font-bold text-center tracking-wide">
                        СВЪРЖИ СЕ С НАС ЧРЕЗ ФОРМАТА ЗА ПОПЪЛВАНЕ
                    </h2>
                </button>
                {/* Shadow effect */}
                <div className="absolute top-2 left-2 w-full h-full bg-orange-600 -z-10 transition-all duration-200"></div>
            </div>
        </div>
    );
}