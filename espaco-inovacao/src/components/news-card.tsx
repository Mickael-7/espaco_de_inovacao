import { Link } from "react-router-dom"
import { Calendar } from "lucide-react"

interface NewsCardProps {
  title: string
  date: string
  excerpt: string
  image: string
}

export function NewsCard({ title, date, excerpt, image }: NewsCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <img src={image || "/placeholder.svg"} alt={title} className="object-cover w-full h-full" />
      </div>

      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar size={16} className="mr-1" />
          {date}
        </div>

        <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>

        <p className="text-gray-700 mb-4 line-clamp-3">{excerpt}</p>

        <Link to="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
          Leia mais
        </Link>
      </div>
    </div>
  )
}