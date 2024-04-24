import Head from "next/head"
import "../styles/Home.module.css"
import {Categorias} from "../compoments/Categorias"
import {CampoBusca} from "../compoments/CampoDeBusca"
import CardProduto from "../compoments/Cards"

export default function Home() {

  return (
    <>
      <Head>
        <title>RESTAURANT</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="banner">
        <h1>Banner aqui</h1>
      </div>
      <Categorias />
      <CampoBusca />
      <h1>Cardápio</h1>
      <CardProduto />
    </>
  );
}