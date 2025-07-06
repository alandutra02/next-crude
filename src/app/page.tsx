'use client'
import Image from "next/image";
import Corpo from "./Corpo";
import Cliente from "./core/Cliente";
import Tabela from "./Tabela";
import Botao from "./Botao";
import Formulario from "./Formulario";

export default function Home() {
  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Pedro', 54, '4')
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome)
  }

  return (
    <div className={`
        flex h-screen justify-center items-center
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
    `}>
        
        <Corpo titulo="Cadastro Simples">
          <div className="flex justify-end">
            <Botao className="mb-4 bg-gradient-to-r from-green-400 to-green-700
             hover:from-green-500 hover:to-green-800">
              Novo Cliente
            </Botao>
          </div>
          <Tabela clientes={clientes}
            clienteSelecionado={clienteSelecionado}
            clienteExcluido={clienteExcluido}>
          </Tabela>
          <Formulario cliente={clientes[0]}></Formulario>
        </Corpo>
    </div>
  )
}