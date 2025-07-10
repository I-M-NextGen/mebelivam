import React from 'react';
import {Heading} from "@/components/ui/heading";
import {Subheading} from "@/components/ui/subheading";
import {PhoneCall, PhoneIncoming} from "lucide-react";
import Image from "next/image";

const Info = () => {
    return (
        <div className="bg-gray-50 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <Subheading>Информация</Subheading>
                    <Heading>
                        Какво следва, след като оставиш данните<br />
                        си СЕГА?
                    </Heading>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        След като попълниш формата, ето какво можеш да очакваш:
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Benefit 1 */}
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                                {/*<svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">*/}
                                {/*    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />*/}
                                {/*</svg>*/}
                                <PhoneIncoming className="w-8 h-8 text-orange-500"/>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Експресна връзка</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Един от нашите експерти ще се свърже с теб в рамките на днешния ден (или най-късно до 24 часа), за да уточним най-удобното време за твоя лична консултация.
                            </p>
                        </div>
                    </div>

                    {/* Benefit 2 */}
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                               <PhoneCall className="w-8 h-8 text-orange-500"/>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Безплатна 30-минутна сесия</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Ще проведем твоята индивидуална, безплатна 30-минутна консултация, по време на която ще обсъдим твоите нужди, ще ти дадем конкретни съвети и ще начертаем пътна карта за обзавеждането на твоето пространство.
                            </p>
                        </div>
                    </div>

                    {/* Benefit 3 */}
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Персонализирано решение</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Ще разберем как можем да ти помогнем да създадеш мебелите на мечтите си, съобразени с твоя бюджет, стил и пространство – без компромиси!
                            </p>
                        </div>
                    </div>

                    {/* Benefit 4 */}
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Спестено време и усилия</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Край на обикалянето по магазини и чудението! С наша помощ ще стигнеш до перфектното решение бързо и лесно.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Video Section */}
                <div className="text-center" id="video">
                    <p className="text-gray-600 text-lg mb-6">
                        (изгледай видеото, за повече информация)
                    </p>

                    <div className="relative max-w-2xl mx-auto">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            {/* Video Thumbnail */}
                            <Image src="/mebelivam-img/how-we-do-it.png" width={1000} height={1000} alt="tumbnail"/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Info;