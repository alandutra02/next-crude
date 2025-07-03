import Image from "next/image";
import Corpo from "./Corpo";
import Cliente from "./core/Cliente";
import Tabela from "./Tabela";

export default function Home() {
  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Pedro', 54, '4')
  ]
  return (
    <div className={`
        flex h-screen justify-center items-center
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
    `}>
        
        <Corpo titulo="Cadastro Simples">
          <Tabela clientes={clientes}></Tabela>
        </Corpo>
    </div>
  )
}