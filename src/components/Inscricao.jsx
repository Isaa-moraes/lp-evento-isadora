import { useState } from 'react'
import { tiposIngresso } from '../data/evento'

function Inscricao() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [ingresso, setIngresso] = useState('10km')
  const [enviado, setEnviado] = useState(false)

  function lidarComEnvio(e) {
    e.preventDefault()
    setEnviado(true)
  }

  const ingressoSelecionado = tiposIngresso.find(t => t.valor === ingresso)?.label || ingresso

  if (enviado) {
    return (
      /* ♿ ACESSIBILIDADE: role="status" avisa imediatamente o leitor de tela que a inscrição foi concluída com sucesso */
      <section id="inscricao" role="status" aria-live="polite" className="py-20 px-4 bg-gray-50 text-escura transition-all">
        <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-md border-t-4 border-destaque text-center">
          <span className="text-5xl block mb-4" aria-hidden="true">🎉</span>
          <h2 className="text-2xl sm:text-3xl font-black text-primaria uppercase tracking-tight">
            Inscrição Confirmada!
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700">
            Olá, <span className="font-bold text-escura">{nome}</span>! Sua vaga na Corrida Noturna OC está garantida.
          </p>
          <div className="mt-6 bg-gray-50 border border-gray-100 p-4 rounded-xl max-w-sm mx-auto">
            <p className="text-xs uppercase tracking-wider text-gray-400 font-bold">Modalidade Escolhida</p>
            <p className="text-base sm:text-lg font-extrabold text-primaria mt-1">{ingressoSelecionado}</p>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Enviamos os detalhes do kit e o regulamento completo para <span className="font-medium text-escura">{email}</span>.
          </p>
          <button 
            type="button"
            onClick={() => { setEnviado(false); setNome(''); setEmail(''); }}
            className="mt-8 text-sm font-bold text-primaria hover:underline min-h-[44px] px-4 rounded focus-visible:outline focus-visible:outline-3 focus-visible:outline-primaria focus-visible:outline-offset-2"
          >
            Fazer outra inscrição
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="inscricao" className="py-20 px-4 bg-gray-50 text-escura">
      <div className="max-w-xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-100">

        {/* Título da Seção */}
        <h2 className="text-3xl font-extrabold uppercase tracking-tight text-center text-primaria mb-2">
          Garanta sua Vaga
        </h2>
        <p className="text-sm text-gray-500 text-center mb-8">
          Preencha os campos abaixo para realizar sua inscrição na prova.
        </p>

        {/* Formulário */}
        <form onSubmit={lidarComEnvio} className="space-y-6">

          {/* ♿ ACESSIBILIDADE: Adicionado htmlFor e id para vincular os inputs perfeitamente à label */}
          <div className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
            <label htmlFor="campo-nome">Nome Completo</label>
            <input
              id="campo-nome"
              type="text"
              required
              autoComplete="name" /* Permite preenchimento rápido para restrições motoras */
              placeholder="Digite seu nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="mt-2 w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-base focus:outline-none focus:border-primaria focus:bg-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-primaria focus-visible:outline-offset-2 transition-colors"
            />
          </div>

          <div className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
            <label htmlFor="campo-email">E-mail</label>
            <input
              id="campo-email"
              type="email"
              required
              autoComplete="email" /* Facilita a entrada de dados do usuário */
              placeholder="seu.email@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-base focus:outline-none focus:border-primaria focus:bg-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-primaria focus-visible:outline-offset-2 transition-colors"
            />
          </div>

          <div className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
            <label htmlFor="campo-ingresso">Escolha o seu Percurso</label>
            <select
              id="campo-ingresso"
              value={ingresso}
              onChange={(e) => setIngresso(e.target.value)}
              className="mt-2 w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-base focus:outline-none focus:border-primaria focus:bg-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-primaria focus-visible:outline-offset-2 transition-colors h-12"
            >
              {tiposIngresso.map((opcao) => (
                <option key={opcao.valor} value={opcao.valor}>
                  {opcao.label}
                </option>
              ))}
            </select>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-primaria text-white font-black py-4 rounded-xl text-base shadow hover:bg-escura focus-visible:outline focus-visible:outline-3 focus-visible:outline-escura focus-visible:outline-offset-2 transition-colors uppercase tracking-wider min-h-[44px]"
            >
              Confirmar Inscrição
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Inscricao