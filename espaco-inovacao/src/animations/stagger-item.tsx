"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface StaggerItemProps {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "none"
}

export function StaggerItem({ children, className = "", direction = "up" }: StaggerItemProps) {
  const getDirectionVariants = () => {
    switch (direction) {
      case "up":
        return {
          hidden: { y: 40, opacity: 0 },
          visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
        }
      case "down":
        return {
          hidden: { y: -40, opacity: 0 },
          visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
        }
      case "left":
        return {
          hidden: { x: 40, opacity: 0 },
          visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
        }
      case "right":
        return {
          hidden: { x: -40, opacity: 0 },
          visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
        }
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.5 } },
        }
    }
  }

  return (
    <motion.div className={className} variants={getDirectionVariants()}>
      {children}
    </motion.div>
  )
}