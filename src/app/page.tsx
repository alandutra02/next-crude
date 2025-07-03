import Image from "next/image";
import Corpo from "./Corpo";
import Titulo from "./Titulo";

export default function Home() {
  return (
    <div className={`
        flex h-screen justify-center items-center
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
    `}>
        
        <Corpo titulo="Cadastro Simples">
          <span>Conteudo</span>
        </Corpo>
    </div>
  )
}