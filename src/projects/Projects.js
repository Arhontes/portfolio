import React from 'react';
import style from './Projects.module.scss';
import Project from './project/Project';
import Title from '../common/components/title/Title';
import todoImage from './../assets/images/todolist.jpg';
import socialImage from './../assets/images/social-network.jpg';
import flashCards from './../assets/images/flashCard.jpg'





function Projects() {
    const social = {
        backgroundImage: `url(${socialImage})`,
    };
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };
    const flashcards = {
        backgroundImage: `url(${flashCards})`,
    };

    return (
        <div id={"projects"} className={style.projectsBlock}>
            <div className={style.container} >
                <Title text={"Projects"}/>
                <div className={style.projects}>
                    <Project style={social} title={"Social network"} redirectTo="https://Arhontes.github.io/samurai-way-social-network"/>
                    <Project style={todolist} title={"Todo list"} redirectTo="https://Arhontes.github.io/todolist"/>
                    <Project style={flashcards} title={"Flash cards"} redirectTo="https://antont25.github.io/cards"/>
                </div>
            </div>
        </div>
    );
}

export default Projects;