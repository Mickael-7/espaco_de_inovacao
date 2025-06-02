import type { ReactNode } from "react"
import { FadeIn } from "../animations/fade-in"


interface PageHeaderProps {
  title: string
  subtitle?: string
  children?: ReactNode
  backgroundImage?: string
}

export function PageHeader({ title, subtitle, children, backgroundImage }: PageHeaderProps) {
  return (
    <section
      className={`relative py-24 ${
        backgroundImage ? "bg-cover bg-center" : "bg-gradient-to-r from-blue-900 to-green-900"
      }`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {backgroundImage && <div className="absolute inset-0 bg-black/50"></div>}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          </FadeIn>
          {subtitle && (
            <FadeIn delay={0.1}>
              <p className="text-xl text-white/90 mb-6">{subtitle}</p>
            </FadeIn>
          )}
          {children && <FadeIn delay={0.2}>{children}</FadeIn>}
        </div>
      </div>
    </section>
  )
}