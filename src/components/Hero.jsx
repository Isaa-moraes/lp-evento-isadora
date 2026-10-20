function Hero() {
  return (
    <section id="inicio" className="bg-escura text-white py-20 px-4 text-center border-b-4 border-destaque">
      <div className="max-w-3xl mx-auto">
        {/* Único H1 da página */}
        <h1 className="text-4xl sm:text-6xl font-black text-destaque uppercase tracking-tight leading-tight">
          Corrida Noturna OC
        </h1>
        
        {/* Slogan */}
        <p className="mt-4 text-lg sm:text-2xl text-gray-300 font-medium italic">
          "Corra sob as luzes da cidade."
        </p>
        
        {/* Informações de Data e Local */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm sm:text-base text-gray-200 border-y border-gray-700 py-4 max-w-xl mx-auto">
          <p>📅 <span className="font-bold">17 de abril de 2027</span> (sábado)</p>
          <p>🏁 Largada às <span className="font-bold">19h30</span></p>
          <p>📍 <span className="font-bold">Praça Central</span> — Osvaldo Cruz/SP</p>
        </div>
        
        {/* Botão de Ação */}
        <div className="mt-10">
          <a
            href="#inscricao"
            className="inline-block bg-destaque text-escura font-black px-8 py-4 rounded-full text-lg shadow-lg hover:scale-105 transition-transform uppercase tracking-wider min-h-[44px]"
          >
            Garantir Ingresso
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero