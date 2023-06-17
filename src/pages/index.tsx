import Head from 'next/head'
import Header from './components/header'
import Carrossel from './components/carrossel'
import Rollers from './components/rollers'
import Products from './components/products'
import Collection from './components/collection'
import Footer from './components/footer'
import ModalCard from './components/modal';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Maeztra</title>
      </Head>
      <main
        className={`flex flex-col min-h-screen bg-[#FAFAFA]`}>
        <Header />
        <Carrossel />
        <Rollers />
        <Products />
        <Collection />
        <Footer />
        <ModalCard />
      </main>
    </div>
  )
}
