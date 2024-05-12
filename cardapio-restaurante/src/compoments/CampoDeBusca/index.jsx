import styles from "./CampoDeBusca.module.css"
import Image from 'next/image'
import Lupa from '../../../public/assets/lupa.png'

const CampoBusca = ({textoBuscaDigitado, handleBusca}) => {
    return (
      <div className={styles.container}>
        <Image className={styles.icone} src={Lupa} alt="icone"/>
        <input
          type="text"
          value={textoBuscaDigitado}
          onChange={(event) => handleBusca(event.target.value)}
          placeholder="Pesquise aqui um dos pratos do nosso cardápio"
        />
      </div>
    );
  }

  export default CampoBusca