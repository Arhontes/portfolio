import React from 'react';
import styles from './Header.module.scss';
import Nav from "./nav/Nav";
import BurgerNav from "./burgerNav/BurgerNav";

const linkList = [{id:"main", to:"main",text:"Main"},{id:"skills",to:"skills",text:"Skills"},{id:"projects",to:"projects",text:"Projects"},{id:"contacts",to:"contacts",text:"Contacts"},]


function Header() {

    return (
        <div className={styles.header}>
            <Nav linkList={linkList} />
            <BurgerNav linkList={linkList}/>
        </div>
    );
}

export default Header;