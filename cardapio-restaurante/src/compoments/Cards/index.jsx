import Image from "next/image"
import styles from "./Cards.module.css"

const CardProduto = ({id, nome, categoria, preco, descricao, imagem}) => {
    return (
        <div className={styles.container}>
            <figure>
                <Image src={imagem} alt={nome} />
            </figure>
            <div>
                <div className={styles.container_informacoes}>
                    <h3>{nome}</h3>
                    <small>{categoria}</small>
                    <p>{descricao}</p>
                </div>
                <span>{new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(preco)}</span>
            </div>
        </div>
    );
};

export default CardProduto;