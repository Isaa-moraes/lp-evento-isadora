function Cabecalho() {
  return (
    <header className="sticky top-0 z-50 bg-primaria text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Nome do Evento */}
        <span className="font-extrabold text-xl tracking-tight text-destaque">
          Corrida Noturna OC
        </span>
        
        {/* Menu de Navegação */}
        <nav>
          <ul className="flex flex-wrap justify-center gap-6 text-sm font-semibold">
            <li>
              <a href="#inicio" className="hover:text-destaque transition-colors min-h-[44px] flex items-center px-2">
                Início
              </a>
            </li>
            <li>
              <a href="#sobre" className="hover:text-destaque transition-colors min-h-[44px] flex items-center px-2">
                Sobre
              </a>
            </li>
            <li>
              <a href="#programacao" className="hover:text-destaque transition-colors min-h-[44px] flex items-center px-2">
                Programação
              </a>
            </li>
            <li>
              <a href="#percursos" className="hover:text-destaque transition-colors min-h-[44px] flex items-center px-2">
                Percursos
              </a>
            </li>
            <li>
              <a href="#inscricao" className="hover:text-destaque transition-colors min-h-[44px] flex items-center px-2">
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