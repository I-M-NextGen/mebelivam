"use client"
import React from 'react';
import {Heading} from "@/components/ui/heading";
import scrollToSection from "@/utils/scrollTo";

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Content Container */}
            <div className="relative z-10 text-center text-white max-w-4xl px-6">
                {/* Main Heading */}
                <Heading className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                    Ето Как Да Превърнеш Всяко<br />
                    Пространство в Мечтан Дом
                </Heading>

                {/* Subheading */}
                <p className="text-xl md:text-2xl mb-8 font-medium text-gray-200">
                    (Дори и да Си Мислиш, че Е Невъзможно)!
                </p>

                {/* Description */}
                <p className="text-base md:text-lg mb-10 leading-relaxed max-w-3xl mx-auto text-gray-300">
                    Работи, дори и да имаш труден за обзавеждане ъгъл, крива стена или
                    неудобства, без да губиш време в обикаляне по магазини и без да
                    правиш скъпи грешки.
                </p>

                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button onClick={()=>scrollToSection("contact")} className="bg-orange-500 hover:bg-orange-600 text-white cursor-pointer font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Свържи се с нас
                    </button>
                    <button onClick={() => scrollToSection("info")}  className="bg-transparent border-2 border-white cursor-pointer text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 flex items-center gap-2">
                        Научи повече
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </div>
    );
};

export default Hero;