import styles from '../../compoments/Categorias/Categorias.module.css'
import Image from 'next/image'
import icone1 from "../../../public/assets/entrada.png";
import icone2 from "../../../public/assets/massa.png";
import icone3 from "../../../public/assets/carne.png";
import icone4 from "../../../public/assets/bebidas.png";
import icone5 from "../../../public/assets/salada.png";
import icone6 from "../../../public/assets/sobremesa.png";

const Categorias = () => {
    return (
      <>
      <div className={styles.categorias}>
        <button>
          <Image src={icone1} className={styles.icone} alt="ícone"/>
          Entradas</button>
        <button>
          <Image src={icone2} className={styles.icone} alt="ícone"/>
          Massas</button>
        <button>
          <Image src={icone3} className={styles.icone} alt="ícone"/>
          Carnes</button>
        <button>
          <Image src={icone4} className={styles.icone} alt="ícone"/>
          Bebidas</button>
        <button>
          <Image src={icone5} className={styles.icone} alt="ícone"/>
          Saladas</button>
        <button>
          <Image src={icone6} className={styles.icone} alt="ícone"/>
          Sobremesas</button>
      </div>   
      </>
    );
  }

  export default Categorias