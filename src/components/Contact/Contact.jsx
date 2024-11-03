import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css"

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}> 
                <h2>Contact</h2>
                <p>Fell free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon"/>
                    <a href="mailto:mgfrank35@gmail.com">mgfrank35@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="Email icon"/>
                    <a href="https://www.linkedin.com/in/francisco-henrique-pereira-a8799612b">www.linkedin.com/in/francisco-henrique-pereira</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Email icon"/>
                    <a href="https://github.com/franciscopereira32">github.com/franciscopereira32</a>
                </li>
            </ul>
        </footer>
    );
};