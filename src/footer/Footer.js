import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../common/styles/container.module.css";

export function Footer(props) {
    return (
        <footer className={style.footerBlock}>
                <div className = {`${styleContainer.container} ${style.footerContainer}`}>
                    <h3 className={style.title}>Alexander Betke</h3>
                    <div className={style.socialContainer}>
                        <div className={style.social}></div>
                        <div className={style.social}></div>
                        <div className={style.social}></div>
                        <div className={style.social}></div>
                    </div>
                    <span>© 2022 All rights reserved </span>
                </div>
        </footer>
    );
}

