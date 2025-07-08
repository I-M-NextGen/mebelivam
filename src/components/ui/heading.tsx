import { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface HeadingProps extends HTMLAttributes<HTMLHeadElement> {
  children?: ReactNode
}

export const Heading = ({ children, className, ...props }: HeadingProps) => {
  return <h1 className={cn("text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-pretty font-heading font-bold tracking-tight mb-4 leading-tight", className)}{...props}>
    {children}
  </h1>
}