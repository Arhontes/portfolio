import React from 'react';
import style from "./Main.module.scss"
import styleContainer from "../../src/common/styles/container.module.css"
function Main(props) {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                {/*introduction field*/}
                <div className={style.introduction}>
                    <span className={style.hello} >Hi There</span>
                    <h1 className={style.myName}>I am Alexander Betke</h1>
                    <p className={style.specialization}>A React/Redux Frontend Developer</p>
                </div>

                {/*photo field*/}
                <div className={style.photo}>

                </div>
            </div>

        </div>
    );
}

export default Main;