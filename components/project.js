import { loadGetInitialProps } from "next/dist/next-server/lib/utils"
import styles from "../styles/Project.module.css"

export default function Projects(props) {
    return (
        <div className={styles.projectCard}>
            <div className={styles.projectTitle}>
                <h3>{props.project.name}</h3>
            </div>
            <div className={styles.projectImage}>
                <img src={props.project.imagePath}></img>
            </div>
            <div className={styles.projectDescription}>
                <p>
                    {props.project.description}
                </p>
            </div>
            <div className={styles.projectTech}>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>NextJS</li>
                    <li>MongoDB</li>
                    <li>Node</li>
                </ul>
            </div>
            <div className={styles.projectLinks}>
                <a href="">
                    <i className="fab fa-lg fa-github"></i>
                    View Repo
                    </a>
                <a href="">
                    <i className="fas fa-lg fa-link"></i>
                    Live Demo
                    </a>
            </div>
        </div>
    )
}
