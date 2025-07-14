"use client";
import React, { useState } from "react";
import Image from "next/image";
import realImages from "./real-images";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ContactFormButton from "@/components/ui/contact-form-button";
import { Subheading } from "@/components/ui/subheading";
import { Heading } from "@/components/ui/heading";

export default function Page() {
  const [currentImage, setCurrentImage] = useState(0);
  const totalImages = realImages.length;

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % totalImages);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + totalImages) % totalImages);
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Subheading>Нашата работа</Subheading>
          <Heading>50+ реновирани апартамента - вижте качеството</Heading>
        </div>

        {/* Image Carousel */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="relative h-96 md:h-[500px] lg:h-[600px]">
            {/* Main Image */}
            <div className="absolute inset-0">
              <Image
                src={realImages[currentImage]}
                alt={`Реален проект ${currentImage + 1}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 900px"
                priority
              />
            </div>

            {/* Top-right Counter */}
            <div className="absolute top-4 right-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded-full text-sm font-semibold z-10 shadow-lg">
              {currentImage + 1} / {totalImages}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/*/!* Dots Indicator *!/*/}
          {/*<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">*/}
          {/*  {realImages.map((_, index) => (*/}
          {/*    <button*/}
          {/*      key={index}*/}
          {/*      onClick={() => setCurrentImage(index)}*/}
          {/*      className={`w-3 h-3 rounded-full transition-all duration-200 border border-white shadow ${*/}
          {/*        index === currentImage*/}
          {/*          ? "bg-white"*/}
          {/*          : "bg-white bg-opacity-50 hover:bg-opacity-75"*/}
          {/*      }`}*/}
          {/*      aria-label={`Go to image ${index + 1}`}*/}
          {/*    />*/}
          {/*  ))}*/}
          {/*</div>*/}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Всеки проект е изпълнен с внимание към детайлите и използване на висококачествени материали.
            Нашият екип от професионалисти работи за създаване на пространства, които съчетават функционалност и естетика.
          </p>
        </div>
      </div>

      <ContactFormButton />
    </section>
  );
}