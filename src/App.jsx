import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Programacao from './components/Programacao'
import Atracoes from './components/Atracoes'
import PerguntasFrequentes from './components/PerguntasFrequentes'
import Inscricao from './components/Inscricao'
import Rodape from './components/Rodape'

function App() {
  return (
    <>
      {/* Link de acessibilidade oculto para usuários de teclado (Passo 2 do roteiro) */}
      <a 
        href="#conteudo" 
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-[#fcc419] focus:text-[#0b132b] focus:px-4 focus:py-2 focus:font-bold focus:rounded-md focus:outline-none"
      >
        Pular para o conteúdo
      </a>

      <Cabecalho />
      
      <main id="conteudo">
        <Hero />
        <Sobre />
        <Programacao />
        <Atracoes />
        <PerguntasFrequentes />
        <Inscricao />
      </main>
      
      <Rodape />
    </>
  )
}

export default App
