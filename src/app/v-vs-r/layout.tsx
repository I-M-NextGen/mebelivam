
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Визуализация срещу реалност",
};
import React, {ReactNode} from "react"
import {Navbar2} from "@/components/sections/navbar2";

const Layout = ({children}: { children: ReactNode }) => {
    return <>
        <Navbar2/>
        {children}
    </>
}

export default Layout