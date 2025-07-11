"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Heading } from "@/components/ui/heading";
import { Subheading } from "@/components/ui/subheading";
import Image from "next/image";

// Zod схема за валидация
const schema = z.object({
    name: z.string().min(1, "Името е задължително"),
    phone: z.string().min(1, "Телефонът е задължителен"),
    city: z.string().min(1, "Градът е задължителен"),
    email: z.string().email("Невалиден имейл").min(1, "Имейлът е задължителен"),
    message: z.string().optional(),
});

type ContactFormData = z.infer<typeof schema>;

// type for the response from /api/subscribe
// (success: boolean, message: string) or (error: string)
type SubscribeResponse = { success: boolean; message: string };

function toE164(phone: string): string {
    if (phone.startsWith('0')) {
        return '+359' + phone.slice(1);
    }
    if (phone.startsWith('+')) {
        return phone;
    }
    return '+359' + phone;
}

export default function Contact() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
        resolver: zodResolver(schema),
    });

    const mutation = useMutation<SubscribeResponse, Error, ContactFormData>({
        mutationFn: async (data) => {
            const formattedPhone = toE164(data.phone);
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...data, phone: formattedPhone }),
            });
            let json;
            try {
                json = await res.json();
            } catch {
                throw new Error("Грешка при обработка на отговора от сървъра.");
            }
            if (!res.ok) {
                throw new Error(json.error || "Грешка при изпращане!");
            }
            return json;
        },
        onSuccess: () => {
            reset();
        },
        onError: (error) => {
            alert(error.message || "Грешка при изпращане!");
        }
    });

    return (
        <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <Subheading>Свържете се с нас</Subheading>
                    <Heading>Ето какво предлагаме</Heading>
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
                            <form className="space-y-6" onSubmit={handleSubmit((data) => mutation.mutate(data))}>
                                <div>
                                    <input
                                        type="text"
                                        {...register("name")}
                                        placeholder="Име"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-gray-700 placeholder-gray-400"
                                    />
                                    {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                                </div>

                                <div>
                                    <input
                                        type="tel"
                                        {...register("phone")}
                                        placeholder="Телефон"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-gray-700 placeholder-gray-400"
                                    />
                                    {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        {...register("city")}
                                        placeholder="Град"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-gray-700 placeholder-gray-400"
                                    />
                                    {errors.city && <span className="text-red-500 text-sm">{errors.city.message}</span>}
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        {...register("email")}
                                        placeholder="Имейл"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-gray-700 placeholder-gray-400"
                                    />
                                    {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                                </div>

                                <div>
                                    <textarea
                                        {...register("message")}
                                        placeholder="Съобщение"
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-gray-700 placeholder-gray-400 resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={mutation.isPending}
                                    className="w-full cursor-pointer bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-orange-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    {mutation.isPending ? "Изпращане..." : "Изпрати запитване"}
                                </button>
                                {mutation.isSuccess && (
                                    <div className="text-green-600 text-center font-semibold">Благодарим за изпратеното запитване!</div>
                                )}
                            </form>
                        </div>
                    </div>

                    {/* Right Column - Image and Contact Info */}
                    <div className="space-y-8">
                        {/* Image Placeholder */}
                        <div className="relative h-64 rounded-2xl shadow-lg overflow-hidden">
                            <Image src="/mebelivam-img/stock/offer-image.png" fill alt="" />
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
                                    href="tel:+359888133513"
                                    className="inline-block border-white bg-opacity-20 hover:bg-opacity-30 text-white font-bold py-3 px-8 rounded-lg border-2 border-opacity-50 hover:border-opacity-75 transition-all duration-300"
                                >
                                    +359 88 813 3513
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}