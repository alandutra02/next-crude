import Botao from './Botao'
import Entrada from './Entrada'
import Cliente from './core/Cliente'
import { useState } from 'react'
interface FormularioProps {
    cliente: Cliente
}
export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return (
        <div>
            {id ? (
                <Entrada
                    somenteLeitura
                    texto="Código"
                    valor={id}
                    className='mb-4'
                    >
                </Entrada>
            ) : false} 
            <Entrada 
                texto="Nome"
                valor={nome}
                valorMudou={setNome}
                className='mb-4'>
            </Entrada>
            <Entrada
                texto="Idade"
                tipo="number" 
                valor={idade}
                valorMudou={setIdade}
                className='mb-4'>
            </Entrada>
            <div className='flex justify-end mt-7'>
                <Botao className='bg-gradient-to-r from-blue-400 to-blue-700
                     hover:from-blue-500 hover:to-blue-800 mr-2'>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao className='bg-gradient-to-r from-gray-400 to-gray-700
                     hover:from-gray-500 hover:to-gray-800'>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}