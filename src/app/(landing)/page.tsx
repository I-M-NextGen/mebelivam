"use client"
import Hero from "@/components/sections/hero";
import React from "react";
import Info from "@/components/sections/info";
import Services from "@/components/sections/services";
import ContactFormButton from "@/components/ui/contact-form-button";
import About from "@/components/sections/about";
import FAQ from "@/components/sections/faq";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

const Page = () => {
  return <>
    <div>
      <Hero/>
    </div>
    <section id="info" className="section"><Info/></section>
    <section id="services" className="section"><Services/></section>
    <section className="bg-white"><ContactFormButton/></section>
    <section id="about" className="section"><About/></section>
    <section id="faq" className="section"><FAQ/></section>
    <section id="contact" className="section"><Contact/></section>
    <section><Footer/></section>

  </>
}
export default Page