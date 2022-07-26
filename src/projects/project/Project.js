import React from 'react';
import style from './Project.module.scss';
import Button from "../../common/components/button/Button";




function Project(props) {


    return (
        <div className={style.project}>
            <div className={style.image} style={props.style}>
                <Button redirectTo={props.redirectTo} text={"view"} />
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
            </div>
        </div>
    );
}

export default Project;