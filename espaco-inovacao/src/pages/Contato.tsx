
import { MapPin, Mail, Phone, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { PageHeader } from "../components/page-header"
import { PageTransition } from "../components/page-transition"
import { FadeIn } from "../animations/fade-in"
import { ContactForm } from "../components/contact-form"

export default function ContatoPage() {
  return (
    <PageTransition>
      <PageHeader
        title="Entre em Contato"
        subtitle="Estamos aqui para ajudar você a fazer parte do nosso ecossistema de inovação"
      />

      {/* Informações de Contato e Formulário */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div>
              <FadeIn>
                <h2 className="text-3xl font-bold mb-6 text-blue-900">Fale Conosco</h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-gray-700 mb-8">
                  Tem alguma dúvida, sugestão ou quer saber mais sobre nossos programas? Entre em contato conosco
                  através dos canais abaixo ou preencha o formulário ao lado.
                </p>
              </FadeIn>

              <div className="space-y-6">
                <FadeIn delay={0.2}>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Endereço</h3>
                      <p className="text-gray-700">
                        Av. Principal, 1000 - Sala 201
                        <br />
                        Centro, Cidade - Estado
                        <br />
                        CEP: 00000-000
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail size={24} className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">E-mail</h3>
                      <p className="text-gray-700">
                        <a href="mailto:contato@ColinasdeInovação.org" className="hover:text-blue-600 transition-colors">
                          contato@colinasdeinovacao.org
                        </a>
                        <br />
                        <a href="mailto:parcerias@ColinasdeInovação.org" className="hover:text-blue-600 transition-colors">
                          parcerias@colinasdeinovacao.org
                        </a>
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone size={24} className="text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Telefone</h3>
                      <p className="text-gray-700">
                        <a href="tel:+5500000000000" className="hover:text-blue-600 transition-colors">
                          (00) 0000-0000
                        </a>
                        <br />
                        <a href="tel:+5500000000001" className="hover:text-blue-600 transition-colors">
                          (00) 0000-0001
                        </a>
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.5}>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock size={24} className="text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Horário de Funcionamento</h3>
                      <p className="text-gray-700">
                        Segunda a Sexta: 8h às 18h
                        <br />
                        Sábado: 9h às 13h
                        <br />
                        Domingo: Fechado
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Redes Sociais */}
              <FadeIn delay={0.6}>
                <div className="mt-8">
                  <h3 className="font-bold mb-4">Siga-nos nas redes sociais</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-gray-100 hover:bg-blue-100 p-3 rounded-full transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook size={24} className="text-gray-700" />
                    </a>
                    <a
                      href="#"
                      className="bg-gray-100 hover:bg-blue-100 p-3 rounded-full transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter size={24} className="text-gray-700" />
                    </a>
                    <a
                      href="#"
                      className="bg-gray-100 hover:bg-blue-100 p-3 rounded-full transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={24} className="text-gray-700" />
                    </a>
                    <a
                      href="#"
                      className="bg-gray-100 hover:bg-blue-100 p-3 rounded-full transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={24} className="text-gray-700" />
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Formulário de Contato */}
            <div>
              <FadeIn delay={0.3}>
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-6 text-center">Envie sua mensagem</h3>
                  <ContactForm />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">Nossa Localização</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-700">
              Venha nos visitar! Estamos localizados no coração da cidade, em um espaço moderno e acessível.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative h-[400px] rounded-xl overflow-hidden border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.860354696564!2d-36.4966618!3d-8.8821593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70145c87ae241ab%3A0xe5e6504f68c55b8d!2sUPE%20-%20Universidade%20de%20Pernambuco%20Campus%20Garanhuns!5e0!3m2!1spt-BR!2sbr!4v1717347559319!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Espaço Colinas de Inovação"
              ></iframe>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-4">Perguntas Frequentes</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-700">
              Encontre respostas para as dúvidas mais comuns sobre o Espaço Colinas de Inovação
            </p>
          </FadeIn>

          <div className="max-w-3xl mx-auto space-y-6">
            <FadeIn delay={0.2}>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Como posso participar dos programas?</h3>
                <p className="text-gray-700">
                  Para participar dos nossos programas, você deve se inscrever através do nosso site durante os períodos
                  de inscrição. Cada programa tem critérios específicos de seleção que são avaliados pela nossa equipe.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Qual o custo para utilizar o coworking?</h3>
                <p className="text-gray-700">
                  Oferecemos diferentes planos de coworking, desde passes diários até planos mensais. Os valores variam
                  conforme o tipo de acesso e os recursos incluídos. Entre em contato para conhecer nossos planos.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Como posso me tornar um mentor?</h3>
                <p className="text-gray-700">
                  Se você tem experiência empreendedora ou expertise em áreas relevantes para startups, pode se
                  candidatar para ser mentor. Envie seu currículo e uma carta de apresentação para nosso e-mail.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Vocês oferecem investimento para startups?</h3>
                <p className="text-gray-700">
                  Não oferecemos investimento direto, mas conectamos startups com nossa rede de investidores anjos e
                  fundos de venture capital. Também oferecemos preparação para captação de recursos.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}