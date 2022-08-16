import React from 'react';
import styleContainer from "../common/styles/container.module.css";
import style from "./Telework.module.scss"
export const Telework = () => {

    return (
        <div className={style.teleWorkBlock}>
            <div className = {`${styleContainer.container} ${style.teleWorkContainer}`}>
                <h3 className={style.title}>I’m considering variants of a remote job</h3>
                <button className={style.redirectButton}>Hire me</button>
            </div>
        </div>

    );
};
