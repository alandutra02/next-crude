import Titulo from "./Titulo";

interface CorpoProps {
    titulo ?:  string;
    children: any;
}

export default function Corpo(props: CorpoProps) {
    return (
        <div className={`
            flex flex-col w-2/3
            bg-white text-gray-800 rounded-md
        `}>
            <Titulo>{props.titulo}</Titulo>
            <div className="p-6 text-1xl">
                {props.children}
            </div>
        </div>
    );
}
