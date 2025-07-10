import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import scrollToSection from "@/utils/scrollTo";

export default function Footer() {
    return (
        <footer className="bg-gray-50 py-16 px-6 border border-t-gray-300">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Logo Section */}
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <Image
                            alt=""
                            src="/logo.svg"
                            className="w-auto size-35"
                            width={150}
                            height={150}
                        />
                    </Link>

                    {/* МебелиВам Section */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">МебелиВам</h3>
                        <nav className="space-y-4">
                            <button onClick={()=>scrollToSection("services")} className="block text-gray-600 hover:text-orange-500 transition-colors">
                                Услуги
                            </button>
                            <button onClick={()=>scrollToSection("about")} className="block text-gray-600 hover:text-orange-500 transition-colors">
                                За нас
                            </button>
                            <button onClick={()=>scrollToSection("faq")} className="block text-gray-600 hover:text-orange-500 transition-colors">
                                ЧЗВ
                            </button>
                            <button onClick={()=>scrollToSection("contact")} className="block text-gray-600 hover:text-orange-500 transition-colors">
                                Оферти
                            </button>
                        </nav>
                    </div>

                    {/* Полезни връзки Section */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">ПОЛЕЗНИ ВРЪЗКИ</h3>
                        <nav className="space-y-4">
                            <Link href="/privacy-policy" className="block text-gray-600 hover:text-orange-500 transition-colors">
                                Политика за поверителност
                            </Link>
                        </nav>
                    </div>

                    {/* Контакти Section */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">КОНТАКТИ</h3>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <Phone className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                                <span className="text-gray-700">+359 88 813 3513</span>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-1" />
                                <span className="text-gray-700">гр. Пловдив, България</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <p className="text-gray-500 text-sm">
                        © 2025 Всички права са запазени.
                    </p>
                </div>
            </div>
        </footer>
    );
}