import produtos from "../data/data-produtos.js"
import estilos from "../styles/Home.module.css"
import CardProduto from "../compoments/Cards/index.jsx"

const listaProdutos = () => {
    
    return (
        <div className={estilos.lista}>
            {
            produtos.map((produto) => (
            <CardProduto nome={produto.nome} />
            ))
            }
        </div>
    )
}

export default listaProdutos