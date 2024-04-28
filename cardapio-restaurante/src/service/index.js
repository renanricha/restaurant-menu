import {produtos} from '../data/data-produtos.js'

export const filtrarProdutos = (categoria) => {
    return produtos.filter((produto) => produto.categoria === categoria)
}

export const produtosEntradas = filtrarProdutos('Entradas')