import './App.css'
import produtos from './produtos'
import { Topo } from './componentes/Topo'
import { Logo } from './componentes/Logo'
import { Botao } from './componentes/Botao'
import { IconeCarrinho } from './componentes/Icones'
import { Container } from './componentes/Container'
import { Titulo } from './componentes/Titulo'
import { ListaCategoria } from './componentes/ListaCategoria'
import { ListaProdutos } from './componentes/ListaProdutos'
import { NotificacaoCarrinho } from './componentes/NotificacaoCarrinho'
import { Rodape } from './componentes/Rodape'
import { ModalCarrinho } from './componentes/ModalCarrinho'
import { useState } from 'react'

function App() {

  const listaCategoria = ['todos', 'hambúrgueres', 'acompanhamentos', 'bebidas', 'sobremesas']

  const [categoriaSelecionada, setCategoriaSelecionada] = useState('todos')

  const [carrinho, setCarrinho] = useState([])

  const [modalCarrinhoAberto, setModalCarrinhoAberto] = useState(false)


  function selecionarCategoria(categoria) {
    setCategoriaSelecionada(categoria)
  }

  const alternarModal = () => {
    setModalCarrinhoAberto(!modalCarrinhoAberto)
  }

  function adicionarAoCarrinho(produto) {
    const produtoExiste = carrinho.some(p => p.id === produto.id)

    if (produtoExiste) {
      return setCarrinho(prevState => {
        return prevState.map(p => p.id === produto.id ? {...p, quantidade: p.quantidade + 1} : p)
      })
    }

    const produtoCarrinho = {
      ...produto,
      quantidade: 1
    }
    
    return setCarrinho((prevCarrinho) => ([...prevCarrinho, produtoCarrinho]))
  }

  function removerDoCarrinho(produto) {
    const novoCarrinho = carrinho.filter(p => produto.id !== p.id)
    return setCarrinho(novoCarrinho)
  }

  
  return (
    <main>
      <Topo>
        <Logo>
          McDonald's
        </Logo>
        <Botao aoClicar={alternarModal}>
          <IconeCarrinho /> Carrinho 
          <NotificacaoCarrinho carrinho={carrinho} />
        </Botao>
      </Topo>

      <Container>
        <ModalCarrinho titulo='Seu Carrinho'
          carrinho={carrinho}
          alterarCarrinho={setCarrinho}
          removerDoCarrinho={removerDoCarrinho}
          ModalAberto={modalCarrinhoAberto}
          fecharModal={alternarModal}
        />
        
        <Titulo>Nosso Cardápio</Titulo>

        <ListaCategoria listaCategoria={listaCategoria} 
          categoriaSelecionada={categoriaSelecionada} 
          aoSelecionar={selecionarCategoria}
        />

        <ListaProdutos produtos={produtos} 
          categoriaSelecionada={categoriaSelecionada}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
     
      </Container>

      <Rodape>
        © 2026 McDonald's - Developed by Leonardo
      </Rodape>
    </main>
  )
}

export default App