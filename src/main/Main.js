import React from 'react';
import styles from './Main.module.scss';
import MouseAttractionPartical from "../common/components/MouseAttraction-Partical";



function Main() {
    return (
        <div className={styles.mainBlock}>
            <MouseAttractionPartical />
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <span>Hi There</span>
                    <span>I am Alex <span>Betke</span></span>
                    <h1>Frontend Developer.</h1>
                </div>
                <div className={styles.photo}>
                    <div className={styles.image}>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Main;