import styles from "../styles/About.module.css"

export default function About() {
    return (
        <div id="about" className={styles.aboutSection}>
            <div className={styles.aboutContent}>
                <div className={styles.aboutText}>
                    <h1>
                        Jonathan King
                    </h1>
                    <h2>
                        Full-stack web developer with a passion
                        <br />
                        for user friendly designs
                    </h2>
                    <div>
                        <p>
                            Life long learner, adept problem solver,
                            experienced team player,
                            <br />
                            customer service expert,
                            skilled communicator,
                            <br />
                            enthusiastic gamer of
                            nearly every flavor.
                        </p>
                    </div>
                </div>
                <div className={styles.aboutButtons}>
                    <a href="#contact" className={`${styles.aboutButton} ${styles.contactButton}`}>Get in touch</a>
                    <a href="#projects" className={`${styles.aboutButton} ${styles.workButton}`}>View my work</a>
                </div>
            </div>
        </div>
    )
}
