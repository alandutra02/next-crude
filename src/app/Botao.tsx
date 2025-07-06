interface BotaoProps {
    className?: string
    children: any

}

export default function Botao(props: BotaoProps) {
   
    return (
        <button className={`
           
            text-white px-4 py-2 rounded-md
           
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}