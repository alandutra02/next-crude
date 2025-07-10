'use client'
import { useEffect, useState } from "react"
import Corpo from "./Corpo"
import Cliente from "./core/Cliente"
import Tabela from "./Tabela"
import Botao from "./Botao"
import Formulario from "./Formulario"
import ClienteRepositorio from "./core/ClienteRepositorio"
import ColecaoCliente from "@/backend/db/ColecaoCliente"

export default function Home() {
  const repo: ClienteRepositorio = new ColecaoCliente()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  useEffect(() => {
    obterTodos()
  }, [])

  async function obterTodos() {
    const clientes = await repo.obterTodos()
    setClientes(clientes)
    setVisivel('tabela')
  }

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }

  async function clienteExcluido(cliente: Cliente) {
    await repo.excluir(cliente)
    obterTodos()
  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente)
    obterTodos()
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Corpo titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao
                className="mb-4 bg-gradient-to-r from-green-400 to-green-700 hover:from-green-500 hover:to-green-800"
                onClick={novoCliente}
              >
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}
          />
        )}
      </Corpo>
    </div>
  )
}
