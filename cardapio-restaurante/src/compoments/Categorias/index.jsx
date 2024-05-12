import styles from '../../compoments/Categorias/Categorias.module.css'
import Image from 'next/image'
import icone1 from "../../../public/assets/entrada.png";
import icone2 from "../../../public/assets/massa.png";
import icone3 from "../../../public/assets/carne.png";
import icone4 from "../../../public/assets/bebidas.png";
import icone5 from "../../../public/assets/salada.png";
import icone6 from "../../../public/assets/sobremesa.png";

const Categorias = ({handleFiltro, botaoClicado}) => {
    return (
      <div className={styles.categorias}>
      <div className={styles.container_botoes}>
        <button className={botaoClicado === 'Entradas' ? styles.acenderBtn : styles.apagarBtn}
        onClick={() => handleFiltro("Entradas")}>
          <Image src={icone1} className={styles.icone} alt="ícone"/>
          Entradas</button>
        <button className={botaoClicado === 'Massas' ? styles.acenderBtn : styles.apagarBtn}
          onClick={() => handleFiltro("Massas")}>
          <Image src={icone2} className={styles.icone} alt="ícone"/>
          Massas</button>
        <button className={botaoClicado === 'Carnes' ? styles.acenderBtn : styles.apagarBtn}
          onClick={() => handleFiltro("Carnes")}>
          <Image src={icone3} className={styles.icone} alt="ícone"/>
          Carnes</button>
        <button className={botaoClicado === 'Bebidas' ? styles.acenderBtn : styles.apagarBtn}
          onClick={() => handleFiltro("Bebidas")}>
          <Image src={icone4} className={styles.icone} alt="ícone"/>
          Bebidas</button>
        <button className={botaoClicado === 'Saladas' ? styles.acenderBtn : styles.apagarBtn}
          onClick={() => handleFiltro("Saladas")}>
          <Image src={icone5} className={styles.icone} alt="ícone"/>
          Saladas</button>
        <button className={botaoClicado === 'Sobremesas' ? styles.acenderBtn : styles.apagarBtn}
          onClick={() => handleFiltro("Sobremesas")}>
          <Image src={icone6} className={styles.icone} alt="ícone"/>
          Sobremesas</button>
      </div>   
      </div>
    );
  }

  export default Categorias