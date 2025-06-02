
import { CheckCircle2 } from "lucide-react"
import { FadeIn } from "../animations/fade-in"
import { StaggerContainer } from "../animations/stagger-container"
import { StaggerItem } from "../animations/stagger-item"
import { PageHeader } from "../components/page-header"
import { PageTransition } from "../components/page-transition"
import { TeamMember } from "../components/team-number"

export default function SobrePage() {
  return (
    <PageTransition>
      <PageHeader title="Sobre o Espaço Colinas de Inovação" subtitle="Conheça nossa história, missão e valores" />

      {/* História */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <img
                  src="https://i0.wp.com/pernambuconoticias.com.br/wp-content/uploads/2024/04/Fachada-da-UPE.Divulgacao.jpeg?fit=862%2C425&ssl=1"
                  alt="História do Colinas de Inovação"
                  className="object-cover w-full h-full"
                />
              </div>
            </FadeIn>

            <div>
              <FadeIn>
                <h2 className="text-3xl font-bold mb-6 text-blue-900">Nossa História</h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-gray-700 mb-4">
                  O Espaço Colinas de Inovação nasceu em 2020 a partir da união de empresários, acadêmicos e
                  representantes do poder público com o objetivo de transformar a região em um polo de inovação e
                  tecnologia.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-gray-700 mb-4">
                  Inspirado nos modelos de sucesso de ecossistemas de inovação ao redor do mundo, o hub foi concebido
                  para ser um catalisador do desenvolvimento econômico e social, conectando pessoas, ideias e recursos.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-gray-700">
                  Desde sua fundação, o Colinas de Inovação tem sido um espaço de colaboração, experimentação e aprendizado,
                  onde empreendedores encontram o suporte necessário para transformar suas ideias em negócios de
                  impacto.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">Missão, Visão e Valores</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-blue-900">Missão</h3>
                <p className="text-gray-700">
                  Fomentar o empreendedorismo inovador e o desenvolvimento tecnológico, conectando pessoas, empresas e
                  instituições em um ecossistema colaborativo e sustentável.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-green-900">Visão</h3>
                <p className="text-gray-700">
                  Ser reconhecido como um dos principais hubs de inovação do país, referência em geração de negócios de
                  impacto e transformação social através da tecnologia e do conhecimento.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-cyan-900">Valores</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 size={20} className="text-cyan-500 mr-2 mt-0.5" />
                    <span>Colaboração e trabalho em rede</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={20} className="text-cyan-500 mr-2 mt-0.5" />
                    <span>Inovação e criatividade</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={20} className="text-cyan-500 mr-2 mt-0.5" />
                    <span>Sustentabilidade e impacto social</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={20} className="text-cyan-500 mr-2 mt-0.5" />
                    <span>Diversidade e inclusão</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 size={20} className="text-cyan-500 mr-2 mt-0.5" />
                    <span>Excelência e melhoria contínua</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">Nossa Equipe</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-700">
              Conheça os profissionais dedicados que fazem o Espaço Colinas de Inovação acontecer
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggerItem>
              <TeamMember
                name="Dr. Ivaldir Honório de Farias Júnior"
                role="Diretor Executivo"
                bio=" diretor executivo, com vasta experiência em gestão de hubs de inovação e empreendedorismo."
                image="https://www.upe.br/garanhuns/wp-content/uploads/2019/08/WhatsApp-Image-2019-06-05-at-19.24.54-1024x768.jpeg"
                linkedin="https://www.linkedin.com/in/ivaldir-junior-3654a1b/"
              />
            </StaggerItem>
            <StaggerItem>
              <TeamMember
                name="Mickael de Albquerque Silva"
                role="Desnvolvedor de Software"
                bio="Com formação em Engenharia de Software, responsável pelo desenvolvimento e manutenção das plataformas digitais do hub."
                image="https://media.licdn.com/dms/image/v2/D4D03AQGVLztLYaj9fA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730151253611?e=1754524800&v=beta&t=GYLrdyh5sevXxRWzH4xra0B8VHLb6hgg7N6GWVlyW2s"
                linkedin="https://www.linkedin.com/in/mickael-albuquerque-380b6a299/"
              />
            </StaggerItem>
            <StaggerItem>
              <TeamMember
                name="Emanoele Neves de Oliveira"
                role="Desenvolvedora de Software"
                bio="Especialista em desenvolvimento web, focada na criação de soluções digitais inovadoras para startups."
                image="https://media.licdn.com/dms/image/v2/D4D35AQGoVYexRxSbbg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1699984532218?e=1749488400&v=beta&t=F0WxsMzgdbZM1LKCSajVGzY6QVfD1Q28cxhsrbffHnQ"
                linkedin="https://www.linkedin.com/in/emanoele-neves-67690329b/"
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </PageTransition>
  )
}