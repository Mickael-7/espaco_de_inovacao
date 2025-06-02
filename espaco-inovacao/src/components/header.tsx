"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"


const navItems = [
  { label: "Sobre", href: "/sobre" },
  { label: "Ecossistema", href: "/ecossistema" },
  { label: "Programas", href: "/programas" },
  { label: "Notícias", href: "/noticias" },
  { label: "Parceiros", href: "/parceiros" },
  { label: "Contato", href: "/contato" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white dark:bg-gray-900 shadow-md py-2" : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-20 w-68"
            >
              <img
                src="https://res.cloudinary.com/dydrdwjwb/image/upload/v1748390918/colinas-black_1_l0kvvp.png"
                alt="Espaço de Inovação Sete Colinas"
                className="object-contain w-full h-full dark:brightness-0 dark:invert" 
              />
            </motion.div>
          </Link>

          {/* Navegação Desktop e ThemeToggle */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Link
                    to={item.href}
                    className={`relative font-medium transition-colors ${
                      pathname === item.href
                        ? "text-blue-600 dark:text-cyan-400"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400"
                    }`}
                  >
                    {item.label}
                    {pathname === item.href && (
                      <motion.span
                        layoutId="underline"
                        className="absolute left-0 top-full block h-0.5 w-full bg-blue-600 dark:bg-cyan-400"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>


          {/* Botão do Menu Mobile e ThemeToggle */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Navegação Mobile */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-4"
        >
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`font-medium transition-colors py-2 ${
                  pathname === item.href
                    ? "text-blue-600 dark:text-cyan-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  )
}
