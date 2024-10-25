import React from "react";
import styles from "./About.module.css"
import { getImageUrl } from "../../utils";

export const About = () => {
    return ( 
    <section className={styles.container}>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}><img src={getImageUrl("about/aboutImage.png")}
        alt= "Me sitting with a laptop" className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItems}>
                <img src={getImageUrl('about/cursorIcon.png')} 
                alt="cursor icon" />
                    <div className={styles.aboutItemText}>
                    <h3>Software Analyst</h3>
                    <p>I am a software analyst with experience in Android documentation and project management.</p>
                </div>
            </li>
            <li className={styles.aboutItems}>
                <img src={getImageUrl('about/serverIcon.png')} 
                alt="server icon" />
                    <div className={styles.aboutItemText}>
                    <h3>Java Developer</h3>
                    <p>I have experience as a Java developer specializing in test automation, as well as customizing and setting up Android devices.</p>
                </div>
            </li>
            <li className={styles.aboutItems}>
                <img src={getImageUrl('about/uiIcon.png')} 
                alt="UI icon" />
                    <div className={styles.aboutItemText}>
                    <h3>Log Debugging</h3>
                    <p>I have experience in bug debugging within Unix architecture, as well as using Android Debug Bridge (ADB) commands and Unix commands.</p>
                </div>
            </li>
            <li className={styles.aboutItems}>
                <img src={getImageUrl('about/settingsIcon.png')} 
                alt="settings icon" />
                    <div className={styles.aboutItemText}>
                    <h3>Electronics Technician</h3>
                    <p>I am an electronics technician with over 10 years of experience, including experience in Australia. I have extensive skills in hardware and for operation power tools.</p>
                </div>
            </li>
        </ul>
        </div>
    </section>
    );
 }