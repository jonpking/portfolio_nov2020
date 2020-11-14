import styles from "../styles/About.module.css"

export default function About() {
    return (
        <div className={styles.aboutSection}>
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
                            experienced team player, customer service expert,
                            skilled communicator, and enthusiastic gamer of
                            nearly every flavor.
                        </p>
                    </div>
                </div>
                <div className={styles.aboutButtons}>
                    <button className={styles.aboutButton}>View my work</button>
                    <button className={styles.aboutButton}>Get in touch</button>
                </div>
            </div>
        </div>
    )
}
