import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"

export const Hero = () => {
    return  (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Francisco</h1>
            <p className={styles.description}> 
                I am a software analist with 2 years of experience of software 
                management, android documentation and java developepment. 
                I am as well a electronics technician graduate with 10 years of
                experience.
            </p>
            <a href="assets\hero\Francisco-Pereira.pdf" download className={styles.contactBtn}>Resume
                <img  src={getImageUrl("hero/vector.png")}className={styles.imageBtn}/>
            </a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
    </section>
    );
};