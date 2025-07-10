"use client"
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ContactFormButton from "@/components/ui/contact-form-button";
import { Subheading } from "@/components/ui/subheading";
import { Heading } from "@/components/ui/heading";
import projectImages from "../images/project-images";
import realImages from "../images/real-images";

export default function Page() {
    // Индекс на текущата двойка (визуализация/реалност)
    const [currentPair, setCurrentPair] = useState(0);
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

    // Защитаваме се от различен брой снимки
    const totalPairs = Math.min(projectImages.length, realImages.length);

    // Слайдер логика
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        updateSliderPosition(e);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        updateSliderPosition(e);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const updateSliderPosition = (e: MouseEvent | React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percentage);
    };

    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, [isDragging, handleMouseMove]);

    // Смяна на двойка - ресет на слайдера
    const goToPrev = () => {
        setCurrentPair((prev) => (prev - 1 + totalPairs) % totalPairs);
        setSliderPosition(50);
    };
    const goToNext = () => {
        setCurrentPair((prev) => (prev + 1) % totalPairs);
        setSliderPosition(50);
    };

    return (
        <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <Subheading>ВИЗУАЛИЗАЦИЯ СРЕЩУ РЕАЛНОСТ</Subheading>
                    <Heading>
                        Как изглежда една кухня, проектирана на компютър,<br />
                        в сравнение с реалността...
                    </Heading>
                </div>

                {/* Comparison Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white">
                    <div
                        ref={containerRef}
                        className="relative h-96 md:h-[500px] lg:h-[600px] cursor-ew-resize select-none"
                        onMouseDown={handleMouseDown}
                    >
                        {/* Before Image (3D Visualization) */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${projectImages[currentPair]})`,
                                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
                            }}
                        />

                        {/* After Image (Real Photo) */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${realImages[currentPair]})`,
                                clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`
                            }}
                        />

                        {/* Slider Line */}
                        <div
                            className="absolute top-0 bottom-0 w-0.5 bg-orange-500 z-10"
                            style={{ left: `${sliderPosition}%` }}
                        />

                        {/* Slider Handle */}
                        <div
                            className="absolute top-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500 rounded-full border-4 border-white shadow-lg cursor-ew-resize z-20 flex items-center justify-center transform -translate-x-1/2 hover:scale-110 transition-transform duration-200"
                            style={{ left: `${sliderPosition}%` }}
                        >
                            <div className="w-1 h-6 bg-white rounded-full"></div>
                        </div>

                        {/* Labels */}
                        <div className="absolute top-4 left-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                            <span className="text-sm font-medium">3D Визуализация</span>
                        </div>
                        <div className="absolute top-4 right-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                            <span className="text-sm font-medium">Реалност</span>
                        </div>
                        {/* Counter */}
                        <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded-full text-sm font-semibold z-10 shadow-lg">
                            {currentPair + 1} / {totalPairs}
                        </div>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center mt-8 space-x-4">
                    <button
                        onClick={goToPrev}
                        className="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg"
                        aria-label="Предишна двойка"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={goToNext}
                        className="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg"
                        aria-label="Следваща двойка"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Description */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                        Нашите 3D визуализации не са просто красиви картинки - те са точно представяне на крайния резултат.
                        Използваме най-съвременни технологии за проектиране, за да гарантираме, че мечтаната кухня ще стане реалност
                        точно както сте я представили.
                    </p>
                </div>
            </div>
            <ContactFormButton />
        </section>
    );
}