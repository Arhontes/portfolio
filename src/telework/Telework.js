import React from 'react';
import style from './Telework.module.scss';
import Title from "../common/components/title/Title";
import Button from "../common/components/button/Button";


function Telework() {
    return (
        <div className={style.hireBlock}>
            <div className= {style.container} >
                <Title text={"I am available for Freelance"}/>
                <Button text={"Hire me"}/>
            </div>
        </div>
    );
}

export default Telework;