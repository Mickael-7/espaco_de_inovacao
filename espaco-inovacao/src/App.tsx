// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/header'
import { Footer } from './components/footer'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Programas from './pages/Programas'
import Parceiros from './pages/Parceiros'
import Noticias from './pages/Noticias'
import Contato from './pages/Contato'
import Ecossistema from './pages/Ecossistema'
import { ScrollToTop } from './components/ScrollToTop' // 1. Importe o novo componente

function App() {
  return (
    <div className="flex min-h-screen flex-col pt-20">
      <Header />
      <ScrollToTop /> {/* 2. Adicione o componente aqui */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/programas" element={<Programas />} />
          <Route path="/parceiros" element={<Parceiros />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/ecossistema" element={<Ecossistema />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App