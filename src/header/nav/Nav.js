import React from 'react';
import style from './Nav.module.scss';
import {HeaderLink} from "../../common/components/header-link/HeaderLink";


function Nav(props) {
    return (
        <div className={style.nav}>
            {props.linkList.map(el=><HeaderLink key={el.id} text={el.text} to={el.to}/>)}
        </div>
    );
}



export default Nav;