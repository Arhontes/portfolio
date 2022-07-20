import React from 'react';
import style from './Skills.module.css'
import styleContainer from "../../src/common/styles/container.module.css"
import {Skill} from "./skill/Skill";

export function Skills(props) {
    const description = "Lorem ipsum dolor sit amet,consectetur adipisicing elit. Aspernatur beataedelectus!"
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`} >
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                        <Skill title={"JS"} description={description}/>
                        <Skill title={"React"} description={description}/>
                        <Skill title={"CSS"} description={description}/>
                </div>
            </div>
        </div>
    );
}

