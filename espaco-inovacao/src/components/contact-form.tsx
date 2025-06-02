"use client"

import type React from "react"

import { useState } from "react"

import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { Label } from "@radix-ui/react-label"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simula o envio do formulário
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 p-8 rounded-xl text-center"
      >
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="w-16 h-16 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-green-900 mb-2">Mensagem Enviada!</h3>
        <p className="text-green-800 mb-6">Obrigado por entrar em contato. Nossa equipe responderá em breve.</p>
        <Button onClick={() => setIsSubmitted(false)} className="bg-green-600 hover:bg-green-700 text-white">
          Enviar nova mensagem
        </Button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" placeholder="Seu nome" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="seu@email.com" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Assunto</Label>
        <Input id="subject" placeholder="Assunto da mensagem" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Mensagem</Label>
        <Textarea id="message" placeholder="Sua mensagem" rows={6} required />
      </div>

      <Button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white w-full md:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
      </Button>
    </form>
  )
}