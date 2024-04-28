import Image from "next/image";

const CardProduto = (produto) => {
    return (
        <div>
            <figure>
                <Image src={produto.imagem} alt={produto.nome} />
            </figure>
            <div>
                <div>
                    <h3>{produto.nome}</h3>
                    <small>{produto.categoria}</small>
                    <p>{produto.descricao}</p>
                </div>
                <span>{new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}.format(produto.preco))}</span>
            </div>
        </div>
    );
};

export default CardProduto;