import React from 'react';
import { Ruler, Paintbrush, Hammer } from 'lucide-react';
import {Heading} from "@/components/ui/heading";
import {Subheading} from "@/components/ui/subheading";

export default function Services() {
    return (
        <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-yellow-50">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <Subheading>
                        Как Работим
                    </Subheading>
                    <Heading>
                        Разкриваме процеса на изработка
                    </Heading>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {/* Step 1 */}
                    <div className="text-center group">
                        <div className="relative mb-8">
                            <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300">
                                <Ruler className="w-8 h-8 text-gray-700" />
                            </div>
                            <div className="absolute -top-2 -right-2 w-20 h-20 text-orange-200 font-bold text-8xl opacity-30 pointer-events-none">
                                1
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                            Вземане на размери
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Веднага щом ни се отдаде възможност, нашият екип ще пристигне на мястото, за да вземе размерите възможно най-бързо и прецизно, гарантирайки минимално забавяне и максимално удобство за Вас.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="text-center group">
                        <div className="relative mb-8">
                            <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300">
                                <Paintbrush className="w-8 h-8 text-gray-700" />
                            </div>
                            <div className="absolute -top-2 -right-2 w-20 h-20 text-orange-200 font-bold text-8xl opacity-30 pointer-events-none">
                                2
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                            Дизайн и визуализация
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Изграждаме професионален дизайн и фотореалистична визуализация, за да видите предварително дали проектът отговаря на Вашите предпочитания, преди да преминем към изработката и монтажа.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="text-center group">
                        <div className="relative mb-8">
                            <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300">
                                <Hammer className="w-8 h-8 text-gray-700" />
                            </div>
                            <div className="absolute -top-2 -right-2 w-20 h-20 text-orange-200 font-bold text-8xl opacity-30 pointer-events-none">
                                3
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                            Монтаж
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Осигуряваме професионален монтаж, за да получите завършен и прецизно изпълнен интериор, без да губите време или усилия.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}