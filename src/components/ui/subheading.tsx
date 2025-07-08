import { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface HeadingProps extends HTMLAttributes<HTMLHeadElement> {
    children?: ReactNode
}

export const Subheading = ({ children, className, ...props }: HeadingProps) => {
    return <span className={cn("text-orange-500 font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-2 tracking-widest uppercase", className)}{...props}>
        {children}
    </span>
}