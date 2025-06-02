"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "../lib/utils"


interface EcosystemCardProps {
  title: string
  description: string
  icon: ReactNode
  color: "blue" | "green" | "cyan" | "purple" | "orange"
}

export function EcosystemCard({ title, description, icon, color }: EcosystemCardProps) {
  const colorClasses = {
    blue: "bg-blue-50 border-blue-200",
    green: "bg-green-50 border-green-200",
    cyan: "bg-cyan-50 border-cyan-200",
    purple: "bg-purple-50 border-purple-200",
    orange: "bg-orange-50 border-orange-200",
  }

  const iconClasses = {
    blue: "bg-blue-600 text-white",
    green: "bg-green-600 text-white",
    cyan: "bg-cyan-600 text-white",
    purple: "bg-purple-600 text-white",
    orange: "bg-orange-600 text-white",
  }

  const titleClasses = {
    blue: "text-blue-900",
    green: "text-green-900",
    cyan: "text-cyan-900",
    purple: "text-purple-900",
    orange: "text-orange-900",
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn("p-6 rounded-xl border-2 transition-all duration-300", colorClasses[color])}
    >
      <div className={cn("w-16 h-16 rounded-full flex items-center justify-center mb-6", iconClasses[color])}>
        <div className="w-8 h-8 flex items-center justify-center">{icon}</div>
      </div>

      <h3 className={cn("text-xl font-bold mb-3", titleClasses[color])}>{title}</h3>

      <p className="text-gray-700">{description}</p>
    </motion.div>
  )
}