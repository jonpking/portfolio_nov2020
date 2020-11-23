import styles from "../styles/Projects.module.css"
import Project from "../components/project.js"
import data from "../projects.json"

export default function Projects() {
    return (
        <div id="projects" className={styles.projectsSection}>
            <div className={styles.projectsCardWrapper}>
                {
                    data.map((project) => <Project project={project} />)
                }
            </div>
        </div>
    )
}
