import { Link } from "react-router-dom"
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Informações */}
          <div className="space-y-4">
            <div className="relative h-12 w-48">
              <img
                src="https://res.cloudinary.com/dydrdwjwb/image/upload/v1748390918/colinas-black_1_l0kvvp.png"
                alt="Espaço Colinas de Inovação"
                className="object-contain brightness-0 invert w-full h-full"
              />
            </div>
            <p className="text-gray-400 mt-4">Conectando mentes, construindo o futuro da inovação.</p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/ecossistema" className="text-gray-400 hover:text-white transition-colors">
                  Ecossistema
                </Link>
              </li>
              <li>
                <Link to="/programas" className="text-gray-400 hover:text-white transition-colors">
                  Programas
                </Link>
              </li>
              <li>
                <Link to="/noticias" className="text-gray-400 hover:text-white transition-colors">
                  Notícias
                </Link>
              </li>
              <li>
                <Link to="/parceiros" className="text-gray-400 hover:text-white transition-colors">
                  Parceiros
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-cyan-500 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  R. Cap. Pedro Rodrigues, s/n
                  <br />
                  São José, Garanhuns - PE
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-cyan-500 mr-2" />
                <a href="mailto:contato@colinasdeinovacao.org" className="text-gray-400 hover:text-white transition-colors">
                  contato@colinasdeinovacao.org
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-cyan-500 mr-2" />
                <a href="tel:+5500000000000" className="text-gray-400 hover:text-white transition-colors">
                  (00) 0000-0000
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-cyan-600 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-cyan-600 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-cyan-600 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-cyan-600 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Espaço Colinas de Inovação. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}   