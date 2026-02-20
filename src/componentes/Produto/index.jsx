import './Produto.css'
import { IconeMais } from '../Icones'

export function Produto ({produto, adicionarAoCarrinho}) {
    return (
        <div className="produto">
            <img src={produto.imagem} className='produto-imagem' alt='imagem do produto'/>
            <div className='produto-descricao'>
                <h3>{produto.nome}</h3>
                <span>{produto.descricao}</span>
                <div className='produto-info'>
                    <p className='produto-preco'>R$ {produto.preco.toFixed(2)}</p>
                    <button className='botao-comprar' onClick={() => adicionarAoCarrinho(produto)}>
                        <IconeMais/>
                    </button>
                </div>
            </div>
        </div>
    )
}