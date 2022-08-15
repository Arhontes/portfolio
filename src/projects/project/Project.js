import React from 'react';
import style from "./Project.module.css"

export const Project = (props) => {
    return (
        <div>
            <div className={style.project}>
                <div style={props.style} className={style.imgContainer}>
                    <button className={style.redirectButton}>About</button>
                </div>
                <div className={style.projectInfo}>
                    <h3 className={style.projectTitle}>{props.projectTitle}</h3>
                    <span className={style.projectDescription}>
                        {props.shortDescription}
                    </span>
                </div>

            </div>
        </div>
    );
};
