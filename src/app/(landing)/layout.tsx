"use client"
import React, { ReactNode } from "react"
import {Navbar} from "@/components/sections/navbar";

const Layout = ({children}:{children: ReactNode}) => {
  return <>
    <Navbar/>
    {children}
  </>
}

export default Layout