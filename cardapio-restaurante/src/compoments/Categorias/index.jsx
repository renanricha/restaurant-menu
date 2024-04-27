import styles from '../../compoments/Categorias/Categorias.module.css'
import Image from 'next/image'
import icone1 from "../../../public/assets/entrada.png";
import icone2 from "../../../public/assets/massa.png";
import icone3 from "../../../public/assets/carne.png";
import icone4 from "../../../public/assets/bebidas.png";
import icone5 from "../../../public/assets/salada.png";
import icone6 from "../../../public/assets/sobremesa.png";

const Categorias = () => {
  const handleFiltrarCategoria = (categoria) => {

  }
    return (
      <>
      <div className={styles.categorias}>
        <button onClick={handleFiltrarCategoria('Entradas')}>
          <Image src={icone1} className={styles.icone} alt="ícone"/>
          Entrada</button>
        <button onClick={handleFiltrarCategoria('Massas')}>
          <Image src={icone2} className={styles.icone} alt="ícone"/>
          Massas</button>
        <button onClick={handleFiltrarCategoria('Carnes')}>
          <Image src={icone3} className={styles.icone} alt="ícone"/>
          Carnes</button>
        <button onClick={handleFiltrarCategoria('Bebidas')}>
          <Image src={icone4} className={styles.icone} alt="ícone"/>
          Bebidas</button>
        <button onClick={handleFiltrarCategoria('Saladas')}>
          <Image src={icone5} className={styles.icone} alt="ícone"/>
          Saladas</button>
        <button onClick={handleFiltrarCategoria('Sobremesas')}>
          <Image src={icone6} className={styles.icone} alt="ícone"/>
          Sobremesas</button>
      </div>   
      </>
    );
  }

  export default Categorias