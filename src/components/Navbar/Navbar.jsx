import React from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <nav className={Styles.navbar}>
            <a className={styles.title} href="/">Portfolio</a>
        {/* <div className={styles.menu}>
                <ul className={styles.menuItems}>
                    <li> 
                        <a href="#about">About</li></a>
                    </li>
                    <li> 
                        <a href="#experience">Experience</li></a>
                    </li>
                    <li> 
                        <a href="#projects">Projects</li></a>
                    </li>
                    <li> 
                    <a href="#contact">Contact</li></a>
                </li>
                </ul>
            </div>  */}
        </nav>
    )    
};