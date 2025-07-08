import React from 'react';
import {Heading} from "@/components/ui/heading";
import {Subheading} from "@/components/ui/subheading";

export default function About() {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="order-2 lg:order-1">
                        <div className="relative">
                            <div className="w-full h-96 bg-gradient-to-br from-orange-200 to-orange-300 rounded-2xl shadow-lg overflow-hidden">
                                {/* Placeholder for image - you'll replace this */}
                                <div className="w-full h-full bg-gradient-to-br from-orange-300 to-orange-400 flex items-center justify-center">
                                    <div className="text-orange-700 text-center">
                                        <div className="text-6xl mb-4">🏠</div>
                                        <p className="text-lg font-medium">Image placeholder</p>
                                        <p className="text-sm opacity-75">Replace with actual image</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="order-1 lg:order-2">
                        <div className="space-y-6">
                            {/* Header */}
                            <div>
                                <Subheading>
                                    За Нас
                                </Subheading>
                                <Heading>
                                    Кой е Майстор Васил Витанов?
                                </Heading>
                            </div>

                            {/* Content */}
                            <div className="space-y-4">
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Основател на &quot;МебелиВам&quot; - Ателиe за мебели по поръчка (общност) с десетки успешни проекти и доволни клиенти, в което той и екипът му помагат на хората да създадат мечтания си дом, но без успех, да го направят успешно чрез уникални и функционални мебели, които пасват на тяхното пространство.
                                </p>

                                <p className="text-gray-700 leading-relaxed text-lg">
                                    И най-вече нормален човек, помогнал вече на над 10 семейства в България да трансформират своите жилища, от които да генерират основен ежедневен комфорт и удоволствие от живота изцяло чрез персонализирани мебелни решения.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}