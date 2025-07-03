import { PropsWithChildren } from 'react'
export default function Titulo(props: PropsWithChildren) {
    return (
        <div className='flex flex-col justify-center'>
            <h1 className='px-5 py-7 text-2xl'>
                {props.children}
            </h1>
            <hr className='border-2 border-purple-500'/>
        </div>
    )
}