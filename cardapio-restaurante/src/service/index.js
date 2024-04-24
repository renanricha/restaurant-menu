import produtos from "../data/data-produtos.js"
import estilos from "../styles/Home.module.css"

const listaProdutos = () => {
    
    return (
        <div className={estilos.lista}>
            {
            produtos.map((produto) => (
            <ProdutoExibir
            key={produto.id}
            nome={produto.nome}
            />
            ))
            }
        </div>
    )
}

export default listaProdutos