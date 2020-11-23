import styles from "../styles/Projects.module.css"
import Project from "../components/project.js"

export default function Projects() {
    return (
        <div id="projects" className={styles.projectsSection}>
            <div className={styles.projectsCardWrapper}>
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        </div>
    )
}
