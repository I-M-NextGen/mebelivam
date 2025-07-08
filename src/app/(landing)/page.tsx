import Hero from "@/components/sections/hero";
import {Navbar} from "@/components/sections/navbar";
import Image from "next/image";
import React from "react";
import Info from "@/components/sections/info";

const Page = () => {
  return <>
    <div>
      <Image className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50" src="/mebelivam-img/real-images/kitchen.png" alt="hero-bg" width={10000} height={10000}/>
      <Hero/>
    </div>
    <Info/>
  </>
}
export default Page