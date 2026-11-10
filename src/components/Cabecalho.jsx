function Cabecalho() {
  return (
    <header className="sticky top-0 z-50 bg-primaria text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Nome do Evento */}
        <span className="font-extrabold text-xl tracking-tight text-destaque">
          Corrida Noturna OC
        </span>
        
        {/* Menu de Navegação - Adicionado aria-label para os leitores de tela */}
        <nav aria-label="Menu principal">
          <ul className="flex flex-wrap justify-center gap-6 text-sm font-semibold">
            <li>
              <a href="#inicio" className="hover:text-destaque transition-colors min-h-[44px] flex items-center px-2 focus-visible:outline focus-visible:outline-3 focus-visible:outline-destaque focus-visible:outline-offset-2 rounded">
                Início
              </a>
            </li>
            <li>
              <a href="#sobre" className="hover:text-destaque transition-colors min-h-[44px] flex items-center px-2 focus-visible:outline focus-visible:outline-3 focus-visible:outline-destaque focus-visible:outline-offset-2 rounded">
                Sobre
              </a>
            </li>
            <li>
              <a href="#programacao" className="hover:text-destaque transition-colors min-h-[44px] flex items-center px-2 focus-visible:outline focus-visible:outline-3 focus-visible:outline-destaque focus-visible:outline-offset-2 rounded">
                Programação
              </a>
            </li>
            <li>
              <a href="#percursos" className="hover:text-destaque transition-colors min-h-[44px] flex items-center px-2 focus-visible:outline focus-visible:outline-3 focus-visible:outline-destaque focus-visible:outline-offset-2 rounded">
                Percursos
              </a>
            </li>
            {/* Novo link exigido pelo Passo 3 do roteiro */}
            <li>
              <a href="#duvidas" className="hover:text-destaque transition-colors min-h-[44px] flex items-center px-2 focus-visible:outline focus-visible:outline-3 focus-visible:outline-destaque focus-visible:outline-offset-2 rounded">
                Dúvidas
              </a>
            </li>
            <li>
              <a href="#inscricao" className="hover:text-destaque transition-colors min-h-[44px] flex items-center px-2 focus-visible:outline focus-visible:outline-3 focus-visible:outline-destaque focus-visible:outline-offset-2 rounded">
                Inscrição
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Cabecalho