import styles from "../styles/Contact.module.css"

export default function Contact() {
    return (
        <div id="contact" className={styles.contactSection}>
            <div className={styles.contactCard}>
                <div className={styles.contactTitle}>
                    <h1>Jonathan King</h1>
                    <h2>Full-Stack Web Developer</h2>
                </div>
                <hr className={styles.hr} />
                <div className={styles.contactInfo}>
                    <p>
                        <i className={`fas fa-envelope-square`}></i>
                        <a href="mailto:jonpking@gmail.com">jonpking@gmail.com</a>
                    </p>
                    <p>
                        <i className={`fas fa-phone-square-alt`}></i>
                        <a href="tel:1-602-703-1741">(602)703-1741</a>
                    </p>
                    <p>
                        <i className={`${styles.linkedinIcon} fab fa-linkedin`}></i>
                        <a href="//linkedin.com/in/jonpking314">jonpking314</a>
                    </p>
                    <p>
                        <i className={`${styles.githubIcon} fab fa-github-square`}></i>
                        <a href="//github.com/jonpking">jonpking</a>
                    </p>
                </div>
            </div>
            <div className={styles.imageCard}>
                <img src="./images/self.jpg" />
            </div>
        </div>
    )
}
