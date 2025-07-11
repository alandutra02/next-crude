import Cliente from "@/app/core/Cliente"
import { useState } from "react"
import ClienteRepositorio from "@/app/core/ClienteRepositorio"
import ColecaoCliente from "@/backend/db/ColecaoCliente"
import { useEffect } from "react"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente()

    const { tabelaVisivel, exibirTabela, exibirFormulario } = useTabelaOuForm()
    
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])

    
    useEffect(() => {
      obterTodos()
    }, [])
    
    async function obterTodos() {
      const clientes = await repo.obterTodos()
      setClientes(clientes)
      exibirTabela
    }
    
    function selecionarCliente(cliente: Cliente) {
      setCliente(cliente)
      exibirFormulario
    }
    
    async function excluirCliente(cliente: Cliente) {
      await repo.excluir(cliente)
      obterTodos()
    }
    
    function novoCliente() {
      setCliente(Cliente.vazio())
      exibirFormulario
    }
    
    async function salvarCliente(cliente: Cliente) {
      await repo.salvar(cliente)
      obterTodos()
    }

    return {
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        tabelaVisivel,
        exibirTabela
    }
}