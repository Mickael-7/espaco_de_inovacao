import { Link } from "react-router-dom"

import { Building2, Rocket, Users, LayoutGrid, Lightbulb, ArrowRight } from "lucide-react"
import { FadeIn } from "../animations/fade-in"
import { StaggerContainer } from "../animations/stagger-container"
import { StaggerItem } from "../animations/stagger-item"
import { StatCard } from "../components/stat-card"
import { ProgramCard } from "../components/program-card"
import { NewsCard } from "../components/news-card"
import { Button } from "../components/ui/button"
import { ParceirosGrid } from "../components/ParceirosGrid"
import { parceirosEmpresariais } from "../data/parceiros"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Seção Hero */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-green-900/80 z-10"></div>
        <img
          src="/placeholder.svg?height=600&width=1920"
          alt="Colaboração e inovação"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="container relative z-20 mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Colinas de Inovação: Conectando mentes, construindo o futuro da inovação.
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                O ponto de encontro para empreendedores, empresas e conhecimento.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                Faça Parte do Ecossistema
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* O que é o Colinas de Inovação */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">O que é o Colinas de Inovação?</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-700">
              O Espaço Colinas de Inovação é um hub que conecta pessoas, empresas, universidades e governo para
              fomentar a inovação e o desenvolvimento tecnológico, criando um ambiente propício para o surgimento de
              novas ideias e negócios.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-blue-50 p-8 rounded-xl">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                  <Building2 size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">Ecossistemas de Inovação</h3>
                <p className="text-gray-700">
                  Criamos ambientes que agregam infraestrutura e arranjos institucionais para atrair talentos,
                  empreendedores e recursos, potencializando a sociedade do conhecimento.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.3}>
              <div className="bg-green-50 p-8 rounded-xl">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                  <Rocket size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-900">Geração de Empreendimentos</h3>
                <p className="text-gray-700">
                  Fomentamos negócios inovadores, desde a ideia até o sucesso, oferecendo suporte para startups de base
                  tecnológica resolverem desafios reais da sociedade.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Seção de Números */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-green-900 text-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nosso Impacto</h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StaggerItem>
              <StatCard number="50+" label="Startups em desenvolvimento" icon={<Rocket size={32} />} />
            </StaggerItem>
            <StaggerItem>
              <StatCard number="20+" label="Parceiros estratégicos" icon={<Users size={32} />} />
            </StaggerItem>
            <StaggerItem>
              <StatCard number="1000m²" label="Espaço Colaborativo" icon={<LayoutGrid size={32} />} />
            </StaggerItem>
            <StaggerItem>
              <StatCard number="30+" label="Mentores conectados" icon={<Lightbulb size={32} />} />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Nossos Programas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nossos Programas</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-700">
              Conheça as iniciativas que impulsionam o ecossistema de inovação
            </p>
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

          <FadeIn delay={0.4} className="flex justify-center mt-10">
            <Link to="/programas">
              <Button variant="outline" className="flex items-center gap-2">
                Ver todos os programas
                <ArrowRight size={16} />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Notícias e Agenda */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Notícias e Agenda</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-700">
              Fique por dentro das novidades e eventos do Espaço Colinas de Inovação
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-8">
            <StaggerItem>
              <NewsCard
                title="Lançamento do Programa de Aceleração 2023"
                date="15 de Maio, 2023"
                excerpt="O novo programa de aceleração do Colinas de Inovação está com inscrições abertas para startups de base tecnológica."
                image="/placeholder.svg?height=200&width=400"
              />
            </StaggerItem>
            <StaggerItem>
              <NewsCard
                title="Parceria com Universidade Federal"
                date="28 de Abril, 2023"
                excerpt="Firmamos uma parceria estratégica com a Universidade Federal para desenvolvimento de projetos de pesquisa aplicada."
                image="/placeholder.svg?height=200&width=400"
              />
            </StaggerItem>
            <StaggerItem>
              <NewsCard
                title="Workshop: Captação de Investimentos"
                date="10 de Abril, 2023"
                excerpt="Evento gratuito para empreendedores aprenderem sobre as melhores estratégias para captação de recursos."
                image="/placeholder.svg?height=200&width=400"
              />
            </StaggerItem>
          </StaggerContainer>

          <FadeIn delay={0.4} className="flex justify-center">
            <Link to="/noticias">
              <Button variant="outline" className="flex items-center gap-2">
                Ver todas as notícias
                <ArrowRight size={16} />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Nossos Parceiros */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nossos Parceiros</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-700">
              Uma rede forte para um ecossistema completo
            </p>
          </FadeIn>

          <ParceirosGrid parceiros={parceirosEmpresariais} />

          <FadeIn delay={0.4} className="flex justify-center mt-10">
            <Link to="/parceiros">
              <Button variant="outline" className="flex items-center gap-2">
                Conheça todos os parceiros
                <ArrowRight size={16} />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para inovar?</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Seja você um empreendedor, investidor ou uma empresa, o Espaço Colinas de Inovação é o seu lugar.
              Entre em contato e descubra como podemos colaborar.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link to="/contato">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                Fale Conosco
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}