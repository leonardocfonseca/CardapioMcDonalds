import './NotificacaoCarrinho.css'

export function NotificacaoCarrinho({ carrinho }) {

    const qntdProdutos = carrinho.reduce((total, produto) => total + produto.quantidade, 0)

    if (qntdProdutos !== 0) {
        return (
            <span className='notificacao-carrinho'>
                {qntdProdutos}
            </span>
        )
    }
}