import Head from "next/head"
import styles from "../styles/Home.module.css"
import { useState } from "react"
import {produtosEntradas, filtrarProdutos, buscarProdutos} from "../service"
import Categorias from "../compoments/Categorias"
import CampoBusca from "../compoments/CampoDeBusca"
import CardProduto from "../compoments/Cards"
import Banner from "../../public/assets/banner.png";
import Image from 'next/image';


export default function Home() {
  
  const [dadosFiltrados, setDadosFiltrados] = useState(produtosEntradas)
  const [textoBuscaDigitado, setTextoBuscaDigitado] = useState("")
const [botaoClicado, setBotaoClicado] = useState('Entradas')

  const handleFiltro = (categoria) => {
    setTextoBuscaDigitado("")
    setDadosFiltrados(filtrarProdutos(categoria))
    setBotaoClicado(categoria)
  }

  const handleBusca = (textoDigitado) => {
    setTextoBuscaDigitado(textoDigitado)
    textoDigitado.length >= 3 && setDadosFiltrados(buscarProdutos(textoDigitado))
    setBotaoClicado('')
  }


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
      <Image src={Banner} alt="banner" />
        <div className={styles.bannerCont}>
          <h1>RESTAURANT</h1>
          <p>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados</p>
        </div> 
      </div>
      <div className={styles.filtros}>
        <Categorias 
        handleFiltro={handleFiltro}
        botaoClicado={botaoClicado}
        />
        <CampoBusca 
        textoBuscaDigitado={textoBuscaDigitado}
        handleBusca={handleBusca}
        />
        <h1>Cardápio</h1>
      </div>
      <section className={styles.secao_cards}>
        <div className={styles.container_cards}>
        {dadosFiltrados.map((produto) => (
          <CardProduto key={produto.id}
          id={produto.id}
          nome={produto.nome}
          categoria={produto.categoria}
          preco={produto.preco}
          descricao={produto.descricao}
          imagem={produto.imagem} />
        ))
        }
        </div>
       
      </section>
    </>
  );
}