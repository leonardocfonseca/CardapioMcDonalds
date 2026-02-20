import { IconeLixeira, IconeMais, IconeMenos } from '../Icones'
import { useState } from 'react'
import './ProdutoCarrinho.css'

export function ProdutoCarrinho({ produto, removerDoCarrinho, aoAumentar, aoDiminuir }) {

    const precoTotal = produto.preco * produto.quantidade

    return (
        <div className='produto-carrinho'>
            <div className="produto-carrinho-info">
                <img src={produto.imagem} alt={produto.nome} className='produto-carrinho-imagem' />
                <div className='produto-carrinho-descricao'>
                    <p>{produto.nome}</p>
                    {precoTotal > 0 && <p>R$ {precoTotal.toFixed(2)}</p>}
                    
                    <div className='produto-carrinho-quantidade'>
                        <button className='produto-botao-menos' onClick={() => aoDiminuir(produto)}>
                            <IconeMenos />
                        </button>

                        {produto.quantidade}

                        <button className='produto-botao-mais' onClick={() => aoAumentar(produto)}>
                            <IconeMais />
                        </button>
                    </div>
                </div>
                <button className='produto-botao-lixeira' onClick={() => removerDoCarrinho(produto)}>
                    <IconeLixeira />
                </button>
            </div>
        </div>
    )
}