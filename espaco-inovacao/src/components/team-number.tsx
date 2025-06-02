import { Linkedin, Twitter } from "lucide-react"

interface TeamMemberProps {
  name: string
  role: string
  bio: string
  image: string
  linkedin?: string
  twitter?: string
}

export function TeamMember({ name, role, bio, image, linkedin, twitter }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
      <div className="relative h-64 w-full">
        <img src={image || "/placeholder.svg"} alt={name} className="object-cover w-full h-full" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-blue-600 font-medium mb-4">{role}</p>
        <p className="text-gray-700 mb-4">{bio}</p>

        {(linkedin || twitter) && (
          <div className="flex space-x-3">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-blue-100 p-2 rounded-full transition-colors"
              >
                <Linkedin size={20} className="text-gray-700" />
                <span className="sr-only">LinkedIn de {name}</span>
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-blue-100 p-2 rounded-full transition-colors"
              >
                <Twitter size={20} className="text-gray-700" />
                <span className="sr-only">Twitter de {name}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}