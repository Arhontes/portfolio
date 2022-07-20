import React from 'react';
import style from "./Main.module.css"
import styleContainer from "../../src/common/styles/container.module.css"
function Main(props) {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                {/*introduction field*/}
                <div className={style.introduction}>
                    <span>Hi There</span>
                    <h1>I am Alexander Betke</h1>
                    <p>A React/Redux Frontend Developer</p>
                </div>

                {/*photo field*/}
                <div className={style.photo}>

                </div>
            </div>

        </div>
    );
}

export default Main;