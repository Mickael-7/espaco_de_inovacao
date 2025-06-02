
import { Building2, GraduationCap, Globe, Users } from "lucide-react";
import { PageTransition } from "../components/page-transition";
import { PageHeader } from "../components/page-header";
import { FadeIn } from "../animations/fade-in";
import { StaggerContainer } from "../animations/stagger-container";
import { PartnerLogo } from "../components/partner-logo";
import { StaggerItem } from "../animations/stagger-item";
import { Button } from "../components/ui/button";

export default function ParceirosPage() {
  return (
    <PageTransition>
      <PageHeader
        title="Nossos Parceiros"
        subtitle="Conheça as organizações que fortalecem nosso ecossistema de inovação"
      />

      {/* Categorias de Parceiros */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">Categorias de Parceiros</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-700">
              Nossa rede é composta por diferentes tipos de organizações que contribuem para o sucesso do ecossistema
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeIn delay={0.2}>
              <div className="bg-blue-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">Empresas</h3>
                <p className="text-gray-700">Organizações que buscam inovação e parcerias estratégicas</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-green-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-green-900">Universidades</h3>
                <p className="text-gray-700">Instituições de ensino e pesquisa que geram conhecimento</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="bg-cyan-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-cyan-900">Governo</h3>
                <p className="text-gray-700">Órgãos públicos que apoiam o desenvolvimento regional</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className="bg-purple-50 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-purple-900">Organizações</h3>
                <p className="text-gray-700">Entidades que promovem o empreendedorismo e inovação</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Parceiros Empresariais */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">Parceiros Empresariais</h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
            {Array.from({ length: 18 }).map((_, i) => (
              <StaggerItem key={i}>
                <PartnerLogo name={`Empresa ${i + 1}`} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Parceiros Acadêmicos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">Parceiros Acadêmicos</h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            {Array.from({ length: 10 }).map((_, i) => (
              <StaggerItem key={i}>
                <PartnerLogo name={`Universidade ${i + 1}`} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Parceiros Institucionais */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">Parceiros Institucionais</h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
            {Array.from({ length: 12 }).map((_, i) => (
              <StaggerItem key={i}>
                <PartnerLogo name={`Instituição ${i + 1}`} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefícios da Parceria */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-green-900 text-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">Benefícios da Parceria</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-white/90">
              Descubra as vantagens de fazer parte da nossa rede de parceiros
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.2}>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Acesso ao Ecossistema</h3>
                <p className="text-white/80">
                  Conecte-se com startups, empreendedores, investidores e outros parceiros estratégicos.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Inovação Aberta</h3>
                <p className="text-white/80">
                  Participe de projetos colaborativos e tenha acesso a tecnologias e soluções inovadoras.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Visibilidade</h3>
                <p className="text-white/80">
                  Aumente a visibilidade da sua marca junto ao ecossistema de inovação regional.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Desenvolvimento</h3>
                <p className="text-white/80">
                  Contribua para o desenvolvimento econômico e social da região através da inovação.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.6}>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Networking</h3>
                <p className="text-white/80">
                  Amplie sua rede de contatos e identifique novas oportunidades de negócio.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.7}>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Conhecimento</h3>
                <p className="text-white/80">
                  Acesse conhecimento especializado e participe de eventos exclusivos para parceiros.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA para Parceria */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4">Seja nosso parceiro</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-700">
              Junte-se à nossa rede de parceiros e contribua para o fortalecimento do ecossistema de inovação.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Quero ser parceiro
            </Button>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  )
}