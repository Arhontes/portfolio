import React from 'react';
import style from './Projects.module.scss';
import Project from './project/Project';
import Title from '../common/components/title/Title';
import todoImage from './../assets/images/todolist.jpg';
import socialImage from './../assets/images/social-network.jpg';
import flashCards from './../assets/images/flashCard.jpg'


const projectsData = [
    {
        style: {
            backgroundImage: `url(${socialImage})`,
        },
        title: "Social network",
        redirectTo: "https://Arhontes.github.io/samurai-way-social-network",
    },
    {
        style: {
            backgroundImage: `url(${todoImage})`,
        },
        title: "Todo list",
        redirectTo: "https://Arhontes.github.io/TodoList",
    },
    {
        style: {
            backgroundImage: `url(${flashCards})`,
        },
        title: "Flash cards",
        redirectTo: "https://tolkachev-a.github.io/cards/#/login",
    },
]


function Projects() {

    return (
        <div id={"projects"} className={style.projectsBlock}>
            <div className={style.container}>
                <Title text={"Projects"}/>
                <div className={style.projects}>
                    {projectsData.map(el=><Project style={el.style} title={el.title} redirectTo={el.redirectTo}/>)}
                </div>
            </div>
        </div>
    );
}

export default Projects;