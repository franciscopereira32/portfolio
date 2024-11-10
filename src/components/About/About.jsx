import React from "react";
import styles from "./About.module.css"
import { getImageUrl } from "../../utils";

export const About = () => {
    return ( 
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}><img src={getImageUrl("about/aboutImage.png")}
        alt= "Me sitting with a laptop" className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl('about/cursorIcon.png')} 
                alt="cursor icon" className={styles.icon} />
                    <div className={styles.aboutItemText}>
                    <h3>Software Analyst</h3>
                    <p>Software analyst with experience in Android documentation and project management.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl('about/serverIcon.png')} 
                alt="server icon" className={styles.icon} />
                    <div className={styles.aboutItemText}>
                    <h3>Java Developer</h3>
                    <p>Java developer specializing in test automation, as well as customizing and setting up Android devices.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl('about/uiIcon.png')} 
                alt="UI icon" className={styles.icon} />
                    <div className={styles.aboutItemText}>
                    <h3>Log Debugging</h3>
                    <p>Extensive experience in debugging bugs within Unix-based environments, with strong proficiency in using Android Debug Bridge (ADB) for device troubleshooting and debugging.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl('about/settingsIcon.png')} 
                alt="settings icon" className={styles.icon} />
                    <div className={styles.aboutItemText}>
                    <h3>Hardware Specialist</h3>
                    <p>Electronics Technician with over 10 years of experience, including expertise gained in Australia. I possess extensive skills in hardware maintenance and operating power tools.</p>
                </div>
            </li>
        </ul>
        </div>
    </section>
    );
 }