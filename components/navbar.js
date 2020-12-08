import styles from "../styles/Navbar.module.css"

export default function Navbar() {
    return (
        <header className={styles.mainNav}>
            <ul className={styles.navLinks}>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </header>
    )
}
