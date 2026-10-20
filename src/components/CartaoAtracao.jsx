function CartaoAtracao({ nome, nivel, descricao }) {

  // Ajustando a cor da tag de acordo com o nível de dificuldade do percurso
  const corNivel = 
    nivel === 'Avançado' ? 'bg-red-100 text-red-700' :
    nivel === 'Iniciante' ? 'bg-green-100 text-green-700' :
    nivel === 'Livre' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700';

  return (
    <article className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
      <div>
        <div className="flex items-center justify-between gap-2 flex-wrap">

          {/* Nome do percurso */}
          <h3 className="text-xl font-bold text-primaria">{nome}</h3>

          {/* Tag de Nível de Dificuldade */}
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${corNivel}`}>
            {nivel}
          </span>
        </div>
        
        {/* Descrição */}
        <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
          {descricao}
        </p>
      </div>
    </article>
  )
}

export default CartaoAtracao