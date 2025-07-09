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
    <section id="info"><Info/></section>
    <section id="services"><Services/></section>
    <section><ContactFormButton/></section>
    <section id="about"><About/></section>
    <section id="faq"><FAQ/></section>
    <section id="contact"><Contact/></section>
    <section><Footer/></section>

  </>
}
export default Page