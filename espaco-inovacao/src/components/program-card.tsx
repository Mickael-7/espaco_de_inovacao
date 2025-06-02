import type { ReactNode } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "../lib/utils"

interface ProgramCardProps {
  title: string
  description: string
  icon: ReactNode
  color: "blue" | "green" | "cyan"
}

export function ProgramCard({ title, description, icon, color }: ProgramCardProps) {
  const colorClasses = {
    blue: "bg-blue-50 border-blue-200 hover:border-blue-300",
    green: "bg-green-50 border-green-200 hover:border-green-300",
    cyan: "bg-cyan-50 border-cyan-200 hover:border-cyan-300",
  }

  const iconClasses = {
    blue: "bg-blue-600 text-white",
    green: "bg-green-600 text-white",
    cyan: "bg-cyan-600 text-white",
  }

  const titleClasses = {
    blue: "text-blue-900",
    green: "text-green-900",
    cyan: "text-cyan-900",
  }

  const buttonClasses = {
    blue: "text-blue-600 hover:text-blue-800",
    green: "text-green-600 hover:text-green-800",
    cyan: "text-cyan-600 hover:text-cyan-800",
  }

  return (
    <div className={cn("p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg", colorClasses[color])}>
      <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mb-6", iconClasses[color])}>
        <div className="w-10 h-10 flex items-center justify-center">{icon}</div>
      </div>

      <h3 className={cn("text-xl font-bold mb-3", titleClasses[color])}>{title}</h3>

      <p className="text-gray-700 mb-6">{description}</p>

      <Button variant="ghost" className={cn("p-0 flex items-center gap-2", buttonClasses[color])}>
        Saiba mais <ArrowRight size={16} />
      </Button>
    </div>
  )
}