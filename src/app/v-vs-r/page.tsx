"use client"
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Page() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);

    // Sample images - replace with actual project images
    const beforeImage = "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&h=600&fit=crop";
    const afterImage = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop";

    const handleMouseDown = (e) => {
        setIsDragging(true);
        updateSliderPosition(e);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        updateSliderPosition(e);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const updateSliderPosition = (e) => {
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
    }, [isDragging]);

    return (
        <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4 tracking-wide">
                        ВИЗУАЛИЗАЦИЯ СРЕЩУ РЕАЛНОСТ
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed">
                        Как изглежда една кухня, проектирана на компютър,<br />
                        в сравнение с реалността...
                    </p>
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
                                backgroundImage: `url(${beforeImage})`,
                                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
                            }}
                        />

                        {/* After Image (Real Photo) */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${afterImage})`,
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
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center mt-8 space-x-4">
                    <button
                        onClick={() => setSliderPosition(Math.max(0, sliderPosition - 10))}
                        className="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg"
                        aria-label="Move slider left"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => setSliderPosition(Math.min(100, sliderPosition + 10))}
                        className="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg"
                        aria-label="Move slider right"
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
        </section>
    );
}