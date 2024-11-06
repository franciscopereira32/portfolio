import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";
import { useState } from "react";

export const ProjectCard = ({ 
    project : { title, imageSrc, description, skills, demo, source} },
    ) => {

    const [showElement, setShowElement] = useState(false)

    const toggleElement = () => {
        setShowElement(!showElement);
      };
    
      const elementStyle = {
        display: showElement ? 'block' : 'none'
      };

    return (
        <div className={styles.container}>
            <img 
                src={getImageUrl(imageSrc)} 
                alt={`Image of ${title}`} className={styles.image} />
                <h3 className={styles.title}>{title}</h3>
                <div>
                    <button onClick={toggleElement} className={styles.descriptionBtn}>Description</button>
                    <div style={elementStyle}>
                        <p className={styles.description}>{description}</p>
                    </div>
                </div>
                <ul className={styles.skills}>
                    {skills.map((skill, id) => {
                    return (
                        <li key={id} className={styles.skill}>
                            {skill}
                        </li>);
                })}
                </ul>
                <div className={styles.links}>
                    <a href={demo} className={styles.link}>Demo</a>
                    <a href={source} className={styles.link}>Source</a>
                </div>
        </div>
    );
};

