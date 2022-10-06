import React from 'react';
import styles from './Footer.module.scss';
import Title from "../common/components/title/Title";
import facebook from '../assets/images/react-icon.svg';


function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container} >
                <Title text={"Alex Betke"}/>
                <div className={styles.socialIcons}>
                    <div className={styles.socialIcon}>
                        <a href="">
                            <img src={facebook} alt=""/>
                        </a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a href="">
                            <img src={facebook} alt=""/>
                        </a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a href="">
                            <img src={facebook} alt=""/>
                        </a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a href="">
                            <img src={facebook} alt=""/>
                        </a>
                    </div>
                </div>
                <span className={styles.copyright}>2022 All Rights Reserved.</span>
            </div>
        </div>
    );
}

export default Footer;