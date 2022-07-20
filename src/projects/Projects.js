import React from 'react';
import style from './Projects.module.css'
import styleContainer from "../common/styles/container.module.css";
import {Project} from "./project/Project";

export const Projects = () => {
    const shortDescription = "Lorem ipsum dolor sits!"
    return (

            <div className={style.projectsBlock}>
                <div className={`${styleContainer.container} ${style.projectsContainer}`} >
                    <h2 className={style.title}>Projects</h2>
                    <div className={style.projects}>
                        <Project projectTitle={"Social Network"} shortDescription={shortDescription}/>
                        <Project projectTitle={"TodoList"} shortDescription={shortDescription}/>
                        <Project projectTitle={"Converter"} shortDescription={shortDescription}/>
                    </div>
                </div>
            </div>
    );
};
