import styles from "../styles/About.module.css"

export default function About() {
    return (
        <div className={styles.aboutSection}>
            <div className={styles.aboutHeadersAndImageDiv}>
                <div className={styles.aboutHeaders}>
                    <h1>
                        Jonathan King
                    </h1>
                    <h2>
                        Full-stack web developer with a passion
                        <br />
                        for user friendly designs
                    </h2>
                </div>
            </div>
            <div className={styles.aboutButtonsAndTextDiv}>
                <div className={styles.aboutButtons}>
                    <button className={styles.aboutButton}>View my work</button>
                    <button className={styles.aboutButton}>Get in touch</button>
                </div>
                <div>
                    <p>Life long learner, skilled problem solver,
                    <br />
                    communication and customer service expert,
                    <br />
                    experienced team player, strong work ethic,
                    <br />
                    and enthusiastic gamer of nearly every flavor.</p>
                </div>
            </div>
        </div>
    )
}
