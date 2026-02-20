import './Categoria.css'

export function Categoria({ categoria, aoSelecionar, categoriaSelecionada}) {

    return (
        <button className={categoriaSelecionada === categoria ? 'categoria-selecionada' : 'categoria'} onClick={() => aoSelecionar(categoria)} >
            {categoria}
        </button>
    )
}