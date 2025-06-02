import type { ReactNode } from "react"

interface StatCardProps {
  number: string
  label: string
  icon: ReactNode
}

export function StatCard({ number, label, icon }: StatCardProps) {
  return (
    <div className="text-center p-6">
      <div className="flex justify-center mb-4 w-8 h-8 mx-auto">{icon}</div>
      <div className="text-4xl font-bold mb-2">{number}</div>
      <div className="text-white/80">{label}</div>
    </div>
  )
}