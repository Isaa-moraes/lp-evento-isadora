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
      <section id="inscricao" className="py-20 px-4 bg-gray-50 text-escura transition-all">
        <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-md border-t-4 border-destaque text-center">
          <span className="text-5xl block mb-4">🎉</span>
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
            onClick={() => { setEnviado(false); setNome(''); setEmail(''); }}
            className="mt-8 text-sm font-bold text-primaria hover:underline min-h-[44px]"
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

          <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
            Nome Completo
            <input
              type="text"
              required
              placeholder="Digite seu nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="mt-2 w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-base focus:outline-none focus:border-primaria focus:bg-white transition-colors"
            />
          </label>

          <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
            E-mail
            <input
              type="email"
              required
              placeholder="seu.email@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-base focus:outline-none focus:border-primaria focus:bg-white transition-colors"
            />
          </label>

          <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
            Escolha o seu Percurso
            <select
              value={ingresso}
              onChange={(e) => setIngresso(e.target.value)}
              className="mt-2 w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-base focus:outline-none focus:border-primaria focus:bg-white transition-colors h-12"
            >
              {tiposIngresso.map((opcao) => (
                <option key={opcao.valor} value={opcao.valor}>
                  {opcao.label}
                </option>
              ))}
            </select>
          </label>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-primaria text-white font-black py-4 rounded-xl text-base shadow hover:bg-escura transition-colors uppercase tracking-wider min-h-[44px]"
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