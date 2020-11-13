import styles from "../styles/About.module.css"

export default function About() {
    return (
        <div className={styles.aboutHeaders}>
            <h1>
                Jonathan King
            </h1>
            <h2>
                Full-stack web developer with a passion for user friendly designs
            </h2>
            <button>
                View my work
            </button>
            <button>
                Get in touch
            </button>
        </div>
    )
}
