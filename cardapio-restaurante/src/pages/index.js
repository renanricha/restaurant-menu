import Head from "next/head"
import styles from "../styles/Home.module.css"
import Categorias from "../compoments/Categorias"
import CampoBusca from "../compoments/CampoDeBusca"
import CardProduto from "../compoments/Cards"


export default function Home() {

  return (
    <>
      <Head>
        <title>RESTAURANT</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Poppins&display=swap" rel="stylesheet" />
      </Head>
      <div className={styles.banner}>
        <div className={styles.bannerCont}>
          <h1>RESTAURANT</h1>
          <p>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados</p>
        </div> 
      </div>
      <div className={styles.filtros}>
        <Categorias />
        <CampoBusca />
        <h1>Cardápio</h1>
      </div>
      <CardProduto />
    </>
  );
}