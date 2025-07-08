"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Page() {
    const [currentImage, setCurrentImage] = useState(0);

    // Sample images - replace with actual image URLs
    const images = [
        {
            url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
            caption: "Ъглово разположена Кухня с модерен дизайн"
        },
        {
            url: "https://images.unsplash.com/photo-1556909195-f91d04d6e3a0?w=800&h=600&fit=crop",
            caption: "Модерна кухня с висококачествени материали"
        },
        {
            url: "https://images.unsplash.com/photo-1556909265-7c41c2ea5ec0?w=800&h=600&fit=crop",
            caption: "Елегантен дизайн с функционални решения"
        }
    ];

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
                        Нашата работа
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-800 font-medium">
                        50+ реновирани апартамента - вижте качеството
                    </p>
                </div>

                {/* Image Carousel */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <div className="relative h-96 md:h-[500px] lg:h-[600px]">
                        {/* Main Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out"
                            style={{
                                backgroundImage: `url(${images[currentImage].url})`
                            }}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-700" />
                        </button>

                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl"
                            aria-label="Next image"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-700" />
                        </button>

                        {/* Caption */}
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-lg px-6 py-4">
                                <p className="text-white text-lg font-medium">
                                    {images[currentImage].caption}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex space-x-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImage(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                    index === currentImage
                                        ? 'bg-white shadow-lg'
                                        : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                                }`}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Всеки проект е изпълнен с внимание към детайлите и използване на висококачествени материали.
                        Нашият екип от професионалисти работи за създаване на пространства, които съчетават функционалност и естетика.
                    </p>
                </div>
            </div>
        </section>
    );
}