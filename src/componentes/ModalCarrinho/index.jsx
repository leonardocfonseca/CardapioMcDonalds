import './ModalCarrinho.css'
import { IconeFechar } from '../Icones'
import { EstadoVazio } from '../EstadoVazio'
import { ProdutoCarrinho } from '../ProdutoCarrinho'
import { FinalizarPedido } from '../FinalizarPedido'

export function ModalCarrinho({ titulo, carrinho, alterarCarrinho, removerDoCarrinho, ModalAberto, fecharModal }) {
    
    if (!ModalAberto) {
        return null
    }

    const aumentarQuantidade = (produto) => {
        alterarCarrinho(prevState => {
            return prevState.map(p => {
                return p.id === produto.id ? {...p, quantidade: p.quantidade + 1 } : p
            })}
        )
    }


    const diminuirQuantidade = (produto) => {
       alterarCarrinho(prevState => {
            return prevState.map(p => {
                return p.id === produto.id && p.quantidade > 1 ? {...p, quantidade: p.quantidade - 1} : p
            })}
       )
    }

    const calcularPrecoTotalCarrinho = () => {
        let total = 0
        carrinho.forEach(produto => total += produto.preco * produto.quantidade)
        return total
    }

    const precoTotalCarrinho = calcularPrecoTotalCarrinho()

    return (
        <div className='modal-fundo'>
            <div className="modal-carrinho">
                <header className='topo-modal-carrinho'>
                    {titulo}
                    <button onClick={() => fecharModal(false)}>
                        <IconeFechar />
                    </button>
                </header>
                <div className='conteudo-modal-carrinho'>
                    {carrinho.length == 0 && <EstadoVazio />}

                    {carrinho.map(function (produto) {
                        return <ProdutoCarrinho produto={produto} key={produto.id} 
                        removerDoCarrinho={removerDoCarrinho} 
                        aoAumentar={() => aumentarQuantidade(produto)}
                        aoDiminuir={() => diminuirQuantidade(produto)}
                        />
                    })}
                </div>

                {carrinho.length > 0 && <FinalizarPedido precoTotalCarrinho={precoTotalCarrinho} carrinho={carrinho}/>}

            </div>
        </div>
    )
}