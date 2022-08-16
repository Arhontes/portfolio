import React from 'react';
import style from './Skill.module.scss'


export function Skill(props) {

    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <div className={style.skillInfo}>
                <h3 className={style.skillTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>

        </div>
    );
}

