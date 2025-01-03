import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";


export const Projects = () => {
    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {projects.map((project, id) => {
                        return <ProjectCard key={id} project={project}/>;
                    })}
            </div>
            <div className={styles.gitlinks}>
                <a href="https://github.com/franciscopereira32?tab=repositories" className={styles.gitlink}>All Projects</a>
            </div>
        </section>
    );
};
