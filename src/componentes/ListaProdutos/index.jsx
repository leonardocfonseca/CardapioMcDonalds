import './ListaProdutos.css'
import { Produto } from '../Produto'

export function ListaProdutos({produtos, categoriaSelecionada, adicionarAoCarrinho }) {
    return (
        <section className='lista-produtos'>
            {
                produtos.filter(function (produto) {
                    return produto.tipo === categoriaSelecionada || categoriaSelecionada === 'todos'
                }).map(function (produto) {
                    return <Produto produto={produto} key={produto.id} adicionarAoCarrinho={adicionarAoCarrinho} />
                })
            }
        </section>
    )
}