import Head from 'next/head'
import Join from '../components/Join';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hipo Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Join />
    </div>
  )
}
