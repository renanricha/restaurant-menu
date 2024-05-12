import {produtos} from '../data/data-produtos.js'

export const filtrarProdutos = (categoria) => {
    return produtos.filter((produto) => produto.categoria === categoria)
}

export const buscarProdutos = (textoDigitado) => {
    return produtos.filter((produto) =>
        produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) || 
    produto.descricao.toLowerCase().includes(textoDigitado.toLowerCase())
)
}

export const produtosEntradas = filtrarProdutos('Entradas')