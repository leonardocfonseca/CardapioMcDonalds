import { Categoria } from '../Categoria'
import './ListaCategoria.css'

export function ListaCategoria({ listaCategoria, categoriaSelecionada, aoSelecionar }) {
    return (
        <div className="lista-categorias">
            {listaCategoria.map((categoria, index) => {
                return <Categoria key={index}
                    categoria={categoria}
                    categoriaSelecionada={categoriaSelecionada}
                    aoSelecionar={aoSelecionar}
                />
            })}
        </div>
    )
}