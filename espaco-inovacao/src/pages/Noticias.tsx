

import { Search, Filter } from "lucide-react"

import { FadeIn } from "../animations/fade-in"
import { NewsList } from "../components/news-list"
import { PageHeader } from "../components/page-header"
import { PageTransition } from "../components/page-transition"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"

export default function NoticiasPage() {
  return (
    <PageTransition>
      <PageHeader
        title="Notícias e Eventos"
        subtitle="Fique por dentro das novidades e acontecimentos do Espaço Colinas de Inovação"
        videoSrc="https://res.cloudinary.com/dydrdwjwb/video/upload/v1750777786/1236-144355017_whw98q.mp4"
      />

      {/* Filtros e Busca */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input placeholder="Buscar notícias..." className="pl-10" />
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter size={16} />
                Filtros
              </Button>
              <Button variant="outline">Todas</Button>
              <Button variant="outline">Eventos</Button>
              <Button variant="outline">Parcerias</Button>
              <Button variant="outline">Programas</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lista de Notícias */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">Últimas Notícias</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-700">
              Acompanhe as principais novidades, eventos e conquistas do nosso ecossistema
            </p>
          </FadeIn>

          <NewsList />

          <FadeIn delay={0.4} className="flex justify-center mt-12">
            <Button variant="outline" size="lg">
              Carregar mais notícias
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-4 text-blue-900">Receba nossas novidades</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-gray-700 mb-8">
                Inscreva-se em nossa newsletter e seja o primeiro a saber sobre eventos, oportunidades e novidades do
                Colinas de Inovação.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input type="email" placeholder="Seu melhor e-mail" className="flex-1" />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Inscrever-se</Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}