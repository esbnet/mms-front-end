import type { NextPage } from 'next'
import Layout from './components/Layout'

import Head
  from 'next/head'
import Content from './components/Content'
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Casarão Estúdios</title>
      </Head>
    </>
  )
}

export default Home
