import type { ReactNode } from "react"
import { FadeIn } from "../animations/fade-in"

interface PageHeaderProps {
  title: string
  subtitle?: string
  children?: ReactNode
  backgroundImage?: string
  videoSrc?: string;
}

export function PageHeader({ title, subtitle, children, backgroundImage, videoSrc }: PageHeaderProps) {
  const hasMediaBackground = videoSrc || backgroundImage;

  return (
    <section
      className={`relative py-24 overflow-hidden ${
        !hasMediaBackground ? "bg-gradient-to-r from-blue-900 to-green-900" : ""
      } ${
        backgroundImage ? "bg-cover bg-center" : ""
      }`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {/* Video Background */}
      {videoSrc && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-green-900/80 z-10" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 object-cover w-full h-full z-0"
          >
            <source src={videoSrc} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </>
      )}

      {/* Image Background Overlay (only if video is not present) */}
      {backgroundImage && !videoSrc && <div className="absolute inset-0 bg-black/50 z-10"></div>}
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
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