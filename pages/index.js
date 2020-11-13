import Head from "next/head"
import styles from "../styles/Home.module.css"
import Navbar from "../components/navbar.js"
import About from "../components/about.js"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jonathan King</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.pageContainer}>
        <Navbar />
        <About />
      </main>

    </div>
  )
}
