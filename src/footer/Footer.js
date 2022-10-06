import React from 'react';
import styles from './Footer.module.scss';
import Title from "../common/components/title/Title";
import vkLogo from '../assets/images/vkLogo.svg';
import telegramLogo from '../assets/images/telegramLogo.svg';
import githubLogo from '../assets/images/githubLogo.svg'
import linkedinLogo from '../assets/images/linkedinLogo.svg';
import instagramLogo from '../assets/images/instagramLogo.svg';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container} >
                <Title text={"Alex Betke"}/>
                <div className={styles.socialIcons}>
                    <div className={styles.socialIcon}>
                        <a href="">
                            <img src={telegramLogo} alt=""/>
                        </a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a href="">
                            <img src={vkLogo} alt=""/>
                        </a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a href="">
                            <img src={githubLogo} alt=""/>
                        </a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a href="">
                            <img src={linkedinLogo} alt=""/>
                        </a>
                    </div>
                    <div className={styles.socialIcon}>
                        <a href="">
                            <img src={instagramLogo} alt=""/>
                        </a>
                    </div>
                </div>
                <span className={styles.copyright}>2022 All Rights Reserved.</span>
            </div>
        </div>
    );
}

export default Footer;