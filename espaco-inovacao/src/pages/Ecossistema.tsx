
import { Building2, GraduationCap, Briefcase, Users, Globe, Lightbulb } from "lucide-react";
import { PageTransition } from "../components/page-transition";
import { PageHeader } from "../components/page-header";
import { FadeIn } from "../animations/fade-in";
import { StaggerContainer } from "../animations/stagger-container";
import { StaggerItem } from "../animations/stagger-item";
import { EcosystemCard } from "../components/ecosystem-card";

export default function EcossistemaPage() {
  return (
    <PageTransition>
      <PageHeader title="Ecossistema de Inovação" subtitle="Conheça os atores e as conexões que formam nosso hub" />

      {/* Visão Geral */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn>
                <h2 className="text-3xl font-bold mb-6 text-blue-900">Visão Geral</h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-gray-700 mb-4">
                  O ecossistema do Espaço Colinas de Inovação é formado por uma rede diversificada de atores que
                  colaboram para fomentar a inovação e o empreendedorismo na região.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-gray-700 mb-4">
                  Conectamos startups, empresas estabelecidas, universidades, investidores, mentores e o poder público
                  em um ambiente propício para a troca de conhecimento, recursos e oportunidades.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-gray-700">
                  Nosso objetivo é criar um ciclo virtuoso de inovação, onde ideias se transformam em negócios, negócios
                  geram empregos e desenvolvimento, e o conhecimento é compartilhado para inspirar novas ideias.
                </p>
              </FadeIn>
            </div>

            <FadeIn direction="left">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5622AQHClkvYrBrupw/feedshare-shrink_800/feedshare-shrink_800/0/1723812587259?e=2147483647&v=beta&t=utHRe6LM6AcnKBXC2UUKxyBw3V1-PXqOK7wJquZVi6w"
                  alt="Ecossistema Colinas de Inovação"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Atores do Ecossistema */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">Atores do Ecossistema</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-700">
              Conheça os principais agentes que compõem e fortalecem nossa rede de inovação
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggerItem>
              <EcosystemCard
                title="Startups"
                description="Empresas inovadoras em diferentes estágios de desenvolvimento, desde ideias iniciais até negócios em fase de escala."
                icon={<Lightbulb size={32} />}
                color="blue"
              />
            </StaggerItem>
            <StaggerItem>
              <EcosystemCard
                title="Empresas"
                description="Organizações estabelecidas que buscam inovação aberta, parcerias com startups e novas tecnologias para seus desafios."
                icon={<Building2 size={32} />}
                color="green"
              />
            </StaggerItem>
            <StaggerItem>
              <EcosystemCard
                title="Academia"
                description="Universidades e centros de pesquisa que geram conhecimento, talentos e tecnologias com potencial de mercado."
                icon={<GraduationCap size={32} />}
                color="cyan"
              />
            </StaggerItem>
            <StaggerItem>
              <EcosystemCard
                title="Investidores"
                description="Anjos, fundos de venture capital e outras fontes de financiamento para impulsionar o crescimento das startups."
                icon={<Briefcase size={32} />}
                color="purple"
              />
            </StaggerItem>
            <StaggerItem>
              <EcosystemCard
                title="Mentores"
                description="Profissionais experientes que compartilham conhecimento, orientação e conexões com os empreendedores."
                icon={<Users size={32} />}
                color="orange"
              />
            </StaggerItem>
            <StaggerItem>
              <EcosystemCard
                title="Governo"
                description="Instituições públicas que apoiam o ecossistema através de políticas, incentivos e programas de fomento."
                icon={<Globe size={32} />}
                color="blue"
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Mapa do Ecossistema */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">Mapa do Ecossistema</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-700">
              Visualize as conexões e fluxos que movimentam nosso ecossistema de inovação
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative h-[600px] rounded-xl overflow-hidden border border-gray-200">
              <img
                src="https://res.cloudinary.com/dydrdwjwb/image/upload/v1748882459/Gemini_Generated_Image_zv2pmzv2pmzv2pmz_mjep6w.png"
                alt="Mapa do Ecossistema Colinas de Inovação"
                className="w-full h-full object-contain"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-green-900 text-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">Benefícios de Participar</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-white/90">
              Ao fazer parte do ecossistema Colinas de Inovação, você tem acesso a diversos recursos e oportunidades
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeIn delay={0.2}>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Networking</h3>
                <p className="text-white/80">
                  Conexão com empreendedores, investidores, mentores e outros atores relevantes para seu negócio.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Conhecimento</h3>
                <p className="text-white/80">
                  Acesso a workshops, mentorias, eventos e conteúdos exclusivos para desenvolvimento de competências.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Infraestrutura</h3>
                <p className="text-white/80">
                  Espaços de trabalho, laboratórios e recursos tecnológicos para desenvolvimento de projetos.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Visibilidade</h3>
                <p className="text-white/80">
                  Oportunidades de exposição para seu negócio, produtos e serviços junto ao mercado e mídia.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}