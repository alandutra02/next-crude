'use client'
import Corpo from "./Corpo"
import Tabela from "./Tabela"
import Botao from "./Botao"
import Formulario from "./Formulario"
import useClientes from "@/hooks/useClientes"

export default function Home() {

  const {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    selecionarCliente,
    excluirCliente,
    tabelaVisivel,
    exibirTabela
  } = useClientes()

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Corpo titulo="Cadastro Simples">
        {tabelaVisivel ? (
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
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          />
        )}
      </Corpo>
    </div>
  )
}
