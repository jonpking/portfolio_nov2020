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
                    {props.project.tech.map((tech) => <li key={tech}>{tech}</li>)}
                </ul>
            </div>
            <div className={styles.projectLinks}>
                <a href={props.project.repoPath}>
                    <i className="fab fa-lg fa-github"></i>
                    View Repo
                    </a>
                <a href={props.project.livePath}>
                    <i className="fas fa-lg fa-link"></i>
                    Live Demo
                    </a>
            </div>
        </div>
    )
}
