import './FinalizarPedido.css'
import { Botao } from '../Botao'


export function FinalizarPedido({ precoTotalCarrinho, carrinho }) {

    const confirmarPedido = () => {
        let lista = []
        const string = 'Seu pedido foi confirmado!'
        const precoTotal = 'Preço Total: R$' + precoTotalCarrinho.toFixed(2)

        carrinho.forEach(p => {
            lista.push(p.nome, ' ' + p.quantidade + 'x' + '\n')
        })

        alert(string + '\n\n' + lista.join('') + '\n' + precoTotal)
    }

    return (
        <>
            <div className='total-modal-carrinho'>
                <span>Total: </span>
                <span className='valor-total-carrinho'>R$ {precoTotalCarrinho.toFixed(2)}</span>
            </div>
            <div className='botao-finalizar-pedido'>
                <Botao largura={'100%'} altura={'56px'} tamanhoFonte={'18px'} aoClicar={() => confirmarPedido()}>
                    Finalizar pedido
                </Botao>
            </div>
        </>
    )
}