

import { Lightbulb, Rocket, LayoutGrid, Users, Calendar, Globe, BookOpen } from "lucide-react"
import { FadeIn } from "../animations/fade-in"
import { StaggerContainer } from "../animations/stagger-container"
import { StaggerItem } from "../animations/stagger-item"
import { PageHeader } from "../components/page-header"
import { PageTransition } from "../components/page-transition"
import { ProgramCard } from "../components/program-card"
import { Button } from "../components/ui/button"

export default function ProgramasPage() {
  return (
    <PageTransition>
      <PageHeader
        title="Nossos Programas"
        subtitle="Conheça as iniciativas que impulsionam o ecossistema de inovação"
        videoSrc="https://res.cloudinary.com/dydrdwjwb/video/upload/v1750777786/1236-144355017_whw98q.mp4"
      />

      {/* Programas Principais */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">Programas Principais</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            <StaggerItem>
              <ProgramCard
                title="Incubadora de Empresas"
                description="Para projetos em estágio inicial, oferecemos mentoria, infraestrutura e networking para transformar ideias em negócios viáveis."
                icon={<Lightbulb size={40} />}
                color="blue"
              />
            </StaggerItem>
            <StaggerItem>
              <ProgramCard
                title="Aceleradora de Negócios"
                description="Para startups prontas para escalar, proporcionamos conexões com investidores, acesso a mercados e estratégias de crescimento."
                icon={<Rocket size={40} />}
                color="green"
              />
            </StaggerItem>
            <StaggerItem>
              <ProgramCard
                title="Coworking & Labs"
                description="Espaços abertos e laboratórios de prototipagem para experimentação, colaboração e desenvolvimento de produtos inovadores."
                icon={<LayoutGrid size={40} />}
                color="cyan"
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Programas Complementares */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">Programas Complementares</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-700">
              Iniciativas que complementam nossa oferta e fortalecem o ecossistema
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Users size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Programa de Mentoria</h3>
                <p className="text-gray-700 mb-4">
                  Conectamos empreendedores com mentores experientes que oferecem orientação personalizada em áreas como
                  gestão, marketing, vendas, tecnologia e captação de recursos.
                </p>
                <Button variant="outline" className="w-full">
                  Saiba mais
                </Button>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Calendar size={24} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Eventos e Workshops</h3>
                <p className="text-gray-700 mb-4">
                  Promovemos regularmente eventos, workshops e palestras com especialistas do mercado sobre temas
                  relevantes para startups e empresas inovadoras.
                </p>
                <Button variant="outline" className="w-full">
                  Saiba mais
                </Button>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                  <Globe size={24} className="text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Conexões Internacionais</h3>
                <p className="text-gray-700 mb-4">
                  Facilitamos o acesso a mercados internacionais através de parcerias com hubs de inovação ao redor do
                  mundo e programas de soft landing.
                </p>
                <Button variant="outline" className="w-full">
                  Saiba mais
                </Button>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen size={24} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Academia de Inovação</h3>
                <p className="text-gray-700 mb-4">
                  Cursos e treinamentos para desenvolver habilidades empreendedoras e técnicas, ministrados por
                  profissionais experientes do mercado.
                </p>
                <Button variant="outline" className="w-full">
                  Saiba mais
                </Button>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Como Participar */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">Como Participar</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-700">
              Saiba como fazer parte dos programas do Espaço Colinas de Inovação
            </p>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            <FadeIn delay={0.2}>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-8">
                <h3 className="text-2xl font-bold mb-4 text-blue-900">Processo de Seleção</h3>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold mr-3 flex-shrink-0">
                      1
                    </span>
                    <div>
                      <p className="font-medium">Inscrição</p>
                      <p className="text-gray-700">
                        Preencha o formulário de inscrição específico para o programa de interesse.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold mr-3 flex-shrink-0">
                      2
                    </span>
                    <div>
                      <p className="font-medium">Avaliação</p>
                      <p className="text-gray-700">
                        Nossa equipe analisa as inscrições com base em critérios como inovação, potencial de mercado e
                        equipe.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold mr-3 flex-shrink-0">
                      3
                    </span>
                    <div>
                      <p className="font-medium">Entrevista</p>
                      <p className="text-gray-700">
                        Os projetos pré-selecionados são convidados para uma entrevista com nossa banca avaliadora.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold mr-3 flex-shrink-0">
                      4
                    </span>
                    <div>
                      <p className="font-medium">Resultado</p>
                      <p className="text-gray-700">
                        Os selecionados são anunciados e convidados para iniciar o programa.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="flex justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Inscreva-se nos Programas
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}