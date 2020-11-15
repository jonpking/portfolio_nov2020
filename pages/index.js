import Head from "next/head"
import styles from "../styles/Home.module.css"
import Navbar from "../components/navbar.js"
import About from "../components/about.js"
import Projects from "../components/projects.js"
import Contact from "../components/contact.js"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jonathan King</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.pageContainer}>
        <Navbar />
        <div className={styles.aboutDiv}>
          <About />
        </div>
        <div className={styles.projectsDiv}>
          <Projects />
        </div>
        <div className={styles.contactDiv}>
          <Contact />
        </div>
      </main>
    </div>
  )
}
