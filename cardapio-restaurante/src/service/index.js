import produtos from "../data/data-produtos.js"
import estilos from "../styles/Home.module.css"

const ListaProdutos = () => {
    const produtosFiltrados = produtos.filter(
        (produto) => produto.id > 0
    )
    return (
        <div className={estilos.lista}>
            {produtosFiltrados.map((produto) => (
            <ProdutoExibir
            key={produto.id}
            nome={produto.nome}
            />
            ))}
        </div>
    )
}

export default ListaProdutos