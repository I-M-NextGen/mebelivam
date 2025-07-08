"use client"
import React, { useState } from 'react';
import {Heading} from "@/components/ui/heading";
import {Subheading} from "@/components/ui/subheading";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        city: '',
        message: ''
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <Subheading>
                        Свържете се с нас
                    </Subheading>
                    <Heading>
                        Ето какво предлагаме
                    </Heading>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Form */}
                    <div className="space-y-8">
                        <div className="text-center lg:text-left">
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Моля изпратете ни запитването си чрез формата:
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <div className="space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Име"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-gray-700 placeholder-gray-400"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Телефон"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-gray-700 placeholder-gray-400"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="Град"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-gray-700 placeholder-gray-400"
                                    />
                                </div>

                                <div>
                  <textarea
                      name="message"
                      placeholder="Съобщение"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-gray-700 placeholder-gray-400 resize-none"
                  />
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-orange-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    Изпрати запитване
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Image and Contact Info */}
                    <div className="space-y-8">
                        {/* Image Placeholder */}
                        <div className="relative">
                            <div className="w-full h-64 bg-gradient-to-br from-orange-200 to-orange-300 rounded-2xl shadow-lg overflow-hidden">
                                <div className="w-full h-full bg-gradient-to-br from-orange-300 to-orange-400 flex items-center justify-center">
                                    <div className="text-orange-700 text-center">
                                        <div className="text-6xl mb-4">✏️</div>
                                        <p className="text-lg font-medium">Design Image</p>
                                        <p className="text-sm opacity-75">Hand drawing plans</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Info Card */}
                        <div className="bg-gradient-to-br from-orange-400 to-orange-500 text-white rounded-2xl shadow-lg p-8">
                            <h3 className="text-2xl font-bold mb-6 leading-tight">
                                Имате ли нужда от помощ при попълването на запитването?
                            </h3>

                            <p className="text-orange-100 mb-8 leading-relaxed">
                                Тук сме за да помогнем. Просто ни се обадете и ще отговорим на въпросите ви.
                            </p>

                            <div className="text-center">
                                <a
                                    href="tel:+35984123579"
                                    className="inline-block bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-bold py-3 px-8 rounded-lg border-2 border-white border-opacity-50 hover:border-opacity-75 transition-all duration-300"
                                >
                                    +35984123579
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}