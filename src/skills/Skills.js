import React from 'react';
import styles from './Skills.module.scss';
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import reactIcon from "./../assets/images/react-icon.svg";
import jsIcon from "./../assets/images/java-script.svg";
import htmlIcon from "./../assets/images/html-icon.svg";
import typescript from "./../assets/images/typescript.svg"
import api from "./../assets/images/api.svg"
import git from "./../assets/images/git.svg"
import sass from "./../assets/images/sass.svg"
import formik from "./../assets/images/formik.svg"
import test from "./../assets/images/test.svg";
import material from "./../assets/images/material-ui.svg";
import angular from "./../assets/images/angular.svg";
import node from "./../assets/images/node.svg";
import redux from "./../assets/images/redux.svg";

function Skills() {
    let react = reactIcon;
    let js = jsIcon;
    let html = htmlIcon;

    return (
        <div id={"skills"} className={styles.skillsBlock}>
            <div className={styles.container}>
                <Title text={"Skills"}/>
                <div className={styles.skills}>
                    <Skill title={"Js"}
                           icon={js}
                    />
                    <Skill title={"Ts"}
                           icon={typescript}
                    />
                    <Skill title={"Rest api"}
                           icon={api}
                    />
                    <Skill title={"git"}
                           icon={git}
                    />
                    <Skill title={"sass"}
                           icon={sass}
                    />
                    <Skill title={"formik"}
                           icon={formik}
                    />
                    <Skill title={"Unit Testing"}
                           icon={test}
                    />
                    <Skill title={"Material Ui"}
                           icon={material}
                    />
                    <Skill title={"html & Css"}
                           icon={html}
                    />

                    <Skill title={"Angular"}
                           icon={angular}
                    />
                    <Skill title={"Node Js"}
                           icon={node}
                    />
                    <Skill title={"Redux"}
                           icon={redux}
                    />
                    <Skill title={"React"}
                           icon={react}
                    />
                </div>
            </div>
        </div>
    );
}

export default Skills;