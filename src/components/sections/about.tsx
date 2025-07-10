import React from 'react';
import {Heading} from "@/components/ui/heading";
import {Subheading} from "@/components/ui/subheading";
import Image from "next/image";

export default function About() {
    return (
        <section className="py-10 md:py-14 bg-white">
            <div className="max-w-6xl mx-auto px-4 md:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Image Section */}
                    <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                        <Image
                            className="rounded-2xl object-cover w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-96 lg:h-96"
                            src="/mebelivam-img/stock/kitchen-installation.jpg"
                            alt="person"
                            width={1000}
                            height={1000}
                        />
                    </div>

                    {/* Content Section */}
                    <div className="order-1 lg:order-1">
                        <div className="space-y-6">
                            {/* Header */}
                            <div>
                                <Subheading>За Нас</Subheading>
                                <Heading>Кой е Майстор Васил Витанов?</Heading>
                            </div>

                            {/* Content */}
                            <div className="space-y-4">
                                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                                    Основател на &quot;МебелиВам&quot; – Ателиe за мебели по поръчка с десетки
                                    успешни проекти и доволни клиенти. Екипът помага на хората да създадат
                                    мечтания си дом чрез уникални и функционални мебели, които пасват
                                    перфектно на тяхното пространство.
                                </p>

                                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                                    Нормален човек, помогнал на над 10 семейства в България да трансформират
                                    жилищата си, за да генерират комфорт и удоволствие в ежедневието чрез
                                    персонализирани мебелни решения.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}