import React from 'react';
import style from './Skills.module.scss'
import styleContainer from "../../src/common/styles/container.module.css"
import {Skill} from "./skill/Skill";
import Title from "../common/components/title/Title";

export function Skills(props) {
    const description = "Lorem ipsum dolor sit amet,consectetur adipisicing elit. Aspernatur beataedelectus!"
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`} >
                <Title title={"Skills"}/>
                <div className={style.skills}>
                        <Skill title={"JS"} description={description}/>
                        <Skill title={"React"} description={description}/>
                        <Skill title={"CSS"} description={description}/>
                        <Skill title={"Redux"} description={description}/>
                        <Skill title={"StoryBook"} description={description}/>
                        <Skill title={"HTML"} description={description}/>
                        <Skill title={"Git"} description={description}/>
                        <Skill title={"Github"} description={description}/>
                        <Skill title={"RESTful APIs"} description={description}/>
                        <Skill title={"SASS"} description={description}/>
                </div>
            </div>
        </div>
    );
}

