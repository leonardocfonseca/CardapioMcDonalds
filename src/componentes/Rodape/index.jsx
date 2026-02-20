import './Rodape.css'


export function Rodape({children}) {
    return (
        <footer className='rodape'>
            <p>{children}</p>
        </footer>
    )
}