import React from 'react';
import style from './Projects.module.scss'
import styleContainer from "../common/styles/container.module.css";
import {Project} from "./project/Project";
import Title from "../common/components/title/Title";
import todoImage from './../assets/image/todoList.jpg'
import social_network from './../assets/image/social_network.jpg'

export const Projects = () => {
    const shortDescription = "Lorem ipsum dolor sitsipsum dolor sitsipsum dolor sits dolor sits!"
    const social = {
        backgroundImage: `url(${social_network})`,
    }
    const todolist = {
        backgroundImage: `url(${todoImage})`
    }
    return (

            <div className={style.projectsBlock}>
                <div className={`${styleContainer.container} ${style.projectsContainer}`} >
                    <Title title={"Projects"}/>
                    <div className={style.projects}>
                        <Project style={social} projectTitle={"Social Network"} shortDescription={shortDescription}/>
                        <Project style={todolist} projectTitle={"TodoList"} shortDescription={shortDescription}/>
                        <Project projectTitle={"Converter"} shortDescription={shortDescription}/>
                        <Project projectTitle={"Calculator"} shortDescription={shortDescription}/>
                        <Project projectTitle={"Calculator"} shortDescription={shortDescription}/>
                    </div>
                </div>
            </div>
    );
};
