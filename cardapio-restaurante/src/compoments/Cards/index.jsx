import Image from "next/image";

const CardProduto = ({id, nome, categoria, preco, descricao, imagem}) => {
    return (
        <div>
            <figure>
                <Image src={imagem} alt={nome} />
            </figure>
            <div>
                <div>
                    <h3>{nome}</h3>
                    <small>{categoria}</small>
                    <p>{descricao}</p>
                </div>
                <span>{new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}.format(preco))}</span>
            </div>
        </div>
    );
};

export default CardProduto;