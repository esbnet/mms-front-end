import type { NextPage } from 'next'
import Image from "next/image";
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Casarão Estúdios</title>
      </Head>
      <Image className='logo-home' src="/images/apple-icon-180x180.png" alt="Logo" width="200" height="200" />
    </>
  )
}

export default Home
