import React from 'react';
import style from "./Project.module.css"

export const Project = (props) => {
    return (
        <div>
            <div className={style.project}>
                <div className={style.imgContainer}>
                    <button className={style.redirectButton}>About</button>
                </div>
                <span className={style.projectTitle}>{props.projectName}</span>
                <span className={style.projectDescription}>{props.shortDescription}</span>
            </div>
        </div>
    );
};
