import { StaggerContainer } from "../animations/stagger-container"
import { StaggerItem } from "../animations/stagger-item"
import { NewsCard } from "./news-card"


// Dados simulados para notícias
const newsItems = [
  {
    id: 1,
    title: "Lançamento do Programa de Aceleração 2023",
    date: "15 de Maio, 2023",
    excerpt:
      "O novo programa de aceleração do Sete Colinas está com inscrições abertas para startups de base tecnológica.",
    image: "/placeholder.svg?height=200&width=400",
    slug: "lancamento-programa-aceleracao-2023",
  },
  {
    id: 2,
    title: "Parceria com Universidade Federal",
    date: "28 de Abril, 2023",
    excerpt:
      "Firmamos uma parceria estratégica com a Universidade Federal para desenvolvimento de projetos de pesquisa aplicada.",
    image: "/placeholder.svg?height=200&width=400",
    slug: "parceria-universidade-federal",
  },
  {
    id: 3,
    title: "Workshop: Captação de Investimentos",
    date: "10 de Abril, 2023",
    excerpt: "Evento gratuito para empreendedores aprenderem sobre as melhores estratégias para captação de recursos.",
    image: "/placeholder.svg?height=200&width=400",
    slug: "workshop-captacao-investimentos",
  },
  {
    id: 4,
    title: "Sete Colinas recebe prêmio de inovação",
    date: "5 de Abril, 2023",
    excerpt:
      "O hub de inovação foi reconhecido como um dos mais promissores do país em cerimônia realizada na capital.",
    image: "/placeholder.svg?height=200&width=400",
    slug: "premio-inovacao",
  },
  {
    id: 5,
    title: "Abertura de novas vagas no coworking",
    date: "1 de Abril, 2023",
    excerpt: "Estamos com novas posições disponíveis em nosso espaço de coworking. Inscreva-se para garantir sua vaga.",
    image: "/placeholder.svg?height=200&width=400",
    slug: "novas-vagas-coworking",
  },
  {
    id: 6,
    title: "Palestra: Tendências em Inteligência Artificial",
    date: "25 de Março, 2023",
    excerpt:
      "Especialistas discutem as últimas tendências em IA e como elas impactam o mercado de trabalho e os negócios.",
    image: "/placeholder.svg?height=200&width=400",
    slug: "palestra-tendencias-ia",
  },
]

export function NewsList() {
  return (
    <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {newsItems.map((news) => (
        <StaggerItem key={news.id}>
          <NewsCard title={news.title} date={news.date} excerpt={news.excerpt} image={news.image} />
        </StaggerItem>
      ))}
    </StaggerContainer>
  )
}