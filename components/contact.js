import styles from "../styles/Contact.module.css"

export default function Contact() {
    return (
        <div className={styles.contactSection}>
            <div className={styles.contactCard}>
                <div className={styles.contactTitle}>
                    <h1>Jonathan King</h1>
                    <h2>Full-Stack Web Developer</h2>
                </div>
                <hr className={styles.hr} />
                <div className={styles.contactInfo}>
                    <p><i className={`fas fa-envelope-square`}></i>jonpking@gmail.com</p>
                    <p><i className={`fas fa-phone-square-alt`}></i>(602)703-1741</p>
                    <p><i className={`${styles.linkedinIcon} fab fa-linkedin`}></i>linkedin.com/in/jonpking314</p>
                    <p><i className={`${styles.githubIcon} fab fa-github-square`}></i>github.com/jonpking</p>
                </div>
            </div>
            <div className={styles.imageCard}>
                <img src="./images/self.jpg" />
            </div>
        </div>
    )
}
