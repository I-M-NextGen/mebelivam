"use client"
import React, { ReactNode } from "react"
import {Navbar} from "@/components/sections/navbar";
import Image from "next/image";

const Layout = ({children}:{children: ReactNode}) => {
  return <>
    <div className="relative min-h-screen w-full">
      <Image
          src="/mebelivam-img/real-images/kitchen.png"
          alt="hero-bg"
          width={1000000}
          height={1000000}
          priority
          className="fixed top-0 left-0 w-full h-full object-cover z-0 brightness-50"
      />
      <div className="relative z-10">
        <Navbar/>
        {children}
      </div>
    </div>
  </>
}

export default Layout