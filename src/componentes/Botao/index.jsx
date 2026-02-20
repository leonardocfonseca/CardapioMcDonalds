import './Botao.css'

export function Botao({children, aoClicar, largura, altura, tamanhoFonte}) {   
    
    const customStyle = {
        width: largura,
        height: altura,
        fontSize: tamanhoFonte
    }

    return (
        <button className='botao-carrinho' onClick={() => aoClicar(true)} style={customStyle}>
            {children}
        </button>
    )
}