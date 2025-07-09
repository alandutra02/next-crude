/* import Cliente from "./Cliente";

export default interface ClienteRepositorio {
    salvar(cliente: Cliente): Promise<Cliente>
    excluir(cliente: Cliente): Promise<void>
    obterTodos(cliente: Cliente): Promise<Cliente[]>
} */

// src/app/core/ClienteRepositorio.ts
import Cliente from "./Cliente"

export default interface ClienteRepositorio {
  salvar(cliente: Cliente): Promise<Cliente>
  excluir(cliente: Cliente): Promise<void>
  obterTodos(): Promise<Cliente[]> // <-- Removido parâmetro desnecessário
}
